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
define("@swap/global/utils/common.ts", ["require", "exports", "@ijstech/eth-wallet", "@scom/oswap-openswap-contract"], function (require, exports, eth_wallet_1, oswap_openswap_contract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getERC20Allowance = exports.approveERC20Max = exports.getERC20Amount = exports.registerSendTxEvents = exports.isTransactionConfirmed = void 0;
    ;
    const isTransactionConfirmed = async (txHash) => {
        const tx = await eth_wallet_1.Wallet.getClientInstance().getTransactionReceipt(txHash);
        return tx && !!tx.blockNumber;
    };
    exports.isTransactionConfirmed = isTransactionConfirmed;
    const registerSendTxEvents = (sendTxEventHandlers) => {
        const wallet = eth_wallet_1.Wallet.getClientInstance();
        wallet.registerSendTxEvents({
            transactionHash: (error, receipt) => {
                if (sendTxEventHandlers.transactionHash) {
                    sendTxEventHandlers.transactionHash(error, receipt);
                }
            },
            confirmation: (receipt) => {
                if (sendTxEventHandlers.confirmation) {
                    sendTxEventHandlers.confirmation(receipt);
                }
            },
        });
    };
    exports.registerSendTxEvents = registerSendTxEvents;
    async function getERC20Amount(wallet, token, decimals) {
        let erc20 = new eth_wallet_1.Erc20(wallet, token, decimals);
        return await erc20.balance;
    }
    exports.getERC20Amount = getERC20Amount;
    const approveERC20Max = async (token, spenderAddress, callback, confirmationCallback) => {
        let wallet = eth_wallet_1.Wallet.getClientInstance();
        let amount = new eth_wallet_1.BigNumber(2).pow(256).minus(1);
        let erc20 = new oswap_openswap_contract_1.Contracts.ERC20(wallet, token.address);
        exports.registerSendTxEvents({
            transactionHash: callback,
            confirmation: confirmationCallback
        });
        let receipt = await erc20.approve({
            spender: spenderAddress,
            amount
        });
        return receipt;
    };
    exports.approveERC20Max = approveERC20Max;
    const getERC20Allowance = async (token, spenderAddress) => {
        if (!(token === null || token === void 0 ? void 0 : token.address))
            return null;
        let wallet = eth_wallet_1.Wallet.getClientInstance();
        let erc20 = new oswap_openswap_contract_1.Contracts.ERC20(wallet, token.address);
        let allowance = await erc20.allowance({
            owner: wallet.account.address,
            spender: spenderAddress
        });
        return allowance;
    };
    exports.getERC20Allowance = getERC20Allowance;
});
define("@swap/global/utils/helper.ts", ["require", "exports", "@ijstech/eth-wallet", "@ijstech/components"], function (require, exports, eth_wallet_2, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.downloadJsonFile = exports.renderBalanceTooltip = exports.getWeekDays = exports.uniqWith = exports.formatNumberValue = exports.getParamsFromUrl = exports.numberToBytes32 = exports.padLeft = exports.toWeiInv = exports.getAPI = exports.limitDecimals = exports.limitInputNumber = exports.isInvalidInput = exports.isValidNumber = exports.formatNumberWithSeparators = exports.formatPercentNumber = exports.formatNumber = exports.compareDate = exports.formatUTCDate = exports.formatDate = exports.DefaultDateFormat = exports.DefaultDateTimeFormat = exports.SITE_ENV = void 0;
    var SITE_ENV;
    (function (SITE_ENV) {
        SITE_ENV["DEV"] = "dev";
        SITE_ENV["TESTNET"] = "testnet";
        SITE_ENV["MAINNET"] = "mainnet";
    })(SITE_ENV = exports.SITE_ENV || (exports.SITE_ENV = {}));
    exports.DefaultDateTimeFormat = 'DD/MM/YYYY HH:mm:ss';
    exports.DefaultDateFormat = 'DD/MM/YYYY';
    const formatDate = (date, customType, showTimezone) => {
        const formatType = customType || exports.DefaultDateFormat;
        const formatted = components_1.moment(date).format(formatType);
        if (showTimezone) {
            return `${formatted} (UTC+${components_1.moment().utcOffset() / 60})`;
        }
        return formatted;
    };
    exports.formatDate = formatDate;
    const formatUTCDate = (date, customType, showTimezone) => {
        const formatType = customType || exports.DefaultDateFormat;
        const formatted = components_1.moment(date).utc().format(formatType);
        return showTimezone ? `${formatted} (UTC)` : formatted;
    };
    exports.formatUTCDate = formatUTCDate;
    const compareDate = (fromDate, toDate) => {
        if (!toDate) {
            toDate = components_1.moment();
        }
        return components_1.moment(fromDate).isSameOrBefore(toDate);
    };
    exports.compareDate = compareDate;
    const formatNumber = (value, decimals) => {
        let val = value;
        const minValue = '0.0000001';
        if (typeof value === 'string') {
            val = new eth_wallet_2.BigNumber(value).toNumber();
        }
        else if (typeof value === 'object') {
            val = value.toNumber();
        }
        if (val != 0 && new eth_wallet_2.BigNumber(val).lt(minValue)) {
            return `<${minValue}`;
        }
        return exports.formatNumberWithSeparators(val, decimals || 4);
    };
    exports.formatNumber = formatNumber;
    const formatPercentNumber = (value, decimals) => {
        let val = value;
        if (typeof value === 'string') {
            val = new eth_wallet_2.BigNumber(value).toNumber();
        }
        else if (typeof value === 'object') {
            val = value.toNumber();
        }
        return exports.formatNumberWithSeparators(val, decimals || 2);
    };
    exports.formatPercentNumber = formatPercentNumber;
    const formatNumberWithSeparators = (value, precision) => {
        if (!value)
            value = 0;
        if (precision) {
            let outputStr = '';
            if (value >= 1) {
                outputStr = value.toLocaleString('en-US', { maximumFractionDigits: precision });
            }
            else {
                outputStr = value.toLocaleString('en-US', { maximumSignificantDigits: precision });
            }
            if (outputStr.length > 18) {
                outputStr = outputStr.substr(0, 18) + '...';
            }
            return outputStr;
            // let parts = parseFloat(value.toPrecision(precision)).toString().split(".");
            // parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            // return parts.join(".");
        }
        else {
            return value.toLocaleString('en-US');
            // let parts = value.toString().split(".");
            // parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            // return parts.join(".");
        }
    };
    exports.formatNumberWithSeparators = formatNumberWithSeparators;
    const isValidNumber = (value) => {
        const val = new eth_wallet_2.BigNumber(value);
        return val.gte(0);
    };
    exports.isValidNumber = isValidNumber;
    const isInvalidInput = (val) => {
        const value = new eth_wallet_2.BigNumber(val);
        if (value.lt(0))
            return true;
        return (val || '').toString().substring(0, 2) === '00' || val === '-';
    };
    exports.isInvalidInput = isInvalidInput;
    const limitInputNumber = (input, decimals) => {
        const amount = input.value;
        if (exports.isInvalidInput(amount)) {
            input.value = '0';
            return;
        }
        if (!new eth_wallet_2.BigNumber(amount).isNaN()) {
            input.value = exports.limitDecimals(amount, decimals || 18);
        }
    };
    exports.limitInputNumber = limitInputNumber;
    const limitDecimals = (value, decimals) => {
        let val = value;
        if (typeof value !== 'string') {
            val = val.toString();
        }
        let chart;
        if (val.includes('.')) {
            chart = '.';
        }
        else if (val.includes(',')) {
            chart = ',';
        }
        else {
            return value;
        }
        const parts = val.split(chart);
        let decimalsPart = parts[1];
        if (decimalsPart && decimalsPart.length > decimals) {
            parts[1] = decimalsPart.substr(0, decimals);
        }
        return parts.join(chart);
    };
    exports.limitDecimals = limitDecimals;
    async function getAPI(url, paramsObj) {
        let queries = '';
        if (paramsObj) {
            try {
                queries = new URLSearchParams(paramsObj).toString();
            }
            catch (err) {
                console.log('err', err);
            }
        }
        let fullURL = url + (queries ? `?${queries}` : '');
        const response = await fetch(fullURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        return response.json();
    }
    exports.getAPI = getAPI;
    const toWeiInv = (n, unit) => {
        if (new eth_wallet_2.BigNumber(n).eq(0))
            return new eth_wallet_2.BigNumber('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
        return new eth_wallet_2.BigNumber('1').shiftedBy((unit || 18) * 2).idiv(new eth_wallet_2.BigNumber(n).shiftedBy(unit || 18));
    };
    exports.toWeiInv = toWeiInv;
    const padLeft = function (string, chars, sign) {
        return new Array(chars - string.length + 1).join(sign ? sign : "0") + string;
    };
    exports.padLeft = padLeft;
    const numberToBytes32 = (value, prefix) => {
        if (!value)
            return;
        let v = value;
        if (typeof value == "number") {
            // covert to a hex string
            v = value.toString(16);
        }
        else if (/^[0-9]*$/.test(value)) {
            // assuming value to be a decimal number, value could be a hex
            v = new eth_wallet_2.BigNumber(value).toString(16);
        }
        else if (/^(0x)?[0-9A-Fa-f]*$/.test(value)) {
            // value already a hex
            v = value;
        }
        else if (eth_wallet_2.BigNumber.isBigNumber(value)) {
            v = value.toString(16);
        }
        v = v.replace("0x", "");
        v = exports.padLeft(v, 64);
        if (prefix)
            v = '0x' + v;
        return v;
    };
    exports.numberToBytes32 = numberToBytes32;
    const getParamsFromUrl = () => {
        const startIdx = window.location.href.indexOf("?");
        const search = window.location.href.substring(startIdx, window.location.href.length);
        const queryString = search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams;
    };
    exports.getParamsFromUrl = getParamsFromUrl;
    const formatNumberValue = (data, tokenMap) => {
        const { title, value, symbol, icon, prefix, isWrapped } = data;
        try {
            let limitDecimals = 18;
            if (symbol) {
                let symb = symbol;
                if (symb.includes('/')) {
                    symb = symb.split('/')[0];
                }
                if (symbol === 'USD') {
                    limitDecimals = 2;
                }
                else {
                    const tokenObj = Object.values(tokenMap).find((token) => token.symbol === symb);
                    if (tokenObj) {
                        limitDecimals = tokenObj.decimals || 18;
                    }
                }
            }
            const val = parseFloat(value);
            const minValue = 0.0001;
            let result;
            let tooltip = `${value}`;
            if (val === 0) {
                result = `0`;
            }
            else if (val < minValue) {
                if (prefix === '$') {
                    result = `< ${prefix}${minValue}`;
                }
                else if (prefix) {
                    result = `${prefix.replace('=', '')} < ${minValue}`;
                }
                else {
                    result = `< ${minValue}`;
                }
                tooltip = val.toLocaleString('en-US', { maximumFractionDigits: limitDecimals });
            }
            else {
                const stringValue = value.toString();
                const decimalsIndex = stringValue.indexOf('.');
                const length = decimalsIndex < 0 ? stringValue.length : stringValue.length - 1;
                let valueFormatted = val.toLocaleString('en-US', { maximumFractionDigits: limitDecimals });
                const arr = valueFormatted.split('.');
                valueFormatted = arr[0];
                if (arr[1]) {
                    valueFormatted = `${arr[0]}.${arr[1].substr(0, 4)}`;
                }
                if (length <= 7) {
                    result = valueFormatted;
                }
                else if (decimalsIndex > 7) {
                    result = `${valueFormatted.substr(0, 9)}...`;
                }
                else if (decimalsIndex > -1) {
                    result = valueFormatted;
                }
                else {
                    const finalVal = valueFormatted.substr(0, 13);
                    result = `${finalVal}${length > 10 ? '...' : ''}`;
                }
                if (result.length > 20 && !result.includes('...')) {
                    result = `${result.substr(0, 13)}...`;
                }
                // Format value for the tooltip
                const parts = stringValue.split('.');
                const intVal = parseInt(parts[0]).toLocaleString('en-US');
                tooltip = `${intVal}`;
                if (parts[1]) {
                    let decVal = parts[1];
                    if (parts[1].length > limitDecimals) {
                        decVal = parseFloat(`0.${parts[1]}`).toLocaleString('en-US', { maximumFractionDigits: limitDecimals });
                        if (decVal == 1) {
                            decVal = parts[1].substr(0, limitDecimals);
                        }
                        else {
                            decVal = decVal.substr(2);
                        }
                    }
                    tooltip += `.${decVal}`;
                }
            }
            if (icon) {
                result += ` <img width="20" src="${icon}" style="padding-bottom: 0.15rem" />`;
            }
            if (symbol) {
                result += ` ${symbol}`;
                tooltip += ` ${symbol}`;
            }
            if (prefix) {
                result = `${val < minValue ? '' : prefix}${result}`;
                tooltip = `${prefix}${tooltip}`;
            }
            if (title) {
                result = `${title}: ${result}`;
            }
            if (isWrapped) {
                result = `(${result})`;
            }
            if (symbol === 'USD') {
                return result;
            }
            else {
                return { result, tooltip };
            }
        }
        catch (_a) {
            return '-';
        }
    };
    exports.formatNumberValue = formatNumberValue;
    const uniqWith = (array, compareFn) => {
        const unique = [];
        for (const cur of array) {
            const isDuplicate = unique.some((oth) => compareFn(cur, oth));
            if (!isDuplicate)
                unique.push(cur);
        }
        return unique;
    };
    exports.uniqWith = uniqWith;
    const getWeekDays = () => {
        const d = new Date();
        d.setDate(d.getDate() - 7);
        let days = [];
        let day = d;
        for (let i = 0; i < 7; i++) {
            days.push(day.setDate(day.getDate() + 1));
        }
        return days;
    };
    exports.getWeekDays = getWeekDays;
    const renderBalanceTooltip = (params, tokenMap, isBold) => {
        const data = exports.formatNumberValue(params, tokenMap);
        if (typeof data === "object") {
            const { result, tooltip } = data;
            if (isBold) {
                return `<i-label class="bold" tooltip='${JSON.stringify({ content: tooltip })}'>${result}</i-label>`;
            }
            return `<i-label tooltip='${JSON.stringify({ content: tooltip })}'>${result}</i-label>`;
        }
        return data;
    };
    exports.renderBalanceTooltip = renderBalanceTooltip;
    const replacer = (key, value) => {
        if (['minLockTime', 'campaignStart', 'campaignEnd', 'perAddressCap', 'maxTotalLock', 'multiplier', 'initialReward', 'vestingPeriod', 'claimDeadline', 'vestingStartDate', 'rewardAmount', 'value'].includes(key)) {
            const val = Number(value);
            return isNaN(val) ? value : val;
        }
        return value;
    };
    const downloadJsonFile = (name, obj) => {
        const link = document.createElement("a");
        const text = JSON.stringify(obj, replacer, 2);
        link.download = name;
        const jsonContent = `data:application/json;charset=utf-8,${encodeURIComponent(text)}`;
        link.href = jsonContent;
        link.click();
    };
    exports.downloadJsonFile = downloadJsonFile;
});
define("@swap/global/utils/error.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseContractError = void 0;
    ///<amd-module name='@swap/global/utils/error.ts'/> 
    async function parseContractError(oMessage, tokens) {
        var _a;
        const staticMessageMap = {
            'execution reverted: OAXDEX: K': 'x * y = k Violated',
            'execution reverted: OAXDEX: FORBIDDEN': 'Forbidden',
            'execution reverted: OAXDEX: INSUFFICIENT_INPUT_AMOUNT': 'Insufficient input amount',
            'execution reverted: OAXDEX: INVALID_TO': 'Invalid to',
            'execution reverted: OAXDEX: INSUFFICIENT_LIQUIDITY': 'Insufficient liquidity',
            'execution reverted: OAXDEX: INSUFFICIENT_OUTPUT_AMOUNT': 'Insufficient output amount',
            'execution reverted: OAXDEX: PAIR PAUSED': 'Pair paused',
            'execution reverted: OAXDEX: GLOBALLY PAUSED': 'Globally paused',
            'execution reverted: OAXDEX: INSUFFICIENT_LIQUIDITY_BURNED': 'Insufficient liquidity burned',
            'execution reverted: OAXDEX: INSUFFICIENT_LIQUIDITY_MINTED': 'Insufficient liquidity minted',
            'execution reverted: OAXDEX: OVERFLOW': 'Overflow',
            'execution reverted: OAXDEX_Pair: INSUFFICIENT_LIQUIDITY': 'Insufficient liquidity',
            'execution reverted: OAXDEX_Pair: INSUFFICIENT_OUTPUT_AMOUNT': 'Insufficient output amount',
            'execution reverted: OAXDEX_Pair: INSUFFICIENT_INPUT_AMOUNT': 'Insufficient input amount',
            'execution reverted: OAXDEX: LOCKED': 'Locked',
            'execution reverted: OAXDEX: INVALID_SIGNATURE': 'Invalid signature',
            'execution reverted: OAXDEX: EXPIRED': 'Expired',
            'MetaMask Tx Signature: User denied transaction signature.': 'User denied transaction signature',
            'execution reverted: OracleAdaptor: Price outside allowed range': 'Circuit Breaker: Exceeds Price Protection Range',
            'execution reverted: PAIR_NOT_MATCH': 'Pair Not Match',
            'execution reverted: Cap exceeded': 'Trolls have been sold out',
            'execution reverted: No oracle found': 'No Oracle found',
            'execution reverted: Amount exceeds available fund': 'Insufficient liquidity',
        };
        return (_a = staticMessageMap[oMessage]) !== null && _a !== void 0 ? _a : `Unknown Error: ${oMessage}`;
        // switch (oMessage) {
        //     case 'execution reverted: OracleAdaptor: Exceessive amount':
        //         try {
        //             const tokenIn = tokens[0] === MAIN_TOKEN.symbol ? WETH9.address : tokens[0];
        //             const tokenOut = tokens[1] === MAIN_TOKEN.symbol ? WETH9.address : tokens[1];
        //             let oracleAdapterAddress = await eth.call('OSWAP_OracleFactory', Address['OSWAP_OracleFactory'], 'oracles', [tokenIn, tokenOut]);
        //             let maxVal = await eth.call('OSWAP_OracleChainlinkPriceGuardTestnet', oracleAdapterAddress, 'maxValue', [])
        //             maxVal = web3.utils.fromWei(maxVal);
        //             return `Exceeded Swap limit of ${maxVal} USD equivalent`;
        //         } catch {
        //             return '';
        //         }
        //     default:
        //         return '';
        // }
    }
    exports.parseContractError = parseContractError;
});
define("@swap/global/utils/pageBlock.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@swap/global/utils/approvalModel.ts", ["require", "exports", "@ijstech/eth-wallet", "@swap/global/utils/common.ts"], function (require, exports, eth_wallet_3, common_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ERC20ApprovalModel = exports.ApprovalStatus = void 0;
    ;
    var ApprovalStatus;
    (function (ApprovalStatus) {
        ApprovalStatus[ApprovalStatus["TO_BE_APPROVED"] = 0] = "TO_BE_APPROVED";
        ApprovalStatus[ApprovalStatus["APPROVING"] = 1] = "APPROVING";
        ApprovalStatus[ApprovalStatus["NONE"] = 2] = "NONE";
    })(ApprovalStatus = exports.ApprovalStatus || (exports.ApprovalStatus = {}));
    class ERC20ApprovalModel {
        constructor(options) {
            this.options = {
                sender: null,
                spenderAddress: '',
                payAction: async () => { },
                onToBeApproved: async (token) => { },
                onToBePaid: async (token) => { },
                onApproving: async (token, receipt, data) => { },
                onApproved: async (token, data) => { },
                onPaying: async (receipt, data) => { },
                onPaid: async (data) => { },
                onApprovingError: async (token, err) => { },
                onPayingError: async (err) => { }
            };
            this.checkAllowance = async (token, inputAmount) => {
                let allowance = await common_1.getERC20Allowance(token, this.options.spenderAddress);
                if (!allowance) {
                    await this.options.onToBePaid.bind(this.options.sender)(token);
                }
                else if (new eth_wallet_3.BigNumber(inputAmount).gt(allowance)) {
                    await this.options.onToBeApproved.bind(this.options.sender)(token);
                }
                else {
                    await this.options.onToBePaid.bind(this.options.sender)(token);
                }
            };
            this.doApproveAction = async (token, inputAmount, data) => {
                const txHashCallback = async (err, receipt) => {
                    if (err) {
                        await this.options.onApprovingError.bind(this.options.sender)(token, err);
                    }
                    else {
                        await this.options.onApproving.bind(this.options.sender)(token, receipt, data);
                    }
                };
                const confirmationCallback = async (receipt) => {
                    await this.options.onApproved.bind(this.options.sender)(token, data);
                    await this.checkAllowance(token, inputAmount);
                };
                common_1.approveERC20Max(token, this.options.spenderAddress, txHashCallback, confirmationCallback);
            };
            this.doPayAction = async (data) => {
                const txHashCallback = async (err, receipt) => {
                    if (err) {
                        await this.options.onPayingError.bind(this.options.sender)(err);
                    }
                    else {
                        await this.options.onPaying.bind(this.options.sender)(receipt, data);
                    }
                };
                const confirmationCallback = async (receipt) => {
                    await this.options.onPaid.bind(this.options.sender)(data);
                };
                common_1.registerSendTxEvents({
                    transactionHash: txHashCallback,
                    confirmation: confirmationCallback
                });
                await this.options.payAction.bind(this.options.sender)();
            };
            this.getAction = () => {
                return {
                    doApproveAction: this.doApproveAction,
                    doPayAction: this.doPayAction,
                    checkAllowance: this.checkAllowance
                };
            };
            this.options = options;
        }
        set spenderAddress(value) {
            this.options.spenderAddress = value;
        }
    }
    exports.ERC20ApprovalModel = ERC20ApprovalModel;
});
define("@swap/global/utils/swapInterface.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@swap/global/utils/index.ts", ["require", "exports", "@swap/global/utils/helper.ts", "@swap/global/utils/error.ts", "@swap/global/utils/common.ts", "@swap/global/utils/approvalModel.ts"], function (require, exports, helper_1, error_1, common_2, approvalModel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ERC20ApprovalModel = exports.ApprovalStatus = exports.getERC20Amount = exports.getERC20Allowance = exports.approveERC20Max = exports.registerSendTxEvents = exports.isTransactionConfirmed = exports.parseContractError = exports.SITE_ENV = exports.downloadJsonFile = exports.formatPercentNumber = exports.renderBalanceTooltip = exports.compareDate = exports.getWeekDays = exports.uniqWith = exports.formatNumberValue = exports.getParamsFromUrl = exports.numberToBytes32 = exports.toWeiInv = exports.isValidNumber = exports.isInvalidInput = exports.limitInputNumber = exports.limitDecimals = exports.formatUTCDate = exports.formatDate = exports.DefaultDateFormat = exports.DefaultDateTimeFormat = exports.formatNumberWithSeparators = exports.formatNumber = exports.getAPI = void 0;
    Object.defineProperty(exports, "getAPI", { enumerable: true, get: function () { return helper_1.getAPI; } });
    Object.defineProperty(exports, "formatNumber", { enumerable: true, get: function () { return helper_1.formatNumber; } });
    Object.defineProperty(exports, "formatNumberWithSeparators", { enumerable: true, get: function () { return helper_1.formatNumberWithSeparators; } });
    Object.defineProperty(exports, "DefaultDateTimeFormat", { enumerable: true, get: function () { return helper_1.DefaultDateTimeFormat; } });
    Object.defineProperty(exports, "DefaultDateFormat", { enumerable: true, get: function () { return helper_1.DefaultDateFormat; } });
    Object.defineProperty(exports, "formatDate", { enumerable: true, get: function () { return helper_1.formatDate; } });
    Object.defineProperty(exports, "formatUTCDate", { enumerable: true, get: function () { return helper_1.formatUTCDate; } });
    Object.defineProperty(exports, "limitDecimals", { enumerable: true, get: function () { return helper_1.limitDecimals; } });
    Object.defineProperty(exports, "limitInputNumber", { enumerable: true, get: function () { return helper_1.limitInputNumber; } });
    Object.defineProperty(exports, "isInvalidInput", { enumerable: true, get: function () { return helper_1.isInvalidInput; } });
    Object.defineProperty(exports, "isValidNumber", { enumerable: true, get: function () { return helper_1.isValidNumber; } });
    Object.defineProperty(exports, "toWeiInv", { enumerable: true, get: function () { return helper_1.toWeiInv; } });
    Object.defineProperty(exports, "numberToBytes32", { enumerable: true, get: function () { return helper_1.numberToBytes32; } });
    Object.defineProperty(exports, "getParamsFromUrl", { enumerable: true, get: function () { return helper_1.getParamsFromUrl; } });
    Object.defineProperty(exports, "formatNumberValue", { enumerable: true, get: function () { return helper_1.formatNumberValue; } });
    Object.defineProperty(exports, "uniqWith", { enumerable: true, get: function () { return helper_1.uniqWith; } });
    Object.defineProperty(exports, "getWeekDays", { enumerable: true, get: function () { return helper_1.getWeekDays; } });
    Object.defineProperty(exports, "compareDate", { enumerable: true, get: function () { return helper_1.compareDate; } });
    Object.defineProperty(exports, "renderBalanceTooltip", { enumerable: true, get: function () { return helper_1.renderBalanceTooltip; } });
    Object.defineProperty(exports, "formatPercentNumber", { enumerable: true, get: function () { return helper_1.formatPercentNumber; } });
    Object.defineProperty(exports, "downloadJsonFile", { enumerable: true, get: function () { return helper_1.downloadJsonFile; } });
    Object.defineProperty(exports, "SITE_ENV", { enumerable: true, get: function () { return helper_1.SITE_ENV; } });
    Object.defineProperty(exports, "parseContractError", { enumerable: true, get: function () { return error_1.parseContractError; } });
    Object.defineProperty(exports, "isTransactionConfirmed", { enumerable: true, get: function () { return common_2.isTransactionConfirmed; } });
    Object.defineProperty(exports, "registerSendTxEvents", { enumerable: true, get: function () { return common_2.registerSendTxEvents; } });
    Object.defineProperty(exports, "approveERC20Max", { enumerable: true, get: function () { return common_2.approveERC20Max; } });
    Object.defineProperty(exports, "getERC20Allowance", { enumerable: true, get: function () { return common_2.getERC20Allowance; } });
    Object.defineProperty(exports, "getERC20Amount", { enumerable: true, get: function () { return common_2.getERC20Amount; } });
    Object.defineProperty(exports, "ApprovalStatus", { enumerable: true, get: function () { return approvalModel_1.ApprovalStatus; } });
    Object.defineProperty(exports, "ERC20ApprovalModel", { enumerable: true, get: function () { return approvalModel_1.ERC20ApprovalModel; } });
});
define("@swap/global", ["require", "exports", "@swap/global/utils/index.ts"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.QueueType = exports.ABIKeys = void 0;
    ;
    exports.ABIKeys = {
        Factory: 'OAXDEX_Factory',
        Pair: 'OAXDEX_Pair',
        //New
        OracleFactory: 'OSWAP_OracleFactory',
        OraclePair: 'OSWAP_OraclePair',
        OracleLiquidityProvider: 'OSWAP_OracleLiquidityProvider',
        HybridRouterRegistry: 'OSWAP_HybridRouterRegistry',
        HybridRouter: 'OSWAP_HybridRouter2',
        RangeFactory: 'OSWAP_RangeFactory',
        RangePair: 'OSWAP_RangePair',
        RangeLiquidityProvider: 'OSWAP_RangeLiquidityProvider',
        OracleAdaptor: 'OSWAP_OracleAdaptor',
        RestrictedFactory: 'OSWAP_RestrictedFactory',
        RestrictedPair: 'OSWAP_RestrictedPair',
        RestrictedLiquidityProvider: 'OSWAP_RestrictedLiquidityProvider',
        ConfigStore: 'OSWAP_ConfigStore',
        PeggedOracleFactory: 'OSWAP_PeggedOracleFactory',
        PeggedOraclePair: 'OSWAP_PeggedOraclePair',
        PeggedOracleLiquidityProvider: 'OSWAP_PeggedOracleLiquidityProvider',
        //Old
        // OracleFactory: 'OAXDEX_OracleFactory',
        //RangeFactory: 'OAXDEX_RangeFactory',
        //RestrictedFactory: 'OAXDEX_RestrictedFactory',
        //OraclePair: 'OAXDEX_OraclePair',
        //RangePair: 'OAXDEX_RangePair',
        //RestrictedPair: 'OAXDEX_RestrictedPair',
        // OracleLiquidityProvider: 'OAXDEX_OracleLiquidityProvider',
        //RangeLiquidityProvider: 'OAXDEX_RangeLiquidityProvider',
        //RestrictedLiquidityProvider: 'OAXDEX_RestrictedLiquidityProvider',
        //ConfigStore: 'OAXDEX_ConfigStore',
        //OracleAdaptor: 'OAXDEX_OracleAdaptor',
        // HybridRouterRegistry: 'OAXDEX_HybridRouterRegistry',
        // HybridRouter: 'OAXDEX_HybridRouter2'
    };
    var QueueType;
    (function (QueueType) {
        QueueType[QueueType["PRIORITY_QUEUE"] = 0] = "PRIORITY_QUEUE";
        QueueType[QueueType["RANGE_QUEUE"] = 1] = "RANGE_QUEUE";
        QueueType[QueueType["GROUP_QUEUE"] = 2] = "GROUP_QUEUE";
        QueueType[QueueType["PEGGED_QUEUE"] = 3] = "PEGGED_QUEUE";
    })(QueueType = exports.QueueType || (exports.QueueType = {}));
    __exportStar(index_1, exports);
});
