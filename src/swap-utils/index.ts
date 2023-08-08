import { 
  Wallet, 
  BigNumber, 
  Utils,   
  TransactionReceipt 
} from "@ijstech/eth-wallet";
import { Contracts } from "@scom/oswap-openswap-contract";
import { Contracts as ProxyContracts, ContractUtils as ProxyContractUtils } from '@scom/scom-commission-proxy-contract';
import { executeRouterSwap, getDexPairReserves, getRouterSwapTxData, IExecuteSwapOptions, getSwapProxySelectors } from '@scom/scom-dex-list';
import { ITokenObject } from '@scom/scom-token-list';
import {
  getAPI,
  ICommissionInfo,
  IProviderUI,
} from "../global/index";

import {
  getNetworkInfo,
  State
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

const getChainNativeToken = (chainId: number): ITokenObject => {
  return ChainNativeTokenByChainId[chainId]
};
const getWETH = (chainId: number): ITokenObject => {
  return WETHByChainId[chainId];
};
const getWrappedTokenAddress = (chainId: number): string => {
  return getWETH(chainId).address!;
};

const getFactoryAddress = (state: State, key: string): string => {
  const dexInfoList = state.dexInfoList;
  const factoryAddress = dexInfoList.find(v => v.chainId == state.getChainId() && v.dexCode == key)?.factoryAddress || '';
  return factoryAddress;
}
function getRouterAddress(state: State, key: string): string {
  const dexInfoList = state.dexInfoList;
  const routerAddress = dexInfoList.find(v => v.chainId == state.getChainId() && v.dexCode == key)?.routerAddress || '';
  return routerAddress;
}

async function composeRouteObj(state: State, wallet: any, routeObj: any, market: string, firstTokenObject: any, firstInput: BigNumber, secondInput: BigNumber, isFromEstimated: boolean, commissions: ICommissionInfo[]) {
  const slippageTolerance = state.slippageTolerance;
  if (!slippageTolerance) return null;
  let fromAmount = new BigNumber(0);
  let toAmount = new BigNumber(0);
  let minReceivedMaxSold = 0;
  let priceImpact = 0;
  let price = 0;
  let priceSwap = 0;
  let tradeFee = 0;
  let gasFee = 0;

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
    minReceivedMaxSold
  };
}

function getTradeFeeMap(state: State) {
  let tradeFeeMap: TradeFeeMap = {};
  const dexInfoList = state.dexInfoList.filter(v => v.chainId == state.getChainId());
  for (let dexInfo of dexInfoList) {
    tradeFeeMap[dexInfo.dexCode] = dexInfo.tradeFee;
  }
  return tradeFeeMap;
}

async function getBestAmountInRouteFromAPI(state: State, wallet: any, tokenIn: ITokenObject, tokenOut: ITokenObject, amountOut: string, chainId?: number) {
  chainId = state.getChainId();
  let wrappedTokenAddress = getWETH(chainId);
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
  return bestRouteObjArr;
}

async function getBestAmountOutRouteFromAPI(state: State, wallet: any, tokenIn: ITokenObject, tokenOut: ITokenObject, amountIn: string, chainId?: number) {
  chainId = state.getChainId();
  let wrappedTokenAddress = getWETH(chainId);
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
  return bestRouteObjArr;
}

const getProviderProxySelectors = async (state: State, providers: IProviderUI[]) => {
  const wallet = state.getRpcWallet();
  await wallet.init();
  const dexInfoList = state.dexInfoList;
  let selectorsSet: Set<string> = new Set();
  for (let provider of providers) {
    const dex = dexInfoList.find(v => v.chainId == provider.chainId && v.dexCode == provider.key);
    if (dex) {
      const selectors = await getSwapProxySelectors(wallet, dex);
      selectors.forEach(v => selectorsSet.add(v));
    }
  }
  return Array.from(selectorsSet);
}

const getPair = async (state: State, market: string, tokenA: ITokenObject, tokenB: ITokenObject) => {
  const wallet = state.getRpcWallet();
  let chainId = state.getChainId();
  if (!tokenA.address) tokenA = getWETH(chainId);
  if (!tokenB.address) tokenB = getWETH(chainId);
  let factory = new Contracts.OSWAP_Factory(wallet, getFactoryAddress(state, market));
  let pair = await factory.getPair({
    param1: tokenA.address!,
    param2: tokenB.address!
  });
  return pair;
}

const getAllAvailableRoutes = async (state: State, markets: string[], tokenList: ITokenObject[], tokenIn: ITokenObject, tokenOut: ITokenObject) => {
  const wallet = state.getRpcWallet();
  let getPairPromises:Promise<void>[] = [];
  let availableRoutes: AvailableRoute[] = [];

  const getReservesByPair = async (market: string, pairAddress: string, tokenIn: ITokenObject, tokenOut: ITokenObject) => {
    let chainId = state.getChainId();
    if (!tokenIn.address) tokenIn = getWETH(chainId);
    if (!tokenOut.address) tokenOut = getWETH(chainId);
    let reserveObj = await getDexPairReserves(wallet, wallet.chainId, market, pairAddress, tokenIn.address, tokenOut.address);
    return reserveObj;
  }

  let composeAvailableRoutePromise = async (state: State, market: string, tokenIn: ITokenObject, tokenOut: ITokenObject) => {
    try {
      let pair = await getPair(state, market, tokenIn, tokenOut);
      if (pair == Utils.nullAddress) return;
      let reserveObj = await getReservesByPair(market, pair, tokenIn, tokenOut);
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

  getPairPromises.push(...markets.map(market => composeAvailableRoutePromise(state, market, tokenIn, tokenOut)));

  for (let i = 0; i < tokenList.length; i++) {
    let hop1 = tokenList[i];
    if (tokenIn.address != hop1.address) {
      getPairPromises.push(...markets.map(market => composeAvailableRoutePromise(state, market, tokenIn, hop1)));
    }
    if (hop1.address != tokenOut.address) {
      getPairPromises.push(...markets.map(market => composeAvailableRoutePromise(state, market, hop1, tokenOut)));
    }

    for (let j = 0; j < tokenList.length; j++) {
      let hop2 = tokenList[j];
      if (hop1.address == hop2.address || hop1.address == tokenIn.address ||
        hop2.address == tokenIn.address || hop1.address == tokenOut.address ||
        hop2.address == tokenOut.address) {
        continue;
      }
      getPairPromises.push(...markets.map(market => composeAvailableRoutePromise(state, market, hop1, hop2)));
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

const getBestAmountInRoute = async (state: State, markets: string[], tokenIn: ITokenObject, tokenOut: ITokenObject, amountOut: string, tokenList: ITokenObject[]) => {
  let allAvailableRoutes = await getAllAvailableRoutes(state, markets, tokenList, tokenIn, tokenOut);
  if (allAvailableRoutes.length == 0) return null;

  let wallet = state.getRpcWallet();
  let tradeFeeMap = getTradeFeeMap(state);
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

const getBestAmountOutRoute = async (state: State, markets: string[], tokenIn: ITokenObject, tokenOut: ITokenObject, amountIn: string, tokenList: ITokenObject[], isHybrid: boolean) => {
  let allAvailableRoutes = await getAllAvailableRoutes(state, markets, tokenList, tokenIn, tokenOut);
  if (allAvailableRoutes.length == 0) {
    return null;
  }
  let wallet = state.getRpcWallet();
  let tradeFeeMap = getTradeFeeMap(state);
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

async function getAllRoutesData(state: State, firstTokenObject: ITokenObject, secondTokenObject: ITokenObject, firstInput: BigNumber, secondInput: BigNumber, isFromEstimated: boolean, useAPI: boolean, commissions: ICommissionInfo[]) {
  let wallet = state.getRpcWallet();
  let resultArr: any[] = [];
  if (firstTokenObject && secondTokenObject && (firstInput.gt(0) || secondInput.gt(0))) {
    let routeDataArr = [];
    if (useAPI) {
      if (isFromEstimated) {
        routeDataArr = await getBestAmountInRouteFromAPI(state, wallet, firstTokenObject, secondTokenObject, secondInput.toString());
      }
      else {
        routeDataArr = await getBestAmountOutRouteFromAPI(state, wallet, firstTokenObject, secondTokenObject, firstInput.toString());
      }
    }

    if (isFromEstimated) {
      if (routeDataArr.length == 0) {
        const providerList = state.providerList;
        const providerKey = providerList[0]?.key;
        let routeObj = await getBestAmountInRoute(state, providerKey ? [providerKey] : [], firstTokenObject, secondTokenObject, secondInput.toString(), []);
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
        const providerList = state.providerList;
        const providerKey = providerList[0]?.key;
        let routeObj = await getBestAmountOutRoute(state, providerKey ? [providerKey] : [], firstTokenObject, secondTokenObject, firstInput.toString(), [], false);
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
        const providerList = state.providerList;
        const provider = providerList.find(item => item.key === optionObj.provider)?.key || '';
        let routeObj = await composeRouteObj(state, wallet, optionObj, provider, firstTokenObject, firstInput, secondInput, isFromEstimated, commissions);
        if (!routeObj) continue;
        resultArr.push(routeObj);
      }
    }

  }
  return resultArr;
}

const AmmTradeExactIn = async function (state: State, wallet: any, market: string, routeTokens: ITokenObject[], amountIn: string, amountOutMin: string, toAddress: string, deadline: number, feeOnTransfer: boolean, campaignId?: number, referrer?: string) {
  if (routeTokens.length < 2) {
    return null;
  }
  let tokenIn = routeTokens[0];
  let tokenOut = routeTokens[routeTokens.length - 1];

  let routerAddress = getRouterAddress(state, market);
  let addresses = [];
  let chainId = state.getChainId();
  let wrappedTokenAddress = getWrappedTokenAddress(chainId);
  for (let i = 0; i < routeTokens.length; i++) {
    addresses.push(routeTokens[i].address || wrappedTokenAddress);
  }
  let receipt;

  const amount = tokenIn.address ? Utils.toDecimals(amountIn, tokenIn.decimals).dp(0) : Utils.toDecimals(amountIn).dp(0);
  const _amountOutMin = Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0);
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
    if (campaignId !== undefined) {
      let txData = await getRouterSwapTxData(wallet.chainId, market, executeSwapOptions);
      const proxyAddress = state.getProxyAddress();
      const proxy = new ProxyContracts.ProxyV3(wallet, proxyAddress);
      receipt = await proxy.proxyCall({
        campaignId,
        target: routerAddress,
        tokensIn: [
          {
            token: Utils.nullAddress,
            amount: amount
          }
        ],
        data: txData,
        referrer,
        to: wallet.address,
        tokensOut: [
          tokenOut.address
        ]
      })
    }
    else {
      receipt = await executeRouterSwap(wallet.chainId, market, executeSwapOptions);
    }
  } else {
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
    if (campaignId !== undefined) {
      let txData = await getRouterSwapTxData(wallet.chainId, market, executeSwapOptions);
      const proxyAddress = state.getProxyAddress();
      const proxy = new ProxyContracts.ProxyV3(wallet, proxyAddress);
      receipt = await proxy.proxyCall({
        campaignId,
        target: routerAddress,
        tokensIn: [
          {
            token: tokenIn.address,
            amount: amount
          }
        ],
        data: txData,
        referrer,
        to: wallet.address,
        tokensOut: [
          tokenOut.address ?? Utils.nullAddress
        ]
      })
    }
    else {
      receipt = await executeRouterSwap(wallet.chainId, market, executeSwapOptions);
    }
  }
  return receipt;
}

const AmmTradeExactOut = async function (state: State, wallet: any, market: string, routeTokens: ITokenObject[], amountOut: string, amountInMax: string, toAddress: string, deadline: number, campaignId?: number, referrer?: string) {
  if (routeTokens.length < 2) {
    return null;
  }
  let tokenIn = routeTokens[0];
  let tokenOut = routeTokens[routeTokens.length - 1];

  let routerAddress = getRouterAddress(state, market);
  let addresses = [];
  let chainId = state.getChainId();
  let wrappedTokenAddress = getWrappedTokenAddress(chainId);
  for (let i = 0; i < routeTokens.length; i++) {
    addresses.push(routeTokens[i].address || wrappedTokenAddress);
  }
  let receipt;
  const _amountInMax = Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0);
  const _amountOut = Utils.toDecimals(amountOut, tokenOut.decimals).dp(0);
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
    if (campaignId !== undefined) {
      let txData = await getRouterSwapTxData(wallet.chainId, market, executeSwapOptions);
      const proxyAddress = state.getProxyAddress();
      const proxy = new ProxyContracts.ProxyV3(wallet, proxyAddress);
      receipt = await proxy.proxyCall({
        campaignId,
        target: routerAddress,
        tokensIn: [
          {
            token: Utils.nullAddress,
            amount: _amountInMax
          }
        ],
        data: txData,
        referrer,
        to: wallet.address,
        tokensOut: [
          tokenOut.address
        ]
      })
    }
    else {
      receipt = await executeRouterSwap(wallet.chainId, market, executeSwapOptions);
    }
  } else {
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

    if (campaignId !== undefined) {
      let txData = await getRouterSwapTxData(wallet.chainId, market, executeSwapOptions);
      const proxyAddress = state.getProxyAddress();
      const proxy = new ProxyContracts.ProxyV3(wallet, proxyAddress);
      receipt = await proxy.proxyCall({
        campaignId,
        target: routerAddress,
        tokensIn: [
          {
            token: tokenIn.address,
            amount: _amountInMax
          }
        ],
        data: txData,
        referrer,
        to: wallet.address,
        tokensOut: [
          tokenOut.address ?? Utils.nullAddress
        ]
      })
    }
    else {
      receipt = await executeRouterSwap(wallet.chainId, market, executeSwapOptions);
    }
  }
  return receipt;
}

interface SwapData {
  provider: string;
  routeTokens: any[];
  bestSmartRoute: any[];
  pairs: string[];
  fromAmount: BigNumber;
  toAmount: BigNumber;
  isFromEstimated: boolean;
  groupQueueOfferIndex?: number;
  campaignId?: number;
  referrer?: string;
}


const executeSwap: (state: State, swapData: SwapData) => Promise<{
  receipt: TransactionReceipt | null;
  error: Record<string, string> | null;
}> = async (state, swapData) => {
  let receipt: TransactionReceipt | null = null;
  const wallet: any = Wallet.getClientInstance();
  try {
    const toAddress = wallet.account.address;
    const slippageTolerance = state.slippageTolerance;
    const transactionDeadlineInMinutes = state.transactionDeadline;
    const transactionDeadline = Math.floor(
      Date.now() / 1000 + transactionDeadlineInMinutes * 60
    );

    const providerList = state.providerList;
    const market = providerList.find(item => item.key === swapData.provider)?.key || '';
    if (swapData.isFromEstimated) {
      const amountInMax = swapData.fromAmount.times(
        1 + slippageTolerance / 100
      );
      receipt = await AmmTradeExactOut(
        state,
        wallet,
        market,
        swapData.routeTokens,
        swapData.toAmount.toString(),
        amountInMax.toString(),
        toAddress,
        transactionDeadline,
        swapData.campaignId,
        swapData.referrer
      );
    } else {
      const amountOutMin = swapData.toAmount.times(
        1 - slippageTolerance / 100
      );
      receipt = await AmmTradeExactIn(
        state,
        wallet,
        market,
        swapData.routeTokens,
        swapData.fromAmount.toString(),
        amountOutMin.toString(),
        toAddress,
        transactionDeadline,
        false,
        swapData.campaignId,
        swapData.referrer
      );
    }
  } catch (error) {
    return { receipt: null, error: error as any };
  }
  return { receipt, error: null };
};

const setApprovalModalSpenderAddress = (state: State, market: string, contractAddress?: string) => {
  state.approvalModel.spenderAddress = contractAddress || getRouterAddress(state, market);
}

const getCommissionRate = async (state: State, campaignId: number) => {
  const rpcWallet = state.getRpcWallet();
  const proxyAddress = state.getProxyAddress();
  await rpcWallet.init();
  let commissionRate = await ProxyContractUtils.getCommissionRate(rpcWallet, proxyAddress, campaignId)
  return Utils.fromDecimals(commissionRate, 6).toFixed();
}

export {
  getExtendedRouteObjData,
  getTradeFeeMap,
  getAllRoutesData,
  getPair,
  SwapData,
  executeSwap,
  getChainNativeToken,
  getRouterAddress,
  setApprovalModalSpenderAddress,
  getProviderProxySelectors,
  getCommissionRate
}
