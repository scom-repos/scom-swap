var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
define("@scom/scom-swap/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.swapStyle = void 0;
    const Theme = components_1.Styles.Theme.ThemeVars;
    const colorVar = {
        // primaryButton: 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box',
        // primaryGradient: 'linear-gradient(255deg,#f15e61,#b52082)',
        darkBg: '#181E3E 0% 0% no-repeat padding-box',
        // primaryDisabled: 'transparent linear-gradient(270deg,#351f52,#552a42) 0% 0% no-repeat padding-box !important'
    };
    exports.swapStyle = components_1.Styles.style({
        $nest: {
            '.btn-register': {
                padding: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                opacity: 1,
                color: Theme.colors.primary.contrastText,
                $nest: {
                    'i-icon': {
                        marginInline: '0.25rem',
                        display: 'flex',
                        alignItems: 'center',
                    }
                }
            },
            'i-icon': {
                display: 'inline-block'
            },
            '::-webkit-scrollbar': {
                width: '3px',
            },
            '::-webkit-scrollbar-thumb': {
                background: Theme.colors.primary.main,
                borderRadius: '5px',
            },
            '*': {
                boxSizing: 'border-box',
            },
            '.ml-auto': {
                marginLeft: 'auto'
            },
            '#swapContainer i-button': {
                fontWeight: 600,
                verticalAlign: 'middle',
                lineHeight: 1.5,
            },
            '#swapContainer i-button.disabled': {
                opacity: 0.4,
            },
            '#swapContainer i-button.btn-max:not(.disabled):hover': {
                transition: 'all .2s ease-out',
                background: 'var(--max-button-hover-background)',
                color: Theme.colors.primary.contrastText
            },
            '#swapContainer i-button:focus': {
                outline: 0,
                boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)'
            },
            '#swapContainer': {
                width: 720,
                maxWidth: '100%',
                minHeight: 340,
                padding: '1rem',
                marginInline: 'auto',
                $nest: {
                    '#btnToken': {
                        height: 'auto !important',
                        background: `${Theme.background.main} !important`,
                        padding: '0.5rem !important',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontWeight: 700,
                        lineHeight: 1.5,
                        alignSelf: 'center',
                        textAlign: 'center',
                        opacity: 1,
                        color: Theme.input.fontColor,
                        $nest: {
                            '&:not(.disabled):hover': {
                                color: Theme.input.fontColor,
                                // background: '#ffffff35'
                            },
                            '&> span': {
                                verticalAlign: 'middle',
                            },
                            '&> i-icon': {
                                maxWidth: 10,
                                height: '16px !important',
                                opacity: 0.5,
                                marginRight: 'unset',
                                fill: Theme.input.fontColor,
                                $nest: {
                                    'svg': {
                                        fill: `${Theme.input.fontColor} !important`
                                    }
                                }
                            },
                            '&> :not(:last-child)': {
                                marginRight: '0.5rem'
                            }
                        }
                    },
                    '.text-value': {
                        display: 'block',
                        $nest: {
                            '> *': {
                                fontSize: '1.25rem',
                                paddingRight: '0.25rem'
                            }
                        }
                    },
                    '.token-input': {
                        width: '100%'
                    },
                    '.token-input > input': {
                        width: '100%',
                        height: 'auto !important',
                        padding: '.375rem .75rem',
                        paddingRight: '0.25rem',
                        paddingLeft: 0,
                        borderRadius: '0.25rem',
                        border: 'none',
                        background: 'transparent',
                        color: Theme.input.fontColor,
                        fontSize: '1.125rem',
                        textAlign: 'right'
                    }
                }
            },
            '.swap-flex--col': {
                flexDirection: 'column',
                $nest: {
                    '& > i-vstack': {
                        width: '100% !important'
                    },
                    '.custom-ic--swap': {
                        margin: 'auto',
                        bottom: '0 !important',
                        transform: 'none !important'
                    }
                }
            },
            '.visibility-hidden': {
                visibility: 'hidden'
            },
            '.content-swap': {
                marginTop: '0.5rem',
                marginBottom: '1rem',
                borderRadius: '1rem'
            },
            'i-label.text--grey *': {
                color: Theme.text.primary,
                opacity: 0.55, // 'hsla(0,0%,100%,0.55)'
            },
            '.btn-max': {
                position: 'relative',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                padding: '0 0.5rem',
                marginLeft: '0.5rem',
                bottom: '1.5px',
                background: 'var(--max-button-background)',
                color: Theme.colors.primary.contrastText
            },
            '.bg-box': {
                margin: '0.5rem 0',
                border: '2px solid transparent',
                borderRadius: '1rem',
                $nest: {
                    '&.bg-box--active': {
                        borderColor: '#E53780'
                    }
                }
            },
            '.toggle-reverse': {
                margin: '1rem 0 0.5rem',
                fontSize: '20px',
                textAlign: 'center',
                $nest: {
                    '> .icon-swap': {
                        display: 'inline-flex',
                        padding: '0.25rem',
                    },
                    '.custom-ic--swap': {
                        bottom: 28,
                        transform: 'rotate(90deg)',
                        padding: '0.45rem !important'
                    }
                }
            },
            '.rounded-icon': {
                display: 'inline-flex',
                padding: '3px',
                background: Theme.input.background,
                border: '2px solid transparent',
                borderRadius: '50%',
                cursor: 'pointer'
            },
            '.swap-btn-container': {
                marginTop: 10,
                $nest: {
                    '.btn-swap': {
                        position: 'relative',
                        width: '100%',
                        borderRadius: '0.65rem',
                        fontSize: '1.125rem',
                        padding: '0.5rem 0.75rem',
                        opacity: 1,
                        color: Theme.colors.primary.contrastText
                    }
                }
            },
            // '#receiveCol': {
            //   maxWidth: 'calc(100% - 9rem)',
            // },
            '.hints': {
                display: 'flex',
                alignItems: 'center',
                marginTop: '-0.5rem',
                $nest: {
                    '*': {
                        fontSize: '0.8rem',
                        opacity: 0.9,
                    },
                    'i-label *': {
                        marginLeft: '0.25rem',
                    },
                },
            },
            '.chain-icon': {
                margin: '0.25rem 0.5rem 0 0',
                borderRadius: '50%',
                border: '2px solid transparent',
                padding: '0.25rem',
                cursor: 'pointer',
                filter: 'grayscale(1)',
                $nest: {
                    '&.icon-disabled': {
                        cursor: 'default',
                    },
                    '&.icon-selected': {
                        borderColor: Theme.colors.primary.main,
                        cursor: 'default',
                        filter: 'inherit',
                    },
                    'img': {
                        width: '32px',
                        height: '32px',
                    },
                },
            },
            '.chain-text': {
                whiteSpace: 'nowrap',
                overflow: 'hidden !important',
                textOverflow: 'ellipsis'
            },
            '.cursor-default': {
                cursor: 'default !important',
            },
            '.hidden': {
                display: 'none !important'
            },
            '.custom-md--view': {
                $nest: {
                    'i-label > *': {
                        fontSize: '.875rem',
                        wordBreak: 'normal'
                    },
                    '.i-modal_content': {
                        padding: '0 1rem 1rem',
                    },
                    '.flex-col': {
                        flexDirection: 'column',
                    },
                    'i-button': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '150px',
                        height: '50px !important',
                        fontWeight: 600,
                        borderRadius: 5,
                        margin: '0.5rem',
                    }
                }
            },
            '.custom-modal': {
                $nest: {
                    '.modal': {
                        background: Theme.background.modal,
                        width: 490,
                        maxWidth: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '1rem',
                        color: Theme.text.primary
                    },
                    '.i-modal_header': {
                        marginBottom: '1.5rem',
                        paddingBottom: '0.5rem',
                        borderBottom: `2px soid ${Theme.background.main}`,
                        color: Theme.colors.primary.main,
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        $nest: {
                            '&> span': {
                                color: Theme.colors.primary.main,
                            },
                            '&> i-icon': {
                                fill: `${Theme.colors.primary.main} !important`
                            },
                            '& ~ i-icon': {
                                display: 'inline-block',
                                margin: '0.75rem 0',
                                background: Theme.input.background,
                                border: '2px solid transparent',
                                borderRadius: '50%',
                                padding: '0.25rem'
                            }
                        }
                    },
                }
            },
            '#registerPairModal': {
                $nest: {
                    '.modal': {
                        background: Theme.background.modal,
                        width: 420,
                        maxWidth: '100%',
                        padding: '0.75rem 1rem 1.25rem 1rem',
                        borderRadius: '1rem',
                        color: Theme.text.primary
                    },
                    '.i-modal_header': {
                        marginBottom: '1.5rem',
                        paddingBottom: '0.5rem',
                        borderBottom: `2px soid ${Theme.background.main}`,
                        color: Theme.colors.primary.main,
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        $nest: {
                            '&> span': {
                                color: Theme.colors.primary.main,
                            },
                            '.i-modal-close': {
                                fill: `${Theme.colors.primary.main} !important`,
                            }
                        }
                    },
                }
            },
            '#swapModal': {
                $nest: {
                    '.icon-swap': {
                        margin: 0
                    },
                    'i-image:not(.rounded-icon)': {
                        display: 'inline-block',
                        marginRight: '0.5rem'
                    },
                    '#tokenReceiveValue': {
                        margin: '0 5px'
                    },
                    '#payOrReceiveValue': {
                        marginInline: '0.25rem',
                    },
                    '.text-primary *': {
                        color: Theme.colors.primary.main,
                    },
                    '.price-info': {
                        padding: '1rem'
                    },
                    '.arrow-down': {
                        display: 'inline-block',
                        margin: '0.75rem 0',
                        background: Theme.input.background,
                        border: '2px solid transparent',
                        borderRadius: '50%',
                        padding: '0.25rem'
                    },
                    '.arrow-down--chain': {
                        margin: '0.75rem 6rem !important',
                    },
                    '.token-value': {
                        marginLeft: 'auto',
                    },
                    '.token-value > *, #swapModal .token-name > *': {
                        fontSize: '1.1rem'
                    },
                    '.row-chain': {
                        display: 'flex',
                        alignItems: 'center',
                    },
                    'i-icon.custom-icon--fill': {
                        fill: Theme.input.fontColor,
                        $nest: {
                            'svg': {
                                fill: `${Theme.input.fontColor} !important`
                            }
                        }
                    }
                }
            },
            '#modalFees': {
                $nest: {
                    '.i-modal_header': {
                        marginBottom: '0.5rem !important',
                    },
                    '.i-modal_content': {
                        $nest: {
                            'i-label *': {
                                fontSize: '0.875rem',
                            },
                            'i-button': {
                                width: '150px',
                                paddingBlock: '0.25rem',
                                textAlign: 'center',
                            },
                        },
                    },
                },
            },
            '.btn-os': {
                background: 'var(--primary-button-background)',
                height: 'auto !important',
                color: Theme.text.primary,
                transition: 'background .3s ease',
                fontSize: '1rem',
                fontWeight: 'bold',
                $nest: {
                    'i-icon.loading-icon': {
                        marginInline: '0.25rem',
                        width: '16px !important',
                        height: '16px !important',
                    },
                    'i-icon.is-spin': {
                        fill: Theme.colors.primary.contrastText,
                        $nest: {
                            'svg': {
                                fill: Theme.colors.primary.contrastText
                            }
                        }
                    }
                },
            },
            '.btn-os:not(.disabled):not(.is-spinning):hover, .btn-os:not(.disabled):not(.is-spinning):focus': {
                background: 'var(--primary-button-hover-background)',
                // backgroundColor: 'transparent',
                boxShadow: 'none',
                opacity: .9
            },
            '.btn-os:not(.disabled):not(.is-spinning):focus': {
                boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)'
            },
            '.btn-os.disabled, .btn-os.is-spinning': {
                background: 'var(--primary-button-disabled-background)',
                opacity: 1
            },
            '.dark-modal > div > div': {
                background: colorVar.darkBg,
                borderRadius: 5
            }
        }
    });
});
define("@scom/scom-swap/global/utils/helper.ts", ["require", "exports", "@ijstech/eth-wallet"], function (require, exports, eth_wallet_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getAPI = exports.limitDecimals = exports.isInvalidInput = exports.formatNumberWithSeparators = exports.formatNumber = void 0;
    const formatNumber = (value, decimals) => {
        let val = value;
        const minValue = '0.0000001';
        if (typeof value === 'string') {
            val = new eth_wallet_1.BigNumber(value).toNumber();
        }
        else if (typeof value === 'object') {
            val = value.toNumber();
        }
        if (val != 0 && new eth_wallet_1.BigNumber(val).lt(minValue)) {
            return `<${minValue}`;
        }
        return (0, exports.formatNumberWithSeparators)(val, decimals || 4);
    };
    exports.formatNumber = formatNumber;
    const formatNumberWithSeparators = (value, precision) => {
        if (!value)
            value = 0;
        if (precision) {
            let outputStr = '';
            if (value >= 1) {
                const unit = Math.pow(10, precision);
                const rounded = Math.floor(value * unit) / unit;
                outputStr = rounded.toLocaleString('en-US', { maximumFractionDigits: precision });
            }
            else {
                outputStr = value.toLocaleString('en-US', { maximumSignificantDigits: precision });
            }
            if (outputStr.length > 18) {
                outputStr = outputStr.substring(0, 18) + '...';
            }
            return outputStr;
        }
        return value.toLocaleString('en-US');
    };
    exports.formatNumberWithSeparators = formatNumberWithSeparators;
    const isInvalidInput = (val) => {
        const value = new eth_wallet_1.BigNumber(val);
        if (value.lt(0))
            return true;
        return (val || '').toString().substring(0, 2) === '00' || val === '-';
    };
    exports.isInvalidInput = isInvalidInput;
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
});
define("@scom/scom-swap/global/utils/swapInterface.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/scom-swap/global/utils/index.ts", ["require", "exports", "@scom/scom-swap/global/utils/helper.ts"], function (require, exports, helper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isInvalidInput = exports.limitDecimals = exports.formatNumberWithSeparators = exports.formatNumber = exports.getAPI = void 0;
    Object.defineProperty(exports, "getAPI", { enumerable: true, get: function () { return helper_1.getAPI; } });
    Object.defineProperty(exports, "formatNumber", { enumerable: true, get: function () { return helper_1.formatNumber; } });
    Object.defineProperty(exports, "formatNumberWithSeparators", { enumerable: true, get: function () { return helper_1.formatNumberWithSeparators; } });
    Object.defineProperty(exports, "limitDecimals", { enumerable: true, get: function () { return helper_1.limitDecimals; } });
    Object.defineProperty(exports, "isInvalidInput", { enumerable: true, get: function () { return helper_1.isInvalidInput; } });
});
define("@scom/scom-swap/global/index.ts", ["require", "exports", "@scom/scom-swap/global/utils/index.ts"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApprovalStatus = void 0;
    var ApprovalStatus;
    (function (ApprovalStatus) {
        ApprovalStatus[ApprovalStatus["TO_BE_APPROVED"] = 0] = "TO_BE_APPROVED";
        ApprovalStatus[ApprovalStatus["APPROVING"] = 1] = "APPROVING";
        ApprovalStatus[ApprovalStatus["NONE"] = 2] = "NONE";
    })(ApprovalStatus = exports.ApprovalStatus || (exports.ApprovalStatus = {}));
    __exportStar(index_1, exports);
});
define("@scom/scom-swap/store/utils.ts", ["require", "exports", "@ijstech/components", "@ijstech/eth-wallet", "@scom/scom-token-list", "@scom/scom-network-list"], function (require, exports, components_2, eth_wallet_2, scom_token_list_1, scom_network_list_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getClientWallet = exports.getChainNativeToken = exports.hasMetaMask = exports.isClientWalletConnected = exports.getNetworkInfo = exports.State = exports.WalletPlugin = void 0;
    var WalletPlugin;
    (function (WalletPlugin) {
        WalletPlugin["MetaMask"] = "metamask";
        WalletPlugin["WalletConnect"] = "walletconnect";
    })(WalletPlugin = exports.WalletPlugin || (exports.WalletPlugin = {}));
    class State {
        constructor(options) {
            this.isExpertMode = false;
            this.slippageTolerance = 0.5;
            this.transactionDeadline = 30;
            this.infuraId = "";
            this.networkMap = {};
            this.dexInfoList = [];
            this.providerList = [];
            this.proxyAddresses = {};
            this.apiGatewayUrls = {};
            this.rpcWalletId = "";
            this.networkMap = (0, scom_network_list_1.default)();
            this.initData(options);
        }
        initRpcWallet(defaultChainId) {
            var _a, _b, _c;
            if (this.rpcWalletId) {
                return this.rpcWalletId;
            }
            const clientWallet = eth_wallet_2.Wallet.getClientInstance();
            const networkList = Object.values(((_a = components_2.application.store) === null || _a === void 0 ? void 0 : _a.networkMap) || []);
            const instanceId = clientWallet.initRpcWallet({
                networks: networkList,
                defaultChainId,
                infuraId: (_b = components_2.application.store) === null || _b === void 0 ? void 0 : _b.infuraId,
                multicalls: (_c = components_2.application.store) === null || _c === void 0 ? void 0 : _c.multicalls
            });
            this.rpcWalletId = instanceId;
            if (clientWallet.address) {
                const rpcWallet = eth_wallet_2.Wallet.getRpcWalletInstance(instanceId);
                rpcWallet.address = clientWallet.address;
            }
            return instanceId;
        }
        setProviderList(value) {
            this.providerList = value;
        }
        setDexInfoList(value) {
            this.dexInfoList = value;
        }
        getDexInfoList(options) {
            if (!options)
                return this.dexInfoList;
            const { key, chainId } = options;
            let dexList = this.dexInfoList;
            if (key) {
                dexList = dexList.filter(v => v.dexCode === key);
            }
            if (chainId) {
                dexList = dexList.filter(v => v.details.some(d => d.chainId === chainId));
            }
            return dexList;
        }
        getDexDetail(key, chainId) {
            for (const dex of this.dexInfoList) {
                if (dex.dexCode === key) {
                    const dexDetail = dex.details.find(v => v.chainId === chainId);
                    if (dexDetail) {
                        return dexDetail;
                    }
                }
            }
            return undefined;
        }
        getProxyAddress(chainId) {
            const _chainId = chainId || eth_wallet_2.Wallet.getInstance().chainId;
            const proxyAddresses = this.proxyAddresses;
            if (proxyAddresses) {
                return proxyAddresses[_chainId];
            }
            return null;
        }
        getProviderByKey(providerKey) {
            const providers = this.providerList || [];
            return providers.find(item => item.key === providerKey) || null;
        }
        getRpcWallet() {
            return this.rpcWalletId ? eth_wallet_2.Wallet.getRpcWalletInstance(this.rpcWalletId) : null;
        }
        isRpcWalletConnected() {
            const wallet = this.getRpcWallet();
            return wallet === null || wallet === void 0 ? void 0 : wallet.isConnected;
        }
        getChainId() {
            const rpcWallet = this.getRpcWallet();
            return rpcWallet === null || rpcWallet === void 0 ? void 0 : rpcWallet.chainId;
        }
        toggleExpertMode() {
            this.isExpertMode = !this.isExpertMode;
        }
        initData(options) {
            if (options.infuraId) {
                this.infuraId = options.infuraId;
            }
            if (options.networks) {
                this.setNetworkList(options.networks, options.infuraId);
            }
            if (options.proxyAddresses) {
                this.proxyAddresses = options.proxyAddresses;
            }
            if (options.apiGatewayUrls) {
                this.apiGatewayUrls = options.apiGatewayUrls;
            }
        }
        setNetworkList(networkList, infuraId) {
            const wallet = eth_wallet_2.Wallet.getClientInstance();
            this.networkMap = {};
            const defaultNetworkList = (0, scom_network_list_1.default)();
            const defaultNetworkMap = defaultNetworkList.reduce((acc, cur) => {
                acc[cur.chainId] = cur;
                return acc;
            }, {});
            for (let network of networkList) {
                const networkInfo = defaultNetworkMap[network.chainId];
                if (!networkInfo)
                    continue;
                if (infuraId && network.rpcUrls && network.rpcUrls.length > 0) {
                    for (let i = 0; i < network.rpcUrls.length; i++) {
                        network.rpcUrls[i] = network.rpcUrls[i].replace(/{InfuraId}/g, infuraId);
                    }
                }
                this.networkMap[network.chainId] = Object.assign(Object.assign({}, networkInfo), network);
                wallet.setNetworkInfo(this.networkMap[network.chainId]);
            }
        }
        async setApprovalModelAction(options) {
            const approvalOptions = Object.assign(Object.assign({}, options), { spenderAddress: '' });
            let wallet = this.getRpcWallet();
            this.approvalModel = new eth_wallet_2.ERC20ApprovalModel(wallet, approvalOptions);
            let approvalModelAction = this.approvalModel.getAction();
            return approvalModelAction;
        }
    }
    exports.State = State;
    const getNetworkInfo = (chainId) => {
        const networkMap = components_2.application.store["networkMap"];
        return networkMap[chainId];
    };
    exports.getNetworkInfo = getNetworkInfo;
    // wallet
    function isClientWalletConnected() {
        const wallet = eth_wallet_2.Wallet.getClientInstance();
        return wallet.isConnected;
    }
    exports.isClientWalletConnected = isClientWalletConnected;
    const hasMetaMask = function () {
        var _a;
        const wallet = eth_wallet_2.Wallet.getClientInstance();
        return ((_a = wallet === null || wallet === void 0 ? void 0 : wallet.clientSideProvider) === null || _a === void 0 ? void 0 : _a.name) === WalletPlugin.MetaMask;
    };
    exports.hasMetaMask = hasMetaMask;
    const getChainNativeToken = (chainId) => {
        return scom_token_list_1.ChainNativeTokenByChainId[chainId];
    };
    exports.getChainNativeToken = getChainNativeToken;
    function getClientWallet() {
        return eth_wallet_2.Wallet.getClientInstance();
    }
    exports.getClientWallet = getClientWallet;
});
define("@scom/scom-swap/store/cross-chain.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bridgeVaultConstantMap = exports.getBridgeVaultVersion = exports.MockOracleMap = exports.ProviderConfigMap = exports.crossChainSupportedChainIds = exports.crossChainNativeTokenList = exports.CrossChainAddressMap = exports.BridgeVaultGroupList = exports.baseRoute = void 0;
    const baseRoute = 'https://route.openswap.xyz';
    exports.baseRoute = baseRoute;
    const crossChainNativeTokenList = {
        42: { address: "ETH", decimals: 18, symbol: "ETH", name: 'ETH', isNative: true, wethAddress: "0xd0A1E359811322d97991E03f863a0C30C2cF029C" },
        56: { address: "BNB", decimals: 18, symbol: "BNB", name: 'BNB', isNative: true, wethAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" },
        97: { address: "BNB", decimals: 18, symbol: "BNB", name: 'BNB', isNative: true, wethAddress: "0xae13d989dac2f0debff460ac112a837c89baa7cd" },
        43113: { address: "AVAX", decimals: 18, symbol: "AVAX", name: 'AVAX', isNative: true, wethAddress: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c" },
        43114: { address: "AVAX", decimals: 18, symbol: "AVAX", name: 'AVAX', isNative: true, wethAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7" },
        80001: { address: "MATIC", decimals: 18, symbol: "MATIC", name: 'MATIC', isNative: true, wethAddress: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889" }
    };
    exports.crossChainNativeTokenList = crossChainNativeTokenList;
    var VaultType;
    (function (VaultType) {
        VaultType["Project"] = "Project";
        VaultType["Exchange"] = "Exchange";
    })(VaultType || (VaultType = {}));
    const BridgeVaultGroupList = [
        {
            "name": "USDT",
            "vaultType": VaultType.Exchange,
            "vaults": {
                // "42": {
                //   "tokenAddress": "0xDcdAFd9461c2df544F6E2165481E8174e45fEbD8",
                //   "vaultRegistryAddress": "0x9580C567daC0EC4D05bB64a078e6fCCDc2103B64",
                //   "vaultAddress": "0x07578ec965a54bfBdAA83db7261F442d315eC6c2",
                //   "softCap": 100000,
                // },
                "56": {
                    "tokenAddress": "0x55d398326f99059fF775485246999027B3197955",
                    "vaultRegistryAddress": "0x1026deABF37C452F8aF8672cC9B9181fab709154",
                    "vaultAddress": "0xE9CAAFD124831562423FE129b02e938Cc33B45E2",
                    "vaultDecimals": 18,
                    "softCap": 100000,
                },
                "97": {
                    "tokenAddress": "0x29386B60e0A9A1a30e1488ADA47256577ca2C385",
                    "vaultRegistryAddress": "0xABEe7701A960D4ab10456b33D3fCd606335A09B3",
                    "vaultAddress": "0x0574C45032FcCFB91a652D2800Fa5219343b4991",
                    "softCap": 100000,
                },
                "43113": {
                    "tokenAddress": "0xb9C31Ea1D475c25E58a1bE1a46221db55E5A7C6e",
                    "vaultRegistryAddress": "0xD12E87F7474442a7a6611f92E14C7F2303f97d6d",
                    "vaultAddress": "0xa9d579E1a07C44889daBd537cdb6C70840594e9B",
                    "softCap": 100000,
                },
                "43114": {
                    "tokenAddress": "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
                    "vaultRegistryAddress": "0x2e102E6E9546433aB9c2a32ddd6eAFDfE987910B",
                    "vaultAddress": "0x55570d7EcAeFF86a6425815def25447A8b14A222",
                    "vaultDecimals": 18,
                    "softCap": 100000,
                },
                "80001": {
                    "tokenAddress": "0xF6Bf7c1213fdCe4AA92e7c91865cD586891B9cF6",
                    "vaultRegistryAddress": "0x8E5fcD46C6Dc74180C89572bAd8822cC0Eff3622",
                    "vaultAddress": "0x90Dd6EF27dBB77CD55Da6818414F3A3185f6a7f6",
                    "softCap": 100000,
                },
            }
        },
        {
            "name": "OSWAP",
            "vaultType": VaultType.Project,
            "vaults": {
                // "42": {
                //   "tokenAddress": "0x28A6a9079fA8e041179cD13F4652af2B315b6fd8",
                //   "vaultRegistryAddress": "0x911567173f33377784a934DC071a999F1dA4bd0C",
                //   "vaultAddress": "0x13c682d5F11927c24022a743B0510A7C23649667",
                //   "softCap": 100000,
                // },
                "56": {
                    "tokenAddress": "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
                    "vaultRegistryAddress": "0xd8f7a9E2cE096670A27238487a62e1e000334F81",
                    "vaultAddress": "0x65d6d677e102C2758224a797f7fb2b60DBeA8635",
                    "softCap": 30000,
                    "vaultDecimals": 18
                },
                "97": {
                    "tokenAddress": "0x45eee762aaeA4e5ce317471BDa8782724972Ee19",
                    "vaultRegistryAddress": "0xEdA5F1946b0524d60EaB3DB0CC40575CeEBCa749",
                    "vaultAddress": "0xa27D23fAe232eb0d0965299A9C41Ef3d1156020D",
                    "softCap": 30000,
                },
                "43113": {
                    "tokenAddress": "0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C",
                    "vaultRegistryAddress": "0x04dbb0174381a007A3EAbA8C4D52283dA20A8B8c",
                    "vaultAddress": "0x1b6196C1d2b5bfc9b89d914990d2bD4a07E92a26",
                    "fixedStakingApr": "18.25",
                    "softCap": 30000,
                },
                "43114": {
                    "tokenAddress": "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
                    "vaultRegistryAddress": "0x39dfbdF2a8b4719D009F3CEE1d000899FeD8B00a",
                    "vaultAddress": "0x8Af3e8596acE65D9c1EDE6d5356a34eAb46a46f5",
                    "vaultDecimals": 18,
                    "softCap": 30000,
                },
                "80001": {
                    "tokenAddress": "0xA9d603421e2777b8BEa685272611A01fF3bc6523",
                    "vaultRegistryAddress": "0x4c0f2C0acb7a5728a75EE35820Ed14e98F24e8b9",
                    "vaultAddress": "0x2ED4CE8f09F606ea253bF57c45e83d8BD45Ce572",
                    "softCap": 100000,
                },
            }
        },
        {
            // DEPRECATED VAULT
            "name": "OSWAP",
            "deprecated": true,
            "vaultType": VaultType.Project,
            "vaults": {
                "43113": {
                    "tokenAddress": "0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C",
                    "vaultRegistryAddress": "0xc8fC05a8e9D6dA2FF6395202b28eEbA4e5B21004",
                    "vaultAddress": "0x67565ACa8abcc5C94b3E934AdC5C6965b3ed7F89"
                },
                "43114": {
                    "tokenAddress": "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
                    "vaultRegistryAddress": "",
                    "vaultAddress": "0x547C8B68Cb36410FFDceE6Ad4bA0c64FD21085Bb",
                },
            }
        },
    ];
    exports.BridgeVaultGroupList = BridgeVaultGroupList;
    const CrossChainAddressMap = {
        // 42: {
        //   wrapperAddress: '0x8ad7a50FA4647995126988c7fCEa242Bae2D832F'
        // },
        56: {
            wrapperAddress: '0xce194324a8ddaf43e5c00f38593f37c9f21ed297',
        },
        97: {
            wrapperAddress: '0x97ACbBCe88c6358496800893397ABf5d071Af3A3'
        },
        43113: {
            wrapperAddress: '0xA8e373C6f31280eAFC93AF14df4a6663A56c09a5'
        },
        43114: {
            wrapperAddress: '0xcD050070b53924E1965418d7D940fa2ABB4302f3',
        },
        80001: {
            wrapperAddress: '0x788a9036b682AdB247A30Ec3628DE11735B67718'
        }
    };
    exports.CrossChainAddressMap = CrossChainAddressMap;
    // Dependent
    const MockOracleMap = {
        // 42: {
        //   '0x28a6a9079fa8e041179cd13f4652af2b315b6fd8': '0x226021E3582c89eF9a338be069dEcFD43acF0269',  //OSWAP 
        //   '0xdcdafd9461c2df544f6e2165481e8174e45febd8': '0xEF4Faa48Ee32E2D47503a821eb7E8607D52489AC', //USDT
        // },
        56: {
            '0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93': '0xd9df1285e2effbaaa580513b256bd21c041973f7',
            '0x55d398326f99059fF775485246999027B3197955': '0x6979c00cc49e0b5e77a920b25a0e16445b0f665a', // USDT
        },
        97: {
            '0x45eee762aaea4e5ce317471bda8782724972ee19': '0x50C41443c3F05d469644675235249F375a5AA622',
            '0x29386b60e0a9a1a30e1488ada47256577ca2c385': '0x6af1CdfBe372C922405C0CD9003CE7758250E8E5', //USDT
        },
        43113: {
            '0x78d9d80e67bc80a11efbf84b7c8a65da51a8ef3c': '0xe4dfc0E5772405483F71FE1c234290d62C102e02',
            '0xb9c31ea1d475c25e58a1be1a46221db55e5a7c6e': '0xA79D4C012AaeafD45630af1298DC3e18596fF081', //USDT
        },
        43114: {
            '0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93': '0xd9df1285e2effbaaa580513b256bd21c041973f7',
            '0xc7198437980c041c805A1EDcbA50c1Ce5db95118': '0x6979c00cc49e0b5e77a920b25a0e16445b0f665a', // USDT
        },
        80001: {
            '0xA9d603421e2777b8BEa685272611A01fF3bc6523': '0x7d564Ca1A9fb5a6D2275e62A97333AdaA5d2Cbe6',
            '0xf6bf7c1213fdce4aa92e7c91865cd586891b9cf6': '0xc2817961e17E24853856cC355E902C5D1B8f07E9', //USDT
        }
    };
    exports.MockOracleMap = MockOracleMap;
    const crossChainSupportedChainIds = [
        { chainId: 56 },
        { chainId: 97, isTestnet: true },
        { chainId: 43113, isTestnet: true },
        { chainId: 43114 },
        { chainId: 80001, isTestnet: true },
    ];
    exports.crossChainSupportedChainIds = crossChainSupportedChainIds;
    const ProviderConfigMap = {
        OpenSwap: {
            key: 'OpenSwap',
            dexId: 1,
            supportedChains: [42, 56, 97, 4002, 43113, 43114, 137, 80001, 13370, 338, 42161, 421613]
        },
        Uniswap: {
            key: 'Uniswap',
            dexId: 10,
            supportedChains: [1, 42]
        },
        SushiSwap: {
            key: 'SushiSwap',
            dexId: 8,
            supportedChains: [1, 42, 137, 250, 43113, 43114, 42161]
        },
        PancakeSwap: {
            key: 'PancakeSwap',
            dexId: 2,
            supportedChains: [56, 97]
        },
        BakerySwap: {
            key: 'BakerySwap',
            dexId: 3,
            supportedChains: [56, 97]
        },
        BurgerSwap: {
            key: 'BurgerSwap',
            dexId: 4,
            supportedChains: []
        },
        Oracle: {
            key: 'Oracle',
            dexId: 5,
            supportedChains: [56, 97, 43113, 43114]
        },
        IFSwapV1: {
            key: 'IFSwapV1',
            dexId: 7,
            supportedChains: [56]
        },
        IFSwapV3: {
            key: 'IFSwapV3',
            dexId: 18,
            supportedChains: [56]
        },
        Hybrid: {
            key: 'Hybrid',
            dexId: 0,
            supportedChains: [42, 56, 97, 43113, 43114]
        },
        QuickSwap: {
            key: 'QuickSwap',
            dexId: 9,
            supportedChains: [137]
        },
        BiSwap: {
            key: 'BiSwap',
            dexId: 11,
            supportedChains: [56]
        },
        Pangolin: {
            key: 'Pangolin',
            dexId: 12,
            supportedChains: [43113, 43114]
        },
        TraderJoe: {
            key: 'TraderJoe',
            dexId: 13,
            supportedChains: [43114]
        },
        SpiritSwap: {
            key: 'SpiritSwap',
            dexId: 15,
            supportedChains: [250]
        },
        SpookySwap: {
            key: 'SpookySwap',
            dexId: 14,
            supportedChains: [250]
        }
    };
    exports.ProviderConfigMap = ProviderConfigMap;
    const getBridgeVaultVersion = (chainId) => {
        const isTestnet = crossChainSupportedChainIds.find(v => v.chainId === chainId && v.isTestnet);
        // Testnet
        if (isTestnet)
            return '0.1.9';
        // Mainnet
        return '1.1.1';
    };
    exports.getBridgeVaultVersion = getBridgeVaultVersion;
    const bridgeVaultConstantMap = BridgeVaultGroupList.reduce((acc, cur) => {
        if (cur.deprecated)
            return acc;
        if (acc[cur.name] == null)
            acc[cur.name] = {};
        Object.entries(cur.vaults).forEach(([chainId, v]) => {
            acc[cur.name][chainId] = v;
        });
        return acc;
    }, {});
    exports.bridgeVaultConstantMap = bridgeVaultConstantMap;
});
define("@scom/scom-swap/store/index.ts", ["require", "exports", "@scom/scom-token-list", "@scom/scom-swap/store/utils.ts", "@scom/scom-swap/store/cross-chain.ts"], function (require, exports, scom_token_list_2, utils_1, cross_chain_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSupportedTokens = exports.getWETH = void 0;
    const getWETH = (chainId) => {
        let wrappedToken = scom_token_list_2.WETHByChainId[chainId];
        return wrappedToken;
    };
    exports.getWETH = getWETH;
    const getSupportedTokens = (tokens, chainId) => {
        return tokens.filter(token => token.chainId === chainId) || [];
    };
    exports.getSupportedTokens = getSupportedTokens;
    __exportStar(utils_1, exports);
    __exportStar(cross_chain_1, exports);
});
define("@scom/scom-swap/crosschain-utils/crosschain-utils.types.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/scom-swap/crosschain-utils/API.ts", ["require", "exports", "@scom/scom-swap/global/index.ts", "@scom/scom-swap/store/index.ts", "@ijstech/eth-wallet", "@scom/oswap-openswap-contract", "@scom/oswap-cross-chain-bridge-contract", "@scom/oswap-chainlink-contract", "@scom/scom-token-list", "@ijstech/eth-contract"], function (require, exports, index_2, index_3, eth_wallet_3, oswap_openswap_contract_1, oswap_cross_chain_bridge_contract_1, oswap_chainlink_contract_1, scom_token_list_3, eth_contract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getOraclePriceMap = exports.getVaultAssetBalance = exports.getBondsInBridgeVault = exports.getBridgeVault = exports.getAvailableRouteOptions = exports.createBridgeVaultOrder = exports.getTargetChainTokenInfoObj = exports.getTargetChainTokenMap = exports.getTokenByVaultAddress = void 0;
    const routeAPI = index_3.baseRoute + '/trading/v1/cross-chain-route';
    const GetBridgeVaultAPI = index_3.baseRoute + '/trading/v1/bridge-vault';
    const GetBondsInBridgeVaultAPI = index_3.baseRoute + '/trading/v1/bonds-by-chain-id-and-vault-troll-registry';
    const getTokenByVaultAddress = (chainId, vaultAddress) => {
        if (!chainId)
            return null;
        let vaultTokenMap = getVaultTokenMap();
        let tokenAddress = vaultTokenMap[chainId][vaultAddress.toLowerCase()];
        let tokenMap = getTargetChainTokenMap(chainId);
        let token = tokenMap[tokenAddress === null || tokenAddress === void 0 ? void 0 : tokenAddress.toLowerCase()];
        return token;
    };
    exports.getTokenByVaultAddress = getTokenByVaultAddress;
    const getTargetChainTokenMap = (chainId) => {
        let tokenList = scom_token_list_3.tokenStore.getTokenList(chainId);
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
                v = Object.assign(Object.assign({}, index_3.crossChainNativeTokenList[chainId]), { chainId, isNative: true });
            tokenMap["" + v.address] = v;
        });
        return tokenMap;
    };
    exports.getTargetChainTokenMap = getTargetChainTokenMap;
    const initCrossChainWallet = (chainId) => {
        const wallet = eth_wallet_3.Wallet.getClientInstance();
        const networkInfo = (0, index_3.getNetworkInfo)(chainId);
        let rpcEndpoint = networkInfo.rpcUrls[0];
        let crossChainWallet = new eth_wallet_3.Wallet(rpcEndpoint, { address: wallet.address });
        return crossChainWallet;
    };
    const getTargetChainTokenInfoObj = async (chainId) => {
        let targetChainWallet = initCrossChainWallet(chainId);
        let balances = {};
        let tokenMap = getTargetChainTokenMap(chainId);
        if (!chainId || !scom_token_list_3.DefaultTokens[chainId])
            return { tokenMap, balances };
        const tokenList = scom_token_list_3.tokenStore.getTokenList(chainId).filter((token) => token.address);
        const erc20TokenList = tokenList.filter(token => token.address);
        const nativeToken = tokenList.find(token => !token.address);
        try {
            const erc20 = new eth_wallet_3.Contracts.ERC20(targetChainWallet);
            const data = targetChainWallet.encodeFunctionCall(erc20, 'balanceOf', [targetChainWallet.address]);
            const result = await targetChainWallet.multiCall(erc20TokenList.map(v => {
                return {
                    to: v.address,
                    data
                };
            }));
            if (result) {
                for (let i = 0; i < erc20TokenList.length; i++) {
                    const token = erc20TokenList[i];
                    if (token.address) {
                        balances[token.address.toLowerCase()] = new eth_wallet_3.BigNumber(result.results[i]).shiftedBy(-token.decimals).toFixed();
                    }
                }
                if (nativeToken) {
                    let balance = (await targetChainWallet.balance).toFixed();
                    balances[nativeToken.symbol] = balance;
                }
            }
            else {
                let promises = [];
                promises.push(...tokenList.map(async (token, index) => {
                    try {
                        if (token.address) {
                            let erc20 = new eth_wallet_3.Erc20(targetChainWallet, token.address.toLowerCase(), token.decimals);
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
                    }
                }));
                await Promise.all(promises);
            }
        }
        catch (error) { }
        return {
            tokenMap,
            balances
        };
    };
    exports.getTargetChainTokenInfoObj = getTargetChainTokenInfoObj;
    const getVaultTokenMap = () => {
        let vaultTokenMap = {};
        index_3.BridgeVaultGroupList.forEach((vaultGroup) => {
            for (const [chainId, vault] of Object.entries(vaultGroup.vaults)) {
                vaultTokenMap[chainId] = vaultTokenMap[chainId] || {};
                vaultTokenMap[chainId][vault.vaultAddress.toLowerCase()] = vault.tokenAddress.toLowerCase();
            }
        });
        return vaultTokenMap;
    };
    const getBridgeVault = async (chainId, vaultAddress) => {
        let res = await (0, index_2.getAPI)(GetBridgeVaultAPI, { chainId, address: vaultAddress });
        return res;
    };
    exports.getBridgeVault = getBridgeVault;
    const getBondsInBridgeVault = async (state, chainId, vaultTrollRegistry, version = (0, index_3.getBridgeVaultVersion)(state.getChainId())) => {
        let res = await (0, index_2.getAPI)(GetBondsInBridgeVaultAPI, { version, chainId, vaultTrollRegistry });
        return Array.isArray(res) ? res : [];
    };
    exports.getBondsInBridgeVault = getBondsInBridgeVault;
    // Bridge Swap
    const createBridgeVaultOrder = async (state, params) => {
        try {
            const { vaultAddress, targetChainId, tokenIn, tokenOut, amountIn, minAmountOut, sourceRouteInfo } = params;
            const wallet = eth_wallet_3.Wallet.getClientInstance();
            const transactionDeadlineInMinutes = state.transactionDeadline;
            const transactionDeadline = Math.floor(Date.now() / 1000 + (transactionDeadlineInMinutes * 60));
            const slippageTolerance = state.slippageTolerance;
            const amountInTokenAmount = eth_wallet_3.Utils.toDecimals(amountIn, tokenIn.decimals);
            const minAmountOutTokenAmount = eth_wallet_3.Utils.toDecimals(minAmountOut, tokenOut.decimals).dp(0, 1);
            if (tokenOut.isNative) {
                tokenOut.address = eth_contract_1.nullAddress;
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
                const wrapperAddress = index_3.CrossChainAddressMap[chainId].wrapperAddress;
                const wrapperContract = new oswap_cross_chain_bridge_contract_1.Contracts.OSWAP_RouterVaultWrapper(wallet, wrapperAddress);
                if (!(sourceVaultToken === null || sourceVaultToken === void 0 ? void 0 : sourceVaultToken.decimals)) {
                    throw new Error("Missing Source Vault Token Decimals");
                }
                newOrder.inAmount = new eth_wallet_3.BigNumber(sourceRouteInfo.amountOut).shiftedBy(sourceVaultToken.decimals).times(1 - slippageTolerance / 100).dp(0, 1);
                if (tokenIn.isNative) {
                    const swapExactETHForTokenParams = {
                        pair: sourceRouteInfo.pairs,
                        vault: vaultAddress,
                        deadline: transactionDeadline,
                        order: newOrder
                    };
                    receipt = await wrapperContract.swapExactETHForTokens(swapExactETHForTokenParams, eth_wallet_3.Utils.toDecimals(amountIn, 18));
                }
                else {
                    const swapExactTokenForTokensParams = {
                        pair: sourceRouteInfo.pairs,
                        vault: vaultAddress,
                        amountIn: eth_wallet_3.Utils.toDecimals(amountIn, tokenIn.decimals),
                        deadline: transactionDeadline,
                        order: newOrder
                    };
                    receipt = await wrapperContract.swapExactTokensForTokens(swapExactTokenForTokensParams);
                }
            }
            else {
                const vaultContract = new oswap_cross_chain_bridge_contract_1.Contracts.OSWAP_BridgeVault(wallet, vaultAddress);
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
        let fromAmount = new eth_wallet_3.BigNumber(0);
        let toAmount = new eth_wallet_3.BigNumber(0);
        let minReceivedMaxSold = 0;
        let priceImpact = 0;
        let price = 0;
        let priceSwap = 0;
        let tradeFee = 0;
        let fees;
        let isApproveButtonShown = false;
        try {
            toAmount = new eth_wallet_3.BigNumber(routeObj.targetRouteObj.amountOut);
            if (toAmount.isZero())
                return null;
            minReceivedMaxSold = toAmount.times(1 - slippageTolerance / 100).toNumber();
            fromAmount = firstInput;
            price = new eth_wallet_3.BigNumber(fromAmount).div(toAmount).toNumber();
            priceSwap = new eth_wallet_3.BigNumber(1).div(price).toNumber();
            // Fee Structure - in InToken
            let sourceRoutingPrice = routeObj.sourceRouteObj ? routeObj.sourceRouteObj.price : 1;
            fees = {
                sourceRouteLiquidityFee: routeObj.sourceRouteObj ? new eth_wallet_3.BigNumber(routeObj.sourceRouteObj.tradeFee).times(fromAmount).toNumber() : 0,
                targetRouteLiquidityFee: new eth_wallet_3.BigNumber(routeObj.targetRouteObj.tradeFee).times(vaultTokenToTargetChain).times(sourceRoutingPrice).toNumber(),
                baseFee: new eth_wallet_3.BigNumber(bridgeFees.baseFee).times(sourceRoutingPrice).toNumber(),
                transactionFee: new eth_wallet_3.BigNumber(bridgeFees.transactionFee).times(sourceRoutingPrice).toNumber(),
                protocolFee: new eth_wallet_3.BigNumber(bridgeFees.protocolFee).times(sourceRoutingPrice).toNumber(),
                imbalanceFee: new eth_wallet_3.BigNumber(bridgeFees.imbalanceFee).times(sourceRoutingPrice).toNumber()
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
        let fee = new eth_wallet_3.BigNumber(0);
        let priceImpact = new eth_wallet_3.BigNumber(0);
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
    const checkIsApproveButtonShown = async (state, tokenIn, fromInput, address) => {
        if (!state.isRpcWalletConnected())
            return false;
        const wallet = eth_wallet_3.Wallet.getClientInstance();
        let erc20 = new oswap_openswap_contract_1.Contracts.OSWAP_ERC20(wallet, tokenIn.address);
        let allowance = await erc20.allowance({
            param1: wallet.address,
            param2: address
        });
        return fromInput.gt(allowance);
    };
    const getAvailableRouteOptions = async (state, params, getTradeFeeMap, getExtendedRouteObjData) => {
        var _a, _b;
        let { fromChainId, toChainId, tokenIn, tokenOut, amountIn } = params;
        // Handle native token
        let isTokenInNative = false;
        let isTokenOutNative = false;
        if (tokenIn.isNative) {
            isTokenInNative = true;
            tokenIn.address = index_3.crossChainNativeTokenList[fromChainId].wethAddress;
        }
        if (tokenOut.isNative) {
            tokenOut.address = index_3.crossChainNativeTokenList[toChainId].wethAddress;
        }
        const tradeFeeMap = await getTradeFeeMap(state);
        const routeObjArr = await (0, index_2.getAPI)(routeAPI, {
            fromChainId,
            toChainId,
            tokenIn: tokenIn.address,
            tokenOut: tokenOut.address,
            amountIn: eth_wallet_3.Utils.toDecimals(amountIn, tokenIn.decimals),
            version: (0, index_3.getBridgeVaultVersion)(state.getChainId())
        });
        if (!routeObjArr || !routeObjArr.routes)
            return [];
        const composeRoutes = async (routeObj, chainId, fromAmount) => {
            const providerConfigByDexId = Object.values(index_3.ProviderConfigMap)
                .filter(({ supportedChains }) => supportedChains === null || supportedChains === void 0 ? void 0 : supportedChains.includes(chainId))
                .reduce((acc, cur) => {
                if (cur.dexId || cur.dexId === 0)
                    acc[cur.dexId] = cur;
                return acc;
            }, {});
            let dexId = [5, 6].includes(routeObj.dexId) ? 5 : routeObj.dexId;
            let bestRouteObj;
            bestRouteObj = {
                pairs: routeObj.route.map(v => v.address),
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
            let amountOut = eth_wallet_3.Utils.fromDecimals(routeObj.amountOut, routeObj.tokens[routeObj.tokens.length - 1].decimals);
            let swapPrice = new eth_wallet_3.BigNumber(fromAmount).div(amountOut);
            let extendedData = bestRouteObj.pairs.length !== 0 ? await getExtendedRouteObjData(bestRouteObj, tradeFeeMap, swapPrice, true) : await getExtendedRouteObjDataForDirectRoute(bestRouteObj, swapPrice);
            let provider = providerConfigByDexId[dexId].key;
            let key = provider + '|' + (routeObj.isDirectRoute ? '0' : '1');
            bestRouteObj = Object.assign(Object.assign({}, extendedData), { amountOut,
                provider,
                key, queueType: routeObj.queueType });
            return bestRouteObj;
        };
        let bestRouteObjArr = [];
        let wrapperAddress = index_3.CrossChainAddressMap[fromChainId].wrapperAddress; //TODO: Return from API
        for (let i = 0; i < routeObjArr['routes'].length; i++) {
            let routeObj = routeObjArr['routes'][i];
            let sourceVaultToken = getTokenByVaultAddress(fromChainId, routeObj.vault);
            let targetVaultAddresses = (_b = (_a = index_3.BridgeVaultGroupList.filter((v) => {
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
                acc[key] = new eth_wallet_3.BigNumber(value).shiftedBy(-targetVaultToken.decimals);
                return acc;
            }, {});
            amountIn = new eth_wallet_3.BigNumber(amountIn);
            let sourceRouteObj = routeObj.sourceRoute ? await composeRoutes(routeObj.sourceRoute, fromChainId, amountIn) : null;
            let vaultTokenFromSourceChain = routeObj.sourceRoute ? sourceRouteObj.amountOut : amountIn;
            let bridgeFee = new eth_wallet_3.BigNumber(fees.baseFee).plus(fees.protocolFee).plus(fees.transactionFee).plus(fees.imbalanceFee);
            let vaultTokenToTargetChain = new eth_wallet_3.BigNumber(vaultTokenFromSourceChain).minus(bridgeFee).toFixed();
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
            bestRouteObj = await composeRouteObjBridge(bestRouteObj, amountIn, new eth_wallet_3.BigNumber(vaultTokenToTargetChain), fees, state.slippageTolerance);
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
        // Only direct token swap is enabled
        bestRouteObjArr = bestRouteObjArr.filter(v => !v.sourceRouteObj && v.targetRouteObj.pairs.length === 0);
        bestRouteObjArr = bestRouteObjArr.sort((a, b) => a.toAmount.lt(b.toAmount) ? 1 : -1);
        if (bestRouteObjArr[0] && !isTokenInNative)
            bestRouteObjArr[0].isApproveButtonShown = await checkIsApproveButtonShown(state, tokenIn, new eth_wallet_3.BigNumber(amountIn), bestRouteObjArr[0].contractAddress);
        return bestRouteObjArr;
    };
    exports.getAvailableRouteOptions = getAvailableRouteOptions;
    // Return the current vault asset balance by given chainId and address
    const getVaultAssetBalance = async (chainId, vaultAddress) => {
        let targetChainWallet = initCrossChainWallet(chainId);
        const vault = new oswap_cross_chain_bridge_contract_1.Contracts.OSWAP_BridgeVault(targetChainWallet, vaultAddress);
        const asset = new eth_wallet_3.Contracts.ERC20(targetChainWallet, await vault.asset());
        return (await asset.balanceOf(vault.address));
    };
    exports.getVaultAssetBalance = getVaultAssetBalance;
    const getOraclePriceMap = async (chainId) => {
        const oraclePriceMap = {};
        const wallet = initCrossChainWallet(chainId);
        await Promise.all(Object.entries(index_3.MockOracleMap[chainId]).map(async ([token, oracle]) => {
            let mockOracleContract = new oswap_chainlink_contract_1.Contracts.AggregatorProxy(wallet, oracle);
            oraclePriceMap[token.toLowerCase()] = (await mockOracleContract.latestAnswer()).shiftedBy(-18); // token -> USD 
        }));
        return oraclePriceMap;
    };
    exports.getOraclePriceMap = getOraclePriceMap;
});
define("@scom/scom-swap/crosschain-utils/index.ts", ["require", "exports", "@scom/scom-swap/crosschain-utils/API.ts"], function (require, exports, API_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getOraclePriceMap = exports.getVaultAssetBalance = exports.getAvailableRouteOptions = exports.createBridgeVaultOrder = exports.getBondsInBridgeVault = exports.getBridgeVault = exports.getTargetChainTokenInfoObj = exports.getTargetChainTokenMap = exports.getTokenByVaultAddress = void 0;
    Object.defineProperty(exports, "getTokenByVaultAddress", { enumerable: true, get: function () { return API_1.getTokenByVaultAddress; } });
    Object.defineProperty(exports, "getTargetChainTokenMap", { enumerable: true, get: function () { return API_1.getTargetChainTokenMap; } });
    Object.defineProperty(exports, "getTargetChainTokenInfoObj", { enumerable: true, get: function () { return API_1.getTargetChainTokenInfoObj; } });
    Object.defineProperty(exports, "getBridgeVault", { enumerable: true, get: function () { return API_1.getBridgeVault; } });
    Object.defineProperty(exports, "getBondsInBridgeVault", { enumerable: true, get: function () { return API_1.getBondsInBridgeVault; } });
    Object.defineProperty(exports, "createBridgeVaultOrder", { enumerable: true, get: function () { return API_1.createBridgeVaultOrder; } });
    Object.defineProperty(exports, "getAvailableRouteOptions", { enumerable: true, get: function () { return API_1.getAvailableRouteOptions; } });
    Object.defineProperty(exports, "getVaultAssetBalance", { enumerable: true, get: function () { return API_1.getVaultAssetBalance; } });
    Object.defineProperty(exports, "getOraclePriceMap", { enumerable: true, get: function () { return API_1.getOraclePriceMap; } });
});
define("@scom/scom-swap/swap-utils/index.ts", ["require", "exports", "@ijstech/eth-wallet", "@scom/oswap-openswap-contract", "@scom/scom-commission-proxy-contract", "@scom/scom-dex-list", "@scom/scom-swap/global/index.ts", "@scom/scom-swap/store/index.ts", "@scom/scom-token-list", "@scom/scom-swap/crosschain-utils/index.ts"], function (require, exports, eth_wallet_4, oswap_openswap_contract_2, scom_commission_proxy_contract_1, scom_dex_list_1, index_4, index_5, scom_token_list_4, index_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createBridgeVaultOrder = exports.getCrossChainRouteOptions = exports.getCommissionRate = exports.getProviderProxySelectors = exports.setApprovalModalSpenderAddress = exports.getRouterAddress = exports.getChainNativeToken = exports.executeSwap = exports.getPair = exports.getAllRoutesData = exports.getTradeFeeMap = exports.getExtendedRouteObjData = void 0;
    const routeAPI = 'https://route.openswap.xyz/trading/v1/route';
    const newRouteAPI = 'https://indexer.ijs.dev/trading/v1/route';
    const getChainNativeToken = (chainId) => {
        return scom_token_list_4.ChainNativeTokenByChainId[chainId];
    };
    exports.getChainNativeToken = getChainNativeToken;
    const getWETH = (chainId) => {
        return scom_token_list_4.WETHByChainId[chainId];
    };
    const getWrappedTokenAddress = (chainId) => {
        return getWETH(chainId).address;
    };
    const getFactoryAddress = (state, key) => {
        var _a;
        const factoryAddress = ((_a = state.getDexDetail(key, state.getChainId())) === null || _a === void 0 ? void 0 : _a.factoryAddress) || '';
        return factoryAddress;
    };
    function getRouterAddress(state, key) {
        var _a;
        const routerAddress = ((_a = state.getDexDetail(key, state.getChainId())) === null || _a === void 0 ? void 0 : _a.routerAddress) || '';
        return routerAddress;
    }
    exports.getRouterAddress = getRouterAddress;
    async function composeRouteObj(state, routeObj, firstInput, secondInput, isFromEstimated) {
        const slippageTolerance = state.slippageTolerance;
        if (!slippageTolerance)
            return null;
        let fromAmount = new eth_wallet_4.BigNumber(0);
        let toAmount = new eth_wallet_4.BigNumber(0);
        let minReceivedMaxSold = 0;
        let priceImpact = 0;
        let price = 0;
        let priceSwap = 0;
        let tradeFee = 0;
        let gasFee = 0;
        try {
            if (isFromEstimated) {
                let poolAmount = new eth_wallet_4.BigNumber(routeObj.amountIn);
                if (poolAmount.isZero())
                    return null;
                minReceivedMaxSold = poolAmount.times(1 + slippageTolerance / 100).toNumber();
                fromAmount = poolAmount;
                toAmount = secondInput;
                gasFee = routeObj.gasFee;
            }
            else {
                let poolAmount = new eth_wallet_4.BigNumber(routeObj.amountOut);
                if (poolAmount.isZero())
                    return null;
                minReceivedMaxSold = poolAmount.times(1 - slippageTolerance / 100).toNumber();
                fromAmount = firstInput;
                toAmount = poolAmount;
                gasFee = routeObj.gasFee;
            }
            price = parseFloat(routeObj.price);
            priceSwap = new eth_wallet_4.BigNumber(1).div(routeObj.price).toNumber();
            priceImpact = Number(routeObj.priceImpact) * 100;
            tradeFee = parseFloat(routeObj.tradeFee);
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
            minReceivedMaxSold });
    }
    function getTradeFeeMap(state) {
        let tradeFeeMap = {};
        const chainId = state.getChainId();
        const dexInfoList = state.getDexInfoList({ chainId });
        for (let dexInfo of dexInfoList) {
            tradeFeeMap[dexInfo.dexCode] = dexInfo.details.find(v => v.chainId === chainId).tradeFee;
        }
        return tradeFeeMap;
    }
    exports.getTradeFeeMap = getTradeFeeMap;
    async function getBestAmountInRouteFromAPI(state, tokenIn, tokenOut, amountOut, chainId) {
        chainId = state.getChainId();
        let wrappedTokenAddress = getWETH(chainId);
        let network = chainId ? (0, index_5.getNetworkInfo)(chainId) : null;
        let api = index_5.crossChainSupportedChainIds.some(v => v.chainId === chainId && v.isTestnet) || (network === null || network === void 0 ? void 0 : network.isDisabled) ? newRouteAPI : routeAPI;
        let routeObjArr = await (0, index_4.getAPI)(api, {
            chainId,
            tokenIn: tokenIn.address ? tokenIn.address : wrappedTokenAddress,
            tokenOut: tokenOut.address ? tokenOut.address : wrappedTokenAddress,
            amountOut: new eth_wallet_4.BigNumber(amountOut).shiftedBy(tokenOut.decimals).toFixed(),
            ignoreHybrid: 1
        });
        if (!routeObjArr)
            return [];
        let bestRouteObjArr = [];
        return bestRouteObjArr;
    }
    async function getBestAmountOutRouteFromAPI(state, tokenIn, tokenOut, amountIn, chainId) {
        chainId = state.getChainId();
        let wrappedTokenAddress = getWETH(chainId);
        let network = chainId ? (0, index_5.getNetworkInfo)(chainId) : null;
        let api = index_5.crossChainSupportedChainIds.some(v => v.chainId === chainId && v.isTestnet) || (network === null || network === void 0 ? void 0 : network.isDisabled) ? newRouteAPI : routeAPI;
        let routeObjArr = await (0, index_4.getAPI)(api, {
            chainId,
            tokenIn: tokenIn.address ? tokenIn.address : wrappedTokenAddress,
            tokenOut: tokenOut.address ? tokenOut.address : wrappedTokenAddress,
            amountIn: new eth_wallet_4.BigNumber(amountIn).shiftedBy(tokenIn.decimals).toFixed(),
            ignoreHybrid: 1
        });
        if (!routeObjArr)
            return [];
        let bestRouteObjArr = [];
        return bestRouteObjArr;
    }
    const getProviderProxySelectors = async (state, providers) => {
        var _a;
        const wallet = state.getRpcWallet();
        await wallet.init();
        let selectorsSet = new Set();
        for (let provider of providers) {
            const dex = state.getDexInfoList({ key: provider.key, chainId: provider.chainId })[0];
            if (dex) {
                const routerAddress = ((_a = dex.details.find(v => v.chainId === provider.chainId)) === null || _a === void 0 ? void 0 : _a.routerAddress) || '';
                const selectors = await (0, scom_dex_list_1.getSwapProxySelectors)(wallet, dex.dexType, provider.chainId, routerAddress);
                selectors.forEach(v => selectorsSet.add(v));
            }
        }
        return Array.from(selectorsSet);
    };
    exports.getProviderProxySelectors = getProviderProxySelectors;
    const getPair = async (state, market, tokenA, tokenB) => {
        const wallet = state.getRpcWallet();
        let chainId = state.getChainId();
        if (!tokenA.address)
            tokenA = getWETH(chainId);
        if (!tokenB.address)
            tokenB = getWETH(chainId);
        let factory = new oswap_openswap_contract_2.Contracts.OSWAP_Factory(wallet, getFactoryAddress(state, market));
        let pair = await factory.getPair({
            param1: tokenA.address,
            param2: tokenB.address
        });
        return pair;
    };
    exports.getPair = getPair;
    const getAllAvailableRoutes = async (state, markets, tokenList, tokenIn, tokenOut) => {
        const wallet = state.getRpcWallet();
        let getPairPromises = [];
        let availableRoutes = [];
        const getReservesByPair = async (market, pairAddress, tokenIn, tokenOut) => {
            let chainId = state.getChainId();
            if (!tokenIn.address)
                tokenIn = getWETH(chainId);
            if (!tokenOut.address)
                tokenOut = getWETH(chainId);
            let reserveObj = await (0, scom_dex_list_1.getDexPairReserves)(wallet, wallet.chainId, market, pairAddress, tokenIn.address, tokenOut.address);
            return reserveObj;
        };
        let composeAvailableRoutePromise = async (state, market, tokenIn, tokenOut) => {
            try {
                let pair = await getPair(state, market, tokenIn, tokenOut);
                if (pair == eth_wallet_4.Utils.nullAddress)
                    return;
                let reserveObj = await getReservesByPair(market, pair, tokenIn, tokenOut);
                availableRoutes.push(Object.assign({ pair,
                    market,
                    tokenIn,
                    tokenOut }, reserveObj));
            }
            catch (err) {
                console.log('err', err);
            }
        };
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
    };
    const calculateAmountOutByTradeFee = (tradeFeeMap, pairInfo, amountIn) => {
        let tradeFeeObj = tradeFeeMap[pairInfo.market];
        let amountInWithFee = new eth_wallet_4.BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).times(amountIn);
        let amtOut = (new eth_wallet_4.BigNumber(pairInfo.reserveB).times(amountInWithFee)).idiv(new eth_wallet_4.BigNumber(pairInfo.reserveA).times(tradeFeeObj.base).plus(amountInWithFee)).toFixed();
        return amtOut;
    };
    const calculateAmountInByTradeFee = (tradeFeeMap, pairInfo, amountOut) => {
        let tradeFeeObj = tradeFeeMap[pairInfo.market];
        let feeMultiplier = new eth_wallet_4.BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee);
        if (pairInfo.reserveB.lte(amountOut)) {
            return null;
        }
        let amtIn = new eth_wallet_4.BigNumber(pairInfo.reserveA).times(amountOut).times(tradeFeeObj.base).idiv(new eth_wallet_4.BigNumber(pairInfo.reserveB.minus(amountOut)).times(feeMultiplier)).plus(1).toFixed();
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
        for (let i = 0; i < listItems.length; i++) {
            let listItem = listItems[i];
            let lastAmtIn = routeObj.amounts[routeObj.amounts.length - 1];
            let newRouteObj = getNewAmmRouteObj(listItem, routeObj, lastAmtIn); // listItem.market == Market.MIXED_QUEUE ? getNewQueueRouteObj(listItem, routeObj, lastAmtIn) : getNewAmmRouteObj(listItem, routeObj, lastAmtIn);
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
        for (let i = 0; i < listItems.length; i++) {
            let listItem = listItems[i];
            let lastAmtOut = routeObj.amounts[routeObj.amounts.length - 1];
            let newRouteObj = getNewAmmRouteObj(listItem, routeObj, lastAmtOut); // listItem.market == Market.MIXED_QUEUE ? getNewQueueRouteObj(listItem, routeObj, lastAmtOut) : getNewAmmRouteObj(listItem, routeObj, lastAmtOut);
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
        amountOut = eth_wallet_4.Utils.toDecimals(amountOut, tokenOut.decimals).toFixed();
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
        if (availableRoutes.length == 1) {
            let pairInfo = availableRoutes[0];
            if (pairInfo.tokenIn.address == tokenIn.address && pairInfo.tokenOut.address == tokenOut.address) {
                let routeObj = getAmmRouteObj(pairInfo); // pairInfo.market == Market.MIXED_QUEUE ? getQueueRouteObj(pairInfo) : getAmmRouteObj(pairInfo);
                if (!routeObj)
                    return allPaths;
                allPaths = [routeObj];
            }
        }
        else if (availableRoutes.length > 1) {
            let entryList = availableRoutes.filter((v) => v.tokenOut.address == tokenOut.address);
            for (let i = 0; i < entryList.length; i++) {
                let pairInfo = entryList[i];
                let routeObj = getAmmRouteObj(pairInfo); // pairInfo.market == Market.MIXED_QUEUE ? getQueueRouteObj(pairInfo) : getAmmRouteObj(pairInfo);
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
                        let routes = availableRoutes.filter(v => v.tokenIn.address != tokenIn.address || v.market == market);
                        allPaths.push(...getPathsByTokenIn(tradeFeeMap, routes, routeObj, tokenIn));
                    }
                }
            }
        }
        let sortedAllPaths = allPaths.sort((a, b) => {
            let amtInA = a.amounts[a.amounts.length - 1];
            let amtInB = b.amounts[b.amounts.length - 1];
            let compare = new eth_wallet_4.BigNumber(amtInA).comparedTo(amtInB);
            return compare || 0;
        });
        return sortedAllPaths;
    };
    const getAllExactAmountInPaths = async (tradeFeeMap, availableRoutes, tokenIn, tokenOut, amountIn) => {
        let allPaths = [];
        amountIn = eth_wallet_4.Utils.toDecimals(amountIn, tokenIn.decimals).toFixed();
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
        if (availableRoutes.length == 1) {
            let pairInfo = availableRoutes[0];
            if (pairInfo.tokenIn.address == tokenIn.address && pairInfo.tokenOut.address == tokenOut.address) {
                let routeObj = getAmmRouteObj(pairInfo); // pairInfo.market == Market.MIXED_QUEUE ? getQueueRouteObj(pairInfo) : getAmmRouteObj(pairInfo);
                if (!routeObj)
                    return allPaths;
                allPaths = [routeObj];
            }
        }
        else if (availableRoutes.length > 1) {
            let entryList = availableRoutes.filter((v) => v.tokenIn.address == tokenIn.address);
            for (let i = 0; i < entryList.length; i++) {
                let pairInfo = entryList[i];
                let routeObj = getAmmRouteObj(pairInfo); // pairInfo.market == Market.MIXED_QUEUE ? getQueueRouteObj(pairInfo) : getAmmRouteObj(pairInfo);
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
            if (new eth_wallet_4.BigNumber(lastAmtOutA).gt(lastAmtOutB)) {
                return -1;
            }
            else if (new eth_wallet_4.BigNumber(lastAmtOutA).lt(lastAmtOutB)) {
                return 1;
            }
            return 0;
        });
        return sortedAllPaths;
    };
    const getBestAmountInRoute = async (state, markets, tokenIn, tokenOut, amountOut, tokenList) => {
        let allAvailableRoutes = await getAllAvailableRoutes(state, markets, tokenList, tokenIn, tokenOut);
        if (allAvailableRoutes.length == 0)
            return null;
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
        let lowestIn = eth_wallet_4.Utils.fromDecimals(tokenLowestIn, tokenIn.decimals).toFixed();
        let swapPrice = new eth_wallet_4.BigNumber(lowestIn).div(amountOut);
        let extendedData = await getExtendedRouteObjData(bestRouteObj, tradeFeeMap, swapPrice, true);
        return Object.assign(Object.assign({}, extendedData), { amountIn: lowestIn });
    };
    const getBestAmountOutRoute = async (state, markets, tokenIn, tokenOut, amountIn, tokenList, isHybrid) => {
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
        let highestOut = eth_wallet_4.Utils.fromDecimals(tokenHighestOut, tokenOut.decimals).toFixed();
        let swapPrice = new eth_wallet_4.BigNumber(amountIn).div(highestOut);
        let extendedData = await getExtendedRouteObjData(bestRouteObj, tradeFeeMap, swapPrice, isHybrid);
        return Object.assign(Object.assign({}, extendedData), { amountOut: highestOut });
    };
    async function getExtendedRouteObjData(bestRouteObj, tradeFeeMap, swapPrice, isHybridOrQueue) {
        let currPrice = new eth_wallet_4.BigNumber(0);
        if (bestRouteObj.customDataList.length > 0) {
            currPrice = bestRouteObj.market.map((v, i) => {
                let customDataObj = bestRouteObj.customDataList[i];
                let reserveA = new eth_wallet_4.BigNumber(customDataObj.reserveA).shiftedBy(-bestRouteObj.route[i].decimals);
                let reserveB = new eth_wallet_4.BigNumber(customDataObj.reserveB).shiftedBy(-bestRouteObj.route[i + 1].decimals);
                return reserveA.div(reserveB);
            })
                .reduce((prev, curr) => prev.times(curr));
        }
        let fee = new eth_wallet_4.BigNumber(1).minus(bestRouteObj.market.map((market) => {
            let tradeFeeObj = tradeFeeMap[market];
            if (!tradeFeeObj)
                return new eth_wallet_4.BigNumber(0);
            let tradeFee = new eth_wallet_4.BigNumber(tradeFeeObj.fee).div(tradeFeeObj.base);
            return new eth_wallet_4.BigNumber(1).minus(tradeFee);
        }).reduce((a, b) => a.times(b)));
        let priceImpact = swapPrice.minus(currPrice).div(swapPrice).minus(fee).toFixed();
        let extendedRouteObj = {
            pairs: bestRouteObj.pairs,
            market: bestRouteObj.market,
            bestRoute: bestRouteObj.route,
            priceImpact: priceImpact,
            price: swapPrice.toFixed(),
            tradeFee: fee.toFixed(),
        };
        return extendedRouteObj;
    }
    exports.getExtendedRouteObjData = getExtendedRouteObjData;
    async function getAllRoutesData(state, firstTokenObject, secondTokenObject, firstInput, secondInput, isFromEstimated, useAPI) {
        var _a, _b;
        let resultArr = [];
        if (firstTokenObject && secondTokenObject && (firstInput.gt(0) || secondInput.gt(0))) {
            let routeDataArr = [];
            if (useAPI) {
                if (isFromEstimated) {
                    routeDataArr = await getBestAmountInRouteFromAPI(state, firstTokenObject, secondTokenObject, secondInput.toString());
                }
                else {
                    routeDataArr = await getBestAmountOutRouteFromAPI(state, firstTokenObject, secondTokenObject, firstInput.toString());
                }
            }
            if (isFromEstimated) {
                if (routeDataArr.length == 0) {
                    const providerList = state.providerList;
                    const providerKey = (_a = providerList[0]) === null || _a === void 0 ? void 0 : _a.key;
                    let routeObj = await getBestAmountInRoute(state, providerKey ? [providerKey] : [], firstTokenObject, secondTokenObject, secondInput.toString(), []);
                    if (routeObj && routeObj.market.length == 1) {
                        let price = parseFloat(routeObj.price);
                        let priceSwap = new eth_wallet_4.BigNumber(1).div(routeObj.price).toNumber();
                        let priceImpact = Number(routeObj.priceImpact) * 100;
                        let tradeFee = parseFloat(routeObj.tradeFee);
                        const provider = routeObj.market[0];
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
                if (routeDataArr.length == 0) {
                    const providerList = state.providerList;
                    const providerKey = (_b = providerList[0]) === null || _b === void 0 ? void 0 : _b.key;
                    let routeObj = await getBestAmountOutRoute(state, providerKey ? [providerKey] : [], firstTokenObject, secondTokenObject, firstInput.toString(), [], false);
                    if (routeObj && routeObj.market.length == 1) {
                        let price = parseFloat(routeObj.price);
                        let priceSwap = new eth_wallet_4.BigNumber(1).div(routeObj.price).toNumber();
                        let priceImpact = Number(routeObj.priceImpact) * 100;
                        let tradeFee = parseFloat(routeObj.tradeFee);
                        const provider = routeObj.market[0];
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
                    let routeObj = await composeRouteObj(state, optionObj, firstInput, secondInput, isFromEstimated);
                    if (!routeObj)
                        continue;
                    resultArr.push(routeObj);
                }
            }
        }
        return resultArr;
    }
    exports.getAllRoutesData = getAllRoutesData;
    const AmmTradeExactIn = async function (state, wallet, market, routeTokens, amountIn, amountOutMin, toAddress, deadline, feeOnTransfer, campaignId, referrer) {
        var _a;
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
        const amount = tokenIn.address ? eth_wallet_4.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0) : eth_wallet_4.Utils.toDecimals(amountIn).dp(0);
        const _amountOutMin = eth_wallet_4.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0);
        if (!tokenIn.address) {
            const params = {
                amountOutMin: _amountOutMin,
                path: addresses,
                to: toAddress,
                deadline
            };
            let executeSwapOptions = {
                params,
                exactType: 'exactIn',
                feeOnTransfer,
                tokenInType: 'ETH',
                tokenOutType: 'ERC20',
                txOptions: {
                    value: amount
                }
            };
            if (campaignId !== undefined) {
                let txData = await (0, scom_dex_list_1.getRouterSwapTxData)(wallet.chainId, market, executeSwapOptions);
                const proxyAddress = state.getProxyAddress();
                const proxy = new scom_commission_proxy_contract_1.Contracts.ProxyV3(wallet, proxyAddress);
                receipt = await proxy.proxyCall({
                    campaignId,
                    target: routerAddress,
                    tokensIn: [
                        {
                            token: eth_wallet_4.Utils.nullAddress,
                            amount: amount
                        }
                    ],
                    data: txData,
                    referrer,
                    to: wallet.address,
                    tokensOut: [
                        tokenOut.address
                    ]
                });
            }
            else {
                receipt = await (0, scom_dex_list_1.executeRouterSwap)(wallet.chainId, market, executeSwapOptions);
            }
        }
        else {
            const params = {
                amountIn: amount,
                amountOutMin: _amountOutMin,
                path: addresses,
                to: toAddress,
                deadline
            };
            let executeSwapOptions = {
                params,
                exactType: 'exactIn',
                feeOnTransfer,
                tokenInType: 'ERC20',
                tokenOutType: !tokenOut.address ? 'ETH' : 'ERC20'
            };
            if (campaignId !== undefined) {
                let txData = await (0, scom_dex_list_1.getRouterSwapTxData)(wallet.chainId, market, executeSwapOptions);
                const proxyAddress = state.getProxyAddress();
                const proxy = new scom_commission_proxy_contract_1.Contracts.ProxyV3(wallet, proxyAddress);
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
                        (_a = tokenOut.address) !== null && _a !== void 0 ? _a : eth_wallet_4.Utils.nullAddress
                    ]
                });
            }
            else {
                receipt = await (0, scom_dex_list_1.executeRouterSwap)(wallet.chainId, market, executeSwapOptions);
            }
        }
        return receipt;
    };
    const AmmTradeExactOut = async function (state, wallet, market, routeTokens, amountOut, amountInMax, toAddress, deadline, campaignId, referrer) {
        var _a;
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
        const _amountInMax = eth_wallet_4.Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0);
        const _amountOut = eth_wallet_4.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0);
        if (!tokenIn.address) {
            const params = {
                amountOut: _amountOut,
                path: addresses,
                to: toAddress,
                deadline
            };
            let executeSwapOptions = {
                params,
                exactType: 'exactOut',
                feeOnTransfer: false,
                tokenInType: 'ETH',
                tokenOutType: 'ERC20',
                txOptions: {
                    value: _amountInMax
                }
            };
            if (campaignId !== undefined) {
                let txData = await (0, scom_dex_list_1.getRouterSwapTxData)(wallet.chainId, market, executeSwapOptions);
                const proxyAddress = state.getProxyAddress();
                const proxy = new scom_commission_proxy_contract_1.Contracts.ProxyV3(wallet, proxyAddress);
                receipt = await proxy.proxyCall({
                    campaignId,
                    target: routerAddress,
                    tokensIn: [
                        {
                            token: eth_wallet_4.Utils.nullAddress,
                            amount: _amountInMax
                        }
                    ],
                    data: txData,
                    referrer,
                    to: wallet.address,
                    tokensOut: [
                        tokenOut.address
                    ]
                });
            }
            else {
                receipt = await (0, scom_dex_list_1.executeRouterSwap)(wallet.chainId, market, executeSwapOptions);
            }
        }
        else {
            const params = {
                amountOut: _amountOut,
                amountInMax: _amountInMax,
                path: addresses,
                to: toAddress,
                deadline
            };
            let executeSwapOptions = {
                params,
                exactType: 'exactOut',
                feeOnTransfer: false,
                tokenInType: 'ERC20',
                tokenOutType: !tokenOut.address ? 'ETH' : 'ERC20'
            };
            if (campaignId !== undefined) {
                let txData = await (0, scom_dex_list_1.getRouterSwapTxData)(wallet.chainId, market, executeSwapOptions);
                const proxyAddress = state.getProxyAddress();
                const proxy = new scom_commission_proxy_contract_1.Contracts.ProxyV3(wallet, proxyAddress);
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
                        (_a = tokenOut.address) !== null && _a !== void 0 ? _a : eth_wallet_4.Utils.nullAddress
                    ]
                });
            }
            else {
                receipt = await (0, scom_dex_list_1.executeRouterSwap)(wallet.chainId, market, executeSwapOptions);
            }
        }
        return receipt;
    };
    const executeSwap = async (state, swapData) => {
        var _a;
        let receipt = null;
        const wallet = eth_wallet_4.Wallet.getClientInstance();
        try {
            const toAddress = wallet.account.address;
            const slippageTolerance = state.slippageTolerance;
            const transactionDeadlineInMinutes = state.transactionDeadline;
            const transactionDeadline = Math.floor(Date.now() / 1000 + transactionDeadlineInMinutes * 60);
            const providerList = state.providerList;
            const market = ((_a = providerList.find(item => item.key === swapData.provider)) === null || _a === void 0 ? void 0 : _a.key) || '';
            if (swapData.isFromEstimated) {
                const amountInMax = swapData.fromAmount.times(1 + slippageTolerance / 100);
                receipt = await AmmTradeExactOut(state, wallet, market, swapData.routeTokens, swapData.toAmount.toString(), amountInMax.toString(), toAddress, transactionDeadline, swapData.campaignId, swapData.referrer);
            }
            else {
                const amountOutMin = swapData.toAmount.times(1 - slippageTolerance / 100);
                receipt = await AmmTradeExactIn(state, wallet, market, swapData.routeTokens, swapData.fromAmount.toString(), amountOutMin.toString(), toAddress, transactionDeadline, false, swapData.campaignId, swapData.referrer);
            }
        }
        catch (error) {
            return { receipt: null, error: error };
        }
        return { receipt, error: null };
    };
    exports.executeSwap = executeSwap;
    const setApprovalModalSpenderAddress = (state, market, contractAddress) => {
        state.approvalModel.spenderAddress = contractAddress || getRouterAddress(state, market);
    };
    exports.setApprovalModalSpenderAddress = setApprovalModalSpenderAddress;
    const getCommissionRate = async (state, campaignId) => {
        const rpcWallet = state.getRpcWallet();
        const proxyAddress = state.getProxyAddress();
        await rpcWallet.init();
        let commissionRate = await scom_commission_proxy_contract_1.ContractUtils.getCommissionRate(rpcWallet, proxyAddress, campaignId);
        return eth_wallet_4.Utils.fromDecimals(commissionRate, 6).toFixed();
    };
    exports.getCommissionRate = getCommissionRate;
    const getCrossChainRouteOptions = async (state, params) => {
        return await (0, index_6.getAvailableRouteOptions)(state, params, getTradeFeeMap, getExtendedRouteObjData);
    };
    exports.getCrossChainRouteOptions = getCrossChainRouteOptions;
    const createBridgeVaultOrder = async (state, newOrderParams) => (0, index_6.createBridgeVaultOrder)(state, Object.assign({}, newOrderParams));
    exports.createBridgeVaultOrder = createBridgeVaultOrder;
});
define("@scom/scom-swap/price-info/priceInfo.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_3.Styles.Theme.ThemeVars;
    components_3.Styles.cssRule('.price-info', {
        display: 'flex',
        flexDirection: 'column',
        $nest: {
            'i-hstack': {
                $nest: {
                    '&> i-label:first-child': {
                        marginRight: '0.5rem',
                        opacity: 0.75
                    },
                    'i-icon.icon-tooltip': {
                        opacity: 0.75,
                        fill: Theme.text.primary,
                        $nest: {
                            'svg': {
                                fill: `${Theme.text.primary} !important`
                            }
                        }
                    }
                }
            },
            '.rounded-icon': {
                display: 'inline-flex',
                padding: 0
            }
        }
    });
});
define("@scom/scom-swap/price-info/index.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-swap/price-info/priceInfo.css.ts"], function (require, exports, components_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PriceInfo = void 0;
    ;
    let PriceInfo = class PriceInfo extends components_4.Module {
        constructor(parent, options) {
            super(parent, options);
            this.renderItems = async () => {
                if (this.priceContent.children.length === this.Items.length) {
                    this.updateItems();
                    return;
                }
                this.priceContent.innerHTML = '';
                for (let i = 0; i < this.Items.length; i++) {
                    const item = this.Items[i];
                    const row = new components_4.HStack();
                    row.horizontalAlignment = "space-between";
                    row.verticalAlignment = "center";
                    row.padding = { top: '0.25rem', bottom: '0.25rem', left: 0, right: 0 };
                    if (item.isHidden) {
                        row.classList.add('hidden');
                    }
                    const titleLabel = new components_4.Label(row, { caption: item.title });
                    row.appendChild(titleLabel);
                    if (item.tooltip) {
                        const iconTooltip = this.renderIconTooltip(row, item);
                        row.appendChild(await iconTooltip);
                    }
                    const valueLabel = new components_4.Label(row, { caption: item.value });
                    valueLabel.classList.add('ml-auto', 'text-right');
                    row.appendChild(valueLabel);
                    if (item.isToggleShown) {
                        const image = this.onRenderToggleBtn(row);
                        row.appendChild(image);
                    }
                    this.priceContent.appendChild(row);
                }
            };
            this.onRenderToggleBtn = (parent) => {
                const image = new components_4.Icon(parent, {
                    width: 18,
                    height: 18,
                    name: 'arrows-alt-v'
                });
                image.classList.add("rounded-icon");
                image.style.marginLeft = "5px";
                image.style.transform = "rotate(90deg)";
                image.onClick = (source, event) => {
                    event.stopPropagation();
                    if (this.onTogglePrice)
                        this.onTogglePrice(this);
                };
                return image;
            };
            this.renderIconTooltip = async (parent, item) => {
                const iconTooltip = await components_4.Icon.create();
                iconTooltip.classList.add('icon-tooltip');
                iconTooltip.name = 'question-circle';
                iconTooltip.width = 15;
                iconTooltip.height = 15;
                if (item.onClick) {
                    iconTooltip.classList.add('pointer');
                    iconTooltip.tooltip.content = 'Click to view details';
                    iconTooltip.tooltip.placement = 'right';
                    iconTooltip.tooltip.maxWidth = '270px';
                    iconTooltip.onClick = item.onClick;
                }
                else {
                    iconTooltip.tooltip.content = item.tooltip;
                    iconTooltip.tooltip.placement = 'right';
                    iconTooltip.tooltip.maxWidth = '270px';
                }
                return iconTooltip;
            };
            this.updateItems = async () => {
                for (let i = 0; i < this.Items.length; i++) {
                    const item = this.Items[i];
                    const row = this.priceContent.children[i];
                    const iconTooltip = row.querySelector('.icon-tooltip');
                    const titleLabel = row.firstChild;
                    const valueLabel = row.children[iconTooltip ? 2 : 1];
                    if ((titleLabel === null || titleLabel === void 0 ? void 0 : titleLabel.caption) && item.title != titleLabel.caption) {
                        titleLabel.caption = item.title;
                    }
                    if ((valueLabel === null || valueLabel === void 0 ? void 0 : valueLabel.caption) && item.value != valueLabel.caption) {
                        valueLabel.caption = item.value;
                    }
                    if (iconTooltip) {
                        row.removeChild(iconTooltip);
                    }
                    if (item.tooltip) {
                        const _iconTooltip = this.renderIconTooltip(row, item);
                        row.insertBefore(await _iconTooltip, row.children[1]);
                    }
                    if (item.isToggleShown && row.children.length <= 2) {
                        const image = this.onRenderToggleBtn(row);
                        row.appendChild(image);
                    }
                    else if (!item.isToggleShown && row.children.length > 2 && !item.tooltip) {
                        row.removeChild(row.children[2]);
                    }
                    setTimeout(function () {
                        const iconTooltips = row.querySelectorAll(".icon-tooltip");
                        if (iconTooltips && iconTooltips.length > 1) {
                            row.removeChild(iconTooltips[1]);
                        }
                    }, 2000);
                }
            };
        }
        get Items() {
            return this._items;
        }
        set Items(value) {
            this._items = value;
            this.renderItems();
        }
        init() {
            super.init();
        }
        render() {
            return (this.$render("i-panel", { class: "price-info", width: "auto" },
                this.$render("i-panel", { id: "priceContent" })));
        }
    };
    PriceInfo = __decorate([
        (0, components_4.customElements)('i-scom-swap-price-info')
    ], PriceInfo);
    exports.PriceInfo = PriceInfo;
});
define("@scom/scom-swap/expert-mode-settings/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_5.Styles.Theme.ThemeVars;
    exports.default = components_5.Styles.style({
        textAlign: 'center',
        $nest: {
            // 'i-label': {
            //   color: Theme.text.primary
            // },
            // 'i-button': {
            //   color: Theme.text.primary
            // },
            '.modal': {
                borderRadius: '1rem',
                padding: '1rem',
                width: 327
            },
            '.i-modal_header': {
                marginBottom: '1.25rem',
                paddingBottom: '0.75rem',
                borderBottom: `2px soid ${Theme.background.main}`,
                $nest: {
                    '&> span': {
                        margin: 'auto',
                        padding: '0 2rem',
                        color: Theme.colors.primary.main,
                        fontWeight: 700,
                    }
                }
            },
            '.i-modal-close': {
                fill: `${Theme.colors.primary.main} !important`,
            },
            '.expert-content': {
                fontWeight: 'bold',
                $nest: {
                    '.warning-box': {
                        padding: '0.75rem 1rem',
                        marginBottom: '1.25rem',
                        background: 'linear-gradient(90deg,#df5869 -19.25%,#bc4c7b 116.5%)',
                        border: '1px solid #f15e61',
                        borderRadius: '0.5rem',
                    },
                    '.warning-box i-label *': {
                        color: Theme.colors.primary.contrastText,
                        fontSize: '1rem',
                    },
                    'i-label.warning-text *': {
                        color: Theme.colors.warning.light,
                        fontSize: '1.05rem',
                    },
                    'i-button': {
                        padding: '0.75rem',
                        margin: '1.25rem 0 0.5rem',
                        color: Theme.colors.primary.contrastText,
                        background: 'transparent linear-gradient(255deg,#e75b66,#b52082) 0% 0% no-repeat padding-box',
                    }
                }
            }
        }
    });
});
define("@scom/scom-swap/expert-mode-settings/index.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-swap/expert-mode-settings/index.css.ts"], function (require, exports, components_6, index_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExpertModeSettings = void 0;
    ;
    let ExpertModeSettings = class ExpertModeSettings extends components_6.Module {
        constructor(state, parent, options) {
            super(parent, options);
            this.state = state;
            this.$eventBus = components_6.application.EventBus;
        }
        ;
        async init() {
            this.classList.add(index_css_1.default);
            super.init();
        }
        closeModal() {
            this.expertModal.visible = false;
        }
        showModal() {
            this.expertModal.visible = true;
        }
        onToggle() {
            this.state.toggleExpertMode();
            this.closeModal();
            this.$eventBus.dispatch("ExpertModeChanged" /* EventId.ExpertModeChanged */);
        }
        render() {
            return (this.$render("i-modal", { id: "expertModal", class: 'dark-modal', title: "Expert Mode", closeIcon: { name: 'times' } },
                this.$render("i-panel", { class: "expert-content" },
                    this.$render("i-panel", { class: "warning-box" },
                        this.$render("i-label", { caption: "Expert mode allows high slippage trades that often result in bad rates and lost funds." })),
                    this.$render("i-label", { class: "warning-text", caption: "Only use this mode if you know what you are doing." }),
                    this.$render("i-button", { width: "100%", height: "auto", caption: "Turn On Expert Mode", onClick: this.onToggle.bind(this) }))));
        }
    };
    ExpertModeSettings = __decorate([
        components_6.customModule,
        (0, components_6.customElements)('i-scom-swap-expert-mode-settings')
    ], ExpertModeSettings);
    exports.ExpertModeSettings = ExpertModeSettings;
    ;
});
define("@scom/scom-swap/data.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-swap/data.json.ts'/> 
    const InfuraId = "adc596bf88b648e2a8902bc9093930c5";
    exports.default = {
        "infuraId": InfuraId,
        "networks": [
            {
                "chainId": 97
            },
            {
                "chainId": 43113
            }
        ],
        "proxyAddresses": {
            "43113": "0x83aaf000f0a09f860564e894535cc18f5a50f627"
        },
        "defaultBuilderData": {
            "providers": [
                {
                    "key": "OpenSwap",
                    "chainId": 97
                },
                {
                    "key": "OpenSwap",
                    "chainId": 43113
                }
            ],
            "category": "fixed-pair",
            "tokens": [
                {
                    "name": "USDT",
                    "address": "0x29386B60e0A9A1a30e1488ADA47256577ca2C385",
                    "symbol": "USDT",
                    "decimals": 6,
                    "chainId": 97
                },
                {
                    "name": "OpenSwap",
                    "address": "0x45eee762aaeA4e5ce317471BDa8782724972Ee19",
                    "symbol": "OSWAP",
                    "decimals": 18,
                    "chainId": 97
                },
                {
                    "name": "Tether USD",
                    "address": "0xb9C31Ea1D475c25E58a1bE1a46221db55E5A7C6e",
                    "symbol": "USDT.e",
                    "decimals": 6,
                    "chainId": 43113
                },
                {
                    "name": "OpenSwap",
                    "address": "0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C",
                    "symbol": "OSWAP",
                    "decimals": 18,
                    "chainId": 43113
                }
            ],
            "defaultChainId": 43113,
            "networks": [
                {
                    "chainId": 43113
                },
                {
                    "chainId": 97
                }
            ],
            "wallets": [
                {
                    "name": "metamask"
                }
            ],
            "showHeader": true,
            "showFooter": true
        }
    };
});
define("@scom/scom-swap/formSchema.ts", ["require", "exports", "@scom/scom-network-picker", "@scom/scom-token-input"], function (require, exports, scom_network_picker_1, scom_token_input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getProjectOwnerSchema = exports.getBuilderSchema = void 0;
    const chainIds = [1, 56, 137, 250, 97, 80001, 43113, 43114];
    const networks = chainIds.map(v => { return { chainId: v }; });
    const theme = {
        type: 'object',
        properties: {
            backgroundColor: {
                type: 'string',
                format: 'color'
            },
            fontColor: {
                type: 'string',
                format: 'color'
            },
            inputBackgroundColor: {
                type: 'string',
                format: 'color'
            },
            inputFontColor: {
                type: 'string',
                format: 'color'
            },
            maxButtonBackground: {
                type: 'string',
                format: 'color'
            },
            maxButtonHoverBackground: {
                type: 'string',
                format: 'color'
            },
            primaryButtonBackground: {
                type: 'string',
                format: 'color'
            },
            primaryButtonHoverBackground: {
                type: 'string',
                format: 'color'
            },
            primaryButtonDisabledBackground: {
                type: 'string',
                format: 'color'
            }
        }
    };
    const themeUISchema = {
        type: 'Category',
        label: 'Theme',
        elements: [
            {
                type: 'VerticalLayout',
                elements: [
                    {
                        type: 'Group',
                        label: 'Dark',
                        elements: [
                            {
                                type: 'HorizontalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/dark/properties/backgroundColor'
                                    },
                                    {
                                        type: 'Control',
                                        scope: '#/properties/dark/properties/fontColor'
                                    }
                                ]
                            },
                            {
                                type: 'HorizontalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/dark/properties/inputBackgroundColor'
                                    },
                                    {
                                        type: 'Control',
                                        scope: '#/properties/dark/properties/inputFontColor'
                                    }
                                ]
                            },
                            {
                                type: 'HorizontalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/dark/properties/maxButtonBackground'
                                    },
                                    {
                                        type: 'Control',
                                        scope: '#/properties/dark/properties/maxButtonHoverBackground'
                                    }
                                ]
                            },
                            {
                                type: 'HorizontalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/dark/properties/primaryButtonBackground'
                                    },
                                    {
                                        type: 'Control',
                                        scope: '#/properties/dark/properties/primaryButtonHoverBackground'
                                    }
                                ]
                            },
                            {
                                type: 'HorizontalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/dark/properties/primaryButtonDisabledBackground'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'Group',
                        label: 'Light',
                        elements: [
                            {
                                type: 'HorizontalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/light/properties/backgroundColor'
                                    },
                                    {
                                        type: 'Control',
                                        scope: '#/properties/light/properties/fontColor'
                                    }
                                ]
                            },
                            {
                                type: 'HorizontalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/light/properties/inputBackgroundColor'
                                    },
                                    {
                                        type: 'Control',
                                        scope: '#/properties/light/properties/inputFontColor'
                                    }
                                ]
                            },
                            {
                                type: 'HorizontalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/light/properties/maxButtonBackground'
                                    },
                                    {
                                        type: 'Control',
                                        scope: '#/properties/light/properties/maxButtonHoverBackground'
                                    }
                                ]
                            },
                            {
                                type: 'HorizontalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/light/properties/primaryButtonBackground'
                                    },
                                    {
                                        type: 'Control',
                                        scope: '#/properties/light/properties/primaryButtonHoverBackground'
                                    }
                                ]
                            },
                            {
                                type: 'HorizontalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/light/properties/primaryButtonDisabledBackground'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };
    function getBuilderSchema() {
        return {
            dataSchema: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string'
                    },
                    logo: {
                        type: 'string',
                        format: 'data-url'
                    },
                    category: {
                        type: 'string',
                        required: true,
                        enum: [
                            'fixed-pair',
                            'fixed-protocal',
                            'aggregator',
                            'cross-chain-swap'
                        ]
                    },
                    networks: {
                        type: 'array',
                        required: true,
                        items: {
                            type: 'object',
                            properties: {
                                chainId: {
                                    type: 'number',
                                    enum: chainIds,
                                    required: true
                                }
                            }
                        }
                    },
                    tokens: {
                        type: 'array',
                        required: true,
                        items: {
                            type: 'object',
                            properties: {
                                chainId: {
                                    type: 'number',
                                    enum: chainIds,
                                    required: true
                                },
                                address: {
                                    type: 'string'
                                }
                            }
                        }
                    },
                    providers: {
                        type: 'array',
                        required: true,
                        items: {
                            type: 'object',
                            properties: {
                                key: {
                                    type: 'string',
                                    required: true
                                },
                                chainId: {
                                    type: 'number',
                                    enum: chainIds,
                                    required: true
                                }
                            }
                        }
                    },
                    dark: theme,
                    light: theme
                }
            },
            uiSchema: {
                type: 'Categorization',
                elements: [
                    {
                        type: 'Category',
                        label: 'General',
                        elements: [
                            {
                                type: 'VerticalLayout',
                                elements: [
                                    {
                                        type: 'HorizontalLayout',
                                        elements: [
                                            {
                                                type: 'Control',
                                                scope: '#/properties/category'
                                            }
                                        ]
                                    },
                                    {
                                        type: 'HorizontalLayout',
                                        elements: [
                                            {
                                                type: 'Categorization',
                                                elements: [
                                                    {
                                                        type: 'Category',
                                                        label: 'Branding',
                                                        elements: [
                                                            {
                                                                type: 'HorizontalLayout',
                                                                elements: [
                                                                    {
                                                                        type: 'Control',
                                                                        scope: '#/properties/title'
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                type: 'HorizontalLayout',
                                                                elements: [
                                                                    {
                                                                        type: 'Control',
                                                                        scope: '#/properties/logo'
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        type: 'Category',
                                                        label: 'Networks',
                                                        elements: [
                                                            {
                                                                type: 'Control',
                                                                scope: '#/properties/networks',
                                                                options: {
                                                                    detail: {
                                                                        type: 'VerticalLayout'
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        type: 'Category',
                                                        label: 'Providers',
                                                        elements: [
                                                            {
                                                                type: 'Control',
                                                                scope: '#/properties/providers',
                                                                options: {
                                                                    detail: {
                                                                        type: 'VerticalLayout'
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        type: 'Category',
                                                        label: 'Tokens',
                                                        elements: [
                                                            {
                                                                type: 'Control',
                                                                scope: '#/properties/tokens'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    themeUISchema
                ]
            },
            customControls(rpcWalletId) {
                let networkPickers = [];
                let tokenInputs = [];
                return {
                    '#/properties/networks/properties/chainId': customNetworkPicker(),
                    '#/properties/tokens/properties/chainId': {
                        render: () => {
                            const idx = networkPickers.length;
                            networkPickers[idx] = new scom_network_picker_1.default(undefined, {
                                type: 'combobox',
                                networks,
                                onCustomNetworkSelected: () => {
                                    var _a;
                                    const chainId = (_a = networkPickers[idx].selectedNetwork) === null || _a === void 0 ? void 0 : _a.chainId;
                                    tokenInputs[idx].chainId = chainId;
                                }
                            });
                            return networkPickers[idx];
                        },
                        getData: (control) => {
                            var _a;
                            return (_a = control.selectedNetwork) === null || _a === void 0 ? void 0 : _a.chainId;
                        },
                        setData: (control, value) => {
                            control.setNetworkByChainId(value);
                            const idx = networkPickers.findIndex(f => f === control);
                            if (tokenInputs[idx])
                                tokenInputs[idx].chainId = value;
                        }
                    },
                    '#/properties/tokens/properties/address': {
                        render: () => {
                            var _a, _b;
                            const idx = tokenInputs.length;
                            tokenInputs[idx] = new scom_token_input_1.default(undefined, {
                                type: 'combobox',
                                isBalanceShown: false,
                                isBtnMaxShown: false,
                                isInputShown: false
                            });
                            tokenInputs[idx].rpcWalletId = rpcWalletId;
                            const chainId = (_b = (_a = networkPickers[idx]) === null || _a === void 0 ? void 0 : _a.selectedNetwork) === null || _b === void 0 ? void 0 : _b.chainId;
                            if (chainId && tokenInputs[idx].chainId !== chainId) {
                                tokenInputs[idx].chainId = chainId;
                            }
                            return tokenInputs[idx];
                        },
                        getData: (control) => {
                            var _a, _b;
                            return ((_a = control.token) === null || _a === void 0 ? void 0 : _a.address) || ((_b = control.token) === null || _b === void 0 ? void 0 : _b.symbol);
                        },
                        setData: (control, value) => {
                            control.address = value;
                        }
                    },
                    '#/properties/providers/properties/chainId': customNetworkPicker()
                };
            }
        };
    }
    exports.getBuilderSchema = getBuilderSchema;
    const customNetworkPicker = () => {
        return {
            render: () => {
                const networkPicker = new scom_network_picker_1.default(undefined, {
                    type: 'combobox',
                    networks
                });
                return networkPicker;
            },
            getData: (control) => {
                var _a;
                return (_a = control.selectedNetwork) === null || _a === void 0 ? void 0 : _a.chainId;
            },
            setData: (control, value) => {
                control.setNetworkByChainId(value);
            }
        };
    };
    function getProjectOwnerSchema() {
        return {
            general: {
                dataSchema: {
                    type: 'object',
                    properties: {
                        title: {
                            type: 'string'
                        },
                        logo: {
                            type: 'string',
                            format: 'data-url'
                        },
                        // category: {
                        //     type: 'string',
                        //     required: true,
                        //     enum: [
                        //         'fixed-pair',
                        //         'fixed-protocal',
                        //         'aggregator'
                        //     ]
                        // },
                        // providers: {
                        //     type: 'array',
                        //     required: true,
                        //     items: {
                        //         type: 'object',
                        //         properties: {
                        //             key: {
                        //                 title: 'Name',
                        //                 type: 'string',
                        //                 oneOf: providerOptions,
                        //                 required: true
                        //             }
                        //         }
                        //     }
                        // }
                    }
                },
                uiSchema: {
                    type: 'VerticalLayout',
                    elements: [
                        // {
                        //     type: 'HorizontalLayout',
                        //     elements: [
                        //         {
                        //             type: 'Control',
                        //             scope: '#/properties/category'
                        //         }
                        //     ]
                        // },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Categorization',
                                    elements: [
                                        {
                                            type: 'Category',
                                            label: 'Branding',
                                            elements: [
                                                {
                                                    type: 'HorizontalLayout',
                                                    elements: [
                                                        {
                                                            type: 'Control',
                                                            scope: '#/properties/title'
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'HorizontalLayout',
                                                    elements: [
                                                        {
                                                            type: 'Control',
                                                            scope: '#/properties/logo'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        };
    }
    exports.getProjectOwnerSchema = getProjectOwnerSchema;
});
define("@scom/scom-swap/assets.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const moduleDir = components_7.application.currentModuleDir;
    function fullPath(path) {
        return `${moduleDir}/${path}`;
    }
    ;
    exports.default = {
        logo: fullPath('img/logo.svg'),
        fullPath
    };
});
define("@scom/scom-swap", ["require", "exports", "@ijstech/components", "@ijstech/eth-wallet", "@scom/scom-swap/store/index.ts", "@scom/scom-token-list", "@scom/scom-swap/swap-utils/index.ts", "@scom/scom-swap/crosschain-utils/index.ts", "@scom/scom-swap/global/index.ts", "@scom/scom-swap/price-info/index.tsx", "@scom/scom-swap/expert-mode-settings/index.tsx", "@scom/scom-swap/data.json.ts", "@scom/scom-swap/formSchema.ts", "@scom/scom-dex-list", "@scom/scom-commission-fee-setup", "@scom/scom-swap/index.css.ts", "@scom/scom-swap/assets.ts", "@scom/scom-swap/index.css.ts"], function (require, exports, components_8, eth_wallet_5, index_7, scom_token_list_5, index_8, index_9, index_10, index_11, index_12, data_json_1, formSchema_1, scom_dex_list_2, scom_commission_fee_setup_1, index_css_2, assets_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_8.Styles.Theme.ThemeVars;
    const priceImpactTooHighMsg = 'Price Impact Too High. If you want to bypass this check, please turn on Expert Mode';
    const defaultInput = '1';
    let ScomSwap = class ScomSwap extends components_8.Module {
        static async create(options, parent) {
            let self = new this(parent, options);
            await self.ready();
            return self;
        }
        removeRpcWalletEvents() {
            const rpcWallet = this.state.getRpcWallet();
            if (rpcWallet)
                rpcWallet.unregisterAllWalletEvents();
        }
        onHide() {
            this.dappContainer.onHide();
            this.removeRpcWalletEvents();
            for (let event of this.clientEvents) {
                event.unregister();
            }
            this.clientEvents = [];
        }
        get category() {
            return this._data.category;
        }
        set category(value) {
            this._data.category = value;
        }
        get providers() {
            return this._data.providers;
        }
        set providers(value) {
            this._data.providers = value;
        }
        get commissions() {
            var _a;
            return (_a = this._data.commissions) !== null && _a !== void 0 ? _a : [];
        }
        set commissions(value) {
            this._data.commissions = value;
        }
        get defaultChainId() {
            return this._data.defaultChainId;
        }
        set defaultChainId(value) {
            this._data.defaultChainId = value;
        }
        get wallets() {
            var _a;
            return (_a = this._data.wallets) !== null && _a !== void 0 ? _a : [];
        }
        set wallets(value) {
            this._data.wallets = value;
        }
        get networks() {
            var _a;
            return (_a = this._data.networks) !== null && _a !== void 0 ? _a : [];
        }
        set networks(value) {
            this._data.networks = value;
        }
        get showHeader() {
            var _a;
            return (_a = this._data.showHeader) !== null && _a !== void 0 ? _a : true;
        }
        set showHeader(value) {
            this._data.showHeader = value;
        }
        set width(value) {
            this.resizeLayout();
        }
        get hasData() {
            const { providers, defaultChainId, networks, wallets } = this._data;
            return !!((providers === null || providers === void 0 ? void 0 : providers.length) || (networks === null || networks === void 0 ? void 0 : networks.length) || (wallets === null || wallets === void 0 ? void 0 : wallets.length) || !isNaN(Number(defaultChainId)));
        }
        determineActionsByTarget(target, category) {
            if (target === 'builder') {
                return this.getBuilderActions(category);
            }
            else {
                return this.getProjectOwnerActions();
            }
        }
        async loadCommissionFee() {
            if (this._data.campaignId && this.state.embedderCommissionFee === undefined) {
                const commissionRate = await (0, index_8.getCommissionRate)(this.state, this._data.campaignId);
                this.state.embedderCommissionFee = commissionRate;
            }
        }
        getBuilderActions(category) {
            var _a;
            const formSchema = (0, formSchema_1.getBuilderSchema)();
            const dataSchema = formSchema.dataSchema;
            const uiSchema = formSchema.uiSchema;
            const customControls = formSchema.customControls((_a = this.state.getRpcWallet()) === null || _a === void 0 ? void 0 : _a.instanceId);
            let self = this;
            const actions = [
                {
                    name: 'Commissions',
                    icon: 'dollar-sign',
                    command: (builder, userInputData) => {
                        let _oldData = {
                            category: 'fixed-pair',
                            providers: [],
                            defaultChainId: 0,
                            wallets: [],
                            networks: []
                        };
                        return {
                            execute: async () => {
                                _oldData = Object.assign({}, this._data);
                                if (userInputData.commissions)
                                    this._data.commissions = userInputData.commissions;
                                this.refreshUI();
                                if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                    builder.setData(this._data);
                            },
                            undo: () => {
                                this._data = Object.assign({}, _oldData);
                                this.refreshUI();
                                if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                    builder.setData(this._data);
                            },
                            redo: () => { }
                        };
                    },
                    customUI: {
                        render: async (data, onConfirm) => {
                            const vstack = new components_8.VStack();
                            await self.loadCommissionFee();
                            const config = new scom_commission_fee_setup_1.default(null, {
                                commissions: self._data.commissions || [],
                                fee: self.state.embedderCommissionFee,
                                networks: self._data.networks
                            });
                            const hstack = new components_8.HStack(null, {
                                verticalAlignment: 'center',
                            });
                            const button = new components_8.Button(hstack, {
                                caption: 'Confirm',
                                width: '100%',
                                height: 40,
                                font: { color: Theme.colors.primary.contrastText }
                            });
                            vstack.append(config);
                            vstack.append(hstack);
                            button.onClick = async () => {
                                const commissions = config.commissions;
                                if (onConfirm)
                                    onConfirm(true, { commissions });
                            };
                            return vstack;
                        }
                    }
                }
            ];
            if (category && category !== 'offers') {
                actions.push({
                    name: 'Edit',
                    icon: 'edit',
                    command: (builder, userInputData) => {
                        let oldData = {
                            category: 'fixed-pair',
                            providers: [],
                            defaultChainId: 0,
                            wallets: [],
                            networks: []
                        };
                        let oldTag = {};
                        return {
                            execute: async () => {
                                oldData = JSON.parse(JSON.stringify(this._data));
                                const { logo, title, networks, category, providers, tokens } = userInputData, themeSettings = __rest(userInputData, ["logo", "title", "networks", "category", "providers", "tokens"]);
                                const generalSettings = {
                                    logo,
                                    title,
                                    networks,
                                    category,
                                    providers,
                                    tokens
                                };
                                this._data.logo = generalSettings.logo;
                                this._data.title = generalSettings.title;
                                this._data.networks = generalSettings.networks;
                                this._data.defaultChainId = this._data.networks[0].chainId;
                                this._data.category = generalSettings.category;
                                this._data.providers = generalSettings.providers;
                                this._data.tokens = [];
                                if (generalSettings.tokens) {
                                    for (let inputToken of generalSettings.tokens) {
                                        if (!inputToken.address || !(inputToken.address).toLowerCase().startsWith('0x')) {
                                            const nativeToken = scom_token_list_5.ChainNativeTokenByChainId[inputToken.chainId];
                                            if (nativeToken)
                                                this._data.tokens.push(Object.assign(Object.assign({}, nativeToken), { chainId: inputToken.chainId }));
                                        }
                                        else {
                                            const tokens = scom_token_list_5.DefaultERC20Tokens[inputToken.chainId];
                                            const token = tokens.find(v => v.address === inputToken.address);
                                            if (token)
                                                this._data.tokens.push(Object.assign(Object.assign({}, token), { chainId: inputToken.chainId }));
                                        }
                                    }
                                }
                                await this.resetRpcWallet();
                                this.updateContractAddress();
                                this.refreshUI();
                                if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                    builder.setData(this._data);
                                oldTag = JSON.parse(JSON.stringify(this.tag));
                                if (builder === null || builder === void 0 ? void 0 : builder.setTag)
                                    builder.setTag(themeSettings);
                                else
                                    this.setTag(themeSettings);
                                if (this.dappContainer)
                                    this.dappContainer.setTag(themeSettings);
                            },
                            undo: () => {
                                this._data = JSON.parse(JSON.stringify(oldData));
                                this.refreshUI();
                                if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                    builder.setData(this._data);
                                this.tag = JSON.parse(JSON.stringify(oldTag));
                                if (builder === null || builder === void 0 ? void 0 : builder.setTag)
                                    builder.setTag(this.tag);
                                else
                                    this.setTag(this.tag);
                                if (this.dappContainer)
                                    this.dappContainer.setTag(this.tag);
                            },
                            redo: () => { }
                        };
                    },
                    userInputDataSchema: dataSchema,
                    userInputUISchema: uiSchema,
                    customControls: customControls
                });
            }
            return actions;
        }
        getProjectOwnerActions() {
            const formSchema = (0, formSchema_1.getProjectOwnerSchema)();
            const propertiesDataSchema = formSchema.general.dataSchema;
            const propertiesUISchema = formSchema.general.uiSchema;
            const actions = [
                {
                    name: 'Settings',
                    userInputDataSchema: propertiesDataSchema,
                    userInputUISchema: propertiesUISchema
                }
            ];
            return actions;
        }
        getConfigurators() {
            let self = this;
            return [
                {
                    name: 'Project Owner Configurator',
                    target: 'Project Owners',
                    getProxySelectors: async () => {
                        const selectors = await (0, index_8.getProviderProxySelectors)(this.state, this._data.providers);
                        return selectors;
                    },
                    getDexProviderOptions: (chainId) => {
                        const providers = this.state.getDexInfoList({ chainId });
                        return providers;
                    },
                    getPair: async (market, tokenA, tokenB) => {
                        const pair = await (0, index_8.getPair)(this.state, market, tokenA, tokenB);
                        return pair;
                    },
                    getActions: (category) => {
                        return this.determineActionsByTarget('projectOwner', category);
                    },
                    getData: this.getData.bind(this),
                    setData: async (value) => {
                        this.setData(value);
                    },
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this)
                },
                {
                    name: 'Builder Configurator',
                    target: 'Builders',
                    getActions: (category) => {
                        return this.determineActionsByTarget('builder', category);
                    },
                    getData: this.getData.bind(this),
                    setData: async (value) => {
                        const defaultData = data_json_1.default.defaultBuilderData;
                        this.setData(Object.assign(Object.assign({}, defaultData), value));
                    },
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this)
                },
                {
                    name: 'Embedder Configurator',
                    target: 'Embedders',
                    elementName: 'i-scom-commission-fee-setup',
                    getLinkParams: () => {
                        const commissions = this._data.commissions || [];
                        return {
                            data: window.btoa(JSON.stringify(commissions))
                        };
                    },
                    // setLinkParams: async (params: any) => {
                    //   if (params.data) {
                    //     const decodedString = window.atob(params.data);
                    //     const commissions = JSON.parse(decodedString);
                    //     let resultingData = {
                    //       ...self._data,
                    //       commissions
                    //     };
                    //     await this.setData(resultingData);
                    //   }
                    // },
                    bindOnChanged: (element, callback) => {
                        element.onChanged = async (data) => {
                            const commissions = data.commissions;
                            if (commissions) {
                                this.supportedChainIds = commissions.map(v => v.chainId).filter((v, i, a) => a.indexOf(v) === i);
                            }
                            let resultingData = Object.assign(Object.assign({}, self._data), data);
                            await this.setData(resultingData);
                            await callback(data);
                        };
                    },
                    getData: async () => {
                        await self.loadCommissionFee();
                        const fee = this.state.embedderCommissionFee;
                        return Object.assign(Object.assign({}, this._data), { fee });
                    },
                    setData: async (properties, linkParams) => {
                        let resultingData = Object.assign({}, properties);
                        if (linkParams === null || linkParams === void 0 ? void 0 : linkParams.data) {
                            const decodedString = window.atob(linkParams.data);
                            const commissions = JSON.parse(decodedString);
                            resultingData.commissions = commissions;
                        }
                        await this.setData(resultingData);
                    },
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this)
                }
            ];
        }
        getData() {
            return this._data;
        }
        async resetRpcWallet() {
            var _a;
            this.removeRpcWalletEvents();
            const rpcWalletId = await this.state.initRpcWallet(this.defaultChainId);
            const rpcWallet = this.state.getRpcWallet();
            const chainChangedEvent = rpcWallet.registerWalletEvent(this, eth_wallet_5.Constants.RpcWalletEvent.ChainChanged, async (chainId) => {
                this.onChainChange();
            });
            const connectedEvent = rpcWallet.registerWalletEvent(this, eth_wallet_5.Constants.RpcWalletEvent.Connected, async (connected) => {
                var _a, _b;
                if (this.swapBtn)
                    this.swapBtn.visible = true;
                this.updateContractAddress();
                if ((_b = (_a = this.originalData) === null || _a === void 0 ? void 0 : _a.providers) === null || _b === void 0 ? void 0 : _b.length)
                    await this.initializeWidgetConfig();
            });
            if (rpcWallet.instanceId) {
                if (this.firstTokenInput)
                    this.firstTokenInput.rpcWalletId = rpcWallet.instanceId;
                if (this.secondTokenInput)
                    this.secondTokenInput.rpcWalletId = rpcWallet.instanceId;
            }
            const data = {
                defaultChainId: this.defaultChainId,
                wallets: this.wallets,
                networks: this.networks,
                showHeader: this.showHeader,
                rpcWalletId: rpcWallet.instanceId
            };
            if ((_a = this.dappContainer) === null || _a === void 0 ? void 0 : _a.setData)
                this.dappContainer.setData(data);
        }
        async setData(value) {
            this._data = value;
            await this.resetRpcWallet();
            this.updateContractAddress();
            await this.refreshUI();
        }
        async getTag() {
            return this.tag;
        }
        updateTag(type, value) {
            var _a;
            this.tag[type] = (_a = this.tag[type]) !== null && _a !== void 0 ? _a : {};
            for (let prop in value) {
                if (value.hasOwnProperty(prop))
                    this.tag[type][prop] = value[prop];
            }
        }
        async setTag(value) {
            const newValue = value || {};
            for (let prop in newValue) {
                if (newValue.hasOwnProperty(prop)) {
                    if (prop === 'light' || prop === 'dark')
                        this.updateTag(prop, newValue[prop]);
                    else
                        this.tag[prop] = newValue[prop];
                }
            }
            if (this.dappContainer)
                this.dappContainer.setTag(this.tag);
            this.updateTheme();
            this.resizeLayout();
        }
        updateStyle(name, value) {
            value ?
                this.style.setProperty(name, value) :
                this.style.removeProperty(name);
        }
        updateTheme() {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            const themeVar = ((_a = this.dappContainer) === null || _a === void 0 ? void 0 : _a.theme) || 'light';
            this.updateStyle('--text-primary', (_b = this.tag[themeVar]) === null || _b === void 0 ? void 0 : _b.fontColor);
            this.updateStyle('--background-main', (_c = this.tag[themeVar]) === null || _c === void 0 ? void 0 : _c.backgroundColor);
            this.updateStyle('--input-font_color', (_d = this.tag[themeVar]) === null || _d === void 0 ? void 0 : _d.inputFontColor);
            this.updateStyle('--input-background', (_e = this.tag[themeVar]) === null || _e === void 0 ? void 0 : _e.inputBackgroundColor);
            //FIXME: temporary solution
            this.updateStyle('--primary-button-background', ((_f = this.tag[themeVar]) === null || _f === void 0 ? void 0 : _f.primaryButtonBackground) || 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box');
            this.updateStyle('--primary-button-hover-background', ((_g = this.tag[themeVar]) === null || _g === void 0 ? void 0 : _g.primaryButtonHoverBackground) || 'linear-gradient(255deg,#f15e61,#b52082)');
            this.updateStyle('--primary-button-disabled-background', ((_h = this.tag[themeVar]) === null || _h === void 0 ? void 0 : _h.primaryButtonDisabledBackground) || 'transparent linear-gradient(270deg,#351f52,#552a42) 0% 0% no-repeat padding-box');
            this.updateStyle('--max-button-background', ((_j = this.tag[themeVar]) === null || _j === void 0 ? void 0 : _j.maxButtonBackground) || 'transparent linear-gradient(255deg,#e75b66,#b52082) 0% 0% no-repeat padding-box');
            this.updateStyle('--max-button-hover-background', ((_k = this.tag[themeVar]) === null || _k === void 0 ? void 0 : _k.maxButtonHoverBackground) || 'linear-gradient(255deg,#f15e61,#b52082)');
        }
        setProviders() {
            var _a;
            const providers = ((_a = this.originalData) === null || _a === void 0 ? void 0 : _a.providers) || [];
            if (this.isFixedPair) {
                this.state.setProviderList([providers[0]]);
            }
            else {
                this.state.setProviderList(providers);
            }
        }
        updateContractAddress() {
            if (this.approvalModelAction) {
                if (this._data.campaignId !== undefined) {
                    this.contractAddress = this.state.getProxyAddress();
                }
                else {
                    this.contractAddress = '';
                }
                this.setApprovalSpenderAddress();
            }
        }
        get isFixedPair() {
            var _a;
            return ((_a = this._data) === null || _a === void 0 ? void 0 : _a.category) === 'fixed-pair';
        }
        get originalData() {
            if (!this._data)
                return undefined;
            const { category, providers } = this._data;
            if (!providers.length)
                return undefined;
            let _providers = [];
            if (this.isFixedPair) {
                const { key } = providers[0];
                let defaultProvider = {
                    key
                };
                _providers.push(defaultProvider);
            }
            else {
                let providersByKeys = {};
                providers.forEach(v => {
                    if (!providersByKeys[v.key]) {
                        providersByKeys[v.key] = [];
                    }
                    providersByKeys[v.key].push(v);
                });
                Object.keys(providersByKeys).forEach(k => {
                    const arr = providersByKeys[k];
                    const { key } = arr[0];
                    let defaultProvider = {
                        key
                    };
                    _providers.push(defaultProvider);
                });
            }
            return { category, providers: _providers };
        }
        async refreshUI() {
            this.setProviders();
            await this.initData();
            await this.initializeWidgetConfig();
        }
        constructor(parent, options) {
            super(parent, options);
            this._data = {
                category: 'fixed-pair',
                providers: [],
                tokens: [],
                defaultChainId: 0,
                wallets: [],
                networks: []
            };
            this.tag = {};
            this.defaultEdit = true;
            this.isInited = false;
            this.supportedChainList = [];
            this.clientEvents = [];
            // Cross Chain
            this.crossChainApprovalStatus = index_10.ApprovalStatus.NONE;
            this.oldSupportedChainList = [];
            this.onChainChange = async () => {
                var _a, _b;
                const currentChainId = this.state.getChainId();
                if (currentChainId != null && currentChainId != undefined)
                    this.swapBtn.visible = true;
                this.updateContractAddress();
                if ((_b = (_a = this.originalData) === null || _a === void 0 ? void 0 : _a.providers) === null || _b === void 0 ? void 0 : _b.length)
                    await this.initializeWidgetConfig();
            };
            this.redirectToken = () => {
                var _a, _b;
                const currentChainId = this.state.getChainId();
                let queryRouter = {
                    chainId: currentChainId,
                    fromToken: ((_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol) || this.fromTokenSymbol,
                    toToken: ((_b = this.toToken) === null || _b === void 0 ? void 0 : _b.symbol) || this.toTokenSymbol,
                };
                if (this.isCrossChain) {
                    this.isFrom = false;
                }
                if (this.isFrom) {
                    queryRouter = Object.assign(Object.assign({}, queryRouter), { toAmount: this.toInputValue.toFixed() });
                }
                else {
                    queryRouter = Object.assign(Object.assign({}, queryRouter), { fromAmount: this.fromInputValue.toFixed() });
                }
                this.fromTokenSymbol = queryRouter.fromToken;
                this.toTokenSymbol = queryRouter.toToken;
                this.targetChainId = queryRouter.toChainId;
                if (!this.isCrossChainEnabled) {
                    delete queryRouter['toChainId'];
                }
            };
            this.fixedNumber = (value) => {
                const val = typeof value === 'object' ? value : new eth_wallet_5.BigNumber(value);
                if (val.isNaN() || val.isZero())
                    return '';
                let formatted = '';
                if (val.gte(1)) {
                    formatted = val.toNumber().toLocaleString('en-US', { maximumFractionDigits: 4 });
                }
                else {
                    formatted = val.toNumber().toLocaleString('en-US', { maximumSignificantDigits: 4 });
                }
                return formatted.replace(/,/g, '');
            };
            this.initWallet = async () => {
                try {
                    await eth_wallet_5.Wallet.getClientInstance().init();
                    const rpcWallet = this.state.getRpcWallet();
                    await rpcWallet.init();
                }
                catch (err) {
                    console.log(err);
                }
            };
            this.initializeWidgetConfig = async (_chainId) => {
                setTimeout(async () => {
                    var _a;
                    const currentChainId = this.state.getChainId();
                    scom_token_list_5.tokenStore.updateTokenMapData(currentChainId);
                    this.closeNetworkErrModal();
                    await this.initWallet();
                    await this.updateBalance();
                    await this.onRenderChainList();
                    this.initializeDefaultTokenPair();
                    this.toggleReverseImage.enabled = !this.isFixedPair && !this.isCrossChain;
                    this.firstTokenInput.tokenReadOnly = this.isFixedPair;
                    this.secondTokenInput.tokenReadOnly = this.isFixedPair;
                    this.pnlBranding.visible = !!this._data.logo || !!this._data.title;
                    if ((_a = this._data.logo) === null || _a === void 0 ? void 0 : _a.startsWith('ipfs://')) {
                        this.imgLogo.url = this._data.logo.replace('ipfs://', '/ipfs/');
                    }
                    else {
                        this.imgLogo.url = this._data.logo;
                    }
                    this.lbTitle.caption = this._data.title;
                    this.updateSwapButtonCaption();
                    this.secondTokenInput.inputReadOnly = false;
                    this.firstTokenInput.inputReadOnly = false;
                    if (!this.isFixedPair) {
                        this.toggleReverseImage.classList.remove('cursor-default');
                    }
                    if (this.isCrossChain) {
                        this.initRoutes();
                        this.toInputValue = new eth_wallet_5.BigNumber(0);
                        if (this.secondTokenInput) {
                            this.secondTokenInput.value = '-';
                            this.secondTokenInput.inputReadOnly = true;
                        }
                        this.toggleReverseImage.classList.add('cursor-default');
                        if (this.isEstimated('from')) {
                            this.onUpdateEstimatedPosition(false, true);
                        }
                    }
                    else {
                        if (this.secondTokenInput) {
                            this.secondTokenInput.inputReadOnly = false;
                        }
                        this.toggleReverseImage.classList.remove('cursor-default');
                    }
                    if (this.fromInputValue.isGreaterThanOrEqualTo(0)) {
                        this.onUpdateEstimatedPosition(false, true);
                        this.firstTokenInput.value = this.fixedNumber(this.fromInputValue);
                    }
                    else if (this.toInputValue.isGreaterThanOrEqualTo(0)) {
                        this.onUpdateEstimatedPosition(true, true);
                        this.secondTokenInput.value = this.fixedNumber(this.toInputValue);
                    }
                    const tokens = (0, index_7.getSupportedTokens)(this._data.tokens || [], currentChainId);
                    this.firstTokenInput.tokenDataListProp = tokens;
                    if (!this.isCrossChain) {
                        this.secondTokenInput.tokenDataListProp = tokens;
                    }
                    else {
                        this.setTargetTokenList();
                    }
                    if (!this.record)
                        this.swapBtn.enabled = false;
                    this.onRenderPriceInfo();
                    this.redirectToken();
                    await this.handleAddRoute();
                });
            };
            this.totalAmount = () => {
                return this.fromInputValue;
            };
            this.getMinReceivedMaxSold = () => {
                var _a, _b;
                const slippageTolerance = this.state.slippageTolerance;
                if (!slippageTolerance)
                    return null;
                if (this.isFrom) {
                    const poolAmount = new eth_wallet_5.BigNumber((_a = this.record) === null || _a === void 0 ? void 0 : _a.amountIn);
                    if (poolAmount.isZero())
                        return null;
                    const minReceivedMaxSold = poolAmount.times(1 + slippageTolerance / 100).toNumber();
                    return minReceivedMaxSold;
                }
                else {
                    const poolAmount = new eth_wallet_5.BigNumber((_b = this.record) === null || _b === void 0 ? void 0 : _b.amountOut);
                    if (poolAmount.isZero())
                        return null;
                    const minReceivedMaxSold = poolAmount.times(1 - slippageTolerance / 100).toNumber();
                    return minReceivedMaxSold;
                }
            };
            this.onUpdateEstimatedPosition = (isFrom, reverseRouting = false) => {
                if (this.isFrom != isFrom) {
                    this.isFrom = isFrom;
                }
            };
            this.isEstimated = (tokenPosition, strict = false) => {
                if (tokenPosition === 'from') {
                    return strict ? this.isFrom && !this.fromInputValue.isZero() : this.isFrom;
                }
                else if (tokenPosition === 'to') {
                    return strict ? !this.isFrom && !this.toInputValue.isZero() : !this.isFrom;
                }
                else {
                    return false;
                }
            };
            this.onSwapConfirming = (key) => {
                this.setMapStatus('swap', key, index_10.ApprovalStatus.APPROVING);
                this.updateSwapButtonCaption();
                if (!this.swapBtn.rightIcon.visible)
                    this.swapBtn.rightIcon.visible = true;
            };
            this.onSwapConfirmed = async (data) => {
                const { key, isCrossChain } = data;
                this.setMapStatus('swap', key, index_10.ApprovalStatus.TO_BE_APPROVED);
                this.updateSwapButtonCaption();
                if (this.swapBtn.rightIcon.visible)
                    this.swapBtn.rightIcon.visible = false;
                await this.handleAddRoute();
                if (isCrossChain) {
                    this.showViewOrderModal();
                }
            };
            this.onSubmit = async () => {
                var _a, _b, _c, _d;
                try {
                    this.swapModal.visible = false;
                    this.showResultMessage('warning', `Swapping ${(0, index_10.formatNumber)(this.totalAmount(), 4)} ${(_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol} to ${(0, index_10.formatNumber)(this.toInputValue, 4)} ${(_b = this.toToken) === null || _b === void 0 ? void 0 : _b.symbol}`);
                    if (this.isCrossChain) {
                        if (this.toToken && this.fromToken && this.desChain) {
                            this.record.minReceivedMaxSold = this.getMinReceivedMaxSold();
                            const { error } = await (0, index_8.createBridgeVaultOrder)(this.state, {
                                vaultAddress: this.record.vaultAddress,
                                targetChainId: this.desChain.chainId,
                                tokenIn: this.fromToken,
                                tokenOut: this.toToken,
                                amountIn: this.record.fromAmount,
                                minAmountOut: this.record.minReceivedMaxSold,
                                sourceRouteInfo: this.record.sourceRouteObj ? { amountOut: this.record.sourceRouteObj.amountOut, pairs: this.record.sourceRouteObj.pairs } : undefined
                            });
                            if (error) {
                                this.showResultMessage('error', error);
                            }
                        }
                        return;
                    }
                    const route = this.record.bestRoute ? this.record.bestRoute : [this.fromToken, this.toToken];
                    const swapData = {
                        provider: this.record.provider,
                        queueType: this.record.queueType,
                        routeTokens: this.record.bestRoute,
                        bestSmartRoute: route,
                        pairs: this.record.pairs,
                        fromAmount: this.record.fromAmount,
                        toAmount: this.record.toAmount,
                        isFromEstimated: this.isFrom,
                        providerList: ((_c = this.originalData) === null || _c === void 0 ? void 0 : _c.providers) || [],
                        campaignId: this._data.campaignId,
                        referrer: (_d = this.commissions.find(v => v.chainId === this.state.getChainId())) === null || _d === void 0 ? void 0 : _d.walletAddress,
                    };
                    const { error } = await (0, index_8.executeSwap)(this.state, swapData);
                    if (error) {
                        this.showResultMessage('error', error);
                    }
                }
                catch (error) {
                    console.error(error);
                }
            };
            this.onApproveRouterMax = () => {
                this.showResultMessage('warning', 'Approving');
                this.setApprovalSpenderAddress();
                this.approvalModelAction.doApproveAction(this.fromToken, this.totalAmount().toString(), this.record);
            };
            this.onSetMaxBalance = async (value) => {
                var _a, _b, _c, _d;
                if (!((_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol))
                    return;
                this.isFrom = false;
                const address = ((_b = this.fromToken) === null || _b === void 0 ? void 0 : _b.address) || ((_c = this.fromToken) === null || _c === void 0 ? void 0 : _c.symbol);
                let balance = this.getBalance(this.fromToken);
                let inputVal = new eth_wallet_5.BigNumber(balance);
                if (!address) {
                    inputVal = new eth_wallet_5.BigNumber(0);
                }
                if (value == 0 || value) {
                    inputVal = inputVal.multipliedBy(value).dividedBy(100);
                }
                if (inputVal.eq(this.fromInputValue))
                    return;
                this.fromInputValue = inputVal;
                this.firstTokenInput.value = (0, index_10.limitDecimals)(this.fromInputValue.toFixed(), ((_d = this.fromToken) === null || _d === void 0 ? void 0 : _d.decimals) || 18);
                this.redirectToken();
                await this.handleAddRoute();
            };
            this.isMaxDisabled = () => {
                var _a, _b;
                const address = ((_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.address) || ((_b = this.fromToken) === null || _b === void 0 ? void 0 : _b.symbol);
                let balance = this.getBalance(this.fromToken);
                return !address || balance <= 0;
            };
            this.getSupportedChainList = () => {
                const list = this.networks;
                const testnetSupportedList = list.filter(v => index_7.crossChainSupportedChainIds.some(s => s.chainId === v.chainId && s.isTestnet));
                const mainnetSupportedList = list.filter(v => !index_7.crossChainSupportedChainIds.some(s => s.chainId === v.chainId && s.isTestnet));
                const isMainnet = mainnetSupportedList.some((item) => item.chainId == this.chainId);
                this.supportedChainList = isMainnet ? mainnetSupportedList : testnetSupportedList;
            };
            this.disableSelectChain = (disabled, isDes) => {
                const chains = isDes ? this.desChainList : this.srcChainList;
                const imgs = chains.querySelectorAll('i-image');
                imgs.forEach((elm) => {
                    const img = elm;
                    img.enabled = !disabled;
                    if (disabled) {
                        img.classList.add('.cursor-default');
                    }
                    else {
                        img.classList.remove('.cursor-default');
                    }
                });
            };
            this.selectSourceChain = async (obj, img) => {
                var _a;
                if ((this.srcChain && this.srcChain.chainId != obj.chainId) || !this.srcChain) {
                    const rpcWallet = this.state.getRpcWallet();
                    await rpcWallet.switchNetwork(obj.chainId);
                    if (!index_7.crossChainSupportedChainIds.some(v => v.chainId === obj.chainId)) {
                        this.selectDestinationChain(obj, img);
                    }
                    this.srcChain = obj;
                    this.srcChainLabel.caption = this.srcChain.chainName;
                    const selected = this.srcChainList.querySelector('.icon-selected');
                    if (selected) {
                        selected.classList.remove('icon-selected');
                    }
                    if (img) {
                        img.classList.add('icon-selected');
                    }
                    else {
                        (_a = this.srcChainList.firstElementChild) === null || _a === void 0 ? void 0 : _a.classList.add('icon-selected');
                    }
                }
            };
            this.selectDestinationChain = async (obj, img) => {
                var _a, _b, _c;
                if (!this.isCrossChainEnabled)
                    return;
                this.disableSelectChain(true, true);
                const selected = this.desChainList.querySelector('.icon-selected');
                if (selected) {
                    selected.classList.remove('icon-selected');
                }
                const oldDestination = this.desChain;
                try {
                    this.desChain = obj;
                    this.targetChainId = this.desChain.chainId;
                    await this.updateTargetChainBalances();
                    if (img) {
                        img.classList.add('icon-selected');
                    }
                    else {
                        const currentNetwork = (0, index_7.getNetworkInfo)((_a = this.supportedChainList.find((f) => f.chainId == obj.chainId)) === null || _a === void 0 ? void 0 : _a.chainId);
                        const img = this.desChainList.querySelector(`[data-tooltip="${currentNetwork === null || currentNetwork === void 0 ? void 0 : currentNetwork.chainName}"]`);
                        if (img) {
                            img.classList.add('icon-selected');
                        }
                    }
                }
                catch (err) {
                    console.log('err', err);
                    if (oldDestination) {
                        this.desChain = oldDestination;
                        if (selected) {
                            selected.classList.add('icon-selected');
                        }
                    }
                    else {
                        this.desChain = (0, index_7.getNetworkInfo)((_b = this.supportedChainList[0]) === null || _b === void 0 ? void 0 : _b.chainId);
                        (_c = this.desChainList.firstElementChild) === null || _c === void 0 ? void 0 : _c.classList.add('icon-selected');
                    }
                }
                if (this.desChain) {
                    this.targetChainId = this.desChain.chainId;
                    this.desChainLabel.caption = this.desChain.chainName;
                }
                this.setTargetTokenList();
                this.disableSelectChain(false, true);
            };
            this.setTargetTokenList = (isDisabled) => {
                var _a, _b;
                if (index_7.crossChainSupportedChainIds.some(v => { var _a; return v.chainId === ((_a = this.srcChain) === null || _a === void 0 ? void 0 : _a.chainId); }) && !isDisabled) {
                    const targetChainId = ((_a = this.desChain) === null || _a === void 0 ? void 0 : _a.chainId) || this.chainId;
                    if (this.secondTokenInput.chainId !== targetChainId) {
                        this.secondTokenInput.chainId = targetChainId;
                    }
                    this.secondTokenInput.tokenBalancesMapProp = this.targetChainTokenBalances;
                    this.secondTokenInput.tokenDataListProp = (0, index_7.getSupportedTokens)(this._data.tokens || [], targetChainId);
                }
                else {
                    const srcChainId = ((_b = this.srcChain) === null || _b === void 0 ? void 0 : _b.chainId) || this.chainId;
                    if (this.secondTokenInput.chainId !== srcChainId) {
                        this.secondTokenInput.chainId = srcChainId;
                    }
                    this.secondTokenInput.tokenDataListProp = (0, index_7.getSupportedTokens)(this._data.tokens || [], srcChainId);
                }
            };
            this.onSourceChainChanged = () => {
                var _a, _b;
                const selected = this.srcChainList.querySelector('.icon-selected');
                if (selected) {
                    selected.classList.remove('icon-selected');
                }
                this.getSupportedChainList();
                // if (!this.chainId) this.chainId = this.supportedChainList[0].chainId;
                const currentNetwork = (0, index_7.getNetworkInfo)((_a = this.supportedChainList.find((f) => f.chainId == this.chainId)) === null || _a === void 0 ? void 0 : _a.chainId);
                this.srcChain = currentNetwork;
                this.srcChainLabel.caption = ((_b = this.srcChain) === null || _b === void 0 ? void 0 : _b.chainName) || '-';
                const img = this.srcChainList.querySelector(`[network-name="${currentNetwork === null || currentNetwork === void 0 ? void 0 : currentNetwork.chainName}"]`);
                if (img) {
                    img.classList.add('icon-selected');
                }
            };
            this.onSelectSourceChain = async (obj, img) => {
                if (this.isMetaMask || !(0, index_7.isClientWalletConnected)()) {
                    await this.selectSourceChain(obj, img);
                    this.initializeWidgetConfig();
                }
            };
            this.onSelectDestinationChain = async (obj, img) => {
                var _a;
                if (obj.chainId === ((_a = this.desChain) === null || _a === void 0 ? void 0 : _a.chainId))
                    return;
                await this.selectDestinationChain(obj, img);
                this.initializeWidgetConfig();
            };
            this.setDefaultChain = async () => {
                var _a;
                if (this.supportedChainList && this.supportedChainList.length) {
                    let obj = this.supportedChainList.find((f) => f.chainId == this.chainId);
                    if (!obj)
                        obj = this.supportedChainList[0];
                    if (!this.srcChain && obj) {
                        await this.selectSourceChain((0, index_7.getNetworkInfo)(obj.chainId));
                    }
                    this.onSourceChainChanged();
                    const targetChain = this.supportedChainList.find((f) => f.chainId == this.targetChainId);
                    const isSupported = index_7.crossChainSupportedChainIds.some(v => v.chainId === (targetChain === null || targetChain === void 0 ? void 0 : targetChain.chainId));
                    if (!this.desChain && isSupported) {
                        await this.selectDestinationChain((0, index_7.getNetworkInfo)(targetChain.chainId));
                    }
                    else if (!isSupported && obj) {
                        await this.selectDestinationChain((0, index_7.getNetworkInfo)(obj.chainId));
                    }
                    else {
                        if (this.isCrossChain)
                            await this.updateTargetChainBalances();
                        if (this.toToken) {
                            const balance = this.getBalance(this.toToken, this.isCrossChain);
                            this.receiveBalance.caption = `Balance: ${(0, index_10.formatNumber)(balance, 4)} ${this.toToken.symbol}`;
                        }
                        this.setTargetTokenList();
                    }
                    this.desChainLabel.caption = ((_a = this.desChain) === null || _a === void 0 ? void 0 : _a.chainName) || '-';
                }
                else {
                    this.setTargetTokenList(true);
                }
            };
            this.initChainIcon = (network, isDes) => {
                const img = new components_8.Image();
                img.url = network.image;
                img.tooltip.content = network.chainName;
                img.classList.add('chain-icon');
                img.setAttribute('data-tooltip', network.chainName); // for query
                if (isDes) {
                    img.onClick = () => this.onSelectDestinationChain(network, img);
                    this.desChainList.appendChild(img);
                }
                else {
                    if (!this.isMetaMask) {
                        img.tooltip.content = `Swap supports this network ${network.chainName} (${network.chainId}), please switch network in the connected wallet.`;
                        img.classList.add('icon-disabled');
                    }
                    img.setAttribute('network-name', network.chainName);
                    img.setAttribute('chain-id', `${network.chainId}`);
                    img.onClick = () => this.onSelectSourceChain(network, img);
                    this.srcChainList.appendChild(img);
                }
            };
            this.updateSrcChainIconList = () => {
                const listElm = this.srcChainList.querySelectorAll('i-image');
                for (const elm of listElm) {
                    const networkName = elm.getAttribute('network-name');
                    const chainId = elm.getAttribute('chain-id');
                    const tooltip = this.isMetaMask ? networkName : `Swap supports this network ${networkName} (${chainId}), please switch network in the connected wallet.`;
                    if (tooltip) {
                        elm.tooltip.content = tooltip;
                    }
                    if (this.isMetaMask) {
                        elm.classList.remove('icon-disabled');
                    }
                    else {
                        elm.classList.add('icon-disabled');
                    }
                }
            };
            this.onRenderChainList = async () => {
                var _a, _b;
                this.oldSupportedChainList = this.supportedChainList.map(v => (0, index_7.getNetworkInfo)(v.chainId));
                this.getSupportedChainList();
                if (((_a = this.oldSupportedChainList[0]) === null || _a === void 0 ? void 0 : _a.chainId) == ((_b = this.supportedChainList[0]) === null || _b === void 0 ? void 0 : _b.chainId)) {
                    this.updateSrcChainIconList();
                    await this.setDefaultChain();
                    return;
                }
                ;
                this.srcChainList.innerHTML = '';
                this.desChainList.innerHTML = '';
                this.srcChain = undefined;
                this.desChain = undefined;
                this.supportedChainList.forEach((v) => {
                    const network = (0, index_7.getNetworkInfo)(v.chainId);
                    this.initChainIcon(network);
                    if (index_7.crossChainSupportedChainIds.some(v => v.chainId === network.chainId)) {
                        this.initChainIcon(network, true);
                    }
                });
                await this.setDefaultChain();
            };
            this.showViewOrderModal = () => {
                this.modalViewOrder.visible = true;
            };
            this.closeViewOrderModal = () => {
                this.modalViewOrder.visible = false;
            };
            this.onViewOrder = () => {
                this.modalViewOrder.visible = false;
                window.open('https://www.openswap.xyz/#/cross-chain-bridge-record');
            };
            this.showModalFees = () => {
                const fees = this.getFeeDetails();
                this.feesInfo.clearInnerHTML();
                fees.forEach((fee) => {
                    var _a;
                    this.feesInfo.appendChild(this.$render("i-hstack", { horizontalAlignment: "space-between", verticalAlignment: "center", margin: { top: 10 }, border: { bottom: { color: Theme.background.main, width: '2px', style: 'solid' } }, padding: { bottom: 16 } },
                        this.$render("i-hstack", { verticalAlignment: "center" },
                            this.$render("i-label", { caption: fee.title, margin: { right: 4 } }),
                            this.$render("i-icon", { name: "question-circle", width: 15, height: 15, fill: Theme.text.primary, tooltip: { content: fee.description }, "data-placement": "right" })),
                        this.$render("i-label", { class: "ml-auto", caption: `${(0, index_10.formatNumber)(fee.value)} ${(_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol}` })));
                });
                this.feesInfo.appendChild(this.$render("i-hstack", { horizontalAlignment: "space-between", verticalAlignment: "center", margin: { top: 16 } },
                    this.$render("i-hstack", { verticalAlignment: "center" },
                        this.$render("i-label", { caption: "Total Transaction Fee" })),
                    this.$render("i-label", { class: "ml-auto", caption: this.getTradeFeeExactAmount() })));
                this.modalFees.visible = true;
            };
            this.closeModalFees = () => {
                this.modalFees.visible = false;
            };
            this.showResultMessage = (status, content) => {
                if (!this.txStatusModal)
                    return;
                let params = { status };
                if (status === 'success') {
                    params.txtHash = content;
                }
                else {
                    params.content = content;
                }
                this.txStatusModal.message = Object.assign({}, params);
                this.txStatusModal.showModal();
            };
        }
        registerEvent() {
            this.clientEvents.push(this.$eventBus.register(this, "SlippageToleranceChanged" /* EventId.SlippageToleranceChanged */, () => { this.priceInfo.Items = this.getPriceInfo(); }));
            this.clientEvents.push(this.$eventBus.register(this, "ExpertModeChanged" /* EventId.ExpertModeChanged */, () => {
                this.updateSwapButtonCaption();
            }));
        }
        // get supportedNetworks() {
        //   let providers: IProvider[] = [];
        //   if (this.originalData?.providers) {
        //     providers = this.isFixedPair ? [this.originalData.providers[0]] : this.originalData.providers;
        //   }
        //   let supportedNetworks = [];
        //   for (const provider of providers) {
        //     supportedNetworks.push(...Object.keys(provider.contractInfo));
        //   }
        //   return uniqWith(supportedNetworks, (cur: any, oth: any) => { return cur == oth });
        // }
        get isApproveButtonShown() {
            const warningMessageText = this.getWarningMessageText();
            return warningMessageText === '' && this.approveButtonStatus !== undefined && this.approveButtonStatus !== index_10.ApprovalStatus.NONE;
        }
        get isPriceImpactTooHigh() {
            var _a;
            if (this.isCrossChain)
                return false;
            const warningMessageText = this.getWarningMessageText();
            return ((_a = this.record) === null || _a === void 0 ? void 0 : _a.priceImpact) > 15 && !this.state.isExpertMode && warningMessageText === priceImpactTooHighMsg;
        }
        get isInsufficientBalance() {
            if (!this.fromToken || !this.record)
                return false;
            const balance = this.getBalance(this.fromToken);
            return this.maxSold.gt(balance);
        }
        get maxSold() {
            if (!this.fromToken || !this.record)
                return new eth_wallet_5.BigNumber(0);
            if (!this.isFrom)
                return new eth_wallet_5.BigNumber(this.record.fromAmount);
            return new eth_wallet_5.BigNumber(this.getMinReceivedMaxSold() || this.record.fromAmount);
        }
        get isSwapping() {
            var _a;
            const key = (_a = this.record) === null || _a === void 0 ? void 0 : _a.key;
            return key && this.swapButtonStatusMap[key] === index_10.ApprovalStatus.APPROVING;
        }
        get approveButtonStatus() {
            var _a;
            const key = (_a = this.record) === null || _a === void 0 ? void 0 : _a.key;
            return this.approveButtonStatusMap[key];
        }
        get isApprovingRouter() {
            return this.approveButtonStatus === index_10.ApprovalStatus.APPROVING;
        }
        get isValidToken() {
            var _a, _b;
            if (((_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol) && ((_b = this.toToken) === null || _b === void 0 ? void 0 : _b.symbol)) {
                return true;
            }
            return false;
        }
        getTokenKey(token) {
            if (token.isNative) {
                return token.symbol;
            }
            return token.address.toLowerCase();
        }
        initializeDefaultTokenPair() {
            var _a, _b, _c;
            const currentChainId = this.state.getChainId();
            let currentChainTokens = (0, index_7.getSupportedTokens)(this._data.tokens || [], currentChainId);
            if (this.isCrossChain) {
                let targetChainTokens = (0, index_7.getSupportedTokens)(this._data.tokens || [], this.desChain.chainId);
                if (this.fromTokenSymbol && this.toTokenSymbol) {
                    const firstObj = currentChainTokens.find(item => this.fromTokenSymbol === item.symbol || this.fromTokenSymbol === item.address);
                    if (firstObj) {
                        this.fromToken = firstObj;
                    }
                    else {
                        this.fromToken = currentChainTokens[0];
                    }
                    const secondObj = targetChainTokens.find(item => this.toTokenSymbol === item.symbol || this.toTokenSymbol === item.address);
                    if (secondObj) {
                        this.toToken = secondObj;
                    }
                    else {
                        this.toToken = targetChainTokens[0];
                    }
                    this.onUpdateToken(this.fromToken, true);
                    this.onUpdateToken(this.toToken, false);
                    this.firstTokenInput.token = this.fromToken;
                    this.secondTokenInput.token = this.toToken;
                    this.fromInputValue = this.fromInputValue || new eth_wallet_5.BigNumber(defaultInput);
                }
                else {
                    let firstDefaultToken = currentChainTokens[0];
                    let secondDefaultToken = targetChainTokens[0];
                    const fromAmount = parseFloat(defaultInput);
                    this.fromInputValue = new eth_wallet_5.BigNumber(fromAmount);
                    this.onUpdateToken(firstDefaultToken, true);
                    this.onUpdateToken(secondDefaultToken, false);
                    this.firstTokenInput.token = this.fromToken;
                    this.secondTokenInput.token = this.toToken;
                }
                return;
            }
            if (currentChainTokens.length < 2)
                return;
            const providers = (_a = this.originalData) === null || _a === void 0 ? void 0 : _a.providers;
            if (providers && providers.length) {
                let fromTokenKey = this.getTokenKey(currentChainTokens[0]);
                let toTokenKey = this.getTokenKey(currentChainTokens[1]);
                this.fromToken = scom_token_list_5.tokenStore.tokenMap[fromTokenKey];
                this.toToken = scom_token_list_5.tokenStore.tokenMap[toTokenKey];
                this.fromTokenSymbol = (_b = this.fromToken) === null || _b === void 0 ? void 0 : _b.symbol;
                this.toTokenSymbol = (_c = this.toToken) === null || _c === void 0 ? void 0 : _c.symbol;
                this.fromInputValue = new eth_wallet_5.BigNumber(defaultInput);
                this.onUpdateToken(this.fromToken, true);
                this.onUpdateToken(this.toToken, false);
                this.firstTokenInput.token = this.fromToken;
                this.secondTokenInput.token = this.toToken;
                this.toggleReverseImage.classList.add('cursor-default');
            }
        }
        async initApprovalModelAction() {
            this.approvalModelAction = await this.state.setApprovalModelAction({
                sender: this,
                payAction: this.onSubmit,
                onToBeApproved: async (token, data) => {
                    if (this.isCrossChain) {
                        this.crossChainApprovalStatus = index_10.ApprovalStatus.TO_BE_APPROVED;
                    }
                    else {
                        this.setMapStatus('approve', data.key, index_10.ApprovalStatus.TO_BE_APPROVED);
                        this.setMapStatus('swap', data.key, index_10.ApprovalStatus.TO_BE_APPROVED);
                    }
                    this.updateSwapButtonCaption();
                    const enabled = !this.isSwapButtonDisabled();
                    this.swapBtn.enabled = enabled;
                },
                onToBePaid: async (token, data) => {
                    if (this.isCrossChain) {
                        this.crossChainApprovalStatus = index_10.ApprovalStatus.NONE;
                    }
                    else {
                        this.setMapStatus('approve', data.key, index_10.ApprovalStatus.NONE);
                        this.setMapStatus('swap', data.key, index_10.ApprovalStatus.TO_BE_APPROVED);
                    }
                    this.updateSwapButtonCaption();
                    const enabled = !this.isSwapButtonDisabled();
                    this.swapBtn.enabled = enabled;
                },
                onApproving: async (token, receipt, data) => {
                    if (this.isCrossChain) {
                        this.crossChainApprovalStatus = index_10.ApprovalStatus.APPROVING;
                    }
                    else {
                        this.setMapStatus('approve', data.key, index_10.ApprovalStatus.APPROVING);
                    }
                    this.updateSwapButtonCaption();
                    this.showResultMessage('success', receipt);
                    if ((this.isApprovingRouter || this.isCrossChain) && !this.swapBtn.rightIcon.visible)
                        this.swapBtn.rightIcon.visible = true;
                },
                onApproved: async (token, data) => {
                    if (this.isCrossChain) {
                        this.crossChainApprovalStatus = index_10.ApprovalStatus.NONE;
                    }
                    else {
                        this.setMapStatus('approve', data.key, index_10.ApprovalStatus.NONE);
                    }
                    this.updateSwapButtonCaption();
                    if (this.swapBtn.rightIcon.visible)
                        this.swapBtn.rightIcon.visible = false;
                    await this.handleAddRoute();
                },
                onApprovingError: async (token, err) => {
                    this.showResultMessage('error', err);
                    this.crossChainApprovalStatus = index_10.ApprovalStatus.TO_BE_APPROVED;
                    if (this.swapBtn.rightIcon.visible)
                        this.swapBtn.rightIcon.visible = false;
                },
                onPaying: async (receipt, data) => {
                    this.showResultMessage('success', receipt);
                    this.onSwapConfirming(data.key);
                },
                onPaid: async (data) => {
                    this.onSwapConfirmed({ key: data.key, isCrossChain: this.isCrossChain });
                    await this.updateBalance();
                    components_8.application.EventBus.dispatch("Paid" /* EventId.Paid */, 'onPaid');
                },
                onPayingError: async (err) => {
                    this.showResultMessage('error', err);
                }
            });
        }
        async onRevertSwap() {
            if (this.isCrossChain)
                return;
            this.onUpdateEstimatedPosition(!this.isEstimated('from'), true);
            [this.fromToken, this.toToken] = [this.toToken, this.fromToken];
            const enabled = !this.isMaxDisabled();
            this.maxButton.enabled = enabled;
            [this.fromInputValue, this.toInputValue] = [this.toInputValue, this.fromInputValue];
            [this.payBalance.caption, this.receiveBalance.caption] = [this.receiveBalance.caption, this.payBalance.caption];
            [this.fromTokenSymbol, this.toTokenSymbol] = [this.toTokenSymbol, this.fromTokenSymbol];
            this.firstTokenInput.token = this.fromToken;
            this.secondTokenInput.token = this.toToken;
            this.firstTokenInput.value = this.getInputValue(true);
            this.secondTokenInput.value = this.getInputValue(false);
            this.redirectToken();
            await this.handleAddRoute();
        }
        setupCrossChainPopup() {
            var _a, _b, _c;
            const arrows = this.swapModal.querySelectorAll('i-icon.arrow-down');
            if (!this.isCrossChain) {
                arrows.forEach((arrow) => {
                    arrow.classList.remove('arrow-down--chain');
                });
            }
            else {
                arrows.forEach((arrow) => {
                    arrow.classList.add('arrow-down--chain');
                });
            }
            (_a = this.lbReminderRejected) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
            if (this.isCrossChain && this.srcChain && this.desChain) {
                this.srcChainFirstPanel.classList.remove('hidden');
                this.targetChainFirstPanel.classList.remove('hidden');
                this.srcChainTokenImage.url = this.srcChain.image;
                this.srcChainTokenLabel.caption = this.srcChain.chainName;
                this.targetChainTokenImage.url = this.desChain.image;
                this.targetChainTokenLabel.caption = this.desChain.chainName;
                const { sourceVaultToken, targetVaultToken, sourceRouteObj, vaultTokenFromSourceChain, vaultTokenToTargetChain } = this.record;
                if (sourceVaultToken && sourceRouteObj) {
                    this.srcChainSecondPanel.classList.remove('hidden');
                    this.srcChainVaultImage.url = this.srcChain.image;
                    this.srcChainVaultLabel.caption = this.srcChain.chainName;
                    this.srcVaultTokenImage.url = scom_token_list_5.assets.getTokenIconPath(sourceVaultToken, this.srcChain.chainId);
                    this.srcVaultTokenLabel.caption = sourceVaultToken.symbol;
                    this.srcVaultTokenValue.caption = (0, index_10.formatNumber)(vaultTokenFromSourceChain);
                    (_b = this.lbReminderRejected) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
                    this.lbReminderRejected.caption = `If the order is not executed in the target chain, the estimated withdrawalble amount is <b class="text-pink">${(0, index_10.formatNumber)(vaultTokenFromSourceChain)} ${sourceVaultToken === null || sourceVaultToken === void 0 ? void 0 : sourceVaultToken.symbol}</b>`;
                }
                else {
                    this.srcChainSecondPanel.classList.add('hidden');
                }
                if (targetVaultToken && targetVaultToken.symbol !== ((_c = this.toToken) === null || _c === void 0 ? void 0 : _c.symbol)) {
                    this.targetChainSecondPanel.classList.remove('hidden');
                    this.targetChainVaultImage.url = this.desChain.image;
                    this.targetChainVaultLabel.caption = this.desChain.chainName;
                    this.targetVaultTokenImage.url = scom_token_list_5.assets.getTokenIconPath(targetVaultToken, this.desChain.chainId);
                    this.targetVaultTokenLabel.caption = targetVaultToken.symbol;
                    this.targetVaultTokenValue.caption = (0, index_10.formatNumber)(vaultTokenToTargetChain);
                    // Hide vault info at toToken
                    this.crossChainVaultInfoVstack.classList.add('hidden');
                }
                else {
                    this.targetChainSecondPanel.classList.add('hidden');
                    // Show vault info at the end if vaultTokenSymbol same as toToken
                    this.crossChainVaultInfoVstack.classList.remove('hidden');
                }
            }
            else {
                this.srcChainFirstPanel.classList.add('hidden');
                this.targetChainFirstPanel.classList.add('hidden');
                this.srcChainSecondPanel.classList.add('hidden');
                this.targetChainSecondPanel.classList.add('hidden');
                this.crossChainVaultInfoVstack.classList.add('hidden');
            }
        }
        handleSwapPopup() {
            var _a, _b, _c, _d, _e;
            if (!this.record)
                return;
            this.setupCrossChainPopup();
            const currentChainId = this.state.getChainId();
            const slippageTolerance = this.state.slippageTolerance;
            this.fromTokenImage.url = scom_token_list_5.assets.tokenPath(this.fromToken, currentChainId);
            this.fromTokenLabel.caption = (_b = (_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol) !== null && _b !== void 0 ? _b : '';
            this.fromTokenValue.caption = (0, index_10.formatNumber)(this.totalAmount(), 4);
            this.toTokenImage.url = scom_token_list_5.assets.tokenPath(this.toToken, this.isCrossChain ? (_c = this.desChain) === null || _c === void 0 ? void 0 : _c.chainId : currentChainId);
            this.toTokenLabel.caption = (_e = (_d = this.toToken) === null || _d === void 0 ? void 0 : _d.symbol) !== null && _e !== void 0 ? _e : '';
            this.toTokenValue.caption = (0, index_10.formatNumber)(this.toInputValue, 4);
            const minimumReceived = this.getMinReceivedMaxSold();
            if (minimumReceived || minimumReceived == 0) {
                this.payOrReceiveValue.caption = (0, index_10.formatNumber)(minimumReceived, 4);
            }
            else {
                this.payOrReceiveValue.caption = ' - ';
            }
            this.payOrReceiveToken.caption = this.isFrom ? this.fromTokenLabel.caption : this.toTokenLabel.caption;
            this.lbEstimate.caption = `${this.isFrom ? 'Input' : 'Output'} is estimated. If the price change by more than ${slippageTolerance}%, your transaction will revert`;
            this.lbPayOrReceive.caption = this.isFrom ? 'You will pay at most' : 'You will receive at least';
            this.priceInfo2.Items = this.getPriceInfo();
            this.swapModal.visible = true;
        }
        doSwap() {
            this.approvalModelAction.doPayAction(this.record);
        }
        async onUpdateToken(token, isFrom) {
            if (!token)
                return;
            const balance = this.getBalance(token, !isFrom && this.isCrossChain);
            if (isFrom) {
                this.fromToken = token;
                const enabled = !this.isMaxDisabled();
                this.maxButton.enabled = enabled;
                if (this.fromInputValue.gt(0)) {
                    const limit = (0, index_10.limitDecimals)(this.fromInputValue.toFixed(), token.decimals || 18);
                    if (!this.fromInputValue.eq(limit)) {
                        if (this.firstTokenInput) {
                            this.firstTokenInput.value = limit === '0' ? '' : limit;
                        }
                        this.fromInputValue = new eth_wallet_5.BigNumber(limit);
                    }
                }
                else if (this.fromInputValue.isZero()) {
                    this.onUpdateEstimatedPosition(true);
                }
                this.payBalance.caption = `Balance: ${(0, index_10.formatNumber)(balance, 4)} ${token.symbol}`;
                this.updateTokenInput(true);
            }
            else {
                this.toToken = token;
                if (this.toInputValue.gt(0)) {
                    const limit = (0, index_10.limitDecimals)(this.toInputValue.toFixed(), token.decimals || 18);
                    if (!this.toInputValue.eq(limit)) {
                        if (this.secondTokenInput) {
                            this.secondTokenInput.value = limit === '0' ? '' : limit;
                            ;
                        }
                        this.toInputValue = new eth_wallet_5.BigNumber(limit);
                    }
                }
                else if (this.toInputValue.isZero()) {
                    this.onUpdateEstimatedPosition(false);
                }
                this.receiveBalance.caption = `Balance: ${(0, index_10.formatNumber)(balance, 4)} ${token.symbol}`;
                await this.updateTokenInput(false);
            }
        }
        async onSelectToken(token, isFrom) {
            if (!token)
                return;
            this.firstTokenInput.enabled = false;
            this.secondTokenInput.enabled = false;
            if (token.isNew && this.state.isRpcWalletConnected()) {
                const rpcWallet = this.state.getRpcWallet();
                await scom_token_list_5.tokenStore.updateAllTokenBalances(rpcWallet);
                this.allTokenBalancesMap = scom_token_list_5.tokenStore.tokenBalances;
            }
            await this.onUpdateToken(token, isFrom);
            this.redirectToken();
            await this.handleAddRoute();
            this.firstTokenInput.enabled = true;
            this.secondTokenInput.enabled = true;
        }
        setApprovalSpenderAddress() {
            var _a;
            const item = this.record;
            if (!item)
                return;
            const market = ((_a = this.state.getProviderByKey(item.provider)) === null || _a === void 0 ? void 0 : _a.key) || '';
            if (this.approvalModelAction) {
                if (this.isCrossChain && item.contractAddress) {
                    (0, index_8.setApprovalModalSpenderAddress)(this.state, market, item.contractAddress);
                }
                else if (this._data.campaignId !== undefined) {
                    this.contractAddress = this.state.getProxyAddress();
                    (0, index_8.setApprovalModalSpenderAddress)(this.state, market, this.contractAddress);
                }
                else {
                    (0, index_8.setApprovalModalSpenderAddress)(this.state, market);
                }
            }
        }
        getInputValue(isFrom) {
            const token = isFrom ? this.fromToken : this.toToken;
            const value = isFrom ? this.fromInputValue : this.toInputValue;
            if (!value || value.isNaN())
                return '';
            return (0, index_10.limitDecimals)(value.toFixed(), (token === null || token === void 0 ? void 0 : token.decimals) || 18);
        }
        async updateTokenInput(isFrom, init) {
            const inputEl = isFrom ? this.firstTokenInput : this.secondTokenInput;
            if (inputEl)
                inputEl.value = this.getInputValue(isFrom);
        }
        async onSelectRouteItem(item) {
            if (this.isFrom) {
                if (this.payCol.children) {
                    let balanceValue = item.amountIn;
                    this.firstTokenInput.value = this.fixedNumber(balanceValue);
                    this.fromInputValue = typeof balanceValue !== 'object' ? new eth_wallet_5.BigNumber(balanceValue) : balanceValue;
                }
            }
            else {
                if (this.receiveCol.children) {
                    let balanceValue = item.amountOut;
                    this.secondTokenInput.value = this.fixedNumber(balanceValue);
                    this.toInputValue = typeof balanceValue !== 'object' ? new eth_wallet_5.BigNumber(balanceValue) : balanceValue;
                }
            }
            this.record = item;
            if (this.isCrossChain && this.fromToken && !this.fromToken.isNative && this.state.isRpcWalletConnected()) {
                try {
                    this.setApprovalSpenderAddress();
                    await this.approvalModelAction.checkAllowance(this.fromToken, this.fromInputValue.toFixed());
                }
                catch (e) {
                    console.log('Cannot check the Approval status (Cross Chain)', e);
                }
            }
            const isButtonLoading = this.isButtonLoading();
            if (this.swapBtn.rightIcon.visible != isButtonLoading) {
                this.swapBtn.rightIcon.visible = isButtonLoading;
            }
            if (this.priceInfo)
                this.priceInfo.Items = this.getPriceInfo();
        }
        onTokenInputChange(source) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(async () => {
                var _a, _b, _c, _d;
                const fromInput = (_a = this.payCol.getElementsByTagName('I-INPUT')) === null || _a === void 0 ? void 0 : _a[0];
                const toInput = (_b = this.receiveCol.getElementsByTagName('I-INPUT')) === null || _b === void 0 ? void 0 : _b[0];
                const isFrom = source.isSameNode(fromInput);
                const amount = source.value;
                if ((0, index_10.isInvalidInput)(amount)) {
                    this.resetValuesByInput();
                    if (fromInput)
                        fromInput.value = '0';
                    if (toInput)
                        toInput.value = '0';
                    return;
                }
                const limit = isFrom ? (_c = this.fromToken) === null || _c === void 0 ? void 0 : _c.decimals : (_d = this.toToken) === null || _d === void 0 ? void 0 : _d.decimals;
                const value = new eth_wallet_5.BigNumber((0, index_10.limitDecimals)(amount, limit || 18));
                if (!value.gt(0)) {
                    this.resetValuesByInput();
                    if (isFrom && toInput) {
                        toInput.value = '0';
                    }
                    else if (!isFrom && fromInput) {
                        fromInput.value = '0';
                    }
                }
                else {
                    let valueChanged = false;
                    const isLastDot = amount.indexOf('.') === amount.length - 1;
                    if (isFrom) {
                        if (!this.fromInputValue.eq(value)) {
                            this.fromInputValue = value;
                            this.onUpdateEstimatedPosition(false, true);
                            valueChanged = true;
                        }
                        if (!isLastDot)
                            fromInput.value = value.toFixed();
                    }
                    else {
                        if (!this.toInputValue.eq(value)) {
                            this.toInputValue = value;
                            this.onUpdateEstimatedPosition(true, true);
                            valueChanged = true;
                        }
                        if (!isLastDot)
                            toInput.value = value.toFixed();
                    }
                    this.redirectToken();
                    if (valueChanged)
                        await this.handleAddRoute();
                }
            }, 1000);
        }
        resetValuesByInput() {
            this.initRoutes();
            if (this.priceInfo)
                this.priceInfo.Items = this.getPriceInfo();
            this.fromInputValue = new eth_wallet_5.BigNumber(0);
            this.toInputValue = new eth_wallet_5.BigNumber(0);
            this.redirectToken();
        }
        initRoutes() {
            this.record = null;
            this.isPriceToggled = false;
            this.swapBtn.visible = false;
        }
        async handleAddRoute() {
            var _a, _b, _c, _d;
            if (!this.fromToken || !this.toToken || !(this.fromInputValue.gt(0) || this.toInputValue.gt(0)))
                return;
            this.initRoutes();
            let listRouting = [];
            const useAPI = this._data.category === 'aggregator';
            this.updateContractAddress();
            if (!this.isCrossChain) {
                listRouting = await (0, index_8.getAllRoutesData)(this.state, this.fromToken, this.toToken, this.fromInputValue, this.toInputValue, this.isFrom, useAPI);
                listRouting = listRouting.map((v) => {
                    return Object.assign(Object.assign({}, v), { isHybrid: false // market == Market.HYBRID,
                     });
                });
            }
            else if (this.srcChain && this.desChain) {
                const tokenIn = Object.assign({}, this.fromToken);
                const tokenOut = Object.assign({}, this.toToken);
                listRouting = await (0, index_8.getCrossChainRouteOptions)(this.state, {
                    fromChainId: this.srcChain.chainId,
                    toChainId: this.desChain.chainId,
                    tokenIn: tokenIn,
                    tokenOut: tokenOut,
                    amountIn: this.fromInputValue
                });
                listRouting = listRouting.map((v) => {
                    var _a;
                    let route = {};
                    if (v.sourceRouteObj) {
                        const amountOut = v.targetRouteObj ? v.targetRouteObj.amountOut : v.sourceRouteObj.amountOut;
                        route = Object.assign(Object.assign(Object.assign({}, v), v.sourceRouteObj), { tradeFee: v.tradeFee, price: v.price, amountOut: new eth_wallet_5.BigNumber(amountOut) });
                        if (v.targetRouteObj) {
                            const market = ((_a = this.state.getProviderByKey(v.targetRouteObj.provider)) === null || _a === void 0 ? void 0 : _a.key) || '';
                            if (market) {
                                route.targetRouteObj = Object.assign(Object.assign({}, route.targetRouteObj), { route: v.targetRouteObj.bestRoute, isHybrid: false //market == Market.HYBRID,
                                 });
                            }
                            else {
                                route.targetRouteObj = undefined;
                            }
                        }
                    }
                    else {
                        route = Object.assign(Object.assign(Object.assign({}, v), v.targetRouteObj), { tradeFee: v.tradeFee, price: v.price });
                    }
                    return Object.assign(Object.assign({}, route), { fromAmount: new eth_wallet_5.BigNumber(route.fromAmount) });
                });
                if (listRouting.length) {
                    (_a = this.minSwapHintLabel) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
                }
                else {
                    (_b = this.minSwapHintLabel) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
                }
            }
            if (listRouting[0] && this.isCrossChain) {
                const assetSymbol = listRouting[0].targetVaultToken.symbol;
                const { vaultAddress, vaultRegistryAddress, tokenAddress: vaultTokenAddress, softCap } = index_7.bridgeVaultConstantMap[assetSymbol === 'USDT.e' ? 'USDT' : assetSymbol][this.desChain.chainId];
                const [vault, vaultAssetBalance, bonds, oraclePriceMap] = await Promise.all([
                    (0, index_9.getBridgeVault)(this.desChain.chainId, vaultAddress),
                    (0, index_9.getVaultAssetBalance)(this.desChain.chainId, vaultAddress),
                    (0, index_9.getBondsInBridgeVault)(this.state, this.desChain.chainId, vaultRegistryAddress),
                    (0, index_9.getOraclePriceMap)(this.desChain.chainId)
                ]);
                const assetBalance = vaultAssetBalance !== null && vaultAssetBalance !== void 0 ? vaultAssetBalance : 0;
                const assetDecimal = listRouting[0].targetVaultToken.decimals;
                const targetVaultAssetBalance = (new eth_wallet_5.BigNumber(assetBalance)).shiftedBy(-assetDecimal);
                const targetVaultBondBalance = bonds.reduce((acc, cur) => {
                    var _a;
                    if (cur.chainId !== ((_a = this.desChain) === null || _a === void 0 ? void 0 : _a.chainId))
                        return acc;
                    acc = acc.plus((new eth_wallet_5.BigNumber(cur.bond)).shiftedBy(-18));
                    return acc;
                }, new eth_wallet_5.BigNumber(0));
                const vaultTokenToTargetChain = new eth_wallet_5.BigNumber(listRouting[0].vaultTokenToTargetChain);
                const vaultToUsdPrice = oraclePriceMap[vaultTokenAddress.toLowerCase()]; // This will be the vaultToken -> USD Price
                const oswapToUsdPrice = oraclePriceMap[index_7.bridgeVaultConstantMap['OSWAP'][this.desChain.chainId].tokenAddress.toLowerCase()];
                const vaultToOswapPrice = vaultToUsdPrice.div(oswapToUsdPrice); // This will vaultToken -> oswap price;
                this.targetVaultAssetBalanceLabel1.caption = `Vault Asset Balance: ${(0, index_10.formatNumber)(targetVaultAssetBalance.toNumber(), 4)} ${assetSymbol}`;
                this.targetVaultAssetBalanceLabel2.caption = `Vault Asset Balance: ${(0, index_10.formatNumber)(targetVaultAssetBalance.toNumber(), 4)} ${assetSymbol}`;
                if (!vault.vaultGroup) {
                    this.targetVaultBondBalanceLabel1.caption = `Vault Bond Balance: ${(0, index_10.formatNumber)(targetVaultBondBalance.toNumber(), 4)} ${assetSymbol}`;
                    this.targetVaultBondBalanceLabel2.caption = `Vault Bond Balance: ${(0, index_10.formatNumber)(targetVaultBondBalance.toNumber(), 4)} ${assetSymbol}`;
                }
                else if (vault.vaultGroup === 'OSWAP') {
                    this.targetVaultBondBalanceLabel1.caption = `Vault Bond Balance: ${(0, index_10.formatNumber)(targetVaultBondBalance.toNumber(), 4)} OSWAP`;
                    this.targetVaultBondBalanceLabel2.caption = `Vault Bond Balance: ${(0, index_10.formatNumber)(targetVaultBondBalance.toNumber(), 4)} OSWAP`;
                }
                else {
                    this.targetVaultBondBalanceLabel1.caption = `Vault Bond Balance: ${(0, index_10.formatNumber)(targetVaultBondBalance.toNumber(), 4)} OSWAP &#8776; ${(0, index_10.formatNumber)(targetVaultBondBalance.div(vaultToOswapPrice).toNumber(), 4)} ${assetSymbol}`;
                    this.targetVaultBondBalanceLabel2.caption = `Vault Bond Balance: ${(0, index_10.formatNumber)(targetVaultBondBalance.toNumber(), 4)} OSWAP &#8776; ${(0, index_10.formatNumber)(targetVaultBondBalance.div(vaultToOswapPrice).toNumber(), 4)} ${assetSymbol}`;
                }
                this.crossChainSoftCapLabel1.caption = softCap ? `Cap: ${(0, index_10.formatNumber)(softCap)} ${assetSymbol}` : "-";
                this.crossChainSoftCapLabel2.caption = softCap ? `Cap: ${(0, index_10.formatNumber)(softCap)} ${assetSymbol}` : "-";
                const minValue = eth_wallet_5.BigNumber.min(targetVaultAssetBalance, targetVaultBondBalance, softCap);
                if (minValue.eq(targetVaultAssetBalance)) {
                    this.targetVaultAssetBalanceLabel1.classList.add('text--limit');
                    this.targetVaultAssetBalanceLabel2.classList.add('text--limit');
                    this.targetVaultBondBalanceLabel1.classList.remove('text--limit');
                    this.targetVaultBondBalanceLabel2.classList.remove('text--limit');
                    this.crossChainSoftCapLabel1.classList.remove('text--limit');
                    this.crossChainSoftCapLabel2.classList.remove('text--limit');
                }
                else if (minValue.eq(targetVaultBondBalance)) {
                    this.targetVaultAssetBalanceLabel1.classList.remove('text--limit');
                    this.targetVaultAssetBalanceLabel2.classList.remove('text--limit');
                    this.targetVaultBondBalanceLabel1.classList.add('text--limit');
                    this.targetVaultBondBalanceLabel2.classList.add('text--limit');
                    this.crossChainSoftCapLabel1.classList.remove('text--limit');
                    this.crossChainSoftCapLabel2.classList.remove('text--limit');
                }
                else {
                    this.targetVaultAssetBalanceLabel1.classList.remove('text--limit');
                    this.targetVaultAssetBalanceLabel2.classList.remove('text--limit');
                    this.targetVaultBondBalanceLabel1.classList.remove('text--limit');
                    this.targetVaultBondBalanceLabel2.classList.remove('text--limit');
                    this.crossChainSoftCapLabel1.classList.add('text--limit');
                    this.crossChainSoftCapLabel2.classList.add('text--limit');
                }
                if (softCap && vaultTokenToTargetChain.toNumber() >= softCap) {
                    this.swapModalConfirmBtn.caption = 'Cap Reached';
                    this.swapModalConfirmBtn.enabled = false;
                }
                else if (vaultTokenToTargetChain.gt(targetVaultAssetBalance) || vaultTokenToTargetChain.multipliedBy(vaultToOswapPrice).gt(targetVaultBondBalance)) {
                    this.swapModalConfirmBtn.caption = 'Exceed Vault Asset Balance or Bond Balance';
                    this.swapModalConfirmBtn.enabled = false;
                }
                else {
                    this.swapModalConfirmBtn.enabled = true;
                }
                this.crossChainApprovalStatus = listRouting[0].isApproveButtonShown ? index_10.ApprovalStatus.TO_BE_APPROVED : index_10.ApprovalStatus.NONE;
            }
            this.disableSelectChain(false);
            this.disableSelectChain(false, true);
            this.swapModalConfirmBtn.caption = 'Confirm Swap';
            this.swapModalConfirmBtn.enabled = true;
            this.record = listRouting[0] || null;
            this.swapButtonStatusMap = {};
            this.approveButtonStatusMap = {};
            this.initRoutes();
            const pricePercent = this.getPricePercent(listRouting, false);
            if (listRouting.length) {
                // this.receiveCol.classList.add('bg-box--active');
                this.lbRouting.classList.add('visibility-hidden');
                const option = listRouting[0];
                await this.onSelectRouteItem(option);
            }
            else {
                // this.receiveCol.classList.remove('bg-box--active');
                this.lbRouting.classList.remove('visibility-hidden');
                if (this.priceInfo)
                    this.priceInfo.Items = this.getPriceInfo();
                if (this.isEstimated('to')) {
                    this.toInputValue = new eth_wallet_5.BigNumber(0);
                    this.secondTokenInput.value = '';
                }
                else {
                    this.fromInputValue = new eth_wallet_5.BigNumber(0);
                    this.firstTokenInput.value = '';
                }
            }
            if (this.record) {
                this.setApprovalSpenderAddress();
                await this.approvalModelAction.checkAllowance(this.fromToken, this.fromInputValue.toFixed(), this.record);
                this.swapBtn.visible = true;
                const total = ((_c = this.record) === null || _c === void 0 ? void 0 : _c.fromAmount) ? new eth_wallet_5.BigNumber(this.record.fromAmount) : new eth_wallet_5.BigNumber(0);
                this.lbYouPayTitle.caption = `You Pay`;
                this.lbYouPayValue.caption = `${(0, index_10.formatNumber)(total)} ${(_d = this.fromToken) === null || _d === void 0 ? void 0 : _d.symbol}`;
            }
            else {
                this.updateSwapButtonCaption();
                this.swapBtn.visible = true;
                this.swapBtn.enabled = !this.isSwapButtonDisabled();
            }
        }
        getPricePercent(routes, isFrom) {
            if (routes && routes.length > 1) {
                const amountStr = isFrom ? 'amountIn' : 'amountOut';
                const firstAmount = new eth_wallet_5.BigNumber(routes[0][amountStr] || 0);
                const secondAmount = new eth_wallet_5.BigNumber(routes[1][amountStr] || 0);
                if (firstAmount.eq(0) || secondAmount.eq(0)) {
                    return 0;
                }
                let percent = new eth_wallet_5.BigNumber(0);
                if (isFrom) {
                    percent = secondAmount.minus(firstAmount).dividedBy(firstAmount);
                }
                else {
                    percent = firstAmount.minus(secondAmount).dividedBy(secondAmount);
                }
                percent = percent.multipliedBy(100);
                if (percent.gte(0.01)) {
                    return `Save ${(0, index_10.formatNumber)(percent.toNumber(), 2)}%`;
                }
            }
            return 0;
        }
        // Price Info
        onTogglePrice(priceInfo) {
            this.isPriceToggled = !this.isPriceToggled;
            priceInfo.Items = this.getPriceInfo();
        }
        getRate() {
            var _a, _b, _c, _d, _e, _f;
            const value = this.isPriceToggled ? (_a = this.record) === null || _a === void 0 ? void 0 : _a.priceSwap : (_b = this.record) === null || _b === void 0 ? void 0 : _b.price;
            let fromSymbol = (_c = this.fromToken) === null || _c === void 0 ? void 0 : _c.symbol;
            let toSymbol = (_d = this.toToken) === null || _d === void 0 ? void 0 : _d.symbol;
            if (this.isCrossChain) {
                const srcName = (_e = this.srcChain) === null || _e === void 0 ? void 0 : _e.chainName;
                const desName = (_f = this.desChain) === null || _f === void 0 ? void 0 : _f.chainName;
                if (srcName) {
                    fromSymbol = `${fromSymbol} (${srcName})`;
                }
                if (desName) {
                    toSymbol = `${toSymbol} (${desName})`;
                }
            }
            if (value || value == 0) {
                if (this.isPriceToggled) {
                    return `1 ${fromSymbol} &#8776; ${(0, index_10.formatNumber)(value)} ${toSymbol}`;
                }
                return `1 ${toSymbol} &#8776; ${(0, index_10.formatNumber)(value)} ${fromSymbol}`;
            }
            return '-';
        }
        getPriceImpact() {
            var _a;
            const value = (_a = this.record) === null || _a === void 0 ? void 0 : _a.priceImpact;
            if (value || value == 0) {
                return `${(0, index_10.formatNumber)(value)}%`;
            }
            return '-';
        }
        getMinimumReceived() {
            var _a, _b;
            const value = this.getMinReceivedMaxSold();
            if (value || value == 0) {
                if (this.isFrom) {
                    return `${(0, index_10.formatNumber)(value)} ${(_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol}`;
                }
                return `${(0, index_10.formatNumber)(value)} ${(_b = this.toToken) === null || _b === void 0 ? void 0 : _b.symbol}`;
            }
            return '-';
        }
        getTradeFeeExactAmount() {
            var _a, _b, _c, _d;
            const tradeFee = this.isCrossChain ? (_a = this.record) === null || _a === void 0 ? void 0 : _a.tradeFee : (_b = this.record) === null || _b === void 0 ? void 0 : _b.fromAmount.times((_c = this.record) === null || _c === void 0 ? void 0 : _c.tradeFee).toNumber();
            if (tradeFee || tradeFee == 0) {
                return `${(0, index_10.formatNumber)(tradeFee)} ${(_d = this.fromToken) === null || _d === void 0 ? void 0 : _d.symbol}`;
            }
            return '-';
        }
        getFeeDetails() {
            if (this.isCrossChain && this.record) {
                let record = this.record;
                let detail = [
                    {
                        title: "Source Chain Liquidity Fee",
                        description: "This fee is paid to the AMM Liquidity Providers on the Source Chain.",
                        value: record.fees.sourceRouteLiquidityFee,
                        isHidden: record.fees.sourceRouteLiquidityFee == 0
                    },
                    {
                        title: "Target Chain Liquidity Fee",
                        description: "This fee is paid to the AMM Liquidity Providers on the Target Chain.",
                        value: record.fees.targetRouteLiquidityFee,
                        isHidden: record.targetRouteObj.pairs.length == 0
                    },
                    {
                        title: "Base Fee",
                        description: "This fee is paid to the trolls to cover gas fee on the Target Chain",
                        value: record.fees.baseFee,
                    },
                    {
                        title: "Bridge Vault Liquidity Fee",
                        description: "This fee is paid to the Bridge Vault Liquidity Provider on Target Chain",
                        value: record.fees.transactionFee,
                    },
                    {
                        title: "Protocol Fee",
                        description: "This fee is paid to the troll owners on the Cross Chain Network",
                        value: record.fees.protocolFee,
                    },
                    {
                        title: "Imbalance Fee",
                        description: "This fee is acted as an incentive to balance the vault.",
                        value: record.fees.imbalanceFee,
                    }
                ];
                return detail.filter(v => !v.isHidden);
            }
            if (!this.isCrossChain && this.record) {
                return [{
                        title: "Liquidity Provider Fee",
                        description: "This fee is paid to the AMM Liquidity Provider.",
                        value: this.record.tradeFee
                    }];
            }
            return [];
        }
        getPriceInfo() {
            const rate = this.getRate();
            const priceImpact = this.getPriceImpact();
            const minimumReceived = this.getMinimumReceived();
            const tradeFeeExactAmount = this.getTradeFeeExactAmount();
            const fees = this.getFeeDetails();
            const countFees = fees.length;
            let feeTooltip;
            if (countFees === 1) {
                const fee = fees[0];
                feeTooltip = `${fee.description}`;
            }
            else if (countFees > 1) {
                feeTooltip = fees;
            }
            let info = [
                {
                    title: "Rate",
                    value: this.isValidToken ? rate : '-',
                    isToggleShown: this.record && this.isValidToken,
                },
                {
                    title: "Price Impact",
                    value: this.isValidToken ? priceImpact : '-',
                    isHidden: this.isCrossChain,
                },
                {
                    title: this.isFrom ? "Maximum Sold" : "Minimum Received",
                    value: this.isValidToken ? minimumReceived : '-',
                },
                {
                    title: "Transaction Fee",
                    value: this.isValidToken ? tradeFeeExactAmount : '-',
                    tooltip: feeTooltip,
                    onClick: countFees > 1 ? () => this.showModalFees() : null
                },
                {
                    title: "Estimated Time",
                    value: this.isValidToken && this.record ? '30 seconds' : '-',
                    isHidden: !this.isCrossChain
                }
            ];
            return info.filter((f) => !f.isHidden);
        }
        getBalance(token, isCrossChain) {
            var _a;
            if (token && this.allTokenBalancesMap) {
                const address = token.address || '';
                let balance = 0;
                if (isCrossChain) {
                    balance = Number(token.isNative ? this.targetChainTokenBalances[token.symbol] : this.targetChainTokenBalances[address.toLowerCase()]) || 0;
                }
                else {
                    balance = address ? (_a = this.allTokenBalancesMap[address.toLowerCase()]) !== null && _a !== void 0 ? _a : 0 : this.allTokenBalancesMap[token.symbol] || 0;
                }
                return balance;
            }
            return 0;
        }
        async updateBalance() {
            const rpcWallet = this.state.getRpcWallet();
            if (rpcWallet.address) {
                if (this.isCrossChain)
                    await this.updateTargetChainBalances();
                if (this.hasData)
                    await scom_token_list_5.tokenStore.updateAllTokenBalances(rpcWallet);
                this.allTokenBalancesMap = scom_token_list_5.tokenStore.tokenBalances;
            }
            else {
                this.allTokenBalancesMap = {};
            }
            if (this.fromToken) {
                const balance = this.getBalance(this.fromToken, this.isCrossChain);
                this.payBalance.caption = `Balance: ${(0, index_10.formatNumber)(balance, 4)} ${this.fromToken.symbol}`;
            }
            if (this.toToken) {
                const balance = this.getBalance(this.toToken, this.isCrossChain);
                this.receiveBalance.caption = `Balance: ${(0, index_10.formatNumber)(balance, 4)} ${this.toToken.symbol}`;
            }
            const enabled = !this.isMaxDisabled();
            this.maxButton.enabled = enabled;
        }
        async updateTargetChainBalances() {
            var _a;
            const targetChainId = ((_a = this.desChain) === null || _a === void 0 ? void 0 : _a.chainId) || this.targetChainId;
            if (targetChainId) {
                const tokenBalanceObj = await (0, index_9.getTargetChainTokenInfoObj)(targetChainId);
                this.targetChainTokenBalances = (0, index_7.isClientWalletConnected)() ? tokenBalanceObj.balances : [];
            }
        }
        updateSwapButtonCaption() {
            if (this.swapBtn && this.swapBtn.hasChildNodes()) {
                this.swapBtn.caption = this.determineSwapButtonCaption();
            }
        }
        determineSwapButtonCaption() {
            var _a;
            const isApproveButtonShown = this.isCrossChain ? this.crossChainApprovalStatus !== index_10.ApprovalStatus.NONE : this.isApproveButtonShown;
            if (!(0, index_7.isClientWalletConnected)()) {
                return "Connect Wallet";
            }
            if (!this.state.isRpcWalletConnected()) {
                return "Switch Network";
            }
            if (isApproveButtonShown) {
                const status = this.isCrossChain ? this.crossChainApprovalStatus : this.approveButtonStatus;
                switch (status) {
                    case index_10.ApprovalStatus.APPROVING:
                        return "Approving";
                    case index_10.ApprovalStatus.TO_BE_APPROVED:
                        return "Approve";
                }
                return '';
            }
            else {
                if (this.isSwapping) {
                    return this.isCrossChain ? "Creating Order" : "Swapping";
                }
                if (this.isInsufficientBalance) {
                    return `Insufficient ${(_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol} balance`;
                }
                if (this.isCrossChain) {
                    return "Create Order";
                }
                if (this.isPriceImpactTooHigh) {
                    return "Turn on Expert Mode";
                }
                return "Swap";
            }
        }
        getWarningMessageText() {
            var _a, _b, _c;
            const tokens = [(_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol, (_b = this.toToken) === null || _b === void 0 ? void 0 : _b.symbol];
            if (tokens.every(v => v === 'ETH' || v === 'WETH')) {
                return 'Invalid pair';
            }
            if (!this.record) {
                return '';
            }
            if (this.record.key === 'Oracle' && (this.record.fromAmount.isZero() || this.record.toAmount.isZero())) {
                return 'Circuit breaker triggered';
            }
            const balance = this.getBalance(this.fromToken);
            if (this.maxSold.gt(balance)) {
                return `Insufficient ${(_c = this.fromToken) === null || _c === void 0 ? void 0 : _c.symbol} balance`;
            }
            if (this.record.priceImpact > 15 && !this.state.isExpertMode) {
                return priceImpactTooHighMsg;
            }
            return '';
        }
        setMapStatus(type, key, status) {
            if (type === 'approve') {
                let mapStatus = this.approveButtonStatusMap;
                mapStatus[key] = status;
                this.approveButtonStatusMap = Object.assign({}, mapStatus);
            }
            else {
                let mapStatus = this.swapButtonStatusMap;
                mapStatus[key] = status;
                this.swapButtonStatusMap = Object.assign({}, mapStatus);
            }
        }
        isButtonLoading() {
            if (this.isApproveButtonShown || (this.isCrossChain && this.crossChainApprovalStatus === index_10.ApprovalStatus.APPROVING)) {
                return this.isApprovingRouter;
            }
            return this.isSwapping;
        }
        isSwapButtonDisabled() {
            if ((0, index_7.isClientWalletConnected)() && this.state.isRpcWalletConnected() && !this.record) {
                return true;
            }
            const warningMessageText = this.getWarningMessageText();
            return (this.state.isRpcWalletConnected() && (warningMessageText != '' && !this.isPriceImpactTooHigh));
        }
        async onClickSwapButton() {
            if (!(0, index_7.isClientWalletConnected)()) {
                if (this.mdWallet) {
                    await components_8.application.loadPackage('@scom/scom-wallet-modal', '*');
                    this.mdWallet.networks = this.networks;
                    this.mdWallet.wallets = this.wallets;
                    this.mdWallet.showModal();
                }
                return;
            }
            else if (!this.state.isRpcWalletConnected()) {
                const chainId = this.state.getChainId();
                const clientWallet = eth_wallet_5.Wallet.getClientInstance();
                await clientWallet.switchNetwork(chainId);
                return;
            }
            if (!this.record || this.isSwapButtonDisabled())
                return;
            const isApproveButtonShown = this.isCrossChain ? this.crossChainApprovalStatus !== index_10.ApprovalStatus.NONE : this.isApproveButtonShown;
            if (isApproveButtonShown) {
                this.onApproveRouterMax();
                return;
            }
            if (this.isPriceImpactTooHigh) {
                this.$eventBus.dispatch("ShowExpertModal" /* EventId.ShowExpertModal */);
                return;
            }
            this.handleSwapPopup();
        }
        onRenderPriceInfo() {
            if (!this.priceInfo) {
                this.priceInfo = new index_11.PriceInfo();
                this.priceInfo.width = 'auto';
                this.priceInfo.height = 'auto';
                this.pnlPriceInfo.appendChild(this.priceInfo);
                this.priceInfo.onTogglePrice = this.onTogglePrice.bind(this);
            }
            this.priceInfo.Items = this.getPriceInfo();
            if (!this.priceInfo2) {
                this.priceInfo2 = new index_11.PriceInfo();
                this.priceInfo2.width = 'auto';
                this.priceInfo2.height = 'auto';
                this.priceInfo2.onTogglePrice = this.onTogglePrice.bind(this);
            }
            this.priceInfoContainer.appendChild(this.priceInfo2);
        }
        get chainId() {
            return this.state.getChainId();
        }
        // Cross Chain
        get isCrossChainSwap() {
            return this._data.category === 'cross-chain-swap';
        }
        get isCrossChainEnabled() {
            var _a, _b, _c, _d, _e;
            let chainId = this.state.getChainId();
            if (!this.supportedChainList.some((v) => v.chainId == chainId) || !this.isCrossChainSwap) {
                (_a = this.srcChainBox) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
                (_b = this.desChainBox) === null || _b === void 0 ? void 0 : _b.classList.add('hidden');
                return false;
            }
            (_c = this.srcChainBox) === null || _c === void 0 ? void 0 : _c.classList.remove('hidden');
            if (index_7.crossChainSupportedChainIds.some(v => { var _a; return v.chainId === ((_a = this.srcChain) === null || _a === void 0 ? void 0 : _a.chainId); })) {
                (_d = this.desChainBox) === null || _d === void 0 ? void 0 : _d.classList.remove('hidden');
            }
            else {
                (_e = this.desChainBox) === null || _e === void 0 ? void 0 : _e.classList.add('hidden');
            }
            return true;
        }
        ;
        get isCrossChain() {
            var _a, _b, _c;
            const srcChainId = (_a = this.srcChain) === null || _a === void 0 ? void 0 : _a.chainId;
            const desChainId = (_b = this.desChain) === null || _b === void 0 ? void 0 : _b.chainId;
            if (this.isCrossChainEnabled && index_7.crossChainSupportedChainIds.some(v => v.chainId === srcChainId) && srcChainId != desChainId) {
                return true;
            }
            (_c = this.minSwapHintLabel) === null || _c === void 0 ? void 0 : _c.classList.add('hidden');
            return false;
        }
        ;
        get fromTokenToVaultMap() {
            let map = {};
            for (const vaultGroup of index_7.BridgeVaultGroupList) {
                if (vaultGroup.deprecated)
                    continue;
                const vaults = vaultGroup.vaults;
                if (!vaults[this.chainId] || Object.keys(vaults).length < 2)
                    continue;
                const currentChainTokenAddress = vaults[this.chainId].tokenAddress.toLowerCase();
                map[currentChainTokenAddress] = vaults;
            }
            return map;
        }
        ;
        get isMetaMask() {
            var _a;
            return ((_a = eth_wallet_5.Wallet.getClientInstance().clientSideProvider) === null || _a === void 0 ? void 0 : _a.name) === index_7.WalletPlugin.MetaMask;
        }
        initExpertModal() {
            this.expertModal = new index_12.ExpertModeSettings(this.state);
            this.swapComponent.appendChild(this.expertModal);
            this.$eventBus.register(this, "ShowExpertModal" /* EventId.ShowExpertModal */, () => {
                this.expertModal.showModal();
            });
        }
        // private showNetworkErrModal() {
        //   this.supportedNetworksElm.clearInnerHTML();
        //   if (!this.supportedNetworks.length) {
        //     this.supportedNetworksElm.appendChild(<i-label caption={`No networks are supported. Please configure the swap!`} font={{ size: '16px' }} />)
        //   } else if (this.supportedChainList.some(v => v.chainId == this.currentChainId)) {
        //     const network = getNetworkInfo(this.currentChainId);
        //     this.supportedNetworksElm.appendChild(<i-label caption={`The ${network.chainName} (${network.chainId}) network has not been configured for the swap!`} font={{ size: '16px' }} />)
        //   } else {
        //     this.supportedNetworksElm.appendChild(<i-label caption={`We only support the following ${this.supportedNetworks.length > 1 ? 'networks' : 'network'}:`} font={{ size: '16px' }} />)
        //     for (const chainId of this.supportedNetworks) {
        //       const network = getNetworkInfo(chainId);
        //       if (network) {
        //         this.supportedNetworksElm.appendChild(
        //           <i-label font={{ bold: true, size: '16px' }} caption={`${network.chainName} (${network.chainId})`} />
        //         )
        //       }
        //     }
        //   }
        //   this.networkErrModal.visible = true;
        // }
        closeNetworkErrModal() {
            this.networkErrModal.visible = false;
        }
        resizeLayout() {
            var _a, _b, _c;
            const tagWidth = Number((_a = this.tag) === null || _a === void 0 ? void 0 : _a.width);
            if ((this.offsetWidth !== 0 && this.offsetWidth < 550) || window.innerWidth < 550 || (!isNaN(tagWidth) && tagWidth !== 0 && tagWidth < 550)) {
                (_b = this.wrapperSwap) === null || _b === void 0 ? void 0 : _b.classList.add('swap-flex--col');
            }
            else {
                (_c = this.wrapperSwap) === null || _c === void 0 ? void 0 : _c.classList.remove('swap-flex--col');
            }
        }
        async initData() {
            if (!this.isInited) {
                await this.initApprovalModelAction();
                this.isInited = true;
            }
        }
        isEmptyData(value) {
            return !value || !value.networks || value.networks.length === 0;
        }
        async init() {
            this.isReadyCallbackQueued = true;
            super.init();
            this.state = new index_7.State(data_json_1.default);
            this.fromInputValue = new eth_wallet_5.BigNumber(0);
            this.toInputValue = new eth_wallet_5.BigNumber(0);
            this.swapButtonStatusMap = {};
            this.approveButtonStatusMap = {};
            this.$eventBus = components_8.application.EventBus;
            this.registerEvent();
            this.updateSwapButtonCaption();
            this.initExpertModal();
            const dexList = (0, scom_dex_list_2.default)();
            this.state.setDexInfoList(dexList);
            const lazyLoad = this.getAttribute('lazyLoad', true, false);
            if (!lazyLoad) {
                // const defaultColors = {
                //   fontColor: currentTheme.text.primary,
                //   backgroundColor: currentTheme.background.main,
                //   inputFontColor: currentTheme.input.fontColor,
                //   inputBackgroundColor: currentTheme.input.background
                // }
                // this.setTag({
                //   light: {...defaultColors},
                //   dark: {...defaultColors}
                // })
                const campaignId = this.getAttribute('campaignId', true);
                const category = this.getAttribute('category', true, "fixed-pair");
                const providers = this.getAttribute('providers', true, []);
                const commissions = this.getAttribute('commissions', true, []);
                const tokens = this.getAttribute('tokens', true, []);
                const defaultChainId = this.getAttribute('defaultChainId', true);
                const networks = this.getAttribute('networks', true);
                const wallets = this.getAttribute('wallets', true);
                const showHeader = this.getAttribute('showHeader', true);
                let data = { campaignId, category, providers, commissions, tokens, defaultChainId, networks, wallets, showHeader };
                if (!this.isEmptyData(data)) {
                    await this.setData(data);
                }
            }
            this.isReadyCallbackQueued = false;
            this.executeReadyCallback();
            window.addEventListener('resize', () => {
                setTimeout(() => {
                    this.resizeLayout();
                }, 300);
            });
        }
        render() {
            return (this.$render("i-scom-dapp-container", { id: "dappContainer" },
                this.$render("i-panel", { id: "swapComponent", background: { color: Theme.background.main } },
                    this.$render("i-panel", { class: index_css_2.swapStyle },
                        this.$render("i-panel", { id: "swapContainer" },
                            this.$render("i-vstack", { id: "pnlBranding", margin: { bottom: '0.25rem' }, gap: "0.5rem", horizontalAlignment: "center" },
                                this.$render("i-image", { id: 'imgLogo', height: 100 }),
                                this.$render("i-label", { id: 'lbTitle', font: { bold: true, size: '1.5rem' } })),
                            this.$render("i-panel", { class: "content-swap" },
                                this.$render("i-hstack", { id: "wrapperSwap", gap: 10 },
                                    this.$render("i-vstack", { gap: 5, minWidth: 230, width: "calc(100% - 25px)" },
                                        this.$render("i-vstack", { id: "srcChainBox", width: "100%", margin: { top: 8, bottom: 8 } },
                                            this.$render("i-hstack", { gap: 8, horizontalAlignment: "space-between" },
                                                this.$render("i-label", { opacity: 0.8, caption: "Source Chain", minWidth: "7rem" }),
                                                this.$render("i-label", { id: "srcChainLabel", class: "chain-text", margin: { left: 'auto' }, caption: "-" })),
                                            this.$render("i-hstack", { id: "srcChainList", wrap: "wrap", verticalAlignment: "center", maxWidth: "100%" })),
                                        this.$render("i-panel", { class: "token-box", minHeight: 120, margin: { top: 'auto' } },
                                            this.$render("i-vstack", { class: "input--token-container", gap: 8 },
                                                this.$render("i-vstack", { class: "balance-info", width: "100%", gap: 8 },
                                                    this.$render("i-vstack", { width: "100%" },
                                                        this.$render("i-label", { caption: "You Swap", font: { size: '1.125rem' } })),
                                                    this.$render("i-hstack", { gap: 5, horizontalAlignment: "space-between", verticalAlignment: "center", width: "100%" },
                                                        this.$render("i-label", { id: "payBalance", class: "text--grey ml-auto", caption: "Balance: 0" }),
                                                        this.$render("i-button", { id: "maxButton", class: "btn-max", caption: "Max", enabled: false, onClick: () => this.onSetMaxBalance() }))),
                                                this.$render("i-panel", { id: "payCol", class: "bg-box", width: "100%", margin: { top: 'auto' } },
                                                    this.$render("i-scom-token-input", { id: "firstTokenInput", placeholder: '0.0', value: '-', tokenReadOnly: false, isBalanceShown: false, isBtnMaxShown: false, isCommonShown: true, inputReadOnly: true, background: { color: Theme.input.background }, border: { radius: '1rem' }, 
                                                        // height={56}
                                                        display: 'flex', font: { size: '1.25rem' }, onInputAmountChanged: this.onTokenInputChange, onSelectToken: (token) => this.onSelectToken(token, true), class: "token-input" })))),
                                        this.$render("i-hstack", { horizontalAlignment: "space-between" },
                                            this.$render("i-label", { id: "lbYouPayTitle", caption: "You Pay", font: { size: '1rem' } }),
                                            this.$render("i-label", { id: "lbYouPayValue", caption: "0", font: { size: '1rem' } }))),
                                    this.$render("i-hstack", { class: "toggle-reverse", alignItems: "end" },
                                        this.$render("i-icon", { id: "toggleReverseImage", position: "relative", width: 32, height: 32, class: "icon-swap rounded-icon custom-ic--swap", name: "arrows-alt-v", onClick: this.onRevertSwap.bind(this) })),
                                    this.$render("i-vstack", { gap: 5, minWidth: 230, width: "calc(100% - 25px)" },
                                        this.$render("i-vstack", { id: "desChainBox", width: "100%", margin: { top: 8, bottom: 8 } },
                                            this.$render("i-hstack", { gap: 8, horizontalAlignment: "space-between" },
                                                this.$render("i-label", { opacity: 0.8, caption: "Destination Chain", minWidth: "7rem" }),
                                                this.$render("i-label", { id: "desChainLabel", class: "chain-text", margin: { left: 'auto' }, caption: "-" })),
                                            this.$render("i-hstack", { id: "desChainList", wrap: "wrap", verticalAlignment: "center", maxWidth: "100%" })),
                                        this.$render("i-panel", { class: "token-box", height: "100%", minHeight: 120, margin: { top: 'auto' } },
                                            this.$render("i-vstack", { class: "input--token-container", height: "100%", gap: 8 },
                                                this.$render("i-vstack", { class: "balance-info", width: "100%", gap: 8 },
                                                    this.$render("i-vstack", { width: "100%" },
                                                        this.$render("i-label", { caption: "You Receive", font: { size: '1.125rem' } })),
                                                    this.$render("i-vstack", { class: "text-right", width: "100%" },
                                                        this.$render("i-label", { id: "receiveBalance", class: "text--grey ml-auto", caption: "Balance: 0" }))),
                                                this.$render("i-panel", { id: "receiveCol", class: "bg-box", background: { color: Theme.input.background }, width: "100%", margin: { top: 'auto' } },
                                                    this.$render("i-scom-token-input", { id: "secondTokenInput", value: '-', placeholder: '0.0', inputReadOnly: true, tokenReadOnly: false, isBalanceShown: false, isBtnMaxShown: false, isCommonShown: true, background: { color: Theme.input.background }, border: { radius: '1rem' }, 
                                                        // height={56}
                                                        display: 'flex', font: { size: '1.25rem' }, onInputAmountChanged: this.onTokenInputChange, onSelectToken: (token) => this.onSelectToken(token, false), class: "token-input" })))),
                                        this.$render("i-hstack", { horizontalAlignment: "end" },
                                            this.$render("i-label", { id: "lbRouting", caption: "No routing", opacity: 0.75, font: { size: '1rem' }, class: "visibility-hidden" }))))),
                            this.$render("i-panel", { id: "minSwapHintLabel", class: "hints" },
                                this.$render("i-icon", { name: "star", fill: Theme.colors.primary.main, width: 13, height: 13 }),
                                this.$render("i-label", { caption: "No crosschain routes are found. You may try updating the input amount or selecting another token.", font: { color: Theme.colors.primary.main } })),
                            this.$render("i-panel", { id: "pnlPriceInfo" }),
                            this.$render("i-vstack", { class: "swap-btn-container", horizontalAlignment: "center", width: "100%" },
                                this.$render("i-button", { id: "swapBtn", class: "btn-swap btn-os", maxWidth: 360, height: 60, visible: false, rightIcon: { spin: true, visible: false, fill: Theme.colors.primary.contrastText }, onClick: this.onClickSwapButton.bind(this) }))),
                        this.$render("i-modal", { id: "swapModal", class: "custom-modal", title: "Confirm Swap", closeIcon: { name: 'times' } },
                            this.$render("i-hstack", { verticalAlignment: 'center', horizontalAlignment: 'start' },
                                this.$render("i-panel", { id: "srcChainFirstPanel", class: "row-chain" },
                                    this.$render("i-image", { id: "srcChainTokenImage", width: "30px", height: "30px", url: "#" }),
                                    this.$render("i-label", { id: "srcChainTokenLabel", class: "token-name", caption: "" }),
                                    this.$render("i-icon", { name: "minus", class: "custom-icon--fill", width: 28, height: 10 })),
                                this.$render("i-panel", { class: "row-chain" },
                                    this.$render("i-image", { id: "fromTokenImage", width: "30px", height: "30px", url: "#" }),
                                    this.$render("i-label", { id: "fromTokenLabel", class: "token-name", caption: "" })),
                                this.$render("i-label", { id: "fromTokenValue", class: "token-value", caption: " - " })),
                            this.$render("i-icon", { name: "arrow-down", class: "arrow-down custom-icon--fill", width: 28, height: 28 }),
                            this.$render("i-panel", { id: "srcChainSecondPanel" },
                                this.$render("i-hstack", { verticalAlignment: 'center', horizontalAlignment: 'start' },
                                    this.$render("i-panel", { class: "row-chain" },
                                        this.$render("i-image", { id: "srcChainVaultImage", width: "30px", height: "30px", url: "#" }),
                                        this.$render("i-label", { id: "srcChainVaultLabel", class: "token-name", caption: "" }),
                                        this.$render("i-icon", { name: "minus", class: "custom-icon--fill", width: 28, height: 10 })),
                                    this.$render("i-panel", { class: "row-chain" },
                                        this.$render("i-image", { id: "srcVaultTokenImage", fallbackUrl: scom_token_list_5.assets.fallbackUrl, width: "30px", height: "30px", url: "#" }),
                                        this.$render("i-label", { id: "srcVaultTokenLabel", class: "token-name", caption: "" })),
                                    this.$render("i-label", { id: "srcVaultTokenValue", class: "token-value", caption: "-" })),
                                this.$render("i-icon", { name: "arrow-down", class: "arrow-down custom-icon--fill", width: 28, height: 28 })),
                            this.$render("i-panel", { id: "targetChainSecondPanel" },
                                this.$render("i-hstack", { verticalAlignment: 'center', horizontalAlignment: 'start' },
                                    this.$render("i-panel", { class: "row-chain" },
                                        this.$render("i-image", { id: "targetChainVaultImage", width: "30px", height: "30px", url: "#" }),
                                        this.$render("i-label", { id: "targetChainVaultLabel", class: "token-name", caption: "" }),
                                        this.$render("i-icon", { name: "minus", class: "custom-icon--fill", width: 28, height: 10 })),
                                    this.$render("i-panel", { class: "row-chain" },
                                        this.$render("i-image", { id: "targetVaultTokenImage", fallbackUrl: scom_token_list_5.assets.fallbackUrl, width: "30px", height: "30px", url: "#" }),
                                        this.$render("i-label", { id: "targetVaultTokenLabel", class: "token-name", caption: "" })),
                                    this.$render("i-label", { id: "targetVaultTokenValue", class: "token-value", caption: "-" })),
                                this.$render("i-vstack", { class: "text-right" },
                                    this.$render("i-label", { id: "crossChainSoftCapLabel1", class: "text--grey ml-auto" }),
                                    this.$render("i-label", { id: "targetVaultAssetBalanceLabel1", class: "text--grey ml-auto", caption: "Vault Asset Balance: 0" }),
                                    this.$render("i-label", { id: "targetVaultBondBalanceLabel1", class: "text--grey ml-auto", caption: "Vault Bond Balance: 0" })),
                                this.$render("i-icon", { name: "arrow-down", class: "arrow-down custom-icon--fill", width: 28, height: 28 })),
                            this.$render("i-hstack", { class: "mb-1", verticalAlignment: 'center', horizontalAlignment: 'start' },
                                this.$render("i-panel", { id: "targetChainFirstPanel", class: "row-chain" },
                                    this.$render("i-image", { id: "targetChainTokenImage", fallbackUrl: scom_token_list_5.assets.fallbackUrl, width: "30px", height: "30px", url: "#" }),
                                    this.$render("i-label", { id: "targetChainTokenLabel", class: "token-name", caption: "" }),
                                    this.$render("i-icon", { name: "minus", class: "custom-icon--fill", width: 28, height: 10 })),
                                this.$render("i-panel", { class: "row-chain" },
                                    this.$render("i-image", { id: "toTokenImage", width: "30px", height: "30px", url: "#" }),
                                    this.$render("i-label", { id: "toTokenLabel", class: "token-name", caption: "" })),
                                this.$render("i-label", { id: "toTokenValue", class: "token-value text-primary bold", caption: " - " })),
                            this.$render("i-vstack", { id: "crossChainVaultInfoVstack", class: "text-right" },
                                this.$render("i-label", { id: "crossChainSoftCapLabel2", class: "text--grey ml-auto" }),
                                this.$render("i-label", { id: "targetVaultAssetBalanceLabel2", class: "text--grey ml-auto", caption: "Vault Asset Balance: 0" }),
                                this.$render("i-label", { id: "targetVaultBondBalanceLabel2", class: "text--grey ml-auto", caption: "Vault Bond Balance: 0" })),
                            this.$render("i-panel", { class: "mb-1" },
                                this.$render("i-label", { id: "lbEstimate" })),
                            this.$render("i-panel", { class: "mb-1" },
                                this.$render("i-label", { id: "lbPayOrReceive" }),
                                this.$render("i-label", { id: "payOrReceiveValue", class: "text-primary bold", caption: "" }),
                                this.$render("i-label", { id: "payOrReceiveToken", caption: "" })),
                            this.$render("i-panel", { id: "priceInfoContainer", class: "bg-box mt-1 mb-1", background: { color: Theme.background.main }, width: "100%" }),
                            this.$render("i-panel", { class: "swap-btn-container", width: "100%" },
                                this.$render("i-button", { id: "swapModalConfirmBtn", class: "btn-swap btn-os", height: "auto", caption: "Confirm Swap", onClick: this.doSwap }))),
                        this.$render("i-modal", { id: "modalFees", class: "bg-modal custom-modal", title: "Transaction Fee Details", closeIcon: { name: 'times' } },
                            this.$render("i-panel", { class: "i-modal_content" },
                                this.$render("i-panel", null,
                                    this.$render("i-vstack", { id: "feesInfo" }),
                                    this.$render("i-hstack", { verticalAlignment: "center", horizontalAlignment: "center", margin: { top: 16, bottom: 8 } },
                                        this.$render("i-button", { caption: "Close", class: "btn-os", font: { color: Theme.colors.primary.contrastText }, onClick: () => this.closeModalFees() }))))),
                        this.$render("i-modal", { id: "modalViewOrder", class: "bg-modal custom-modal custom-md--view", title: "Cross Chain", closeIcon: { name: 'times' } },
                            this.$render("i-panel", { class: "i-modal_content" },
                                this.$render("i-panel", { class: "mt-1" },
                                    this.$render("i-hstack", { verticalAlignment: 'center', horizontalAlignment: 'center', class: "mb-1" },
                                        this.$render("i-image", { width: 50, height: 50, url: assets_1.default.fullPath('img/success-icon.svg') })),
                                    this.$render("i-hstack", { verticalAlignment: 'center', class: "flex-col" },
                                        this.$render("i-label", { caption: "The order was created successfully!" }),
                                        this.$render("i-label", { caption: "Do you want to view the record?" })),
                                    this.$render("i-hstack", { verticalAlignment: 'center', horizontalAlignment: 'center', class: "mt-1" },
                                        this.$render("i-button", { caption: "View Order", class: "btn-os", font: { color: Theme.colors.primary.contrastText }, onClick: () => this.onViewOrder() }))))),
                        this.$render("i-modal", { id: "networkErrModal", class: "bg-modal custom-modal", title: "Supported Networks", closeIcon: { name: 'times' } },
                            this.$render("i-panel", { class: "i-modal_content" },
                                this.$render("i-vstack", { id: "supportedNetworksElm", gap: 10, verticalAlignment: "center" }),
                                this.$render("i-hstack", { verticalAlignment: "center", horizontalAlignment: "center", margin: { top: 16, bottom: 8 } },
                                    this.$render("i-button", { caption: "Close", width: 150, padding: { top: 4, bottom: 4 }, class: "btn-os", font: { color: Theme.colors.primary.contrastText }, onClick: () => this.closeNetworkErrModal() }))))),
                    this.$render("i-scom-tx-status-modal", { id: "txStatusModal" }),
                    this.$render("i-scom-wallet-modal", { id: "mdWallet", wallets: [] }))));
        }
    };
    ScomSwap = __decorate([
        components_8.customModule,
        (0, components_8.customElements)('i-scom-swap')
    ], ScomSwap);
    exports.default = ScomSwap;
});
