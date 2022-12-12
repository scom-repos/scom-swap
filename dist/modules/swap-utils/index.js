var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define("@swap/swap-utils/helper.ts", ["require", "exports", "@swap/crosschain-utils", "@swap/store", "@openswap/chainlink-sdk"], function (require, exports, crosschain_utils_1, store_1, chainlink_sdk_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bridgeVaultConstantMap = exports.getOraclePriceMap = void 0;
    // export function debounce(func: any, timeout = 500){
    //   let timer: any; // NodeJS.Timeout;
    //   return (...args: any) => {
    //     clearTimeout(timer);
    //     timer = setTimeout(() => { func.apply(this, args); }, timeout);
    //   };
    // };
    const getOraclePriceMap = async (chainId) => {
        const oraclePriceMap = {};
        const wallet = crosschain_utils_1.initCrossChainWallet(chainId);
        await Promise.all(Object.entries(store_1.MockOracleMap[chainId]).map(async ([token, oracle]) => {
            let mockOracleContract = new chainlink_sdk_1.Contracts.AggregatorProxy(wallet, oracle);
            oraclePriceMap[token.toLowerCase()] = (await mockOracleContract.latestAnswer()).shiftedBy(-18); // token -> USD 
        }));
        return oraclePriceMap;
    };
    exports.getOraclePriceMap = getOraclePriceMap;
    exports.bridgeVaultConstantMap = store_1.BridgeVaultGroupList.reduce((acc, cur) => {
        if (cur.deprecated)
            return acc;
        if (acc[cur.name] == null)
            acc[cur.name] = {};
        Object.entries(cur.vaults).forEach(([chainId, v]) => {
            acc[cur.name][chainId] = v;
        });
        return acc;
    }, {});
});
define("@swap/swap-utils", ["require", "exports", "@ijstech/eth-wallet", "@openswap/sdk", "@swap/global", "@swap/crosschain-utils", "@swap/store", "@swap/queue-utils", "@swap/swap-utils/helper.ts"], function (require, exports, eth_wallet_1, sdk_1, global_1, crosschain_utils_2, store_2, queue_utils_1, helper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.registerPairsByAddress = exports.getAvailableRouteOptions = exports.createBridgeVaultOrder = exports.setApprovalModalSpenderAddress = exports.getApprovalModelAction = exports.setERC20AllowanceToZero = exports.getHybridRouterAddress = exports.getRouterAddress = exports.getChainNativeToken = exports.executeSwap = exports.getAllRoutesData = exports.getTradeFeeMap = exports.getExtendedRouteObjData = void 0;
    const routeAPI = 'https://route.openswap.xyz/trading/v1/route';
    const newRouteAPI = 'https://indexer.ijs.dev/trading/v1/route';
    const Factory = 'OAXDEX_Factory';
    const RouterV1 = "OAXDEX_RouterV1";
    const Router = "OAXDEX_Router";
    function getAddresses() {
        return store_2.CoreContractAddressesByChainId[store_2.getChainId()];
    }
    ;
    const getChainNativeToken = () => {
        return store_2.ChainNativeTokenByChainId[store_2.getChainId()];
    };
    exports.getChainNativeToken = getChainNativeToken;
    const getWETH = () => {
        return store_2.WETHByChainId[store_2.getChainId()];
    };
    const getWrappedTokenAddress = () => {
        return getWETH().address;
    };
    const getHybridRouterAddress = () => {
        let Address = getAddresses();
        return Address['OSWAP_HybridRouter2'];
    };
    exports.getHybridRouterAddress = getHybridRouterAddress;
    const getFactoryAddress = (market) => {
        let Address = getAddresses();
        switch (market) {
            case store_2.Market.OPENSWAP:
                return Address[Factory];
            case store_2.Market.UNISWAP:
                return Address.UniswapV2Factory;
            case store_2.Market.SUSHISWAP:
                return Address.SushiSwapV2Factory;
            case store_2.Market.PANCAKESWAPV1:
                return Address.PancakeSwapFactoryV1;
            case store_2.Market.PANCAKESWAP:
                return Address.PancakeSwapFactory;
            case store_2.Market.BAKERYSWAP:
                return Address.BakerySwapFactory;
            case store_2.Market.BURGERSWAP:
                return Address.BurgerSwapFactory;
            case store_2.Market.IFSWAPV1:
                return Address.IFSwapFactoryV1;
            case store_2.Market.IFSWAPV3:
                return Address.IFSwapFactoryV3;
            case store_2.Market.QUICKSWAP:
                return Address.QuickSwapFactory;
            case store_2.Market.BISWAP:
                return Address.BiSwapFactory;
            case store_2.Market.PANGOLIN:
                return Address.PangolinFactory;
            case store_2.Market.TRADERJOE:
                return Address.TraderJoeFactory;
            case store_2.Market.SPIRITSWAP:
                return Address.SpiritSwapFactory;
            case store_2.Market.SPOOKYSWAP:
                return Address.SpookySwapFactory;
            case store_2.Market.HAKUSWAP:
                return Address.HakuSwapFactory;
            case store_2.Market.JETSWAP:
                return Address.JetSwapFactory;
            default:
                return Address[Factory];
        }
    };
    function getRouterAddress(market) {
        let Address = getAddresses();
        switch (market) {
            case store_2.Market.OPENSWAP:
                return Address[Router];
            case store_2.Market.UNISWAP:
                return Address.UniswapV2Router02;
            case store_2.Market.SUSHISWAP:
                return Address.SushiSwapV2Router02;
            case store_2.Market.PANCAKESWAPV1:
                return Address.PancakeSwapRouterV1;
            case store_2.Market.PANCAKESWAP:
                return Address.PancakeSwapRouter;
            case store_2.Market.BAKERYSWAP:
                return Address.BakerySwapRouter;
            case store_2.Market.BURGERSWAP:
                return Address.BurgerSwapRouter;
            case store_2.Market.IFSWAPV1:
                return Address.IFSwapRouterV1;
            case store_2.Market.OPENSWAPV1:
                return Address[RouterV1];
            case store_2.Market.QUICKSWAP:
                return Address.QuickSwapRouter;
            case store_2.Market.BISWAP:
                return Address.BiSwapRouter;
            case store_2.Market.PANGOLIN:
                return Address.PangolinRouter;
            case store_2.Market.TRADERJOE:
                return Address.TraderJoeRouter;
            case store_2.Market.SPIRITSWAP:
                return Address.SpiritSwapRouter;
            case store_2.Market.SPOOKYSWAP:
                return Address.SpookySwapRouter;
            case store_2.Market.IFSWAPV3:
                return Address.IFSwapRouterV3;
            default:
                return Address[Router];
        }
    }
    exports.getRouterAddress = getRouterAddress;
    async function allowanceRouter(wallet, market, token, owner, callback) {
        let erc20 = new eth_wallet_1.Erc20(wallet, token.address, token.decimals);
        let spender;
        if (market == store_2.Market.HYBRID || market == store_2.Market.MIXED_QUEUE || market == store_2.Market.PEGGED_QUEUE || market == store_2.Market.GROUP_QUEUE) {
            spender = getHybridRouterAddress();
        }
        else {
            spender = getRouterAddress(market);
        }
        let allowance = await erc20.allowance({
            owner,
            spender
        });
        allowance = eth_wallet_1.Utils.fromDecimals(allowance, token.decimals);
        if (callback)
            callback(null, allowance);
        return allowance;
    }
    async function checkIsApproveButtonShown(wallet, firstTokenObject, fromInput, market) {
        if (!store_2.isWalletConnected())
            return false;
        let isApproveButtonShown = false;
        const owner = wallet.account.address;
        const nativeTokenObject = getChainNativeToken();
        if (!nativeTokenObject)
            return false;
        const firstTokenAddress = firstTokenObject.address;
        if (!firstTokenAddress || firstTokenAddress === nativeTokenObject.symbol) {
            isApproveButtonShown = false;
        }
        else {
            isApproveButtonShown = false;
            const allowance = await allowanceRouter(wallet, market, firstTokenObject, owner);
            isApproveButtonShown = fromInput.gt(allowance);
        }
        return isApproveButtonShown;
    }
    async function composeRouteObj(wallet, routeObj, market, firstTokenObject, firstInput, secondInput, isFromEstimated, needApproveButton) {
        const slippageTolerance = store_2.getSlippageTolerance();
        if (!slippageTolerance)
            return null;
        let fromAmount = new eth_wallet_1.BigNumber(0);
        let toAmount = new eth_wallet_1.BigNumber(0);
        let minReceivedMaxSold = 0;
        let priceImpact = 0;
        let price = 0;
        let priceSwap = 0;
        let tradeFee = 0;
        let gasFee = 0;
        let isApproveButtonShown = false;
        try {
            if (isFromEstimated) {
                let poolAmount = new eth_wallet_1.BigNumber(routeObj.amountIn);
                if (poolAmount.isZero())
                    return null;
                minReceivedMaxSold = poolAmount.times(1 + slippageTolerance / 100).toNumber();
                fromAmount = poolAmount;
                toAmount = secondInput;
                gasFee = routeObj.gasFee;
            }
            else {
                let poolAmount = new eth_wallet_1.BigNumber(routeObj.amountOut);
                if (poolAmount.isZero())
                    return null;
                minReceivedMaxSold = poolAmount.times(1 - slippageTolerance / 100).toNumber();
                fromAmount = firstInput;
                toAmount = poolAmount;
                gasFee = routeObj.gasFee;
            }
            price = parseFloat(routeObj.price);
            priceSwap = new eth_wallet_1.BigNumber(1).div(routeObj.price).toNumber();
            priceImpact = Number(routeObj.priceImpact) * 100;
            tradeFee = parseFloat(routeObj.tradeFee);
            if (needApproveButton) {
                if (market == store_2.Market.HYBRID) {
                    let Address = getAddresses();
                    isApproveButtonShown = Address['OSWAP_HybridRouterRegistry'] ? await checkIsApproveButtonShown(wallet, firstTokenObject, fromAmount, market) : false;
                }
                else {
                    isApproveButtonShown = await checkIsApproveButtonShown(wallet, firstTokenObject, fromAmount, market);
                }
            }
        }
        catch (err) {
            console.log('err', err);
            return null;
        }
        return Object.assign(Object.assign({}, routeObj), { price,
            priceSwap,
            fromAmount,
            toAmount,
            priceImpact,
            tradeFee,
            gasFee,
            minReceivedMaxSold,
            isApproveButtonShown });
    }
    function getTradeFee(market) {
        switch (market) {
            case store_2.Market.BISWAP:
                return { fee: "1", base: "1000" };
            case store_2.Market.UNISWAP:
            case store_2.Market.SUSHISWAP:
            case store_2.Market.BAKERYSWAP:
            case store_2.Market.PANGOLIN:
            case store_2.Market.TRADERJOE:
            case store_2.Market.QUICKSWAP:
            case store_2.Market.SPIRITSWAP:
                return { fee: "3", base: "1000" };
            case store_2.Market.PANCAKESWAPV1:
            case store_2.Market.SPOOKYSWAP:
                return { fee: "2", base: "1000" };
            case store_2.Market.PANCAKESWAP:
                return { fee: "25", base: "10000" };
            case store_2.Market.BURGERSWAP:
                return { fee: "3", base: "1000" };
            case store_2.Market.IFSWAPV1:
                return { fee: "6", base: "10000" };
            case store_2.Market.IFSWAPV3: //trade fee by pair. 0.3% is default
                return { fee: "30", base: "10000" };
            case store_2.Market.MIXED_QUEUE:
                return { fee: "1", base: "1000" };
            case store_2.Market.PEGGED_QUEUE:
                return { fee: "1", base: "1000" };
            case store_2.Market.OPENSWAP:
            default:
                return { fee: "200", base: "100000" };
        }
    }
    function getFallbackEstimatedGasUsed(market, hops, chainId) {
        let gasUsed = 0;
        switch (market) {
            case store_2.Market.BAKERYSWAP:
                gasUsed = 60338 * hops + 66831;
                break;
            case store_2.Market.PANCAKESWAPV1:
                gasUsed = 60655 * hops + 50567;
                break;
            case store_2.Market.PANCAKESWAP:
                gasUsed = 64956 * hops + 54641;
                break;
            case store_2.Market.BURGERSWAP:
                gasUsed = 451645 * hops + 595104;
                break;
            case store_2.Market.IFSWAPV1:
                gasUsed = 43235 * hops + 91854;
                break;
            case store_2.Market.BISWAP:
                gasUsed = 88015 * hops + 202883;
                break;
            case store_2.Market.OPENSWAP:
            case store_2.Market.OPENSWAPV1:
                gasUsed = 14899;
                break;
            case store_2.Market.MIXED_QUEUE:
                gasUsed = 260607;
                break;
            case store_2.Market.PEGGED_QUEUE:
                gasUsed = 260607;
                break;
            case store_2.Market.GROUP_QUEUE:
                gasUsed = 233395;
                break;
            case store_2.Market.PANGOLIN:
                gasUsed = 48536 * hops + 145789;
                break;
            case store_2.Market.TRADERJOE:
                gasUsed = 48978 * hops + 120065;
                break;
            case store_2.Market.SUSHISWAP:
                gasUsed = 68053 * hops + 111656;
                if (chainId == 43114) {
                    gasUsed = 52124 * hops + 140258;
                }
                else if (chainId == 43113) {
                    gasUsed = 0 * hops + 202787;
                }
                break;
            case store_2.Market.SPIRITSWAP:
                gasUsed = 55500 * hops + 124200;
                break;
            case store_2.Market.SPOOKYSWAP:
                gasUsed = 50524 * hops + 111359;
                break;
            case store_2.Market.UNISWAP: // need more data on it
                gasUsed = 56925 * hops + 123438;
                break;
            case store_2.Market.QUICKSWAP:
                gasUsed = 56925 * hops + 123438;
                break;
        }
        return gasUsed;
    }
    async function getTradeFeeMap(markets) {
        let tradeFeeMap = {};
        markets.forEach(market => tradeFeeMap[market] = getTradeFee(market));
        return tradeFeeMap;
    }
    exports.getTradeFeeMap = getTradeFeeMap;
    async function getBestAmountInRouteFromAPI(wallet, tokenIn, tokenOut, amountOut, chainId) {
        let isCrossChain = !!chainId ? 1 : 0;
        chainId = store_2.getChainId();
        let Address = getAddresses();
        let wrappedTokenAddress = Address['WETH9'];
        let tradeFeeMapMarkets = Object.values(store_2.ProviderConfigMap).map(v => v.marketCode);
        let tradeFeeMap = await getTradeFeeMap(tradeFeeMapMarkets);
        let network = store_2.getNetworkInfo(chainId);
        let api = network.isTestnet || network.isDisabled ? newRouteAPI : routeAPI;
        let routeObjArr = await global_1.getAPI(api, {
            chainId,
            tokenIn: tokenIn.address ? tokenIn.address : wrappedTokenAddress,
            tokenOut: tokenOut.address ? tokenOut.address : wrappedTokenAddress,
            amountOut: new eth_wallet_1.BigNumber(amountOut).shiftedBy(tokenOut.decimals).toFixed(),
            ignoreHybrid: Address['OSWAP_HybridRouterRegistry'] ? 0 : 1,
            isCrossChain
        });
        if (!routeObjArr)
            return [];
        let providerConfigByDexId = {};
        Object.values(store_2.ProviderConfigMap).filter(v => !!v.supportedChains && v.supportedChains.includes(chainId)).forEach((v, i) => {
            if (v.dexId == undefined)
                return;
            providerConfigByDexId[v.dexId] = v;
        });
        let bestRouteObjArr = [];
        for (let i = 0; i < routeObjArr.length; i++) {
            let routeObj = routeObjArr[i];
            routeObj.tokens[0] = tokenIn;
            routeObj.tokens[routeObj.tokens.length - 1] = tokenOut;
            let dexId = [5, 6].includes(routeObj.dexId) ? 5 : routeObj.dexId;
            if (!providerConfigByDexId[dexId])
                continue;
            let bestRouteObj = {
                pairs: routeObj.route.map((v) => v.address),
                isRegistered: routeObj.route.map((v) => v.isRegistered),
                market: routeObj.route.map((v) => {
                    let dexId = [5, 6].includes(v.dexId) ? 5 : v.dexId;
                    return providerConfigByDexId[dexId].marketCode;
                }),
                route: routeObj.tokens,
                customDataList: routeObj.route.map((v) => {
                    return {
                        queueType: v.queueType,
                        orderIds: v.orderIds,
                        reserveA: v.reserves.reserve0,
                        reserveB: v.reserves.reserve1
                    };
                })
            };
            let amountIn = new eth_wallet_1.BigNumber(routeObj.amountIn).shiftedBy(-tokenIn.decimals);
            let swapPrice = new eth_wallet_1.BigNumber(amountIn).div(amountOut);
            let isHybridOrQueue = providerConfigByDexId[dexId].marketCode == store_2.Market.HYBRID || routeObj.queueType;
            let extendedData = await getExtendedRouteObjData(wallet, bestRouteObj, tradeFeeMap, swapPrice, isHybridOrQueue);
            let provider = providerConfigByDexId[dexId].key;
            let key = provider + '|' + (routeObj.isDirectRoute ? '0' : '1');
            bestRouteObjArr.push(Object.assign(Object.assign({}, extendedData), { provider,
                key,
                amountIn, queueType: routeObj.queueType }));
        }
        return bestRouteObjArr;
    }
    async function getBestAmountOutRouteFromAPI(wallet, tokenIn, tokenOut, amountIn, chainId) {
        let isCrossChain = !!chainId ? 1 : 0;
        chainId = store_2.getChainId();
        let Address = getAddresses();
        let wrappedTokenAddress = Address['WETH9'];
        let tradeFeeMapMarkets = Object.values(store_2.ProviderConfigMap).map(v => v.marketCode);
        let tradeFeeMap = await getTradeFeeMap(tradeFeeMapMarkets);
        let network = store_2.getNetworkInfo(chainId);
        let api = network.isTestnet || network.isDisabled ? newRouteAPI : routeAPI;
        let routeObjArr = await global_1.getAPI(api, {
            chainId,
            tokenIn: tokenIn.address ? tokenIn.address : wrappedTokenAddress,
            tokenOut: tokenOut.address ? tokenOut.address : wrappedTokenAddress,
            amountIn: new eth_wallet_1.BigNumber(amountIn).shiftedBy(tokenIn.decimals).toFixed(),
            ignoreHybrid: Address['OSWAP_HybridRouterRegistry'] ? 0 : 1,
            isCrossChain
        });
        if (!routeObjArr)
            return [];
        let providerConfigByDexId = {};
        Object.values(store_2.ProviderConfigMap).filter(v => !!v.supportedChains && v.supportedChains.includes(chainId)).forEach((v, i) => {
            if (v.dexId == undefined)
                return;
            providerConfigByDexId[v.dexId] = v;
        });
        let bestRouteObjArr = [];
        for (let i = 0; i < routeObjArr.length; i++) {
            let routeObj = routeObjArr[i];
            routeObj.tokens[0] = tokenIn;
            routeObj.tokens[routeObj.tokens.length - 1] = tokenOut;
            let dexId = [5, 6].includes(routeObj.dexId) ? 5 : routeObj.dexId;
            if (!providerConfigByDexId[dexId])
                continue;
            let bestRouteObj = {
                pairs: routeObj.route.map((v) => v.address),
                isRegistered: routeObj.route.map((v) => v.isRegistered),
                market: routeObj.route.map((v) => {
                    let dexId = [5, 6].includes(v.dexId) ? 5 : v.dexId;
                    return providerConfigByDexId[dexId].marketCode;
                }),
                route: routeObj.tokens,
                customDataList: routeObj.route.map((v) => {
                    return {
                        queueType: v.queueType,
                        orderIds: v.orderIds,
                        reserveA: v.reserves.reserve0,
                        reserveB: v.reserves.reserve1
                    };
                })
            };
            let amountOut = new eth_wallet_1.BigNumber(routeObj.amountOut).shiftedBy(-tokenOut.decimals);
            let swapPrice = new eth_wallet_1.BigNumber(amountIn).div(amountOut);
            let isHybridOrQueue = providerConfigByDexId[dexId].marketCode == store_2.Market.HYBRID || routeObj.queueType;
            let extendedData = await getExtendedRouteObjData(wallet, bestRouteObj, tradeFeeMap, swapPrice, isHybridOrQueue);
            let provider = providerConfigByDexId[dexId].key;
            let key = provider + '|' + (routeObj.isDirectRoute ? '0' : '1');
            bestRouteObjArr.push(Object.assign(Object.assign({}, extendedData), { provider,
                key,
                amountOut, queueType: routeObj.queueType }));
        }
        return bestRouteObjArr;
    }
    const getAllAvailableRoutes = async (markets, tokenList, tokenIn, tokenOut) => {
        const wallet = eth_wallet_1.Wallet.getInstance();
        let getPairPromises = [];
        let availableRoutes = [];
        const getReservesByPair = async (pairAddress, tokenIn, tokenOut) => {
            let reserveObj;
            if (!tokenIn.address)
                tokenIn = getWETH();
            if (!tokenOut.address)
                tokenOut = getWETH();
            let pair = new sdk_1.Contracts.OSWAP_Pair(wallet, pairAddress);
            let reserves = await pair.getReserves();
            if (new eth_wallet_1.BigNumber(tokenIn.address.toLowerCase()).lt(tokenOut.address.toLowerCase())) {
                reserveObj = {
                    reserveA: reserves._reserve0,
                    reserveB: reserves._reserve1
                };
            }
            else {
                reserveObj = {
                    reserveA: reserves._reserve1,
                    reserveB: reserves._reserve0
                };
            }
            return reserveObj;
        };
        const getPair = async (market, tokenA, tokenB) => {
            if (!tokenA.address)
                tokenA = getWETH();
            if (!tokenB.address)
                tokenB = getWETH();
            let factory = new sdk_1.Contracts.OSWAP_Factory(wallet, getFactoryAddress(market));
            let pair = await factory.getPair({
                param1: tokenA.address,
                param2: tokenB.address
            });
            return pair;
        };
        let composeAvailableRoutePromise = async (market, tokenIn, tokenOut) => {
            try {
                let pair = await getPair(market, tokenIn, tokenOut);
                if (pair == eth_wallet_1.Utils.nullAddress)
                    return;
                let reserveObj = await getReservesByPair(pair, tokenIn, tokenOut);
                availableRoutes.push(Object.assign({ pair,
                    market,
                    tokenIn,
                    tokenOut }, reserveObj));
            }
            catch (err) { }
        };
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
        console.log("getAllAvailableRoutes", availableRoutes);
        return availableRoutes;
    };
    const calculateAmountOutByTradeFee = (tradeFeeMap, pairInfo, amountIn) => {
        let tradeFeeObj = tradeFeeMap[pairInfo.market];
        let amountInWithFee = new eth_wallet_1.BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).times(amountIn);
        let amtOut = (new eth_wallet_1.BigNumber(pairInfo.reserveB).times(amountInWithFee)).idiv(new eth_wallet_1.BigNumber(pairInfo.reserveA).times(tradeFeeObj.base).plus(amountInWithFee)).toFixed();
        return amtOut;
    };
    const calculateAmountInByTradeFee = (tradeFeeMap, pairInfo, amountOut) => {
        let tradeFeeObj = tradeFeeMap[pairInfo.market];
        let feeMultiplier = new eth_wallet_1.BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee);
        if (pairInfo.reserveB.lte(amountOut)) {
            return null;
        }
        let amtIn = new eth_wallet_1.BigNumber(pairInfo.reserveA).times(amountOut).times(tradeFeeObj.base).idiv(new eth_wallet_1.BigNumber(pairInfo.reserveB.minus(amountOut)).times(feeMultiplier)).plus(1).toFixed();
        return amtIn;
    };
    const getPathsByTokenIn = (tradeFeeMap, pairInfoList, routeObj, tokenIn) => {
        let routeObjList = [];
        let listItems = pairInfoList.filter(v => v.tokenOut.address == routeObj.route[routeObj.route.length - 1].address && routeObj.route.every((n) => n.address != v.tokenIn.address));
        let getNewAmmRouteObj = (pairInfo, routeObj, amountOut) => {
            let amtIn = calculateAmountInByTradeFee(tradeFeeMap, pairInfo, amountOut);
            if (!amtIn)
                return null;
            let newRouteObj = {
                pairs: [...routeObj.pairs, pairInfo.pair],
                market: [...routeObj.market, pairInfo.market],
                customDataList: [...routeObj.customDataList, {
                        reserveA: pairInfo.reserveA,
                        reserveB: pairInfo.reserveB
                    }],
                route: [...routeObj.route, pairInfo.tokenIn],
                amounts: [...routeObj.amounts, amtIn]
            };
            return newRouteObj;
        };
        let getNewQueueRouteObj = (pairInfo, routeObj, amountOut) => {
            let tradeFeeObj = tradeFeeMap[pairInfo.market];
            let tradeFeeFactor = new eth_wallet_1.BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
            let amtIn = new eth_wallet_1.BigNumber(amountOut).shiftedBy(18 - Number(pairInfo.tokenOut.decimals)).div(pairInfo.priceSwap).shiftedBy(pairInfo.tokenIn.decimals).div(tradeFeeFactor).toFixed();
            let sufficientLiquidity = new eth_wallet_1.BigNumber(pairInfo.totalLiquidity).gt(amountOut);
            if (!sufficientLiquidity)
                return null;
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
            };
            return newRouteObj;
        };
        for (let i = 0; i < listItems.length; i++) {
            let listItem = listItems[i];
            let lastAmtIn = routeObj.amounts[routeObj.amounts.length - 1];
            let newRouteObj = listItem.market == store_2.Market.MIXED_QUEUE ? getNewQueueRouteObj(listItem, routeObj, lastAmtIn) : getNewAmmRouteObj(listItem, routeObj, lastAmtIn);
            if (!newRouteObj)
                continue;
            if (listItem.tokenIn.address == tokenIn.address) {
                routeObjList.push(newRouteObj);
                break;
            }
            else {
                if (newRouteObj.route.length >= 4)
                    continue;
                let childPaths = getPathsByTokenIn(tradeFeeMap, pairInfoList, Object.assign({}, newRouteObj), tokenIn);
                routeObjList.push(...childPaths);
            }
        }
        return routeObjList;
    };
    const getPathsByTokenOut = (tradeFeeMap, pairInfoList, routeObj, tokenOut) => {
        let routeObjList = [];
        let listItems = pairInfoList.filter(v => v.tokenIn.address == routeObj.route[routeObj.route.length - 1].address && routeObj.route.every((n) => n.address != v.tokenOut.address));
        let getNewAmmRouteObj = (pairInfo, routeObj, amountIn) => {
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
            };
            return newRouteObj;
        };
        let getNewQueueRouteObj = (pairInfo, routeObj, amountIn) => {
            let tradeFeeObj = tradeFeeMap[pairInfo.market];
            let tradeFeeFactor = new eth_wallet_1.BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
            let amtOut = new eth_wallet_1.BigNumber(amountIn).shiftedBy(18 - Number(pairInfo.tokenIn.decimals)).div(pairInfo.price).shiftedBy(pairInfo.tokenOut.decimals).times(tradeFeeFactor).toFixed();
            let sufficientLiquidity = new eth_wallet_1.BigNumber(pairInfo.totalLiquidity).gt(amtOut);
            if (!sufficientLiquidity)
                return null;
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
            };
            return newRouteObj;
        };
        for (let i = 0; i < listItems.length; i++) {
            let listItem = listItems[i];
            let lastAmtOut = routeObj.amounts[routeObj.amounts.length - 1];
            let newRouteObj = listItem.market == store_2.Market.MIXED_QUEUE ? getNewQueueRouteObj(listItem, routeObj, lastAmtOut) : getNewAmmRouteObj(listItem, routeObj, lastAmtOut);
            if (!newRouteObj)
                continue;
            if (listItem.tokenOut.address == tokenOut.address) {
                routeObjList.push(newRouteObj);
                break;
            }
            else {
                if (newRouteObj.route.length >= 4)
                    continue;
                let childPaths = getPathsByTokenOut(tradeFeeMap, pairInfoList, Object.assign({}, newRouteObj), tokenOut);
                routeObjList.push(...childPaths);
            }
        }
        return routeObjList;
    };
    const getAllExactAmountOutPaths = async (tradeFeeMap, availableRoutes, tokenIn, tokenOut, amountOut) => {
        let allPaths = [];
        amountOut = eth_wallet_1.Utils.toDecimals(amountOut, tokenOut.decimals).toFixed();
        let getAmmRouteObj = (pairInfo) => {
            let amtIn = calculateAmountInByTradeFee(tradeFeeMap, pairInfo, amountOut);
            if (!amtIn)
                return null;
            let routeObj = {
                pairs: [pairInfo.pair],
                market: [pairInfo.market],
                customDataList: [{
                        reserveA: pairInfo.reserveA,
                        reserveB: pairInfo.reserveB
                    }],
                route: [pairInfo.tokenOut, pairInfo.tokenIn],
                amounts: [amtIn]
            };
            return routeObj;
        };
        let getQueueRouteObj = (pairInfo) => {
            let tradeFeeObj = tradeFeeMap[pairInfo.market];
            let tradeFeeFactor = new eth_wallet_1.BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
            let amtIn = new eth_wallet_1.BigNumber(amountOut).shiftedBy(18 - Number(pairInfo.tokenOut.decimals)).div(pairInfo.priceSwap).shiftedBy(pairInfo.tokenIn.decimals).div(tradeFeeFactor).toFixed();
            let sufficientLiquidity = new eth_wallet_1.BigNumber(pairInfo.totalLiquidity).gt(amountOut);
            if (!sufficientLiquidity)
                return null;
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
            };
            return routeObj;
        };
        if (availableRoutes.length == 1) {
            let pairInfo = availableRoutes[0];
            if (pairInfo.tokenIn.address == tokenIn.address && pairInfo.tokenOut.address == tokenOut.address) {
                let routeObj = pairInfo.market == store_2.Market.MIXED_QUEUE ? getQueueRouteObj(pairInfo) : getAmmRouteObj(pairInfo);
                if (!routeObj)
                    return allPaths;
                allPaths = [routeObj];
            }
        }
        else if (availableRoutes.length > 1) {
            let entryList = availableRoutes.filter((v) => v.tokenOut.address == tokenOut.address);
            for (let i = 0; i < entryList.length; i++) {
                let pairInfo = entryList[i];
                let routeObj = pairInfo.market == store_2.Market.MIXED_QUEUE ? getQueueRouteObj(pairInfo) : getAmmRouteObj(pairInfo);
                if (!routeObj)
                    continue;
                if ((!pairInfo.tokenIn.address && !tokenIn.address) ||
                    (pairInfo.tokenIn.address && tokenIn.address && pairInfo.tokenIn.address.toLowerCase() == tokenIn.address.toLowerCase())) {
                    allPaths.push(routeObj);
                }
                else {
                    //For the lack of a better way
                    for (let j = 0; j < Object.keys(tradeFeeMap).length; j++) {
                        let market = Object.keys(tradeFeeMap)[j];
                        let routes = availableRoutes.filter(v => v.tokenIn.address != tokenIn.address || v.market == Number(market));
                        allPaths.push(...getPathsByTokenIn(tradeFeeMap, routes, routeObj, tokenIn));
                    }
                }
            }
        }
        let sortedAllPaths = allPaths.sort((a, b) => {
            let amtInA = a.amounts[a.amounts.length - 1];
            let amtInB = b.amounts[b.amounts.length - 1];
            let compare = new eth_wallet_1.BigNumber(amtInA).comparedTo(amtInB);
            return compare || 0;
        });
        return sortedAllPaths;
    };
    const getAllExactAmountInPaths = async (tradeFeeMap, availableRoutes, tokenIn, tokenOut, amountIn) => {
        let allPaths = [];
        amountIn = eth_wallet_1.Utils.toDecimals(amountIn, tokenIn.decimals).toFixed();
        let getAmmRouteObj = (pairInfo) => {
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
            };
            return routeObj;
        };
        let getQueueRouteObj = (pairInfo) => {
            let tradeFeeObj = tradeFeeMap[pairInfo.market];
            let tradeFeeFactor = new eth_wallet_1.BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
            let amtOut = new eth_wallet_1.BigNumber(amountIn).shiftedBy(18 - Number(pairInfo.tokenIn.decimals)).div(pairInfo.price).shiftedBy(pairInfo.tokenOut.decimals).times(tradeFeeFactor).toFixed();
            let sufficientLiquidity = new eth_wallet_1.BigNumber(pairInfo.totalLiquidity).gt(amtOut);
            if (!sufficientLiquidity)
                return null;
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
            };
            return routeObj;
        };
        if (availableRoutes.length == 1) {
            let pairInfo = availableRoutes[0];
            if (pairInfo.tokenIn.address == tokenIn.address && pairInfo.tokenOut.address == tokenOut.address) {
                let routeObj = pairInfo.market == store_2.Market.MIXED_QUEUE ? getQueueRouteObj(pairInfo) : getAmmRouteObj(pairInfo);
                if (!routeObj)
                    return allPaths;
                allPaths = [routeObj];
            }
        }
        else if (availableRoutes.length > 1) {
            let entryList = availableRoutes.filter((v) => v.tokenIn.address == tokenIn.address);
            for (let i = 0; i < entryList.length; i++) {
                let pairInfo = entryList[i];
                let routeObj = pairInfo.market == store_2.Market.MIXED_QUEUE ? getQueueRouteObj(pairInfo) : getAmmRouteObj(pairInfo);
                if (!routeObj)
                    continue;
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
            if (new eth_wallet_1.BigNumber(lastAmtOutA).gt(lastAmtOutB)) {
                return -1;
            }
            else if (new eth_wallet_1.BigNumber(lastAmtOutA).lt(lastAmtOutB)) {
                return 1;
            }
            return 0;
        });
        return sortedAllPaths;
    };
    const getBestAmountInRoute = async (markets, tokenIn, tokenOut, amountOut, tokenList) => {
        let ammMarkets = markets.filter(v => v != store_2.Market.MIXED_QUEUE);
        let allAvailableRoutes = await getAllAvailableRoutes(ammMarkets, tokenList, tokenIn, tokenOut);
        if (allAvailableRoutes.length == 0)
            return null;
        // if (markets.includes(Market.MIXED_QUEUE)) {
        //     let queueTypes = [QueueType.PRIORITY_QUEUE, QueueType.RANGE_QUEUE];
        //     let allQueueAvailableRoutes = await getAllAvailableQueueRoutes(queueTypes, tokenList, tokenIn, tokenOut);
        //     allAvailableRoutes = [...allAvailableRoutes, ...allQueueAvailableRoutes];
        // }
        let wallet = eth_wallet_1.Wallet.getInstance();
        let tradeFeeMap = await getTradeFeeMap(markets);
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
        let lowestIn = eth_wallet_1.Utils.fromDecimals(tokenLowestIn, tokenIn.decimals).toFixed();
        let swapPrice = new eth_wallet_1.BigNumber(lowestIn).div(amountOut);
        let extendedData = await getExtendedRouteObjData(wallet, bestRouteObj, tradeFeeMap, swapPrice, true);
        return Object.assign(Object.assign({}, extendedData), { amountIn: lowestIn });
    };
    const getBestAmountOutRoute = async (markets, tokenIn, tokenOut, amountIn, tokenList, isHybrid) => {
        let ammMarkets = markets.filter(v => v != store_2.Market.MIXED_QUEUE);
        let allAvailableRoutes = await getAllAvailableRoutes(ammMarkets, tokenList, tokenIn, tokenOut);
        if (allAvailableRoutes.length == 0) {
            return null;
        }
        // if (markets.includes(Market.MIXED_QUEUE)) {
        //   let queueTypes = [QueueType.PRIORITY_QUEUE, QueueType.RANGE_QUEUE];
        //   let allQueueAvailableRoutes = await getAllAvailableQueueRoutes(queueTypes, tokenList, tokenIn, tokenOut);
        //   allAvailableRoutes = [...allAvailableRoutes, ...allQueueAvailableRoutes];
        // }
        let wallet = eth_wallet_1.Wallet.getInstance();
        let tradeFeeMap = await getTradeFeeMap(markets);
        let allPaths = await getAllExactAmountInPaths(tradeFeeMap, allAvailableRoutes, tokenIn, tokenOut, amountIn);
        if (allPaths.length == 0) {
            return null;
        }
        let bestRouteObj = allPaths[0];
        // if (bestRouteObj.market.length == 1 || bestRouteObj.market.every(n => n == bestRouteObj.market[0])) {
        //   return null
        // }
        let tokenHighestOut = bestRouteObj.amounts[bestRouteObj.amounts.length - 1];
        let highestOut = eth_wallet_1.Utils.fromDecimals(tokenHighestOut, tokenOut.decimals).toFixed();
        let swapPrice = new eth_wallet_1.BigNumber(amountIn).div(highestOut);
        let extendedData = await getExtendedRouteObjData(wallet, bestRouteObj, tradeFeeMap, swapPrice, isHybrid);
        return Object.assign(Object.assign({}, extendedData), { amountOut: highestOut });
    };
    async function getExtendedRouteObjData(wallet, bestRouteObj, tradeFeeMap, swapPrice, isHybridOrQueue) {
        let currPrice = new eth_wallet_1.BigNumber(0);
        if (bestRouteObj.customDataList.length > 0) {
            currPrice = bestRouteObj.market.map((v, i) => {
                let customDataObj = bestRouteObj.customDataList[i];
                if (v == store_2.Market.MIXED_QUEUE && customDataObj.price) {
                    return new eth_wallet_1.BigNumber(customDataObj.price).shiftedBy(-bestRouteObj.route[i].decimals);
                }
                else {
                    let reserveA = new eth_wallet_1.BigNumber(customDataObj.reserveA).shiftedBy(-bestRouteObj.route[i].decimals);
                    let reserveB = new eth_wallet_1.BigNumber(customDataObj.reserveB).shiftedBy(-bestRouteObj.route[i + 1].decimals);
                    return reserveA.div(reserveB);
                }
            })
                .reduce((prev, curr) => prev.times(curr));
        }
        let fee = new eth_wallet_1.BigNumber(1).minus(bestRouteObj.market.map((market) => {
            let tradeFeeObj = tradeFeeMap[market];
            let tradeFee = new eth_wallet_1.BigNumber(tradeFeeObj.fee).div(tradeFeeObj.base);
            return new eth_wallet_1.BigNumber(1).minus(tradeFee);
        }).reduce((a, b) => a.times(b)));
        let priceImpact;
        if (bestRouteObj.market.length == 1 && bestRouteObj.market[0] == store_2.Market.MIXED_QUEUE) {
            priceImpact = '0';
        }
        else {
            priceImpact = swapPrice.minus(currPrice).div(swapPrice).minus(fee).toFixed();
        }
        //let gasFee = await calculateGasFee(wallet, bestRouteObj.market);
        let extendedRouteObj = {
            pairs: bestRouteObj.pairs,
            market: bestRouteObj.market,
            bestRoute: bestRouteObj.route,
            priceImpact: priceImpact,
            price: swapPrice.toFixed(),
            tradeFee: fee.toFixed(),
        };
        if (isHybridOrQueue) {
            let Address = getAddresses();
            let undefinedPairs = [];
            if (!bestRouteObj.isRegistered && Address['OSWAP_HybridRouterRegistry']) {
                for (let i = 0; i < bestRouteObj.pairs.length; i++) {
                    let pair = bestRouteObj.pairs[i];
                    let hybridRouterRegistry = new sdk_1.Contracts.OSWAP_HybridRouterRegistry(wallet, Address['OSWAP_HybridRouterRegistry']);
                    let typeCode = (await hybridRouterRegistry.getTypeCode(pair)).toFixed();
                    if (typeCode === '0')
                        undefinedPairs.push(pair);
                }
            }
            let providerConfigByMarketCode = {};
            Object.values(store_2.ProviderConfigMap).forEach((v, i) => {
                providerConfigByMarketCode[v.marketCode] = v;
            });
            let bestSmartRoute = bestRouteObj.market.map((v, i) => {
                let providerObj = providerConfigByMarketCode[v];
                let isRegistered;
                if (bestRouteObj.isRegistered) {
                    isRegistered = bestRouteObj.isRegistered[i];
                }
                else {
                    isRegistered = Address['OSWAP_HybridRouterRegistry'] ? !undefinedPairs.includes(bestRouteObj.pairs[i]) : true;
                }
                let obj = {
                    provider: providerObj.key,
                    pairAddress: bestRouteObj.pairs[i],
                    caption: providerObj.caption,
                    fromToken: bestRouteObj.route[i],
                    toToken: bestRouteObj.route[i + 1],
                    isRegistered
                };
                if (v == store_2.Market.MIXED_QUEUE) {
                    let { queueType, orderIds } = bestRouteObj.customDataList[i];
                    obj = Object.assign(Object.assign({}, obj), { queueType,
                        orderIds });
                }
                return obj;
            });
            extendedRouteObj = Object.assign(Object.assign({}, extendedRouteObj), { bestSmartRoute });
        }
        return extendedRouteObj;
    }
    exports.getExtendedRouteObjData = getExtendedRouteObjData;
    const getQueueInfoByAmtOut = async (queueType, firstTokenObject, secondTokenObject, amountIn) => {
        let queueInfoObj;
        if (queueType == global_1.QueueType.GROUP_QUEUE) {
            let pair = await queue_utils_1.getPair(queueType, firstTokenObject, secondTokenObject);
            if (!pair)
                return null;
            queueInfoObj = await queue_utils_1.getGroupQueueTraderDataObj(pair, firstTokenObject, secondTokenObject, amountIn);
            if (queueInfoObj && queueInfoObj.sufficientLiquidity && queueInfoObj.tradeFeeObj) {
                let tradeFeeObj = queueInfoObj.tradeFeeObj;
                let tradeFeeFactor = new eth_wallet_1.BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
                let tradeFee = new eth_wallet_1.BigNumber(1).minus(tradeFeeFactor);
                return Object.assign(Object.assign({ queueType, pair }, queueInfoObj), { tradeFee });
            }
        }
        return null;
    };
    const getQueueInPriceData = async (market, tokenIn, tokenOut, amountOut, callback) => {
        if (!tokenIn.address)
            tokenIn = getWETH();
        if (!tokenOut.address)
            tokenOut = getWETH();
        let queueInfo;
        if (market == store_2.Market.GROUP_QUEUE) {
            let groupQueueInfo = await getQueueInfoByAmtOut(global_1.QueueType.GROUP_QUEUE, tokenIn, tokenOut, amountOut);
            if (groupQueueInfo)
                queueInfo = groupQueueInfo;
        }
        if (!queueInfo || queueInfo.queueType == null)
            return null;
        let ret = Object.assign({ priceImpact: '0' }, queueInfo);
        if (callback)
            callback(null, ret);
        return ret;
    };
    const getQueueInfoByAmtIn = async (queueType, firstTokenObject, secondTokenObject, amountIn) => {
        let queueInfoObj;
        if (queueType == global_1.QueueType.GROUP_QUEUE) {
            let pair = await queue_utils_1.getPair(queueType, firstTokenObject, secondTokenObject);
            if (!pair)
                return null;
            queueInfoObj = await queue_utils_1.getGroupQueueTraderDataObj(pair, firstTokenObject, secondTokenObject, amountIn);
            if (queueInfoObj && queueInfoObj.sufficientLiquidity && queueInfoObj.tradeFeeObj) {
                let tradeFeeObj = queueInfoObj.tradeFeeObj;
                let tradeFeeFactor = new eth_wallet_1.BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
                let tradeFee = new eth_wallet_1.BigNumber(1).minus(tradeFeeFactor);
                return Object.assign(Object.assign({ queueType, pair }, queueInfoObj), { tradeFee });
            }
        }
        return null;
    };
    const getQueueOutPriceData = async (market, tokenIn, tokenOut, amountIn, callback) => {
        if (!tokenIn.address)
            tokenIn = getWETH();
        if (!tokenOut.address)
            tokenOut = getWETH();
        let queueInfo;
        if (market == store_2.Market.GROUP_QUEUE) {
            let groupQueueInfo = await getQueueInfoByAmtIn(global_1.QueueType.GROUP_QUEUE, tokenIn, tokenOut, amountIn);
            if (groupQueueInfo)
                queueInfo = groupQueueInfo;
        }
        if (!queueInfo || queueInfo.queueType == null)
            return null;
        let ret = Object.assign({ priceImpact: '0' }, queueInfo);
        if (callback)
            callback(null, ret);
        return ret;
    };
    const getOracleProviderOptionObj = async (market, firstTokenObject, secondTokenObject, firstInput, secondInput, isFromEstimated) => {
        const wallet = store_2.getWallet();
        let fromAmount = new eth_wallet_1.BigNumber(0);
        let toAmount = new eth_wallet_1.BigNumber(0);
        let pairs;
        let routeObj;
        try {
            if (isFromEstimated) {
                toAmount = secondInput;
                routeObj = await getQueueInPriceData(market, firstTokenObject, secondTokenObject, secondInput.toString());
                if (!routeObj)
                    return null;
                pairs = [routeObj.pair];
                let oracleAmount = new eth_wallet_1.BigNumber(routeObj.amountIn);
                fromAmount = oracleAmount;
            }
            else {
                fromAmount = firstInput;
                routeObj = await getQueueOutPriceData(market, firstTokenObject, secondTokenObject, firstInput.toString());
                if (!routeObj)
                    return null;
                pairs = [routeObj.pair];
                let oracleAmount = new eth_wallet_1.BigNumber(routeObj.amountOut);
                toAmount = oracleAmount;
                //gasFee =  parseFloat(await Oracle.calculateTradeExactInGasFee(firstTokenObject, secondTokenObject, firstInput.toString(), minReceivedMaxSold.toString(), eth.selectedAddress, transactionDeadline, [true], "0x"));                            
            }
        }
        catch (err) {
        }
        let provider = "";
        switch (market) {
            case store_2.Market.MIXED_QUEUE:
                provider = 'Oracle';
                break;
            case store_2.Market.PEGGED_QUEUE:
                provider = 'PeggedOracle';
                break;
            case store_2.Market.GROUP_QUEUE:
                provider = 'GroupQueue';
                break;
        }
        let isApproveButtonShown = await checkIsApproveButtonShown(wallet, firstTokenObject, fromAmount, market);
        if (routeObj) {
            return Object.assign(Object.assign({}, routeObj), { key: provider, provider: provider, fromAmount,
                toAmount,
                isApproveButtonShown,
                pairs });
        }
        return null;
    };
    async function getAllRoutesData(firstTokenObject, secondTokenObject, firstInput, secondInput, isFromEstimated, targetChainId) {
        let wallet = store_2.getWallet();
        let resultArr = [];
        if (firstTokenObject && secondTokenObject && (firstInput.gt(0) || secondInput.gt(0))) {
            let routeDataArr = [];
            if (isFromEstimated) {
                routeDataArr = await getBestAmountInRouteFromAPI(wallet, firstTokenObject, secondTokenObject, secondInput.toString(), targetChainId);
                console.log('routeDataArr', routeDataArr);
                if (routeDataArr.length == 0) {
                    let routeObj = await getBestAmountInRoute([store_2.Market.OPENSWAP], firstTokenObject, secondTokenObject, firstInput.toString(), []);
                    //console.log('routeObj', routeObj)
                    if (routeObj && routeObj.market.length == 1) {
                        let providerConfigByMarketCode = {};
                        let _chainId = store_2.getChainId();
                        Object.values(store_2.ProviderConfigMap).filter(v => !!v.supportedChains && v.supportedChains.includes(_chainId)).forEach((v, i) => {
                            if (v.marketCode == undefined)
                                return;
                            providerConfigByMarketCode[v.marketCode] = v;
                        });
                        let price = parseFloat(routeObj.price);
                        let priceSwap = new eth_wallet_1.BigNumber(1).div(routeObj.price).toNumber();
                        let priceImpact = Number(routeObj.priceImpact) * 100;
                        let tradeFee = parseFloat(routeObj.tradeFee);
                        let provider = providerConfigByMarketCode[routeObj.market[0]].key;
                        let key = provider + '|0';
                        routeDataArr.push(Object.assign(Object.assign({}, routeObj), { price,
                            priceSwap,
                            priceImpact,
                            tradeFee,
                            key,
                            provider }));
                    }
                }
            }
            else {
                routeDataArr = await getBestAmountOutRouteFromAPI(wallet, firstTokenObject, secondTokenObject, firstInput.toString(), targetChainId);
                if (routeDataArr.length == 0) {
                    let routeObj = await getBestAmountOutRoute([store_2.Market.OPENSWAP], firstTokenObject, secondTokenObject, firstInput.toString(), [], false);
                    if (routeObj && routeObj.market.length == 1) {
                        let providerConfigByMarketCode = {};
                        let _chainId = store_2.getChainId();
                        Object.values(store_2.ProviderConfigMap).filter(v => !!v.supportedChains && v.supportedChains.includes(_chainId)).forEach((v, i) => {
                            if (v.marketCode == undefined)
                                return;
                            providerConfigByMarketCode[v.marketCode] = v;
                        });
                        let price = parseFloat(routeObj.price);
                        let priceSwap = new eth_wallet_1.BigNumber(1).div(routeObj.price).toNumber();
                        let priceImpact = Number(routeObj.priceImpact) * 100;
                        let tradeFee = parseFloat(routeObj.tradeFee);
                        let provider = providerConfigByMarketCode[routeObj.market[0]].key;
                        let key = provider + '|0';
                        routeDataArr.push(Object.assign(Object.assign({}, routeObj), { price,
                            priceSwap,
                            priceImpact,
                            tradeFee,
                            key,
                            provider }));
                    }
                }
            }
            if (routeDataArr && routeDataArr.length > 0) {
                for (let i = 0; i < routeDataArr.length; i++) {
                    let optionObj = routeDataArr[i];
                    let routeObj = await composeRouteObj(wallet, optionObj, store_2.ProviderConfigMap[optionObj.provider].marketCode, firstTokenObject, firstInput, secondInput, isFromEstimated, targetChainId == undefined);
                    if (!routeObj)
                        continue;
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
    exports.getAllRoutesData = getAllRoutesData;
    const getHybridAmountsOut = async (wallet, amountIn, tokenIn, pair, data = '0x') => {
        let result;
        try {
            let Address = getAddresses();
            let hybridRouter = new sdk_1.Contracts.OSWAP_HybridRouter2(wallet, Address['OSWAP_HybridRouter2']);
            result = await hybridRouter.getAmountsOutStartsWith({
                amountIn,
                pair,
                tokenIn,
                data
            });
        }
        catch (err) {
            console.log('getHybrid2AmountsOut', err);
        }
        return result;
    };
    const getHybridAmountsIn = async (wallet, amountOut, tokenIn, pair, data = '0x') => {
        let result;
        try {
            let Address = getAddresses();
            let hybridRouter = new sdk_1.Contracts.OSWAP_HybridRouter2(wallet, Address['OSWAP_HybridRouter2']);
            result = await hybridRouter.getAmountsInStartsWith({
                amountOut,
                pair,
                tokenIn,
                data
            });
        }
        catch (err) {
        }
        return result;
    };
    const BakerySwapTradeExactIn = async function (wallet, routerAddress, tokenIn, tokenOut, path, amountIn, amountOutMin, toAddress, deadline, feeOnTransfer) {
        let receipt;
        // let router = new BakeryContracts.BakerySwapRouter(wallet, routerAddress);
        // if (!tokenIn.address) {
        //   let params = {
        //     amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
        //     path,
        //     to: toAddress,
        //     deadline
        //   };
        //   if (feeOnTransfer) {
        //     receipt = await router.swapExactBNBForTokensSupportingFeeOnTransferTokens(params, Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
        //   }
        //   else {
        //     receipt = await router.swapExactBNBForTokens(params, Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
        //   }
        // } else if (!tokenOut.address) {
        //   let params = {
        //     amountIn: Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
        //     amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
        //     path,
        //     to: toAddress,
        //     deadline
        //   };
        //   if (feeOnTransfer) {
        //     receipt = await router.swapExactTokensForBNBSupportingFeeOnTransferTokens(params);
        //   }
        //   else {
        //     receipt = await router.swapExactTokensForBNB(params);
        //   }
        // }
        // else {
        //   let params = {
        //     amountIn: Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
        //     amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
        //     path,
        //     to: toAddress,
        //     deadline
        //   };
        //   if (feeOnTransfer) {
        //     receipt = await router.swapExactTokensForTokensSupportingFeeOnTransferTokens(params);
        //   }
        //   else {
        //     receipt = await router.swapExactTokensForTokens(params);
        //   }
        // }
        return receipt;
    };
    const BakerySwapTradeExactOut = async function (wallet, routerAddress, tokenIn, tokenOut, path, amountOut, amountInMax, toAddress, deadline) {
        let receipt;
        // let router = new BakeryContracts.BakerySwapRouter(wallet, routerAddress);
        // if (!tokenIn.address) {
        //   let params = {
        //     amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
        //     path,
        //     to: toAddress,
        //     deadline
        //   };
        //   receipt = await router.swapBNBForExactTokens(params, Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0));
        // } else if (!tokenOut.address) {
        //   let params = {
        //     amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
        //     amountInMax: Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
        //     path,
        //     to: toAddress,
        //     deadline
        //   };
        //   receipt = await router.swapTokensForExactBNB(params);
        // }
        // else {
        //   let params = {
        //     amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
        //     amountInMax: Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
        //     path,
        //     to: toAddress,
        //     deadline
        //   };
        //   receipt = await router.swapTokensForExactTokens(params);
        // }
        return receipt;
    };
    const TraderJoeTradeExactIn = async function (wallet, routerAddress, tokenIn, tokenOut, path, amountIn, amountOutMin, toAddress, deadline, feeOnTransfer) {
        let receipt;
        // let router = new TraderJoeContracts.JoeRouter02(wallet, routerAddress);
        // if (!tokenIn.address) {
        //   let params = {
        //     amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
        //     path,
        //     to: toAddress,
        //     deadline
        //   };
        //   if (feeOnTransfer) {
        //     receipt = await router.swapExactAVAXForTokensSupportingFeeOnTransferTokens(params, Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
        //   }
        //   else {
        //     receipt = await router.swapExactAVAXForTokens(params, Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
        //   }
        // } else if (!tokenOut.address) {
        //   let params = {
        //     amountIn: Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
        //     amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
        //     path,
        //     to: toAddress,
        //     deadline
        //   };
        //   if (feeOnTransfer) {
        //     receipt = await router.swapExactTokensForAVAXSupportingFeeOnTransferTokens(params);
        //   }
        //   else {
        //     receipt = await router.swapExactTokensForAVAX(params);
        //   }
        // }
        // else {
        //   let params = {
        //     amountIn: Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
        //     amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
        //     path,
        //     to: toAddress,
        //     deadline
        //   };
        //   if (feeOnTransfer) {
        //     receipt = await router.swapExactTokensForTokensSupportingFeeOnTransferTokens(params);
        //   }
        //   else {
        //     receipt = await router.swapExactTokensForTokens(params);
        //   }
        // }
        return receipt;
    };
    const TraderJoeTradeExactOut = async function (wallet, routerAddress, tokenIn, tokenOut, path, amountOut, amountInMax, toAddress, deadline) {
        let receipt;
        // let router = new TraderJoeContracts.JoeRouter02(wallet, routerAddress);
        // if (!tokenIn.address) {
        //   let params = {
        //     amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
        //     path,
        //     to: toAddress,
        //     deadline
        //   };
        //   receipt = await router.swapAVAXForExactTokens(params, Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0));
        // } else if (!tokenOut.address) {
        //   let params = {
        //     amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
        //     amountInMax: Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
        //     path,
        //     to: toAddress,
        //     deadline
        //   };
        //   receipt = await router.swapTokensForExactAVAX(params);
        // }
        // else {
        //   let params = {
        //     amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
        //     amountInMax: Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
        //     path,
        //     to: toAddress,
        //     deadline
        //   };
        //   receipt = await router.swapTokensForExactTokens(params);
        // }
        return receipt;
    };
    const ImpossibleSwapTradeExactIn = async function (wallet, routerAddress, tokenIn, tokenOut, path, amountIn, amountOutMin, toAddress, deadline, feeOnTransfer) {
        let receipt;
        // let router = new ImpossibleContracts.ImpossibleRouter(wallet, routerAddress);
        // //let router = new ImpossibleContracts.ImpossibleRouterExtension(wallet, routerAddress);
        // //router.
        // if (!tokenIn.address) {
        //   let params = {
        //     amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
        //     path,
        //     to: toAddress,
        //     deadline
        //   };
        //   if (feeOnTransfer) {
        //     receipt = await router.swapExactETHForTokensSupportingFeeOnTransferTokens(params, Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
        //   }
        //   else {
        //     receipt = await router.swapExactETHForTokens(params, Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
        //   }
        // } else if (!tokenOut.address) {
        //   let params = {
        //     amountIn: Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
        //     amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
        //     path,
        //     to: toAddress,
        //     deadline
        //   };
        //   if (feeOnTransfer) {
        //     //swapExactTokensForBNBSupportingFeeOnTransferTokens
        //     receipt = await router.swapExactTokensForETHSupportingFeeOnTransferTokens(params);
        //   }
        //   else {
        //     //swapExactTokensForBNB
        //     receipt = await router.swapExactTokensForETH(params);
        //   }
        // }
        // else {
        //   let params = {
        //     amountIn: Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
        //     amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
        //     path,
        //     to: toAddress,
        //     deadline
        //   };
        //   if (feeOnTransfer) {
        //     receipt = await router.swapExactTokensForTokensSupportingFeeOnTransferTokens(params);
        //   }
        //   else {
        //     receipt = await router.swapExactTokensForTokens(params);
        //   }
        // }
        return receipt;
    };
    const ImpossibleSwapTradeExactOut = async function (wallet, routerAddress, tokenIn, tokenOut, path, amountOut, amountInMax, toAddress, deadline) {
        let receipt;
        // let router = new ImpossibleContracts.ImpossibleRouter(wallet, routerAddress);
        // if (!tokenIn.address) {
        //   let params = {
        //     amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
        //     path,
        //     to: toAddress,
        //     deadline
        //   };
        //   receipt = await router.swapETHForExactTokens(params, Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0));
        // } else if (!tokenOut.address) {
        //   let params = {
        //     amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
        //     amountInMax: Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
        //     path,
        //     to: toAddress,
        //     deadline
        //   };
        //   receipt = await router.swapTokensForExactETH(params);
        // }
        // else {
        //   let params = {
        //     amountOut: Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
        //     amountInMax: Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
        //     path,
        //     to: toAddress,
        //     deadline
        //   };
        //   receipt = await router.swapTokensForExactTokens(params);
        // }
        return receipt;
    };
    const AmmTradeExactIn = async function (wallet, market, routeTokens, amountIn, amountOutMin, toAddress, deadline, feeOnTransfer, callback, confirmationCallback) {
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
                amountOutMin: eth_wallet_1.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
                path: addresses,
                to: toAddress,
                deadline
            };
            let router = new sdk_1.Contracts.OSWAP_Router(wallet, routerAddress);
            if (feeOnTransfer) {
                receipt = await router.swapExactETHForTokensSupportingFeeOnTransferTokens(params, eth_wallet_1.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
            }
            else {
                receipt = await router.swapExactETHForTokens(params, eth_wallet_1.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
            }
        }
        else if (!tokenOut.address) {
            let params = {
                amountIn: eth_wallet_1.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
                amountOutMin: eth_wallet_1.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
                path: addresses,
                to: toAddress,
                deadline
            };
            let router = new sdk_1.Contracts.OSWAP_Router(wallet, routerAddress);
            if (feeOnTransfer) {
                receipt = await router.swapExactTokensForETHSupportingFeeOnTransferTokens(params);
            }
            else {
                receipt = await router.swapExactTokensForETH(params);
            }
        }
        else {
            let params = {
                amountIn: eth_wallet_1.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
                amountOutMin: eth_wallet_1.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
                path: addresses,
                to: toAddress,
                deadline
            };
            let router = new sdk_1.Contracts.OSWAP_Router(wallet, routerAddress);
            if (feeOnTransfer) {
                receipt = await router.swapExactTokensForTokensSupportingFeeOnTransferTokens(params);
            }
            else {
                receipt = await router.swapExactTokensForTokens(params);
            }
        }
        return receipt;
    };
    const AmmTradeExactOut = async function (wallet, market, routeTokens, amountOut, amountInMax, toAddress, deadline, callback, confirmationCallback) {
        if (routeTokens.length < 2) {
            return null;
        }
        let tokenIn = routeTokens[0];
        let tokenOut = routeTokens[routeTokens.length - 1];
        let routerAddress = getRouterAddress(market);
        let router = new sdk_1.Contracts.OSWAP_Router(wallet, routerAddress);
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
                amountOut: eth_wallet_1.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
                path: addresses,
                to: toAddress,
                deadline
            };
            receipt = await router.swapETHForExactTokens(params, eth_wallet_1.Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0));
        }
        else if (!tokenOut.address) {
            let params = {
                amountOut: eth_wallet_1.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
                amountInMax: eth_wallet_1.Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
                path: addresses,
                to: toAddress,
                deadline
            };
            receipt = await router.swapTokensForExactETH(params);
        }
        else {
            let params = {
                amountOut: eth_wallet_1.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
                amountInMax: eth_wallet_1.Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
                path: addresses,
                to: toAddress,
                deadline
            };
            receipt = await router.swapTokensForExactTokens(params);
        }
        return receipt;
    };
    const hybridTradeExactIn = async (wallet, bestSmartRoute, path, pairs, amountIn, amountOutMin, toAddress, deadline, feeOnTransfer, data, callback, confirmationCallback) => {
        if (path.length < 2) {
            return null;
        }
        let tokenIn = path[0];
        let tokenOut = path[path.length - 1];
        if (bestSmartRoute && bestSmartRoute.length > 0) {
            let pairIndex = bestSmartRoute.findIndex(n => n.queueType == global_1.QueueType.RANGE_QUEUE);
            if (pairIndex != -1) {
                if (bestSmartRoute[pairIndex].orderIds) {
                    let orderIds = bestSmartRoute[pairIndex].orderIds;
                    data = "0x" + eth_wallet_1.Utils.numberToBytes32(0x20 * (orderIds.length + 1)) + eth_wallet_1.Utils.numberToBytes32(orderIds.length) + orderIds.map(e => eth_wallet_1.Utils.numberToBytes32(e)).join('');
                }
                else {
                    let amountInTokenAmount = eth_wallet_1.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0);
                    let tokenInAddress = tokenIn.address ? tokenIn.address : getWrappedTokenAddress();
                    let amountsOutObj = await getHybridAmountsOut(wallet, amountInTokenAmount, tokenInAddress, pairs);
                    if (!amountsOutObj)
                        return null;
                    let pair = pairs[pairIndex];
                    let tokenA = path[pairIndex];
                    let tokenB = path[pairIndex + 1];
                    let rangeAmountOut = amountsOutObj[pairIndex + 1];
                    data = await queue_utils_1.getRangeQueueData(pair, tokenA, tokenB, rangeAmountOut);
                }
            }
        }
        let hybridRouterAddress = getHybridRouterAddress();
        let hybridRouter = new sdk_1.Contracts.OSWAP_HybridRouter2(wallet, hybridRouterAddress);
        let receipt;
        if (!tokenIn.address) {
            let params = {
                amountOutMin: eth_wallet_1.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
                pair: pairs,
                to: toAddress,
                deadline,
                data
            };
            if (feeOnTransfer) {
                receipt = await hybridRouter.swapExactETHForTokensSupportingFeeOnTransferTokens(params, eth_wallet_1.Utils.toDecimals(amountIn).dp(0));
            }
            else {
                receipt = await hybridRouter.swapExactETHForTokens(params, eth_wallet_1.Utils.toDecimals(amountIn).dp(0));
            }
        }
        else if (!tokenOut.address) {
            let params = {
                amountIn: eth_wallet_1.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
                amountOutMin: eth_wallet_1.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
                pair: pairs,
                to: toAddress,
                deadline,
                data
            };
            if (feeOnTransfer) {
                receipt = await hybridRouter.swapExactTokensForETHSupportingFeeOnTransferTokens(params);
            }
            else {
                receipt = await hybridRouter.swapExactTokensForETH(params);
            }
        }
        else {
            let params = {
                amountIn: eth_wallet_1.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
                amountOutMin: eth_wallet_1.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
                pair: pairs,
                tokenIn: tokenIn.address,
                to: toAddress,
                deadline,
                data
            };
            if (feeOnTransfer) {
                receipt = await hybridRouter.swapExactTokensForTokensSupportingFeeOnTransferTokens(params);
            }
            else {
                receipt = await hybridRouter.swapExactTokensForTokens(params);
            }
        }
        return receipt;
    };
    const hybridTradeExactOut = async (wallet, bestSmartRoute, path, pairs, amountOut, amountInMax, toAddress, deadline, data, callback, confirmationCallback) => {
        if (path.length < 2) {
            return null;
        }
        let tokenIn = path[0];
        let tokenOut = path[path.length - 1];
        if (bestSmartRoute && bestSmartRoute.length > 0) {
            let pairIndex = bestSmartRoute.findIndex((n) => n.queueType == global_1.QueueType.RANGE_QUEUE);
            if (pairIndex != -1) {
                if (bestSmartRoute[pairIndex].orderIds) {
                    let orderIds = bestSmartRoute[pairIndex].orderIds;
                    data = "0x" + eth_wallet_1.Utils.numberToBytes32(0x20 * (orderIds.length + 1)) + eth_wallet_1.Utils.numberToBytes32(orderIds.length) + orderIds.map(e => eth_wallet_1.Utils.numberToBytes32(e)).join('');
                }
                else {
                    let amountOutTokenAmount = eth_wallet_1.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0);
                    let amountsOutObj = await getHybridAmountsIn(wallet, amountOutTokenAmount, tokenIn, pairs);
                    if (!amountsOutObj)
                        return null;
                    let pair = pairs[pairIndex];
                    let tokenA = path[pairIndex];
                    let tokenB = path[pairIndex + 1];
                    let rangeAmountOut = amountsOutObj[pairIndex + 1];
                    data = await queue_utils_1.getRangeQueueData(pair, tokenA, tokenB, rangeAmountOut);
                }
            }
        }
        let hybridRouterAddress = getHybridRouterAddress();
        let hybridRouter = new sdk_1.Contracts.OSWAP_HybridRouter2(wallet, hybridRouterAddress);
        let receipt;
        if (!tokenIn.address) {
            let params = {
                amountOut: eth_wallet_1.Utils.toDecimals(amountOut, tokenOut.decimals),
                pair: pairs,
                to: toAddress,
                deadline,
                data
            };
            receipt = await hybridRouter.swapETHForExactTokens(params, eth_wallet_1.Utils.toDecimals(amountInMax).dp(0));
        }
        else if (!tokenOut.address) {
            let params = {
                amountOut: eth_wallet_1.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
                amountInMax: eth_wallet_1.Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
                pair: pairs,
                to: toAddress,
                deadline,
                data
            };
            receipt = await hybridRouter.swapTokensForExactETH(params);
        }
        else {
            let params = {
                amountOut: eth_wallet_1.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
                amountInMax: eth_wallet_1.Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
                pair: pairs,
                tokenOut: tokenOut.address,
                to: toAddress,
                deadline,
                data
            };
            receipt = await hybridRouter.swapTokensForExactTokens(params);
        }
        return receipt;
    };
    const executeSwap = async (swapData) => {
        var _a;
        let receipt = null;
        const wallet = store_2.getWallet();
        try {
            const toAddress = wallet.account.address;
            const slippageTolerance = store_2.getSlippageTolerance();
            const transactionDeadlineInMinutes = store_2.getTransactionDeadline();
            const transactionDeadline = Math.floor(Date.now() / 1000 + transactionDeadlineInMinutes * 60);
            if (swapData.provider === "Hybrid" ||
                (swapData.provider === "Oracle" && swapData.bestSmartRoute) ||
                swapData.provider === "PeggedOracle") {
                if (swapData.isFromEstimated) {
                    const amountInMax = swapData.fromAmount.times(1 + slippageTolerance / 100);
                    receipt = await hybridTradeExactOut(wallet, swapData.bestSmartRoute, swapData.routeTokens, swapData.pairs, swapData.toAmount.toString(), amountInMax.toString(), toAddress, transactionDeadline, "0x");
                }
                else {
                    const amountOutMin = swapData.toAmount.times(1 - slippageTolerance / 100);
                    receipt = await hybridTradeExactIn(wallet, swapData.bestSmartRoute, swapData.routeTokens, swapData.pairs, swapData.fromAmount.toString(), amountOutMin.toString(), toAddress, transactionDeadline, false, "0x");
                }
            }
            else if (!swapData.queueType) {
                const market = store_2.ProviderConfigMap[swapData.provider].marketCode;
                if (swapData.isFromEstimated) {
                    const amountInMax = swapData.fromAmount.times(1 + slippageTolerance / 100);
                    receipt = await AmmTradeExactOut(wallet, market, swapData.routeTokens, swapData.toAmount.toString(), amountInMax.toString(), toAddress, transactionDeadline);
                }
                else {
                    const amountOutMin = swapData.toAmount.times(1 - slippageTolerance / 100);
                    receipt = await AmmTradeExactIn(wallet, market, swapData.routeTokens, swapData.fromAmount.toString(), amountOutMin.toString(), toAddress, transactionDeadline, false);
                }
            }
            else if (swapData.provider === "RestrictedOracle") {
                const obj = await queue_utils_1.getGroupQueueTraderDataObj(swapData.pairs[0], swapData.routeTokens[0], swapData.routeTokens[1], swapData.fromAmount.toString(), (_a = swapData.groupQueueOfferIndex) === null || _a === void 0 ? void 0 : _a.toString());
                if (!obj || !obj.data)
                    return {
                        receipt: null,
                        error: { message: "No data from Group Queue Trader" },
                    };
                const data = obj.data;
                const amountOutMin = swapData.toAmount.times(1 - slippageTolerance / 100);
                receipt = await hybridTradeExactIn(wallet, swapData.bestSmartRoute, swapData.routeTokens, swapData.pairs, swapData.fromAmount.toString(), amountOutMin.toString(), toAddress, transactionDeadline, false, data);
            }
        }
        catch (error) {
            return { receipt: null, error: error };
        }
        return { receipt, error: null };
    };
    exports.executeSwap = executeSwap;
    //For testing only
    const setERC20AllowanceToZero = async (token, spenderAddress) => {
        let wallet = store_2.getWallet();
        let erc20 = new sdk_1.Contracts.ERC20(wallet, token.address);
        let receipt = await erc20.approve({
            spender: spenderAddress,
            amount: 0
        });
        return receipt;
    };
    exports.setERC20AllowanceToZero = setERC20AllowanceToZero;
    var approvalModel;
    const getApprovalModelAction = async (options) => {
        const approvalOptions = Object.assign(Object.assign({}, options), { spenderAddress: '' });
        approvalModel = new global_1.ERC20ApprovalModel(approvalOptions);
        let approvalModelAction = approvalModel.getAction();
        return approvalModelAction;
    };
    exports.getApprovalModelAction = getApprovalModelAction;
    const setApprovalModalSpenderAddress = (market, contractAddress) => {
        let wallet = eth_wallet_1.Wallet.getInstance();
        let spender;
        if (contractAddress) {
            spender = contractAddress;
        }
        else {
            if (market == store_2.Market.HYBRID || market == store_2.Market.MIXED_QUEUE || market == store_2.Market.PEGGED_QUEUE || market == store_2.Market.GROUP_QUEUE) {
                spender = getHybridRouterAddress();
            }
            else {
                spender = getRouterAddress(market);
            }
        }
        approvalModel.spenderAddress = spender;
    };
    exports.setApprovalModalSpenderAddress = setApprovalModalSpenderAddress;
    // CrossChain
    const getAvailableRouteOptions = async (params) => {
        let slippageTolerance = store_2.getSlippageTolerance();
        return await crosschain_utils_2.getAvailableRouteOptions(params, getTradeFeeMap, getExtendedRouteObjData, slippageTolerance);
    };
    exports.getAvailableRouteOptions = getAvailableRouteOptions;
    const createBridgeVaultOrder = async (newOrderParams) => crosschain_utils_2.createBridgeVaultOrder(Object.assign(Object.assign({}, newOrderParams), { transactionSetting: {
            transactionDeadlineInMinutes: store_2.getTransactionDeadline(),
            slippageTolerance: store_2.getSlippageTolerance()
        } }));
    exports.createBridgeVaultOrder = createBridgeVaultOrder;
    const registerPairsByAddress = async (market, pairAddresses) => {
        let wallet = eth_wallet_1.Wallet.getInstance();
        let registryAddress = getAddresses()["OSWAP_HybridRouterRegistry"];
        let registry = new sdk_1.Contracts.OSWAP_HybridRouterRegistry(wallet, registryAddress);
        let factory = market.map(m => getFactoryAddress(m));
        let pairAddress = pairAddresses;
        return await registry.registerPairsByAddress2({ factory, pairAddress });
    };
    exports.registerPairsByAddress = registerPairsByAddress;
    __exportStar(helper_1, exports);
});
