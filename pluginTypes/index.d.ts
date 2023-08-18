/// <reference path="@scom/scom-dex-list/index.d.ts" />
/// <reference path="@ijstech/eth-wallet/index.d.ts" />
/// <reference path="@scom/scom-commission-proxy-contract/@ijstech/eth-wallet/index.d.ts" />
/// <reference path="@scom/scom-token-input/@ijstech/eth-wallet/index.d.ts" />
/// <reference path="@scom/scom-token-input/@scom/scom-token-modal/@ijstech/eth-wallet/index.d.ts" />
/// <reference path="@scom/scom-dapp-container/@ijstech/eth-wallet/index.d.ts" />
/// <amd-module name="@scom/scom-swap/assets.ts" />
declare module "@scom/scom-swap/assets.ts" {
    function fullPath(path: string): string;
    const _default: {
        logo: string;
        fullPath: typeof fullPath;
    };
    export default _default;
}
/// <amd-module name="@scom/scom-swap/index.css.ts" />
declare module "@scom/scom-swap/index.css.ts" {
    export const swapStyle: string;
}
/// <amd-module name="@scom/scom-swap/global/utils/helper.ts" />
declare module "@scom/scom-swap/global/utils/helper.ts" {
    export const formatNumber: (value: any, decimals?: number) => string;
    export const formatNumberWithSeparators: (value: number, precision?: number) => string;
    export const isInvalidInput: (val: any) => boolean;
    export const limitDecimals: (value: any, decimals: number) => any;
    export function getAPI(url: string, paramsObj?: any): Promise<any>;
}
/// <amd-module name="@scom/scom-swap/global/utils/swapInterface.ts" />
declare module "@scom/scom-swap/global/utils/swapInterface.ts" {
    import { IWalletPlugin } from "@scom/scom-wallet-modal";
    import { ITokenObject } from '@scom/scom-token-list';
    export type Category = 'fixed-pair' | 'aggregator';
    export interface ISwapConfig {
        category: Category;
        providers: IProvider[];
    }
    export interface IContractInfo {
        factoryAddress: string;
        routerAddress: string;
        tradeFee: {
            fee: string;
            base: string;
        };
        fromToken?: string;
        toToken?: string;
    }
    export interface IProvider {
        key: string;
    }
    export interface IProviderUI {
        key: string;
        chainId: number;
    }
    export interface ICommissionInfo {
        chainId: number;
        walletAddress: string;
    }
    export interface INetworkConfig {
        chainName?: string;
        chainId: number;
    }
    export interface ISwapConfigUI {
        campaignId?: number;
        category: Category;
        providers: IProviderUI[];
        commissions?: ICommissionInfo[];
        tokens?: ITokenObject[];
        defaultChainId: number;
        wallets: IWalletPlugin[];
        networks: INetworkConfig[];
        showHeader?: boolean;
        logo?: string;
        title?: string;
    }
}
/// <amd-module name="@scom/scom-swap/global/utils/index.ts" />
declare module "@scom/scom-swap/global/utils/index.ts" {
    export { getAPI, formatNumber, formatNumberWithSeparators, limitDecimals, isInvalidInput } from "@scom/scom-swap/global/utils/helper.ts";
    export { IContractInfo, IProvider, ISwapConfig, ISwapConfigUI, IProviderUI, Category, ICommissionInfo, INetworkConfig } from "@scom/scom-swap/global/utils/swapInterface.ts";
}
/// <amd-module name="@scom/scom-swap/global/index.ts" />
declare module "@scom/scom-swap/global/index.ts" {
    export const enum EventId {
        ConnectWallet = "connectWallet",
        IsWalletConnected = "isWalletConnected",
        IsWalletDisconnected = "IsWalletDisconnected",
        Paid = "Paid",
        chainChanged = "chainChanged",
        SlippageToleranceChanged = "SlippageToleranceChanged",
        ExpertModeChanged = "ExpertModeChanged",
        ShowExpertModal = "ShowExpertModal"
    }
    export enum ApprovalStatus {
        TO_BE_APPROVED = 0,
        APPROVING = 1,
        NONE = 2
    }
    export * from "@scom/scom-swap/global/utils/index.ts";
}
/// <amd-module name="@scom/scom-swap/store/utils.ts" />
declare module "@scom/scom-swap/store/utils.ts" {
    import { INetwork, ERC20ApprovalModel, IERC20ApprovalEventOptions } from '@ijstech/eth-wallet';
    import { ITokenObject } from '@scom/scom-token-list';
    import { IProvider } from "@scom/scom-swap/global/index.ts";
    import { IDexInfo } from '@scom/scom-dex-list';
    export enum WalletPlugin {
        MetaMask = "metamask",
        WalletConnect = "walletconnect"
    }
    export type ProxyAddresses = {
        [key: number]: string;
    };
    export class State {
        isExpertMode: boolean;
        slippageTolerance: number;
        transactionDeadline: number;
        infuraId: string;
        networkMap: {
            [key: number]: INetwork;
        };
        dexInfoList: IDexInfo[];
        providerList: IProvider[];
        proxyAddresses: ProxyAddresses;
        apiGatewayUrls: Record<string, string>;
        embedderCommissionFee: string;
        rpcWalletId: string;
        approvalModel: ERC20ApprovalModel;
        constructor(options: any);
        initRpcWallet(defaultChainId: number): string;
        setProviderList(value: IProvider[]): void;
        setDexInfoList(value: IDexInfo[]): void;
        getDexInfoList(options?: {
            key?: string;
            chainId?: number;
        }): IDexInfo[];
        getDexDetail(key: string, chainId: number): import("@scom/scom-dex-list").IDexDetail;
        getProxyAddress(chainId?: number): string;
        getProviderByKey(providerKey: string): IProvider;
        getRpcWallet(): import("@ijstech/eth-wallet").IRpcWallet;
        isRpcWalletConnected(): boolean;
        getChainId(): number;
        toggleExpertMode(): void;
        private initData;
        private setNetworkList;
        setApprovalModelAction(options: IERC20ApprovalEventOptions): Promise<import("@ijstech/eth-wallet").IERC20ApprovalAction>;
    }
    export const getNetworkInfo: (chainId: number) => any;
    export function isClientWalletConnected(): boolean;
    export const hasMetaMask: () => boolean;
    export const getChainNativeToken: (chainId: number) => ITokenObject;
    export function getClientWallet(): import("@ijstech/eth-wallet").IClientWallet;
}
/// <amd-module name="@scom/scom-swap/store/index.ts" />
declare module "@scom/scom-swap/store/index.ts" {
    import { ITokenObject } from '@scom/scom-token-list';
    export const getWETH: (chainId: number) => ITokenObject;
    export const getSupportedTokens: (tokens: ITokenObject[], chainId: number) => ITokenObject[];
    export * from "@scom/scom-swap/store/utils.ts";
}
/// <amd-module name="@scom/scom-swap/swap-utils/index.ts" />
declare module "@scom/scom-swap/swap-utils/index.ts" {
    import { BigNumber, TransactionReceipt } from "@ijstech/eth-wallet";
    import { ITokenObject } from '@scom/scom-token-list';
    import { ICommissionInfo, IProviderUI } from "@scom/scom-swap/global/index.ts";
    import { State } from "@scom/scom-swap/store/index.ts";
    interface TradeFee {
        fee: string;
        base: string;
    }
    interface TradeFeeMap {
        [key: string]: TradeFee;
    }
    const getChainNativeToken: (chainId: number) => ITokenObject;
    function getRouterAddress(state: State, key: string): string;
    function getTradeFeeMap(state: State): TradeFeeMap;
    const getProviderProxySelectors: (state: State, providers: IProviderUI[]) => Promise<string[]>;
    const getPair: (state: State, market: string, tokenA: ITokenObject, tokenB: ITokenObject) => Promise<string>;
    function getExtendedRouteObjData(wallet: any, bestRouteObj: any, tradeFeeMap: TradeFeeMap, swapPrice: BigNumber, isHybridOrQueue: boolean): Promise<any>;
    function getAllRoutesData(state: State, firstTokenObject: ITokenObject, secondTokenObject: ITokenObject, firstInput: BigNumber, secondInput: BigNumber, isFromEstimated: boolean, useAPI: boolean, commissions: ICommissionInfo[]): Promise<any[]>;
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
    }>;
    const setApprovalModalSpenderAddress: (state: State, market: string, contractAddress?: string) => void;
    const getCommissionRate: (state: State, campaignId: number) => Promise<string>;
    export { getExtendedRouteObjData, getTradeFeeMap, getAllRoutesData, getPair, SwapData, executeSwap, getChainNativeToken, getRouterAddress, setApprovalModalSpenderAddress, getProviderProxySelectors, getCommissionRate };
}
/// <amd-module name="@scom/scom-swap/price-info/priceInfo.css.ts" />
declare module "@scom/scom-swap/price-info/priceInfo.css.ts" { }
/// <amd-module name="@scom/scom-swap/price-info/index.tsx" />
declare module "@scom/scom-swap/price-info/index.tsx" {
    import { Module, Control, ControlElement, Icon, Container } from '@ijstech/components';
    import "@scom/scom-swap/price-info/priceInfo.css.ts";
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-swap-price-info']: ControlElement;
            }
        }
    }
    export class PriceInfo extends Module {
        private priceContent;
        private _items;
        onTogglePrice: any;
        constructor(parent?: Container, options?: any);
        get Items(): any[];
        set Items(value: any[]);
        renderItems: () => Promise<void>;
        onRenderToggleBtn: (parent: Control) => Icon;
        renderIconTooltip: (parent: Control, item: any) => Promise<Icon>;
        updateItems: () => Promise<void>;
        init(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-swap/expert-mode-settings/index.css.ts" />
declare module "@scom/scom-swap/expert-mode-settings/index.css.ts" {
    const _default_1: string;
    export default _default_1;
}
/// <amd-module name="@scom/scom-swap/expert-mode-settings/index.tsx" />
declare module "@scom/scom-swap/expert-mode-settings/index.tsx" {
    import { Module, Container, ControlElement } from '@ijstech/components';
    import { State } from "@scom/scom-swap/store/index.ts";
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-swap-expert-mode-settings']: ControlElement;
            }
        }
    }
    export class ExpertModeSettings extends Module {
        private expertModal;
        private $eventBus;
        private state;
        constructor(state: State, parent?: Container, options?: any);
        init(): Promise<void>;
        closeModal(): void;
        showModal(): void;
        onToggle(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-swap/data.json.ts" />
declare module "@scom/scom-swap/data.json.ts" {
    const _default_2: {
        infuraId: string;
        networks: {
            chainId: number;
        }[];
        proxyAddresses: {
            "43113": string;
        };
        defaultBuilderData: {
            providers: {
                key: string;
                chainId: number;
            }[];
            category: string;
            tokens: {
                name: string;
                address: string;
                symbol: string;
                decimals: number;
                chainId: number;
            }[];
            defaultChainId: number;
            networks: {
                chainId: number;
            }[];
            wallets: {
                name: string;
            }[];
            showHeader: boolean;
            showFooter: boolean;
        };
    };
    export default _default_2;
}
/// <amd-module name="@scom/scom-swap/formSchema.ts" />
declare module "@scom/scom-swap/formSchema.ts" {
    import ScomNetworkPicker from '@scom/scom-network-picker';
    import ScomTokenInput from '@scom/scom-token-input';
    export function getBuilderSchema(): {
        general: {
            dataSchema: {
                type: string;
                properties: {
                    title: {
                        type: string;
                    };
                    logo: {
                        type: string;
                        format: string;
                    };
                    category: {
                        type: string;
                        required: boolean;
                        enum: string[];
                    };
                    networks: {
                        type: string;
                        required: boolean;
                        items: {
                            type: string;
                            properties: {
                                chainId: {
                                    type: string;
                                    enum: number[];
                                    required: boolean;
                                };
                            };
                        };
                    };
                    tokens: {
                        type: string;
                        required: boolean;
                        items: {
                            type: string;
                            properties: {
                                chainId: {
                                    type: string;
                                    enum: number[];
                                    required: boolean;
                                };
                                address: {
                                    type: string;
                                };
                            };
                        };
                    };
                    providers: {
                        type: string;
                        required: boolean;
                        items: {
                            type: string;
                            properties: {
                                key: {
                                    type: string;
                                    required: boolean;
                                };
                                chainId: {
                                    type: string;
                                    enum: number[];
                                    required: boolean;
                                };
                            };
                        };
                    };
                };
            };
            uiSchema: {
                type: string;
                elements: ({
                    type: string;
                    elements: {
                        type: string;
                        scope: string;
                    }[];
                } | {
                    type: string;
                    elements: {
                        type: string;
                        elements: ({
                            type: string;
                            label: string;
                            elements: {
                                type: string;
                                elements: {
                                    type: string;
                                    scope: string;
                                }[];
                            }[];
                        } | {
                            type: string;
                            label: string;
                            elements: {
                                type: string;
                                scope: string;
                                options: {
                                    detail: {
                                        type: string;
                                    };
                                };
                            }[];
                        } | {
                            type: string;
                            label: string;
                            elements: {
                                type: string;
                                scope: string;
                            }[];
                        })[];
                    }[];
                })[];
            };
            customControls(rpcWalletId: string): {
                "#/properties/networks/properties/chainId": {
                    render: () => ScomNetworkPicker;
                    getData: (control: ScomNetworkPicker) => number;
                    setData: (control: ScomNetworkPicker, value: number) => void;
                };
                "#/properties/tokens/properties/chainId": {
                    render: () => ScomNetworkPicker;
                    getData: (control: ScomNetworkPicker) => number;
                    setData: (control: ScomNetworkPicker, value: number) => void;
                };
                "#/properties/tokens/properties/address": {
                    render: () => ScomTokenInput;
                    getData: (control: ScomTokenInput) => string;
                    setData: (control: ScomTokenInput, value: string) => void;
                };
                "#/properties/providers/properties/chainId": {
                    render: () => ScomNetworkPicker;
                    getData: (control: ScomNetworkPicker) => number;
                    setData: (control: ScomNetworkPicker, value: number) => void;
                };
            };
        };
        theme: {
            dataSchema: {
                type: string;
                properties: {
                    dark: {
                        type: string;
                        properties: {
                            backgroundColor: {
                                type: string;
                                format: string;
                            };
                            fontColor: {
                                type: string;
                                format: string;
                            };
                            inputBackgroundColor: {
                                type: string;
                                format: string;
                            };
                            inputFontColor: {
                                type: string;
                                format: string;
                            };
                            primaryButtonBackground: {
                                type: string;
                            };
                            primaryButtonHoverBackground: {
                                type: string;
                            };
                            primaryButtonDisabledBackground: {
                                type: string;
                            };
                            maxButtonBackground: {
                                type: string;
                            };
                            maxButtonHoverBackground: {
                                type: string;
                            };
                        };
                    };
                    light: {
                        type: string;
                        properties: {
                            backgroundColor: {
                                type: string;
                                format: string;
                            };
                            fontColor: {
                                type: string;
                                format: string;
                            };
                            inputBackgroundColor: {
                                type: string;
                                format: string;
                            };
                            inputFontColor: {
                                type: string;
                                format: string;
                            };
                            primaryButtonBackground: {
                                type: string;
                            };
                            primaryButtonHoverBackground: {
                                type: string;
                            };
                            primaryButtonDisabledBackground: {
                                type: string;
                            };
                            maxButtonBackground: {
                                type: string;
                            };
                            maxButtonHoverBackground: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    export function getProjectOwnerSchema(): {
        general: {
            dataSchema: {
                type: string;
                properties: {
                    title: {
                        type: string;
                    };
                    logo: {
                        type: string;
                        format: string;
                    };
                };
            };
            uiSchema: {
                type: string;
                elements: {
                    type: string;
                    elements: {
                        type: string;
                        elements: {
                            type: string;
                            label: string;
                            elements: {
                                type: string;
                                elements: {
                                    type: string;
                                    scope: string;
                                }[];
                            }[];
                        }[];
                    }[];
                }[];
            };
        };
    };
}
/// <amd-module name="@scom/scom-swap" />
declare module "@scom/scom-swap" {
    import { Module, Container, ControlElement } from '@ijstech/components';
    import { BigNumber } from '@ijstech/eth-wallet';
    import "@scom/scom-swap/index.css.ts";
    import { ITokenObject } from '@scom/scom-token-list';
    import { ISwapConfigUI, IProviderUI, Category, ICommissionInfo, INetworkConfig } from "@scom/scom-swap/global/index.ts";
    import { IWalletPlugin } from '@scom/scom-wallet-modal';
    import ScomCommissionFeeSetup from '@scom/scom-commission-fee-setup';
    interface ScomSwapElement extends ControlElement {
        campaignId?: number;
        lazyLoad?: boolean;
        category: Category;
        providers: IProviderUI[];
        tokens?: ITokenObject[];
        defaultChainId: number;
        networks: INetworkConfig[];
        wallets: IWalletPlugin[];
        showHeader?: boolean;
        logo?: string;
        title?: string;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ["i-scom-swap"]: ScomSwapElement;
            }
        }
    }
    export default class ScomSwap extends Module {
        private state;
        private _data;
        tag: any;
        defaultEdit: boolean;
        private pnlBranding;
        private imgLogo;
        private lbTitle;
        private swapComponent;
        private swapContainer;
        private pnlPriceInfo;
        private wrapperSwap;
        private isInited;
        private payBalance;
        private receiveBalance;
        private firstTokenInput;
        private secondTokenInput;
        private payCol;
        private receiveCol;
        private swapModal;
        private lbRouting;
        private priceInfo;
        private priceInfo2;
        private priceInfoContainer;
        private fromTokenImage;
        private fromTokenLabel;
        private fromTokenValue;
        private toTokenImage;
        private toTokenLabel;
        private toTokenValue;
        private payOrReceiveValue;
        private payOrReceiveToken;
        private txStatusModal;
        private maxButton;
        private swapBtn;
        private lbYouPayTitle;
        private lbYouPayValue;
        private mdWallet;
        private dappContainer;
        private isFrom;
        private fromToken?;
        private toToken?;
        private fromTokenSymbol;
        private toTokenSymbol;
        private fromInputValue;
        private toInputValue;
        private timeout;
        private isPriceToggled;
        private record;
        private allTokenBalancesMap;
        private supportedChainIds;
        private swapButtonStatusMap;
        private approveButtonStatusMap;
        private $eventBus;
        private lbEstimate;
        private lbPayOrReceive;
        private approvalModelAction;
        private toggleReverseImage;
        private supportedChainList;
        private swapModalConfirmBtn;
        private modalFees;
        private feesInfo;
        private expertModal;
        private networkErrModal;
        private supportedNetworksElm;
        private contractAddress;
        private rpcWalletEvents;
        private clientEvents;
        static create(options?: ScomSwapElement, parent?: Container): Promise<ScomSwap>;
        removeRpcWalletEvents(): void;
        onHide(): void;
        get category(): Category;
        set category(value: Category);
        get providers(): IProviderUI[];
        set providers(value: IProviderUI[]);
        get commissions(): ICommissionInfo[];
        set commissions(value: ICommissionInfo[]);
        get defaultChainId(): number;
        set defaultChainId(value: number);
        get wallets(): IWalletPlugin[];
        set wallets(value: IWalletPlugin[]);
        get networks(): INetworkConfig[];
        set networks(value: INetworkConfig[]);
        get showHeader(): boolean;
        set showHeader(value: boolean);
        set width(value: string | number);
        private get hasData();
        private determineActionsByTarget;
        private loadCommissionFee;
        private getBuilderActions;
        private getProjectOwnerActions;
        getConfigurators(): ({
            name: string;
            target: string;
            getProxySelectors: () => Promise<string[]>;
            getDexProviderOptions: (chainId: number) => import("@scom/scom-dex-list").IDexInfo[];
            getPair: (market: string, tokenA: ITokenObject, tokenB: ITokenObject) => Promise<string>;
            getActions: (category?: string) => any[];
            getData: any;
            setData: (value: any) => Promise<void>;
            getTag: any;
            setTag: any;
            elementName?: undefined;
            getLinkParams?: undefined;
            bindOnChanged?: undefined;
        } | {
            name: string;
            target: string;
            getActions: (category?: string) => any[];
            getData: any;
            setData: (value: any) => Promise<void>;
            getTag: any;
            setTag: any;
            getProxySelectors?: undefined;
            getDexProviderOptions?: undefined;
            getPair?: undefined;
            elementName?: undefined;
            getLinkParams?: undefined;
            bindOnChanged?: undefined;
        } | {
            name: string;
            target: string;
            elementName: string;
            getLinkParams: () => {
                data: any;
            };
            bindOnChanged: (element: ScomCommissionFeeSetup, callback: (data: any) => Promise<void>) => void;
            getData: () => Promise<{
                fee: string;
                campaignId?: number;
                category: Category;
                providers: IProviderUI[];
                commissions?: ICommissionInfo[];
                tokens?: ITokenObject[];
                defaultChainId: number;
                wallets: IWalletPlugin[];
                networks: INetworkConfig[];
                showHeader?: boolean;
                logo?: string;
                title?: string;
            }>;
            setData: (properties: ISwapConfigUI, linkParams?: Record<string, any>) => Promise<void>;
            getTag: any;
            setTag: any;
            getProxySelectors?: undefined;
            getDexProviderOptions?: undefined;
            getPair?: undefined;
            getActions?: undefined;
        })[];
        private getData;
        private resetRpcWallet;
        private setData;
        private getTag;
        private updateTag;
        private setTag;
        private updateStyle;
        private updateTheme;
        private setProviders;
        private updateContractAddress;
        private get isFixedPair();
        private get originalData();
        private refreshUI;
        constructor(parent?: Container, options?: any);
        private registerEvent;
        private onChainChange;
        get isApproveButtonShown(): boolean;
        get isPriceImpactTooHigh(): boolean;
        get isInsufficientBalance(): boolean;
        get maxSold(): BigNumber;
        get isSwapping(): boolean;
        get approveButtonStatus(): any;
        get isApprovingRouter(): boolean;
        get isValidToken(): boolean;
        private redirectToken;
        private fixedNumber;
        private getTokenKey;
        private initializeDefaultTokenPair;
        private initWallet;
        private initializeWidgetConfig;
        private initApprovalModelAction;
        private onRevertSwap;
        private totalAmount;
        private handleSwapPopup;
        private doSwap;
        private getMinReceivedMaxSold;
        private onUpdateToken;
        private onSelectToken;
        private setApprovalSpenderAddress;
        private getInputValue;
        private updateTokenInput;
        private onSelectRouteItem;
        private onTokenInputChange;
        private resetValuesByInput;
        private initRoutes;
        private handleAddRoute;
        private getPricePercent;
        private onTogglePrice;
        private getRate;
        private getPriceImpact;
        private getMinimumReceived;
        private getTradeFeeExactAmount;
        private getFeeDetails;
        private getPriceInfo;
        private onUpdateEstimatedPosition;
        private isEstimated;
        private getBalance;
        private updateBalance;
        private updateSwapButtonCaption;
        private determineSwapButtonCaption;
        private getWarningMessageText;
        private setMapStatus;
        private onSwapConfirming;
        private onSwapConfirmed;
        private isButtonLoading;
        private isSwapButtonDisabled;
        private onClickSwapButton;
        private onSubmit;
        private onApproveRouterMax;
        private onSetMaxBalance;
        private isMaxDisabled;
        private onRenderPriceInfo;
        private showModalFees;
        private closeModalFees;
        private showResultMessage;
        private initExpertModal;
        private closeNetworkErrModal;
        private resizeLayout;
        private initData;
        isEmptyData(value: ISwapConfigUI): boolean;
        init(): Promise<void>;
        render(): any;
    }
}
