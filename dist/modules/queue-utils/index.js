define("@swap/queue-utils", ["require", "exports", "@swap/global", "@ijstech/eth-wallet", "@swap/store", "@openswap/sdk", "@openswap/chainlink-sdk", "@openswap/oracle-adaptor-sdk", "@ijstech/components"], function (require, exports, global_1, eth_wallet_1, store_1, sdk_1, chainlink_sdk_1, oracle_adaptor_sdk_1, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGroupQueueTraderDataObj = exports.getLatestOraclePrice = exports.getLiquidityProviderAddress = exports.getGroupQueuePairInfo = exports.getPair = exports.getRangeQueueData = void 0;
    const ConfigStore = global_1.ABIKeys.ConfigStore;
    const getWETH = (chainId) => {
        let wrappedToken = store_1.WETHByChainId[chainId];
        return wrappedToken;
    };
    const getAddressByKey = (key) => {
        let Address = store_1.getAddresses(store_1.getChainId());
        return Address[key];
    };
    function toTokenAmount(token, amount) {
        return (eth_wallet_1.BigNumber.isBigNumber(amount) ? amount : new eth_wallet_1.BigNumber(amount.toString())).shiftedBy(Number(token.decimals)).decimalPlaces(0, eth_wallet_1.BigNumber.ROUND_FLOOR);
    }
    const getTokenPrice = async (token) => {
        var _a;
        const wallet = store_1.getWallet();
        let chainId = (_a = wallet.chainId) !== null && _a !== void 0 ? _a : store_1.getChainId();
        let tokenPrice;
        // get price from price feed 
        let tokenPriceFeedAddress = store_1.ToUSDPriceFeedAddressesMap[chainId][token.toLowerCase()];
        if (tokenPriceFeedAddress) {
            const aggregatorProxy = new chainlink_sdk_1.Contracts.AggregatorProxy(wallet, tokenPriceFeedAddress);
            let tokenLatestRoundData = await aggregatorProxy.latestRoundData();
            let tokenPriceFeedDecimals = await aggregatorProxy.decimals();
            return new eth_wallet_1.BigNumber(tokenLatestRoundData.answer).shiftedBy(-tokenPriceFeedDecimals).toFixed();
        }
        // get price from AMM
        let referencePair = store_1.tokenPriceAMMReference[chainId] && store_1.tokenPriceAMMReference[chainId][token.toLowerCase()];
        if (!referencePair)
            return null;
        const pairContract = new sdk_1.Contracts.OSWAP_Pair(wallet, referencePair);
        let token0 = await pairContract.token0();
        let token1 = await pairContract.token1();
        let reserves = await pairContract.getReserves();
        let token0PriceFeedAddress = store_1.ToUSDPriceFeedAddressesMap[chainId] && store_1.ToUSDPriceFeedAddressesMap[chainId][token0.toLowerCase()];
        let token1PriceFeedAddress = store_1.ToUSDPriceFeedAddressesMap[chainId] && store_1.ToUSDPriceFeedAddressesMap[chainId][token1.toLowerCase()];
        if (token0PriceFeedAddress || token1PriceFeedAddress) {
            if (token0PriceFeedAddress) {
                const aggregatorProxy = new chainlink_sdk_1.Contracts.AggregatorProxy(wallet, token0PriceFeedAddress);
                let token0LatestRoundData = await aggregatorProxy.latestRoundData();
                let token0PriceFeedDecimals = await aggregatorProxy.decimals();
                let token0USDPrice = new eth_wallet_1.BigNumber(token0LatestRoundData.answer).shiftedBy(-token0PriceFeedDecimals).toFixed();
                if (new eth_wallet_1.BigNumber(token.toLowerCase()).lt(token0.toLowerCase())) {
                    tokenPrice = new eth_wallet_1.BigNumber(reserves._reserve1).div(reserves._reserve0).times(token0USDPrice).toFixed();
                }
                else {
                    tokenPrice = new eth_wallet_1.BigNumber(reserves._reserve0).div(reserves._reserve1).times(token0USDPrice).toFixed();
                }
            }
            else {
                const aggregatorProxy = new chainlink_sdk_1.Contracts.AggregatorProxy(wallet, token1PriceFeedAddress);
                let token1LatestRoundData = await aggregatorProxy.latestRoundData();
                let token1PriceFeedDecimals = await aggregatorProxy.decimals();
                let token1USDPrice = new eth_wallet_1.BigNumber(token1LatestRoundData.answer).shiftedBy(-token1PriceFeedDecimals).toFixed();
                if (new eth_wallet_1.BigNumber(token.toLowerCase()).lt(token1.toLowerCase())) {
                    tokenPrice = new eth_wallet_1.BigNumber(reserves._reserve1).div(reserves._reserve0).times(token1USDPrice).toFixed();
                }
                else {
                    tokenPrice = new eth_wallet_1.BigNumber(reserves._reserve0).div(reserves._reserve1).times(token1USDPrice).toFixed();
                }
            }
        }
        else {
            if (token0.toLowerCase() == token.toLowerCase()) { //for other reference pair
                let token1Price = await getTokenPrice(token1) || '';
                tokenPrice = new eth_wallet_1.BigNumber(token1Price).times(reserves._reserve1).div(reserves._reserve0).toFixed();
            }
            else {
                let token0Price = await getTokenPrice(token0) || '';
                tokenPrice = new eth_wallet_1.BigNumber(token0Price).times(reserves._reserve0).div(reserves._reserve1).toFixed();
            }
        }
        return tokenPrice;
    };
    const mapTokenObjectSet = (obj) => {
        var _a;
        let chainId = store_1.getChainId();
        const WETH9 = getWETH(chainId);
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (!((_a = obj[key]) === null || _a === void 0 ? void 0 : _a.address))
                    obj[key] = WETH9;
            }
        }
        return obj;
    };
    const getTokenObjectByAddress = (address) => {
        let chainId = store_1.getChainId();
        if (address.toLowerCase() === getAddressByKey('WETH9').toLowerCase()) {
            return getWETH(chainId);
        }
        let tokenMap = store_1.getTokenMap();
        return tokenMap[address.toLowerCase()];
    };
    const getFactoryAddress = (queueType) => {
        switch (queueType) {
            case global_1.QueueType.PRIORITY_QUEUE:
                return getAddressByKey("OSWAP_OracleFactory");
            case global_1.QueueType.RANGE_QUEUE:
                return getAddressByKey("OSWAP_RangeFactory");
            case global_1.QueueType.PEGGED_QUEUE:
                return getAddressByKey("OSWAP_PeggedOracleFactory");
            case global_1.QueueType.GROUP_QUEUE:
                return getAddressByKey("OSWAP_RestrictedFactory");
        }
    };
    const getLiquidityProviderAddress = (queueType) => {
        switch (queueType) {
            case global_1.QueueType.PRIORITY_QUEUE:
                return getAddressByKey("OSWAP_OracleLiquidityProvider");
            case global_1.QueueType.RANGE_QUEUE:
                return getAddressByKey("OSWAP_RangeLiquidityProvider");
            case global_1.QueueType.PEGGED_QUEUE:
                return getAddressByKey("OSWAP_PeggedOracleLiquidityProvider");
            case global_1.QueueType.GROUP_QUEUE:
                return getAddressByKey("OSWAP_RestrictedLiquidityProvider");
        }
    };
    exports.getLiquidityProviderAddress = getLiquidityProviderAddress;
    const getTradeFee = (queueType) => {
        switch (queueType) {
            case global_1.QueueType.PRIORITY_QUEUE:
            case global_1.QueueType.RANGE_QUEUE:
            case global_1.QueueType.GROUP_QUEUE:
                return { fee: "1", base: "1000" };
            case global_1.QueueType.PEGGED_QUEUE:
                return { fee: "1", base: "1000" };
        }
    };
    const getPair = async (queueType, tokenA, tokenB) => {
        const wallet = store_1.getWallet();
        let tokens = mapTokenObjectSet({ tokenA, tokenB });
        let params = { param1: tokens.tokenA.address, param2: tokens.tokenB.address };
        let factoryAddress = getFactoryAddress(queueType);
        switch (queueType) {
            case global_1.QueueType.PEGGED_QUEUE:
            case global_1.QueueType.PRIORITY_QUEUE:
                let priorityQ = new sdk_1.Contracts.OSWAP_OracleFactory(wallet, factoryAddress);
                return await priorityQ.getPair(params);
            case global_1.QueueType.RANGE_QUEUE:
                let rangeQ = new sdk_1.Contracts.OSWAP_RangeFactory(wallet, factoryAddress);
                return await rangeQ.getPair(params);
            case global_1.QueueType.GROUP_QUEUE:
                let groupQ = new sdk_1.Contracts.OSWAP_RestrictedFactory(wallet, factoryAddress);
                return await groupQ.getPair(Object.assign(Object.assign({}, params), { param3: 0 }));
        }
    };
    exports.getPair = getPair;
    const getGroupQueueItemsForTrader = async (pairAddress, tokenIn, tokenOut) => {
        let wallet = store_1.getWallet();
        let chainId = store_1.getChainId();
        const nativeToken = store_1.getChainNativeToken(chainId);
        var direction = new eth_wallet_1.BigNumber(tokenIn.address.toLowerCase()).lt(tokenOut.address.toLowerCase());
        let trader = wallet.address;
        const pairContract = new sdk_1.Contracts.OSWAP_RestrictedPair(wallet, pairAddress);
        let traderOffer = await pairContract.getTraderOffer({ trader, direction, start: 0, length: 100 });
        let amounts = traderOffer.amountAndPrice.slice(0, traderOffer.amountAndPrice.length / 2);
        let prices = traderOffer.amountAndPrice.slice(traderOffer.amountAndPrice.length / 2, traderOffer.amountAndPrice.length);
        let startDates = traderOffer.startDateAndExpire.slice(0, traderOffer.startDateAndExpire.length / 2);
        let endDates = traderOffer.startDateAndExpire.slice(traderOffer.startDateAndExpire.length / 2, traderOffer.startDateAndExpire.length);
        let locked = traderOffer.lockedAndAllowAll.slice(0, traderOffer.lockedAndAllowAll.length);
        let queueArr = [];
        let tradeFeeObj = getTradeFee(global_1.QueueType.GROUP_QUEUE);
        let tradeFee = new eth_wallet_1.BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
        const WETH9Address = getAddressByKey('WETH9');
        const isTokenInNative = tokenIn.address.toLowerCase() == WETH9Address.toLowerCase();
        const isTokenOutNative = tokenOut.address.toLowerCase() == WETH9Address.toLowerCase();
        for (let i = 0; i < amounts.length; i++) {
            if (amounts[i].eq("0"))
                continue;
            let allocation = await getGroupQueueAllocation(trader, traderOffer.index[i].toNumber(), pairAddress, tokenIn, tokenOut);
            if (allocation.eq("0"))
                continue;
            let tokenOutAvailable = new eth_wallet_1.BigNumber(amounts[i]).gt(new eth_wallet_1.BigNumber(allocation)) ? allocation : amounts[i];
            let tokenInAvailable = new eth_wallet_1.BigNumber(tokenOutAvailable).dividedBy(new eth_wallet_1.BigNumber(prices[i])).shiftedBy(18 - tokenOut.decimals).dividedBy(new eth_wallet_1.BigNumber(tradeFee)).decimalPlaces(tokenIn.decimals, 1).toFixed();
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
        return queueArr.filter(v => components_1.moment().isBetween(v.start, v.expire));
    };
    const getGroupQueueItemsForAllowAll = async (pairAddress, tokenIn, tokenOut) => {
        let wallet = store_1.getWallet();
        let chainId = store_1.getChainId();
        const nativeToken = store_1.getChainNativeToken(chainId);
        var direction = new eth_wallet_1.BigNumber(tokenIn.address.toLowerCase()).lt(tokenOut.address.toLowerCase());
        const oracleContract = new sdk_1.Contracts.OSWAP_RestrictedPair(wallet, pairAddress);
        let allOffer = await oracleContract.getOffers({ direction, start: 0, length: 100 });
        let amounts = allOffer.amountAndPrice.slice(0, allOffer.amountAndPrice.length / 2);
        let prices = allOffer.amountAndPrice.slice(allOffer.amountAndPrice.length / 2, allOffer.amountAndPrice.length);
        let startDates = allOffer.startDateAndExpire.slice(0, allOffer.startDateAndExpire.length / 2);
        let endDates = allOffer.startDateAndExpire.slice(allOffer.startDateAndExpire.length / 2, allOffer.startDateAndExpire.length);
        let allowAll = allOffer.lockedAndAllowAll.slice(allOffer.lockedAndAllowAll.length / 2, allOffer.lockedAndAllowAll.length);
        let locked = allOffer.lockedAndAllowAll.slice(0, allOffer.lockedAndAllowAll.length);
        let queueArr = [];
        let tradeFeeObj = getTradeFee(global_1.QueueType.GROUP_QUEUE);
        let tradeFee = new eth_wallet_1.BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
        const WETH9Address = getAddressByKey('WETH9');
        const isTokenInNative = tokenIn.address.toLowerCase() == WETH9Address.toLowerCase();
        const isTokenOutNative = tokenOut.address.toLowerCase() == WETH9Address.toLowerCase();
        for (let i = 0; i < amounts.length; i++) {
            let tokenOutAvailable = amounts[i];
            let tokenInAvailable = tokenOutAvailable.dividedBy(prices[i]).shiftedBy(18 - tokenOut.decimals).dividedBy(new eth_wallet_1.BigNumber(tradeFee)).decimalPlaces(tokenIn.decimals, 1).toFixed();
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
        return queueArr.filter(v => (components_1.moment().isBetween(v.start, v.expire) && v.allowAll == true));
    };
    const getGroupQueueTraderDataObj = async (pairAddress, tokenIn, tokenOut, amountIn, offerIndex) => {
        let tokens = mapTokenObjectSet({ tokenIn, tokenOut });
        let tokenAmountIn = toTokenAmount(tokens.tokenIn, amountIn).toFixed();
        let tradeFeeObj = getTradeFee(global_1.QueueType.GROUP_QUEUE);
        let tradeFee = new eth_wallet_1.BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
        let queueArr = await getGroupQueueItemsForTrader(pairAddress, tokens.tokenIn, tokens.tokenOut);
        let queueAll = await getGroupQueueItemsForAllowAll(pairAddress, tokens.tokenIn, tokens.tokenOut);
        queueArr = queueArr.concat(queueAll);
        queueArr = queueArr.map(v => {
            return Object.assign(Object.assign({}, v), { amountIn: new eth_wallet_1.BigNumber(tokenAmountIn).shiftedBy(-tokens.tokenIn.decimals).toFixed(), amountOut: new eth_wallet_1.BigNumber(tokenAmountIn).times(v.price).shiftedBy(-18 - Number(tokens.tokenIn.decimals) + Number(tokens.tokenOut.decimals)).times(tradeFee).toFixed() });
        }).filter(v => new eth_wallet_1.BigNumber(v.tokenInAvailable).gte(new eth_wallet_1.BigNumber(v.amountIn))).sort((a, b) => new eth_wallet_1.BigNumber(b.amountOut).minus(a.amountOut).toNumber());
        if (queueArr.length == 0) {
            return {
                sufficientLiquidity: false
            };
        }
        let ratioArr = [global_1.toWeiInv('1')];
        let queueItem;
        if (offerIndex) {
            queueItem = queueArr.find(o => o.index.eq(offerIndex));
            if (!queueItem)
                return null;
        }
        else {
            queueItem = queueArr[0];
        }
        let indexArr = [queueItem.index];
        let amountOut = queueItem.amount; //was amountOut
        let price = new eth_wallet_1.BigNumber(1).shiftedBy(18).div(queueItem.price).toFixed();
        let priceSwap = new eth_wallet_1.BigNumber(queueItem.price).shiftedBy(-18).toFixed();
        let data = "0x" + global_1.numberToBytes32((indexArr.length * 2 + 1) * 32) + global_1.numberToBytes32(indexArr.length) + indexArr.map(e => global_1.numberToBytes32(e)).join('') + ratioArr.map(e => global_1.numberToBytes32(e)).join('');
        return {
            sufficientLiquidity: true,
            price: parseFloat(price),
            priceSwap: parseFloat(priceSwap),
            amountIn,
            amountOut: new eth_wallet_1.BigNumber(amountOut).shiftedBy(-tokens.tokenOut.decimals).toFixed(),
            data,
            tradeFeeObj
        };
    };
    exports.getGroupQueueTraderDataObj = getGroupQueueTraderDataObj;
    const getGroupQueueAllocation = async (traderAddress, offerIndex, pairAddress, tokenIn, tokenOut) => {
        let direction = new eth_wallet_1.BigNumber(tokenIn.address.toLowerCase()).lt(tokenOut.address.toLowerCase());
        return await new sdk_1.Contracts.OSWAP_RestrictedPair(store_1.getWallet(), pairAddress).traderAllocation({ param1: direction, param2: offerIndex, param3: traderAddress });
    };
    const getLatestOraclePrice = async (queueType, token, againstToken) => {
        let tokens = mapTokenObjectSet({ token, againstToken });
        let wallet = store_1.getWallet();
        let address = getFactoryAddress(queueType);
        let factory = new sdk_1.Contracts.OSWAP_OracleFactory(wallet, address);
        let oracleAdapterAddress = await factory.oracles({ param1: tokens.token.address, param2: tokens.againstToken.address });
        let price = '0';
        try {
            const oracleAdaptorContract = new oracle_adaptor_sdk_1.Contracts.OSWAP_OracleChainlink(wallet, oracleAdapterAddress);
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
    };
    exports.getLatestOraclePrice = getLatestOraclePrice;
    const getRestrictedPairCustomParams = async () => {
        const FEE_PER_ORDER = "RestrictedPair.feePerOrder";
        const FEE_PER_TRADER = "RestrictedPair.feePerTrader";
        const MAX_DUR = "RestrictedPair.maxDur";
        let wallet = store_1.getWallet();
        const address = getAddressByKey(ConfigStore);
        const configStoreContract = new sdk_1.Contracts.OSWAP_ConfigStore(wallet, address);
        let feePerOrderRaw = await configStoreContract.customParam(eth_wallet_1.Utils.stringToBytes32(FEE_PER_ORDER).toString());
        let feePerOrder = eth_wallet_1.Utils.fromDecimals(feePerOrderRaw).toString();
        let feePerTraderRaw = await configStoreContract.customParam(eth_wallet_1.Utils.stringToBytes32(FEE_PER_TRADER).toString());
        let feePerTrader = eth_wallet_1.Utils.fromDecimals(feePerTraderRaw).toString();
        let maxDur = await configStoreContract.customParam(eth_wallet_1.Utils.stringToBytes32(MAX_DUR).toString());
        maxDur = new eth_wallet_1.BigNumber(maxDur).toString();
        return {
            feePerOrder,
            feePerTrader,
            maxDur
        };
    };
    const getGroupQueuePairInfo = async (pairAddress, tokenAddress, provider, offerIndex) => {
        var _a, _b, _c, _d;
        let wallet = store_1.getWallet();
        let chainId = store_1.getChainId();
        const nativeToken = store_1.getChainNativeToken(chainId);
        const WETH9Address = getAddressByKey('WETH9');
        const _offerIndex = offerIndex ? new eth_wallet_1.BigNumber(offerIndex) : new eth_wallet_1.BigNumber(0);
        if (tokenAddress == nativeToken.symbol)
            tokenAddress = WETH9Address;
        const factoryAddress = getFactoryAddress(global_1.QueueType.GROUP_QUEUE);
        const factoryContract = new sdk_1.Contracts.OSWAP_RestrictedFactory(wallet, factoryAddress);
        const groupPair = new sdk_1.Contracts.OSWAP_RestrictedPair(wallet, pairAddress);
        let token0Address = await groupPair.token0();
        let token1Address = await groupPair.token1();
        let token0 = getTokenObjectByAddress(token0Address);
        let token1 = getTokenObjectByAddress(token1Address);
        let token = getTokenObjectByAddress(tokenAddress);
        let directDirection = !(new eth_wallet_1.BigNumber(token0Address.toLowerCase()).lt(token1Address.toLowerCase()));
        let direction = directDirection ? token1Address.toLowerCase() != tokenAddress.toLowerCase() : token0Address.toLowerCase() != tokenAddress.toLowerCase();
        let pairIndex = await factoryContract.pairIdx(pairAddress);
        let queueSize = (await groupPair.counter(direction)).toNumber();
        let queue = await groupPair.getOffers({ direction, start: 0, length: queueSize });
        let amounts = queue.amountAndPrice.slice(0, queue.amountAndPrice.length / 2);
        let expiryDates = queue.startDateAndExpire.slice(queue.startDateAndExpire.length / 2, queue.startDateAndExpire.length);
        let tokenDecimals = token.decimals;
        let now = new Date().getTime();
        let totalAmount = new eth_wallet_1.BigNumber("0");
        let againstToken = (token0Address.toLowerCase() == tokenAddress.toLowerCase()) ? token1 : token0;
        for (let i = 0; i < amounts.length; i++) {
            if (now >= new Date(expiryDates[i].toNumber() * 1000).getTime())
                continue;
            totalAmount = totalAmount.plus(amounts[i]);
        }
        let customParams = await getRestrictedPairCustomParams();
        let returnObj = Object.assign({ pairAddress: pairAddress.toLowerCase(), fromTokenAddress: ((_a = token.address) === null || _a === void 0 ? void 0 : _a.toLowerCase()) == WETH9Address.toLowerCase() ? nativeToken.symbol : (_b = token.address) === null || _b === void 0 ? void 0 : _b.toLowerCase(), toTokenAddress: ((_c = againstToken.address) === null || _c === void 0 ? void 0 : _c.toLowerCase()) == WETH9Address.toLowerCase() ? nativeToken.symbol : (_d = againstToken.address) === null || _d === void 0 ? void 0 : _d.toLowerCase(), pairIndex: pairIndex }, customParams);
        if (provider && offerIndex) {
            const getProviderQueuePairInfo = async function () {
                let offer = await groupPair.offers({ param1: direction, param2: _offerIndex });
                let againstTokenDecimals = againstToken.decimals;
                let approvedTraderLength = (await groupPair.getApprovedTraderLength({ direction, offerIndex: _offerIndex })).toNumber();
                let addresses = [];
                for (let j = 0; j < approvedTraderLength; j += 100) {
                    let approvedTrader = await groupPair.getApprovedTrader({ direction, offerIndex: _offerIndex, start: j, length: 100 });
                    addresses.push(...approvedTrader.trader.map((v, i) => {
                        return {
                            address: v,
                            allocation: new eth_wallet_1.BigNumber(approvedTrader.allocation[i]).shiftedBy(-Number(tokenDecimals)).toFixed()
                        };
                    }));
                }
                const restrictedPrice = new eth_wallet_1.BigNumber(offer.restrictedPrice).shiftedBy(-18).toFixed();
                return {
                    amount: new eth_wallet_1.BigNumber(offer.amount).shiftedBy(-Number(tokenDecimals)).toFixed(),
                    reserve: new eth_wallet_1.BigNumber(offer.receiving).shiftedBy(-Number(againstTokenDecimals)).toFixed(),
                    startDate: new Date(offer.startDate.toNumber() * 1000),
                    expire: new Date(offer.expire.toNumber() * 1000),
                    locked: offer.locked,
                    allowAll: offer.allowAll,
                    offerPrice: global_1.toWeiInv(restrictedPrice).shiftedBy(-18).toFixed(),
                    addresses
                };
            };
            let providerQueuePairInfo = await getProviderQueuePairInfo();
            returnObj = Object.assign(Object.assign({}, returnObj), providerQueuePairInfo);
        }
        return returnObj;
    };
    exports.getGroupQueuePairInfo = getGroupQueuePairInfo;
    const getProviderGroupQueueInfoByIndex = async (pairAddress, tokenInAddress, offerIndex) => {
        let wallet = store_1.getWallet();
        let chainId = store_1.getChainId();
        if (!wallet.provider)
            wallet.provider = wallet.networksMap[chainId].rpcUrls[0];
        const nativeToken = store_1.getChainNativeToken(chainId);
        const WETH9Address = getAddressByKey('WETH9');
        const oracleContract = new sdk_1.Contracts.OSWAP_RestrictedPair(wallet, pairAddress);
        let token0Address = await oracleContract.token0();
        let token1Address = await oracleContract.token1();
        let direction;
        let tokenOut;
        let tokenIn;
        tokenInAddress = tokenInAddress.toLowerCase();
        token0Address = token0Address.toLowerCase();
        token1Address = token1Address.toLowerCase();
        if (token0Address == tokenInAddress) {
            direction = !(new eth_wallet_1.BigNumber(token0Address).lt(token1Address));
            tokenIn = getTokenObjectByAddress(token0Address);
            tokenOut = getTokenObjectByAddress(token1Address);
        }
        else {
            direction = new eth_wallet_1.BigNumber(token0Address).lt(token1Address);
            tokenIn = getTokenObjectByAddress(token1Address);
            tokenOut = getTokenObjectByAddress(token0Address);
        }
        let offer = await oracleContract.getOffers({ direction, start: offerIndex, length: 1 });
        let tradeFeeObj = getTradeFee(global_1.QueueType.GROUP_QUEUE);
        let tradeFee = new eth_wallet_1.BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
        let approvedTraderLength = await oracleContract.getApprovedTraderLength({ direction, offerIndex });
        let addresses = [];
        let totalAllocation = '0';
        for (let i = 0; i < approvedTraderLength.toNumber(); i += 100) {
            let approvedTrader = await oracleContract.getApprovedTrader({ direction, offerIndex, start: i, length: 100 });
            addresses.push(...approvedTrader.trader.map((v, i) => {
                let allo = new eth_wallet_1.BigNumber(approvedTrader.allocation[i]).shiftedBy(-Number(tokenIn.decimals));
                totalAllocation = allo.plus(totalAllocation).toFixed();
                return {
                    address: v,
                    allocation: allo.toFixed()
                };
            }));
        }
        let price = global_1.toWeiInv(new eth_wallet_1.BigNumber(offer.amountAndPrice[1]).shiftedBy(-tokenOut.decimals).toFixed()).shiftedBy(-tokenIn.decimals).toFixed();
        let amount = new eth_wallet_1.BigNumber(offer.amountAndPrice[0]).shiftedBy(-Number(tokenIn.decimals)).toFixed();
        const selectedAddress = wallet.address;
        let available = offer.lockedAndAllowAll[1] ? amount : new eth_wallet_1.BigNumber(await getGroupQueueAllocation(selectedAddress, offerIndex, pairAddress, tokenOut, tokenIn)).shiftedBy(-Number(tokenIn.decimals)).toFixed();
        let tokenInAvailable = new eth_wallet_1.BigNumber(available).dividedBy(new eth_wallet_1.BigNumber(price)).dividedBy(new eth_wallet_1.BigNumber(tradeFee)).toFixed();
        return {
            pairAddress: pairAddress.toLowerCase(),
            fromTokenAddress: tokenInAddress == WETH9Address.toLowerCase() ? nativeToken.symbol : tokenInAddress,
            toTokenAddress: tokenOut.address ? tokenOut.address.toLowerCase() == WETH9Address.toLowerCase() ? nativeToken.symbol : tokenOut.address.toLowerCase() : "",
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
            willGet: new eth_wallet_1.BigNumber(offer.amountAndPrice[0]).times(new eth_wallet_1.BigNumber(price)).shiftedBy(-Number(tokenIn.decimals)).toFixed(),
            tradeFee,
            tokenInAvailable,
            available
        };
    };
    const getRangeQueueData = async (pair, tokenA, tokenB, amountOut) => {
        let data = '0x';
        let wallet = store_1.getWallet();
        let chainId = store_1.getChainId();
        if (!tokenA.address)
            tokenA = getWETH(chainId);
        if (!tokenB.address)
            tokenB = getWETH(chainId);
        let direction = (new eth_wallet_1.BigNumber(tokenA.address.toLowerCase()).lt(tokenB.address.toLowerCase()));
        let rangePair = new sdk_1.Contracts.OSWAP_RangePair(wallet, pair);
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
            let remainingAmt = new eth_wallet_1.BigNumber(amountOut);
            const priceSwap = await getLatestOraclePrice(global_1.QueueType.RANGE_QUEUE, tokenA, tokenB);
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
                };
            }).sort((a, b) => new eth_wallet_1.BigNumber(b.amount).minus(a.amount).toNumber());
            for (let i = 0; i < offerArr.length; i++) {
                let offer = offerArr[i];
                let lowerLimit = offer.lowerLimit;
                let upperLimit = offer.upperLimit;
                let expire = offer.expire.toNumber() * 1000;
                if (components_1.moment(expire).isBefore(components_1.moment()))
                    continue;
                if (new eth_wallet_1.BigNumber(lowerLimit).gt(priceSwap))
                    continue;
                if (new eth_wallet_1.BigNumber(upperLimit).gt(0) && new eth_wallet_1.BigNumber(upperLimit).lt(priceSwap))
                    continue;
                if (remainingAmt.gt(offer.amount)) {
                    index.push(offer.index);
                    remainingAmt = remainingAmt.minus(offer.amount);
                }
                else {
                    index.push(offer.index);
                    break;
                }
            }
            data = "0x" + eth_wallet_1.Utils.numberToBytes32(0x20 * (index.length + 1)) + eth_wallet_1.Utils.numberToBytes32(index.length) + index.map(e => eth_wallet_1.Utils.numberToBytes32(e)).join('');
        }
        return data;
    };
    exports.getRangeQueueData = getRangeQueueData;
});
