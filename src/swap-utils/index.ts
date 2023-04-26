import { Wallet, BigNumber, Utils, Erc20, TransactionReceipt } from "@ijstech/eth-wallet";
import { Contracts } from "../contracts/oswap-openswap-contract/index";
import { Contracts as ProxyContracts } from '../contracts/scom-commission-proxy-contract/index';
import { executeRouterSwap, getRouterSwapTxData, IExecuteSwapOptions } from '@scom/scom-dex-list';

import {
  getAPI,
  ITokenObject,
  IERC20ApprovalEventOptions,
  ERC20ApprovalModel,
  QueueType,
  ICommissionInfo,
} from "../global/index";

import {
  getSlippageTolerance, 
  getTransactionDeadline,
  isWalletConnected,
  getChainId,
  getNetworkInfo,
  getProviderList,
  getProxyAddress,
  getDexInfoList
} from "../store/index";

import {
  WETHByChainId,
  ChainNativeTokenByChainId
} from '@scom/scom-token-list';
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

const getChainNativeToken = (): ITokenObject => {
  return ChainNativeTokenByChainId[getChainId()]
};
const getWETH = (): ITokenObject => {
  return WETHByChainId[getChainId()];
};
const getWrappedTokenAddress = (): string => {
  return getWETH().address!;
};

const getFactoryAddress = (key: string): string => {
  const dexInfoList = getDexInfoList();
  const factoryAddress = dexInfoList.find(v => v.chainId == getChainId() && v.dexCode == key)?.factoryAddress || '';
  return factoryAddress;
}
function getRouterAddress(key: string): string {
  const dexInfoList = getDexInfoList();
  const routerAddress = dexInfoList.find(v => v.chainId == getChainId() && v.dexCode == key)?.routerAddress || '';
  return routerAddress;
}

async function allowanceRouter(wallet: any, market: string, token: ITokenObject, owner: string, contractAddress: string, callback?: any) {
  let erc20 = new Contracts.ERC20(wallet, token.address);
  let spender = contractAddress ? contractAddress : getRouterAddress(market);
  let allowance = await erc20.allowance({
    owner,
    spender
  })
  allowance = Utils.fromDecimals(allowance, token.decimals);
  if (callback)
    callback(null, allowance);
  return allowance;
}

async function checkIsApproveButtonShown(wallet: any, firstTokenObject: any, fromInput: BigNumber, market: string, contractAddress?: string) {
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
    const allowance = await allowanceRouter(wallet, market, firstTokenObject, owner, contractAddress);
    isApproveButtonShown = fromInput.gt(allowance);
  }
  return isApproveButtonShown;
}

async function composeRouteObj(wallet: any, routeObj: any, market: string, firstTokenObject: any, firstInput: BigNumber, secondInput: BigNumber, isFromEstimated: boolean, commissions: ICommissionInfo[]) {
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

    const commissionAmount = getCommissionAmount(commissions, fromAmount);
    const contractAddress = commissionAmount.gt(0) ? getProxyAddress() : '';
    isApproveButtonShown = await checkIsApproveButtonShown(wallet, firstTokenObject, fromAmount.plus(commissionAmount), market, contractAddress);
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

function getTradeFeeMap() {
  let tradeFeeMap: TradeFeeMap = {};
  const dexInfoList = getDexInfoList().filter(v => v.chainId == getChainId());
  for (let dexInfo of dexInfoList) {
    tradeFeeMap[dexInfo.dexCode] = dexInfo.tradeFee;
  }
  return tradeFeeMap;
}

async function getBestAmountInRouteFromAPI(wallet: any, tokenIn: ITokenObject, tokenOut: ITokenObject, amountOut: string, chainId?: number) {
  chainId = getChainId();
  let wrappedTokenAddress = getWETH();
  let tradeFeeMap = getTradeFeeMap();
  let network = chainId ? getNetworkInfo(chainId) : null;
  let api = network?.isTestnet || network?.isDisabled ? newRouteAPI : routeAPI;
  let routeObjArr = await getAPI(api, {
    chainId,
    tokenIn: tokenIn.address ? tokenIn.address : wrappedTokenAddress,
    tokenOut: tokenOut.address ? tokenOut.address : wrappedTokenAddress,
    amountOut: new BigNumber(amountOut).shiftedBy(tokenOut.decimals).toFixed(),
    ignoreHybrid: 1
  })
  if (!routeObjArr) return [];
  let bestRouteObjArr: any[] = [];
  // let providerConfigByDexId: any = {};
  // getProviderList().filter(v => {!!v.contractInfo && Object.keys(v.contractInfo).includes((chainId!).toString())}).forEach((v, i) => {
  //   if (v.dexId == undefined) return;
  //   providerConfigByDexId[v.dexId] = v;
  // });
  // for (let i = 0; i < routeObjArr.length; i++) {
  //   let routeObj = routeObjArr[i];
  //   routeObj.tokens[0] = tokenIn;
  //   routeObj.tokens[routeObj.tokens.length - 1] = tokenOut;
  //   let dexId = [5, 6].includes(routeObj.dexId) ? 5 : routeObj.dexId;
  //   if (!providerConfigByDexId[dexId]) continue;
  //   let bestRouteObj = {
  //     pairs: routeObj.route.map((v: any) => v.address),
  //     isRegistered: routeObj.route.map((v: any) => v.isRegistered),
  //     market: routeObj.route.map((v: any) => {
  //       let dexId = [5, 6].includes(v.dexId) ? 5 : v.dexId;
  //       return providerConfigByDexId[dexId].key
  //     }),
  //     route: routeObj.tokens,
  //     customDataList: routeObj.route.map((v: any) => {
  //       return {
  //         queueType: v.queueType,
  //         orderIds: v.orderIds,
  //         reserveA: v.reserves.reserve0,
  //         reserveB: v.reserves.reserve1
  //       }
  //     })
  //   };

  //   let amountIn = new BigNumber(routeObj.amountIn).shiftedBy(-tokenIn.decimals);
  //   let swapPrice = new BigNumber(amountIn).div(amountOut);
  //   // TODO: check later
  //   // let isHybridOrQueue = providerConfigByDexId[dexId].key == Market.HYBRID || routeObj.queueType;
  //   let extendedData = await getExtendedRouteObjData(wallet, bestRouteObj, tradeFeeMap, swapPrice, routeObj.queueType);
  //   let provider = providerConfigByDexId[dexId].key
  //   let key = provider + '|' + (routeObj.isDirectRoute ? '0' : '1');
  //   bestRouteObjArr.push({
  //     ...extendedData,
  //     provider,
  //     key,
  //     amountIn,
  //     queueType: routeObj.queueType
  //   });
  // }
  return bestRouteObjArr;
}

async function getBestAmountOutRouteFromAPI(wallet: any, tokenIn: ITokenObject, tokenOut: ITokenObject, amountIn: string, chainId?: number) {
  chainId = getChainId();
  let wrappedTokenAddress = getWETH();
  let tradeFeeMap = getTradeFeeMap();
  let network = chainId ? getNetworkInfo(chainId) : null;
  let api = network?.isTestnet || network?.isDisabled ? newRouteAPI : routeAPI;
  let routeObjArr = await getAPI(api, {
    chainId,
    tokenIn: tokenIn.address ? tokenIn.address : wrappedTokenAddress,
    tokenOut: tokenOut.address ? tokenOut.address : wrappedTokenAddress,
    amountIn: new BigNumber(amountIn).shiftedBy(tokenIn.decimals).toFixed(),
    ignoreHybrid: 1
  })
  if (!routeObjArr) return [];
  let bestRouteObjArr = [];
  // let providerConfigByDexId: any = {};
  // getProviderList().filter(v => {!!v.contractInfo && Object.keys(v.contractInfo).includes((chainId!).toString())}).forEach((v, i) => {
  //   if (v.dexId == undefined) return;
  //   providerConfigByDexId[v.dexId] = v;
  // });
  // for (let i = 0; i < routeObjArr.length; i++) {
  //   let routeObj = routeObjArr[i];
  //   routeObj.tokens[0] = tokenIn;
  //   routeObj.tokens[routeObj.tokens.length - 1] = tokenOut;
  //   let dexId = [5, 6].includes(routeObj.dexId) ? 5 : routeObj.dexId;
  //   if (!providerConfigByDexId[dexId]) continue;
  //   let bestRouteObj = {
  //     pairs: routeObj.route.map((v: any) => v.address),
  //     isRegistered: routeObj.route.map((v: any) => v.isRegistered),
  //     market: routeObj.route.map((v: any) => {
  //       let dexId = [5, 6].includes(v.dexId) ? 5 : v.dexId;
  //       return providerConfigByDexId[dexId].key;
  //     }),
  //     route: routeObj.tokens,
  //     customDataList: routeObj.route.map((v: any) => {
  //       return {
  //         queueType: v.queueType,
  //         orderIds: v.orderIds,
  //         reserveA: v.reserves.reserve0,
  //         reserveB: v.reserves.reserve1
  //       }
  //     })
  //   };
  //   let amountOut = new BigNumber(routeObj.amountOut).shiftedBy(-tokenOut.decimals);
  //   let swapPrice = new BigNumber(amountIn).div(amountOut);
  //   // let isHybridOrQueue = providerConfigByDexId[dexId].key == Market.HYBRID || routeObj.queueType;
  //   let extendedData = await getExtendedRouteObjData(wallet, bestRouteObj, tradeFeeMap, swapPrice, routeObj.queueType);
  //   let provider = providerConfigByDexId[dexId].key;
  //   let key = provider + '|' + (routeObj.isDirectRoute ? '0' : '1');
  //   bestRouteObjArr.push({
  //     ...extendedData,
  //     provider,
  //     key,
  //     amountOut,
  //     queueType: routeObj.queueType
  //   });
  // }
  return bestRouteObjArr;
}

const getAllAvailableRoutes = async (markets: string[], tokenList: ITokenObject[], tokenIn: ITokenObject, tokenOut: ITokenObject) => {
  const wallet: any = Wallet.getClientInstance();
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
    } catch (err) { 
      console.log('err', err);
    }
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
  let allAvailableRoutes = await getAllAvailableRoutes(markets, tokenList, tokenIn, tokenOut);
  if (allAvailableRoutes.length == 0) return null;

  let wallet: any = Wallet.getClientInstance();
  let tradeFeeMap = getTradeFeeMap();
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
  let allAvailableRoutes = await getAllAvailableRoutes(markets, tokenList, tokenIn, tokenOut);
  if (allAvailableRoutes.length == 0) {
    return null;
  }
  let wallet: any = Wallet.getClientInstance();
  let tradeFeeMap = getTradeFeeMap();
  let allPaths = await getAllExactAmountInPaths(tradeFeeMap, allAvailableRoutes, tokenIn, tokenOut, amountIn);
  if (allPaths.length == 0) {
    return null;
  }

  let bestRouteObj = allPaths[0];

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

  let extendedRouteObj: any = {
    pairs: bestRouteObj.pairs,
    market: bestRouteObj.market,
    bestRoute: bestRouteObj.route,
    priceImpact: priceImpact,
    price: swapPrice.toFixed(),
    tradeFee: fee.toFixed(),
  }

  return extendedRouteObj;
}

async function getAllRoutesData(firstTokenObject: ITokenObject, secondTokenObject: ITokenObject, firstInput: BigNumber, secondInput: BigNumber, isFromEstimated: boolean, useAPI: boolean, commissions: ICommissionInfo[]) {
  let wallet: any = Wallet.getClientInstance();
  let resultArr: any[] = [];
  if (firstTokenObject && secondTokenObject && (firstInput.gt(0) || secondInput.gt(0))) {
    let routeDataArr = [];
    if (useAPI) {
      if (isFromEstimated) {
        routeDataArr = await getBestAmountInRouteFromAPI(wallet, firstTokenObject, secondTokenObject, secondInput.toString());
      }
      else {
        routeDataArr = await getBestAmountOutRouteFromAPI(wallet, firstTokenObject, secondTokenObject, firstInput.toString());
      }
    }

    if (isFromEstimated) {
      if (routeDataArr.length == 0) {
        const providerKey = getProviderList()[0]?.key;
        let routeObj = await getBestAmountInRoute(providerKey ? [providerKey] : [], firstTokenObject, secondTokenObject, secondInput.toString(), []);
        if (routeObj && routeObj.market.length == 1) {
          let price = parseFloat(routeObj.price);
          let priceSwap = new BigNumber(1).div(routeObj.price).toNumber();
          let priceImpact = Number(routeObj.priceImpact) * 100;
          let tradeFee = parseFloat(routeObj.tradeFee);
          const provider = routeObj.market[0];
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
      if (routeDataArr.length == 0) {
        const providerKey = getProviderList()[0]?.key;
        let routeObj = await getBestAmountOutRoute(providerKey ? [providerKey] : [], firstTokenObject, secondTokenObject, firstInput.toString(), [], false);
        if (routeObj && routeObj.market.length == 1) {
          let price = parseFloat(routeObj.price);
          let priceSwap = new BigNumber(1).div(routeObj.price).toNumber();
          let priceImpact = Number(routeObj.priceImpact) * 100;
          let tradeFee = parseFloat(routeObj.tradeFee);
          const provider = routeObj.market[0];
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
        let routeObj = await composeRouteObj(wallet, optionObj, provider, firstTokenObject, firstInput, secondInput, isFromEstimated, commissions);
        if (!routeObj) continue;
        resultArr.push(routeObj);
      }
    }

  }
  return resultArr;
}

export const getCurrentCommissions = (commissions: ICommissionInfo[]) => {
  return (commissions || []).filter(v => v.chainId == getChainId());
}

export const getCommissionAmount = (commissions: ICommissionInfo[], amount: BigNumber) => {
  const _commissions = (commissions || []).filter(v => v.chainId == getChainId()).map(v => {
    return {
      to: v.walletAddress,
      amount: amount.times(v.share)
    }
  });
  const commissionsAmount = _commissions.length ? _commissions.map(v => v.amount).reduce((a, b) => a.plus(b)) : new BigNumber(0);
  return commissionsAmount;
}

const AmmTradeExactIn = async function (wallet: any, market: string, routeTokens: ITokenObject[], amountIn: string, amountOutMin: string, toAddress: string, deadline: number, feeOnTransfer: boolean, commissions: ICommissionInfo[]) {
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

  const proxyAddress = getProxyAddress();
  const proxy = new ProxyContracts.Proxy(wallet, proxyAddress);
  const amount = tokenIn.address ? Utils.toDecimals(amountIn, tokenIn.decimals).dp(0) : Utils.toDecimals(amountIn).dp(0);
  const _amountOutMin = Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0);
  const _commissions = (commissions || []).filter(v => v.chainId == getChainId()).map(v => {
    return {
      to: v.walletAddress,
      amount: amount.times(v.share).dp(0)
    }
  });
  const commissionsAmount = _commissions.length ? _commissions.map(v => v.amount).reduce((a, b) => a.plus(b)).dp(0) : new BigNumber(0);
  if (!tokenIn.address) {
    const params = {
      amountOutMin: _amountOutMin,
      path: addresses,
      to: toAddress,
      deadline
    };

    let executeSwapOptions: IExecuteSwapOptions = {
      params,
      exactType: 'exactIn',
      feeOnTransfer,
      tokenInType: 'ETH',
      tokenOutType: 'ERC20',
      txOptions: {
        value: amount
      }
    }
    if (_commissions.length) {
      let txData = await getRouterSwapTxData(wallet.chainId, market, executeSwapOptions);
      receipt = await proxy.proxyCall({
        target: routerAddress,
        tokensIn: [
          {
            token: Utils.nullAddress,
            amount: amount.plus(commissionsAmount),
            directTransfer: false,
            commissions: _commissions
          }
        ],
        data: txData,
        to: wallet.address,
        tokensOut: []
      })
    }
    else {
      receipt = await executeRouterSwap(wallet.chainId, market, executeSwapOptions);
    }
  } else {
    const tokensIn = {
      token: tokenIn.address,
      amount: amount.plus(commissionsAmount),
      directTransfer: false,
      commissions: _commissions
    };
    const params = {
      amountIn: amount,
      amountOutMin: _amountOutMin,
      path: addresses,
      to: toAddress,
      deadline
    };

    let executeSwapOptions: IExecuteSwapOptions = {
      params,
      exactType: 'exactIn',
      feeOnTransfer,
      tokenInType: 'ERC20',
      tokenOutType: !tokenOut.address ? 'ETH' : 'ERC20'
    }
    if (_commissions.length) {
      let txData = await getRouterSwapTxData(wallet.chainId, market, executeSwapOptions);
      receipt = await proxy.proxyCall({
        target: routerAddress,
        tokensIn: [
          tokensIn
        ],
        data: txData,
        to: wallet.address,
        tokensOut: []
      });
    }
    else {
      receipt = await executeRouterSwap(wallet.chainId, market, executeSwapOptions);
    }
  }
  return receipt;
}

const AmmTradeExactOut = async function (wallet: any, market: string, routeTokens: ITokenObject[], amountOut: string, amountInMax: string, toAddress: string, deadline: number, commissions: ICommissionInfo[]) {
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
  const proxyAddress = getProxyAddress();
  const proxy = new ProxyContracts.Proxy(wallet, proxyAddress);
  const _amountInMax = Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0);
  const _amountOut = Utils.toDecimals(amountOut, tokenOut.decimals).dp(0);
  const _commissions = (commissions || []).filter(v => v.chainId == getChainId()).map(v => {
    return {
      to: v.walletAddress,
      amount: _amountInMax.times(v.share).dp(0)
    }
  });
  const commissionsAmount = _commissions.length ? _commissions.map(v => v.amount).reduce((a, b) => a.plus(b)).dp(0) : new BigNumber(0);
  if (!tokenIn.address) {
    const params = {
      amountOut: _amountOut,
      path: addresses,
      to: toAddress,
      deadline
    };
    let executeSwapOptions: IExecuteSwapOptions = {
      params,
      exactType: 'exactOut',
      feeOnTransfer: false,
      tokenInType: 'ETH',
      tokenOutType: 'ERC20',
      txOptions: {
        value: _amountInMax
      }
    }
    if (_commissions.length) {
      let txData = await getRouterSwapTxData(wallet.chainId, market, executeSwapOptions);
      receipt = await proxy.proxyCall({
        target: routerAddress,
        tokensIn: [
          {
            token: Utils.nullAddress,
            amount: _amountInMax.plus(commissionsAmount),
            directTransfer: false,
            commissions: _commissions
          }
        ],
        data: txData,
        to: wallet.address,
        tokensOut: []
      })
    }
    else {
      receipt = await executeRouterSwap(wallet.chainId, market, executeSwapOptions);
    }
  } else {
    const tokensIn = {
      token: tokenIn.address,
      amount: _amountInMax.plus(commissionsAmount),
      directTransfer: false,
      commissions: _commissions
    };
    const params = {
      amountOut: _amountOut,
      amountInMax: _amountInMax,
      path: addresses,
      to: toAddress,
      deadline
    };
    let executeSwapOptions: IExecuteSwapOptions = {
      params,
      exactType: 'exactOut',
      feeOnTransfer: false,
      tokenInType: 'ERC20',
      tokenOutType: !tokenOut.address ? 'ETH' : 'ERC20'
    }

    if (_commissions.length) {
      let txData = await getRouterSwapTxData(wallet.chainId, market, executeSwapOptions);
      receipt = await proxy.proxyCall({
        target: routerAddress,
        tokensIn: [
          tokensIn
        ],
        data: txData,
        to: wallet.address,
        tokensOut: [
          tokenOut.address
        ]
      });
    }
    else {
      receipt = await executeRouterSwap(wallet.chainId, market, executeSwapOptions);
    }
  }
  return receipt;
}

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
  commissions?: ICommissionInfo[];
}


const executeSwap: (swapData: SwapData) => Promise<{
  receipt: TransactionReceipt | null;
  error: Record<string, string> | null;
}> = async (swapData: SwapData) => {
  let receipt: TransactionReceipt | null = null;
  const wallet: any = Wallet.getClientInstance();
  try {
    const toAddress = wallet.account.address;
    const slippageTolerance = getSlippageTolerance();
    const transactionDeadlineInMinutes = getTransactionDeadline();
    const transactionDeadline = Math.floor(
      Date.now() / 1000 + transactionDeadlineInMinutes * 60
    );

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
        transactionDeadline,
        swapData.commissions
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
        false,
        swapData.commissions
      );
    }
  } catch (error) {
    return { receipt: null, error: error as any };
  }
  return { receipt, error: null };
};

//For testing only
const setERC20AllowanceToZero = async (token: ITokenObject, spenderAddress: string) => {
  let wallet: any = Wallet.getClientInstance();
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
  approvalModel.spenderAddress = contractAddress || getRouterAddress(market);
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
  setApprovalModalSpenderAddress
}

export * from './helper';