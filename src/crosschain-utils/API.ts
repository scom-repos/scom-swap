import {
  getAPI
} from "../global/index";
import {
  ProviderConfigMap,
  baseRoute,
  BridgeVaultGroupList,
  getBridgeVaultVersion,
  crossChainNativeTokenList,
  CrossChainAddressMap,
  getNetworkInfo,
  State,
  ProviderConfig,
  MockOracleMap,
  Market,
} from "../store/index"
import { Wallet, BigNumber, Erc20, Utils, TransactionReceipt, Contracts } from "@ijstech/eth-wallet";
import { Contracts as OpenSwapContracts } from "@scom/oswap-openswap-contract";
import { Contracts as CrossChainContracts } from "@scom/oswap-cross-chain-bridge-contract";
import { Contracts as SolidityContracts } from "@scom/oswap-chainlink-contract";
import {
  CreateBridgeVaultOrderParams,
  GetAvailableRouteOptionsParams,
  IBridgeFees,
  IBridgeVault,
  IBridgeVaultBond,
  ICrossChainRouteFromAPI,
  ICrossChainRouteResult,
  SwapExactETHForTokensParams,
  SwapExactTokensForTokensParams,
  TradeFeeMap,
} from "./crosschain-utils.types";
import { DefaultTokens, ITokenObject, tokenStore } from "@scom/scom-token-list";
import { nullAddress } from "@ijstech/eth-contract";

const routeAPI = baseRoute + '/trading/v1/cross-chain-route';
const GetBridgeVaultAPI = baseRoute + '/trading/v1/bridge-vault';
const GetBondsInBridgeVaultAPI = baseRoute + '/trading/v1/bonds-by-chain-id-and-vault-troll-registry'

const getTokenByVaultAddress = (chainId: number, vaultAddress: string) => {
  if (!chainId) return null;
  let vaultTokenMap = getVaultTokenMap();
  let tokenAddress = vaultTokenMap[chainId][vaultAddress.toLowerCase()];
  let tokenMap = getTargetChainTokenMap(chainId);
  let token = tokenMap[tokenAddress?.toLowerCase()];
  return token;
}

const getTargetChainTokenMap = (chainId: number) => {
  let tokenList = tokenStore.getTokenList(chainId);
  tokenList = tokenList.map(v => v = { ...v, address: v.address ? v.address.toLowerCase() : undefined }).sort((a, b) => {
    if (a.symbol.toLowerCase() < b.symbol.toLowerCase()) { return -1; }
    if (a.symbol.toLowerCase() > b.symbol.toLowerCase()) { return 1; }
    return 0;
  });
  let tokenMap: { [key: string]: ITokenObject } = {};
  Object.values(tokenList).forEach((v, i) => {
    if (v.isNative) v = { ...crossChainNativeTokenList[chainId], chainId, isNative: true }
    tokenMap["" + v.address] = v;
  });
  return tokenMap;
}

const initCrossChainWallet = (chainId: number) => {
  const wallet = Wallet.getClientInstance();
  const networkInfo = getNetworkInfo(chainId);
  let rpcEndpoint = networkInfo.rpcUrls[0]
  let crossChainWallet = new Wallet(rpcEndpoint, { address: wallet.address })
  return crossChainWallet
}

const getTargetChainTokenInfoObj = async (chainId: number) => {
  let targetChainWallet = initCrossChainWallet(chainId)
  let balances = {}

  let tokenMap = getTargetChainTokenMap(chainId);
  if (!chainId || !DefaultTokens[chainId]) return { tokenMap, balances };
  const tokenList = tokenStore.getTokenList(chainId).filter((token) => token.address);
  const erc20TokenList = tokenList.filter(token => token.address);
  const nativeToken = tokenList.find(token => !token.address);
  try {
    const erc20 = new Contracts.ERC20(targetChainWallet);
    const data = targetChainWallet.encodeFunctionCall(erc20, 'balanceOf', [targetChainWallet.address]);
    const result = await targetChainWallet.multiCall(erc20TokenList.map(v => {
      return {
        to: v.address,
        data
      }
    }))
    if (result) {
      for (let i = 0; i < erc20TokenList.length; i++) {
        const token = erc20TokenList[i];
        if (token.address) {
          balances[token.address.toLowerCase()] = new BigNumber(result.results[i]).shiftedBy(-token.decimals).toFixed()
        }
      }
      if (nativeToken) {
        let balance = (await targetChainWallet.balance).toFixed();
        balances[nativeToken.symbol] = balance;
      }
    } else {
      let promises: Promise<void>[] = [];
      promises.push(...tokenList.map(async (token, index) => {
        try {
          if (token.address) {
            let erc20 = new Erc20(targetChainWallet, token.address.toLowerCase(), token.decimals);
            let balance = (await erc20.balance).toFixed();
            balances[token.address.toLowerCase()] = balance;
          }
          else {
            let balance = (await targetChainWallet.balance).toFixed();
            balances[token.symbol] = balance;
          }
        } catch (error) {
          balances[token.address ? token.address.toLowerCase() : token.symbol] = '0';
        }
      }));
      await Promise.all(promises);
    }
  } catch (error) { }

  return {
    tokenMap,
    balances
  };
}

const getVaultTokenMap = () => {
  let vaultTokenMap: any = {};
  BridgeVaultGroupList.forEach((vaultGroup) => {
    for (const [chainId, vault] of Object.entries(vaultGroup.vaults)) {
      vaultTokenMap[chainId] = vaultTokenMap[chainId] || {};
      vaultTokenMap[chainId][vault.vaultAddress.toLowerCase()] = vault.tokenAddress.toLowerCase();
    }
  });
  return vaultTokenMap;
}

const getBridgeVault = async (chainId: number, vaultAddress: string): Promise<IBridgeVault> => {
  let res = await getAPI(GetBridgeVaultAPI, { chainId, address: vaultAddress });
  return res;
}

const getBondsInBridgeVault = async (state: State, chainId: number, vaultTrollRegistry: string, version: string = getBridgeVaultVersion(state.getChainId())): Promise<IBridgeVaultBond[]> => {
  let res = await getAPI(GetBondsInBridgeVaultAPI, { version, chainId, vaultTrollRegistry });
  return Array.isArray(res) ? res : [];
}

// Bridge Swap
const createBridgeVaultOrder: (state: State, params: CreateBridgeVaultOrderParams) => Promise<{
  receipt: TransactionReceipt | null;
  error: Record<string, string> | null;
}> = async (state: State, params: CreateBridgeVaultOrderParams) => {
  try {
    const { vaultAddress, targetChainId, tokenIn, tokenOut, amountIn, minAmountOut, sourceRouteInfo } = params;
    const wallet = Wallet.getClientInstance();
    const transactionDeadlineInMinutes = state.transactionDeadline;
    const transactionDeadline = Math.floor(Date.now() / 1000 + (transactionDeadlineInMinutes * 60));
    const slippageTolerance = state.slippageTolerance;

    const amountInTokenAmount = Utils.toDecimals(amountIn, tokenIn.decimals);
    const minAmountOutTokenAmount = Utils.toDecimals(minAmountOut, tokenOut.decimals).dp(0, 1);

    if (tokenOut.isNative) {
      tokenOut.address = nullAddress;
    }

    const newOrder = {
      peerChain: targetChainId,
      inAmount: amountInTokenAmount,
      outToken: tokenOut.address || "",
      minOutAmount: minAmountOutTokenAmount,
      to: wallet.address,
      expire: transactionDeadline
    }

    const chainId = await wallet.getChainId();
    const sourceVaultToken = getTokenByVaultAddress(chainId, vaultAddress);

    let receipt;
    if (sourceRouteInfo) {
      const wrapperAddress = CrossChainAddressMap[chainId].wrapperAddress;
      const wrapperContract = new CrossChainContracts.OSWAP_RouterVaultWrapper(wallet, wrapperAddress);
      if (!sourceVaultToken?.decimals) {
        throw new Error("Missing Source Vault Token Decimals");
      }

      newOrder.inAmount = new BigNumber(sourceRouteInfo.amountOut).shiftedBy(sourceVaultToken.decimals).times(1 - slippageTolerance / 100).dp(0, 1);

      if (tokenIn.isNative) {
        const swapExactETHForTokenParams: SwapExactETHForTokensParams = {
          pair: sourceRouteInfo.pairs,
          vault: vaultAddress,
          deadline: transactionDeadline,
          order: newOrder
        };
        receipt = await wrapperContract.swapExactETHForTokens(swapExactETHForTokenParams, Utils.toDecimals(amountIn, 18));
      } else {
        const swapExactTokenForTokensParams: SwapExactTokensForTokensParams = {
          pair: sourceRouteInfo.pairs,
          vault: vaultAddress,
          amountIn: Utils.toDecimals(amountIn, tokenIn.decimals),
          deadline: transactionDeadline,
          order: newOrder
        };
        receipt = await wrapperContract.swapExactTokensForTokens(swapExactTokenForTokensParams);
      }
    } else {
      const vaultContract = new CrossChainContracts.OSWAP_BridgeVault(wallet, vaultAddress);
      receipt = await vaultContract.newOrder(newOrder);
    }
    return { receipt, error: null };
  } catch (error) {
    return { receipt: null, error: error as any };
  }
}

const composeRouteObjBridge = async (routeObj: any, firstInput: BigNumber, vaultTokenToTargetChain: BigNumber, bridgeFees: IBridgeFees, slippageTolerance: number) => {
  let fromAmount = new BigNumber(0);
  let toAmount = new BigNumber(0);
  let minReceivedMaxSold = 0;
  let priceImpact = 0;
  let price = 0;
  let priceSwap = 0;
  let tradeFee = 0;
  let fees: IBridgeFees

  let isApproveButtonShown = false;

  try {
    toAmount = new BigNumber(routeObj.targetRouteObj.amountOut);
    if (toAmount.isZero()) return null;
    minReceivedMaxSold = toAmount.times(1 - slippageTolerance / 100).toNumber();
    fromAmount = firstInput;
    price = new BigNumber(fromAmount).div(toAmount).toNumber();
    priceSwap = new BigNumber(1).div(price).toNumber();

    // Fee Structure - in InToken
    let sourceRoutingPrice = routeObj.sourceRouteObj ? routeObj.sourceRouteObj.price : 1
    fees = {
      sourceRouteLiquidityFee: routeObj.sourceRouteObj ? new BigNumber(routeObj.sourceRouteObj.tradeFee).times(fromAmount).toNumber() : 0,
      targetRouteLiquidityFee: new BigNumber(routeObj.targetRouteObj.tradeFee).times(vaultTokenToTargetChain).times(sourceRoutingPrice).toNumber(),
      baseFee: new BigNumber(bridgeFees.baseFee).times(sourceRoutingPrice).toNumber(),
      transactionFee: new BigNumber(bridgeFees.transactionFee).times(sourceRoutingPrice).toNumber(),
      protocolFee: new BigNumber(bridgeFees.protocolFee).times(sourceRoutingPrice).toNumber(),
      imbalanceFee: new BigNumber(bridgeFees.imbalanceFee).times(sourceRoutingPrice).toNumber()
    }

    tradeFee = Object.values(fees).reduce((a, b) => a + b)

  } catch (err) {
    console.log('err', err)
    return null;
  }

  return {
    ...routeObj,
    price,
    priceSwap,
    fromAmount,
    toAmount,
    priceImpact,
    tradeFee,
    fees,
    minReceivedMaxSold,
    isApproveButtonShown
  };
}

const getExtendedRouteObjDataForDirectRoute = async (bestRouteObj: any, swapPrice: BigNumber) => {
  let fee = new BigNumber(0)
  let priceImpact = new BigNumber(0);
  let extendedRouteObj: any = {
    pairs: bestRouteObj.pairs,
    market: bestRouteObj.market,
    bestRoute: bestRouteObj.route,
    priceImpact: priceImpact,
    price: swapPrice.toFixed(),
    tradeFee: fee.toFixed(),
  }
  return extendedRouteObj
}

const checkIsApproveButtonShown = async (state: State, tokenIn: ITokenObject, fromInput: BigNumber, address: string) => {
  if (!state.isRpcWalletConnected()) return false;
  const wallet = Wallet.getClientInstance();
  let erc20 = new OpenSwapContracts.OSWAP_ERC20(wallet, tokenIn.address);
  let allowance = await erc20.allowance({
    param1: wallet.address,
    param2: address
  })
  return fromInput.gt(allowance);
}

function getTradeFee(market: Market) {
  switch (market) {
    case Market.BISWAP:
      return { fee: "1", base: "1000" };
    case Market.UNISWAP:
    case Market.SUSHISWAP:
    case Market.BAKERYSWAP:
    case Market.PANGOLIN:
    case Market.TRADERJOE:
    case Market.QUICKSWAP:
    case Market.SPIRITSWAP:
      return { fee: "3", base: "1000" };
    case Market.PANCAKESWAPV1:
    case Market.SPOOKYSWAP:
      return { fee: "2", base: "1000" };
    case Market.PANCAKESWAP:
      return { fee: "25", base: "10000" };
    case Market.BURGERSWAP:
      return { fee: "3", base: "1000" };
    case Market.IFSWAPV1:
      return { fee: "6", base: "10000" };
    case Market.IFSWAPV3: //trade fee by pair. 0.3% is default
      return { fee: "30", base: "10000" }
    case Market.MIXED_QUEUE:
      return { fee: "1", base: "1000" };
    case Market.PEGGED_QUEUE:
      return { fee: "1", base: "1000" };
    case Market.OPENSWAP:
    default:
      return { fee: "200", base: "100000" };
  }
}

async function getTradeFeeMap(markets: Market[]) {
  let tradeFeeMap: TradeFeeMap = {};
  markets.forEach(market => tradeFeeMap[market] = getTradeFee(market));
  return tradeFeeMap;
}

const getAvailableRouteOptions = async (state: State, params: GetAvailableRouteOptionsParams, getExtendedRouteObjData: Function): Promise<ICrossChainRouteResult[]> => {
  let { fromChainId, toChainId, tokenIn, tokenOut, amountIn } = params;
  // Handle native token

  let isTokenInNative = false;
  let isTokenOutNative = false;

  if (tokenIn.isNative) {
    isTokenInNative = true
    tokenIn.address = crossChainNativeTokenList[fromChainId].wethAddress;
  }

  if (tokenOut.isNative) {
    tokenOut.address = crossChainNativeTokenList[toChainId].wethAddress;
  }

  const tradeFeeMapMarkets = Object.values(ProviderConfigMap).map(({ marketCode }) => marketCode);
  const tradeFeeMap = await getTradeFeeMap(tradeFeeMapMarkets);
  
  const routeObjArr: { routes: ICrossChainRouteFromAPI[] } = await getAPI(routeAPI, {
    fromChainId,
    toChainId,
    tokenIn: tokenIn.address,
    tokenOut: tokenOut.address,
    amountIn: Utils.toDecimals(amountIn, tokenIn.decimals),
    version: getBridgeVaultVersion(state.getChainId())
  })

  if (!routeObjArr || !routeObjArr.routes) return []

  const composeRoutes = async (routeObj: ICrossChainRouteFromAPI['sourceRoute'] | ICrossChainRouteFromAPI['targetRoute'], chainId: number, fromAmount: string | BigNumber) => {
    const providerConfigByDexId = Object.values(ProviderConfigMap)
      .filter(({ supportedChains }) => supportedChains?.includes(chainId!))
      .reduce((acc, cur) => {
        if (cur.dexId || cur.dexId === 0) acc[cur.dexId] = cur;
        return acc;
      }, {} as { [dexId: number]: ProviderConfig });
    let dexId = [5, 6].includes(routeObj.dexId) ? 5 : routeObj.dexId;
    let bestRouteObj: any
    bestRouteObj = {
      pairs: routeObj.route.map(v => v.address),
      isRegistered: routeObj.route.map(v => v.isRegistered),
      market: routeObj.route.map(v => {
        let dexId = [5, 6].includes(v.dexId) ? 5 : v.dexId;
        return providerConfigByDexId[dexId].marketCode;
      }),
      route: routeObj.tokens,
      customDataList: routeObj.route.map(v => {
        return {
          queueType: v.queueType,
          orderIds: v.orderIds,
          reserveA: v.reserves.reserve0,
          reserveB: v.reserves.reserve1
        }
      })
    };

    let amountOut = Utils.fromDecimals(routeObj.amountOut, routeObj.tokens[routeObj.tokens.length - 1].decimals);
    let swapPrice = new BigNumber(fromAmount).div(amountOut);
    // let targetChainWallet = initCrossChainWallet(chainId)
    let extendedData = bestRouteObj.pairs.length !== 0 ? await getExtendedRouteObjData(bestRouteObj, tradeFeeMap, swapPrice, true) : await getExtendedRouteObjDataForDirectRoute(bestRouteObj, swapPrice);
    let provider = providerConfigByDexId[dexId].key;
    let key = provider + '|' + (routeObj.isDirectRoute ? '0' : '1');
    bestRouteObj = {
      ...extendedData,
      amountOut,
      provider,
      key,
      queueType: routeObj.queueType
    };
    return bestRouteObj
  }

  let bestRouteObjArr: ICrossChainRouteResult[] = []
  let wrapperAddress = CrossChainAddressMap[fromChainId].wrapperAddress //TODO: Return from API

  for (let i = 0; i < routeObjArr['routes'].length; i++) {
    let routeObj: ICrossChainRouteFromAPI = routeObjArr['routes'][i];
    let sourceVaultToken = getTokenByVaultAddress(fromChainId, routeObj.vault);
    let targetVaultAddresses = BridgeVaultGroupList.filter((v) => {
      if (v.deprecated) return false;
      return v.vaults[fromChainId].vaultAddress.toLowerCase() == routeObj.vault.toLowerCase()
    })[0]?.vaults?.[toChainId];

    if (targetVaultAddresses == null) continue;
    let targetVaultTokenAddress = targetVaultAddresses.tokenAddress
    let tokenMap = getTargetChainTokenMap(toChainId);
    let targetVaultToken = tokenMap[targetVaultTokenAddress.toLowerCase()];

    //Get Fee From Router
    const fees = (
      Object.entries(routeObj.fees) as [
        keyof ICrossChainRouteFromAPI["fees"],
        number | BigNumber
      ][]
    ).reduce((acc, [key, value]) => {
      acc[key] = new BigNumber(value).shiftedBy(-targetVaultToken.decimals);
      return acc;
    }, {} as ICrossChainRouteFromAPI["fees"]);

    amountIn = new BigNumber(amountIn)
    let sourceRouteObj = routeObj.sourceRoute ? await composeRoutes(routeObj.sourceRoute, fromChainId, amountIn) : null
    let vaultTokenFromSourceChain = routeObj.sourceRoute ? sourceRouteObj.amountOut : amountIn

    let bridgeFee = new BigNumber(fees.baseFee).plus(fees.protocolFee).plus(fees.transactionFee).plus(fees.imbalanceFee);
    let vaultTokenToTargetChain = new BigNumber(vaultTokenFromSourceChain).minus(bridgeFee).toFixed()


    let targetRouteObj = await composeRoutes(routeObj.targetRoute, toChainId, vaultTokenToTargetChain)

    let bestRouteObj: any
    bestRouteObj = {
      sourceRouteObj,
      targetRouteObj,
      sourceVaultToken,
      targetVaultToken,
      vaultTokenFromSourceChain: routeObj.sourceRoute ? vaultTokenFromSourceChain : null,
      vaultTokenToTargetChain,
      vaultAddress: routeObj.vault,
      contractAddress: sourceRouteObj ? wrapperAddress : routeObj.vault,
    }

    bestRouteObj = await composeRouteObjBridge(bestRouteObj, amountIn, new BigNumber(vaultTokenToTargetChain), fees, state.slippageTolerance);
    if (isTokenInNative && bestRouteObj) {
      bestRouteObj.sourceRouteObj.bestRoute[0] = tokenIn
      bestRouteObj.sourceRouteObj.bestSmartRoute[0].fromToken = tokenIn
    }
    if (isTokenOutNative) {
      bestRouteObj.targetRouteObj.bestRoute[bestRouteObj.targetRouteObj.bestRoute.length - 1] = tokenOut
      bestRouteObj.targetRouteObj.bestSmartRoute[bestRouteObj.targetRouteObj.bestSmartRoute.length - 1].toToken = tokenOut
    }
    bestRouteObjArr.push(bestRouteObj)
  }
  bestRouteObjArr = bestRouteObjArr.filter(v => v !== null)
  // Only direct token swap is enabled
  bestRouteObjArr = bestRouteObjArr.filter(v => !v.sourceRouteObj && v.targetRouteObj.pairs.length === 0)
  bestRouteObjArr = bestRouteObjArr.sort((a, b) => a.toAmount.lt(b.toAmount) ? 1 : -1)
  if (bestRouteObjArr[0] && !isTokenInNative) bestRouteObjArr[0].isApproveButtonShown = await checkIsApproveButtonShown(state, tokenIn, new BigNumber(amountIn), bestRouteObjArr[0].contractAddress);
  return bestRouteObjArr;
}

// Return the current vault asset balance by given chainId and address
const getVaultAssetBalance = async (chainId: number, vaultAddress: string) => {
  let targetChainWallet = initCrossChainWallet(chainId);
  const vault = new CrossChainContracts.OSWAP_BridgeVault(targetChainWallet, vaultAddress);
  const asset = new Contracts.ERC20(targetChainWallet, await vault.asset());
  return (await asset.balanceOf(vault.address));
}

const getOraclePriceMap = async (chainId: number) => {
  const oraclePriceMap: { [key: string]: BigNumber } = {};
  const wallet = initCrossChainWallet(chainId);
  await Promise.all(Object.entries(MockOracleMap[chainId]).map(async ([token, oracle]) => {
    let mockOracleContract = new SolidityContracts.AggregatorProxy(wallet, oracle)
    oraclePriceMap[token.toLowerCase()] = (await mockOracleContract.latestAnswer()).shiftedBy(-18) // token -> USD 
  }));
  return oraclePriceMap;
}

export {
  getTokenByVaultAddress,
  getTargetChainTokenMap,
  getTargetChainTokenInfoObj,
  createBridgeVaultOrder,
  getAvailableRouteOptions,
  ICrossChainRouteResult,
  getBridgeVault,
  getBondsInBridgeVault,
  getVaultAssetBalance,
  getOraclePriceMap
}