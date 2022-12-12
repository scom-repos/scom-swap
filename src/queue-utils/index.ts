import {
  QueueType,
  toWeiInv,
  ABIKeys,
  numberToBytes32,
  ITokenObject,
} from '@swap/global';
import { BigNumber, Utils } from '@ijstech/eth-wallet';
import { 
  getChainNativeToken,
  getAddresses,
  WETHByChainId, 
  ToUSDPriceFeedAddressesMap,
  tokenPriceAMMReference,
  getWallet, 
  getChainId, 
  getTokenMap
} from '@swap/store';
import { Contracts } from "@openswap/sdk";
import { Contracts as SolidityContracts } from "@openswap/chainlink-sdk"
import { Contracts as AdaptorContracts } from "@openswap/oracle-adaptor-sdk"
import { moment } from '@ijstech/components';

const ConfigStore = ABIKeys.ConfigStore;

export interface AllocationMap{ address:string, allocation:string }

const getWETH = (chainId: number): ITokenObject => {
  let wrappedToken = WETHByChainId[chainId];
  return wrappedToken;
};

const getAddressByKey = (key: string) => {
  let Address = getAddresses(getChainId());
  return Address[key];
}

function toTokenAmount(token: any, amount: any) {
  return (BigNumber.isBigNumber(amount) ? amount : new BigNumber(amount.toString())).shiftedBy(Number(token.decimals)).decimalPlaces(0, BigNumber.ROUND_FLOOR);
}

const getTokenPrice = async (token: string) => { // in USD value
  const wallet = getWallet() as any;
  let chainId = wallet.chainId ?? getChainId();
  let tokenPrice: number | string;

  // get price from price feed 
  let tokenPriceFeedAddress = ToUSDPriceFeedAddressesMap[chainId][token.toLowerCase()];
  if (tokenPriceFeedAddress) {
    const aggregatorProxy = new SolidityContracts.AggregatorProxy(wallet, tokenPriceFeedAddress);
    let tokenLatestRoundData = await aggregatorProxy.latestRoundData();
    let tokenPriceFeedDecimals = await aggregatorProxy.decimals();
    return new BigNumber(tokenLatestRoundData.answer).shiftedBy(-tokenPriceFeedDecimals).toFixed();
  }

  // get price from AMM
  let referencePair = tokenPriceAMMReference[chainId] && tokenPriceAMMReference[chainId][token.toLowerCase()]
  if (!referencePair) return null
  const pairContract = new Contracts.OSWAP_Pair(wallet, referencePair);
  let token0 = await pairContract.token0();
  let token1 = await pairContract.token1();
  let reserves = await pairContract.getReserves();
  let token0PriceFeedAddress = ToUSDPriceFeedAddressesMap[chainId] && ToUSDPriceFeedAddressesMap[chainId][token0.toLowerCase()]
  let token1PriceFeedAddress = ToUSDPriceFeedAddressesMap[chainId] && ToUSDPriceFeedAddressesMap[chainId][token1.toLowerCase()]

  if (token0PriceFeedAddress || token1PriceFeedAddress) {
    if (token0PriceFeedAddress) {
      const aggregatorProxy = new SolidityContracts.AggregatorProxy(wallet, token0PriceFeedAddress);
      let token0LatestRoundData = await aggregatorProxy.latestRoundData();
      let token0PriceFeedDecimals = await aggregatorProxy.decimals();
      let token0USDPrice = new BigNumber(token0LatestRoundData.answer).shiftedBy(-token0PriceFeedDecimals).toFixed();
      if (new BigNumber(token.toLowerCase()).lt(token0.toLowerCase())) {
        tokenPrice = new BigNumber(reserves._reserve1).div(reserves._reserve0).times(token0USDPrice).toFixed()
      } else {
        tokenPrice = new BigNumber(reserves._reserve0).div(reserves._reserve1).times(token0USDPrice).toFixed()
      }
    } else {
      const aggregatorProxy = new SolidityContracts.AggregatorProxy(wallet, token1PriceFeedAddress);
      let token1LatestRoundData = await aggregatorProxy.latestRoundData();
      let token1PriceFeedDecimals = await aggregatorProxy.decimals();
      let token1USDPrice = new BigNumber(token1LatestRoundData.answer).shiftedBy(-token1PriceFeedDecimals).toFixed();
      if (new BigNumber(token.toLowerCase()).lt(token1.toLowerCase())) {
        tokenPrice = new BigNumber(reserves._reserve1).div(reserves._reserve0).times(token1USDPrice).toFixed()
      } else {
        tokenPrice = new BigNumber(reserves._reserve0).div(reserves._reserve1).times(token1USDPrice).toFixed()
      }
    }
  } else {
    if (token0.toLowerCase() == token.toLowerCase()) {//for other reference pair
      let token1Price: string = await getTokenPrice(token1) || ''
      tokenPrice = new BigNumber(token1Price).times(reserves._reserve1).div(reserves._reserve0).toFixed()
    } else {
      let token0Price: string = await getTokenPrice(token0) || ''
      tokenPrice = new BigNumber(token0Price).times(reserves._reserve0).div(reserves._reserve1).toFixed()
    }
  }
  return tokenPrice
}

const mapTokenObjectSet = (obj: any) => {
  let chainId = getChainId();
  const WETH9 = getWETH(chainId);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (!obj[key]?.address) obj[key] = WETH9;
    }
  }
  return obj;
}

const getTokenObjectByAddress = (address: string) => {
  let chainId = getChainId();
  if (address.toLowerCase() === getAddressByKey('WETH9').toLowerCase()) {
    return getWETH(chainId);
  }
  let tokenMap = getTokenMap();
  return tokenMap[address.toLowerCase()];
}

const getFactoryAddress = (queueType: QueueType) => {
  switch (queueType) {
    case QueueType.PRIORITY_QUEUE:
      return getAddressByKey("OSWAP_OracleFactory");
    case QueueType.RANGE_QUEUE:
      return getAddressByKey("OSWAP_RangeFactory");
    case QueueType.PEGGED_QUEUE:
      return getAddressByKey("OSWAP_PeggedOracleFactory");
    case QueueType.GROUP_QUEUE:
      return getAddressByKey("OSWAP_RestrictedFactory");
  }
}

const getLiquidityProviderAddress = (queueType: QueueType) => {
  switch (queueType) {
    case QueueType.PRIORITY_QUEUE:
      return getAddressByKey("OSWAP_OracleLiquidityProvider");
    case QueueType.RANGE_QUEUE:
      return getAddressByKey("OSWAP_RangeLiquidityProvider");
    case QueueType.PEGGED_QUEUE:
      return getAddressByKey("OSWAP_PeggedOracleLiquidityProvider");
    case QueueType.GROUP_QUEUE:
      return getAddressByKey("OSWAP_RestrictedLiquidityProvider");
  }
}

const getTradeFee = (queueType: QueueType) => {
  switch (queueType) {
    case QueueType.PRIORITY_QUEUE:
    case QueueType.RANGE_QUEUE:
    case QueueType.GROUP_QUEUE:
      return { fee: "1", base: "1000" };
    case QueueType.PEGGED_QUEUE:
      return { fee: "1", base: "1000" };
  }
}

const getPair = async (queueType: QueueType, tokenA: any, tokenB: any) => {
  const wallet = getWallet() as any;
  let tokens = mapTokenObjectSet({ tokenA, tokenB });
  let params = { param1: tokens.tokenA.address, param2: tokens.tokenB.address };
  let factoryAddress = getFactoryAddress(queueType);
  switch (queueType) {
    case QueueType.PEGGED_QUEUE:
    case QueueType.PRIORITY_QUEUE:
      let priorityQ = new Contracts.OSWAP_OracleFactory(wallet,factoryAddress);
      return await priorityQ.getPair(params);
    case QueueType.RANGE_QUEUE:
      let rangeQ = new Contracts.OSWAP_RangeFactory(wallet,factoryAddress);
      return await rangeQ.getPair(params);
    case QueueType.GROUP_QUEUE:
      let groupQ = new Contracts.OSWAP_RestrictedFactory(wallet,factoryAddress);
      return await groupQ.getPair({ ...params, param3: 0 });
  }
}

interface GroupQueueOfferDetail {
  pairAddress:string,
  tokenIn:string,
  tokenOut:string,
  index: BigNumber,
  provider: string,
  amount: BigNumber,
  allocation: BigNumber,
  tokenInAvailable: string,
  price: BigNumber,
  start: number,
  expire: number,
  allowAll: boolean,
  locked: boolean,
  tradeFee: string,
}

const getGroupQueueItemsForTrader = async (pairAddress: string, tokenIn: any, tokenOut: any):Promise<GroupQueueOfferDetail[]> => {
  let wallet = getWallet() as any;
  let chainId = getChainId();
  const nativeToken = getChainNativeToken(chainId);
  var direction = new BigNumber(tokenIn.address.toLowerCase()).lt(tokenOut.address.toLowerCase());
  let trader = wallet.address;
  const pairContract = new Contracts.OSWAP_RestrictedPair(wallet, pairAddress);
  let traderOffer = await pairContract.getTraderOffer({ trader, direction, start: 0, length: 100 });
  let amounts = traderOffer.amountAndPrice.slice(0, traderOffer.amountAndPrice.length / 2);
  let prices = traderOffer.amountAndPrice.slice(traderOffer.amountAndPrice.length / 2, traderOffer.amountAndPrice.length);
  let startDates = traderOffer.startDateAndExpire.slice(0, traderOffer.startDateAndExpire.length / 2);
  let endDates = traderOffer.startDateAndExpire.slice(traderOffer.startDateAndExpire.length / 2, traderOffer.startDateAndExpire.length);
  let locked = traderOffer.lockedAndAllowAll.slice(0, traderOffer.lockedAndAllowAll.length);
  let queueArr:GroupQueueOfferDetail[] = [];
  let tradeFeeObj = getTradeFee(QueueType.GROUP_QUEUE);
  let tradeFee = new BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
  const WETH9Address = getAddressByKey('WETH9');
  const isTokenInNative =  tokenIn.address.toLowerCase() == WETH9Address.toLowerCase();
  const isTokenOutNative = tokenOut.address.toLowerCase() == WETH9Address.toLowerCase();

  for (let i = 0; i < amounts.length; i++) {
    if (amounts[i].eq("0")) continue;
    let allocation = await getGroupQueueAllocation(trader, traderOffer.index[i].toNumber(), pairAddress, tokenIn, tokenOut);
    if (allocation.eq("0")) continue;
    let tokenOutAvailable = new BigNumber(amounts[i]).gt(new BigNumber(allocation)) ? allocation : amounts[i]
    let tokenInAvailable = new BigNumber(tokenOutAvailable).dividedBy(new BigNumber(prices[i])).shiftedBy(18 - tokenOut.decimals).dividedBy(new BigNumber(tradeFee)).decimalPlaces(tokenIn.decimals, 1).toFixed();
    queueArr.push({
      pairAddress,
      tokenIn: isTokenInNative ? nativeToken.symbol : tokenIn.address,
      tokenOut: isTokenOutNative ? nativeToken.symbol : tokenOut.address,
      index: traderOffer.index[i],
      provider: traderOffer.provider[i],
      amount: amounts[i],
      allocation,
      tokenInAvailable,
      price: prices[i],
      start: startDates[i].toNumber() * 1000,
      expire: endDates[i].toNumber() * 1000,
      allowAll: false,
      locked: locked[i],
      tradeFee
    });
  }
  return queueArr.filter(v => moment().isBetween(v.start, v.expire));
}

const getGroupQueueItemsForAllowAll = async (pairAddress: string, tokenIn: any, tokenOut: any):Promise<GroupQueueOfferDetail[]> => {
  let wallet = getWallet() as any;
  let chainId = getChainId();
  const nativeToken = getChainNativeToken(chainId);
  var direction = new BigNumber(tokenIn.address.toLowerCase()).lt(tokenOut.address.toLowerCase());
  const oracleContract = new Contracts.OSWAP_RestrictedPair(wallet, pairAddress);
  let allOffer = await oracleContract.getOffers({ direction, start: 0, length: 100 });
  let amounts = allOffer.amountAndPrice.slice(0, allOffer.amountAndPrice.length / 2);
  let prices = allOffer.amountAndPrice.slice(allOffer.amountAndPrice.length / 2, allOffer.amountAndPrice.length);
  let startDates = allOffer.startDateAndExpire.slice(0, allOffer.startDateAndExpire.length / 2);
  let endDates = allOffer.startDateAndExpire.slice(allOffer.startDateAndExpire.length / 2, allOffer.startDateAndExpire.length);
  let allowAll = allOffer.lockedAndAllowAll.slice(allOffer.lockedAndAllowAll.length / 2, allOffer.lockedAndAllowAll.length);
  let locked = allOffer.lockedAndAllowAll.slice(0, allOffer.lockedAndAllowAll.length);
  let queueArr:GroupQueueOfferDetail[] = [];
  let tradeFeeObj = getTradeFee(QueueType.GROUP_QUEUE);
  let tradeFee = new BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
  const WETH9Address = getAddressByKey('WETH9');
  const isTokenInNative =  tokenIn.address.toLowerCase() == WETH9Address.toLowerCase();
  const isTokenOutNative = tokenOut.address.toLowerCase() == WETH9Address.toLowerCase();

  for (let i = 0; i < amounts.length; i++) {
    let tokenOutAvailable = amounts[i]
    let tokenInAvailable = tokenOutAvailable.dividedBy(prices[i]).shiftedBy(18 - tokenOut.decimals).dividedBy(new BigNumber(tradeFee)).decimalPlaces(tokenIn.decimals, 1).toFixed();

    queueArr.push({
      pairAddress,
      tokenIn: isTokenInNative ? nativeToken.symbol : tokenIn.address,
      tokenOut: isTokenOutNative ? nativeToken.symbol : tokenOut.address,
      index: allOffer.index[i],
      provider: allOffer.provider[i],
      amount: amounts[i],
      allocation: amounts[i],
      tokenInAvailable,
      price: prices[i],
      start: startDates[i].toNumber() * 1000,
      expire: endDates[i].toNumber() * 1000,
      allowAll: allowAll[i],
      locked: locked[i],
      tradeFee
    });
  }

  return queueArr.filter(v => (moment().isBetween(v.start, v.expire) && v.allowAll == true));
}

const getGroupQueueTraderDataObj = async (pairAddress: string, tokenIn: any, tokenOut: any, amountIn: string, offerIndex?: string) => {
  let tokens = mapTokenObjectSet({ tokenIn, tokenOut });
  let tokenAmountIn = toTokenAmount(tokens.tokenIn, amountIn).toFixed();
  let tradeFeeObj = getTradeFee(QueueType.GROUP_QUEUE);
  let tradeFee = new BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
  let queueArr = await getGroupQueueItemsForTrader(pairAddress, tokens.tokenIn, tokens.tokenOut);
  let queueAll = await getGroupQueueItemsForAllowAll(pairAddress, tokens.tokenIn, tokens.tokenOut);
  queueArr = queueArr.concat(queueAll);
  queueArr = queueArr.map(v => {
    return {
      ...v,
      amountIn: new BigNumber(tokenAmountIn).shiftedBy(-tokens.tokenIn.decimals).toFixed(),
      amountOut: new BigNumber(tokenAmountIn).times(v.price).shiftedBy(-18 - Number(tokens.tokenIn.decimals) + Number(tokens.tokenOut.decimals)).times(tradeFee).toFixed()
    }
  }).filter(v => new BigNumber(v.tokenInAvailable).gte(new BigNumber(v.amountIn))).sort((a, b) => new BigNumber(b.amountOut).minus(a.amountOut).toNumber());

  if (queueArr.length == 0) {
    return {
      sufficientLiquidity: false
    }
  }

  let ratioArr = [toWeiInv('1')];
  let queueItem;
  if (offerIndex) {
    queueItem = queueArr.find(o => o.index.eq(offerIndex));
    if (!queueItem) return null;
  }
  else {
    queueItem = queueArr[0];
  }

  let indexArr = [queueItem.index];
  let amountOut = queueItem.amount; //was amountOut
  let price = new BigNumber(1).shiftedBy(18).div(queueItem.price).toFixed();
  let priceSwap = new BigNumber(queueItem.price).shiftedBy(-18).toFixed();

  let data = "0x" + numberToBytes32((indexArr.length * 2 + 1) * 32) + numberToBytes32(indexArr.length) + indexArr.map(e => numberToBytes32(e)).join('') + ratioArr.map(e => numberToBytes32(e)).join('');
  return {
    sufficientLiquidity: true,
    price: parseFloat(price),
    priceSwap: parseFloat(priceSwap),
    amountIn,
    amountOut: new BigNumber(amountOut).shiftedBy(-tokens.tokenOut.decimals).toFixed(),
    data,
    tradeFeeObj
  }
}

const getGroupQueueAllocation = async (traderAddress: string, offerIndex: number, pairAddress: string, tokenIn: any, tokenOut: any) => {
  let direction = new BigNumber(tokenIn.address.toLowerCase()).lt(tokenOut.address.toLowerCase());
  return await new Contracts.OSWAP_RestrictedPair(getWallet() as any, pairAddress).traderAllocation({ param1: direction, param2: offerIndex, param3: traderAddress });
};

const getLatestOraclePrice = async (queueType: QueueType, token: ITokenObject, againstToken: ITokenObject) => {
  let tokens = mapTokenObjectSet({ token, againstToken });
  let wallet = getWallet() as any;
  let address = getFactoryAddress(queueType);
  let factory = new Contracts.OSWAP_OracleFactory(wallet, address);
  let oracleAdapterAddress = await factory.oracles({ param1: tokens.token.address, param2: tokens.againstToken.address });
  let price = '0';
  try {
    const oracleAdaptorContract = new AdaptorContracts.OSWAP_OracleChainlink(wallet, oracleAdapterAddress);
    price = (await oracleAdaptorContract.getLatestPrice({
      from: tokens.token.address,
      to: tokens.againstToken.address,
      payload: "0x"
    })).toFixed();
  }
  catch (err) {
    console.log("Fail to get latest price from oracle");
  }
  return price;
}

const getRestrictedPairCustomParams = async () => {
  const FEE_PER_ORDER = "RestrictedPair.feePerOrder";
  const FEE_PER_TRADER = "RestrictedPair.feePerTrader";
  const MAX_DUR = "RestrictedPair.maxDur";
  let wallet = getWallet() as any;
  const address = getAddressByKey(ConfigStore);
  const configStoreContract = new Contracts.OSWAP_ConfigStore(wallet, address);
  let feePerOrderRaw = await configStoreContract.customParam(Utils.stringToBytes32(FEE_PER_ORDER).toString());
  let feePerOrder = Utils.fromDecimals(feePerOrderRaw).toString();
  let feePerTraderRaw = await configStoreContract.customParam(Utils.stringToBytes32(FEE_PER_TRADER).toString());
  let feePerTrader = Utils.fromDecimals(feePerTraderRaw).toString();
  let maxDur = await configStoreContract.customParam(Utils.stringToBytes32(MAX_DUR).toString());
  maxDur = new BigNumber(maxDur).toString();
  return {
    feePerOrder,
    feePerTrader,
    maxDur
  }
}

const getGroupQueuePairInfo = async (pairAddress: string, tokenAddress: string, provider?: string, offerIndex?: number) => {
  let wallet = getWallet() as any;
  let chainId = getChainId();
  const nativeToken = getChainNativeToken(chainId);
  const WETH9Address = getAddressByKey('WETH9');
  const _offerIndex = offerIndex? new BigNumber(offerIndex) : new BigNumber(0)

  if (tokenAddress == nativeToken.symbol) tokenAddress = WETH9Address;
  const factoryAddress = getFactoryAddress(QueueType.GROUP_QUEUE)
  const factoryContract = new Contracts.OSWAP_RestrictedFactory(wallet, factoryAddress);
  const groupPair = new Contracts.OSWAP_RestrictedPair(wallet, pairAddress);
  let token0Address = await groupPair.token0();
  let token1Address = await groupPair.token1();
  let token0 = getTokenObjectByAddress(token0Address);
  let token1 = getTokenObjectByAddress(token1Address);
  let token = getTokenObjectByAddress(tokenAddress);
  let directDirection = !(new BigNumber(token0Address.toLowerCase()).lt(token1Address.toLowerCase()));
  let direction = directDirection ? token1Address.toLowerCase() != tokenAddress.toLowerCase() : token0Address.toLowerCase() != tokenAddress.toLowerCase();
  let pairIndex = await factoryContract.pairIdx(pairAddress);
  let queueSize = (await groupPair.counter(direction)).toNumber();
  let queue = await groupPair.getOffers({ direction, start: 0, length: queueSize });
  let amounts = queue.amountAndPrice.slice(0, queue.amountAndPrice.length / 2);
  let expiryDates = queue.startDateAndExpire.slice(queue.startDateAndExpire.length / 2, queue.startDateAndExpire.length);

  let tokenDecimals = token.decimals;
  let now = new Date().getTime();
  let totalAmount = new BigNumber("0");

  let againstToken = (token0Address.toLowerCase() == tokenAddress.toLowerCase()) ? token1 : token0;
  for (let i = 0; i < amounts.length; i++) {
    if (now >= new Date(expiryDates[i].toNumber() * 1000).getTime()) continue;
    totalAmount = totalAmount.plus(amounts[i]);
  }

  let customParams = await getRestrictedPairCustomParams();

  let returnObj = {
    pairAddress: pairAddress.toLowerCase(),
    fromTokenAddress: token.address?.toLowerCase() == WETH9Address.toLowerCase() ? nativeToken.symbol : token.address?.toLowerCase(),
    toTokenAddress: againstToken.address?.toLowerCase() == WETH9Address.toLowerCase() ? nativeToken.symbol : againstToken.address?.toLowerCase(),
    pairIndex: pairIndex,
    ...customParams
  };


  if (provider && offerIndex) {
    const getProviderQueuePairInfo = async function () {
      let offer = await groupPair.offers({ param1: direction, param2: _offerIndex });
      let againstTokenDecimals = againstToken.decimals;

      let approvedTraderLength = (await groupPair.getApprovedTraderLength({ direction, offerIndex: _offerIndex })).toNumber();
      let addresses = [];
      for (let j = 0; j < approvedTraderLength; j += 100) {
        let approvedTrader = await groupPair.getApprovedTrader({ direction, offerIndex: _offerIndex, start: j, length: 100 });
        addresses.push(...approvedTrader.trader.map((v: any, i: number) => {
          return {
            address: v,
            allocation: new BigNumber(approvedTrader.allocation[i]).shiftedBy(-Number(tokenDecimals)).toFixed()
          }
        }))
      }

      const restrictedPrice = new BigNumber(offer.restrictedPrice).shiftedBy(-18).toFixed();
      return {
        amount: new BigNumber(offer.amount).shiftedBy(-Number(tokenDecimals)).toFixed(),
        reserve: new BigNumber(offer.receiving).shiftedBy(-Number(againstTokenDecimals)).toFixed(),
        startDate: new Date(offer.startDate.toNumber() * 1000),
        expire: new Date(offer.expire.toNumber() * 1000),
        locked: offer.locked,
        allowAll: offer.allowAll,
        offerPrice: toWeiInv(restrictedPrice).shiftedBy(-18).toFixed(),
        addresses
      }
    }
    let providerQueuePairInfo = await getProviderQueuePairInfo();
    returnObj = { ...returnObj, ...providerQueuePairInfo };
  }

  return returnObj;
}

interface ProviderGroupQueueInfo {
  pairAddress: string,
  fromTokenAddress: string,
  toTokenAddress: string,
  amount: string,
  offerPrice: string,
  startDate: number,
  endDate: number,
  state: string,
  allowAll: boolean,
  direct: boolean,
  offerIndex: number,
  addresses:{address:string,allocation:string}[],
  allocation: string,
  willGet: string,
  tradeFee:string,
  tokenInAvailable:string,
  available:string
}

const getProviderGroupQueueInfoByIndex = async (pairAddress: string, tokenInAddress: string, offerIndex: number):Promise<ProviderGroupQueueInfo> => {
  let wallet = getWallet() as any;
  let chainId = getChainId();
  if (!wallet.provider) wallet.provider = wallet.networksMap[chainId].rpcUrls[0];
  const nativeToken = getChainNativeToken(chainId);
  const WETH9Address = getAddressByKey('WETH9');
  const oracleContract = new Contracts.OSWAP_RestrictedPair(wallet, pairAddress);
  let token0Address = await oracleContract.token0();
  let token1Address = await oracleContract.token1();
  let direction: boolean;
  let tokenOut: ITokenObject;
  let tokenIn: ITokenObject;
  tokenInAddress = tokenInAddress.toLowerCase()
  token0Address = token0Address.toLowerCase()
  token1Address = token1Address.toLowerCase()
  if (token0Address == tokenInAddress) {
    direction = !(new BigNumber(token0Address).lt(token1Address));
    tokenIn = getTokenObjectByAddress(token0Address);
    tokenOut = getTokenObjectByAddress(token1Address);
  } else {
    direction = new BigNumber(token0Address).lt(token1Address);
    tokenIn = getTokenObjectByAddress(token1Address);
    tokenOut = getTokenObjectByAddress(token0Address);
  }
  let offer = await oracleContract.getOffers({ direction, start: offerIndex, length: 1 });
  let tradeFeeObj = getTradeFee(QueueType.GROUP_QUEUE);
  let tradeFee = new BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
  
  let approvedTraderLength = await oracleContract.getApprovedTraderLength({ direction, offerIndex });
  let addresses:{address:string,allocation:string}[] = [];
  let totalAllocation = '0';
  for (let i = 0; i < approvedTraderLength.toNumber(); i += 100) {
    let approvedTrader = await oracleContract.getApprovedTrader({ direction, offerIndex, start: i, length: 100 });
    addresses.push(...approvedTrader.trader.map((v: string, i: number) => {
      let allo = new BigNumber(approvedTrader.allocation[i]).shiftedBy(-Number(tokenIn.decimals));
      totalAllocation = allo.plus(totalAllocation).toFixed()
      return {
        address: v,
        allocation: allo.toFixed()
      }
    }));
  }
  let price = toWeiInv(new BigNumber(offer.amountAndPrice[1]).shiftedBy(-tokenOut.decimals).toFixed()).shiftedBy(-tokenIn.decimals).toFixed();
  let amount = new BigNumber(offer.amountAndPrice[0]).shiftedBy(-Number(tokenIn.decimals)).toFixed();
  const selectedAddress = wallet.address;
  let available = offer.lockedAndAllowAll[1] ? amount : new BigNumber(await getGroupQueueAllocation(selectedAddress, offerIndex, pairAddress, tokenOut, tokenIn)).shiftedBy(-Number(tokenIn.decimals)).toFixed();
  let tokenInAvailable = new BigNumber(available).dividedBy(new BigNumber(price)).dividedBy(new BigNumber(tradeFee)).toFixed();
  return {
    pairAddress: pairAddress.toLowerCase(),
    fromTokenAddress: tokenInAddress == WETH9Address.toLowerCase() ? nativeToken.symbol : tokenInAddress,
    toTokenAddress: tokenOut.address? tokenOut.address.toLowerCase() == WETH9Address.toLowerCase() ? nativeToken.symbol : tokenOut.address.toLowerCase() : "",
    amount,
    offerPrice: price,
    startDate: offer.startDateAndExpire[0].times(1000).toNumber(),
    endDate: offer.startDateAndExpire[1].times(1000).toNumber(),
    state: offer.lockedAndAllowAll[0] ? 'Locked' : 'Unlocked',
    allowAll: offer.lockedAndAllowAll[1],
    direct: true,
    offerIndex,
    addresses,
    allocation: totalAllocation,
    willGet: new BigNumber(offer.amountAndPrice[0]).times(new BigNumber(price)).shiftedBy(-Number(tokenIn.decimals)).toFixed(),
    tradeFee,
    tokenInAvailable,
    available
  }
}

interface QueueBasicInfo {
  firstToken: string,
  secondToken: string,
  queueSize: BigNumber,
  topStake: BigNumber | undefined,
  totalOrder: BigNumber,
  totalStake: BigNumber | undefined,
  pairAddress: string,
  isOdd :boolean,
}

const getRangeQueueData = async (pair: string, tokenA: ITokenObject, tokenB: ITokenObject, amountOut: BigNumber) => {
  let data = '0x';
  let wallet = getWallet() as any;
  let chainId = getChainId();

  if (!tokenA.address) tokenA = getWETH(chainId);
  if (!tokenB.address) tokenB = getWETH(chainId);
  let direction = (new BigNumber(tokenA.address!.toLowerCase()).lt(tokenB.address!.toLowerCase()));
  let rangePair = new Contracts.OSWAP_RangePair(wallet, pair);
  let offers = await rangePair.getOffers({
    direction,
    start: 0,
    end: 100
  });
  let amounts = offers.amountAndReserve.slice(0, offers.amountAndReserve.length / 2);
  let reserves = offers.amountAndReserve.slice(offers.amountAndReserve.length / 2, offers.amountAndReserve.length);
  let expiryDates = offers.startDateAndExpire.slice(offers.startDateAndExpire.length / 2, offers.startDateAndExpire.length);
  let lowerLimits = offers.lowerLimitAndUpperLimit.slice(0, offers.lowerLimitAndUpperLimit.length / 2);
  let upperLimits = offers.lowerLimitAndUpperLimit.slice(offers.lowerLimitAndUpperLimit.length / 2, offers.lowerLimitAndUpperLimit.length);

  if (amounts.length > 1) {
    let index = [];
    let remainingAmt = new BigNumber(amountOut);
    const priceSwap = await getLatestOraclePrice(QueueType.RANGE_QUEUE, tokenA, tokenB);
    let offerArr = [...Array(amounts.length).keys()].map(i => i + 1).map(v => {
      return {
        index: v,
        provider: offers.provider[v],
        amount: amounts[v],
        reserve: reserves[v],
        lowerLimit: lowerLimits[v],
        upperLimit: upperLimits[v],
        expire: expiryDates[v],
        privateReplenish: offers.privateReplenish[v]
      }
    }).sort((a, b) => new BigNumber(b.amount).minus(a.amount).toNumber())

    for (let i = 0; i < offerArr.length; i++) {
      let offer = offerArr[i];
      let lowerLimit = offer.lowerLimit;
      let upperLimit = offer.upperLimit;
      let expire = offer.expire.toNumber() * 1000;
      if (moment(expire).isBefore(moment())) continue;
      if (new BigNumber(lowerLimit).gt(priceSwap)) continue;
      if (new BigNumber(upperLimit).gt(0) && new BigNumber(upperLimit).lt(priceSwap)) continue;
      if (remainingAmt.gt(offer.amount)) {
        index.push(offer.index);
        remainingAmt = remainingAmt.minus(offer.amount);
      }
      else {
        index.push(offer.index);
        break;
      }
    }
    data = "0x" + Utils.numberToBytes32(0x20 * (index.length + 1)) + Utils.numberToBytes32(index.length) + index.map(e => Utils.numberToBytes32(e)).join('');
  }
  return data;
}

export {
  QueueBasicInfo,
  getRangeQueueData,
  getPair,
  getGroupQueuePairInfo,
  getLiquidityProviderAddress,
  getLatestOraclePrice,
  getGroupQueueTraderDataObj
}
