define("@swap/crosschain-utils", ["require", "exports", "@ijstech/eth-wallet", "@swap/global", "@swap/store", "@openswap/cross-chain-bridge-sdk"], function (require, exports, eth_wallet_1, global_1, store_1, cross_chain_bridge_sdk_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getAvailableRouteOptions = exports.createBridgeVaultOrder = exports.initCrossChainWallet = exports.getBondsInBridgeVault = exports.getBridgeVault = exports.getBridgeVaults = exports.getTargetChainTokenInfoObj = exports.getTargetChainTokenMap = exports.getVaultTokenMap = exports.getTokenByVaultAddress = exports.getMainChainId = exports.getChainIdGroup = exports.setApprovalModalSpenderAddress = exports.getApprovalModelAction = void 0;
    const routeAPI = store_1.baseRoute + '/trading/v1/cross-chain-route';
    const GetBridgeVaultsAPI = store_1.baseRoute + '/trading/v1/bridge-vaults';
    const GetBridgeVaultAPI = store_1.baseRoute + '/trading/v1/bridge-vault';
    const GetBondsInBridgeVaultAPI = store_1.baseRoute + '/trading/v1/bonds-by-chain-id-and-vault-troll-registry';
    // Common
    var approvalModel;
    const getApprovalModelAction = async (options) => {
        const approvalOptions = Object.assign(Object.assign({}, options), { spenderAddress: '' });
        approvalModel = new global_1.ERC20ApprovalModel(approvalOptions);
        let approvalModelAction = approvalModel.getAction();
        return approvalModelAction;
    };
    exports.getApprovalModelAction = getApprovalModelAction;
    const setApprovalModalSpenderAddress = (contractAddress) => {
        approvalModel.spenderAddress = contractAddress;
    };
    exports.setApprovalModalSpenderAddress = setApprovalModalSpenderAddress;
    const getChainIdGroup = () => {
        const chainId = store_1.getChainId();
        const list = store_1.getMatchNetworks({ isDisabled: false, isCrossChainSupported: true });
        const testnetSupportedList = list.filter(v => v.isTestnet);
        const mainnetSupportedList = list.filter(v => !v.isTestnet);
        if (testnetSupportedList.some((item) => item.chainId === chainId)) {
            return testnetSupportedList;
        }
        return mainnetSupportedList;
    };
    exports.getChainIdGroup = getChainIdGroup;
    const getMainChainId = () => {
        let chainGroup = getChainIdGroup();
        if (chainGroup) {
            let mainChain = chainGroup.find(v => v.isMainChain == true);
            if (mainChain)
                return mainChain.chainId;
        }
        return null;
    };
    exports.getMainChainId = getMainChainId;
    const getTokenByVaultAddress = (chainId, vaultAddress) => {
        if (!chainId)
            return null;
        let vaultTokenMap = getVaultTokenMap();
        let tokenAddress = vaultTokenMap[chainId][vaultAddress.toLowerCase()];
        let tokenMap = getTargetChainTokenMap(chainId);
        let token = tokenMap[tokenAddress.toLowerCase()];
        return token;
    };
    exports.getTokenByVaultAddress = getTokenByVaultAddress;
    const getTargetChainTokenMap = (chainId) => {
        let tokenList = store_1.getTokenList(chainId);
        tokenList = tokenList.map(v => v = Object.assign(Object.assign({}, v), { address: v.address ? v.address.toLowerCase() : undefined })).sort((a, b) => {
            if (a.symbol.toLowerCase() < b.symbol.toLowerCase()) {
                return -1;
            }
            if (a.symbol.toLowerCase() > b.symbol.toLowerCase()) {
                return 1;
            }
            return 0;
        });
        let tokenMap = {};
        Object.values(tokenList).forEach((v, i) => {
            if (v.isNative)
                v = Object.assign(Object.assign({}, store_1.crossChainNativeTokenList[chainId]), { isNative: true });
            tokenMap["" + v.address] = v;
        });
        return tokenMap;
    };
    exports.getTargetChainTokenMap = getTargetChainTokenMap;
    const initCrossChainWallet = (chainId) => {
        const wallet = eth_wallet_1.Wallet.getInstance();
        const networkInfo = store_1.getNetworkInfo(chainId);
        let rpcEndpoint = networkInfo.rpc;
        let crossChainWallet = new eth_wallet_1.Wallet(rpcEndpoint, { address: wallet.address });
        return crossChainWallet;
    };
    exports.initCrossChainWallet = initCrossChainWallet;
    const getTargetChainTokenInfoObj = async (chainId) => {
        let targetChainWallet = initCrossChainWallet(chainId);
        let balances = {};
        let tokenMap = getTargetChainTokenMap(chainId);
        if (!chainId || !store_1.DefaultTokens[chainId])
            return { tokenMap, balances };
        const tokenList = store_1.getTokenList(chainId);
        let promises = [];
        promises.push(...tokenList.map(async (token, index) => {
            try {
                if (token.address) {
                    let erc20 = new eth_wallet_1.Erc20(targetChainWallet, token.address.toLowerCase(), token.decimals);
                    let balance = (await erc20.balance).toFixed();
                    balances[token.address.toLowerCase()] = balance;
                }
                else {
                    let balance = (await targetChainWallet.balance).toFixed();
                    balances[token.symbol] = balance;
                }
            }
            catch (error) {
                balances[token.address ? token.address.toLowerCase() : token.symbol] = '0';
                //console.log(`Failed to get token(${token.address}) balance`)
            }
        }));
        await Promise.all(promises);
        return {
            tokenMap,
            balances
        };
    };
    exports.getTargetChainTokenInfoObj = getTargetChainTokenInfoObj;
    const getVaultTokenMap = () => {
        let vaultTokenMap = {};
        store_1.BridgeVaultGroupList.forEach((vaultGroup) => {
            for (const [chainId, vault] of Object.entries(vaultGroup.vaults)) {
                vaultTokenMap[chainId] = vaultTokenMap[chainId] || {};
                vaultTokenMap[chainId][vault.vaultAddress.toLowerCase()] = vault.tokenAddress.toLowerCase();
            }
        });
        return vaultTokenMap;
    };
    exports.getVaultTokenMap = getVaultTokenMap;
    const getBridgeVaults = async () => {
        let res = await global_1.getAPI(GetBridgeVaultsAPI);
        return res;
    };
    exports.getBridgeVaults = getBridgeVaults;
    const getBridgeVault = async (chainId, vaultAddress) => {
        let res = await global_1.getAPI(GetBridgeVaultAPI, { chainId, address: vaultAddress });
        return res;
    };
    exports.getBridgeVault = getBridgeVault;
    const getBondsInBridgeVault = async (chainId, vaultTrollRegistry, version = store_1.getBridgeVaultVersion(store_1.getChainId())) => {
        let res = await global_1.getAPI(GetBondsInBridgeVaultAPI, { version, chainId, vaultTrollRegistry });
        return Array.isArray(res) ? res : [];
    };
    exports.getBondsInBridgeVault = getBondsInBridgeVault;
    // Bridge Swap
    const createBridgeVaultOrder = async (params) => {
        try {
            const { vaultAddress, targetChainId, tokenIn, tokenOut, amountIn, minAmountOut, transactionSetting, sourceRouteInfo } = params;
            const wallet = eth_wallet_1.Wallet.getInstance();
            const transactionDeadlineInMinutes = transactionSetting.transactionDeadlineInMinutes;
            const transactionDeadline = Math.floor(Date.now() / 1000 + (transactionDeadlineInMinutes * 60));
            const slippageTolerance = transactionSetting.slippageTolerance;
            const amountInTokenAmount = eth_wallet_1.Utils.toDecimals(amountIn, tokenIn.decimals);
            const minAmountOutTokenAmount = eth_wallet_1.Utils.toDecimals(minAmountOut, tokenOut.decimals).dp(0, 1);
            if (tokenOut.isNative) {
                tokenOut.address = store_1.nullAddress;
            }
            const newOrder = {
                peerChain: targetChainId,
                inAmount: amountInTokenAmount,
                outToken: tokenOut.address || "",
                minOutAmount: minAmountOutTokenAmount,
                to: wallet.address,
                expire: transactionDeadline
            };
            const chainId = await wallet.getChainId();
            const sourceVaultToken = getTokenByVaultAddress(chainId, vaultAddress);
            let receipt;
            if (sourceRouteInfo) {
                const wrapperAddress = store_1.CrossChainAddressMap[chainId].wrapperAddress;
                const wrapperContract = new cross_chain_bridge_sdk_1.Contracts.OSWAP_RouterVaultWrapper(wallet, wrapperAddress);
                if (!(sourceVaultToken === null || sourceVaultToken === void 0 ? void 0 : sourceVaultToken.decimals)) {
                    throw new Error("Missing Source Vault Token Decimals");
                }
                newOrder.inAmount = new eth_wallet_1.BigNumber(sourceRouteInfo.amountOut).shiftedBy(sourceVaultToken.decimals).times(1 - slippageTolerance / 100).dp(0, 1);
                if (tokenIn.isNative) {
                    const swapExactETHForTokenParams = {
                        pair: sourceRouteInfo.pairs,
                        vault: vaultAddress,
                        deadline: transactionDeadline,
                        order: newOrder
                    };
                    receipt = await wrapperContract.swapExactETHForTokens(swapExactETHForTokenParams, eth_wallet_1.Utils.toDecimals(amountIn, 18));
                }
                else {
                    const swapExactTokenForTokensParams = {
                        pair: sourceRouteInfo.pairs,
                        vault: vaultAddress,
                        amountIn: eth_wallet_1.Utils.toDecimals(amountIn, tokenIn.decimals),
                        deadline: transactionDeadline,
                        order: newOrder
                    };
                    receipt = await wrapperContract.swapExactTokensForTokens(swapExactTokenForTokensParams);
                }
            }
            else {
                const vaultContract = new cross_chain_bridge_sdk_1.Contracts.OSWAP_BridgeVault(wallet, vaultAddress);
                receipt = await vaultContract.newOrder(newOrder);
            }
            return { receipt, error: null };
        }
        catch (error) {
            return { receipt: null, error: error };
        }
    };
    exports.createBridgeVaultOrder = createBridgeVaultOrder;
    const composeRouteObjBridge = async (routeObj, firstInput, vaultTokenToTargetChain, bridgeFees, slippageTolerance) => {
        let fromAmount = new eth_wallet_1.BigNumber(0);
        let toAmount = new eth_wallet_1.BigNumber(0);
        let minReceivedMaxSold = 0;
        let priceImpact = 0;
        let price = 0;
        let priceSwap = 0;
        let tradeFee = 0;
        let fees;
        let isApproveButtonShown = false;
        try {
            toAmount = new eth_wallet_1.BigNumber(routeObj.targetRouteObj.amountOut);
            if (toAmount.isZero())
                return null;
            minReceivedMaxSold = toAmount.times(1 - slippageTolerance / 100).toNumber();
            fromAmount = firstInput;
            price = new eth_wallet_1.BigNumber(fromAmount).div(toAmount).toNumber();
            priceSwap = new eth_wallet_1.BigNumber(1).div(price).toNumber();
            // Fee Structure - in InToken
            let sourceRoutingPrice = routeObj.sourceRouteObj ? routeObj.sourceRouteObj.price : 1;
            fees = {
                sourceRouteLiquidityFee: routeObj.sourceRouteObj ? new eth_wallet_1.BigNumber(routeObj.sourceRouteObj.tradeFee).times(fromAmount).toNumber() : 0,
                targetRouteLiquidityFee: new eth_wallet_1.BigNumber(routeObj.targetRouteObj.tradeFee).times(vaultTokenToTargetChain).times(sourceRoutingPrice).toNumber(),
                baseFee: new eth_wallet_1.BigNumber(bridgeFees.baseFee).times(sourceRoutingPrice).toNumber(),
                transactionFee: new eth_wallet_1.BigNumber(bridgeFees.transactionFee).times(sourceRoutingPrice).toNumber(),
                protocolFee: new eth_wallet_1.BigNumber(bridgeFees.protocolFee).times(sourceRoutingPrice).toNumber(),
                imbalanceFee: new eth_wallet_1.BigNumber(bridgeFees.imbalanceFee).times(sourceRoutingPrice).toNumber()
            };
            tradeFee = Object.values(fees).reduce((a, b) => a + b);
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
            fees,
            minReceivedMaxSold,
            isApproveButtonShown });
    };
    const getExtendedRouteObjDataForDirectRoute = async (bestRouteObj, swapPrice) => {
        let fee = new eth_wallet_1.BigNumber(0);
        let priceImpact = new eth_wallet_1.BigNumber(0);
        let extendedRouteObj = {
            pairs: bestRouteObj.pairs,
            market: bestRouteObj.market,
            bestRoute: bestRouteObj.route,
            priceImpact: priceImpact,
            price: swapPrice.toFixed(),
            tradeFee: fee.toFixed(),
        };
        return extendedRouteObj;
    };
    const checkIsApproveButtonShown = async (tokenIn, fromInput, address) => {
        const wallet = eth_wallet_1.Wallet.getInstance();
        let erc20 = new eth_wallet_1.Erc20(wallet, tokenIn.address);
        let allowance = await erc20.allowance({
            owner: wallet.address,
            spender: address
        });
        return fromInput.gt(eth_wallet_1.Utils.fromDecimals(allowance, tokenIn.decimals));
    };
    const getAvailableRouteOptions = async (params, getTradeFeeMap, getExtendedRouteObjData, slippageTolerance) => {
        var _a, _b;
        let { fromChainId, toChainId, tokenIn, tokenOut, amountIn } = params;
        // Handle native token
        let isTokenInNative = false;
        let isTokenOutNative = false;
        if (tokenIn.isNative) {
            isTokenInNative = true;
            tokenIn.address = store_1.crossChainNativeTokenList[fromChainId].wethAddress;
        }
        if (tokenOut.isNative) {
            tokenOut.address = store_1.crossChainNativeTokenList[toChainId].wethAddress;
        }
        const tradeFeeMap = await getTradeFeeMap();
        const routeObjArr = await global_1.getAPI(routeAPI, {
            fromChainId,
            toChainId,
            tokenIn: tokenIn.address,
            tokenOut: tokenOut.address,
            amountIn: eth_wallet_1.Utils.toDecimals(amountIn, tokenIn.decimals),
            version: store_1.getBridgeVaultVersion(store_1.getChainId())
        });
        if (!routeObjArr || !routeObjArr.routes)
            return [];
        const composeRoutes = async (routeObj, chainId, fromAmount) => {
            const providerConfigByDexId = store_1.getProviderList()
                .filter(({ supportedChains }) => supportedChains === null || supportedChains === void 0 ? void 0 : supportedChains.includes(chainId))
                .reduce((acc, cur) => {
                if (cur.dexId || (cur.dexId && cur.dexId === 0))
                    acc[cur.dexId] = cur;
                return acc;
            }, {});
            let dexId = [5, 6].includes(routeObj.dexId) ? 5 : routeObj.dexId;
            let bestRouteObj;
            bestRouteObj = {
                pairs: routeObj.route.map(v => v.address),
                isRegistered: routeObj.route.map(v => v.isRegistered),
                market: routeObj.route.map(v => {
                    let dexId = [5, 6].includes(v.dexId) ? 5 : v.dexId;
                    return providerConfigByDexId[dexId].key;
                }),
                route: routeObj.tokens,
                customDataList: routeObj.route.map(v => {
                    return {
                        queueType: v.queueType,
                        orderIds: v.orderIds,
                        reserveA: v.reserves.reserve0,
                        reserveB: v.reserves.reserve1
                    };
                })
            };
            let amountOut = eth_wallet_1.Utils.fromDecimals(routeObj.amountOut, routeObj.tokens[routeObj.tokens.length - 1].decimals);
            let swapPrice = new eth_wallet_1.BigNumber(fromAmount).div(amountOut);
            let targetChainWallet = initCrossChainWallet(chainId);
            let extendedData = bestRouteObj.pairs.length !== 0 ? await getExtendedRouteObjData(targetChainWallet, bestRouteObj, tradeFeeMap, swapPrice, true) : await getExtendedRouteObjDataForDirectRoute(bestRouteObj, swapPrice);
            let provider = providerConfigByDexId[dexId].key;
            let key = provider + '|' + (routeObj.isDirectRoute ? '0' : '1');
            bestRouteObj = Object.assign(Object.assign({}, extendedData), { amountOut,
                provider,
                key, queueType: routeObj.queueType });
            return bestRouteObj;
        };
        let bestRouteObjArr = [];
        let wrapperAddress = store_1.CrossChainAddressMap[fromChainId].wrapperAddress; //TODO: Return from API
        for (let i = 0; i < routeObjArr['routes'].length; i++) {
            let routeObj = routeObjArr['routes'][i];
            let sourceVaultToken = getTokenByVaultAddress(fromChainId, routeObj.vault);
            let targetVaultAddresses = (_b = (_a = store_1.BridgeVaultGroupList.filter((v) => {
                if (v.deprecated)
                    return false;
                return v.vaults[fromChainId].vaultAddress.toLowerCase() == routeObj.vault.toLowerCase();
            })[0]) === null || _a === void 0 ? void 0 : _a.vaults) === null || _b === void 0 ? void 0 : _b[toChainId];
            if (targetVaultAddresses == null)
                continue;
            let targetVaultTokenAddress = targetVaultAddresses.tokenAddress;
            let tokenMap = getTargetChainTokenMap(toChainId);
            let targetVaultToken = tokenMap[targetVaultTokenAddress.toLowerCase()];
            //Get Fee From Router
            const fees = Object.entries(routeObj.fees).reduce((acc, [key, value]) => {
                acc[key] = new eth_wallet_1.BigNumber(value).shiftedBy(-targetVaultToken.decimals);
                return acc;
            }, {});
            amountIn = new eth_wallet_1.BigNumber(amountIn);
            let sourceRouteObj = routeObj.sourceRoute ? await composeRoutes(routeObj.sourceRoute, fromChainId, amountIn) : null;
            let vaultTokenFromSourceChain = routeObj.sourceRoute ? sourceRouteObj.amountOut : amountIn;
            let bridgeFee = new eth_wallet_1.BigNumber(fees.baseFee).plus(fees.protocolFee).plus(fees.transactionFee).plus(fees.imbalanceFee);
            let vaultTokenToTargetChain = new eth_wallet_1.BigNumber(vaultTokenFromSourceChain).minus(bridgeFee).toFixed();
            let targetRouteObj = await composeRoutes(routeObj.targetRoute, toChainId, vaultTokenToTargetChain);
            let bestRouteObj;
            bestRouteObj = {
                sourceRouteObj,
                targetRouteObj,
                sourceVaultToken,
                targetVaultToken,
                vaultTokenFromSourceChain: routeObj.sourceRoute ? vaultTokenFromSourceChain : null,
                vaultTokenToTargetChain,
                vaultAddress: routeObj.vault,
                contractAddress: sourceRouteObj ? wrapperAddress : routeObj.vault,
            };
            bestRouteObj = await composeRouteObjBridge(bestRouteObj, amountIn, new eth_wallet_1.BigNumber(vaultTokenToTargetChain), fees, slippageTolerance);
            if (isTokenInNative && bestRouteObj) {
                bestRouteObj.sourceRouteObj.bestRoute[0] = tokenIn;
                bestRouteObj.sourceRouteObj.bestSmartRoute[0].fromToken = tokenIn;
            }
            if (isTokenOutNative) {
                bestRouteObj.targetRouteObj.bestRoute[bestRouteObj.targetRouteObj.bestRoute.length - 1] = tokenOut;
                bestRouteObj.targetRouteObj.bestSmartRoute[bestRouteObj.targetRouteObj.bestSmartRoute.length - 1].toToken = tokenOut;
            }
            bestRouteObjArr.push(bestRouteObj);
        }
        bestRouteObjArr = bestRouteObjArr.filter(v => v !== null);
        bestRouteObjArr.sort((a, b) => a.toAmount.lt(b.toAmount) ? 1 : -1);
        if (bestRouteObjArr[0] && !isTokenInNative)
            bestRouteObjArr[0].isApproveButtonShown = await checkIsApproveButtonShown(tokenIn, new eth_wallet_1.BigNumber(amountIn), bestRouteObjArr[0].contractAddress);
        return bestRouteObjArr;
    };
    exports.getAvailableRouteOptions = getAvailableRouteOptions;
});
