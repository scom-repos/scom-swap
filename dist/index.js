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
define("@scom/scom-swap/assets.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const moduleDir = components_1.application.currentModuleDir;
    function fullPath(path) {
        return `${moduleDir}/${path}`;
    }
    ;
    exports.default = {
        logo: fullPath('img/logo.svg'),
        fullPath
    };
});
define("@scom/scom-swap/index.css.ts", ["require", "exports", "@ijstech/components", "@scom/scom-swap/assets.ts"], function (require, exports, components_2, assets_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.swapStyle = void 0;
    const Theme = components_2.Styles.Theme.ThemeVars;
    const colorVar = {
        // primaryButton: 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box',
        // primaryGradient: 'linear-gradient(255deg,#f15e61,#b52082)',
        darkBg: '#181E3E 0% 0% no-repeat padding-box',
        // primaryDisabled: 'transparent linear-gradient(270deg,#351f52,#552a42) 0% 0% no-repeat padding-box !important'
    };
    components_2.Styles.fontFace({
        fontFamily: "Montserrat Regular",
        src: `url("${assets_1.default.fullPath('fonts/montserrat/Montserrat-Regular.ttf')}") format("truetype")`,
        fontWeight: 'nomal',
        fontStyle: 'normal'
    });
    components_2.Styles.fontFace({
        fontFamily: "Montserrat Bold",
        src: `url("${assets_1.default.fullPath('fonts/montserrat/Montserrat-Bold.ttf')}") format("truetype")`,
        fontWeight: 'bold',
        fontStyle: 'normal'
    });
    components_2.Styles.fontFace({
        fontFamily: "Montserrat Light",
        src: `url("${assets_1.default.fullPath('fonts/montserrat/Montserrat-Light.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_2.Styles.fontFace({
        fontFamily: "Montserrat Medium",
        src: `url("${assets_1.default.fullPath('fonts/montserrat/Montserrat-Medium.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_2.Styles.fontFace({
        fontFamily: "Montserrat SemiBold",
        src: `url("${assets_1.default.fullPath('fonts/montserrat/Montserrat-SemiBold.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_2.Styles.fontFace({
        fontFamily: "Raleway Regular",
        src: `url("${assets_1.default.fullPath('fonts/raleway/Raleway-Regular.ttf')}") format("truetype")`,
        fontWeight: 'nomal',
        fontStyle: 'normal'
    });
    components_2.Styles.fontFace({
        fontFamily: "Raleway Bold",
        src: `url("${assets_1.default.fullPath('fonts/raleway/Raleway-Bold.ttf')}") format("truetype")`,
        fontWeight: 'bold',
        fontStyle: 'normal'
    });
    components_2.Styles.fontFace({
        fontFamily: "Raleway Light",
        src: `url("${assets_1.default.fullPath('fonts/raleway/Raleway-Light.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_2.Styles.fontFace({
        fontFamily: "Raleway Medium",
        src: `url("${assets_1.default.fullPath('fonts/raleway/Raleway-Medium.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_2.Styles.fontFace({
        fontFamily: "Raleway SemiBold",
        src: `url("${assets_1.default.fullPath('fonts/raleway/Raleway-SemiBold.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    exports.swapStyle = components_2.Styles.style({
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
            '#swapContainer i-button#btn-max:not(.disabled):hover': {
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
                        bottom: -60,
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
            '.cursor-default': {
                cursor: 'default !important',
            },
            '.hidden': {
                display: 'none !important'
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
                fontFamily: 'Raleway Bold',
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
                backgroundColor: 'transparent',
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
define("@scom/scom-swap/store/utils.ts", ["require", "exports", "@ijstech/components", "@ijstech/eth-wallet", "@scom/scom-token-list", "@scom/scom-network-list"], function (require, exports, components_3, eth_wallet_2, scom_token_list_1, scom_network_list_1) {
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
            const networkList = Object.values(((_a = components_3.application.store) === null || _a === void 0 ? void 0 : _a.networkMap) || []);
            const instanceId = clientWallet.initRpcWallet({
                networks: networkList,
                defaultChainId,
                infuraId: (_b = components_3.application.store) === null || _b === void 0 ? void 0 : _b.infuraId,
                multicalls: (_c = components_3.application.store) === null || _c === void 0 ? void 0 : _c.multicalls
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
            return rpcWallet.chainId;
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
        const networkMap = components_3.application.store["networkMap"];
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
define("@scom/scom-swap/store/index.ts", ["require", "exports", "@scom/scom-token-list", "@scom/scom-swap/store/utils.ts"], function (require, exports, scom_token_list_2, utils_1) {
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
});
define("@scom/scom-swap/swap-utils/index.ts", ["require", "exports", "@ijstech/eth-wallet", "@scom/oswap-openswap-contract", "@scom/scom-commission-proxy-contract", "@scom/scom-dex-list", "@scom/scom-swap/global/index.ts", "@scom/scom-swap/store/index.ts", "@scom/scom-token-list"], function (require, exports, eth_wallet_3, oswap_openswap_contract_1, scom_commission_proxy_contract_1, scom_dex_list_1, index_2, index_3, scom_token_list_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getCommissionRate = exports.getProviderProxySelectors = exports.setApprovalModalSpenderAddress = exports.getRouterAddress = exports.getChainNativeToken = exports.executeSwap = exports.getPair = exports.getAllRoutesData = exports.getTradeFeeMap = exports.getExtendedRouteObjData = void 0;
    const routeAPI = 'https://route.openswap.xyz/trading/v1/route';
    const newRouteAPI = 'https://indexer.ijs.dev/trading/v1/route';
    const getChainNativeToken = (chainId) => {
        return scom_token_list_3.ChainNativeTokenByChainId[chainId];
    };
    exports.getChainNativeToken = getChainNativeToken;
    const getWETH = (chainId) => {
        return scom_token_list_3.WETHByChainId[chainId];
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
    async function composeRouteObj(state, wallet, routeObj, market, firstTokenObject, firstInput, secondInput, isFromEstimated, commissions) {
        const slippageTolerance = state.slippageTolerance;
        if (!slippageTolerance)
            return null;
        let fromAmount = new eth_wallet_3.BigNumber(0);
        let toAmount = new eth_wallet_3.BigNumber(0);
        let minReceivedMaxSold = 0;
        let priceImpact = 0;
        let price = 0;
        let priceSwap = 0;
        let tradeFee = 0;
        let gasFee = 0;
        try {
            if (isFromEstimated) {
                let poolAmount = new eth_wallet_3.BigNumber(routeObj.amountIn);
                if (poolAmount.isZero())
                    return null;
                minReceivedMaxSold = poolAmount.times(1 + slippageTolerance / 100).toNumber();
                fromAmount = poolAmount;
                toAmount = secondInput;
                gasFee = routeObj.gasFee;
            }
            else {
                let poolAmount = new eth_wallet_3.BigNumber(routeObj.amountOut);
                if (poolAmount.isZero())
                    return null;
                minReceivedMaxSold = poolAmount.times(1 - slippageTolerance / 100).toNumber();
                fromAmount = firstInput;
                toAmount = poolAmount;
                gasFee = routeObj.gasFee;
            }
            price = parseFloat(routeObj.price);
            priceSwap = new eth_wallet_3.BigNumber(1).div(routeObj.price).toNumber();
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
    async function getBestAmountInRouteFromAPI(state, wallet, tokenIn, tokenOut, amountOut, chainId) {
        chainId = state.getChainId();
        let wrappedTokenAddress = getWETH(chainId);
        let network = chainId ? (0, index_3.getNetworkInfo)(chainId) : null;
        let api = (network === null || network === void 0 ? void 0 : network.isTestnet) || (network === null || network === void 0 ? void 0 : network.isDisabled) ? newRouteAPI : routeAPI;
        let routeObjArr = await (0, index_2.getAPI)(api, {
            chainId,
            tokenIn: tokenIn.address ? tokenIn.address : wrappedTokenAddress,
            tokenOut: tokenOut.address ? tokenOut.address : wrappedTokenAddress,
            amountOut: new eth_wallet_3.BigNumber(amountOut).shiftedBy(tokenOut.decimals).toFixed(),
            ignoreHybrid: 1
        });
        if (!routeObjArr)
            return [];
        let bestRouteObjArr = [];
        return bestRouteObjArr;
    }
    async function getBestAmountOutRouteFromAPI(state, wallet, tokenIn, tokenOut, amountIn, chainId) {
        chainId = state.getChainId();
        let wrappedTokenAddress = getWETH(chainId);
        let network = chainId ? (0, index_3.getNetworkInfo)(chainId) : null;
        let api = (network === null || network === void 0 ? void 0 : network.isTestnet) || (network === null || network === void 0 ? void 0 : network.isDisabled) ? newRouteAPI : routeAPI;
        let routeObjArr = await (0, index_2.getAPI)(api, {
            chainId,
            tokenIn: tokenIn.address ? tokenIn.address : wrappedTokenAddress,
            tokenOut: tokenOut.address ? tokenOut.address : wrappedTokenAddress,
            amountIn: new eth_wallet_3.BigNumber(amountIn).shiftedBy(tokenIn.decimals).toFixed(),
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
        let factory = new oswap_openswap_contract_1.Contracts.OSWAP_Factory(wallet, getFactoryAddress(state, market));
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
                if (pair == eth_wallet_3.Utils.nullAddress)
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
        let amountInWithFee = new eth_wallet_3.BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).times(amountIn);
        let amtOut = (new eth_wallet_3.BigNumber(pairInfo.reserveB).times(amountInWithFee)).idiv(new eth_wallet_3.BigNumber(pairInfo.reserveA).times(tradeFeeObj.base).plus(amountInWithFee)).toFixed();
        return amtOut;
    };
    const calculateAmountInByTradeFee = (tradeFeeMap, pairInfo, amountOut) => {
        let tradeFeeObj = tradeFeeMap[pairInfo.market];
        let feeMultiplier = new eth_wallet_3.BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee);
        if (pairInfo.reserveB.lte(amountOut)) {
            return null;
        }
        let amtIn = new eth_wallet_3.BigNumber(pairInfo.reserveA).times(amountOut).times(tradeFeeObj.base).idiv(new eth_wallet_3.BigNumber(pairInfo.reserveB.minus(amountOut)).times(feeMultiplier)).plus(1).toFixed();
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
        amountOut = eth_wallet_3.Utils.toDecimals(amountOut, tokenOut.decimals).toFixed();
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
            let compare = new eth_wallet_3.BigNumber(amtInA).comparedTo(amtInB);
            return compare || 0;
        });
        return sortedAllPaths;
    };
    const getAllExactAmountInPaths = async (tradeFeeMap, availableRoutes, tokenIn, tokenOut, amountIn) => {
        let allPaths = [];
        amountIn = eth_wallet_3.Utils.toDecimals(amountIn, tokenIn.decimals).toFixed();
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
            if (new eth_wallet_3.BigNumber(lastAmtOutA).gt(lastAmtOutB)) {
                return -1;
            }
            else if (new eth_wallet_3.BigNumber(lastAmtOutA).lt(lastAmtOutB)) {
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
        let lowestIn = eth_wallet_3.Utils.fromDecimals(tokenLowestIn, tokenIn.decimals).toFixed();
        let swapPrice = new eth_wallet_3.BigNumber(lowestIn).div(amountOut);
        let extendedData = await getExtendedRouteObjData(wallet, bestRouteObj, tradeFeeMap, swapPrice, true);
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
        let highestOut = eth_wallet_3.Utils.fromDecimals(tokenHighestOut, tokenOut.decimals).toFixed();
        let swapPrice = new eth_wallet_3.BigNumber(amountIn).div(highestOut);
        let extendedData = await getExtendedRouteObjData(wallet, bestRouteObj, tradeFeeMap, swapPrice, isHybrid);
        return Object.assign(Object.assign({}, extendedData), { amountOut: highestOut });
    };
    async function getExtendedRouteObjData(wallet, bestRouteObj, tradeFeeMap, swapPrice, isHybridOrQueue) {
        let currPrice = new eth_wallet_3.BigNumber(0);
        if (bestRouteObj.customDataList.length > 0) {
            currPrice = bestRouteObj.market.map((v, i) => {
                let customDataObj = bestRouteObj.customDataList[i];
                let reserveA = new eth_wallet_3.BigNumber(customDataObj.reserveA).shiftedBy(-bestRouteObj.route[i].decimals);
                let reserveB = new eth_wallet_3.BigNumber(customDataObj.reserveB).shiftedBy(-bestRouteObj.route[i + 1].decimals);
                return reserveA.div(reserveB);
            })
                .reduce((prev, curr) => prev.times(curr));
        }
        let fee = new eth_wallet_3.BigNumber(1).minus(bestRouteObj.market.map((market) => {
            let tradeFeeObj = tradeFeeMap[market];
            let tradeFee = new eth_wallet_3.BigNumber(tradeFeeObj.fee).div(tradeFeeObj.base);
            return new eth_wallet_3.BigNumber(1).minus(tradeFee);
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
    async function getAllRoutesData(state, firstTokenObject, secondTokenObject, firstInput, secondInput, isFromEstimated, useAPI, commissions) {
        var _a, _b, _c;
        let wallet = state.getRpcWallet();
        let resultArr = [];
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
                    const providerKey = (_a = providerList[0]) === null || _a === void 0 ? void 0 : _a.key;
                    let routeObj = await getBestAmountInRoute(state, providerKey ? [providerKey] : [], firstTokenObject, secondTokenObject, secondInput.toString(), []);
                    if (routeObj && routeObj.market.length == 1) {
                        let price = parseFloat(routeObj.price);
                        let priceSwap = new eth_wallet_3.BigNumber(1).div(routeObj.price).toNumber();
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
                        let priceSwap = new eth_wallet_3.BigNumber(1).div(routeObj.price).toNumber();
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
                    const providerList = state.providerList;
                    const provider = ((_c = providerList.find(item => item.key === optionObj.provider)) === null || _c === void 0 ? void 0 : _c.key) || '';
                    let routeObj = await composeRouteObj(state, wallet, optionObj, provider, firstTokenObject, firstInput, secondInput, isFromEstimated, commissions);
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
        const amount = tokenIn.address ? eth_wallet_3.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0) : eth_wallet_3.Utils.toDecimals(amountIn).dp(0);
        const _amountOutMin = eth_wallet_3.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0);
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
                            token: eth_wallet_3.Utils.nullAddress,
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
                        (_a = tokenOut.address) !== null && _a !== void 0 ? _a : eth_wallet_3.Utils.nullAddress
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
        const _amountInMax = eth_wallet_3.Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0);
        const _amountOut = eth_wallet_3.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0);
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
                            token: eth_wallet_3.Utils.nullAddress,
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
                        (_a = tokenOut.address) !== null && _a !== void 0 ? _a : eth_wallet_3.Utils.nullAddress
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
        const wallet = eth_wallet_3.Wallet.getClientInstance();
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
        return eth_wallet_3.Utils.fromDecimals(commissionRate, 6).toFixed();
    };
    exports.getCommissionRate = getCommissionRate;
});
define("@scom/scom-swap/price-info/priceInfo.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_4.Styles.Theme.ThemeVars;
    components_4.Styles.cssRule('.price-info', {
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
define("@scom/scom-swap/price-info/index.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-swap/price-info/priceInfo.css.ts"], function (require, exports, components_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PriceInfo = void 0;
    ;
    let PriceInfo = class PriceInfo extends components_5.Module {
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
                    const row = new components_5.HStack();
                    row.horizontalAlignment = "space-between";
                    row.verticalAlignment = "center";
                    row.padding = { top: '0.25rem', bottom: '0.25rem', left: 0, right: 0 };
                    if (item.isHidden) {
                        row.classList.add('hidden');
                    }
                    const titleLabel = new components_5.Label(row, { caption: item.title });
                    row.appendChild(titleLabel);
                    if (item.tooltip) {
                        const iconTooltip = this.renderIconTooltip(row, item);
                        row.appendChild(await iconTooltip);
                    }
                    const valueLabel = new components_5.Label(row, { caption: item.value });
                    valueLabel.classList.add("ml-auto");
                    row.appendChild(valueLabel);
                    if (item.isToggleShown) {
                        const image = this.onRenderToggleBtn(row);
                        row.appendChild(image);
                    }
                    this.priceContent.appendChild(row);
                }
            };
            this.onRenderToggleBtn = (parent) => {
                const image = new components_5.Icon(parent, {
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
                const iconTooltip = await components_5.Icon.create();
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
        (0, components_5.customElements)('i-scom-swap-price-info')
    ], PriceInfo);
    exports.PriceInfo = PriceInfo;
});
define("@scom/scom-swap/expert-mode-settings/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_6.Styles.Theme.ThemeVars;
    exports.default = components_6.Styles.style({
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
define("@scom/scom-swap/expert-mode-settings/index.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-swap/expert-mode-settings/index.css.ts"], function (require, exports, components_7, index_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExpertModeSettings = void 0;
    ;
    let ExpertModeSettings = class ExpertModeSettings extends components_7.Module {
        constructor(state, parent, options) {
            super(parent, options);
            this.state = state;
            this.$eventBus = components_7.application.EventBus;
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
        components_7.customModule,
        (0, components_7.customElements)('i-scom-swap-expert-mode-settings')
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
    function getBuilderSchema() {
        return {
            general: {
                dataSchema: {
                    type: "object",
                    properties: {
                        title: {
                            type: 'string'
                        },
                        logo: {
                            type: 'string',
                            format: 'data-url'
                        },
                        category: {
                            type: "string",
                            required: true,
                            enum: [
                                "fixed-pair",
                                "fixed-protocal",
                                "aggregator"
                            ]
                        },
                        networks: {
                            type: "array",
                            required: true,
                            items: {
                                type: "object",
                                properties: {
                                    chainId: {
                                        type: "number",
                                        enum: chainIds,
                                        required: true
                                    }
                                }
                            }
                        },
                        tokens: {
                            type: "array",
                            required: true,
                            items: {
                                type: "object",
                                properties: {
                                    chainId: {
                                        type: "number",
                                        enum: chainIds,
                                        required: true
                                    },
                                    address: {
                                        type: "string"
                                    }
                                }
                            }
                        },
                        providers: {
                            type: "array",
                            required: true,
                            items: {
                                type: "object",
                                properties: {
                                    key: {
                                        type: "string",
                                        required: true
                                    },
                                    chainId: {
                                        type: "number",
                                        enum: chainIds,
                                        required: true
                                    }
                                }
                            }
                        }
                    }
                },
                uiSchema: {
                    "type": "VerticalLayout",
                    "elements": [
                        {
                            "type": "HorizontalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/category"
                                }
                            ]
                        },
                        {
                            "type": "HorizontalLayout",
                            "elements": [
                                {
                                    "type": "Categorization",
                                    "elements": [
                                        {
                                            "type": "Category",
                                            "label": "Branding",
                                            "elements": [
                                                {
                                                    "type": "HorizontalLayout",
                                                    "elements": [
                                                        {
                                                            "type": "Control",
                                                            "scope": "#/properties/title"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "HorizontalLayout",
                                                    "elements": [
                                                        {
                                                            "type": "Control",
                                                            "scope": "#/properties/logo"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "Category",
                                            "label": "Networks",
                                            "elements": [
                                                {
                                                    "type": "Control",
                                                    "scope": "#/properties/networks",
                                                    "options": {
                                                        "detail": {
                                                            "type": "VerticalLayout"
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "type": "Category",
                                            "label": "Providers",
                                            "elements": [
                                                {
                                                    "type": "Control",
                                                    "scope": "#/properties/providers",
                                                    "options": {
                                                        "detail": {
                                                            "type": "VerticalLayout"
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "type": "Category",
                                            "label": "Tokens",
                                            "elements": [
                                                {
                                                    "type": "Control",
                                                    "scope": "#/properties/tokens"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                customControls(rpcWalletId) {
                    let networkPickers = [];
                    let tokenInputs = [];
                    return {
                        "#/properties/networks/properties/chainId": customNetworkPicker(),
                        "#/properties/tokens/properties/chainId": {
                            render: () => {
                                const idx = networkPickers.length;
                                networkPickers[idx] = new scom_network_picker_1.default(undefined, {
                                    type: 'combobox',
                                    networks,
                                    onCustomNetworkSelected: () => {
                                        var _a;
                                        const chainId = (_a = networkPickers[idx].selectedNetwork) === null || _a === void 0 ? void 0 : _a.chainId;
                                        tokenInputs[idx].targetChainId = chainId;
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
                                    tokenInputs[idx].targetChainId = value;
                            }
                        },
                        "#/properties/tokens/properties/address": {
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
                                if (chainId && tokenInputs[idx].targetChainId !== chainId) {
                                    tokenInputs[idx].targetChainId = chainId;
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
                        "#/properties/providers/properties/chainId": customNetworkPicker()
                    };
                }
            },
            theme: {
                dataSchema: {
                    type: 'object',
                    properties: {
                        "dark": {
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
                                primaryButtonBackground: {
                                    type: 'string'
                                },
                                primaryButtonHoverBackground: {
                                    type: 'string'
                                },
                                primaryButtonDisabledBackground: {
                                    type: 'string'
                                },
                                maxButtonBackground: {
                                    type: 'string'
                                },
                                maxButtonHoverBackground: {
                                    type: 'string'
                                }
                            }
                        },
                        "light": {
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
                                primaryButtonBackground: {
                                    type: 'string'
                                },
                                primaryButtonHoverBackground: {
                                    type: 'string'
                                },
                                primaryButtonDisabledBackground: {
                                    type: 'string'
                                },
                                maxButtonBackground: {
                                    type: 'string'
                                },
                                maxButtonHoverBackground: {
                                    type: 'string'
                                }
                            }
                        }
                    }
                }
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
                    type: "object",
                    properties: {
                        title: {
                            type: 'string'
                        },
                        logo: {
                            type: 'string',
                            format: 'data-url'
                        },
                        // category: {
                        //     type: "string",
                        //     required: true,
                        //     enum: [
                        //         "fixed-pair",
                        //         "fixed-protocal",
                        //         "aggregator"
                        //     ]
                        // },
                        // providers: {
                        //     type: "array",
                        //     required: true,
                        //     items: {
                        //         type: "object",
                        //         properties: {
                        //             key: {
                        //                 title: "Name",
                        //                 type: "string",
                        //                 oneOf: providerOptions,
                        //                 required: true
                        //             }
                        //         }
                        //     }
                        // }
                    }
                },
                uiSchema: {
                    "type": "VerticalLayout",
                    "elements": [
                        // {
                        //     "type": "HorizontalLayout",
                        //     "elements": [
                        //         {
                        //             "type": "Control",
                        //             "scope": "#/properties/category"
                        //         }
                        //     ]
                        // },
                        {
                            "type": "HorizontalLayout",
                            "elements": [
                                {
                                    "type": "Categorization",
                                    "elements": [
                                        {
                                            "type": "Category",
                                            "label": "Branding",
                                            "elements": [
                                                {
                                                    "type": "HorizontalLayout",
                                                    "elements": [
                                                        {
                                                            "type": "Control",
                                                            "scope": "#/properties/title"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "HorizontalLayout",
                                                    "elements": [
                                                        {
                                                            "type": "Control",
                                                            "scope": "#/properties/logo"
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
define("@scom/scom-swap", ["require", "exports", "@ijstech/components", "@ijstech/eth-wallet", "@scom/scom-swap/store/index.ts", "@scom/scom-token-list", "@scom/scom-swap/swap-utils/index.ts", "@scom/scom-swap/global/index.ts", "@scom/scom-swap/price-info/index.tsx", "@scom/scom-swap/expert-mode-settings/index.tsx", "@scom/scom-swap/data.json.ts", "@scom/scom-swap/formSchema.ts", "@scom/scom-dex-list", "@scom/scom-commission-fee-setup", "@scom/scom-swap/index.css.ts", "@scom/scom-swap/index.css.ts"], function (require, exports, components_8, eth_wallet_4, index_4, scom_token_list_4, index_5, index_6, index_7, index_8, data_json_1, formSchema_1, scom_dex_list_2, scom_commission_fee_setup_1, index_css_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_8.Styles.Theme.ThemeVars;
    // const currentTheme = Styles.Theme.currentTheme;
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
            for (let event of this.rpcWalletEvents) {
                rpcWallet.unregisterWalletEvent(event);
            }
            this.rpcWalletEvents = [];
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
                const commissionRate = await (0, index_5.getCommissionRate)(this.state, this._data.campaignId);
                this.state.embedderCommissionFee = commissionRate;
            }
        }
        getBuilderActions(category) {
            var _a;
            const formSchema = (0, formSchema_1.getBuilderSchema)();
            const propertiesDataSchema = formSchema.general.dataSchema;
            const propertiesUISchema = formSchema.general.uiSchema;
            const themeDataSchema = formSchema.theme.dataSchema;
            const propertiesCustomControls = formSchema.general.customControls((_a = this.state.getRpcWallet()) === null || _a === void 0 ? void 0 : _a.instanceId);
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
                    name: 'Settings',
                    icon: 'cog',
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
                                this._data.logo = userInputData.logo;
                                this._data.title = userInputData.title;
                                this._data.networks = userInputData.networks;
                                this._data.defaultChainId = this._data.networks[0].chainId;
                                this._data.category = userInputData.category;
                                this._data.providers = userInputData.providers;
                                this._data.tokens = [];
                                if (userInputData.tokens) {
                                    for (let inputToken of userInputData.tokens) {
                                        if (!inputToken.address) {
                                            const nativeToken = scom_token_list_4.ChainNativeTokenByChainId[inputToken.chainId];
                                            if (nativeToken)
                                                this._data.tokens.push(Object.assign(Object.assign({}, nativeToken), { chainId: inputToken.chainId }));
                                        }
                                        else {
                                            const tokens = scom_token_list_4.DefaultERC20Tokens[inputToken.chainId];
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
                    userInputDataSchema: propertiesDataSchema,
                    userInputUISchema: propertiesUISchema,
                    customControls: propertiesCustomControls
                });
                actions.push({
                    name: 'Theme Settings',
                    icon: 'palette',
                    command: (builder, userInputData) => {
                        let oldTag = {};
                        return {
                            execute: async () => {
                                if (!userInputData)
                                    return;
                                oldTag = JSON.parse(JSON.stringify(this.tag));
                                if (builder)
                                    builder.setTag(userInputData);
                                else
                                    this.setTag(userInputData);
                                if (this.dappContainer)
                                    this.dappContainer.setTag(userInputData);
                            },
                            undo: () => {
                                if (!userInputData)
                                    return;
                                this.tag = JSON.parse(JSON.stringify(oldTag));
                                if (builder)
                                    builder.setTag(this.tag);
                                else
                                    this.setTag(this.tag);
                                if (this.dappContainer)
                                    this.dappContainer.setTag(this.tag);
                            },
                            redo: () => { }
                        };
                    },
                    userInputDataSchema: themeDataSchema
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
                        const selectors = await (0, index_5.getProviderProxySelectors)(this.state, this._data.providers);
                        return selectors;
                    },
                    getDexProviderOptions: (chainId) => {
                        const providers = this.state.getDexInfoList({ chainId });
                        return providers;
                    },
                    getPair: async (market, tokenA, tokenB) => {
                        const pair = await (0, index_5.getPair)(this.state, market, tokenA, tokenB);
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
            const chainChangedEvent = rpcWallet.registerWalletEvent(this, eth_wallet_4.Constants.RpcWalletEvent.ChainChanged, async (chainId) => {
                this.onChainChange();
            });
            const connectedEvent = rpcWallet.registerWalletEvent(this, eth_wallet_4.Constants.RpcWalletEvent.Connected, async (connected) => {
                var _a, _b;
                if (this.swapBtn)
                    this.swapBtn.visible = true;
                this.updateContractAddress();
                if ((_b = (_a = this.originalData) === null || _a === void 0 ? void 0 : _a.providers) === null || _b === void 0 ? void 0 : _b.length)
                    await this.initializeWidgetConfig();
            });
            this.rpcWalletEvents.push(chainChangedEvent, connectedEvent);
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
            this.rpcWalletEvents = [];
            this.clientEvents = [];
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
                if (this.isFrom) {
                    queryRouter = Object.assign(Object.assign({}, queryRouter), { toAmount: this.toInputValue.toFixed() });
                }
                else {
                    queryRouter = Object.assign(Object.assign({}, queryRouter), { fromAmount: this.fromInputValue.toFixed() });
                }
                this.fromTokenSymbol = queryRouter.fromToken;
                this.toTokenSymbol = queryRouter.toToken;
            };
            this.fixedNumber = (value) => {
                const val = typeof value === 'object' ? value : new eth_wallet_4.BigNumber(value);
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
                    await eth_wallet_4.Wallet.getClientInstance().init();
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
                    scom_token_list_4.tokenStore.updateTokenMapData(currentChainId);
                    this.closeNetworkErrModal();
                    await this.initWallet();
                    await this.updateBalance();
                    this.initializeDefaultTokenPair();
                    this.toggleReverseImage.enabled = !this.isFixedPair;
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
                    if (this.fromInputValue.isGreaterThanOrEqualTo(0)) {
                        this.onUpdateEstimatedPosition(false, true);
                        this.firstTokenInput.value = this.fixedNumber(this.fromInputValue);
                    }
                    else if (this.toInputValue.isGreaterThanOrEqualTo(0)) {
                        this.onUpdateEstimatedPosition(true, true);
                        this.secondTokenInput.value = this.fixedNumber(this.toInputValue);
                    }
                    const tokens = (0, index_4.getSupportedTokens)(this._data.tokens || [], currentChainId);
                    this.firstTokenInput.tokenDataListProp = tokens;
                    this.secondTokenInput.tokenDataListProp = tokens;
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
                    const poolAmount = new eth_wallet_4.BigNumber((_a = this.record) === null || _a === void 0 ? void 0 : _a.amountIn);
                    if (poolAmount.isZero())
                        return null;
                    const minReceivedMaxSold = poolAmount.times(1 + slippageTolerance / 100).toNumber();
                    return minReceivedMaxSold;
                }
                else {
                    const poolAmount = new eth_wallet_4.BigNumber((_b = this.record) === null || _b === void 0 ? void 0 : _b.amountOut);
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
                this.setMapStatus('swap', key, index_6.ApprovalStatus.APPROVING);
                this.updateSwapButtonCaption();
                if (!this.swapBtn.rightIcon.visible)
                    this.swapBtn.rightIcon.visible = true;
            };
            this.onSwapConfirmed = async (data) => {
                const { key } = data;
                this.setMapStatus('swap', key, index_6.ApprovalStatus.TO_BE_APPROVED);
                this.updateSwapButtonCaption();
                if (this.swapBtn.rightIcon.visible)
                    this.swapBtn.rightIcon.visible = false;
                await this.handleAddRoute();
            };
            this.onSubmit = async () => {
                var _a, _b, _c, _d;
                try {
                    this.swapModal.visible = false;
                    this.showResultMessage('warning', `Swapping ${(0, index_6.formatNumber)(this.totalAmount(), 4)} ${(_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol} to ${(0, index_6.formatNumber)(this.toInputValue, 4)} ${(_b = this.toToken) === null || _b === void 0 ? void 0 : _b.symbol}`);
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
                    const { error } = await (0, index_5.executeSwap)(this.state, swapData);
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
                let inputVal = new eth_wallet_4.BigNumber(balance);
                if (!address) {
                    inputVal = new eth_wallet_4.BigNumber(0);
                }
                if (value == 0 || value) {
                    inputVal = inputVal.multipliedBy(value).dividedBy(100);
                }
                if (inputVal.eq(this.fromInputValue))
                    return;
                this.fromInputValue = inputVal;
                this.firstTokenInput.value = (0, index_6.limitDecimals)(this.fromInputValue.toFixed(), ((_d = this.fromToken) === null || _d === void 0 ? void 0 : _d.decimals) || 18);
                this.redirectToken();
                await this.handleAddRoute();
            };
            this.isMaxDisabled = () => {
                var _a, _b;
                const address = ((_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.address) || ((_b = this.fromToken) === null || _b === void 0 ? void 0 : _b.symbol);
                let balance = this.getBalance(this.fromToken);
                return !address || balance <= 0;
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
                        this.$render("i-label", { class: "ml-auto", caption: `${(0, index_6.formatNumber)(fee.value)} ${(_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol}` })));
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
            return warningMessageText === '' && this.approveButtonStatus !== undefined && this.approveButtonStatus !== index_6.ApprovalStatus.NONE;
        }
        get isPriceImpactTooHigh() {
            var _a;
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
                return new eth_wallet_4.BigNumber(0);
            if (!this.isFrom)
                return new eth_wallet_4.BigNumber(this.record.fromAmount);
            return new eth_wallet_4.BigNumber(this.getMinReceivedMaxSold() || this.record.fromAmount);
        }
        get isSwapping() {
            var _a;
            const key = (_a = this.record) === null || _a === void 0 ? void 0 : _a.key;
            return key && this.swapButtonStatusMap[key] === index_6.ApprovalStatus.APPROVING;
        }
        get approveButtonStatus() {
            var _a;
            const key = (_a = this.record) === null || _a === void 0 ? void 0 : _a.key;
            return this.approveButtonStatusMap[key];
        }
        get isApprovingRouter() {
            return this.approveButtonStatus === index_6.ApprovalStatus.APPROVING;
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
            let currentChainTokens = this._data.tokens.filter((token) => token.chainId === currentChainId);
            if (currentChainTokens.length < 2)
                return;
            const providers = (_a = this.originalData) === null || _a === void 0 ? void 0 : _a.providers;
            if (providers && providers.length) {
                let fromTokenKey = this.getTokenKey(currentChainTokens[0]);
                let toTokenKey = this.getTokenKey(currentChainTokens[1]);
                this.fromToken = scom_token_list_4.tokenStore.tokenMap[fromTokenKey];
                this.toToken = scom_token_list_4.tokenStore.tokenMap[toTokenKey];
                this.fromTokenSymbol = (_b = this.fromToken) === null || _b === void 0 ? void 0 : _b.symbol;
                this.toTokenSymbol = (_c = this.toToken) === null || _c === void 0 ? void 0 : _c.symbol;
                this.fromInputValue = new eth_wallet_4.BigNumber(defaultInput);
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
                    this.setMapStatus('approve', data.key, index_6.ApprovalStatus.TO_BE_APPROVED);
                    this.setMapStatus('swap', data.key, index_6.ApprovalStatus.TO_BE_APPROVED);
                    this.updateSwapButtonCaption();
                    const enabled = !this.isSwapButtonDisabled();
                    this.swapBtn.enabled = enabled;
                },
                onToBePaid: async (token, data) => {
                    this.setMapStatus('approve', data.key, index_6.ApprovalStatus.NONE);
                    this.setMapStatus('swap', data.key, index_6.ApprovalStatus.TO_BE_APPROVED);
                    this.updateSwapButtonCaption();
                    const enabled = !this.isSwapButtonDisabled();
                    this.swapBtn.enabled = enabled;
                },
                onApproving: async (token, receipt, data) => {
                    this.setMapStatus('approve', data.key, index_6.ApprovalStatus.APPROVING);
                    this.updateSwapButtonCaption();
                    this.showResultMessage('success', receipt);
                    if (this.isApprovingRouter && !this.swapBtn.rightIcon.visible)
                        this.swapBtn.rightIcon.visible = true;
                },
                onApproved: async (token, data) => {
                    this.setMapStatus('approve', data.key, index_6.ApprovalStatus.NONE);
                    this.updateSwapButtonCaption();
                    if (this.swapBtn.rightIcon.visible)
                        this.swapBtn.rightIcon.visible = false;
                    await this.handleAddRoute();
                },
                onApprovingError: async (token, err) => {
                    this.showResultMessage('error', err);
                    if (this.swapBtn.rightIcon.visible)
                        this.swapBtn.rightIcon.visible = false;
                },
                onPaying: async (receipt, data) => {
                    this.showResultMessage('success', receipt);
                    this.onSwapConfirming(data.key);
                },
                onPaid: async (data) => {
                    this.onSwapConfirmed({ key: data.key });
                    await this.updateBalance();
                    components_8.application.EventBus.dispatch("Paid" /* EventId.Paid */, 'onPaid');
                },
                onPayingError: async (err) => {
                    this.showResultMessage('error', err);
                }
            });
        }
        async onRevertSwap() {
            this.onUpdateEstimatedPosition(!this.isEstimated('from'), true);
            [this.fromToken, this.toToken] = [this.toToken, this.fromToken];
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
        handleSwapPopup() {
            var _a, _b, _c, _d;
            if (!this.record)
                return;
            const currentChainId = this.state.getChainId();
            const slippageTolerance = this.state.slippageTolerance;
            this.fromTokenImage.url = scom_token_list_4.assets.tokenPath(this.fromToken, currentChainId);
            this.fromTokenLabel.caption = (_b = (_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol) !== null && _b !== void 0 ? _b : '';
            this.fromTokenValue.caption = (0, index_6.formatNumber)(this.totalAmount(), 4);
            this.toTokenImage.url = scom_token_list_4.assets.tokenPath(this.toToken, currentChainId);
            this.toTokenLabel.caption = (_d = (_c = this.toToken) === null || _c === void 0 ? void 0 : _c.symbol) !== null && _d !== void 0 ? _d : '';
            this.toTokenValue.caption = (0, index_6.formatNumber)(this.toInputValue, 4);
            const minimumReceived = this.getMinReceivedMaxSold();
            if (minimumReceived || minimumReceived == 0) {
                this.payOrReceiveValue.caption = (0, index_6.formatNumber)(minimumReceived, 4);
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
            const balance = this.getBalance(token);
            if (isFrom) {
                this.fromToken = token;
                const enabled = !this.isMaxDisabled();
                this.maxButton.enabled = enabled;
                if (this.fromInputValue.gt(0)) {
                    const limit = (0, index_6.limitDecimals)(this.fromInputValue.toFixed(), token.decimals || 18);
                    if (!this.fromInputValue.eq(limit)) {
                        if (this.firstTokenInput) {
                            this.firstTokenInput = limit === '0' ? '' : limit;
                        }
                        this.fromInputValue = new eth_wallet_4.BigNumber(limit);
                    }
                }
                else if (this.fromInputValue.isZero()) {
                    this.onUpdateEstimatedPosition(true);
                }
                this.payBalance.caption = `Balance: ${(0, index_6.formatNumber)(balance, 4)} ${token.symbol}`;
                this.updateTokenInput(true);
            }
            else {
                this.toToken = token;
                if (this.toInputValue.gt(0)) {
                    const limit = (0, index_6.limitDecimals)(this.toInputValue.toFixed(), token.decimals || 18);
                    if (!this.toInputValue.eq(limit)) {
                        if (this.secondTokenInput) {
                            this.secondTokenInput.value = limit === '0' ? '' : limit;
                            ;
                        }
                        this.toInputValue = new eth_wallet_4.BigNumber(limit);
                    }
                }
                else if (this.toInputValue.isZero()) {
                    this.onUpdateEstimatedPosition(false);
                }
                this.receiveBalance.caption = `Balance: ${(0, index_6.formatNumber)(balance, 4)} ${token.symbol}`;
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
                await scom_token_list_4.tokenStore.updateAllTokenBalances(rpcWallet);
                this.allTokenBalancesMap = scom_token_list_4.tokenStore.tokenBalances;
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
                if (this._data.campaignId !== undefined) {
                    this.contractAddress = this.state.getProxyAddress();
                    (0, index_5.setApprovalModalSpenderAddress)(this.state, market, this.contractAddress);
                }
                else {
                    (0, index_5.setApprovalModalSpenderAddress)(this.state, market);
                }
            }
        }
        getInputValue(isFrom) {
            const token = isFrom ? this.fromToken : this.toToken;
            const value = isFrom ? this.fromInputValue : this.toInputValue;
            if (!value || value.isNaN())
                return '';
            return (0, index_6.limitDecimals)(value.toFixed(), (token === null || token === void 0 ? void 0 : token.decimals) || 18);
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
                    this.fromInputValue = typeof balanceValue !== 'object' ? new eth_wallet_4.BigNumber(balanceValue) : balanceValue;
                }
            }
            else {
                if (this.receiveCol.children) {
                    let balanceValue = item.amountOut;
                    this.secondTokenInput.value = this.fixedNumber(balanceValue);
                    this.toInputValue = typeof balanceValue !== 'object' ? new eth_wallet_4.BigNumber(balanceValue) : balanceValue;
                }
            }
            this.record = item;
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
                if ((0, index_6.isInvalidInput)(amount)) {
                    this.resetValuesByInput();
                    if (fromInput)
                        fromInput.value = '0';
                    if (toInput)
                        toInput.value = '0';
                    return;
                }
                const limit = isFrom ? (_c = this.fromToken) === null || _c === void 0 ? void 0 : _c.decimals : (_d = this.toToken) === null || _d === void 0 ? void 0 : _d.decimals;
                const value = new eth_wallet_4.BigNumber((0, index_6.limitDecimals)(amount, limit || 18));
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
            this.fromInputValue = new eth_wallet_4.BigNumber(0);
            this.toInputValue = new eth_wallet_4.BigNumber(0);
            this.redirectToken();
        }
        initRoutes() {
            this.record = null;
            this.isPriceToggled = false;
            this.swapBtn.visible = false;
        }
        async handleAddRoute() {
            var _a, _b;
            if (!this.fromToken || !this.toToken || !(this.fromInputValue.gt(0) || this.toInputValue.gt(0)))
                return;
            this.initRoutes();
            let listRouting = [];
            const useAPI = this._data.category === 'aggregator';
            this.updateContractAddress();
            listRouting = await (0, index_5.getAllRoutesData)(this.state, this.fromToken, this.toToken, this.fromInputValue, this.toInputValue, this.isFrom, useAPI, this.commissions);
            listRouting = listRouting.map((v) => {
                // const config = ProviderConfigMap[v.provider];
                return Object.assign(Object.assign({}, v), { isHybrid: false // config.marketCode == Market.HYBRID,
                 });
            });
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
                    this.toInputValue = new eth_wallet_4.BigNumber(0);
                    this.secondTokenInput.value = '';
                }
                else {
                    this.fromInputValue = new eth_wallet_4.BigNumber(0);
                    this.firstTokenInput.value = '';
                }
            }
            if (this.record) {
                this.setApprovalSpenderAddress();
                await this.approvalModelAction.checkAllowance(this.fromToken, this.fromInputValue.toFixed(), this.record);
                this.swapBtn.visible = true;
                const total = ((_a = this.record) === null || _a === void 0 ? void 0 : _a.fromAmount) ? new eth_wallet_4.BigNumber(this.record.fromAmount) : new eth_wallet_4.BigNumber(0);
                this.lbYouPayTitle.caption = `You Pay`;
                this.lbYouPayValue.caption = `${(0, index_6.formatNumber)(total)} ${(_b = this.fromToken) === null || _b === void 0 ? void 0 : _b.symbol}`;
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
                const firstAmount = new eth_wallet_4.BigNumber(routes[0][amountStr] || 0);
                const secondAmount = new eth_wallet_4.BigNumber(routes[1][amountStr] || 0);
                if (firstAmount.eq(0) || secondAmount.eq(0)) {
                    return 0;
                }
                let percent = new eth_wallet_4.BigNumber(0);
                if (isFrom) {
                    percent = secondAmount.minus(firstAmount).dividedBy(firstAmount);
                }
                else {
                    percent = firstAmount.minus(secondAmount).dividedBy(secondAmount);
                }
                percent = percent.multipliedBy(100);
                if (percent.gte(0.01)) {
                    return `Save ${(0, index_6.formatNumber)(percent.toNumber(), 2)}%`;
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
            var _a, _b, _c, _d;
            const value = this.isPriceToggled ? (_a = this.record) === null || _a === void 0 ? void 0 : _a.priceSwap : (_b = this.record) === null || _b === void 0 ? void 0 : _b.price;
            let fromSymbol = (_c = this.fromToken) === null || _c === void 0 ? void 0 : _c.symbol;
            let toSymbol = (_d = this.toToken) === null || _d === void 0 ? void 0 : _d.symbol;
            if (value || value == 0) {
                if (this.isPriceToggled) {
                    return `1 ${fromSymbol} ≈ ${(0, index_6.formatNumber)(value)} ${toSymbol}`;
                }
                return `1 ${toSymbol} ≈ ${(0, index_6.formatNumber)(value)} ${fromSymbol}`;
            }
            return '-';
        }
        getPriceImpact() {
            var _a;
            const value = (_a = this.record) === null || _a === void 0 ? void 0 : _a.priceImpact;
            if (value || value == 0) {
                return `${(0, index_6.formatNumber)(value)}%`;
            }
            return '-';
        }
        getMinimumReceived() {
            var _a, _b;
            const value = this.getMinReceivedMaxSold();
            if (value || value == 0) {
                if (this.isFrom) {
                    return `${(0, index_6.formatNumber)(value)} ${(_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol}`;
                }
                return `${(0, index_6.formatNumber)(value)} ${(_b = this.toToken) === null || _b === void 0 ? void 0 : _b.symbol}`;
            }
            return '-';
        }
        getTradeFeeExactAmount() {
            var _a, _b, _c;
            const tradeFee = (_a = this.record) === null || _a === void 0 ? void 0 : _a.fromAmount.times((_b = this.record) === null || _b === void 0 ? void 0 : _b.tradeFee).toNumber();
            if (tradeFee || tradeFee == 0) {
                return `${(0, index_6.formatNumber)(tradeFee)} ${(_c = this.fromToken) === null || _c === void 0 ? void 0 : _c.symbol}`;
            }
            return '-';
        }
        getFeeDetails() {
            if (this.record) {
                return [{
                        title: "Liquidity Provider Fee",
                        description: "This fee is paid to the AMM Liquidity Provider.",
                        value: this.record.tradeFee
                    }];
            }
            else {
                return [];
            }
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
                    isHidden: false,
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
                    isHidden: true,
                }
            ];
            return info.filter((f) => !f.isHidden);
        }
        getBalance(token) {
            var _a;
            if (token && this.allTokenBalancesMap) {
                const address = token.address || '';
                let balance = address ? (_a = this.allTokenBalancesMap[address.toLowerCase()]) !== null && _a !== void 0 ? _a : 0 : this.allTokenBalancesMap[token.symbol] || 0;
                return balance;
            }
            return 0;
        }
        async updateBalance() {
            const rpcWallet = this.state.getRpcWallet();
            if (rpcWallet.address) {
                if (this.hasData)
                    await scom_token_list_4.tokenStore.updateAllTokenBalances(rpcWallet);
                this.allTokenBalancesMap = scom_token_list_4.tokenStore.tokenBalances;
            }
            else {
                this.allTokenBalancesMap = {};
            }
            if (this.fromToken) {
                const balance = this.getBalance(this.fromToken);
                this.payBalance.caption = `Balance: ${(0, index_6.formatNumber)(balance, 4)} ${this.fromToken.symbol}`;
            }
            if (this.toToken) {
                const balance = this.getBalance(this.toToken);
                this.receiveBalance.caption = `Balance: ${(0, index_6.formatNumber)(balance, 4)} ${this.toToken.symbol}`;
            }
            const enabled = !this.isMaxDisabled();
            this.maxButton.enabled = enabled;
        }
        updateSwapButtonCaption() {
            if (this.swapBtn && this.swapBtn.hasChildNodes()) {
                this.swapBtn.caption = this.determineSwapButtonCaption();
            }
        }
        determineSwapButtonCaption() {
            var _a;
            const isApproveButtonShown = this.isApproveButtonShown;
            if (!(0, index_4.isClientWalletConnected)()) {
                return "Connect Wallet";
            }
            if (!this.state.isRpcWalletConnected()) {
                return "Switch Network";
            }
            if (isApproveButtonShown) {
                const status = this.approveButtonStatus;
                switch (status) {
                    case index_6.ApprovalStatus.APPROVING:
                        return "Approving";
                    case index_6.ApprovalStatus.TO_BE_APPROVED:
                        return "Approve";
                }
                return '';
            }
            else {
                if (this.isSwapping) {
                    return "Swapping";
                }
                if (this.isInsufficientBalance) {
                    return `Insufficient ${(_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol} balance`;
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
            if (this.isApproveButtonShown) {
                return this.isApprovingRouter;
            }
            return this.isSwapping;
        }
        isSwapButtonDisabled() {
            const warningMessageText = this.getWarningMessageText();
            return (this.state.isRpcWalletConnected() && (warningMessageText != '' && !this.isPriceImpactTooHigh));
        }
        async onClickSwapButton() {
            if (!(0, index_4.isClientWalletConnected)()) {
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
                const clientWallet = eth_wallet_4.Wallet.getClientInstance();
                await clientWallet.switchNetwork(chainId);
                return;
            }
            if (!this.record || this.isSwapButtonDisabled())
                return;
            const isApproveButtonShown = this.isApproveButtonShown;
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
                this.priceInfo = new index_7.PriceInfo();
                this.priceInfo.width = 'auto';
                this.priceInfo.height = 'auto';
                this.pnlPriceInfo.appendChild(this.priceInfo);
                this.priceInfo.onTogglePrice = this.onTogglePrice.bind(this);
            }
            this.priceInfo.Items = this.getPriceInfo();
            if (!this.priceInfo2) {
                this.priceInfo2 = new index_7.PriceInfo();
                this.priceInfo2.width = 'auto';
                this.priceInfo2.height = 'auto';
                this.priceInfo2.onTogglePrice = this.onTogglePrice.bind(this);
            }
            this.priceInfoContainer.appendChild(this.priceInfo2);
        }
        initExpertModal() {
            this.expertModal = new index_8.ExpertModeSettings(this.state);
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
            this.state = new index_4.State(data_json_1.default);
            this.fromInputValue = new eth_wallet_4.BigNumber(0);
            this.toInputValue = new eth_wallet_4.BigNumber(0);
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
                                        this.$render("i-panel", { class: "token-box" },
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
                                    this.$render("i-panel", { class: "toggle-reverse" },
                                        this.$render("i-icon", { id: "toggleReverseImage", position: "relative", width: 32, height: 32, class: "icon-swap rounded-icon custom-ic--swap", name: "arrows-alt-v", onClick: this.onRevertSwap.bind(this) })),
                                    this.$render("i-vstack", { gap: 5, minWidth: 230, width: "calc(100% - 25px)" },
                                        this.$render("i-panel", { class: "token-box", height: "100%" },
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
                            this.$render("i-panel", { id: "pnlPriceInfo" }),
                            this.$render("i-vstack", { class: "swap-btn-container", horizontalAlignment: "center", width: "100%" },
                                this.$render("i-button", { id: "swapBtn", class: "btn-swap btn-os", maxWidth: 360, height: 60, visible: false, rightIcon: { spin: true, visible: false, fill: Theme.colors.primary.contrastText }, onClick: this.onClickSwapButton.bind(this) }))),
                        this.$render("i-modal", { id: "swapModal", class: "custom-modal", title: "Confirm Swap", closeIcon: { name: 'times' } },
                            this.$render("i-hstack", { verticalAlignment: 'center', horizontalAlignment: 'start' },
                                this.$render("i-panel", { class: "row-chain" },
                                    this.$render("i-image", { id: "fromTokenImage", width: "30px", height: "30px", url: "#" }),
                                    this.$render("i-label", { id: "fromTokenLabel", class: "token-name", caption: "" })),
                                this.$render("i-label", { id: "fromTokenValue", class: "token-value", caption: " - " })),
                            this.$render("i-icon", { name: "arrow-down", class: "arrow-down custom-icon--fill", width: 28, height: 28 }),
                            this.$render("i-hstack", { class: "mb-1", verticalAlignment: 'center', horizontalAlignment: 'start' },
                                this.$render("i-panel", { class: "row-chain" },
                                    this.$render("i-image", { id: "toTokenImage", width: "30px", height: "30px", url: "#" }),
                                    this.$render("i-label", { id: "toTokenLabel", class: "token-name", caption: "" })),
                                this.$render("i-label", { id: "toTokenValue", class: "token-value text-primary bold", caption: " - " })),
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
                                        this.$render("i-button", { caption: "Close", class: "btn-os btn-submit", onClick: () => this.closeModalFees() }))))),
                        this.$render("i-modal", { id: "networkErrModal", class: "bg-modal custom-modal", title: "Supported Networks", closeIcon: { name: 'times' } },
                            this.$render("i-panel", { class: "i-modal_content" },
                                this.$render("i-vstack", { id: "supportedNetworksElm", gap: 10, verticalAlignment: "center" }),
                                this.$render("i-hstack", { verticalAlignment: "center", horizontalAlignment: "center", margin: { top: 16, bottom: 8 } },
                                    this.$render("i-button", { caption: "Close", width: 150, padding: { top: 4, bottom: 4 }, class: "btn-os btn-submit text-center", onClick: () => this.closeNetworkErrModal() }))))),
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
