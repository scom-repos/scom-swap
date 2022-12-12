import { Wallet, BigNumber, Erc20, Utils, TransactionReceipt } from "@ijstech/eth-wallet";
import {
  ITokenObject,
  getAPI,
  ERC20ApprovalModel,
  IERC20ApprovalEventOptions
} from "@swap/global";
import {
  DefaultTokens,
  ProviderConfigMap,
  TokenBalancesType,
  baseRoute,
  BridgeVaultGroupList,
  getBridgeVaultVersion,
  crossChainNativeTokenList,
  CrossChainAddressMap,
  nullAddress,
  getTokenList,
  getChainId,
  getNetworkInfo,
  ProviderConfig,
  getMatchNetworks
} from "@swap/store"
import  {Contracts as CrossChainContracts} from "@openswap/cross-chain-bridge-sdk"

export interface IBridgeVaultBond {
  vaultTrollRegistry: string;
  chainId: number;
  trollId: string;
  shareHolder: string;
  bond: string;
  shares: string;
  sharesPendingWithdrawal: string;
  sharesApprovedWithdrawal: string;
  version: string;
}

export interface IBridgeVault {
  chainId: number;
  address: string;
  asset: string;
  configStore: string;
  baseFee: string;
  protocolFee: string;
  transactionFee: string;
  imbalanceFee: string;
  lpAssetBalance: string;
  imbalance: string;
  vaultType: string;
  vaultGroup: string;
  version: string;
}

// Bridge Swap
export interface CreateBridgeVaultOrderParams {
  vaultAddress: string;
  targetChainId: number;
  tokenIn: ITokenObject;
  tokenOut: ITokenObject;
  amountIn: string;
  minAmountOut: string;
  transactionSetting: {
    transactionDeadlineInMinutes: number;
    slippageTolerance: number;
  };
  sourceRouteInfo?: {
    amountOut: string;
    pairs: string[];
  };
}

export interface Order {
  peerChain: number | BigNumber;
  inAmount: number | BigNumber;
  outToken: string;
  minOutAmount: number | BigNumber;
  to: string;
  expire: number | BigNumber;
}

export interface SwapExactETHForTokensParams {
  pair: string[];
  vault: string;
  deadline: number | BigNumber;
  order: Order;
}

export interface SwapExactTokensForTokensParams {
  pair: string[];
  vault: string;
  amountIn: number | BigNumber;
  deadline: number | BigNumber;
  order: Order;
}

export interface GetAvailableRouteOptionsParams {
  fromChainId: number;
  toChainId: number;
  tokenIn: ITokenObject;
  tokenOut: ITokenObject;
  amountIn: number | BigNumber;
}

export interface IBridgeFees {
  baseFee: BigNumber | number;
  protocolFee: BigNumber | number;
  transactionFee: BigNumber | number;
  imbalanceFee: BigNumber | number;
  sourceRouteLiquidityFee?: BigNumber | number;
  targetRouteLiquidityFee?: BigNumber | number;
}

export interface ICrossChainRouteResult {
  contractAddress: string;
  vaultAddress: string;
  fromAmount: BigNumber;
  toAmount: BigNumber;
  fees: IBridgeFees;
  price: number;
  priceSwap: number;
  priceImpact: number;
  sourceRouteObj?: IRoutesResult | null;
  sourceVaultToken?: ITokenObject | null;
  targetRouteObj: IRoutesResult;
  targetVaultToken: ITokenObject;
  vaultTokenToTargetChain: string;
  vaultTokenFromSourceChain: BigNumber;
  isApproveButtonShown?: boolean;
  tardeFee: number;
}

export interface IRoutesResult {
  amountOut: BigNumber;
  bestRoutes: ITokenObject[];
  bestSmartRoute: IBestSmartRoute[];
  key: string;
  market: number[];
  pairs: string[];
  price: number;
  priceImpact: number;
  provider: string;
  queueType: number;
  tradeFee: string;
}

export interface IBestSmartRoute {
  caption: string;
  fromToken: ITokenObject;
  toToken: ITokenObject;
  isRegistered: boolean;
  pairAddress: string;
  provider: string;
}

export interface ICrossChainRouteFromAPI {
  vault: string;
  sourceRoute: IRoutesAPI;
  targetRoute: IRoutesAPI;
  fees: IBridgeFees;
}

export interface IRoutesAPI {
  amountOut: string;
  dexId: number;
  queueType?: number;
  isDirectRoute: boolean;
  route: IRouteAPI[];
  tokens: {
    address: string;
    decimals: number;
    name: string;
    symbol: string;
  }[];
  tradeFees: {
    fee: string;
    base: string;
  }[];
}

export interface IRouteAPI {
  address: string;
  dexId: number;
  isRegistered: boolean;
  reserves: {
    reserve0: string;
    reserve1: string;
  };
  boostReserves?: {
    // For Impossible Finance v3 Only
    boostReserveIn: string;
    boostReserveOut: string;
  };
  // For Queues
  queueType?: number;
  orderIds?: string[];
}

const routeAPI = baseRoute + '/trading/v1/cross-chain-route';
const GetBridgeVaultsAPI = baseRoute + '/trading/v1/bridge-vaults';
const GetBridgeVaultAPI = baseRoute + '/trading/v1/bridge-vault';
const GetBondsInBridgeVaultAPI = baseRoute + '/trading/v1/bonds-by-chain-id-and-vault-troll-registry'

// Common

var approvalModel: ERC20ApprovalModel;

const getApprovalModelAction = async (options: IERC20ApprovalEventOptions) => {
  const approvalOptions = {
    ...options,
    spenderAddress: ''
  };
  approvalModel = new ERC20ApprovalModel(approvalOptions);
  let approvalModelAction = approvalModel.getAction();
  return approvalModelAction;
}

const setApprovalModalSpenderAddress = (contractAddress: string) => {
  approvalModel.spenderAddress = contractAddress;
}



const getChainIdGroup = () => {
  const chainId = getChainId();
  const list = getMatchNetworks({isDisabled:false,isCrossChainSupported:true});
  const testnetSupportedList = list.filter(v => v.isTestnet);
  const mainnetSupportedList = list.filter(v => !v.isTestnet);
  if (testnetSupportedList.some((item) => item.chainId === chainId)) {
    return testnetSupportedList;
  }
  return mainnetSupportedList;
}

const getMainChainId = () => {
  let chainGroup = getChainIdGroup()
  if (chainGroup) {
      let mainChain = chainGroup.find( v => v.isMainChain == true)
      if (mainChain) return mainChain.chainId;
  } 
  return null
}

const getTokenByVaultAddress = (chainId:number, vaultAddress: string) => {
    if (!chainId) return null;
    let vaultTokenMap = getVaultTokenMap();
    let tokenAddress = vaultTokenMap[chainId][vaultAddress.toLowerCase()];
    let tokenMap = getTargetChainTokenMap(chainId);
    let token = tokenMap[tokenAddress.toLowerCase()];
    return token;
}

const getTargetChainTokenMap = (chainId: number) => {
    let tokenList = getTokenList(chainId);
    tokenList = tokenList.map(v => v = {...v, address: v.address ? v.address.toLowerCase() : undefined}).sort((a, b) => {
        if(a.symbol.toLowerCase() < b.symbol.toLowerCase()) { return -1; }
        if(a.symbol.toLowerCase() > b.symbol.toLowerCase()) { return 1; }
        return 0;
    });
    let tokenMap: { [key: string ]: ITokenObject } = {};
    Object.values(tokenList).forEach((v, i) => {
      if (v.isNative) v ={...crossChainNativeTokenList[chainId], isNative: true}
      tokenMap[""+v.address] = v;
    });
    return tokenMap;
}

const initCrossChainWallet = (chainId: number) => {
  const wallet: any = Wallet.getInstance();
  const networkInfo = getNetworkInfo(chainId);
  let rpcEndpoint = networkInfo.rpc
  let crossChainWallet = new Wallet(rpcEndpoint, {address: wallet.address})
  return crossChainWallet
}

const getTargetChainTokenInfoObj = async (chainId: number) => {
  let targetChainWallet = initCrossChainWallet(chainId)
  let balances: TokenBalancesType = {}

  let tokenMap = getTargetChainTokenMap(chainId);
  if (!chainId || !DefaultTokens[chainId]) return { tokenMap, balances };
  const tokenList = getTokenList(chainId);
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
        balances[token.address? token.address.toLowerCase(): token.symbol] = '0'
        //console.log(`Failed to get token(${token.address}) balance`)
      }
  }));
  await Promise.all(promises);

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


const getBridgeVaults = async (): Promise<IBridgeVault[]> => {
  let res = await getAPI(GetBridgeVaultsAPI);
  return res
}

const getBridgeVault = async (chainId:number, vaultAddress: string): Promise<IBridgeVault> => {
  let res = await getAPI(GetBridgeVaultAPI, {chainId, address: vaultAddress});
  return res
}

const getBondsInBridgeVault = async (chainId:number, vaultTrollRegistry: string, version: string = getBridgeVaultVersion(getChainId())): Promise<IBridgeVaultBond[]> => {
  let res = await getAPI(GetBondsInBridgeVaultAPI, {version, chainId, vaultTrollRegistry});
  return Array.isArray(res) ? res : [];
}

// Bridge Swap

const createBridgeVaultOrder: (params: CreateBridgeVaultOrderParams) => Promise<{
  receipt: TransactionReceipt | null;
  error: Record<string, string> | null;
}> = async (params: CreateBridgeVaultOrderParams) => {
  try {
    const { vaultAddress, targetChainId, tokenIn, tokenOut, amountIn, minAmountOut, transactionSetting, sourceRouteInfo } = params;
    const wallet: any = Wallet.getInstance();
    const transactionDeadlineInMinutes = transactionSetting.transactionDeadlineInMinutes;
    const transactionDeadline = Math.floor(Date.now() / 1000 + (transactionDeadlineInMinutes * 60));
    const slippageTolerance = transactionSetting.slippageTolerance;
    
    const amountInTokenAmount = Utils.toDecimals(amountIn, tokenIn.decimals);
    const minAmountOutTokenAmount = Utils.toDecimals(minAmountOut, tokenOut.decimals).dp(0,1);
    
    if (tokenOut.isNative) {
      tokenOut.address = nullAddress;
    }
    
    const newOrder = {
      peerChain: targetChainId,
      inAmount:   amountInTokenAmount,
      outToken: tokenOut.address || "",
      minOutAmount: minAmountOutTokenAmount,
      to: wallet.address,
      expire: transactionDeadline
    }
    
    const chainId = await wallet.getChainId();
    const sourceVaultToken = getTokenByVaultAddress(chainId,vaultAddress);
    
    let receipt;
    if (sourceRouteInfo){
      const wrapperAddress = CrossChainAddressMap[chainId].wrapperAddress;
      const wrapperContract = new CrossChainContracts.OSWAP_RouterVaultWrapper(wallet, wrapperAddress);
      if (!sourceVaultToken?.decimals) {
        throw new Error("Missing Source Vault Token Decimals");
      }
      
      newOrder.inAmount = new BigNumber(sourceRouteInfo.amountOut).shiftedBy(sourceVaultToken.decimals).times(1 - slippageTolerance / 100).dp(0,1);
      
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
    return { receipt, error: null};
  } catch (error) {
    return { receipt: null, error: error as any };
  }
}
  
  const composeRouteObjBridge = async (routeObj: any, firstInput: BigNumber, vaultTokenToTargetChain: BigNumber, bridgeFees: IBridgeFees, slippageTolerance:number) => {
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
      let sourceRoutingPrice = routeObj.sourceRouteObj? routeObj.sourceRouteObj.price : 1
      fees = {
        sourceRouteLiquidityFee: routeObj.sourceRouteObj? new BigNumber(routeObj.sourceRouteObj.tradeFee).times(fromAmount).toNumber() : 0,
        targetRouteLiquidityFee: new BigNumber(routeObj.targetRouteObj.tradeFee).times(vaultTokenToTargetChain).times(sourceRoutingPrice).toNumber(),
        baseFee: new BigNumber(bridgeFees.baseFee).times(sourceRoutingPrice).toNumber(),
        transactionFee: new BigNumber(bridgeFees.transactionFee).times(sourceRoutingPrice).toNumber(),
        protocolFee: new BigNumber(bridgeFees.protocolFee).times(sourceRoutingPrice).toNumber(),
        imbalanceFee: new BigNumber(bridgeFees.imbalanceFee).times(sourceRoutingPrice).toNumber()
      }

      tradeFee = Object.values(fees).reduce( (a,b) => a + b)
    
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
      priceImpact:priceImpact,
      price: swapPrice.toFixed(),
      tradeFee: fee.toFixed(),   
  }
  return extendedRouteObj
} 


const fetchBridgeFee = async (targetChainId:number, vaultAddress:string): Promise<IBridgeFees> => {
  let bridgeVaults = await getBridgeVaults()
  let vault = bridgeVaults.find( v=> v.chainId == targetChainId && v.address == vaultAddress)
  let bridgeFeeParams: IBridgeFees = {
    baseFee: new BigNumber(0),
    protocolFee: new BigNumber(0),
    transactionFee: new BigNumber(0),
    imbalanceFee: new BigNumber(0)
  }
  if (vault) {
    bridgeFeeParams = {
      baseFee: new BigNumber(vault.baseFee),
      protocolFee: new BigNumber(vault.protocolFee),
      transactionFee: new BigNumber(vault.transactionFee),
      imbalanceFee: new BigNumber(vault.imbalanceFee)
    }

  }
  return bridgeFeeParams;
}

const checkIsApproveButtonShown = async (tokenIn: ITokenObject, fromInput: BigNumber, address: string) => {
  const wallet: any = Wallet.getInstance()
  let erc20 = new Erc20(wallet, tokenIn.address)
  let allowance = await erc20.allowance({
    owner: wallet.address,
    spender: address
  })
  return fromInput.gt(Utils.fromDecimals(allowance, tokenIn.decimals));
}

const getAvailableRouteOptions = async (params: GetAvailableRouteOptionsParams, getTradeFeeMap: Function, getExtendedRouteObjData: Function, slippageTolerance: number):Promise<ICrossChainRouteResult[]> => {    
  let {fromChainId, toChainId, tokenIn, tokenOut, amountIn} = params
  // Handle native token

  let isTokenInNative = false;
  let isTokenOutNative = false;

  if (tokenIn.isNative) {
      isTokenInNative = true
      tokenIn.address = crossChainNativeTokenList[fromChainId].wethAddress
  }

  if (tokenOut.isNative) {
    tokenOut.address = crossChainNativeTokenList[toChainId].wethAddress
  }

  const tradeFeeMapMarkets = Object.values(ProviderConfigMap).map(({ marketCode }) => marketCode);
  const tradeFeeMap = await getTradeFeeMap(tradeFeeMapMarkets);
  const routeObjArr: {routes: ICrossChainRouteFromAPI[]} = await getAPI(routeAPI, {
      fromChainId,
      toChainId,
      tokenIn: tokenIn.address,
      tokenOut: tokenOut.address,
      amountIn: Utils.toDecimals(amountIn,tokenIn.decimals),
      version: getBridgeVaultVersion(getChainId())
  })

  if (!routeObjArr || !routeObjArr.routes) return []

  const composeRoutes = async (routeObj: ICrossChainRouteFromAPI['sourceRoute'] | ICrossChainRouteFromAPI['targetRoute'], chainId: number, fromAmount: string | BigNumber) => {
      const providerConfigByDexId = Object.values(ProviderConfigMap)
        .filter(({ supportedChains }) => supportedChains?.includes(chainId!))
        .reduce((acc, cur) => {
          if (cur.dexId || cur.dexId === 0) acc[cur.dexId] = cur;
          return acc;
        }, {} as {[dexId: number]: ProviderConfig});
      let dexId = [5, 6].includes(routeObj.dexId) ? 5: routeObj.dexId;
      let bestRouteObj: any
      bestRouteObj = {
          pairs: routeObj.route.map(v => v.address),
          isRegistered: routeObj.route.map(v => v.isRegistered),
          market: routeObj.route.map(v => {
              let dexId = [5, 6].includes(v.dexId) ? 5: v.dexId;
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
      let targetChainWallet = initCrossChainWallet(chainId)
      let extendedData = bestRouteObj.pairs.length !== 0? await getExtendedRouteObjData(targetChainWallet,bestRouteObj, tradeFeeMap, swapPrice, true): await getExtendedRouteObjDataForDirectRoute(bestRouteObj, swapPrice);
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

  for (let i=0; i < routeObjArr['routes'].length; i++) {
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

      //let bridgeFeeParams = await fetchBridgeFee(toChainId, targetVaultAddresses.vaultAddress)
      amountIn = new BigNumber(amountIn)
      let sourceRouteObj = routeObj.sourceRoute? await composeRoutes(routeObj.sourceRoute, fromChainId, amountIn): null 
      let vaultTokenFromSourceChain = routeObj.sourceRoute? sourceRouteObj.amountOut: amountIn

      let bridgeFee = new BigNumber(fees.baseFee).plus(fees.protocolFee).plus(fees.transactionFee).plus(fees.imbalanceFee);
      let vaultTokenToTargetChain = new BigNumber(vaultTokenFromSourceChain).minus(bridgeFee).toFixed()


      let targetRouteObj = await composeRoutes(routeObj.targetRoute, toChainId, vaultTokenToTargetChain)
      
      let bestRouteObj: any
      bestRouteObj = {
          sourceRouteObj,
          targetRouteObj,
          sourceVaultToken,
          targetVaultToken,
          vaultTokenFromSourceChain: routeObj.sourceRoute? vaultTokenFromSourceChain: null,
          vaultTokenToTargetChain,
          vaultAddress: routeObj.vault,
          contractAddress: sourceRouteObj? wrapperAddress : routeObj.vault,
      }

      bestRouteObj = await composeRouteObjBridge(bestRouteObj, amountIn, new BigNumber(vaultTokenToTargetChain), fees, slippageTolerance);
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
  bestRouteObjArr = bestRouteObjArr.filter( v => v !== null)
  bestRouteObjArr.sort((a,b) => a.toAmount.lt(b.toAmount)? 1 : -1)
  if ( bestRouteObjArr[0] && !isTokenInNative) bestRouteObjArr[0].isApproveButtonShown = await checkIsApproveButtonShown(tokenIn, new BigNumber(amountIn), bestRouteObjArr[0].contractAddress);
  return bestRouteObjArr;
}

export {
  getApprovalModelAction,
  setApprovalModalSpenderAddress,
  getChainIdGroup,
  getMainChainId,
  getTokenByVaultAddress,
  getVaultTokenMap,
  getTargetChainTokenMap,
  getTargetChainTokenInfoObj,
  getBridgeVaults,
  getBridgeVault,
  getBondsInBridgeVault,
  initCrossChainWallet,
  createBridgeVaultOrder,
  getAvailableRouteOptions
}

