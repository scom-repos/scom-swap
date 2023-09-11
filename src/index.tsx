import { Module, Panel, Button, Label, VStack, Image, Container, IEventBus, application, customModule, Modal, Input, Control, customElements, ControlElement, Styles, HStack, Icon } from '@ijstech/components';
import { BigNumber, Constants, INetwork, Wallet, IERC20ApprovalAction } from '@ijstech/eth-wallet';
import './index.css';
import {
  isClientWalletConnected,
  getSupportedTokens,
  State,
  crossChainSupportedChainIds,
  BridgeVaultGroupList,
  WalletPlugin,
  getNetworkInfo,
  bridgeVaultConstantMap,
} from "./store/index";
import { tokenStore, DefaultERC20Tokens, ChainNativeTokenByChainId, assets as tokenAssets } from '@scom/scom-token-list';

import {
  getAllRoutesData,
  executeSwap,
  setApprovalModalSpenderAddress,
  getProviderProxySelectors,
  getPair,
  getCommissionRate,
  getCrossChainRouteOptions,
  createBridgeVaultOrder
} from './swap-utils/index'
import {
  getTargetChainTokenInfoObj,
  ICrossChainRouteResult,
  getBridgeVault,
  getBondsInBridgeVault,
  getVaultAssetBalance,
  getOraclePriceMap,
} from './crosschain-utils/index';
import { ITokenObject } from '@scom/scom-token-list';
import {
  formatNumber,
  ApprovalStatus,
  EventId,
  limitDecimals,
  isInvalidInput,
  IProvider,
  ISwapWidgetData,
  IProviderUI,
  Category,
  ICommissionInfo,
  INetworkConfig
} from './global/index';

import { PriceInfo } from './price-info/index';
import { ExpertModeSettings } from './expert-mode-settings/index'
import configData from './data.json';
import { getBuilderSchema, getProjectOwnerSchema } from './formSchema';
import ScomWalletModal, { IWalletPlugin } from '@scom/scom-wallet-modal';
import ScomDappContainer from '@scom/scom-dapp-container'
import getDexList from '@scom/scom-dex-list';
import ScomCommissionFeeSetup from '@scom/scom-commission-fee-setup';
import ScomTokenInput from '@scom/scom-token-input';
import ScomTxStatusModal from '@scom/scom-tx-status-modal';
import { swapStyle } from './index.css';
import assets from './assets';

export { ISwapWidgetData };

const Theme = Styles.Theme.ThemeVars;
const priceImpactTooHighMsg = 'Price Impact Too High. If you want to bypass this check, please turn on Expert Mode';
const defaultInput = '1';
type StatusMapType = 'approve' | 'swap';

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
  commissions?: ICommissionInfo[];
  logo?: string;
  title?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["i-scom-swap"]: ScomSwapElement;
    }
  }
}
declare const window: any;

@customModule
@customElements('i-scom-swap')
export default class ScomSwap extends Module {
  private state: State;
  private _data: ISwapWidgetData = {
    category: 'fixed-pair',
    providers: [],
    tokens: [],
    defaultChainId: 0,
    wallets: [],
    networks: []
  };
  tag: any = {};
  defaultEdit: boolean = true

  private pnlBranding: VStack;
  private imgLogo: Image;
  private lbTitle: Label;
  private swapComponent: Panel;
  private swapContainer: Container;
  private pnlPriceInfo: Panel;
  private wrapperSwap: HStack;
  private isInited: boolean = false;

  private payBalance: Label;
  private receiveBalance: Label;
  private firstTokenInput: ScomTokenInput;
  private secondTokenInput: ScomTokenInput;
  private payCol: Panel;
  private receiveCol: Panel;
  private swapModal: Modal;
  private lbRouting: Label;
  private priceInfo: PriceInfo;
  private priceInfo2: PriceInfo;
  private priceInfoContainer: Panel;
  private fromTokenImage: Image;
  private fromTokenLabel: Label;
  private fromTokenValue: Label;
  private toTokenImage: Image;
  private toTokenLabel: Label;
  private toTokenValue: Label;
  private payOrReceiveValue: Label;
  private payOrReceiveToken: Label;
  private txStatusModal: ScomTxStatusModal;
  private maxButton: Button;
  private swapBtn: Button;
  private lbYouPayTitle: Label;
  private lbYouPayValue: Label;
  private mdWallet: ScomWalletModal;
  private dappContainer: ScomDappContainer;

  private isFrom: boolean;
  private fromToken?: ITokenObject;
  private toToken?: ITokenObject;
  private fromTokenSymbol: string;
  private toTokenSymbol: string;
  private fromInputValue: BigNumber;
  private toInputValue: BigNumber;
  private timeout: any; // NodeJS.Timeout;
  private isPriceToggled: boolean;
  private record: any;
  private allTokenBalancesMap: any;
  // private availableMarkets: any;
  private supportedChainIds: number[];
  private swapButtonStatusMap: any;
  private approveButtonStatusMap: any;
  private $eventBus: IEventBus;
  private lbEstimate: Label;
  private lbPayOrReceive: Label;
  private approvalModelAction: IERC20ApprovalAction;

  private toggleReverseImage: Icon;
  private supportedChainList: INetworkConfig[] = [];
  private swapModalConfirmBtn: Button;
  private modalFees: Modal;
  private feesInfo: VStack;

  private expertModal: ExpertModeSettings;
  private networkErrModal: Modal;
  private supportedNetworksElm: VStack;
  private contractAddress: string;
  private clientEvents: any[] = [];

  // Cross Chain
  private crossChainApprovalStatus: ApprovalStatus = ApprovalStatus.NONE;
  private oldSupportedChainList: INetwork[] = [];
  private targetChainTokenBalances: Record<string, string>;
  private minSwapHintLabel: Label;
  private srcChainBox: Panel;
  private desChainBox: Panel;
  private srcChainLabel: Label;
  private srcChainList: HStack;
  private desChainLabel: Label;
  private desChainList: HStack;
  private srcChain: INetwork | undefined;
  private desChain: INetwork | undefined;
  private targetChainId: number | undefined;
  private srcChainFirstPanel: Panel;
  private targetChainFirstPanel: Panel;
  private srcChainTokenImage: Image;
  private srcChainTokenLabel: Label;
  private targetChainTokenImage: Image;
  private targetChainTokenLabel: Label;
  private srcChainSecondPanel: Panel;
  private srcChainVaultImage: Image;
  private srcChainVaultLabel: Label;
  private srcVaultTokenImage: Image;
  private srcVaultTokenLabel: Label;
  private srcVaultTokenValue: Label;
  private targetChainSecondPanel: Panel;
  private targetChainVaultImage: Image;
  private targetChainVaultLabel: Label;
  private targetVaultTokenImage: Image;
  private targetVaultTokenLabel: Label;
  private targetVaultTokenValue: Label;
  private targetVaultAssetBalanceLabel1: Label;
  private targetVaultBondBalanceLabel1: Label;
  private crossChainSoftCapLabel1: Label;
  private targetVaultAssetBalanceLabel2: Label;
  private targetVaultBondBalanceLabel2: Label;
  private crossChainSoftCapLabel2: Label;
  private crossChainVaultInfoVstack: VStack;
  private modalViewOrder: Modal;
  private lbReminderRejected: Label;

  static async create(options?: ScomSwapElement, parent?: Container) {
    let self = new this(parent, options);
    await self.ready();
    return self;
  }

  removeRpcWalletEvents() {
    const rpcWallet = this.state.getRpcWallet();
    if (rpcWallet) rpcWallet.unregisterAllWalletEvents();
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
  set category(value: Category) {
    this._data.category = value;
  }

  get providers() {
    return this._data.providers;
  }
  set providers(value: IProviderUI[]) {
    this._data.providers = value;
  }

  get commissions() {
    return this._data.commissions ?? [];
  }
  set commissions(value: ICommissionInfo[]) {
    this._data.commissions = value;
  }

  get defaultChainId() {
    return this._data.defaultChainId;
  }

  set defaultChainId(value: number) {
    this._data.defaultChainId = value;
  }

  get wallets() {
    return this._data.wallets ?? [];
  }
  set wallets(value: IWalletPlugin[]) {
    this._data.wallets = value;
  }

  get networks() {
    return this._data.networks ?? [];
  }
  set networks(value: INetworkConfig[]) {
    this._data.networks = value;
  }

  get showHeader() {
    return this._data.showHeader ?? true;
  }
  set showHeader(value: boolean) {
    this._data.showHeader = value;
  }

  get title() {
    return this._data.title ?? '';
  }
  set title(value: string) {
    this._data.title = value ?? '';
  }

  get logo() {
    return this._data.logo ?? '';
  }
  set logo(value: string) {
    this._data.logo = value ?? '';
  }

  set width(value: string | number) {
    this.resizeLayout();
  }

  private get hasData() {
    const { providers, defaultChainId, networks, wallets } = this._data;
    return !!(providers?.length || networks?.length || wallets?.length || !isNaN(Number(defaultChainId)));
  }

  private determineActionsByTarget(target: 'builder' | 'projectOwner', category?: string) {
    if (target === 'builder') {
      return this.getBuilderActions(category);
    }
    else {
      return this.getProjectOwnerActions();
    }
  }

  private async loadCommissionFee() {
    if (this._data.campaignId && this.state.embedderCommissionFee === undefined) {
      const commissionRate = await getCommissionRate(this.state, this._data.campaignId);
      this.state.embedderCommissionFee = commissionRate;
    }
  }

  private getBuilderActions(category?: string) {
    const formSchema: any = getBuilderSchema();
    const dataSchema = formSchema.dataSchema;
    const uiSchema = formSchema.uiSchema;
    const customControls = formSchema.customControls(this.state.getRpcWallet()?.instanceId);
    let self = this;
    const actions: any[] = [
      {
        name: 'Commissions',
        icon: 'dollar-sign',
        command: (builder: any, userInputData: any) => {
          let _oldData: ISwapWidgetData = {
            category: 'fixed-pair',
            providers: [],
            defaultChainId: 0,
            wallets: [],
            networks: []
          }
          return {
            execute: async () => {
              _oldData = { ...this._data };
              if (userInputData.commissions) this._data.commissions = userInputData.commissions;
              this.refreshUI();
              if (builder?.setData) builder.setData(this._data);
            },
            undo: () => {
              this._data = { ..._oldData };
              this.refreshUI();
              if (builder?.setData) builder.setData(this._data);
            },
            redo: () => { }
          }
        },
        customUI: {
          render: async (data?: any, onConfirm?: (result: boolean, data: any) => void) => {
            const vstack = new VStack();
            await self.loadCommissionFee();
            const config = new ScomCommissionFeeSetup(null, {
              commissions: self._data.commissions || [],
              fee: self.state.embedderCommissionFee,
              networks: self._data.networks
            });
            const hstack = new HStack(null, {
              verticalAlignment: 'center',
            });
            const button = new Button(hstack, {
              caption: 'Confirm',
              width: '100%',
              height: 40,
              font: { color: Theme.colors.primary.contrastText }
            });
            vstack.append(config);
            vstack.append(hstack);
            button.onClick = async () => {
              const commissions = config.commissions;
              if (onConfirm) onConfirm(true, { commissions });
            }
            return vstack;
          }
        }
      }
    ]
    if (category && category !== 'offers') {
      actions.push({
        name: 'Edit',
        icon: 'edit',
        command: (builder: any, userInputData: any) => {
          let oldData: ISwapWidgetData = {
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
              const {
                logo,
                title,
                networks,
                category,
                providers,
                tokens,
                ...themeSettings
              } = userInputData;

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
                    const nativeToken = ChainNativeTokenByChainId[inputToken.chainId];
                    if (nativeToken) this._data.tokens.push({ ...nativeToken, chainId: inputToken.chainId });
                  }
                  else {
                    const tokens = DefaultERC20Tokens[inputToken.chainId]
                    const token = tokens.find(v => v.address === inputToken.address);
                    if (token) this._data.tokens.push({ ...token, chainId: inputToken.chainId });
                  }
                }
              }
              await this.resetRpcWallet();
              this.updateContractAddress();
              this.refreshUI();
              if (builder?.setData) builder.setData(this._data);

              oldTag = JSON.parse(JSON.stringify(this.tag));
              if (builder?.setTag) builder.setTag(themeSettings);
              else this.setTag(themeSettings);
              if (this.dappContainer) this.dappContainer.setTag(themeSettings);
            },
            undo: () => {
              this._data = JSON.parse(JSON.stringify(oldData));
              this.refreshUI();
              if (builder?.setData) builder.setData(this._data);

              this.tag = JSON.parse(JSON.stringify(oldTag));
              if (builder?.setTag) builder.setTag(this.tag);
              else this.setTag(this.tag);
              if (this.dappContainer) this.dappContainer.setTag(this.tag);
            },
            redo: () => { }
          }
        },
        userInputDataSchema: dataSchema,
        userInputUISchema: uiSchema,
        customControls: customControls
      });
    }
    return actions
  }

  private getProjectOwnerActions() {
    const formSchema: any = getProjectOwnerSchema();
    const propertiesDataSchema = formSchema.general.dataSchema;
    const propertiesUISchema = formSchema.general.uiSchema;
    const actions: any[] = [
      {
        name: 'Settings',
        userInputDataSchema: propertiesDataSchema,
        userInputUISchema: propertiesUISchema
      }
    ];
    return actions
  }

  getConfigurators() {
    let self = this;
    return [
      {
        name: 'Project Owner Configurator',
        target: 'Project Owners',
        getProxySelectors: async () => {
          const selectors = await getProviderProxySelectors(this.state, this._data.providers);
          return selectors;
        },
        getDexProviderOptions: (chainId: number) => {
          const providers = this.state.getDexInfoList({ chainId });
          return providers;
        },
        getPair: async (market: string, tokenA: ITokenObject, tokenB: ITokenObject) => {
          const pair = await getPair(this.state, market, tokenA, tokenB);
          return pair;
        },
        getActions: (category?: string) => {
          return this.determineActionsByTarget('projectOwner', category);
        },
        getData: this.getData.bind(this),
        setData: async (value: any) => {
          this.setData(value);
        },
        getTag: this.getTag.bind(this),
        setTag: this.setTag.bind(this)
      },
      {
        name: 'Builder Configurator',
        target: 'Builders',
        getActions: (category?: string) => {
          return this.determineActionsByTarget('builder', category);
        },
        getData: this.getData.bind(this),
        setData: async (value: any) => {
          const defaultData = configData.defaultBuilderData;
          this.setData({ ...defaultData, ...value });
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
          }
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
        bindOnChanged: (element: ScomCommissionFeeSetup, callback: (data: any) => Promise<void>) => {
          element.onChanged = async (data: any) => {
            const commissions: ICommissionInfo[] = data.commissions;
            if (commissions) {
              this.supportedChainIds = commissions.map(v => v.chainId).filter((v, i, a) => a.indexOf(v) === i);
            }
            let resultingData = {
              ...self._data,
              ...data
            };

            await this.setData(resultingData);
            await callback(data);
          }
        },
        getData: async () => {
          await self.loadCommissionFee();
          const fee = this.state.embedderCommissionFee;
          return { ...this._data, fee }
        },
        setData: async (properties: ISwapWidgetData, linkParams?: Record<string, any>) => {
          let resultingData = {
            ...properties
          }
          if (linkParams?.data) {
            const decodedString = window.atob(linkParams.data);
            const commissions = JSON.parse(decodedString);
            resultingData.commissions = commissions;

          }
          await this.setData(resultingData);
        },
        getTag: this.getTag.bind(this),
        setTag: this.setTag.bind(this)
      }
    ]
  }

  private getData() {
    return this._data;
  }

  private async resetRpcWallet() {
    this.removeRpcWalletEvents();
    const rpcWalletId = await this.state.initRpcWallet(this.defaultChainId);
    const rpcWallet = this.state.getRpcWallet();
    const chainChangedEvent = rpcWallet.registerWalletEvent(this, Constants.RpcWalletEvent.ChainChanged, async (chainId: number) => {
      this.onChainChange();
    });
    const connectedEvent = rpcWallet.registerWalletEvent(this, Constants.RpcWalletEvent.Connected, async (connected: boolean) => {
      if (this.swapBtn) this.swapBtn.visible = true;
      this.updateContractAddress();
      if (this.originalData?.providers?.length) await this.initializeWidgetConfig();
    });
    if (rpcWallet.instanceId) {
      if (this.firstTokenInput) this.firstTokenInput.rpcWalletId = rpcWallet.instanceId;
      if (this.secondTokenInput) this.secondTokenInput.rpcWalletId = rpcWallet.instanceId;
    }
    const data: any = {
      defaultChainId: this.defaultChainId,
      wallets: this.wallets,
      networks: this.networks,
      showHeader: this.showHeader,
      rpcWalletId: rpcWallet.instanceId
    }
    if (this.dappContainer?.setData) this.dappContainer.setData(data);
  }

  private async setData(value: ISwapWidgetData) {
    this._data = value;
    await this.resetRpcWallet();
    this.updateContractAddress();
    await this.refreshUI();
  }

  private async getTag() {
    return this.tag;
  }

  private updateTag(type: 'light' | 'dark', value: any) {
    this.tag[type] = this.tag[type] ?? {};
    for (let prop in value) {
      if (value.hasOwnProperty(prop))
        this.tag[type][prop] = value[prop];
    }
  }

  private async setTag(value: any) {
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

  private updateStyle(name: string, value: any) {
    value ?
      this.style.setProperty(name, value) :
      this.style.removeProperty(name);
  }

  private updateTheme() {
    const themeVar = this.dappContainer?.theme || 'light';
    this.updateStyle('--text-primary', this.tag[themeVar]?.fontColor);
    this.updateStyle('--background-main', this.tag[themeVar]?.backgroundColor);
    this.updateStyle('--input-font_color', this.tag[themeVar]?.inputFontColor);
    this.updateStyle('--input-background', this.tag[themeVar]?.inputBackgroundColor);
    //FIXME: temporary solution
    this.updateStyle('--primary-button-background', this.tag[themeVar]?.primaryButtonBackground || 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box');
    this.updateStyle('--primary-button-hover-background', this.tag[themeVar]?.primaryButtonHoverBackground || 'linear-gradient(255deg,#f15e61,#b52082)');
    this.updateStyle('--primary-button-disabled-background', this.tag[themeVar]?.primaryButtonDisabledBackground || 'transparent linear-gradient(270deg,#351f52,#552a42) 0% 0% no-repeat padding-box');
    this.updateStyle('--max-button-background', this.tag[themeVar]?.maxButtonBackground || 'transparent linear-gradient(255deg,#e75b66,#b52082) 0% 0% no-repeat padding-box');
    this.updateStyle('--max-button-hover-background', this.tag[themeVar]?.maxButtonHoverBackground || 'linear-gradient(255deg,#f15e61,#b52082)');
  }

  private setProviders() {
    const providers = this.originalData?.providers || [];
    if (this.isFixedPair) {
      this.state.setProviderList([providers[0]]);
    } else {
      this.state.setProviderList(providers);
    }
  }

  private updateContractAddress() {
    if (this.approvalModelAction) {
      if (this._data.campaignId !== undefined) {
        this.contractAddress = this.state.getProxyAddress();
      } else {
        this.contractAddress = '';
      }
      this.setApprovalSpenderAddress();
    }
  }

  private get isFixedPair() {
    return this._data?.category === 'fixed-pair';
  }

  private get originalData() {
    if (!this._data) return undefined;
    const { category, providers } = this._data;
    if (!providers.length) return undefined;
    let _providers: IProvider[] = [];
    if (this.isFixedPair) {
      const { key } = providers[0];
      let defaultProvider: IProvider = {
        key
      };
      _providers.push(defaultProvider);
    } else {
      let providersByKeys: { [key: string]: IProviderUI[] } = {};
      providers.forEach(v => {
        if (!providersByKeys[v.key]) {
          providersByKeys[v.key] = [];
        }
        providersByKeys[v.key].push(v);
      });
      Object.keys(providersByKeys).forEach(k => {
        const arr = providersByKeys[k];
        const { key } = arr[0];
        let defaultProvider: IProvider = {
          key
        }
        _providers.push(defaultProvider);
      })
    }
    return { category, providers: _providers };
  }

  private async refreshUI() {
    this.setProviders();
    await this.initData();
    await this.initializeWidgetConfig();
  }

  constructor(parent?: Container, options?: any) {
    super(parent, options);
  }

  private registerEvent() {
    this.clientEvents.push(this.$eventBus.register(this, EventId.SlippageToleranceChanged, () => { this.priceInfo.setData(this.getPriceInfo()) }));
    this.clientEvents.push(this.$eventBus.register(this, EventId.ExpertModeChanged, () => {
      this.updateSwapButtonCaption();
    }));
  }

  private onChainChange = async () => {
    const currentChainId = this.state.getChainId();
    if (currentChainId != null && currentChainId != undefined)
      this.swapBtn.visible = true;
    this.updateContractAddress();
    if (this.originalData?.providers?.length) await this.initializeWidgetConfig();
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

  get isApproveButtonShown(): boolean {
    const warningMessageText = this.getWarningMessageText();
    return warningMessageText === '' && this.approveButtonStatus !== undefined && this.approveButtonStatus !== ApprovalStatus.NONE
  }
  get isPriceImpactTooHigh(): boolean {
    if (this.isCrossChain) return false;
    const warningMessageText = this.getWarningMessageText();
    return this.record?.priceImpact > 15 && !this.state.isExpertMode && warningMessageText === priceImpactTooHighMsg
  }
  get isInsufficientBalance(): boolean {
    if (!this.fromToken || !this.record) return false;
    const balance = this.getBalance(this.fromToken);
    return this.maxSold.gt(balance);
  }
  get maxSold() {
    if (!this.fromToken || !this.record) return new BigNumber(0)
    if (!this.isFrom) return new BigNumber(this.record.fromAmount);
    return new BigNumber(this.getMinReceivedMaxSold() || this.record.fromAmount);
  }
  get isSwapping(): boolean {
    const key = this.record?.key;
    return key && this.swapButtonStatusMap[key] === ApprovalStatus.APPROVING;
  }
  get approveButtonStatus(): any {
    const key = this.record?.key;
    return this.approveButtonStatusMap[key];
  }
  get isApprovingRouter(): boolean {
    return this.approveButtonStatus === ApprovalStatus.APPROVING;
  }
  get isValidToken(): boolean {
    if (this.fromToken?.symbol && this.toToken?.symbol) {
      return true;
    }
    return false;
  }

  private redirectToken = () => {
    const currentChainId = this.state.getChainId();
    let queryRouter: any = {
      chainId: currentChainId,
      fromToken: this.fromToken?.symbol || this.fromTokenSymbol,
      toToken: this.toToken?.symbol || this.toTokenSymbol,
    };
    if (this.isCrossChain) {
      this.isFrom = false;
    }
    if (this.isFrom) {
      queryRouter = {
        ...queryRouter,
        toAmount: this.toInputValue.toFixed(),
      };
    } else {
      queryRouter = {
        ...queryRouter,
        fromAmount: this.fromInputValue.toFixed(),
      };
    }
    this.fromTokenSymbol = queryRouter.fromToken;
    this.toTokenSymbol = queryRouter.toToken;
    this.targetChainId = queryRouter.toChainId;
    if (!this.isCrossChainEnabled) {
      delete queryRouter['toChainId'];
    }
  };

  private fixedNumber = (value: BigNumber | string | number) => {
    const val = typeof value === 'object' ? value : new BigNumber(value);
    if (val.isNaN() || val.isZero()) return '';
    let formatted = '';
    if (val.gte(1)) {
      formatted = val.toNumber().toLocaleString('en-US', { maximumFractionDigits: 4 });
    } else {
      formatted = val.toNumber().toLocaleString('en-US', { maximumSignificantDigits: 4 });
    }
    return formatted.replace(/,/g, '');
  }

  private getTokenKey(token: ITokenObject) {
    if (token.isNative) {
      return token.symbol;
    }
    return token.address.toLowerCase();
  }

  private initializeDefaultTokenPair() {
    const currentChainId = this.state.getChainId();
    let currentChainTokens = getSupportedTokens(this._data.tokens || [], currentChainId);
    if (this.isCrossChain) {
      let targetChainTokens = getSupportedTokens(this._data.tokens || [], this.desChain.chainId);
      if (this.fromTokenSymbol && this.toTokenSymbol) {
        const firstObj = currentChainTokens.find(item => this.fromTokenSymbol === item.symbol || this.fromTokenSymbol === item.address);
        if (firstObj) {
          this.fromToken = firstObj;
        } else {
          this.fromToken = currentChainTokens[0];
        }
        const secondObj = targetChainTokens.find(item => this.toTokenSymbol === item.symbol || this.toTokenSymbol === item.address);
        if (secondObj) {
          this.toToken = secondObj;
        } else {
          this.toToken = targetChainTokens[0];
        }
        this.onUpdateToken(this.fromToken as ITokenObject, true);
        this.onUpdateToken(this.toToken as ITokenObject, false);
        this.firstTokenInput.token = this.fromToken;
        this.secondTokenInput.token = this.toToken;
        this.fromInputValue = this.fromInputValue || new BigNumber(defaultInput);
      } else {
        let firstDefaultToken = currentChainTokens[0];
        let secondDefaultToken = targetChainTokens[0];
        const fromAmount = parseFloat(defaultInput);
        this.fromInputValue = new BigNumber(fromAmount);
        this.onUpdateToken(firstDefaultToken, true);
        this.onUpdateToken(secondDefaultToken, false);
        this.firstTokenInput.token = this.fromToken;
        this.secondTokenInput.token = this.toToken;
      }
      return;
    }

    if (currentChainTokens.length < 2) return;
    const providers = this.originalData?.providers;
    if (providers && providers.length) {
      let fromTokenKey = this.getTokenKey(currentChainTokens[0]);
      let toTokenKey = this.getTokenKey(currentChainTokens[1]);
      this.fromToken = tokenStore.tokenMap[fromTokenKey];
      this.toToken = tokenStore.tokenMap[toTokenKey];
      this.fromTokenSymbol = this.fromToken?.symbol;
      this.toTokenSymbol = this.toToken?.symbol;
      this.fromInputValue = new BigNumber(defaultInput);
      this.onUpdateToken(this.fromToken, true);
      this.onUpdateToken(this.toToken, false);
      this.firstTokenInput.token = this.fromToken;
      this.secondTokenInput.token = this.toToken;
      this.toggleReverseImage.classList.add('cursor-default');
    }
  }

  private initWallet = async () => {
    try {
      await Wallet.getClientInstance().init();
      const rpcWallet = this.state.getRpcWallet();
      await rpcWallet.init();
    } catch (err) {
      console.log(err);
    }
  }

  private initializeWidgetConfig = async (_chainId?: number) => {
    setTimeout(async () => {
      const currentChainId = this.state.getChainId();
      tokenStore.updateTokenMapData(currentChainId);
      this.closeNetworkErrModal();
      await this.initWallet();
      await this.updateBalance();
      await this.onRenderChainList();
      this.initializeDefaultTokenPair();
      this.toggleReverseImage.enabled = !this.isFixedPair && !this.isCrossChain;
      this.firstTokenInput.tokenReadOnly = this.isFixedPair;
      this.secondTokenInput.tokenReadOnly = this.isFixedPair;
      this.pnlBranding.visible = !!this._data.logo || !!this._data.title;
      if (this._data.logo?.startsWith('ipfs://')) {
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
        this.toInputValue = new BigNumber(0);
        if (this.secondTokenInput) {
          this.secondTokenInput.value = '-';
          this.secondTokenInput.inputReadOnly = true;
        }
        this.toggleReverseImage.classList.add('cursor-default');
        if (this.isEstimated('from')) {
          this.onUpdateEstimatedPosition(false, true);
        }
      } else {
        if (this.secondTokenInput) {
          this.secondTokenInput.inputReadOnly = false;
        }
        this.toggleReverseImage.classList.remove('cursor-default');
      }
      if (this.fromInputValue.isGreaterThanOrEqualTo(0)) {
        this.onUpdateEstimatedPosition(false, true);
        this.firstTokenInput.value = this.fixedNumber(this.fromInputValue);
      } else if (this.toInputValue.isGreaterThanOrEqualTo(0)) {
        this.onUpdateEstimatedPosition(true, true);
        this.secondTokenInput.value = this.fixedNumber(this.toInputValue);
      }
      const tokens = getSupportedTokens(this._data.tokens || [], currentChainId);
      this.firstTokenInput.tokenDataListProp = tokens;
      if (!this.isCrossChain) {
        this.secondTokenInput.tokenDataListProp = tokens;
      } else {
        this.setTargetTokenList();
      }

      if (!this.record)
        this.swapBtn.enabled = false;
      this.onRenderPriceInfo();
      this.redirectToken();
      await this.handleAddRoute();
    });
  }

  private async initApprovalModelAction() {
    this.approvalModelAction = await this.state.setApprovalModelAction({
      sender: this,
      payAction: this.onSubmit,
      onToBeApproved: async (token: ITokenObject, data?: any) => {
        if (this.isCrossChain) {
          this.crossChainApprovalStatus = ApprovalStatus.TO_BE_APPROVED;
        } else {
          this.setMapStatus('approve', data.key, ApprovalStatus.TO_BE_APPROVED);
          this.setMapStatus('swap', data.key, ApprovalStatus.TO_BE_APPROVED);
        }
        this.updateSwapButtonCaption();
        const enabled = !this.isSwapButtonDisabled();
        this.swapBtn.enabled = enabled;
      },
      onToBePaid: async (token: ITokenObject, data?: any) => {
        if (this.isCrossChain) {
          this.crossChainApprovalStatus = ApprovalStatus.NONE;
        } else {
          this.setMapStatus('approve', data.key, ApprovalStatus.NONE);
          this.setMapStatus('swap', data.key, ApprovalStatus.TO_BE_APPROVED);
        }
        this.updateSwapButtonCaption();
        const enabled = !this.isSwapButtonDisabled();
        this.swapBtn.enabled = enabled;
      },
      onApproving: async (token: ITokenObject, receipt?: string, data?: any) => {
        if (this.isCrossChain) {
          this.crossChainApprovalStatus = ApprovalStatus.APPROVING;
        } else {
          this.setMapStatus('approve', data.key, ApprovalStatus.APPROVING);
        }
        this.updateSwapButtonCaption();
        this.showResultMessage('success', receipt);
        if ((this.isApprovingRouter || this.isCrossChain) && !this.swapBtn.rightIcon.visible)
          this.swapBtn.rightIcon.visible = true;
      },
      onApproved: async (token: ITokenObject, data?: any) => {
        if (this.isCrossChain) {
          this.crossChainApprovalStatus = ApprovalStatus.NONE;
        } else {
          this.setMapStatus('approve', data.key, ApprovalStatus.NONE);
        }
        this.updateSwapButtonCaption();
        if (this.swapBtn.rightIcon.visible)
          this.swapBtn.rightIcon.visible = false;
        await this.handleAddRoute();
      },
      onApprovingError: async (token: ITokenObject, err: Error) => {
        this.showResultMessage('error', err);
        this.crossChainApprovalStatus = ApprovalStatus.TO_BE_APPROVED;
        if (this.swapBtn.rightIcon.visible)
          this.swapBtn.rightIcon.visible = false;
      },
      onPaying: async (receipt?: string, data?: any) => {
        this.showResultMessage('success', receipt);
        this.onSwapConfirming(data.key);
      },
      onPaid: async (data?: any) => {
        this.onSwapConfirmed({ key: data.key, isCrossChain: this.isCrossChain });
        await this.updateBalance();
        application.EventBus.dispatch(EventId.Paid, { data: data ?? null, id: this.id });
      },
      onPayingError: async (err: Error) => {
        this.showResultMessage('error', err);
      }
    })
  }

  private async onRevertSwap() {
    if (this.isCrossChain) return;
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

  private totalAmount = () => {
    return this.fromInputValue;
  }

  private setupCrossChainPopup() {
    const arrows = this.swapModal.querySelectorAll('i-icon.arrow-down');
    if (!this.isCrossChain) {
      arrows.forEach((arrow: Element) => {
        arrow.classList.remove('arrow-down--chain');
      });
    } else {
      arrows.forEach((arrow: Element) => {
        arrow.classList.add('arrow-down--chain');
      });
    }
    this.lbReminderRejected?.classList.add('hidden');
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
        this.srcVaultTokenImage.url = tokenAssets.getTokenIconPath(sourceVaultToken, this.srcChain.chainId);
        this.srcVaultTokenLabel.caption = sourceVaultToken.symbol;
        this.srcVaultTokenValue.caption = formatNumber(vaultTokenFromSourceChain);
        this.lbReminderRejected?.classList.remove('hidden');
        this.lbReminderRejected.caption = `If the order is not executed in the target chain, the estimated withdrawalble amount is <b class="text-pink">${formatNumber(vaultTokenFromSourceChain)} ${sourceVaultToken?.symbol}</b>`;
      } else {
        this.srcChainSecondPanel.classList.add('hidden');
      }
      if (targetVaultToken && targetVaultToken.symbol !== this.toToken?.symbol) {
        this.targetChainSecondPanel.classList.remove('hidden');
        this.targetChainVaultImage.url = this.desChain.image;
        this.targetChainVaultLabel.caption = this.desChain.chainName;
        this.targetVaultTokenImage.url = tokenAssets.getTokenIconPath(targetVaultToken, this.desChain.chainId);
        this.targetVaultTokenLabel.caption = targetVaultToken.symbol;
        this.targetVaultTokenValue.caption = formatNumber(vaultTokenToTargetChain);
        // Hide vault info at toToken
        this.crossChainVaultInfoVstack.classList.add('hidden');
      } else {
        this.targetChainSecondPanel.classList.add('hidden');
        // Show vault info at the end if vaultTokenSymbol same as toToken
        this.crossChainVaultInfoVstack.classList.remove('hidden');
      }
    } else {
      this.srcChainFirstPanel.classList.add('hidden');
      this.targetChainFirstPanel.classList.add('hidden');
      this.srcChainSecondPanel.classList.add('hidden');
      this.targetChainSecondPanel.classList.add('hidden');
      this.crossChainVaultInfoVstack.classList.add('hidden');
    }
  }

  private handleSwapPopup() {
    if (!this.record) return;
    this.setupCrossChainPopup();
    const currentChainId = this.state.getChainId();
    const slippageTolerance = this.state.slippageTolerance;
    this.fromTokenImage.url = tokenAssets.tokenPath(this.fromToken, currentChainId);
    this.fromTokenLabel.caption = this.fromToken?.symbol ?? '';
    this.fromTokenValue.caption = formatNumber(this.totalAmount(), 4);
    this.toTokenImage.url = tokenAssets.tokenPath(this.toToken, this.isCrossChain ? this.desChain?.chainId : currentChainId);
    this.toTokenLabel.caption = this.toToken?.symbol ?? '';
    this.toTokenValue.caption = formatNumber(this.toInputValue, 4);
    const minimumReceived = this.getMinReceivedMaxSold();
    if (minimumReceived || minimumReceived == 0) {
      this.payOrReceiveValue.caption = formatNumber(minimumReceived, 4);
    } else {
      this.payOrReceiveValue.caption = ' - ';
    }
    this.payOrReceiveToken.caption = this.isFrom ? this.fromTokenLabel.caption : this.toTokenLabel.caption;
    this.lbEstimate.caption = `${this.isFrom ? 'Input' : 'Output'} is estimated. If the price change by more than ${slippageTolerance}%, your transaction will revert`;
    this.lbPayOrReceive.caption = this.isFrom ? 'You will pay at most' : 'You will receive at least';
    this.priceInfo2.setData(this.getPriceInfo());

    this.swapModal.visible = true;
  }
  private doSwap() {
    this.approvalModelAction.doPayAction(this.record);
  }
  private getMinReceivedMaxSold = (): number | null => {
    const slippageTolerance = this.state.slippageTolerance;
    if (!slippageTolerance) return null;
    if (this.isFrom) {
      const poolAmount = new BigNumber(this.record?.amountIn);
      if (poolAmount.isZero()) return null;
      const minReceivedMaxSold = poolAmount.times(1 + slippageTolerance / 100).toNumber();
      return minReceivedMaxSold;
    } else {
      const poolAmount = new BigNumber(this.record?.amountOut);
      if (poolAmount.isZero()) return null;
      const minReceivedMaxSold = poolAmount.times(1 - slippageTolerance / 100).toNumber();
      return minReceivedMaxSold;
    }
  }

  private async onUpdateToken(token: ITokenObject, isFrom: boolean) {
    if (!token) return;
    const balance = this.getBalance(token, !isFrom && this.isCrossChain);
    if (isFrom) {
      this.fromToken = token;
      const enabled = !this.isMaxDisabled();
      this.maxButton.enabled = enabled;
      if (this.fromInputValue.gt(0)) {
        const limit = limitDecimals(this.fromInputValue.toFixed(), token.decimals || 18);
        if (!this.fromInputValue.eq(limit)) {
          if (this.firstTokenInput) {
            this.firstTokenInput.value = limit === '0' ? '' : limit;
          }
          this.fromInputValue = new BigNumber(limit);
        }
      } else if (this.fromInputValue.isZero()) {
        this.onUpdateEstimatedPosition(true);
      }
      this.payBalance.caption = `Balance: ${formatNumber(balance, 4)} ${token.symbol}`;
      this.updateTokenInput(true);
    } else {
      this.toToken = token;
      if (this.toInputValue.gt(0)) {
        const limit = limitDecimals(this.toInputValue.toFixed(), token.decimals || 18);
        if (!this.toInputValue.eq(limit)) {
          if (this.secondTokenInput) {
            this.secondTokenInput.value = limit === '0' ? '' : limit;;
          }
          this.toInputValue = new BigNumber(limit);
        }
      } else if (this.toInputValue.isZero()) {
        this.onUpdateEstimatedPosition(false);
      }
      this.receiveBalance.caption = `Balance: ${formatNumber(balance, 4)} ${token.symbol}`;
      await this.updateTokenInput(false);
    }
  }
  private async onSelectToken(token: ITokenObject, isFrom: boolean) {
    if (!token) return
    this.firstTokenInput.enabled = false;
    this.secondTokenInput.enabled = false;
    if (token.isNew && this.state.isRpcWalletConnected()) {
      const rpcWallet = this.state.getRpcWallet();
      await tokenStore.updateAllTokenBalances(rpcWallet);
      this.allTokenBalancesMap = tokenStore.tokenBalances;
    }
    await this.onUpdateToken(token, isFrom);
    this.redirectToken();
    await this.handleAddRoute();
    this.firstTokenInput.enabled = true;
    this.secondTokenInput.enabled = true;
  }

  private setApprovalSpenderAddress() {
    const item = this.record;
    if (!item) return;
    const market = this.state.getProviderByKey(item.provider)?.key || '';
    if (this.approvalModelAction) {
      if (this.isCrossChain && item.contractAddress) {
        setApprovalModalSpenderAddress(this.state, market, item.contractAddress);
      } else if (this._data.campaignId !== undefined) {
        this.contractAddress = this.state.getProxyAddress();
        setApprovalModalSpenderAddress(this.state, market, this.contractAddress);
      } else {
        setApprovalModalSpenderAddress(this.state, market);
      }
    }
  }

  private getInputValue(isFrom: boolean) {
    const token = isFrom ? this.fromToken : this.toToken;
    const value = isFrom ? this.fromInputValue : this.toInputValue;
    if (!value || value.isNaN()) return '';
    return limitDecimals(value.toFixed(), token?.decimals || 18);
  }

  private async updateTokenInput(isFrom: boolean, init?: boolean) {
    const inputEl = isFrom ? this.firstTokenInput : this.secondTokenInput;
    if (inputEl) inputEl.value = this.getInputValue(isFrom);
  }

  private async onSelectRouteItem(item: any) {
    if (this.isFrom) {
      if (this.payCol.children) {
        let balanceValue = item.amountIn;
        this.firstTokenInput.value = this.fixedNumber(balanceValue);
        this.fromInputValue = typeof balanceValue !== 'object' ? new BigNumber(balanceValue) : balanceValue;
      }
    } else {
      if (this.receiveCol.children) {
        let balanceValue = item.amountOut;
        this.secondTokenInput.value = this.fixedNumber(balanceValue);
        this.toInputValue = typeof balanceValue !== 'object' ? new BigNumber(balanceValue) : balanceValue;
      }
    }

    this.record = item;
    if (this.isCrossChain && this.fromToken && !this.fromToken.isNative && this.state.isRpcWalletConnected()) {
      try {
        this.setApprovalSpenderAddress();
        await this.approvalModelAction.checkAllowance(this.fromToken, this.fromInputValue.toFixed());
      } catch (e) {
        console.log('Cannot check the Approval status (Cross Chain)', e);
      }
    }
    const isButtonLoading = this.isButtonLoading();
    if (this.swapBtn.rightIcon.visible != isButtonLoading) {
      this.swapBtn.rightIcon.visible = isButtonLoading;
    }
    if (this.priceInfo)
      await this.priceInfo.setData(this.getPriceInfo());
  }

  private onTokenInputChange(source: Control) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(async () => {
      const fromInput = this.payCol.getElementsByTagName('I-INPUT')?.[0] as Input;
      const toInput = this.receiveCol.getElementsByTagName('I-INPUT')?.[0] as Input;
      const isFrom = source.isSameNode(fromInput);
      const amount = (source as Input).value;
      if (isInvalidInput(amount)) {
        this.resetValuesByInput();
        if (fromInput)
          fromInput.value = '0';
        if (toInput)
          toInput.value = '0';
        return;
      }
      const limit = isFrom ? this.fromToken?.decimals : this.toToken?.decimals;
      const value = new BigNumber(limitDecimals(amount, limit || 18));
      if (!value.gt(0)) {
        this.resetValuesByInput();
        if (isFrom && toInput) {
          toInput.value = '0';
        } else if (!isFrom && fromInput) {
          fromInput.value = '0';
        }
      } else {
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
        } else {
          if (!this.toInputValue.eq(value)) {
            this.toInputValue = value;
            this.onUpdateEstimatedPosition(true, true);
            valueChanged = true;
          }
          if (!isLastDot)
            toInput.value = value.toFixed();
        }
        this.redirectToken();
        if (valueChanged) await this.handleAddRoute();
      }

    }, 1000);
  }
  private resetValuesByInput() {
    this.initRoutes();
    if (this.priceInfo) this.priceInfo.setData(this.getPriceInfo());
    this.fromInputValue = new BigNumber(0);
    this.toInputValue = new BigNumber(0);
    this.redirectToken();
  }
  private initRoutes() {
    this.record = null;
    this.isPriceToggled = false;
    this.swapBtn.visible = false;
  }
  private async handleAddRoute() {
    if (!this.fromToken || !this.toToken || !(this.fromInputValue.gt(0) || this.toInputValue.gt(0))) return;
    this.initRoutes();
    let listRouting: any[] = [];
    const useAPI = this._data.category === 'aggregator';
    this.updateContractAddress();
    if (!this.isCrossChain) {
      listRouting = await getAllRoutesData(this.state, this.fromToken, this.toToken, this.fromInputValue, this.toInputValue, this.isFrom, useAPI);
      listRouting = listRouting.map((v: any) => {
        return {
          ...v,
          isHybrid: false // market == Market.HYBRID,
        }
      });
    } else if (this.srcChain && this.desChain) {
      const tokenIn = Object.assign({}, this.fromToken);
      const tokenOut = Object.assign({}, this.toToken);
      listRouting = await getCrossChainRouteOptions(this.state, {
        fromChainId: this.srcChain.chainId,
        toChainId: this.desChain.chainId,
        tokenIn: tokenIn,
        tokenOut: tokenOut,
        amountIn: this.fromInputValue
      })
      listRouting = listRouting.map((v: any) => {
        let route: any = {};
        if (v.sourceRouteObj) {
          const amountOut = v.targetRouteObj ? v.targetRouteObj.amountOut : v.sourceRouteObj.amountOut;
          route = {
            ...v,
            ...v.sourceRouteObj,
            tradeFee: v.tradeFee,
            price: v.price,
            amountOut: new BigNumber(amountOut),
          };
          if (v.targetRouteObj) {
            const market = this.state.getProviderByKey(v.targetRouteObj.provider)?.key || '';
            if (market) {
              route.targetRouteObj = {
                ...route.targetRouteObj,
                route: v.targetRouteObj.bestRoute,
                isHybrid: false //market == Market.HYBRID,
              }
            } else {
              route.targetRouteObj = undefined;
            }
          }
        } else {
          route = {
            ...v,
            ...v.targetRouteObj,
            tradeFee: v.tradeFee,
            price: v.price,
          };
        }
        return { ...route, fromAmount: new BigNumber(route.fromAmount) };
      });
      if (listRouting.length) {
        this.minSwapHintLabel?.classList.add('hidden');
      } else {
        this.minSwapHintLabel?.classList.remove('hidden');
      }
    }
    if (listRouting[0] && this.isCrossChain) {
      const assetSymbol = listRouting[0].targetVaultToken.symbol;
      const { vaultAddress, vaultRegistryAddress, tokenAddress: vaultTokenAddress, softCap } = bridgeVaultConstantMap[assetSymbol === 'USDT.e' ? 'USDT' : assetSymbol][this.desChain!.chainId];
      const [vault, vaultAssetBalance, bonds, oraclePriceMap] = await Promise.all([
        getBridgeVault(this.desChain!.chainId, vaultAddress),
        getVaultAssetBalance(this.desChain!.chainId, vaultAddress),
        getBondsInBridgeVault(this.state, this.desChain!.chainId, vaultRegistryAddress),
        getOraclePriceMap(this.desChain!.chainId)
      ]);
      const assetBalance = vaultAssetBalance ?? 0;
      const assetDecimal = listRouting[0].targetVaultToken.decimals;
      const targetVaultAssetBalance = (new BigNumber(assetBalance)).shiftedBy(-assetDecimal);
      const targetVaultBondBalance = bonds.reduce((acc, cur) => {
        if (cur.chainId !== this.desChain?.chainId) return acc;
        acc = acc.plus((new BigNumber(cur.bond)).shiftedBy(-18));
        return acc;
      }, new BigNumber(0));
      const vaultTokenToTargetChain: BigNumber = new BigNumber(listRouting[0].vaultTokenToTargetChain);
      const vaultToUsdPrice = oraclePriceMap[vaultTokenAddress.toLowerCase()]; // This will be the vaultToken -> USD Price
      const oswapToUsdPrice = oraclePriceMap[bridgeVaultConstantMap['OSWAP'][this.desChain!.chainId].tokenAddress.toLowerCase()];
      const vaultToOswapPrice = vaultToUsdPrice.div(oswapToUsdPrice); // This will vaultToken -> oswap price;
      this.targetVaultAssetBalanceLabel1.caption = `Vault Asset Balance: ${formatNumber(targetVaultAssetBalance.toNumber(), 4)} ${assetSymbol}`;
      this.targetVaultAssetBalanceLabel2.caption = `Vault Asset Balance: ${formatNumber(targetVaultAssetBalance.toNumber(), 4)} ${assetSymbol}`;
      if (!vault.vaultGroup) {
        this.targetVaultBondBalanceLabel1.caption = `Vault Bond Balance: ${formatNumber(targetVaultBondBalance.toNumber(), 4)} ${assetSymbol}`;
        this.targetVaultBondBalanceLabel2.caption = `Vault Bond Balance: ${formatNumber(targetVaultBondBalance.toNumber(), 4)} ${assetSymbol}`;
      } else if (vault.vaultGroup === 'OSWAP') {
        this.targetVaultBondBalanceLabel1.caption = `Vault Bond Balance: ${formatNumber(targetVaultBondBalance.toNumber(), 4)} OSWAP`;
        this.targetVaultBondBalanceLabel2.caption = `Vault Bond Balance: ${formatNumber(targetVaultBondBalance.toNumber(), 4)} OSWAP`;
      } else {
        this.targetVaultBondBalanceLabel1.caption = `Vault Bond Balance: ${formatNumber(targetVaultBondBalance.toNumber(), 4)} OSWAP &#8776; ${formatNumber(targetVaultBondBalance.div(vaultToOswapPrice).toNumber(), 4)} ${assetSymbol}`;
        this.targetVaultBondBalanceLabel2.caption = `Vault Bond Balance: ${formatNumber(targetVaultBondBalance.toNumber(), 4)} OSWAP &#8776; ${formatNumber(targetVaultBondBalance.div(vaultToOswapPrice).toNumber(), 4)} ${assetSymbol}`;
      }
      this.crossChainSoftCapLabel1.caption = softCap ? `Cap: ${formatNumber(softCap)} ${assetSymbol}` : "-";
      this.crossChainSoftCapLabel2.caption = softCap ? `Cap: ${formatNumber(softCap)} ${assetSymbol}` : "-";
      const minValue = BigNumber.min(targetVaultAssetBalance, targetVaultBondBalance, softCap);
      if (minValue.eq(targetVaultAssetBalance)) {
        this.targetVaultAssetBalanceLabel1.classList.add('text--limit');
        this.targetVaultAssetBalanceLabel2.classList.add('text--limit');
        this.targetVaultBondBalanceLabel1.classList.remove('text--limit');
        this.targetVaultBondBalanceLabel2.classList.remove('text--limit');
        this.crossChainSoftCapLabel1.classList.remove('text--limit');
        this.crossChainSoftCapLabel2.classList.remove('text--limit');
      } else if (minValue.eq(targetVaultBondBalance)) {
        this.targetVaultAssetBalanceLabel1.classList.remove('text--limit');
        this.targetVaultAssetBalanceLabel2.classList.remove('text--limit');
        this.targetVaultBondBalanceLabel1.classList.add('text--limit');
        this.targetVaultBondBalanceLabel2.classList.add('text--limit');
        this.crossChainSoftCapLabel1.classList.remove('text--limit');
        this.crossChainSoftCapLabel2.classList.remove('text--limit');
      } else {
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
      } else if (vaultTokenToTargetChain.gt(targetVaultAssetBalance) || vaultTokenToTargetChain.multipliedBy(vaultToOswapPrice).gt(targetVaultBondBalance)) {
        this.swapModalConfirmBtn.caption = 'Exceed Vault Asset Balance or Bond Balance';
        this.swapModalConfirmBtn.enabled = false;
      } else {
        this.swapModalConfirmBtn.enabled = true;
      }
      this.crossChainApprovalStatus = listRouting[0].isApproveButtonShown ? ApprovalStatus.TO_BE_APPROVED : ApprovalStatus.NONE;
    }
    this.disableSelectChain(false);
    this.disableSelectChain(false, true);

    this.swapModalConfirmBtn.caption = 'Confirm Swap';
    this.swapModalConfirmBtn.enabled = true;
    this.record = listRouting[0] || null;
    this.swapButtonStatusMap = {};
    this.approveButtonStatusMap = {};
    this.initRoutes();
    const pricePercent = this.getPricePercent(listRouting, false)
    if (listRouting.length) {
      // this.receiveCol.classList.add('bg-box--active');
      this.lbRouting.classList.add('visibility-hidden');
      const option = listRouting[0];
      await this.onSelectRouteItem(option);
    } else {
      // this.receiveCol.classList.remove('bg-box--active');
      this.lbRouting.classList.remove('visibility-hidden');
      if (this.priceInfo)
        this.priceInfo.setData(this.getPriceInfo());
      if (this.isEstimated('to')) {
        this.toInputValue = new BigNumber(0);
        this.secondTokenInput.value = '';
      } else {
        this.fromInputValue = new BigNumber(0);
        this.firstTokenInput.value = '';
      }
    }
    if (this.record) {
      this.setApprovalSpenderAddress();
      await this.approvalModelAction.checkAllowance(this.fromToken as ITokenObject, this.fromInputValue.toFixed(), this.record);
      this.swapBtn.visible = true;
      const total = this.record?.fromAmount ? new BigNumber(this.record.fromAmount) : new BigNumber(0);
      this.lbYouPayTitle.caption = `You Pay`;
      this.lbYouPayValue.caption = `${formatNumber(total)} ${this.fromToken?.symbol}`;
    }
    else {
      this.updateSwapButtonCaption();
      this.swapBtn.visible = true;
      this.swapBtn.enabled = !this.isSwapButtonDisabled();
    }
  }

  private getPricePercent(routes: any, isFrom: boolean) {
    if (routes && routes.length > 1) {
      const amountStr = isFrom ? 'amountIn' : 'amountOut'
      const firstAmount = new BigNumber(routes[0][amountStr] || 0);
      const secondAmount = new BigNumber(routes[1][amountStr] || 0);
      if (firstAmount.eq(0) || secondAmount.eq(0)) {
        return 0;
      }
      let percent = new BigNumber(0);
      if (isFrom) {
        percent = secondAmount.minus(firstAmount).dividedBy(firstAmount);
      } else {
        percent = firstAmount.minus(secondAmount).dividedBy(secondAmount);
      }
      percent = percent.multipliedBy(100);
      if (percent.gte(0.01)) {
        return `Save ${formatNumber(percent.toNumber(), 2)}%`;
      }
    }
    return 0
  }

  // Price Info
  private onTogglePrice(priceInfo: PriceInfo) {
    this.isPriceToggled = !this.isPriceToggled;
    priceInfo.setData(this.getPriceInfo());
  }
  private getRate() {
    const value = this.isPriceToggled ? this.record?.priceSwap : this.record?.price;
    let fromSymbol = this.fromToken?.symbol;
    let toSymbol = this.toToken?.symbol;
    if (this.isCrossChain) {
      const srcName = this.srcChain?.chainName;
      const desName = this.desChain?.chainName;
      if (srcName) {
        fromSymbol = `${fromSymbol} (${srcName})`;
      }
      if (desName) {
        toSymbol = `${toSymbol} (${desName})`;
      }
    }
    if (value || value == 0) {
      if (this.isPriceToggled) {
        return `1 ${fromSymbol} &#8776; ${formatNumber(value)} ${toSymbol}`;
      }
      return `1 ${toSymbol} &#8776; ${formatNumber(value)} ${fromSymbol}`;
    }
    return '-';
  }
  private getPriceImpact() {
    const value = this.record?.priceImpact;
    if (value || value == 0) {
      return `${formatNumber(value)}%`;
    }
    return '-';
  }
  private getMinimumReceived() {
    const value = this.getMinReceivedMaxSold();
    if (value || value == 0) {
      if (this.isFrom) {
        return `${formatNumber(value)} ${this.fromToken?.symbol}`;
      }
      return `${formatNumber(value)} ${this.toToken?.symbol}`;
    }
    return '-';
  }
  private getTradeFeeExactAmount() {
    const tradeFee = this.isCrossChain ? this.record?.tradeFee : this.record?.fromAmount.times(this.record?.tradeFee).toNumber();
    if (tradeFee || tradeFee == 0) {
      return `${formatNumber(tradeFee)} ${this.fromToken?.symbol}`;
    }
    return '-';
  }
  private getFeeDetails() {
    if (this.isCrossChain && this.record) {
      let record: ICrossChainRouteResult = this.record
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
      ]
      return detail.filter(v => !v.isHidden)
    }
    if (!this.isCrossChain && this.record) {
      return [{
        title: "Liquidity Provider Fee",
        description: "This fee is paid to the AMM Liquidity Provider.",
        value: this.record.tradeFee
      }]
    }
    return []
  }
  private getPriceInfo() {
    const rate = this.getRate();
    const priceImpact = this.getPriceImpact();
    const minimumReceived = this.getMinimumReceived();
    const tradeFeeExactAmount = this.getTradeFeeExactAmount();
    const fees = this.getFeeDetails();
    const countFees = fees.length;
    let feeTooltip: any;
    if (countFees === 1) {
      const fee = fees[0];
      feeTooltip = `${fee.description}`;
    } else if (countFees > 1) {
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
    return info.filter((f: any) => !f.isHidden);
  }
  private onUpdateEstimatedPosition = (isFrom: boolean, reverseRouting: boolean = false) => {
    if (this.isFrom != isFrom) {
      this.isFrom = isFrom;
    }
  }
  private isEstimated = (tokenPosition: string, strict = false) => {
    if (tokenPosition === 'from') {
      return strict ? this.isFrom && !this.fromInputValue.isZero() : this.isFrom;
    } else if (tokenPosition === 'to') {
      return strict ? !this.isFrom && !this.toInputValue.isZero() : !this.isFrom;
    } else {
      return false;
    }
  };
  private getBalance(token?: ITokenObject, isCrossChain?: boolean) {
    if (token && this.allTokenBalancesMap) {
      const address = token.address || '';
      let balance: number = 0;
      if (isCrossChain) {
        balance = Number(token.isNative ? this.targetChainTokenBalances[token.symbol] : this.targetChainTokenBalances[address.toLowerCase()]) || 0;
      } else {
        balance = address ? this.allTokenBalancesMap[address.toLowerCase()] ?? 0 : this.allTokenBalancesMap[token.symbol] || 0;
      }
      return balance
    }
    return 0;
  }
  private async updateBalance() {
    const rpcWallet = this.state.getRpcWallet();
    if (rpcWallet.address) {
      if (this.isCrossChain) await this.updateTargetChainBalances();
      if (this.hasData) await tokenStore.updateAllTokenBalances(rpcWallet);
      this.allTokenBalancesMap = tokenStore.tokenBalances;
    }
    else {
      this.allTokenBalancesMap = {};
    }
    if (this.fromToken) {
      const balance = this.getBalance(this.fromToken, this.isCrossChain);
      this.payBalance.caption = `Balance: ${formatNumber(balance, 4)} ${this.fromToken.symbol}`;
    }
    if (this.toToken) {
      const balance = this.getBalance(this.toToken, this.isCrossChain);
      this.receiveBalance.caption = `Balance: ${formatNumber(balance, 4)} ${this.toToken.symbol}`;
    }
    const enabled = !this.isMaxDisabled();
    this.maxButton.enabled = enabled;
  }

  async updateTargetChainBalances() {
    const targetChainId = this.desChain?.chainId || this.targetChainId;
    if (targetChainId) {
      const tokenBalanceObj = await getTargetChainTokenInfoObj(targetChainId);
      this.targetChainTokenBalances = isClientWalletConnected() ? tokenBalanceObj.balances : [];
    }
  }

  private updateSwapButtonCaption() {
    if (this.swapBtn && this.swapBtn.hasChildNodes()) {
      this.swapBtn.caption = this.determineSwapButtonCaption();
    }
  }

  private determineSwapButtonCaption() {
    const isApproveButtonShown = this.isCrossChain ? this.crossChainApprovalStatus !== ApprovalStatus.NONE : this.isApproveButtonShown;
    if (!isClientWalletConnected()) {
      return "Connect Wallet";
    }
    if (!this.state.isRpcWalletConnected()) {
      return "Switch Network";
    }
    if (isApproveButtonShown) {
      const status = this.isCrossChain ? this.crossChainApprovalStatus : this.approveButtonStatus;
      switch (status) {
        case ApprovalStatus.APPROVING:
          return "Approving";
        case ApprovalStatus.TO_BE_APPROVED:
          return "Approve";
      }
      return '';
    } else {
      if (this.isSwapping) {
        return this.isCrossChain ? "Creating Order" : "Swapping";
      }
      if (this.isInsufficientBalance) {
        return `Insufficient ${this.fromToken?.symbol} balance`;
      }
      if (this.isCrossChain) {
        return "Create Order";
      }
      if (this.isPriceImpactTooHigh) {
        return "Turn on Expert Mode"
      }
      return "Swap";
    }
  }
  private getWarningMessageText() {
    const tokens = [this.fromToken?.symbol, this.toToken?.symbol];
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
      return `Insufficient ${this.fromToken?.symbol} balance`;
    }
    if (this.record.priceImpact > 15 && !this.state.isExpertMode) {
      return priceImpactTooHighMsg;
    }
    return '';
  }
  private setMapStatus(type: StatusMapType, key: string, status: ApprovalStatus) {
    if (type === 'approve') {
      let mapStatus = this.approveButtonStatusMap;
      mapStatus[key] = status;
      this.approveButtonStatusMap = {
        ...mapStatus
      };
    }
    else {
      let mapStatus = this.swapButtonStatusMap;
      mapStatus[key] = status;
      this.swapButtonStatusMap = {
        ...mapStatus
      };
    }
  }
  private onSwapConfirming = (key: any) => {
    this.setMapStatus('swap', key, ApprovalStatus.APPROVING);
    this.updateSwapButtonCaption();
    if (!this.swapBtn.rightIcon.visible)
      this.swapBtn.rightIcon.visible = true;
  }
  private onSwapConfirmed = async (data: any) => {
    const { key, isCrossChain } = data;
    this.setMapStatus('swap', key, ApprovalStatus.TO_BE_APPROVED);
    this.updateSwapButtonCaption();
    if (this.swapBtn.rightIcon.visible)
      this.swapBtn.rightIcon.visible = false;
    await this.handleAddRoute();
    if (isCrossChain) {
      this.showViewOrderModal();
    }
  }
  private isButtonLoading() {
    if (this.isApproveButtonShown || (this.isCrossChain && this.crossChainApprovalStatus === ApprovalStatus.APPROVING)) {
      return this.isApprovingRouter;
    }
    return this.isSwapping;
  }
  private isSwapButtonDisabled() {
    if (isClientWalletConnected() && this.state.isRpcWalletConnected() && !this.record) {
      return true;
    }
    const warningMessageText = this.getWarningMessageText();
    return (this.state.isRpcWalletConnected() && (warningMessageText != '' && !this.isPriceImpactTooHigh));
  }

  private async onClickSwapButton() {
    if (!isClientWalletConnected()) {
      if (this.mdWallet) {
        await application.loadPackage('@scom/scom-wallet-modal', '*');
        this.mdWallet.networks = this.networks;
        this.mdWallet.wallets = this.wallets;
        this.mdWallet.showModal();
      }
      return;
    }
    else if (!this.state.isRpcWalletConnected()) {
      const chainId = this.state.getChainId();
      const clientWallet = Wallet.getClientInstance();
      await clientWallet.switchNetwork(chainId);
      return;
    }
    if (!this.record || this.isSwapButtonDisabled()) return;

    const isApproveButtonShown = this.isCrossChain ? this.crossChainApprovalStatus !== ApprovalStatus.NONE : this.isApproveButtonShown;
    if (isApproveButtonShown) {
      this.onApproveRouterMax();
      return;
    }
    if (this.isPriceImpactTooHigh) {
      this.$eventBus.dispatch(EventId.ShowExpertModal);
      return;
    }
    this.handleSwapPopup();
  }
  private onSubmit = async () => {
    try {
      this.swapModal.visible = false;
      this.showResultMessage('warning', `Swapping ${formatNumber(this.totalAmount(), 4)} ${this.fromToken?.symbol} to ${formatNumber(this.toInputValue, 4)} ${this.toToken?.symbol}`);
      if (this.isCrossChain) {
        if (this.toToken && this.fromToken && this.desChain) {
          this.record.minReceivedMaxSold = this.getMinReceivedMaxSold()
          const { error } = await createBridgeVaultOrder(this.state, {
            vaultAddress: this.record.vaultAddress,
            targetChainId: this.desChain.chainId,
            tokenIn: this.fromToken,
            tokenOut: this.toToken,
            amountIn: this.record.fromAmount,
            minAmountOut: this.record.minReceivedMaxSold,
            sourceRouteInfo: this.record.sourceRouteObj ? { amountOut: this.record.sourceRouteObj.amountOut, pairs: this.record.sourceRouteObj.pairs } : undefined
          })
          if (error) {
            this.showResultMessage('error', error as any);
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
        providerList: this.originalData?.providers || [],
        campaignId: this._data.campaignId,
        referrer: this.commissions.find(v => v.chainId === this.state.getChainId())?.walletAddress,
      }

      const { error } = await executeSwap(this.state, swapData);
      if (error) {
        this.showResultMessage('error', error as any);
      }
    } catch (error) {
      console.error(error);
    }
  }
  private onApproveRouterMax = () => {
    this.showResultMessage('warning', 'Approving');
    this.setApprovalSpenderAddress();
    this.approvalModelAction.doApproveAction(this.fromToken as ITokenObject, this.totalAmount().toString(), this.record);
  }
  private onSetMaxBalance = async (value?: number) => {
    if (!this.fromToken?.symbol) return;
    this.isFrom = false;
    const address = this.fromToken?.address || this.fromToken?.symbol;
    let balance = this.getBalance(this.fromToken);
    let inputVal = new BigNumber(balance);
    if (!address) {
      inputVal = new BigNumber(0);
    }
    if (value == 0 || value) {
      inputVal = inputVal.multipliedBy(value).dividedBy(100);
    }
    if (inputVal.eq(this.fromInputValue)) return;
    this.fromInputValue = inputVal;
    this.firstTokenInput.value = limitDecimals(this.fromInputValue.toFixed(), this.fromToken?.decimals || 18);
    this.redirectToken();
    await this.handleAddRoute();
  }
  private isMaxDisabled = (): boolean => {
    const address = this.fromToken?.address || this.fromToken?.symbol;
    let balance = this.getBalance(this.fromToken);
    return !address || balance <= 0
  }

  private onRenderPriceInfo() {
    if (!this.priceInfo) {
      this.priceInfo = <i-scom-swap-price-info></i-scom-swap-price-info>
      this.priceInfo.width = 'auto';
      this.priceInfo.height = 'auto';
      this.pnlPriceInfo.appendChild(this.priceInfo);
      this.priceInfo.onTogglePrice = this.onTogglePrice.bind(this);
    }
    this.priceInfo.setData(this.getPriceInfo());

    if (!this.priceInfo2) {
      this.priceInfo2 = <i-scom-swap-price-info></i-scom-swap-price-info>
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
  private get isCrossChainSwap() {
    return this._data.category === 'cross-chain-swap';
  }

  private get isCrossChainEnabled() {
    let chainId = this.state.getChainId();

    if (!this.supportedChainList.some((v: INetworkConfig) => v.chainId == chainId) || !this.isCrossChainSwap) {
      this.srcChainBox?.classList.add('hidden');
      this.desChainBox?.classList.add('hidden');
      return false;
    }
    this.srcChainBox?.classList.remove('hidden');
    if (crossChainSupportedChainIds.some(v => v.chainId === this.srcChain?.chainId)) {
      this.desChainBox?.classList.remove('hidden');
    } else {
      this.desChainBox?.classList.add('hidden');
    }
    return true;
  };

  get isCrossChain() {
    const srcChainId = this.srcChain?.chainId;
    const desChainId = this.desChain?.chainId;
    if (this.isCrossChainEnabled && crossChainSupportedChainIds.some(v => v.chainId === srcChainId) && srcChainId != desChainId) {
      return true;
    }
    this.minSwapHintLabel?.classList.add('hidden');
    return false;
  };

  get fromTokenToVaultMap() {
    let map: { [key: string]: any } = {};
    for (const vaultGroup of BridgeVaultGroupList) {
      if (vaultGroup.deprecated) continue;
      const vaults: { [key: string]: any } = vaultGroup.vaults;
      if (!vaults[this.chainId] || Object.keys(vaults).length < 2) continue;
      const currentChainTokenAddress = vaults[this.chainId].tokenAddress.toLowerCase();
      map[currentChainTokenAddress] = vaults;
    }
    return map;
  };

  get isMetaMask() {
    return Wallet.getClientInstance().clientSideProvider?.name === WalletPlugin.MetaMask;
  }

  getSupportedChainList = () => {
    const list = this.networks;
    const testnetSupportedList = list.filter(v => crossChainSupportedChainIds.some(s => s.chainId === v.chainId && s.isTestnet));
    const mainnetSupportedList = list.filter(v => !crossChainSupportedChainIds.some(s => s.chainId === v.chainId && s.isTestnet));
    const isMainnet = mainnetSupportedList.some((item: any) => item.chainId == this.chainId);
    this.supportedChainList = isMainnet ? mainnetSupportedList : testnetSupportedList;
  }

  private disableSelectChain = (disabled: boolean, isDes?: boolean) => {
    const chains = isDes ? this.desChainList : this.srcChainList;
    const imgs = chains.querySelectorAll('i-image');
    imgs.forEach((elm: Element) => {
      const img = elm as Image;
      img.enabled = !disabled;
      if (disabled) {
        img.classList.add('.cursor-default');
      } else {
        img.classList.remove('.cursor-default');
      }
    });
  }

  private selectSourceChain = async (obj: INetwork, img?: Image) => {
    if ((this.srcChain && this.srcChain.chainId != obj.chainId) || !this.srcChain) {
      const rpcWallet = this.state.getRpcWallet();
      await rpcWallet.switchNetwork(obj.chainId);
      if (!crossChainSupportedChainIds.some(v => v.chainId === obj.chainId)) {
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
      } else {
        this.srcChainList.firstElementChild?.classList.add('icon-selected');
      }
    }
  };

  private selectDestinationChain = async (obj: INetwork, img?: Image) => {
    if (!this.isCrossChainEnabled) return;
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
      } else {
        const currentNetwork = getNetworkInfo(this.supportedChainList.find((f: INetwork) => f.chainId == obj.chainId)?.chainId);
        const img = this.desChainList.querySelector(`[data-tooltip="${currentNetwork?.chainName}"]`);
        if (img) {
          img.classList.add('icon-selected');
        }
      }
    } catch (err) {
      console.log('err', err)
      if (oldDestination) {
        this.desChain = oldDestination;
        if (selected) {
          selected.classList.add('icon-selected');
        }
      } else {
        this.desChain = getNetworkInfo(this.supportedChainList[0]?.chainId);
        this.desChainList.firstElementChild?.classList.add('icon-selected');
      }
    }
    if (this.desChain) {
      this.targetChainId = this.desChain.chainId;
      this.desChainLabel.caption = this.desChain.chainName;
    }
    this.setTargetTokenList();
    this.disableSelectChain(false, true);
  };

  private setTargetTokenList = (isDisabled?: boolean) => {
    if (crossChainSupportedChainIds.some(v => v.chainId === this.srcChain?.chainId) && !isDisabled) {
      const targetChainId = this.desChain?.chainId || this.chainId;
      if (this.secondTokenInput.chainId !== targetChainId) {
        this.secondTokenInput.chainId = targetChainId;
      }
      this.secondTokenInput.tokenBalancesMapProp = this.targetChainTokenBalances;
      this.secondTokenInput.tokenDataListProp = getSupportedTokens(this._data.tokens || [], targetChainId);
    } else {
      const srcChainId = this.srcChain?.chainId || this.chainId;
      if (this.secondTokenInput.chainId !== srcChainId) {
        this.secondTokenInput.chainId = srcChainId;
      }
      this.secondTokenInput.tokenDataListProp = getSupportedTokens(this._data.tokens || [], srcChainId);
    }
  }

  private onSourceChainChanged = () => {
    const selected = this.srcChainList.querySelector('.icon-selected');
    if (selected) {
      selected.classList.remove('icon-selected');
    }
    this.getSupportedChainList();
    // if (!this.chainId) this.chainId = this.supportedChainList[0].chainId;
    const currentNetwork = getNetworkInfo(this.supportedChainList.find((f: INetwork) => f.chainId == this.chainId)?.chainId);
    this.srcChain = currentNetwork;
    this.srcChainLabel.caption = this.srcChain?.chainName || '-';
    const img = this.srcChainList.querySelector(`[network-name="${currentNetwork?.chainName}"]`);
    if (img) {
      img.classList.add('icon-selected');
    }
  }

  private onSelectSourceChain = async (obj: INetwork, img?: Image) => {
    if (this.isMetaMask || !isClientWalletConnected()) {
      await this.selectSourceChain(obj, img);
      this.initializeWidgetConfig();
    }
  }

  private onSelectDestinationChain = async (obj: INetwork, img?: Image) => {
    if (obj.chainId === this.desChain?.chainId) return;
    await this.selectDestinationChain(obj, img);
    this.initializeWidgetConfig();
  }

  private setDefaultChain = async () => {
    if (this.supportedChainList && this.supportedChainList.length) {
      let obj = this.supportedChainList.find((f: INetwork) => f.chainId == this.chainId);
      if (!obj)
        obj = this.supportedChainList[0];
      if (!this.srcChain && obj) {
        await this.selectSourceChain(getNetworkInfo(obj.chainId));
      }
      this.onSourceChainChanged();
      const targetChain = this.supportedChainList.find((f: INetwork) => f.chainId == this.targetChainId);
      const isSupported = crossChainSupportedChainIds.some(v => v.chainId === targetChain?.chainId);
      if (!this.desChain && isSupported) {
        await this.selectDestinationChain(getNetworkInfo(targetChain.chainId));
      } else if (!isSupported && obj) {
        await this.selectDestinationChain(getNetworkInfo(obj.chainId));
      } else {
        if (this.isCrossChain) await this.updateTargetChainBalances();
        if (this.toToken) {
          const balance = this.getBalance(this.toToken, this.isCrossChain);
          this.receiveBalance.caption = `Balance: ${formatNumber(balance, 4)} ${this.toToken.symbol}`;
        }
        this.setTargetTokenList();
      }
      this.desChainLabel.caption = this.desChain?.chainName || '-';
    } else {
      this.setTargetTokenList(true);
    }
  };

  private initChainIcon = (network: INetwork, isDes?: boolean) => {
    const img = new Image();
    img.url = network.image;
    img.tooltip.content = network.chainName;
    img.classList.add('chain-icon');
    img.setAttribute('data-tooltip', network.chainName); // for query
    if (isDes) {
      img.onClick = () => this.onSelectDestinationChain(network, img);
      this.desChainList.appendChild(img);
    } else {
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

  private updateSrcChainIconList = () => {
    const listElm = this.srcChainList.querySelectorAll('i-image');
    for (const elm of listElm) {
      const networkName = elm.getAttribute('network-name');
      const chainId = elm.getAttribute('chain-id');
      const tooltip = this.isMetaMask ? networkName : `Swap supports this network ${networkName} (${chainId}), please switch network in the connected wallet.`
      if (tooltip) {
        (elm as Image).tooltip.content = tooltip;
      }
      if (this.isMetaMask) {
        elm.classList.remove('icon-disabled');
      } else {
        elm.classList.add('icon-disabled');
      }
    }
  };

  private onRenderChainList = async () => {
    this.oldSupportedChainList = this.supportedChainList.map(v => getNetworkInfo(v.chainId));
    this.getSupportedChainList();
    if (this.oldSupportedChainList[0]?.chainId == this.supportedChainList[0]?.chainId) {
      this.updateSrcChainIconList();
      await this.setDefaultChain();
      return;
    };
    this.srcChainList.innerHTML = '';
    this.desChainList.innerHTML = '';
    this.srcChain = undefined;
    this.desChain = undefined;
    this.supportedChainList.forEach((v: INetworkConfig) => {
      const network = getNetworkInfo(v.chainId);
      this.initChainIcon(network);
      if (crossChainSupportedChainIds.some(v => v.chainId === network.chainId)) {
        this.initChainIcon(network, true);
      }
    });
    await this.setDefaultChain();
  };

  showViewOrderModal = () => {
    this.modalViewOrder.visible = true;
  }

  closeViewOrderModal = () => {
    this.modalViewOrder.visible = false;
  }

  onViewOrder = () => {
    this.modalViewOrder.visible = false;
    window.open('https://www.openswap.xyz/#/cross-chain-bridge-record');
  }

  showModalFees = () => {
    const fees = this.getFeeDetails();
    this.feesInfo.clearInnerHTML();
    fees.forEach((fee) => {
      this.feesInfo.appendChild(
        <i-hstack
          horizontalAlignment="space-between" verticalAlignment="center" margin={{ top: 10 }}
          border={{ bottom: { color: Theme.background.main, width: '2px', style: 'solid' } }}
          padding={{ bottom: 16 }}
        >
          <i-hstack verticalAlignment="center">
            <i-label caption={fee.title} margin={{ right: 4 }} />
            <i-icon
              name="question-circle"
              width={15}
              height={15}
              fill={Theme.text.primary}
              tooltip={{ content: fee.description }}
              data-placement="right"
            />
          </i-hstack>
          <i-label class="ml-auto" caption={`${formatNumber(fee.value)} ${this.fromToken?.symbol}`} />
        </i-hstack>
      )
    })
    this.feesInfo.appendChild(
      <i-hstack horizontalAlignment="space-between" verticalAlignment="center" margin={{ top: 16 }}>
        <i-hstack verticalAlignment="center">
          <i-label caption="Total Transaction Fee" />
        </i-hstack>
        <i-label class="ml-auto" caption={this.getTradeFeeExactAmount()} />
      </i-hstack>
    )
    this.modalFees.visible = true;
  }

  closeModalFees = () => {
    this.modalFees.visible = false;
  }

  private showResultMessage = (status: 'warning' | 'success' | 'error', content?: string | Error) => {
    if (!this.txStatusModal) return;
    let params: any = { status };
    if (status === 'success') {
      params.txtHash = content;
    } else {
      params.content = content;
    }
    this.txStatusModal.message = { ...params };
    this.txStatusModal.showModal();
  }

  private initExpertModal() {
    this.expertModal = new ExpertModeSettings(this.state);
    this.swapComponent.appendChild(this.expertModal);
    this.$eventBus.register(this, EventId.ShowExpertModal, () => {
      this.expertModal.showModal();
    })
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

  private closeNetworkErrModal() {
    this.networkErrModal.visible = false;
  }

  private resizeLayout() {
    const tagWidth = Number(this.tag?.width);
    if ((this.offsetWidth !== 0 && this.offsetWidth < 550) || (window as any).innerWidth < 550 || (!isNaN(tagWidth) && tagWidth !== 0 && tagWidth < 550)) {
      this.wrapperSwap?.classList.add('swap-flex--col');
    } else {
      this.wrapperSwap?.classList.remove('swap-flex--col');
    }
  }

  private async initData() {
    if (!this.isInited) {
      await this.initApprovalModelAction();
      this.isInited = true;
    }
  }

  isEmptyData(value: ISwapWidgetData) {
    return !value || !value.networks || value.networks.length === 0;
  }

  async init() {
    this.isReadyCallbackQueued = true;
    super.init();
    this.state = new State(configData);
    this.fromInputValue = new BigNumber(0);
    this.toInputValue = new BigNumber(0);
    this.swapButtonStatusMap = {};
    this.approveButtonStatusMap = {};
    this.$eventBus = application.EventBus;
    this.registerEvent();
    this.updateSwapButtonCaption();
    this.initExpertModal();
    const dexList = getDexList();
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
      const title = this.getAttribute('title', true);
      const logo = this.getAttribute('logo', true);
      let data = { campaignId, category, providers, commissions, tokens, defaultChainId, networks, wallets, showHeader, title, logo };
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
    return (
      <i-scom-dapp-container id="dappContainer">
        <i-panel id="swapComponent" background={{ color: Theme.background.main }}>
          <i-panel class={swapStyle}>
            <i-panel id="swapContainer">
              <i-vstack id="pnlBranding" margin={{ bottom: '0.25rem' }} gap="0.5rem" horizontalAlignment="center">
                <i-image id='imgLogo' height={100}></i-image>
                <i-label id='lbTitle' font={{ bold: true, size: '1.5rem' }}></i-label>
              </i-vstack>
              <i-panel class="content-swap">
                <i-hstack id="wrapperSwap" gap={10}>
                  <i-vstack gap={5} minWidth={230} width="calc(100% - 25px)">
                    <i-vstack id="srcChainBox" width="100%" margin={{ top: 8, bottom: 8 }}>
                      <i-hstack gap={8} horizontalAlignment="space-between">
                        <i-label opacity={0.8} caption="Source Chain" minWidth="7rem" />
                        <i-label id="srcChainLabel" class="chain-text" margin={{ left: 'auto' }} caption="-" />
                      </i-hstack>
                      <i-hstack id="srcChainList" wrap="wrap" verticalAlignment="center" maxWidth="100%" />
                    </i-vstack>
                    <i-panel class="token-box" minHeight={120} margin={{ top: 'auto' }}>
                      <i-vstack class="input--token-container" gap={8}>
                        <i-vstack class="balance-info" width="100%" gap={8}>
                          <i-vstack width="100%">
                            <i-label caption="You Swap" font={{ size: '1.125rem' }}></i-label>
                          </i-vstack>
                          <i-hstack gap={5} horizontalAlignment="space-between" verticalAlignment="center" width="100%">
                            <i-label id="payBalance" class="text--grey ml-auto" caption="Balance: 0"></i-label>
                            <i-button id="maxButton" class="btn-max" caption="Max" enabled={false} onClick={() => this.onSetMaxBalance()}></i-button>
                          </i-hstack>
                        </i-vstack>
                        <i-panel id="payCol" class="bg-box" width="100%" margin={{ top: 'auto' }}>
                          <i-scom-token-input
                            id="firstTokenInput"
                            placeholder='0.0'
                            value='-'
                            tokenReadOnly={false}
                            isBalanceShown={false}
                            isBtnMaxShown={false}
                            isCommonShown={true}
                            inputReadOnly={true}
                            background={{ color: Theme.input.background }}
                            border={{ radius: '1rem' }}
                            // height={56}
                            display='flex'
                            font={{ size: '1.25rem' }}
                            onInputAmountChanged={this.onTokenInputChange}
                            onSelectToken={(token: ITokenObject) => this.onSelectToken(token, true)}
                            class="token-input"
                          ></i-scom-token-input>
                        </i-panel>
                      </i-vstack>
                    </i-panel>
                    <i-hstack horizontalAlignment="space-between">
                      <i-label id="lbYouPayTitle" caption="You Pay" font={{ size: '1rem' }}></i-label>
                      <i-label id="lbYouPayValue" caption="0" font={{ size: '1rem' }}></i-label>
                    </i-hstack>
                  </i-vstack>
                  <i-hstack class="toggle-reverse" alignItems="end">
                    <i-icon id="toggleReverseImage" position="relative" width={32} height={32} class="icon-swap rounded-icon custom-ic--swap" name="arrows-alt-v" onClick={this.onRevertSwap.bind(this)} />
                  </i-hstack>
                  <i-vstack gap={5} minWidth={230} width="calc(100% - 25px)">
                    <i-vstack id="desChainBox" width="100%" margin={{ top: 8, bottom: 8 }}>
                      <i-hstack gap={8} horizontalAlignment="space-between">
                        <i-label opacity={0.8} caption="Destination Chain" minWidth="7rem"/>
                        <i-label id="desChainLabel" class="chain-text" margin={{ left: 'auto' }} caption="-" />
                      </i-hstack>
                      <i-hstack id="desChainList" wrap="wrap" verticalAlignment="center" maxWidth="100%" />
                    </i-vstack>
                    <i-panel class="token-box" height="100%" minHeight={120} margin={{ top: 'auto' }}>
                      <i-vstack class="input--token-container" height="100%" gap={8}>
                        <i-vstack class="balance-info" width="100%" gap={8}>
                          <i-vstack width="100%">
                            <i-label caption="You Receive" font={{ size: '1.125rem' }}></i-label>
                          </i-vstack>
                          <i-vstack class="text-right" width="100%">
                            <i-label id="receiveBalance" class="text--grey ml-auto" caption="Balance: 0"></i-label>
                          </i-vstack>
                        </i-vstack>
                        <i-panel id="receiveCol" class="bg-box" background={{ color: Theme.input.background }} width="100%" margin={{ top: 'auto' }}>
                          <i-scom-token-input
                            id="secondTokenInput"
                            value='-'
                            placeholder='0.0'
                            inputReadOnly={true}
                            tokenReadOnly={false}
                            isBalanceShown={false}
                            isBtnMaxShown={false}
                            isCommonShown={true}
                            background={{ color: Theme.input.background }}
                            border={{ radius: '1rem' }}
                            // height={56}
                            display='flex'
                            font={{ size: '1.25rem' }}
                            onInputAmountChanged={this.onTokenInputChange}
                            onSelectToken={(token: ITokenObject) => this.onSelectToken(token, false)}
                            class="token-input"
                          ></i-scom-token-input>
                        </i-panel>
                      </i-vstack>
                    </i-panel>
                    <i-hstack horizontalAlignment="end">
                      <i-label id="lbRouting" caption="No routing" opacity={0.75} font={{ size: '1rem' }} class="visibility-hidden" />
                    </i-hstack>
                  </i-vstack>
                </i-hstack>
              </i-panel>
              <i-panel id="minSwapHintLabel" class="hints">
                <i-icon name="star" fill={Theme.colors.primary.main} width={13} height={13} />
                <i-label caption="No crosschain routes are found. You may try updating the input amount or selecting another token." font={{ color: Theme.colors.primary.main }} />
              </i-panel>
              <i-panel id="pnlPriceInfo" />
              <i-vstack class="swap-btn-container" horizontalAlignment="center" width="100%">
                <i-button
                  id="swapBtn"
                  class="btn-swap btn-os"
                  maxWidth={360}
                  height={60}
                  visible={false}
                  rightIcon={{ spin: true, visible: false, fill: Theme.colors.primary.contrastText }}
                  onClick={this.onClickSwapButton.bind(this)}
                ></i-button>
              </i-vstack>
            </i-panel>
            <i-modal id="swapModal" class="custom-modal" title="Confirm Swap" closeIcon={{ name: 'times' }}>
              <i-hstack verticalAlignment='center' horizontalAlignment='start'>
                <i-panel id="srcChainFirstPanel" class="row-chain">
                  <i-image id="srcChainTokenImage" width="30px" height="30px" url="#" />
                  <i-label id="srcChainTokenLabel" class="token-name" caption="" />
                  <i-icon name="minus" class="custom-icon--fill" width={28} height={10} />
                </i-panel>
                <i-panel class="row-chain">
                  <i-image id="fromTokenImage" width="30px" height="30px" url="#" />
                  <i-label id="fromTokenLabel" class="token-name" caption=""></i-label>
                </i-panel>
                <i-label id="fromTokenValue" class="token-value" caption=" - "></i-label>
              </i-hstack>
              <i-icon name="arrow-down" class="arrow-down custom-icon--fill" width={28} height={28} />
              <i-panel id="srcChainSecondPanel">
                <i-hstack verticalAlignment='center' horizontalAlignment='start'>
                  <i-panel class="row-chain">
                    <i-image id="srcChainVaultImage" width="30px" height="30px" url="#" />
                    <i-label id="srcChainVaultLabel" class="token-name" caption="" />
                    <i-icon name="minus" class="custom-icon--fill" width={28} height={10} />
                  </i-panel>
                  <i-panel class="row-chain">
                    <i-image id="srcVaultTokenImage" fallbackUrl={tokenAssets.fallbackUrl} width="30px" height="30px" url="#" />
                    <i-label id="srcVaultTokenLabel" class="token-name" caption="" />
                  </i-panel>
                  <i-label id="srcVaultTokenValue" class="token-value" caption="-" />
                </i-hstack>
                <i-icon name="arrow-down" class="arrow-down custom-icon--fill" width={28} height={28} />
              </i-panel>
              <i-panel id="targetChainSecondPanel">
                <i-hstack verticalAlignment='center' horizontalAlignment='start'>
                  <i-panel class="row-chain">
                    <i-image id="targetChainVaultImage" width="30px" height="30px" url="#" />
                    <i-label id="targetChainVaultLabel" class="token-name" caption="" />
                    <i-icon name="minus" class="custom-icon--fill" width={28} height={10} />
                  </i-panel>
                  <i-panel class="row-chain">
                    <i-image id="targetVaultTokenImage" fallbackUrl={tokenAssets.fallbackUrl} width="30px" height="30px" url="#" />
                    <i-label id="targetVaultTokenLabel" class="token-name" caption="" />
                  </i-panel>
                  <i-label id="targetVaultTokenValue" class="token-value" caption="-" />
                </i-hstack>
                <i-vstack class="text-right">
                  <i-label id="crossChainSoftCapLabel1" class="text--grey ml-auto"></i-label>
                  <i-label id="targetVaultAssetBalanceLabel1" class="text--grey ml-auto" caption="Vault Asset Balance: 0"></i-label>
                  <i-label id="targetVaultBondBalanceLabel1" class="text--grey ml-auto" caption="Vault Bond Balance: 0"></i-label>
                </i-vstack>
                <i-icon name="arrow-down" class="arrow-down custom-icon--fill" width={28} height={28} />
              </i-panel>
              <i-hstack class="mb-1" verticalAlignment='center' horizontalAlignment='start'>
                <i-panel id="targetChainFirstPanel" class="row-chain">
                  <i-image id="targetChainTokenImage" fallbackUrl={tokenAssets.fallbackUrl} width="30px" height="30px" url="#" />
                  <i-label id="targetChainTokenLabel" class="token-name" caption="" />
                  <i-icon name="minus" class="custom-icon--fill" width={28} height={10} />
                </i-panel>
                <i-panel class="row-chain">
                  <i-image id="toTokenImage" width="30px" height="30px" url="#" />
                  <i-label id="toTokenLabel" class="token-name" caption=""></i-label>
                </i-panel>
                <i-label id="toTokenValue" class="token-value text-primary bold" caption=" - "></i-label>
              </i-hstack>
              <i-vstack id="crossChainVaultInfoVstack" class="text-right">
                <i-label id="crossChainSoftCapLabel2" class="text--grey ml-auto"></i-label>
                <i-label id="targetVaultAssetBalanceLabel2" class="text--grey ml-auto" caption="Vault Asset Balance: 0"></i-label>
                <i-label id="targetVaultBondBalanceLabel2" class="text--grey ml-auto" caption="Vault Bond Balance: 0"></i-label>
              </i-vstack>
              <i-panel class="mb-1">
                <i-label id="lbEstimate"></i-label>
              </i-panel>
              <i-panel class="mb-1">
                <i-label id="lbPayOrReceive"></i-label>
                <i-label id="payOrReceiveValue" class="text-primary bold" caption=""></i-label>
                <i-label id="payOrReceiveToken" caption=""></i-label>
              </i-panel>
              <i-panel id="priceInfoContainer" class="bg-box mt-1 mb-1" background={{ color: Theme.background.main }} width="100%">
              </i-panel>
              <i-panel class="swap-btn-container" width="100%">
                <i-button id="swapModalConfirmBtn" class="btn-swap btn-os" height="auto" caption="Confirm Swap" onClick={this.doSwap}></i-button>
              </i-panel>
            </i-modal>

            <i-modal
              id="modalFees"
              class="bg-modal custom-modal"
              title="Transaction Fee Details"
              closeIcon={{ name: 'times' }}
            >
              <i-panel class="i-modal_content">
                <i-panel>
                  <i-vstack id="feesInfo" />
                  <i-hstack verticalAlignment="center" horizontalAlignment="center" margin={{ top: 16, bottom: 8 }}>
                    <i-button
                      caption="Close"
                      class="btn-os"
                      font={{ color: Theme.colors.primary.contrastText }}
                      onClick={() => this.closeModalFees()}
                    />
                  </i-hstack>
                </i-panel>
              </i-panel>
            </i-modal>

            <i-modal
              id="modalViewOrder"
              class="bg-modal custom-modal custom-md--view"
              title="Cross Chain"
              closeIcon={{ name: 'times' }}
            >
              <i-panel class="i-modal_content">
                <i-panel class="mt-1">
                  <i-hstack verticalAlignment='center' horizontalAlignment='center' class="mb-1">
                    <i-image width={50} height={50} url={assets.fullPath('img/success-icon.svg')} />
                  </i-hstack>
                  <i-hstack verticalAlignment='center' class="flex-col">
                    <i-label caption="The order was created successfully!" />
                    <i-label caption="Do you want to view the record?" />
                  </i-hstack>
                  <i-hstack verticalAlignment='center' horizontalAlignment='center' class="mt-1">
                    <i-button
                      caption="View Order"
                      class="btn-os"
                      font={{ color: Theme.colors.primary.contrastText }}
                      onClick={() => this.onViewOrder()}
                    />
                  </i-hstack>
                </i-panel>
              </i-panel>
            </i-modal>

            <i-modal
              id="networkErrModal"
              class="bg-modal custom-modal"
              title="Supported Networks"
              closeIcon={{ name: 'times' }}
            >
              <i-panel class="i-modal_content">
                <i-vstack id="supportedNetworksElm" gap={10} verticalAlignment="center" />
                <i-hstack verticalAlignment="center" horizontalAlignment="center" margin={{ top: 16, bottom: 8 }}>
                  <i-button
                    caption="Close"
                    width={150}
                    padding={{ top: 4, bottom: 4 }}
                    class="btn-os"
                    font={{ color: Theme.colors.primary.contrastText }}
                    onClick={() => this.closeNetworkErrModal()}
                  />
                </i-hstack>
              </i-panel>
            </i-modal>
          </i-panel>
          <i-scom-tx-status-modal id="txStatusModal" />
          <i-scom-wallet-modal
            id="mdWallet"
            wallets={[]}
          ></i-scom-wallet-modal>
        </i-panel>
      </i-scom-dapp-container>
    )
  }
}
