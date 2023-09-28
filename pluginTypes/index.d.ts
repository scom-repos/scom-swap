/// <reference path="@ijstech/eth-wallet/index.d.ts" />
/// <reference path="@scom/scom-commission-proxy-contract/@ijstech/eth-wallet/index.d.ts" />
/// <reference path="@scom/scom-token-input/@ijstech/eth-wallet/index.d.ts" />
/// <reference path="@scom/scom-token-input/@scom/scom-token-modal/@ijstech/eth-wallet/index.d.ts" />
/// <reference path="@scom/scom-dapp-container/@ijstech/eth-wallet/index.d.ts" />
/// <reference path="@scom/scom-dex-list/index.d.ts" />
/// <amd-module name="@scom/scom-swap/index.css.ts" />
declare module "@scom/scom-swap/index.css.ts" {
    export const swapStyle: string;
}
/// <amd-module name="@scom/scom-swap/global/utils/helper.ts" />
declare module "@scom/scom-swap/global/utils/helper.ts" {
    import { BigNumber } from "@ijstech/eth-wallet";
    export const formatNumber: (value: number | string | BigNumber, decimalFigures?: number) => string;
    export const isInvalidInput: (val: any) => boolean;
    export function getAPI(url: string, paramsObj?: any): Promise<any>;
}
/// <amd-module name="@scom/scom-swap/global/utils/swapInterface.ts" />
declare module "@scom/scom-swap/global/utils/swapInterface.ts" {
    import { IWalletPlugin } from "@scom/scom-wallet-modal";
    export type Category = 'fixed-pair' | 'fixed-protocal' | 'aggregator' | 'cross-chain-swap';
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
    export interface ITokenConfig {
        chainId: number;
        address?: string;
    }
    export interface ISwapWidgetData {
        campaignId?: number;
        category: Category;
        providers: IProviderUI[];
        commissions?: ICommissionInfo[];
        tokens?: ITokenConfig[];
        defaultChainId: number;
        wallets: IWalletPlugin[];
        networks: INetworkConfig[];
        showHeader?: boolean;
        logo?: string;
        title?: string;
        defaultInputValue?: string;
        defaultOutputValue?: string;
        apiEndpoints?: Record<string, string>;
    }
}
/// <amd-module name="@scom/scom-swap/global/utils/index.ts" />
declare module "@scom/scom-swap/global/utils/index.ts" {
    export { getAPI, formatNumber, isInvalidInput } from "@scom/scom-swap/global/utils/helper.ts";
    export { IContractInfo, IProvider, ISwapConfig, ISwapWidgetData, IProviderUI, Category, ICommissionInfo, INetworkConfig, ITokenConfig } from "@scom/scom-swap/global/utils/swapInterface.ts";
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
    import { ERC20ApprovalModel, IERC20ApprovalEventOptions } from '@ijstech/eth-wallet';
    import { ITokenObject } from '@scom/scom-token-list';
    import { IProvider, ITokenConfig } from "@scom/scom-swap/global/index.ts";
    import { IDexDetail, IDexInfo } from '@scom/scom-dex-list';
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
        swapTransactionDeadline: number;
        bridgeTransactionDeadline: number;
        infuraId: string;
        dexInfoList: IDexInfo[];
        providerList: IProvider[];
        proxyAddresses: ProxyAddresses;
        apiEndpoints: Record<string, string>;
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
        getDexDetail(key: string, chainId: number): IDexDetail;
        getProxyAddress(chainId?: number): string;
        getProviderByKey(providerKey: string): IProvider;
        getRpcWallet(): import("@ijstech/eth-wallet").IRpcWallet;
        isRpcWalletConnected(): boolean;
        getChainId(): number;
        toggleExpertMode(): void;
        private initData;
        setAPIEnpoints(apiEndpoints: Record<string, string>): void;
        getAPIEndpoint(key: string): string;
        setApprovalModelAction(options: IERC20ApprovalEventOptions): Promise<import("@ijstech/eth-wallet").IERC20ApprovalAction>;
    }
    export const getNetworkInfo: (chainId: number) => any;
    export const getTokenObjArr: (tokens: ITokenConfig[]) => ITokenObject[];
    export function isClientWalletConnected(): boolean;
    export const getChainNativeToken: (chainId: number) => ITokenObject;
    export function getClientWallet(): import("@ijstech/eth-wallet").IClientWallet;
}
/// <amd-module name="@scom/scom-swap/store/providers.ts" />
declare module "@scom/scom-swap/store/providers.ts" {
    interface ProviderConfig {
        key: string;
        dexId?: number;
        supportedChains?: number[];
    }
    const ProviderConfigMap: {
        [key: string]: ProviderConfig;
    };
    export { ProviderConfig, ProviderConfigMap };
}
/// <amd-module name="@scom/scom-swap/store/cross-chain.ts" />
declare module "@scom/scom-swap/store/cross-chain.ts" {
    enum VaultType {
        Project = "Project",
        Exchange = "Exchange"
    }
    interface BridgeVaultConstant {
        tokenAddress: string;
        vaultRegistryAddress: string;
        vaultAddress: string;
        vaultDecimals?: number;
        softCap?: number;
        fixedStakingApr?: string;
    }
    interface BridgeVaultGroup {
        name: string;
        vaultType: VaultType;
        vaults: {
            [key: string]: BridgeVaultConstant;
        };
        deprecated?: boolean;
    }
    const BridgeVaultGroupList: BridgeVaultGroup[];
    const CrossChainAddressMap: {
        [chainId: number]: {
            wrapperAddress: string;
        };
    };
    const MockOracleMap: {
        [chainId: number]: {
            [token: string]: string;
        };
    };
    const crossChainSupportedChainIds: ({
        chainId: number;
        isTestnet?: undefined;
    } | {
        chainId: number;
        isTestnet: boolean;
    })[];
    const getBridgeVaultVersion: (chainId: number) => string;
    const bridgeVaultConstantMap: {
        [assetSymbol: string]: {
            [chainId: string]: BridgeVaultConstant;
        };
    };
    export { BridgeVaultGroupList, CrossChainAddressMap, crossChainSupportedChainIds, MockOracleMap, getBridgeVaultVersion, bridgeVaultConstantMap };
}
/// <amd-module name="@scom/scom-swap/store/index.ts" />
declare module "@scom/scom-swap/store/index.ts" {
    import { ITokenObject } from '@scom/scom-token-list';
    export const getWETH: (chainId: number) => ITokenObject;
    export const getSupportedTokens: (tokens: ITokenObject[], chainId: number) => ITokenObject[];
    export * from "@scom/scom-swap/store/utils.ts";
    export * from "@scom/scom-swap/store/providers.ts";
    export * from "@scom/scom-swap/store/cross-chain.ts";
}
/// <amd-module name="@scom/scom-swap/crosschain-utils/crosschain-utils.types.ts" />
declare module "@scom/scom-swap/crosschain-utils/crosschain-utils.types.ts" {
    import { BigNumber } from "@ijstech/eth-wallet";
    import { ITokenObject } from "@scom/scom-token-list";
    export interface IBridgeVaultBond {
        vaultTrollRegistry: string;
        chainId: number;
        trollId: string;
        shareHolder: string;
        bond: string;
        shares: string;
        sharesPendingWithdrawal: string;
        sharesApprovedWithdrawal: string;
        version: string;
    }
    export interface IBridgeVault {
        chainId: number;
        address: string;
        asset: string;
        configStore: string;
        baseFee: string;
        protocolFee: string;
        transactionFee: string;
        imbalanceFee: string;
        lpAssetBalance: string;
        imbalance: string;
        vaultType: string;
        vaultGroup: string;
        version: string;
    }
    export interface CreateBridgeVaultOrderParams {
        vaultAddress: string;
        targetChainId: number;
        tokenIn: ITokenObject;
        tokenOut: ITokenObject;
        amountIn: string;
        minAmountOut: string;
        sourceRouteInfo?: {
            amountOut: string;
            pairs: string[];
        };
    }
    export interface Order {
        peerChain: number | BigNumber;
        inAmount: number | BigNumber;
        outToken: string;
        minOutAmount: number | BigNumber;
        to: string;
        expire: number | BigNumber;
    }
    export interface SwapExactETHForTokensParams {
        pair: string[];
        vault: string;
        deadline: number | BigNumber;
        order: Order;
    }
    export interface SwapExactTokensForTokensParams {
        pair: string[];
        vault: string;
        amountIn: number | BigNumber;
        deadline: number | BigNumber;
        order: Order;
    }
    export interface GetAvailableRouteOptionsParams {
        fromChainId: number;
        toChainId: number;
        tokenIn: ITokenObject;
        tokenOut: ITokenObject;
        amountIn: number | BigNumber;
    }
    export interface IBridgeFees {
        baseFee: BigNumber;
        protocolFee: BigNumber;
        transactionFee: BigNumber;
        imbalanceFee: BigNumber;
        sourceRouteLiquidityFee?: BigNumber;
        targetRouteLiquidityFee?: BigNumber;
    }
    export interface ICrossChainRouteResult {
        contractAddress: string;
        vaultAddress: string;
        fromAmount: BigNumber;
        toAmount: BigNumber;
        fees: IBridgeFees;
        price: number;
        priceSwap: number;
        priceImpact: number;
        sourceRouteObj?: IRoutesResult | null;
        sourceVaultToken?: ITokenObject | null;
        targetRouteObj: IRoutesResult;
        targetVaultToken: ITokenObject;
        vaultTokenToTargetChain: string;
        vaultTokenFromSourceChain: BigNumber;
        isApproveButtonShown?: boolean;
        tardeFee: number;
    }
    export interface IRoutesResult {
        amountOut: BigNumber;
        bestRoutes: ITokenObject[];
        bestSmartRoute: IBestSmartRoute[];
        key: string;
        market: number[];
        pairs: string[];
        price: number;
        priceImpact: number;
        provider: string;
        queueType: number;
        tradeFee: string;
    }
    export interface IBestSmartRoute {
        caption: string;
        fromToken: ITokenObject;
        toToken: ITokenObject;
        pairAddress: string;
        provider: string;
    }
    export interface ICrossChainRouteFromAPI {
        vault: string;
        sourceRoute: IRoutesAPI;
        targetRoute: IRoutesAPI;
        fees: IBridgeFees;
    }
    export interface IRoutesAPI {
        amountOut: string;
        dexId: number;
        queueType?: number;
        isDirectRoute: boolean;
        route: IRouteAPI[];
        tokens: {
            address: string;
            decimals: number;
            name: string;
            symbol: string;
        }[];
        tradeFees: {
            fee: string;
            base: string;
        }[];
    }
    export interface IRouteAPI {
        address: string;
        dexId: number;
        reserves: {
            reserve0: string;
            reserve1: string;
        };
        boostReserves?: {
            boostReserveIn: string;
            boostReserveOut: string;
        };
        queueType?: number;
        orderIds?: string[];
    }
    export interface NewOrderParams {
        vaultAddress: string;
        targetChainId: number;
        tokenIn: ITokenObject;
        tokenOut: ITokenObject;
        amountIn: string;
        minAmountOut: string;
        sourceRouteInfo?: {
            amountOut: string;
            pairs: string[];
        };
    }
    export interface TradeFee {
        fee: string;
        base: string;
    }
    export interface TradeFeeMap {
        [market: number]: TradeFee;
    }
}
/// <amd-module name="@scom/scom-swap/crosschain-utils/API.ts" />
declare module "@scom/scom-swap/crosschain-utils/API.ts" {
    import { State } from "@scom/scom-swap/store/index.ts";
    import { BigNumber, TransactionReceipt } from "@ijstech/eth-wallet";
    import { CreateBridgeVaultOrderParams, GetAvailableRouteOptionsParams, IBridgeVault, IBridgeVaultBond, ICrossChainRouteResult } from "@scom/scom-swap/crosschain-utils/crosschain-utils.types.ts";
    import { ITokenObject } from "@scom/scom-token-list";
    const getTokenByVaultAddress: (chainId: number, vaultAddress: string) => ITokenObject;
    const getTargetChainTokenMap: (chainId: number) => {
        [key: string]: ITokenObject;
    };
    const getTargetChainTokenInfoObj: (chainId: number) => Promise<{
        tokenMap: {
            [key: string]: ITokenObject;
        };
        balances: {};
    }>;
    const getBridgeVault: (state: State, chainId: number, vaultAddress: string) => Promise<IBridgeVault>;
    const getBondsInBridgeVault: (state: State, chainId: number, vaultTrollRegistry: string, version?: string) => Promise<IBridgeVaultBond[]>;
    const createBridgeVaultOrder: (state: State, params: CreateBridgeVaultOrderParams) => Promise<{
        receipt: TransactionReceipt | null;
        error: Record<string, string> | null;
    }>;
    const getAvailableRouteOptions: (state: State, params: GetAvailableRouteOptionsParams, getTradeFeeMap: Function, getExtendedRouteObjData: Function) => Promise<ICrossChainRouteResult[]>;
    const getVaultAssetBalance: (chainId: number, vaultAddress: string) => Promise<BigNumber>;
    const getOraclePriceMap: (chainId: number) => Promise<{
        [key: string]: BigNumber;
    }>;
    export { getTokenByVaultAddress, getTargetChainTokenMap, getTargetChainTokenInfoObj, createBridgeVaultOrder, getAvailableRouteOptions, ICrossChainRouteResult, getBridgeVault, getBondsInBridgeVault, getVaultAssetBalance, getOraclePriceMap };
}
/// <amd-module name="@scom/scom-swap/crosschain-utils/index.ts" />
declare module "@scom/scom-swap/crosschain-utils/index.ts" {
    export { getTokenByVaultAddress, getTargetChainTokenMap, getTargetChainTokenInfoObj, getBridgeVault, getBondsInBridgeVault, createBridgeVaultOrder, getAvailableRouteOptions, ICrossChainRouteResult, getVaultAssetBalance, getOraclePriceMap } from "@scom/scom-swap/crosschain-utils/API.ts";
    export { GetAvailableRouteOptionsParams, NewOrderParams, TradeFee, TradeFeeMap } from "@scom/scom-swap/crosschain-utils/crosschain-utils.types.ts";
}
/// <amd-module name="@scom/scom-swap/swap-utils/index.ts" />
declare module "@scom/scom-swap/swap-utils/index.ts" {
    import { BigNumber, TransactionReceipt } from "@ijstech/eth-wallet";
    import { ITokenObject } from '@scom/scom-token-list';
    import { IProviderUI } from "@scom/scom-swap/global/index.ts";
    import { State } from "@scom/scom-swap/store/index.ts";
    import { GetAvailableRouteOptionsParams, NewOrderParams, TradeFeeMap } from "@scom/scom-swap/crosschain-utils/index.ts";
    const getChainNativeToken: (chainId: number) => ITokenObject;
    function getRouterAddress(state: State, key: string): string;
    function getTradeFeeMap(state: State): TradeFeeMap;
    const getProviderProxySelectors: (state: State, providers: IProviderUI[]) => Promise<string[]>;
    const getPair: (state: State, market: string, tokenA: ITokenObject, tokenB: ITokenObject) => Promise<string>;
    function getExtendedRouteObjData(bestRouteObj: any, tradeFeeMap: TradeFeeMap, swapPrice: BigNumber, isHybridOrQueue: boolean): Promise<any>;
    function getAllRoutesData(state: State, firstTokenObject: ITokenObject, secondTokenObject: ITokenObject, firstInput: BigNumber, secondInput: BigNumber, isFromEstimated: boolean, useAPI: boolean): Promise<any[]>;
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
    const getCrossChainRouteOptions: (state: State, params: GetAvailableRouteOptionsParams) => Promise<import("@scom/scom-swap/crosschain-utils/crosschain-utils.types.ts").ICrossChainRouteResult[]>;
    const createBridgeVaultOrder: (state: State, newOrderParams: NewOrderParams) => Promise<{
        receipt: TransactionReceipt | null;
        error: Record<string, string> | null;
    }>;
    export { getExtendedRouteObjData, getTradeFeeMap, getAllRoutesData, getPair, SwapData, executeSwap, getChainNativeToken, getRouterAddress, setApprovalModalSpenderAddress, getProviderProxySelectors, getCommissionRate, getCrossChainRouteOptions, createBridgeVaultOrder };
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
        private get Items();
        private set Items(value);
        setData(value: any[]): Promise<void>;
        getData(): any[];
        private renderItems;
        onRenderToggleBtn: (parent: Control) => Icon;
        renderIconTooltip: (parent: Control, item: any) => Promise<Icon>;
        updateItems: () => Promise<void>;
        init(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-swap/expert-mode-settings/index.css.ts" />
declare module "@scom/scom-swap/expert-mode-settings/index.css.ts" {
    const _default: string;
    export default _default;
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
    const _default_1: {
        infuraId: string;
        apiEndpoints: {
            tradingRouting: string;
            bridgeRouting: string;
            bridgeVault: string;
            bonds: string;
        };
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
                address: string;
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
    export default _default_1;
}
/// <amd-module name="@scom/scom-swap/formSchema.ts" />
declare module "@scom/scom-swap/formSchema.ts" {
    import ScomNetworkPicker from '@scom/scom-network-picker';
    import ScomTokenInput from '@scom/scom-token-input';
    export function getBuilderSchema(): {
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
                        maxButtonBackground: {
                            type: string;
                            format: string;
                        };
                        maxButtonHoverBackground: {
                            type: string;
                            format: string;
                        };
                        primaryButtonBackground: {
                            type: string;
                            format: string;
                        };
                        primaryButtonHoverBackground: {
                            type: string;
                            format: string;
                        };
                        primaryButtonDisabledBackground: {
                            type: string;
                            format: string;
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
                        maxButtonBackground: {
                            type: string;
                            format: string;
                        };
                        maxButtonHoverBackground: {
                            type: string;
                            format: string;
                        };
                        primaryButtonBackground: {
                            type: string;
                            format: string;
                        };
                        primaryButtonHoverBackground: {
                            type: string;
                            format: string;
                        };
                        primaryButtonDisabledBackground: {
                            type: string;
                            format: string;
                        };
                    };
                };
            };
        };
        uiSchema: {
            type: string;
            elements: ({
                type: string;
                label: string;
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
            } | {
                type: string;
                label: string;
                elements: {
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
                }[];
            })[];
        };
        customControls(rpcWalletId: string): {
            '#/properties/networks/properties/chainId': {
                render: () => ScomNetworkPicker;
                getData: (control: ScomNetworkPicker) => number;
                setData: (control: ScomNetworkPicker, value: number) => void;
            };
            '#/properties/tokens/properties/chainId': {
                render: () => ScomNetworkPicker;
                getData: (control: ScomNetworkPicker) => number;
                setData: (control: ScomNetworkPicker, value: number) => void;
            };
            '#/properties/tokens/properties/address': {
                render: () => ScomTokenInput;
                getData: (control: ScomTokenInput) => string;
                setData: (control: ScomTokenInput, value: string) => void;
            };
            '#/properties/providers/properties/chainId': {
                render: () => ScomNetworkPicker;
                getData: (control: ScomNetworkPicker) => number;
                setData: (control: ScomNetworkPicker, value: number) => void;
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
/// <amd-module name="@scom/scom-swap/assets.ts" />
declare module "@scom/scom-swap/assets.ts" {
    function fullPath(path: string): string;
    const _default_2: {
        logo: string;
        fullPath: typeof fullPath;
    };
    export default _default_2;
}
/// <amd-module name="@scom/scom-swap" />
declare module "@scom/scom-swap" {
    import { Module, Container, ControlElement } from '@ijstech/components';
    import { BigNumber } from '@ijstech/eth-wallet';
    import "@scom/scom-swap/index.css.ts";
    import { ITokenObject } from '@scom/scom-token-list';
    import { ISwapWidgetData, IProviderUI, Category, ICommissionInfo, INetworkConfig, ITokenConfig } from "@scom/scom-swap/global/index.ts";
    import { IWalletPlugin } from '@scom/scom-wallet-modal';
    import ScomCommissionFeeSetup from '@scom/scom-commission-fee-setup';
    export { ISwapWidgetData };
    interface ScomSwapElement extends ControlElement {
        campaignId?: number;
        lazyLoad?: boolean;
        category: Category;
        providers: IProviderUI[];
        tokens?: ITokenConfig[];
        defaultChainId: number;
        networks: INetworkConfig[];
        wallets: IWalletPlugin[];
        showHeader?: boolean;
        commissions?: ICommissionInfo[];
        logo?: string;
        title?: string;
        defaultInputValue?: string;
        defaultOutputValue?: string;
        apiEndpoints?: Record<string, string>;
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
        private _tokens;
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
        private clientEvents;
        private crossChainApprovalStatus;
        private oldSupportedChainList;
        private minSwapHintLabel;
        private srcChainBox;
        private desChainBox;
        private srcChainLabel;
        private srcChainList;
        private desChainLabel;
        private desChainList;
        private srcChain;
        private desChain;
        private targetChainId;
        private srcChainFirstPanel;
        private targetChainFirstPanel;
        private srcChainTokenImage;
        private srcChainTokenLabel;
        private targetChainTokenImage;
        private targetChainTokenLabel;
        private srcChainSecondPanel;
        private srcChainVaultImage;
        private srcChainVaultLabel;
        private srcVaultTokenImage;
        private srcVaultTokenLabel;
        private srcVaultTokenValue;
        private targetChainSecondPanel;
        private targetChainVaultImage;
        private targetChainVaultLabel;
        private targetVaultTokenImage;
        private targetVaultTokenLabel;
        private targetVaultTokenValue;
        private targetVaultAssetBalanceLabel1;
        private targetVaultBondBalanceLabel1;
        private crossChainSoftCapLabel1;
        private targetVaultAssetBalanceLabel2;
        private targetVaultBondBalanceLabel2;
        private crossChainSoftCapLabel2;
        private crossChainVaultInfoVstack;
        private lbReminderRejected;
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
        get title(): string;
        set title(value: string);
        get logo(): string;
        set logo(value: string);
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
                tokens?: ITokenConfig[];
                defaultChainId: number;
                wallets: IWalletPlugin[];
                networks: INetworkConfig[];
                showHeader?: boolean;
                logo?: string;
                title?: string;
                defaultInputValue?: string;
                defaultOutputValue?: string;
                apiEndpoints?: Record<string, string>;
            }>;
            setData: (properties: ISwapWidgetData, linkParams?: Record<string, any>) => Promise<void>;
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
        private setupCrossChainPopup;
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
        get chainId(): number;
        private get isCrossChainSwap();
        private get isCrossChainEnabled();
        get isCrossChain(): boolean;
        get fromTokenToVaultMap(): {
            [key: string]: any;
        };
        get isMetaMask(): boolean;
        getSupportedChainList: () => void;
        private disableSelectChain;
        private selectSourceChain;
        private selectDestinationChain;
        private setTargetTokenList;
        private onSelectSourceChain;
        private onSelectDestinationChain;
        private initChainIcon;
        private updateSrcChainIconList;
        private onRenderChainList;
        showModalFees: () => void;
        closeModalFees: () => void;
        private showResultMessage;
        private initExpertModal;
        private closeNetworkErrModal;
        private resizeLayout;
        private initData;
        isEmptyData(value: ISwapWidgetData): boolean;
        init(): Promise<void>;
        render(): any;
    }
}
