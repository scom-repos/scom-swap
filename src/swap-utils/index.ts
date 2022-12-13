import { Wallet, BigNumber, Utils, Erc20, TransactionReceipt } from "@ijstech/eth-wallet";
import { Contracts } from "@openswap/sdk";
// import { Contracts as BakeryContracts } from '@validapp/bakery-swap-sdk';
// import { Contracts as TraderJoeContracts } from '@validapp/trader-joe-sdk';
// import { Contracts as ImpossibleContracts } from '@scom/impossible-swap-sdk';

import {
  getAPI,
  ITokenObject,
  IERC20ApprovalEventOptions,
  ERC20ApprovalModel,
  QueueType,
} from "@swap/global";

import {
  GetAvailableRouteOptionsParams,
  getAvailableRouteOptions as getAvailableRouteOptionsForCrossChain,
  createBridgeVaultOrder as createBridgeVaultOrderForCrossChain
} from "@swap/crosschain-utils"

import {
  CoreContractAddressesByChainId,
  ChainNativeTokenByChainId,
  WETHByChainId,
  getWallet, 
  getSlippageTolerance, 
  getTransactionDeadline,
  isWalletConnected,
  getChainId,
  getNetworkInfo,
  getProviderList
} from "@swap/store";

import { getPair as getOraclePair, getRangeQueueData, getGroupQueueTraderDataObj } from "@swap/queue-utils";

interface TradeFee {
  fee: string
  base: string
}
interface TradeFeeMap {
  [key: string]: TradeFee
}
interface AvailableRoute {
  pair:string,
  market:string,
  tokenIn:ITokenObject,
  tokenOut:ITokenObject,
  reserveA: BigNumber,
  reserveB: BigNumber,
}

const routeAPI = 'https://route.openswap.xyz/trading/v1/route';
const newRouteAPI = 'https://indexer.ijs.dev/trading/v1/route'
// const Factory = 'OAXDEX_Factory';
// const RouterV1 = "OAXDEX_RouterV1";
// const Router = "OAXDEX_Router";

function getAddresses() {
  return CoreContractAddressesByChainId[getChainId()];
};
const getChainNativeToken = (): ITokenObject => {
  return ChainNativeTokenByChainId[getChainId()]
};
const getWETH = (): ITokenObject => {
  return WETHByChainId[getChainId()];
};
const getWrappedTokenAddress = (): string => {
  return getWETH().address!;
};

// const getHybridRouterAddress = (): string => {
//   let Address = getAddresses();
//   return Address['OSWAP_HybridRouter2'];
// };
const getFactoryAddress = (key: string): string => {
  // let Address = getAddresses();
  // switch (market) {
  //   case Market.OPENSWAP:
  //     return Address[Factory];
  //   case Market.UNISWAP:
  //     return Address.UniswapV2Factory;
  //   case Market.SUSHISWAP:
  //     return Address.SushiSwapV2Factory;
  //   case Market.PANCAKESWAPV1:
  //     return Address.PancakeSwapFactoryV1;
  //   case Market.PANCAKESWAP:
  //     return Address.PancakeSwapFactory;
  //   case Market.BAKERYSWAP:
  //     return Address.BakerySwapFactory;
  //   case Market.BURGERSWAP:
  //     return Address.BurgerSwapFactory;
  //   case Market.IFSWAPV1:
  //     return Address.IFSwapFactoryV1;
  //   case Market.IFSWAPV3:
  //     return Address.IFSwapFactoryV3;
  //   case Market.QUICKSWAP:
  //     return Address.QuickSwapFactory;
  //   case Market.BISWAP:
  //     return Address.BiSwapFactory;
  //   case Market.PANGOLIN:
  //     return Address.PangolinFactory;
  //   case Market.TRADERJOE:
  //     return Address.TraderJoeFactory;
  //   case Market.SPIRITSWAP:
  //     return Address.SpiritSwapFactory;
  //   case Market.SPOOKYSWAP:
  //     return Address.SpookySwapFactory;
  //   case Market.HAKUSWAP:
  //     return Address.HakuSwapFactory;
  //   case Market.JETSWAP:
  //     return Address.JetSwapFactory;
  //   default:
  //     return Address[Factory];
  // }
  const providers = getProviderList();
  return providers.find(item => item.key === key)?.factoryAddress || ''
}
function getRouterAddress(key: string): string {
  // let Address = getAddresses();
  // switch (market) {
  //   case Market.OPENSWAP:
  //     return Address[Router];
  //   case Market.UNISWAP:
  //     return Address.UniswapV2Router02;
  //   case Market.SUSHISWAP:
  //     return Address.SushiSwapV2Router02;
  //   case Market.PANCAKESWAPV1:
  //     return Address.PancakeSwapRouterV1;
  //   case Market.PANCAKESWAP:
  //     return Address.PancakeSwapRouter;
  //   case Market.BAKERYSWAP:
  //     return Address.BakerySwapRouter;
  //   case Market.BURGERSWAP:
  //     return Address.BurgerSwapRouter;
  //   case Market.IFSWAPV1:
  //     return Address.IFSwapRouterV1;
  //   case Market.OPENSWAPV1:
  //     return Address[RouterV1];
  //   case Market.QUICKSWAP:
  //     return Address.QuickSwapRouter;
  //   case Market.BISWAP:
  //     return Address.BiSwapRouter;
  //   case Market.PANGOLIN:
  //     return Address.PangolinRouter;
  //   case Market.TRADERJOE:
  //     return Address.TraderJoeRouter;
  //   case Market.SPIRITSWAP:
  //     return Address.SpiritSwapRouter;
  //   case Market.SPOOKYSWAP:
  //     return Address.SpookySwapRouter;
  //   case Market.IFSWAPV3:
  //     return Address.IFSwapRouterV3;
  //   default:
  //     return Address[Router];
  // }
  const providers = getProviderList();
  return providers.find(item => item.key === key)?.routerAddress || ''
}

async function allowanceRouter(wallet: any, market: string, token: ITokenObject, owner: string, callback?: any) {
  let erc20 = new Erc20(wallet, token.address, token.decimals);
  let spender = getRouterAddress(market);
  // if (market == Market.HYBRID || market == Market.MIXED_QUEUE || market == Market.PEGGED_QUEUE || market == Market.GROUP_QUEUE) {
  //   spender = getHybridRouterAddress();
  // }
  // else {
  //   spender = getRouterAddress(market);
  // }
  let allowance = await erc20.allowance({
    owner,
    spender
  })
  allowance = Utils.fromDecimals(allowance, token.decimals);
  if (callback)
    callback(null, allowance);
  return allowance;
}

async function checkIsApproveButtonShown(wallet: any, firstTokenObject: any, fromInput: BigNumber, market: string) {
  if (!isWalletConnected()) return false;
  let isApproveButtonShown = false;
  const owner = wallet.account.address;
  const nativeTokenObject = getChainNativeToken();
  if (!nativeTokenObject) return false;

  const firstTokenAddress = firstTokenObject.address;
  if (!firstTokenAddress || firstTokenAddress === nativeTokenObject.symbol) {
    isApproveButtonShown = false;
  } else {
    isApproveButtonShown = false;
    const allowance = await allowanceRouter(wallet, market, firstTokenObject, owner);
    isApproveButtonShown = fromInput.gt(allowance);
  }
  return isApproveButtonShown;
}

async function composeRouteObj(wallet: any, routeObj: any, market: string, firstTokenObject: any, firstInput: BigNumber, secondInput: BigNumber, isFromEstimated: boolean, needApproveButton: boolean) {
  const slippageTolerance = getSlippageTolerance();
  if (!slippageTolerance) return null;
  let fromAmount = new BigNumber(0);
  let toAmount = new BigNumber(0);
  let minReceivedMaxSold = 0;
  let priceImpact = 0;
  let price = 0;
  let priceSwap = 0;
  let tradeFee = 0;
  let gasFee = 0;
  let isApproveButtonShown = false;

  try {
    if (isFromEstimated) {
      let poolAmount = new BigNumber(routeObj.amountIn);
      if (poolAmount.isZero()) return null;
      minReceivedMaxSold = poolAmount.times(1 + slippageTolerance / 100).toNumber();
      fromAmount = poolAmount;
      toAmount = secondInput;
      gasFee = routeObj.gasFee
    } else {
      let poolAmount = new BigNumber(routeObj.amountOut);
      if (poolAmount.isZero()) return null;
      minReceivedMaxSold = poolAmount.times(1 - slippageTolerance / 100).toNumber();
      fromAmount = firstInput;
      toAmount = poolAmount;
      gasFee = routeObj.gasFee
    }

    price = parseFloat(routeObj.price);
    priceSwap = new BigNumber(1).div(routeObj.price).toNumber();
    priceImpact = Number(routeObj.priceImpact) * 100;
    tradeFee = parseFloat(routeObj.tradeFee);

    if (needApproveButton) {
      // if (market == Market.HYBRID) {
      //   let Address = getAddresses();
      //   isApproveButtonShown = Address['OSWAP_HybridRouterRegistry'] ? await checkIsApproveButtonShown(wallet, firstTokenObject, fromAmount, market) : false;
      // }
      // else {
      //   isApproveButtonShown = await checkIsApproveButtonShown(wallet, firstTokenObject, fromAmount, market);
      // }
      isApproveButtonShown = await checkIsApproveButtonShown(wallet, firstTokenObject, fromAmount, market);
    }
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
    gasFee,
    minReceivedMaxSold,
    isApproveButtonShown
  };
}

// function getTradeFee(market: Market) {
//   switch (market) {
//     case Market.BISWAP:
//       return { fee: "1", base: "1000" };
//     case Market.UNISWAP:
//     case Market.SUSHISWAP:
//     case Market.BAKERYSWAP:
//     case Market.PANGOLIN:
//     case Market.TRADERJOE:
//     case Market.QUICKSWAP:
//     case Market.SPIRITSWAP:
//       return { fee: "3", base: "1000" };
//     case Market.PANCAKESWAPV1:
//     case Market.SPOOKYSWAP:
//       return { fee: "2", base: "1000" };
//     case Market.PANCAKESWAP:
//       return { fee: "25", base: "10000" };
//     case Market.BURGERSWAP:
//       return { fee: "3", base: "1000" };
//     case Market.IFSWAPV1:
//       return { fee: "6", base: "10000" };
//     case Market.IFSWAPV3: //trade fee by pair. 0.3% is default
//       return { fee:"30", base: "10000"}   
//     case Market.MIXED_QUEUE:
//       return { fee: "1", base: "1000" };
//     case Market.PEGGED_QUEUE:
//       return { fee: "1", base: "1000" };
//     case Market.OPENSWAP:
//     default:
//       return { fee: "200", base: "100000" };
//   }
// }

// async function getTradeFeeMap(markets: Market[]) {
//   let tradeFeeMap:TradeFeeMap = {};
//   markets.forEach(market => tradeFeeMap[market] = getTradeFee(market));
//   return tradeFeeMap;
// }

async function getTradeFeeMap() {
  let tradeFeeMap: TradeFeeMap = {};
  const providers = getProviderList();
  providers.forEach(item => tradeFeeMap[item.key] = item.tradeFee);
  return tradeFeeMap;
}

async function getBestAmountInRouteFromAPI(wallet: any, tokenIn: ITokenObject, tokenOut: ITokenObject, amountOut: string, chainId?: number) {
  let isCrossChain = !!chainId ? 1 : 0;
  chainId = getChainId();
  let Address = getAddresses();
  let wrappedTokenAddress = Address['WETH9'];
  let tradeFeeMap = await getTradeFeeMap();
  let network = getNetworkInfo(chainId);
  let api = network.isTestnet || network.isDisabled ? newRouteAPI : routeAPI;
  let routeObjArr = await getAPI(api, {
    chainId,
    tokenIn: tokenIn.address ? tokenIn.address : wrappedTokenAddress,
    tokenOut: tokenOut.address ? tokenOut.address : wrappedTokenAddress,
    amountOut: new BigNumber(amountOut).shiftedBy(tokenOut.decimals).toFixed(),
    ignoreHybrid: Address['OSWAP_HybridRouterRegistry'] ? 0 : 1,
    isCrossChain
  })
  if (!routeObjArr) return [];
  let providerConfigByDexId: any = {};
  getProviderList().filter(v => !!v.supportedChains && v.supportedChains.includes(chainId!)).forEach((v, i) => {
    if (v.dexId == undefined) return;
    providerConfigByDexId[v.dexId] = v;
  });
  let bestRouteObjArr: any[] = [];
  for (let i = 0; i < routeObjArr.length; i++) {
    let routeObj = routeObjArr[i];
    routeObj.tokens[0] = tokenIn;
    routeObj.tokens[routeObj.tokens.length - 1] = tokenOut;
    let dexId = [5, 6].includes(routeObj.dexId) ? 5 : routeObj.dexId;
    if (!providerConfigByDexId[dexId]) continue;
    let bestRouteObj = {
      pairs: routeObj.route.map((v: any) => v.address),
      isRegistered: routeObj.route.map((v: any) => v.isRegistered),
      market: routeObj.route.map((v: any) => {
        let dexId = [5, 6].includes(v.dexId) ? 5 : v.dexId;
        return providerConfigByDexId[dexId].key
      }),
      route: routeObj.tokens,
      customDataList: routeObj.route.map((v: any) => {
        return {
          queueType: v.queueType,
          orderIds: v.orderIds,
          reserveA: v.reserves.reserve0,
          reserveB: v.reserves.reserve1
        }
      })
    };

    let amountIn = new BigNumber(routeObj.amountIn).shiftedBy(-tokenIn.decimals);
    let swapPrice = new BigNumber(amountIn).div(amountOut);
    // TODO: check later
    // let isHybridOrQueue = providerConfigByDexId[dexId].key == Market.HYBRID || routeObj.queueType;
    let extendedData = await getExtendedRouteObjData(wallet, bestRouteObj, tradeFeeMap, swapPrice, routeObj.queueType);
    let provider = providerConfigByDexId[dexId].key
    let key = provider + '|' + (routeObj.isDirectRoute ? '0' : '1');
    bestRouteObjArr.push({
      ...extendedData,
      provider,
      key,
      amountIn,
      queueType: routeObj.queueType
    });
  }
  return bestRouteObjArr;
}

async function getBestAmountOutRouteFromAPI(wallet: any, tokenIn: ITokenObject, tokenOut: ITokenObject, amountIn: string, chainId?: number) {
  let isCrossChain = !!chainId ? 1 : 0;
  chainId = getChainId();
  let Address = getAddresses();
  let wrappedTokenAddress = Address['WETH9'];
  let tradeFeeMap = await getTradeFeeMap();
  let network = getNetworkInfo(chainId);
  let api = network.isTestnet || network.isDisabled ? newRouteAPI : routeAPI;
  let routeObjArr = await getAPI(api, {
    chainId,
    tokenIn: tokenIn.address ? tokenIn.address : wrappedTokenAddress,
    tokenOut: tokenOut.address ? tokenOut.address : wrappedTokenAddress,
    amountIn: new BigNumber(amountIn).shiftedBy(tokenIn.decimals).toFixed(),
    ignoreHybrid: Address['OSWAP_HybridRouterRegistry'] ? 0 : 1,
    isCrossChain
  })
  if (!routeObjArr) return [];
  let providerConfigByDexId: any = {};
  getProviderList().filter(v => !!v.supportedChains && v.supportedChains.includes(chainId!)).forEach((v, i) => {
    if (v.dexId == undefined) return;
    providerConfigByDexId[v.dexId] = v;
  });
  let bestRouteObjArr = [];
  for (let i = 0; i < routeObjArr.length; i++) {
    let routeObj = routeObjArr[i];
    routeObj.tokens[0] = tokenIn;
    routeObj.tokens[routeObj.tokens.length - 1] = tokenOut;
    let dexId = [5, 6].includes(routeObj.dexId) ? 5 : routeObj.dexId;
    if (!providerConfigByDexId[dexId]) continue;
    let bestRouteObj = {
      pairs: routeObj.route.map((v: any) => v.address),
      isRegistered: routeObj.route.map((v: any) => v.isRegistered),
      market: routeObj.route.map((v: any) => {
        let dexId = [5, 6].includes(v.dexId) ? 5 : v.dexId;
        return providerConfigByDexId[dexId].key;
      }),
      route: routeObj.tokens,
      customDataList: routeObj.route.map((v: any) => {
        return {
          queueType: v.queueType,
          orderIds: v.orderIds,
          reserveA: v.reserves.reserve0,
          reserveB: v.reserves.reserve1
        }
      })
    };
    let amountOut = new BigNumber(routeObj.amountOut).shiftedBy(-tokenOut.decimals);
    let swapPrice = new BigNumber(amountIn).div(amountOut);
    // let isHybridOrQueue = providerConfigByDexId[dexId].key == Market.HYBRID || routeObj.queueType;
    let extendedData = await getExtendedRouteObjData(wallet, bestRouteObj, tradeFeeMap, swapPrice, routeObj.queueType);
    let provider = providerConfigByDexId[dexId].key;
    let key = provider + '|' + (routeObj.isDirectRoute ? '0' : '1');
    bestRouteObjArr.push({
      ...extendedData,
      provider,
      key,
      amountOut,
      queueType: routeObj.queueType
    });
  }

  return bestRouteObjArr;
}

const getAllAvailableRoutes = async (markets: string[], tokenList: ITokenObject[], tokenIn: ITokenObject, tokenOut: ITokenObject) => {
  const wallet: any = Wallet.getInstance();
  let getPairPromises:Promise<void>[] = [];
  let availableRoutes: AvailableRoute[] = [];

  const getReservesByPair = async (pairAddress: string, tokenIn: ITokenObject, tokenOut: ITokenObject) => {
    let reserveObj;
    if (!tokenIn.address) tokenIn = getWETH();
    if (!tokenOut.address) tokenOut = getWETH();
    let pair = new Contracts.OSWAP_Pair(wallet, pairAddress);
    let reserves = await pair.getReserves();
    if (new BigNumber(tokenIn.address!.toLowerCase()).lt(tokenOut.address!.toLowerCase())) {
      reserveObj = {
        reserveA: reserves._reserve0,
        reserveB: reserves._reserve1
      };
    } else {
      reserveObj = {
        reserveA: reserves._reserve1,
        reserveB: reserves._reserve0
      };
    }
    return reserveObj;
  }

  const getPair = async (market: string, tokenA: ITokenObject, tokenB: ITokenObject) => {
    if (!tokenA.address) tokenA = getWETH();
    if (!tokenB.address) tokenB = getWETH();
    let factory = new Contracts.OSWAP_Factory(wallet, getFactoryAddress(market));
    let pair = await factory.getPair({
      param1: tokenA.address!,
      param2: tokenB.address!
    });
    return pair;
  }

  let composeAvailableRoutePromise = async (market: string, tokenIn: ITokenObject, tokenOut: ITokenObject) => {
    try {
      let pair = await getPair(market, tokenIn, tokenOut);
      if (pair == Utils.nullAddress) return;
      let reserveObj = await getReservesByPair(pair, tokenIn, tokenOut);
      availableRoutes.push({
        pair,
        market,
        tokenIn,
        tokenOut,
        ...reserveObj
      });
    } catch (err) { }
  }

  getPairPromises.push(...markets.map(market => composeAvailableRoutePromise(market, tokenIn, tokenOut)));

  for (let i = 0; i < tokenList.length; i++) {
    let hop1 = tokenList[i];
    if (tokenIn.address != hop1.address) {
      getPairPromises.push(...markets.map(market => composeAvailableRoutePromise(market, tokenIn, hop1)));
    }
    if (hop1.address != tokenOut.address) {
      getPairPromises.push(...markets.map(market => composeAvailableRoutePromise(market, hop1, tokenOut)));
    }

    for (let j = 0; j < tokenList.length; j++) {
      let hop2 = tokenList[j];
      if (hop1.address == hop2.address || hop1.address == tokenIn.address ||
        hop2.address == tokenIn.address || hop1.address == tokenOut.address ||
        hop2.address == tokenOut.address) {
        continue;
      }
      getPairPromises.push(...markets.map(market => composeAvailableRoutePromise(market, hop1, hop2)));
    }
  }

  await Promise.all(getPairPromises);
  return availableRoutes;
}

const calculateAmountOutByTradeFee = (tradeFeeMap: any, pairInfo: any, amountIn: string) => {
  let tradeFeeObj = tradeFeeMap[pairInfo.market];
  let amountInWithFee = new BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).times(amountIn);
  let amtOut = (new BigNumber(pairInfo.reserveB).times(amountInWithFee)).idiv(new BigNumber(pairInfo.reserveA).times(tradeFeeObj.base).plus(amountInWithFee)).toFixed();
  return amtOut;
}

const calculateAmountInByTradeFee = (tradeFeeMap: any, pairInfo: any, amountOut: string) => {
  let tradeFeeObj = tradeFeeMap[pairInfo.market];
  let feeMultiplier = new BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee);
  if (pairInfo.reserveB.lte(amountOut)) {
    return null;
  }
  let amtIn = new BigNumber(pairInfo.reserveA).times(amountOut).times(tradeFeeObj.base).idiv(new BigNumber(pairInfo.reserveB.minus(amountOut)).times(feeMultiplier)).plus(1).toFixed();
  return amtIn;
}

const getPathsByTokenIn = (tradeFeeMap: any, pairInfoList: any[], routeObj: any, tokenIn: ITokenObject) => {
  let routeObjList: any[] = [];
  let listItems = pairInfoList.filter(v => v.tokenOut.address == routeObj.route[routeObj.route.length - 1].address && routeObj.route.every((n: any) => n.address != v.tokenIn.address));

  let getNewAmmRouteObj = (pairInfo: any, routeObj: any, amountOut: string) => {
    let amtIn = calculateAmountInByTradeFee(tradeFeeMap, pairInfo, amountOut);
    if (!amtIn) return null;
    let newRouteObj = {
      pairs: [...routeObj.pairs, pairInfo.pair],
      market: [...routeObj.market, pairInfo.market],
      customDataList: [...routeObj.customDataList, {
        reserveA: pairInfo.reserveA,
        reserveB: pairInfo.reserveB
      }],
      route: [...routeObj.route, pairInfo.tokenIn],
      amounts: [...routeObj.amounts, amtIn]
    }
    return newRouteObj;
  }

  let getNewQueueRouteObj = (pairInfo: any, routeObj: any, amountOut: string) => {
    let tradeFeeObj = tradeFeeMap[pairInfo.market];
    let tradeFeeFactor = new BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
    let amtIn = new BigNumber(amountOut).shiftedBy(18 - Number(pairInfo.tokenOut.decimals)).div(pairInfo.priceSwap).shiftedBy(pairInfo.tokenIn.decimals).div(tradeFeeFactor).toFixed()
    let sufficientLiquidity = new BigNumber(pairInfo.totalLiquidity).gt(amountOut);
    if (!sufficientLiquidity) return null
    let newRouteObj = {
      pairs: [...routeObj.pairs, pairInfo.pair],
      market: [...routeObj.market, pairInfo.market],
      customDataList: [...routeObj.customDataList, {
        queueType: pairInfo.queueType,
        price: pairInfo.price,
        priceSwap: pairInfo.priceSwap
      }],
      route: [...routeObj.route, pairInfo.tokenIn],
      amounts: [...routeObj.amounts, amtIn]
    }
    return newRouteObj;
  }

  for (let i = 0; i < listItems.length; i++) {
    let listItem = listItems[i];
    let lastAmtIn = routeObj.amounts[routeObj.amounts.length - 1];
    let newRouteObj = getNewAmmRouteObj(listItem, routeObj, lastAmtIn); // listItem.market == Market.MIXED_QUEUE ? getNewQueueRouteObj(listItem, routeObj, lastAmtIn) : getNewAmmRouteObj(listItem, routeObj, lastAmtIn);
    if (!newRouteObj) continue;
    if (listItem.tokenIn.address == tokenIn.address) {
      routeObjList.push(newRouteObj);
      break;
    }
    else {
      if (newRouteObj.route.length >= 4) continue;
      let childPaths = getPathsByTokenIn(tradeFeeMap, pairInfoList, { ...newRouteObj }, tokenIn);
      routeObjList.push(...childPaths);
    }
  }
  return routeObjList;
}

const getPathsByTokenOut = (tradeFeeMap: any, pairInfoList: any[], routeObj: any, tokenOut: ITokenObject) => {
  let routeObjList: any[] = [];
  let listItems = pairInfoList.filter(v => v.tokenIn.address == routeObj.route[routeObj.route.length - 1].address && routeObj.route.every((n: any) => n.address != v.tokenOut.address));

  let getNewAmmRouteObj = (pairInfo: any, routeObj: any, amountIn: string) => {
    let amtOut = calculateAmountOutByTradeFee(tradeFeeMap, pairInfo, amountIn);
    let newRouteObj = {
      pairs: [...routeObj.pairs, pairInfo.pair],
      market: [...routeObj.market, pairInfo.market],
      route: [...routeObj.route, pairInfo.tokenOut],
      customDataList: [...routeObj.customDataList, {
        reserveA: pairInfo.reserveA,
        reserveB: pairInfo.reserveB
      }],
      amounts: [...routeObj.amounts, amtOut]
    }
    return newRouteObj;
  }

  let getNewQueueRouteObj = (pairInfo: any, routeObj: any, amountIn: string) => {
    let tradeFeeObj = tradeFeeMap[pairInfo.market];
    let tradeFeeFactor = new BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
    let amtOut = new BigNumber(amountIn).shiftedBy(18 - Number(pairInfo.tokenIn.decimals)).div(pairInfo.price).shiftedBy(pairInfo.tokenOut.decimals).times(tradeFeeFactor).toFixed()
    let sufficientLiquidity = new BigNumber(pairInfo.totalLiquidity).gt(amtOut);
    if (!sufficientLiquidity) return null;
    let newRouteObj = {
      pairs: [...routeObj.pairs, pairInfo.pair],
      market: [...routeObj.market, pairInfo.market],
      customDataList: [...routeObj.customDataList, {
        queueType: pairInfo.queueType,
        price: pairInfo.price,
        priceSwap: pairInfo.priceSwap
      }],
      route: [...routeObj.route, pairInfo.tokenOut],
      amounts: [...routeObj.amounts, amtOut]
    }
    return newRouteObj;
  }

  for (let i = 0; i < listItems.length; i++) {
    let listItem = listItems[i];
    let lastAmtOut = routeObj.amounts[routeObj.amounts.length - 1];
    let newRouteObj = getNewAmmRouteObj(listItem, routeObj, lastAmtOut); // listItem.market == Market.MIXED_QUEUE ? getNewQueueRouteObj(listItem, routeObj, lastAmtOut) : getNewAmmRouteObj(listItem, routeObj, lastAmtOut);
    if (!newRouteObj) continue;
    if (listItem.tokenOut.address == tokenOut.address) {
      routeObjList.push(newRouteObj);
      break;
    }
    else {
      if (newRouteObj.route.length >= 4) continue;
      let childPaths = getPathsByTokenOut(tradeFeeMap, pairInfoList, { ...newRouteObj }, tokenOut);
      routeObjList.push(...childPaths);
    }
  }
  return routeObjList;
}

const getAllExactAmountOutPaths = async (tradeFeeMap: TradeFeeMap, availableRoutes: AvailableRoute[], tokenIn: ITokenObject, tokenOut: ITokenObject, amountOut: string) => {
  let allPaths: any[] = [];
  amountOut = Utils.toDecimals(amountOut, tokenOut.decimals).toFixed();

  let getAmmRouteObj = (pairInfo: AvailableRoute) => {
    let amtIn = calculateAmountInByTradeFee(tradeFeeMap, pairInfo, amountOut);
    if (!amtIn) return null;
    let routeObj = {
      pairs: [pairInfo.pair],
      market: [pairInfo.market],
      customDataList: [{
        reserveA: pairInfo.reserveA,
        reserveB: pairInfo.reserveB
      }],
      route: [pairInfo.tokenOut, pairInfo.tokenIn],
      amounts: [amtIn]
    }
    return routeObj;
  }

  let getQueueRouteObj = (pairInfo: any) => { // pairInfo: AvailableRoute
    let tradeFeeObj = tradeFeeMap[pairInfo.market];
    let tradeFeeFactor = new BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
    let amtIn = new BigNumber(amountOut).shiftedBy(18 - Number(pairInfo.tokenOut.decimals)).div(pairInfo.priceSwap).shiftedBy(pairInfo.tokenIn.decimals).div(tradeFeeFactor).toFixed()
    let sufficientLiquidity = new BigNumber(pairInfo.totalLiquidity).gt(amountOut);
    if (!sufficientLiquidity) return null;
    let routeObj = {
      pairs: [pairInfo.pair],
      market: [pairInfo.market],
      customDataList: [{
        queueType: pairInfo.queueType,
        price: pairInfo.price,
        priceSwap: pairInfo.priceSwap
      }],
      route: [pairInfo.tokenOut, pairInfo.tokenIn],
      amounts: [amtIn]
    }
    return routeObj;
  }

  if (availableRoutes.length == 1) {
    let pairInfo = availableRoutes[0];
    if (pairInfo.tokenIn.address == tokenIn.address && pairInfo.tokenOut.address == tokenOut.address) {
      let routeObj = getAmmRouteObj(pairInfo); // pairInfo.market == Market.MIXED_QUEUE ? getQueueRouteObj(pairInfo) : getAmmRouteObj(pairInfo);
      if (!routeObj) return allPaths;
      allPaths = [routeObj]
    }
  } else if (availableRoutes.length > 1) {
    let entryList = availableRoutes.filter((v) => v.tokenOut.address == tokenOut.address);
    for (let i = 0; i < entryList.length; i++) {
      let pairInfo = entryList[i];
      let routeObj = getAmmRouteObj(pairInfo); // pairInfo.market == Market.MIXED_QUEUE ? getQueueRouteObj(pairInfo) : getAmmRouteObj(pairInfo);
      if (!routeObj) continue;
      if ((!pairInfo.tokenIn.address && !tokenIn.address) ||
        (pairInfo.tokenIn.address && tokenIn.address && pairInfo.tokenIn.address.toLowerCase() == tokenIn.address.toLowerCase())) {
        allPaths.push(routeObj);
      }
      else {
        //For the lack of a better way
        for (let j = 0; j < Object.keys(tradeFeeMap).length; j++) {
          let market = Object.keys(tradeFeeMap)[j];
          let routes = availableRoutes.filter(v => v.tokenIn.address != tokenIn.address || v.market == market);
          allPaths.push(...getPathsByTokenIn(tradeFeeMap, routes, routeObj, tokenIn));
        }
      }
    }
  }

  let sortedAllPaths = allPaths.sort((a, b) => {
    let amtInA = a.amounts[a.amounts.length - 1];
    let amtInB = b.amounts[b.amounts.length - 1];
    let compare = new BigNumber(amtInA).comparedTo(amtInB);
    return compare || 0;
  });
  return sortedAllPaths;
}

const getAllExactAmountInPaths = async (tradeFeeMap: any, availableRoutes: any[], tokenIn: ITokenObject, tokenOut: ITokenObject, amountIn: string) => {
  let allPaths: any[] = [];
  amountIn = Utils.toDecimals(amountIn, tokenIn.decimals).toFixed();

  let getAmmRouteObj = (pairInfo: any) => {
    let amtOut = calculateAmountOutByTradeFee(tradeFeeMap, pairInfo, amountIn);
    let routeObj = {
      pairs: [pairInfo.pair],
      market: [pairInfo.market],
      customDataList: [{
        reserveA: pairInfo.reserveA,
        reserveB: pairInfo.reserveB
      }],
      route: [pairInfo.tokenIn, pairInfo.tokenOut],
      amounts: [amtOut]
    }
    return routeObj;
  }

  let getQueueRouteObj = (pairInfo: any) => {
    let tradeFeeObj = tradeFeeMap[pairInfo.market];
    let tradeFeeFactor = new BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
    let amtOut = new BigNumber(amountIn).shiftedBy(18 - Number(pairInfo.tokenIn.decimals)).div(pairInfo.price).shiftedBy(pairInfo.tokenOut.decimals).times(tradeFeeFactor).toFixed()
    let sufficientLiquidity = new BigNumber(pairInfo.totalLiquidity).gt(amtOut);
    if (!sufficientLiquidity) return null;
    let routeObj = {
      pairs: [pairInfo.pair],
      market: [pairInfo.market],
      customDataList: [{
        queueType: pairInfo.queueType,
        price: pairInfo.price,
        priceSwap: pairInfo.priceSwap
      }],
      route: [pairInfo.tokenIn, pairInfo.tokenOut],
      amounts: [amtOut]
    }
    return routeObj;
  }

  if (availableRoutes.length == 1) {
    let pairInfo = availableRoutes[0];
    if (pairInfo.tokenIn.address == tokenIn.address && pairInfo.tokenOut.address == tokenOut.address) {
      let routeObj = getAmmRouteObj(pairInfo); // pairInfo.market == Market.MIXED_QUEUE ? getQueueRouteObj(pairInfo) : getAmmRouteObj(pairInfo);
      if (!routeObj) return allPaths;
      allPaths = [routeObj]
    }
  }
  else if (availableRoutes.length > 1) {
    let entryList = availableRoutes.filter((v) => v.tokenIn.address == tokenIn.address);
    for (let i = 0; i < entryList.length; i++) {
      let pairInfo = entryList[i];
      let routeObj =  getAmmRouteObj(pairInfo); // pairInfo.market == Market.MIXED_QUEUE ? getQueueRouteObj(pairInfo) : getAmmRouteObj(pairInfo);
      if (!routeObj) continue;
      if ((!pairInfo.tokenOut.address && !tokenOut.address) ||
        (pairInfo.tokenOut.address && tokenOut.address && pairInfo.tokenOut.address.toLowerCase() == tokenOut.address.toLowerCase())) {
        allPaths.push(routeObj);
      }
      else {
        //For the lack of a better way
        for (let j = 0; j < Object.keys(tradeFeeMap).length; j++) {
          let market = Object.keys(tradeFeeMap)[j];
          let routes = availableRoutes.filter(v => v.tokenOut.address != tokenOut.address || v.market == market);
          allPaths.push(...getPathsByTokenOut(tradeFeeMap, routes, routeObj, tokenOut));
        }
      }
    }
  }

  let sortedAllPaths = allPaths.sort((a, b) => {
    let lastAmtOutA = a.amounts[a.amounts.length - 1];
    let lastAmtOutB = b.amounts[b.amounts.length - 1];
    if (new BigNumber(lastAmtOutA).gt(lastAmtOutB)) {
      return -1;
    }
    else if (new BigNumber(lastAmtOutA).lt(lastAmtOutB)) {
      return 1;
    }
    return 0;
  })

  return sortedAllPaths;
}

const getBestAmountInRoute = async (markets: string[], tokenIn: ITokenObject, tokenOut: ITokenObject, amountOut: string, tokenList: ITokenObject[]) => {
  // let ammMarkets = markets.filter(v => v != Market.MIXED_QUEUE);
  let allAvailableRoutes = await getAllAvailableRoutes(markets, tokenList, tokenIn, tokenOut);
  if (allAvailableRoutes.length == 0) return null;

  // if (markets.includes(Market.MIXED_QUEUE)) {
  //     let queueTypes = [QueueType.PRIORITY_QUEUE, QueueType.RANGE_QUEUE];
  //     let allQueueAvailableRoutes = await getAllAvailableQueueRoutes(queueTypes, tokenList, tokenIn, tokenOut);
  //     allAvailableRoutes = [...allAvailableRoutes, ...allQueueAvailableRoutes];
  // }

  let wallet: any = Wallet.getInstance();
  let tradeFeeMap = await getTradeFeeMap();
  let allPaths = await getAllExactAmountOutPaths(tradeFeeMap, allAvailableRoutes, tokenIn, tokenOut, amountOut);
  if (allPaths.length == 0) {
    return null;
  }

  let bestRouteObj = {
    pairs: allPaths[0].pairs.reverse(),
    market: allPaths[0].market.reverse(),
    amounts: allPaths[0].amounts.reverse(),
    route: allPaths[0].route.reverse(),
    customDataList: allPaths[0].customDataList.reverse()
  };
  // if (bestRouteObj.market.length == 1 || bestRouteObj.market.every(n => n == bestRouteObj.market[0])) return null
  let tokenLowestIn = bestRouteObj.amounts[0];
  let lowestIn = Utils.fromDecimals(tokenLowestIn, tokenIn.decimals).toFixed();
  let swapPrice = new BigNumber(lowestIn).div(amountOut);
  let extendedData = await getExtendedRouteObjData(wallet, bestRouteObj, tradeFeeMap, swapPrice, true);
  return {
    ...extendedData,
    amountIn: lowestIn
  };
}

const getBestAmountOutRoute = async (markets: string[], tokenIn: ITokenObject, tokenOut: ITokenObject, amountIn: string, tokenList: ITokenObject[], isHybrid: boolean) => {
  // let ammMarkets = markets.filter(v => v != Market.MIXED_QUEUE);
  let allAvailableRoutes = await getAllAvailableRoutes(markets, tokenList, tokenIn, tokenOut);
  if (allAvailableRoutes.length == 0) {
    return null;
  }
  // if (markets.includes(Market.MIXED_QUEUE)) {
  //   let queueTypes = [QueueType.PRIORITY_QUEUE, QueueType.RANGE_QUEUE];
  //   let allQueueAvailableRoutes = await getAllAvailableQueueRoutes(queueTypes, tokenList, tokenIn, tokenOut);
  //   allAvailableRoutes = [...allAvailableRoutes, ...allQueueAvailableRoutes];
  // }
  let wallet: any = Wallet.getInstance();
  let tradeFeeMap = await getTradeFeeMap();
  let allPaths = await getAllExactAmountInPaths(tradeFeeMap, allAvailableRoutes, tokenIn, tokenOut, amountIn);
  if (allPaths.length == 0) {
    return null;
  }

  let bestRouteObj = allPaths[0];
  // if (bestRouteObj.market.length == 1 || bestRouteObj.market.every(n => n == bestRouteObj.market[0])) {
  //   return null
  // }

  let tokenHighestOut = bestRouteObj.amounts[bestRouteObj.amounts.length - 1];
  let highestOut = Utils.fromDecimals(tokenHighestOut, tokenOut.decimals).toFixed();
  let swapPrice = new BigNumber(amountIn).div(highestOut);
  let extendedData = await getExtendedRouteObjData(wallet, bestRouteObj, tradeFeeMap, swapPrice, isHybrid);
  return {
    ...extendedData,
    amountOut: highestOut
  };
}

async function getExtendedRouteObjData(wallet: any, bestRouteObj: any, tradeFeeMap: TradeFeeMap, swapPrice: BigNumber, isHybridOrQueue: boolean) {
  let currPrice = new BigNumber(0);
  if (bestRouteObj.customDataList.length > 0) {
    currPrice = bestRouteObj.market.map((v: string, i: number) => {
      let customDataObj = bestRouteObj.customDataList[i];
      // if (v == Market.MIXED_QUEUE && customDataObj.price) {
      //   return new BigNumber(customDataObj.price).shiftedBy(-bestRouteObj.route[i].decimals);
      // }
      // else {
      //   let reserveA = new BigNumber(customDataObj.reserveA).shiftedBy(-bestRouteObj.route[i].decimals);
      //   let reserveB = new BigNumber(customDataObj.reserveB).shiftedBy(-bestRouteObj.route[i + 1].decimals);
      //   return reserveA.div(reserveB);
      // }
      let reserveA = new BigNumber(customDataObj.reserveA).shiftedBy(-bestRouteObj.route[i].decimals);
      let reserveB = new BigNumber(customDataObj.reserveB).shiftedBy(-bestRouteObj.route[i + 1].decimals);
      return reserveA.div(reserveB);
    })
      .reduce((prev: any, curr: any) => prev.times(curr));
  }

  let fee = new BigNumber(1).minus(bestRouteObj.market.map((market:number) => {
    let tradeFeeObj = tradeFeeMap[market]
    let tradeFee = new BigNumber(tradeFeeObj.fee).div(tradeFeeObj.base);
    return new BigNumber(1).minus(tradeFee)
  }).reduce((a: any, b: any) => a.times(b)));

  let priceImpact: string = swapPrice.minus(currPrice).div(swapPrice).minus(fee).toFixed();
  // if (bestRouteObj.market.length == 1 && bestRouteObj.market[0] == Market.MIXED_QUEUE) {
  //   priceImpact = '0';
  // }
  // else {
  //   priceImpact = swapPrice.minus(currPrice).div(swapPrice).minus(fee).toFixed();
  // }

  //let gasFee = await calculateGasFee(wallet, bestRouteObj.market);

  let extendedRouteObj: any = {
    pairs: bestRouteObj.pairs,
    market: bestRouteObj.market,
    bestRoute: bestRouteObj.route,
    priceImpact: priceImpact,
    price: swapPrice.toFixed(),
    tradeFee: fee.toFixed(),
  }

  // TODO: check later
  // if (isHybridOrQueue) {
  //   let Address = getAddresses();
  //   let undefinedPairs: string[] = [];
  //   if (!bestRouteObj.isRegistered && Address['OSWAP_HybridRouterRegistry']) {
  //     for (let i = 0; i < bestRouteObj.pairs.length; i++) {
  //       let pair = bestRouteObj.pairs[i];
  //       let hybridRouterRegistry = new Contracts.OSWAP_HybridRouterRegistry(wallet, Address['OSWAP_HybridRouterRegistry']);
  //       let typeCode = (await hybridRouterRegistry.getTypeCode(pair)).toFixed();
  //       if (typeCode === '0') undefinedPairs.push(pair);
  //     }
  //   }

  //   let providerConfigByKey: any = {};
  //   getProviderList().forEach((v, i) => {
  //     providerConfigByKey[v.key] = v;
  //   });
  //   let bestSmartRoute = bestRouteObj.market.map((v: any, i: any) => {
  //     let providerObj = providerConfigByKey[v];
  //     let isRegistered;
  //     if (bestRouteObj.isRegistered) {
  //       isRegistered = bestRouteObj.isRegistered[i];
  //     }
  //     else {
  //       isRegistered = Address['OSWAP_HybridRouterRegistry'] ? !undefinedPairs.includes(bestRouteObj.pairs[i]) : true;
  //     }

  //     let obj: any = {
  //       provider: providerObj.key,
  //       pairAddress: bestRouteObj.pairs[i],
  //       caption: providerObj.caption,
  //       fromToken: bestRouteObj.route[i],
  //       toToken: bestRouteObj.route[i + 1],
  //       isRegistered
  //     }
  //     if (v == Market.MIXED_QUEUE) {
  //       let { queueType, orderIds } = bestRouteObj.customDataList[i];
  //       obj = {
  //         ...obj,
  //         queueType,
  //         orderIds
  //       }
  //     }

  //     return obj;
  //   })

  //   extendedRouteObj = {
  //     ...extendedRouteObj,
  //     bestSmartRoute
  //   }
  // }

  return extendedRouteObj;
}

// const getQueueInfoByAmtOut = async (queueType: QueueType, firstTokenObject: any, secondTokenObject: any, amountIn: string) => {  
//   let queueInfoObj;

//   if (queueType == QueueType.GROUP_QUEUE) {
//       let pair = await getOraclePair(queueType, firstTokenObject, secondTokenObject);
//       if (!pair) return null
//       queueInfoObj = await getGroupQueueTraderDataObj(pair, firstTokenObject, secondTokenObject, amountIn);
//       if (queueInfoObj && queueInfoObj.sufficientLiquidity && queueInfoObj.tradeFeeObj) {
//           let tradeFeeObj = queueInfoObj.tradeFeeObj;
//           let tradeFeeFactor = new BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
//           let tradeFee = new BigNumber(1).minus(tradeFeeFactor);            
//           return {queueType, pair, ...queueInfoObj, tradeFee}
//       }  
//   }

//   return null;
// }

// const getQueueInPriceData = async (market: Market, tokenIn: any, tokenOut: any, amountOut: string, callback?: any) => {
//   if (!tokenIn.address) tokenIn = getWETH();
//   if (!tokenOut.address) tokenOut = getWETH();
//   let queueInfo;
//   if (market == Market.GROUP_QUEUE) {
//     let groupQueueInfo: any = await getQueueInfoByAmtOut(QueueType.GROUP_QUEUE, tokenIn, tokenOut, amountOut); 
//     if (groupQueueInfo) queueInfo = groupQueueInfo;   
//   }

//   if (!queueInfo || queueInfo.queueType == null) return null;

//   let ret = { 
//       priceImpact: '0',
//       ...queueInfo
//   };
//   if (callback)
//       callback(null, ret);
//   return ret;
// }

// const getQueueInfoByAmtIn = async (queueType: QueueType, firstTokenObject: any, secondTokenObject: any, amountIn: string) => {  
//   let queueInfoObj;

//   if (queueType == QueueType.GROUP_QUEUE) {
//       let pair = await getOraclePair(queueType, firstTokenObject, secondTokenObject);
//       if (!pair) return null
//       queueInfoObj = await getGroupQueueTraderDataObj(pair, firstTokenObject, secondTokenObject, amountIn);
//       if (queueInfoObj && queueInfoObj.sufficientLiquidity && queueInfoObj.tradeFeeObj) {
//           let tradeFeeObj = queueInfoObj.tradeFeeObj;
//           let tradeFeeFactor = new BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
//           let tradeFee = new BigNumber(1).minus(tradeFeeFactor);            
//           return {queueType, pair, ...queueInfoObj, tradeFee}
//       }  
//   }

//   return null;
// }

// const getQueueOutPriceData = async (market: Market, tokenIn: any, tokenOut: any, amountIn: string, callback?: any) => {
//   if (!tokenIn.address) tokenIn = getWETH();
//   if (!tokenOut.address) tokenOut = getWETH();

//   let queueInfo; 
//   if (market == Market.GROUP_QUEUE) {
//     let groupQueueInfo: any = await getQueueInfoByAmtIn(QueueType.GROUP_QUEUE, tokenIn, tokenOut, amountIn); 
//     if (groupQueueInfo) queueInfo = groupQueueInfo;   
//   }

//   if (!queueInfo || queueInfo.queueType == null) return null;

//   let ret = {    
//       priceImpact: '0',
//       ...queueInfo
//   };
//   if (callback)
//       callback(null, ret);
//   return ret;
// }

// const getOracleProviderOptionObj = async (market: Market, firstTokenObject: any, secondTokenObject: any, firstInput: BigNumber, secondInput: BigNumber, isFromEstimated: boolean) => {

//   const wallet = getWallet()
//   let fromAmount = new BigNumber(0);
//   let toAmount = new BigNumber(0);        
//   let pairs;

//   let routeObj;
//   try {  
//     if (isFromEstimated) {
//       toAmount = secondInput;
//       routeObj = await getQueueInPriceData(market, firstTokenObject, secondTokenObject, secondInput.toString());
//       if (!routeObj) return null;
//       pairs = [routeObj.pair];
//       let oracleAmount = new BigNumber(routeObj.amountIn);
//       fromAmount = oracleAmount;                   
//     }
//     else {
//       fromAmount = firstInput;
//       routeObj = await getQueueOutPriceData(market, firstTokenObject, secondTokenObject, firstInput.toString());
//       if (!routeObj) return null;
//       pairs = [routeObj.pair];      
//       let oracleAmount = new BigNumber(routeObj.amountOut);        
//       toAmount = oracleAmount;
//       //gasFee =  parseFloat(await Oracle.calculateTradeExactInGasFee(firstTokenObject, secondTokenObject, firstInput.toString(), minReceivedMaxSold.toString(), eth.selectedAddress, transactionDeadline, [true], "0x"));                            
//     }
//   } catch (err) {

//   }
//   let provider =""
//   switch (market) {
//     case Market.MIXED_QUEUE:
//       provider = 'Oracle'
//       break;
//     case Market.PEGGED_QUEUE:
//       provider = 'PeggedOracle'
//       break;
//     case Market.GROUP_QUEUE:
//       provider = 'GroupQueue'
//       break;
//   }


//   let isApproveButtonShown = await checkIsApproveButtonShown(wallet,firstTokenObject, fromAmount, market);   
//   if (routeObj) {
//     return { 
//       ...routeObj,
//       key: provider, 
//       provider: provider,
//       fromAmount, 
//       toAmount,  
//       isApproveButtonShown,
//       pairs
//     };
//   }
   
//   return null
// }

async function getAllRoutesData(firstTokenObject: ITokenObject, secondTokenObject: ITokenObject, firstInput: BigNumber, secondInput: BigNumber, isFromEstimated: boolean, targetChainId?: number) {
  let wallet: any = getWallet();
  let resultArr: any[] = [];
  if (firstTokenObject && secondTokenObject && (firstInput.gt(0) || secondInput.gt(0))) {
    let routeDataArr = [];
    if (isFromEstimated) {
      routeDataArr = await getBestAmountInRouteFromAPI(wallet, firstTokenObject, secondTokenObject, secondInput.toString(), targetChainId);
      if (routeDataArr.length == 0) {
        const providerKey = getProviderList()[0]?.key;
        let routeObj = await getBestAmountInRoute(providerKey ? [providerKey] : [], firstTokenObject, secondTokenObject, firstInput.toString(), []);
        if (routeObj && routeObj.market.length == 1) {
          let providerConfigByKey: any = {};
          let _chainId = getChainId();
          getProviderList().filter(v => !!v.supportedChains && v.supportedChains.includes(_chainId!)).forEach((v, i) => {
            providerConfigByKey[v.key] = v;
          });
          let price = parseFloat(routeObj.price);
          let priceSwap = new BigNumber(1).div(routeObj.price).toNumber();
          let priceImpact = Number(routeObj.priceImpact) * 100;
          let tradeFee = parseFloat(routeObj.tradeFee);
          let provider = providerConfigByKey[routeObj.market[0]].key
          let key = provider + '|0';
          routeDataArr.push({
            ...routeObj,
            price,
            priceSwap,
            priceImpact,
            tradeFee,
            key,
            provider
          })
        }
      }
    }
    else {
      routeDataArr = await getBestAmountOutRouteFromAPI(wallet, firstTokenObject, secondTokenObject, firstInput.toString(), targetChainId);
      if (routeDataArr.length == 0) {
        const providerKey = getProviderList()[0]?.key;
        let routeObj = await getBestAmountOutRoute(providerKey ? [providerKey] : [], firstTokenObject, secondTokenObject, firstInput.toString(), [], false);
        if (routeObj && routeObj.market.length == 1) {
          let providerConfigByMarketCode: any = {};
          let _chainId = getChainId();
          getProviderList().filter(v => {
            return !!v.supportedChains && v.supportedChains.includes(_chainId!)
          }).forEach((v, i) => {
            providerConfigByMarketCode[v.key] = v;
          });
          let price = parseFloat(routeObj.price);
          let priceSwap = new BigNumber(1).div(routeObj.price).toNumber();
          let priceImpact = Number(routeObj.priceImpact) * 100;
          let tradeFee = parseFloat(routeObj.tradeFee);
          let provider = providerConfigByMarketCode[routeObj.market[0]]?.key
          let key = provider + '|0';
          routeDataArr.push({
            ...routeObj,
            price,
            priceSwap,
            priceImpact,
            tradeFee,
            key,
            provider
          })
        }
      }
    }

    if (routeDataArr && routeDataArr.length > 0) {
      for (let i = 0; i < routeDataArr.length; i++) {
        let optionObj = routeDataArr[i];
        const provider = getProviderList().find(item => item.key === optionObj.provider)?.key || '';
        let routeObj = await composeRouteObj(wallet, optionObj, provider, firstTokenObject, firstInput, secondInput, isFromEstimated, targetChainId == undefined);
        if (!routeObj) continue;
        resultArr.push(routeObj);
      }
    }

    //Restricted Group Queue 
    /*let option = await getOracleProviderOptionObj(Market.GROUP_QUEUE, firstTokenObject, secondTokenObject, firstInput, secondInput, isFromEstimated);
    if (option) resultArr.push(option)
    console.log("option", option)
    */
  }
  return resultArr;
}

// const getHybridAmountsOut = async (wallet: any, amountIn: BigNumber, tokenIn: string, pair: string[], data: string = '0x') => {
//   let result
//   try {
//     let Address = getAddresses();
//     let hybridRouter = new Contracts.OSWAP_HybridRouter2(wallet, Address['OSWAP_HybridRouter2']);
//     result = await hybridRouter.getAmountsOutStartsWith({
//       amountIn,
//       pair,
//       tokenIn,
//       data
//     })
//   }
//   catch (err) {
//     console.log('getHybrid2AmountsOut', err)
//   }
//   return result;
// }

// const getHybridAmountsIn = async (wallet: any, amountOut: BigNumber, tokenIn: string, pair: string[], data: string = '0x') => {
//   let result
//   try {
//     let Address = getAddresses();
//     let hybridRouter = new Contracts.OSWAP_HybridRouter2(wallet, Address['OSWAP_HybridRouter2']);
//     result = await hybridRouter.getAmountsInStartsWith({
//       amountOut,
//       pair,
//       tokenIn,
//       data
//     })
//   }
//   catch (err) {

//   }
//   return result;
// }

// const BakerySwapTradeExactIn = async function (wallet: any, routerAddress: string, tokenIn: ITokenObject, tokenOut: ITokenObject, path: string[], amountIn: string, amountOutMin: string, toAddress: string, deadline: number, feeOnTransfer: boolean) {
//   let receipt;
//   let router = new BakeryContracts.BakerySwapRouter(wallet, routerAddress);
//   if (!tokenIn.address) {
//     let params = {
//       amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
//       path,
//       to: toAddress,
//       deadline
//     };
//     if (feeOnTransfer) {
//       receipt = await router.swapExactBNBForTokensSupportingFeeOnTransferTokens(params, Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
//     }
//     else {
//       receipt = await router.swapExactBNBForTokens(params, Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
//     }
//   } else if (!tokenOut.address) {
//     let params = {
//       amountIn: Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
//       amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
//       path,
//       to: toAddress,
//       deadline
//     };

//     if (feeOnTransfer) {
//       receipt = await router.swapExactTokensForBNBSupportingFeeOnTransferTokens(params);
//     }
//     else {
//       receipt = await router.swapExactTokensForBNB(params);
//     }
//   }
//   else {
//     let params = {
//       amountIn: Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
//       amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
//       path,
//       to: toAddress,
//       deadline
//     };
//     if (feeOnTransfer) {
//       receipt = await router.swapExactTokensForTokensSupportingFeeOnTransferTokens(params);
//     }
//     else {
//       receipt = await router.swapExactTokensForTokens(params);
//     }
//   }
//   return receipt;
// }

// const BakerySwapTradeExactOut = async function (wallet: any, routerAddress: string, tokenIn: ITokenObject, tokenOut: ITokenObject, path: string[], amountOut: string, amountInMax: string, toAddress: string, deadline: number) {
//   let receipt;
//   let router = new BakeryContracts.BakerySwapRouter(wallet, routerAddress);
//   if (!tokenIn.address) {
//     let params = {
//       amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
//       path,
//       to: toAddress,
//       deadline
//     };
//     receipt = await router.swapBNBForExactTokens(params, Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0));
//   } else if (!tokenOut.address) {
//     let params = {
//       amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
//       amountInMax: Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
//       path,
//       to: toAddress,
//       deadline
//     };
//     receipt = await router.swapTokensForExactBNB(params);
//   }
//   else {
//     let params = {
//       amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
//       amountInMax: Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
//       path,
//       to: toAddress,
//       deadline
//     };
//     receipt = await router.swapTokensForExactTokens(params);
//   }
//   return receipt;
// }

// const TraderJoeTradeExactIn = async function (wallet: any, routerAddress: string, tokenIn: ITokenObject, tokenOut: ITokenObject, path: string[], amountIn: string, amountOutMin: string, toAddress: string, deadline: number, feeOnTransfer: boolean) {
//   let receipt;
//   let router = new TraderJoeContracts.JoeRouter02(wallet, routerAddress);
//   if (!tokenIn.address) {
//     let params = {
//       amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
//       path,
//       to: toAddress,
//       deadline
//     };
//     if (feeOnTransfer) {
//       receipt = await router.swapExactAVAXForTokensSupportingFeeOnTransferTokens(params, Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
//     }
//     else {
//       receipt = await router.swapExactAVAXForTokens(params, Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
//     }
//   } else if (!tokenOut.address) {
//     let params = {
//       amountIn: Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
//       amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
//       path,
//       to: toAddress,
//       deadline
//     };

//     if (feeOnTransfer) {
//       receipt = await router.swapExactTokensForAVAXSupportingFeeOnTransferTokens(params);
//     }
//     else {
//       receipt = await router.swapExactTokensForAVAX(params);
//     }
//   }
//   else {
//     let params = {
//       amountIn: Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
//       amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
//       path,
//       to: toAddress,
//       deadline
//     };
//     if (feeOnTransfer) {
//       receipt = await router.swapExactTokensForTokensSupportingFeeOnTransferTokens(params);
//     }
//     else {
//       receipt = await router.swapExactTokensForTokens(params);
//     }
//   }
//   return receipt;
// }

// const TraderJoeTradeExactOut = async function (wallet: any, routerAddress: string, tokenIn: ITokenObject, tokenOut: ITokenObject, path: string[], amountOut: string, amountInMax: string, toAddress: string, deadline: number) {
//   let receipt;
//   let router = new TraderJoeContracts.JoeRouter02(wallet, routerAddress);
//   if (!tokenIn.address) {
//     let params = {
//       amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
//       path,
//       to: toAddress,
//       deadline
//     };
//     receipt = await router.swapAVAXForExactTokens(params, Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0));
//   } else if (!tokenOut.address) {
//     let params = {
//       amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
//       amountInMax: Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
//       path,
//       to: toAddress,
//       deadline
//     };
//     receipt = await router.swapTokensForExactAVAX(params);
//   }
//   else {
//     let params = {
//       amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
//       amountInMax: Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
//       path,
//       to: toAddress,
//       deadline
//     };
//     receipt = await router.swapTokensForExactTokens(params);
//   }
//   return receipt;
// }

// const ImpossibleSwapTradeExactIn = async function (wallet: any, routerAddress: string, tokenIn: ITokenObject, tokenOut: ITokenObject, path: string[], amountIn: string, amountOutMin: string, toAddress: string, deadline: number, feeOnTransfer: boolean) {
//   let receipt;
//   let router = new ImpossibleContracts.ImpossibleRouter(wallet, routerAddress);
//   if (!tokenIn.address) {
//     let params = {
//       amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
//       path,
//       to: toAddress,
//       deadline
//     };
//     if (feeOnTransfer) {
//       receipt = await router.swapExactETHForTokensSupportingFeeOnTransferTokens(params, Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
//     }
//     else {
//       receipt = await router.swapExactETHForTokens(params, Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
//     }
//   } else if (!tokenOut.address) {
//     let params = {
//       amountIn: Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
//       amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
//       path,
//       to: toAddress,
//       deadline
//     };

//     if (feeOnTransfer) {
//       //swapExactTokensForBNBSupportingFeeOnTransferTokens
//       receipt = await router.swapExactTokensForETHSupportingFeeOnTransferTokens(params);
//     }
//     else {
//       //swapExactTokensForBNB
//       receipt = await router.swapExactTokensForETH(params);
//     }
//   }
//   else {
//     let params = {
//       amountIn: Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
//       amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
//       path,
//       to: toAddress,
//       deadline
//     };
//     if (feeOnTransfer) {
//       receipt = await router.swapExactTokensForTokensSupportingFeeOnTransferTokens(params);
//     }
//     else {
//       receipt = await router.swapExactTokensForTokens(params);
//     }
//   }
//   return receipt;
// }

// const ImpossibleSwapTradeExactOut = async function (wallet: any, routerAddress: string, tokenIn: ITokenObject, tokenOut: ITokenObject, path: string[], amountOut: string, amountInMax: string, toAddress: string, deadline: number) {
//   let receipt;
//   // let router = new ImpossibleContracts.ImpossibleRouter(wallet, routerAddress);
//   // if (!tokenIn.address) {
//   //   let params = {
//   //     amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
//   //     path,
//   //     to: toAddress,
//   //     deadline
//   //   };
//   //   receipt = await router.swapETHForExactTokens(params, Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0));
//   // } else if (!tokenOut.address) {
//   //   let params = {
//   //     amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
//   //     amountInMax: Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
//   //     path,
//   //     to: toAddress,
//   //     deadline
//   //   };
//   //   receipt = await router.swapTokensForExactETH(params);
//   // }
//   // else {
//   //   let params = {
//   //     amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
//   //     amountInMax: Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
//   //     path,
//   //     to: toAddress,
//   //     deadline
//   //   };
//   //   receipt = await router.swapTokensForExactTokens(params);
//   // }
//   return receipt;
// }

const AmmTradeExactIn = async function (wallet: any, market: string, routeTokens: ITokenObject[], amountIn: string, amountOutMin: string, toAddress: string, deadline: number, feeOnTransfer: boolean, callback?: any, confirmationCallback?: any) {
  if (routeTokens.length < 2) {
    return null;
  }
  let tokenIn = routeTokens[0];
  let tokenOut = routeTokens[routeTokens.length - 1];

  let routerAddress = getRouterAddress(market);
  let addresses = [];
  let wrappedTokenAddress = getWrappedTokenAddress();
  for (let i = 0; i < routeTokens.length; i++) {
    addresses.push(routeTokens[i].address || wrappedTokenAddress);
  }
  let receipt;
  // switch (market) {
  //   case Market.IFSWAPV3:
  //     receipt = await ImpossibleSwapTradeExactIn(wallet, routerAddress, tokenIn, tokenOut, addresses, amountIn, amountOutMin, toAddress, deadline, feeOnTransfer);
  //     break;
  //   case Market.BAKERYSWAP:
  //     receipt = await BakerySwapTradeExactIn(wallet, routerAddress, tokenIn, tokenOut, addresses, amountIn, amountOutMin, toAddress, deadline, feeOnTransfer);
  //     break;
  //   case Market.TRADERJOE:
  //   case Market.PANGOLIN:
  //     receipt = await TraderJoeTradeExactIn(wallet, routerAddress, tokenIn, tokenOut, addresses, amountIn, amountOutMin, toAddress, deadline, feeOnTransfer);
  //     break;
  //   default:
  //     if (!tokenIn.address) {
  //       let params = {
  //         amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
  //         path: addresses,
  //         to: toAddress,
  //         deadline
  //       };
  //       let router = new Contracts.OSWAP_Router(wallet, routerAddress);
  //       if (feeOnTransfer) {
  //         receipt = await router.swapExactETHForTokensSupportingFeeOnTransferTokens(params, Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
  //       }
  //       else {
  //         receipt = await router.swapExactETHForTokens(params, Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
  //       }
  //     } else if (!tokenOut.address) {
  //       let params = {
  //         amountIn: Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
  //         amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
  //         path: addresses,
  //         to: toAddress,
  //         deadline
  //       };
  
  //       let router = new Contracts.OSWAP_Router(wallet, routerAddress);
  //       if (feeOnTransfer) {
  //         receipt = await router.swapExactTokensForETHSupportingFeeOnTransferTokens(params);
  //       }
  //       else {
  //         receipt = await router.swapExactTokensForETH(params);
  //       }
  //     }
  //     else {
  //       let params = {
  //         amountIn: Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
  //         amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
  //         path: addresses,
  //         to: toAddress,
  //         deadline
  //       };
  //       let router = new Contracts.OSWAP_Router(wallet, routerAddress);
  //       if (feeOnTransfer) {
  //         receipt = await router.swapExactTokensForTokensSupportingFeeOnTransferTokens(params);
  //       }
  //       else {
  //         receipt = await router.swapExactTokensForTokens(params);
  //       }
  //     }
  //     break;
  // }
  if (!tokenIn.address) {
    let params = {
      amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
      path: addresses,
      to: toAddress,
      deadline
    };
    let router = new Contracts.OSWAP_Router(wallet, routerAddress);
    if (feeOnTransfer) {
      receipt = await router.swapExactETHForTokensSupportingFeeOnTransferTokens(params, Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
    }
    else {
      receipt = await router.swapExactETHForTokens(params, Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
    }
  } else if (!tokenOut.address) {
    let params = {
      amountIn: Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
      amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
      path: addresses,
      to: toAddress,
      deadline
    };

    let router = new Contracts.OSWAP_Router(wallet, routerAddress);
    if (feeOnTransfer) {
      receipt = await router.swapExactTokensForETHSupportingFeeOnTransferTokens(params);
    }
    else {
      receipt = await router.swapExactTokensForETH(params);
    }
  }
  else {
    let params = {
      amountIn: Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
      amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
      path: addresses,
      to: toAddress,
      deadline
    };
    let router = new Contracts.OSWAP_Router(wallet, routerAddress);
    if (feeOnTransfer) {
      receipt = await router.swapExactTokensForTokensSupportingFeeOnTransferTokens(params);
    }
    else {
      receipt = await router.swapExactTokensForTokens(params);
    }
  }
  return receipt;
}

const AmmTradeExactOut = async function (wallet: any, market: string, routeTokens: ITokenObject[], amountOut: string, amountInMax: string, toAddress: string, deadline: number, callback?: any, confirmationCallback?: any) {
  if (routeTokens.length < 2) {
    return null;
  }
  let tokenIn = routeTokens[0];
  let tokenOut = routeTokens[routeTokens.length - 1];

  let routerAddress = getRouterAddress(market);
  let router = new Contracts.OSWAP_Router(wallet, routerAddress);

  let addresses = [];
  let wrappedTokenAddress = getWrappedTokenAddress();
  for (let i = 0; i < routeTokens.length; i++) {
    addresses.push(routeTokens[i].address || wrappedTokenAddress);
  }
  let receipt;
  // switch (market) {
  //   case Market.IFSWAPV3:
  //     receipt = await ImpossibleSwapTradeExactOut(wallet, routerAddress, tokenIn, tokenOut, addresses, amountOut, amountInMax, toAddress, deadline);
  //     break;
  //   case Market.BAKERYSWAP:
  //     receipt = await BakerySwapTradeExactOut(wallet, routerAddress, tokenIn, tokenOut, addresses, amountOut, amountInMax, toAddress, deadline);
  //     break;
  //   case Market.TRADERJOE:
  //   case Market.PANGOLIN:
  //     receipt = await TraderJoeTradeExactOut(wallet, routerAddress, tokenIn, tokenOut, addresses, amountOut, amountInMax, toAddress, deadline);
  //     break;
  //   default:
  //     if (!tokenIn.address) {
  //       let params = {
  //         amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
  //         path: addresses,
  //         to: toAddress,
  //         deadline
  //       };
  //       receipt = await router.swapETHForExactTokens(params, Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0));
  //     } else if (!tokenOut.address) {
  //       let params = {
  //         amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
  //         amountInMax: Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
  //         path: addresses,
  //         to: toAddress,
  //         deadline
  //       };
  //       receipt = await router.swapTokensForExactETH(params);
  //     } else {
  //       let params = {
  //         amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
  //         amountInMax: Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
  //         path: addresses,
  //         to: toAddress,
  //         deadline
  //       };
  //       receipt = await router.swapTokensForExactTokens(params);
  //     }
  //     break;
  // }
  if (!tokenIn.address) {
    let params = {
      amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
      path: addresses,
      to: toAddress,
      deadline
    };
    receipt = await router.swapETHForExactTokens(params, Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0));
  } else if (!tokenOut.address) {
    let params = {
      amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
      amountInMax: Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
      path: addresses,
      to: toAddress,
      deadline
    };
    receipt = await router.swapTokensForExactETH(params);
  } else {
    let params = {
      amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
      amountInMax: Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
      path: addresses,
      to: toAddress,
      deadline
    };
    receipt = await router.swapTokensForExactTokens(params);
  }
  return receipt;
}

// const hybridTradeExactIn = async (wallet: any, bestSmartRoute: any[], path: any[], pairs: string[], amountIn: string, amountOutMin: string, toAddress: string, deadline: number, feeOnTransfer: boolean, data: string, callback?: any, confirmationCallback?: any) => {
//   if (path.length < 2) {
//     return null;
//   }

//   let tokenIn = path[0];
//   let tokenOut = path[path.length - 1];

//   if (bestSmartRoute && bestSmartRoute.length > 0) {
//     let pairIndex = bestSmartRoute.findIndex(n => n.queueType == QueueType.RANGE_QUEUE);
//     if (pairIndex != -1) {
//       if (bestSmartRoute[pairIndex].orderIds) {
//         let orderIds: number[] = bestSmartRoute[pairIndex].orderIds;
//         data = "0x" + Utils.numberToBytes32(0x20 * (orderIds.length + 1)) + Utils.numberToBytes32(orderIds.length) + orderIds.map(e => Utils.numberToBytes32(e)).join('');
//       }
//       else {
//         let amountInTokenAmount = Utils.toDecimals(amountIn, tokenIn.decimals).dp(0);
//         let tokenInAddress = tokenIn.address ? tokenIn.address : getWrappedTokenAddress();
//         let amountsOutObj = await getHybridAmountsOut(wallet, amountInTokenAmount, tokenInAddress, pairs);
//         if (!amountsOutObj) return null;
//         let pair = pairs[pairIndex];
//         let tokenA = path[pairIndex];
//         let tokenB = path[pairIndex + 1];
//         let rangeAmountOut = amountsOutObj[pairIndex + 1];
//         data = await getRangeQueueData(pair, tokenA, tokenB, rangeAmountOut);
//       }
//     }
//   }

//   let hybridRouterAddress = getHybridRouterAddress();
//   let hybridRouter = new Contracts.OSWAP_HybridRouter2(wallet, hybridRouterAddress);

//   let receipt;
//   if (!tokenIn.address) {
//     let params = {
//       amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
//       pair: pairs,
//       to: toAddress,
//       deadline,
//       data
//     };
//     if (feeOnTransfer) {
//       receipt = await hybridRouter.swapExactETHForTokensSupportingFeeOnTransferTokens(params, Utils.toDecimals(amountIn).dp(0))
//     }
//     else {
//       receipt = await hybridRouter.swapExactETHForTokens(params, Utils.toDecimals(amountIn).dp(0))
//     }
//   } else if (!tokenOut.address) {
//     let params = {
//       amountIn: Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
//       amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
//       pair: pairs,
//       to: toAddress,
//       deadline,
//       data
//     };
//     if (feeOnTransfer) {
//       receipt = await hybridRouter.swapExactTokensForETHSupportingFeeOnTransferTokens(params)
//     }
//     else {
//       receipt = await hybridRouter.swapExactTokensForETH(params)
//     }
//   }
//   else {
//     let params = {
//       amountIn: Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
//       amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
//       pair: pairs,
//       tokenIn: tokenIn.address,
//       to: toAddress,
//       deadline,
//       data
//     };
//     if (feeOnTransfer) {
//       receipt = await hybridRouter.swapExactTokensForTokensSupportingFeeOnTransferTokens(params)
//     }
//     else {
//       receipt = await hybridRouter.swapExactTokensForTokens(params)
//     }
//   }
//   return receipt;
// }

// const hybridTradeExactOut = async (wallet: any, bestSmartRoute: any, path: any[], pairs: string[], amountOut: string, amountInMax: string, toAddress: string, deadline: number, data: string, callback?: any, confirmationCallback?: any) => {
//   if (path.length < 2) {
//     return null;
//   }
//   let tokenIn = path[0];
//   let tokenOut = path[path.length - 1];

//   if (bestSmartRoute && bestSmartRoute.length > 0) {
//     let pairIndex = bestSmartRoute.findIndex((n: any) => n.queueType == QueueType.RANGE_QUEUE);
//     if (pairIndex != -1) {
//       if (bestSmartRoute[pairIndex].orderIds) {
//         let orderIds: number[] = bestSmartRoute[pairIndex].orderIds;
//         data = "0x" + Utils.numberToBytes32(0x20 * (orderIds.length + 1)) + Utils.numberToBytes32(orderIds.length) + orderIds.map(e => Utils.numberToBytes32(e)).join('');
//       }
//       else {
//         let amountOutTokenAmount = Utils.toDecimals(amountOut, tokenOut.decimals).dp(0);
//         let amountsOutObj = await getHybridAmountsIn(wallet, amountOutTokenAmount, tokenIn, pairs);
//         if (!amountsOutObj) return null;
//         let pair = pairs[pairIndex];
//         let tokenA = path[pairIndex];
//         let tokenB = path[pairIndex + 1];
//         let rangeAmountOut = amountsOutObj[pairIndex + 1];
//         data = await getRangeQueueData(pair, tokenA, tokenB, rangeAmountOut);
//       }
//     }
//   }

//   let hybridRouterAddress = getHybridRouterAddress();
//   let hybridRouter = new Contracts.OSWAP_HybridRouter2(wallet, hybridRouterAddress);

//   let receipt;
//   if (!tokenIn.address) {
//     let params = {
//       amountOut: Utils.toDecimals(amountOut, tokenOut.decimals),
//       pair: pairs,
//       to: toAddress,
//       deadline,
//       data
//     };
//     receipt = await hybridRouter.swapETHForExactTokens(params, Utils.toDecimals(amountInMax).dp(0));
//   } else if (!tokenOut.address) {
//     let params = {
//       amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
//       amountInMax: Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
//       pair: pairs,
//       to: toAddress,
//       deadline,
//       data
//     };
//     receipt = await hybridRouter.swapTokensForExactETH(params);
//   } else {
//     let params = {
//       amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
//       amountInMax: Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
//       pair: pairs,
//       tokenOut: tokenOut.address,
//       to: toAddress,
//       deadline,
//       data
//     };
//     receipt = await hybridRouter.swapTokensForExactTokens(params);
//   }
//   return receipt;
// }

interface SwapData {
  provider: string;
  queueType?: QueueType;
  routeTokens: any[];
  bestSmartRoute: any[];
  pairs: string[];
  fromAmount: BigNumber;
  toAmount: BigNumber;
  isFromEstimated: boolean;
  groupQueueOfferIndex?: number;
}


const executeSwap: (swapData: SwapData) => Promise<{
  receipt: TransactionReceipt | null;
  error: Record<string, string> | null;
}> = async (swapData: SwapData) => {
  let receipt: TransactionReceipt | null = null;
  const wallet: any = getWallet();
  try {
    const toAddress = wallet.account.address;
    const slippageTolerance = getSlippageTolerance();
    const transactionDeadlineInMinutes = getTransactionDeadline();
    const transactionDeadline = Math.floor(
      Date.now() / 1000 + transactionDeadlineInMinutes * 60
    );
    // if (
    //   swapData.provider === "Hybrid" ||
    //   (swapData.provider === "Oracle" && swapData.bestSmartRoute) ||
    //   swapData.provider === "PeggedOracle"
    // ) {
    //   if (swapData.isFromEstimated) {
    //     const amountInMax = swapData.fromAmount.times(
    //       1 + slippageTolerance / 100
    //     );
    //     receipt = await hybridTradeExactOut(
    //       wallet,
    //       swapData.bestSmartRoute,
    //       swapData.routeTokens,
    //       swapData.pairs,
    //       swapData.toAmount.toString(),
    //       amountInMax.toString(),
    //       toAddress,
    //       transactionDeadline,
    //       "0x"
    //     );
    //   } else {
    //     const amountOutMin = swapData.toAmount.times(
    //       1 - slippageTolerance / 100
    //     );
    //     receipt = await hybridTradeExactIn(
    //       wallet,
    //       swapData.bestSmartRoute,
    //       swapData.routeTokens,
    //       swapData.pairs,
    //       swapData.fromAmount.toString(),
    //       amountOutMin.toString(),
    //       toAddress,
    //       transactionDeadline,
    //       false,
    //       "0x"
    //     );
    //   }
    // } else if (!swapData.queueType) {
    //   const market = getProviderList().find(item => item.key === swapData.provider)?.key as Market;
    //   if (swapData.isFromEstimated) {
    //     const amountInMax = swapData.fromAmount.times(
    //       1 + slippageTolerance / 100
    //     );
    //     receipt = await AmmTradeExactOut(
    //       wallet,
    //       market,
    //       swapData.routeTokens,
    //       swapData.toAmount.toString(),
    //       amountInMax.toString(),
    //       toAddress,
    //       transactionDeadline
    //     );
    //   } else {
    //     const amountOutMin = swapData.toAmount.times(
    //       1 - slippageTolerance / 100
    //     );
    //     receipt = await AmmTradeExactIn(
    //       wallet,
    //       market,
    //       swapData.routeTokens,
    //       swapData.fromAmount.toString(),
    //       amountOutMin.toString(),
    //       toAddress,
    //       transactionDeadline,
    //       false
    //     );
    //   }
    // } else if (swapData.provider === "RestrictedOracle") {
    //   const obj = await getGroupQueueTraderDataObj(
    //     swapData.pairs[0],
    //     swapData.routeTokens[0],
    //     swapData.routeTokens[1],
    //     swapData.fromAmount.toString(),
    //     swapData.groupQueueOfferIndex?.toString()
    //   );
    //   if (!obj || !obj.data)
    //     return {
    //       receipt: null,
    //       error: { message: "No data from Group Queue Trader" },
    //     };
    //   const data = obj.data;
    //   const amountOutMin = swapData.toAmount.times(1 - slippageTolerance / 100);
    //   receipt = await hybridTradeExactIn(
    //     wallet,
    //     swapData.bestSmartRoute,
    //     swapData.routeTokens,
    //     swapData.pairs,
    //     swapData.fromAmount.toString(),
    //     amountOutMin.toString(),
    //     toAddress,
    //     transactionDeadline,
    //     false,
    //     data
    //   );
    // }
    const market = getProviderList().find(item => item.key === swapData.provider)?.key || '';
    if (swapData.isFromEstimated) {
      const amountInMax = swapData.fromAmount.times(
        1 + slippageTolerance / 100
      );
      receipt = await AmmTradeExactOut(
        wallet,
        market,
        swapData.routeTokens,
        swapData.toAmount.toString(),
        amountInMax.toString(),
        toAddress,
        transactionDeadline
      );
    } else {
      const amountOutMin = swapData.toAmount.times(
        1 - slippageTolerance / 100
      );
      receipt = await AmmTradeExactIn(
        wallet,
        market,
        swapData.routeTokens,
        swapData.fromAmount.toString(),
        amountOutMin.toString(),
        toAddress,
        transactionDeadline,
        false
      );
    }
  } catch (error) {
    return { receipt: null, error: error as any };
  }
  return { receipt, error: null };
};

//For testing only
const setERC20AllowanceToZero = async (token: ITokenObject, spenderAddress: string) => {
  let wallet: any = getWallet();
  let erc20 = new Contracts.ERC20(wallet, token.address);
  let receipt = await erc20.approve({
    spender: spenderAddress,
    amount: 0
  });
  return receipt;
}

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

const setApprovalModalSpenderAddress = (market: string, contractAddress?: string) => {
  // let wallet: any = Wallet.getInstance();
  // let spender;
  // if (contractAddress) {
  //   spender = contractAddress
  // } else {
  //   if (market == Market.HYBRID || market == Market.MIXED_QUEUE || market == Market.PEGGED_QUEUE || market == Market.GROUP_QUEUE) {
  //     spender = getHybridRouterAddress();
  //   }
  //   else {
  //     spender = getRouterAddress(market);
  //   }
  // }
  approvalModel.spenderAddress = contractAddress || getRouterAddress(market);
}

// CrossChain

const getAvailableRouteOptions = async (params: GetAvailableRouteOptionsParams) => {
  let slippageTolerance = getSlippageTolerance()
  return await getAvailableRouteOptionsForCrossChain(params, getTradeFeeMap, getExtendedRouteObjData, slippageTolerance)
}

interface NewOrderParams{
  vaultAddress: string,
  targetChainId: number,
  tokenIn: ITokenObject,
  tokenOut: ITokenObject,
  amountIn: string,
  minAmountOut: string,
  sourceRouteInfo?: {
    amountOut: string,
    pairs: string[]
  }
}

const createBridgeVaultOrder: (newOrderParams: NewOrderParams) => Promise<{
  receipt: TransactionReceipt | null;
  error: Record<string, string> | null;
}> = async (newOrderParams: NewOrderParams) => 
  createBridgeVaultOrderForCrossChain({
    ...newOrderParams,
    transactionSetting: {
      transactionDeadlineInMinutes: getTransactionDeadline(),
      slippageTolerance: getSlippageTolerance()
    }
  });


const registerPairsByAddress = async (market: string[], pairAddresses: string[]) => {
  let wallet: any = Wallet.getInstance();
  let registryAddress = getAddresses()["OSWAP_HybridRouterRegistry"]
  let registry = new Contracts.OSWAP_HybridRouterRegistry(wallet,registryAddress);
  let factory = market.map(m=>getFactoryAddress(m));
  let pairAddress = pairAddresses;
  return await registry.registerPairsByAddress2({factory,pairAddress});
}

export {
  getExtendedRouteObjData,
  getTradeFeeMap,
  getAllRoutesData,
  SwapData,
  executeSwap,
  getChainNativeToken,
  getRouterAddress,
  setERC20AllowanceToZero,
  getApprovalModelAction,
  setApprovalModalSpenderAddress,
  NewOrderParams,
  createBridgeVaultOrder,
  getAvailableRouteOptions,
  registerPairsByAddress,
}

export * from './helper';