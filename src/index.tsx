import { Module, Panel, Button, Label, VStack, Image, Container, IEventBus, application, customModule, Modal, Input, Control, customElements, ControlElement, IDataSchema, Styles, HStack, Icon, IUISchema } from '@ijstech/components';
import { BigNumber, Constants, IEventBusRegistry, INetwork, Wallet, IERC20ApprovalAction } from '@ijstech/eth-wallet';
import './index.css';
import {
  isClientWalletConnected,
  getSupportedTokens,
  State,
} from "./store/index";
import { tokenStore, DefaultERC20Tokens, ChainNativeTokenByChainId, assets as tokenAssets } from '@scom/scom-token-list';

import {
  getAllRoutesData,
  executeSwap,
  setApprovalModalSpenderAddress,
  getProviderProxySelectors,
  getPair,
  getCommissionRate
} from './swap-utils/index'
import { ITokenObject } from '@scom/scom-token-list';
import {
  formatNumber,
  ApprovalStatus,
  EventId,
  limitDecimals,
  isInvalidInput,
  IProvider,
  ISwapConfigUI,
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

const Theme = Styles.Theme.ThemeVars;
// const currentTheme = Styles.Theme.currentTheme;
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
  private _data: ISwapConfigUI = {
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
  private supportedChainList: INetwork[] = [];
  private swapModalConfirmBtn: Button;
  private modalFees: Modal;
  private feesInfo: VStack;

  private expertModal: ExpertModeSettings;
  private networkErrModal: Modal;
  private supportedNetworksElm: VStack;
  private contractAddress: string;
  private rpcWalletEvents: IEventBusRegistry[] = [];
  private clientEvents: any[] = [];

  static async create(options?: ScomSwapElement, parent?: Container) {
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
    const propertiesDataSchema = formSchema.general.dataSchema;
    const propertiesUISchema = formSchema.general.uiSchema;
    const themeDataSchema = formSchema.theme.dataSchema;
    const propertiesCustomControls = formSchema.general.customControls(this.state.getRpcWallet()?.instanceId);
    let self = this;
    const actions: any[] = [
      {
        name: 'Commissions',
        icon: 'dollar-sign',
        command: (builder: any, userInputData: any) => {
          let _oldData: ISwapConfigUI = {
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
        name: 'Settings',
        icon: 'cog',
        command: (builder: any, userInputData: any) => {
          let _oldData: ISwapConfigUI = {
            category: 'fixed-pair',
            providers: [],
            defaultChainId: 0,
            wallets: [],
            networks: []
          }
          return {
            execute: async () => {
              _oldData = { ...this._data };
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
            },
            undo: () => {
              this._data = { ..._oldData };
              this.refreshUI();
              if (builder?.setData) builder.setData(this._data);
            },
            redo: () => { }
          }
        },
        userInputDataSchema: propertiesDataSchema,
        userInputUISchema: propertiesUISchema,
        customControls: propertiesCustomControls
      });
      actions.push(
        {
          name: 'Theme Settings',
          icon: 'palette',
          command: (builder: any, userInputData: any) => {
            let oldTag = {};
            return {
              execute: async () => {
                if (!userInputData) return;
                oldTag = JSON.parse(JSON.stringify(this.tag));
                if (builder) builder.setTag(userInputData);
                else this.setTag(userInputData);
                if (this.dappContainer) this.dappContainer.setTag(userInputData);
              },
              undo: () => {
                if (!userInputData) return;
                this.tag = JSON.parse(JSON.stringify(oldTag));
                if (builder) builder.setTag(this.tag);
                else this.setTag(this.tag);
                if (this.dappContainer) this.dappContainer.setTag(this.tag);
              },
              redo: () => { }
            }
          },
          userInputDataSchema: themeDataSchema
        }
      )
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
        setData: async (properties: ISwapConfigUI, linkParams?: Record<string, any>) => {
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
    this.rpcWalletEvents.push(chainChangedEvent, connectedEvent);
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

  private async setData(value: ISwapConfigUI) {
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
    this.clientEvents.push(this.$eventBus.register(this, EventId.SlippageToleranceChanged, () => { this.priceInfo.Items = this.getPriceInfo() }));
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
    let currentChainTokens = this._data.tokens.filter((token) => token.chainId === currentChainId);
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
      this.initializeDefaultTokenPair();
      this.toggleReverseImage.enabled = !this.isFixedPair;
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
      if (this.fromInputValue.isGreaterThanOrEqualTo(0)) {
        this.onUpdateEstimatedPosition(false, true);
        this.firstTokenInput.value = this.fixedNumber(this.fromInputValue);
      } else if (this.toInputValue.isGreaterThanOrEqualTo(0)) {
        this.onUpdateEstimatedPosition(true, true);
        this.secondTokenInput.value = this.fixedNumber(this.toInputValue);
      }
      const tokens = getSupportedTokens(this._data.tokens || [], currentChainId);
      this.firstTokenInput.tokenDataListProp = tokens;
      this.secondTokenInput.tokenDataListProp = tokens;

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
        this.setMapStatus('approve', data.key, ApprovalStatus.TO_BE_APPROVED);
        this.setMapStatus('swap', data.key, ApprovalStatus.TO_BE_APPROVED);
        this.updateSwapButtonCaption();
        const enabled = !this.isSwapButtonDisabled();
        this.swapBtn.enabled = enabled;
      },
      onToBePaid: async (token: ITokenObject, data?: any) => {
        this.setMapStatus('approve', data.key, ApprovalStatus.NONE);
        this.setMapStatus('swap', data.key, ApprovalStatus.TO_BE_APPROVED);
        this.updateSwapButtonCaption();
        const enabled = !this.isSwapButtonDisabled();
        this.swapBtn.enabled = enabled;
      },
      onApproving: async (token: ITokenObject, receipt?: string, data?: any) => {
        this.setMapStatus('approve', data.key, ApprovalStatus.APPROVING);
        this.updateSwapButtonCaption();
        this.showResultMessage('success', receipt);
        if (this.isApprovingRouter && !this.swapBtn.rightIcon.visible)
          this.swapBtn.rightIcon.visible = true;
      },
      onApproved: async (token: ITokenObject, data?: any) => {
        this.setMapStatus('approve', data.key, ApprovalStatus.NONE);
        this.updateSwapButtonCaption();
        if (this.swapBtn.rightIcon.visible)
          this.swapBtn.rightIcon.visible = false;
        await this.handleAddRoute();
      },
      onApprovingError: async (token: ITokenObject, err: Error) => {
        this.showResultMessage('error', err);
        if (this.swapBtn.rightIcon.visible)
          this.swapBtn.rightIcon.visible = false;
      },
      onPaying: async (receipt?: string, data?: any) => {
        this.showResultMessage('success', receipt);
        this.onSwapConfirming(data.key);
      },
      onPaid: async (data?: any) => {
        this.onSwapConfirmed({ key: data.key });
        await this.updateBalance();
        application.EventBus.dispatch(EventId.Paid, 'onPaid');
      },
      onPayingError: async (err: Error) => {
        this.showResultMessage('error', err);
      }
    })
  }

  private async onRevertSwap() {
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

  private totalAmount = () => {
    return this.fromInputValue;
  }

  private handleSwapPopup() {
    if (!this.record) return;
    const currentChainId = this.state.getChainId();
    const slippageTolerance = this.state.slippageTolerance;
    this.fromTokenImage.url = tokenAssets.tokenPath(this.fromToken, currentChainId);
    this.fromTokenLabel.caption = this.fromToken?.symbol ?? '';
    this.fromTokenValue.caption = formatNumber(this.totalAmount(), 4);
    this.toTokenImage.url = tokenAssets.tokenPath(this.toToken, currentChainId);
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
    this.priceInfo2.Items = this.getPriceInfo();

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
    const balance = this.getBalance(token);
    if (isFrom) {
      this.fromToken = token;
      const enabled = !this.isMaxDisabled();
      this.maxButton.enabled = enabled;
      if (this.fromInputValue.gt(0)) {
        const limit = limitDecimals(this.fromInputValue.toFixed(), token.decimals || 18);
        if (!this.fromInputValue.eq(limit)) {
          if (this.firstTokenInput) {
            this.firstTokenInput = limit === '0' ? '' : limit;
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
      if (this._data.campaignId !== undefined) {
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
    const isButtonLoading = this.isButtonLoading();
    if (this.swapBtn.rightIcon.visible != isButtonLoading) {
      this.swapBtn.rightIcon.visible = isButtonLoading;
    }
    if (this.priceInfo)
      this.priceInfo.Items = this.getPriceInfo();
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
    if (this.priceInfo) this.priceInfo.Items = this.getPriceInfo();
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
    listRouting = await getAllRoutesData(this.state, this.fromToken, this.toToken, this.fromInputValue, this.toInputValue, this.isFrom, useAPI, this.commissions);
    listRouting = listRouting.map((v: any) => {
      // const config = ProviderConfigMap[v.provider];
      return {
        ...v,
        isHybrid: false // config.marketCode == Market.HYBRID,
      }
    });
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
        this.priceInfo.Items = this.getPriceInfo();
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
    priceInfo.Items = this.getPriceInfo();
  }
  private getRate() {
    const value = this.isPriceToggled ? this.record?.priceSwap : this.record?.price;
    let fromSymbol = this.fromToken?.symbol;
    let toSymbol = this.toToken?.symbol;
    if (value || value == 0) {
      if (this.isPriceToggled) {
        return `1 ${fromSymbol} ≈ ${formatNumber(value)} ${toSymbol}`;
      }
      return `1 ${toSymbol} ≈ ${formatNumber(value)} ${fromSymbol}`;
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
    const tradeFee = this.record?.fromAmount.times(this.record?.tradeFee).toNumber();
    if (tradeFee || tradeFee == 0) {
      return `${formatNumber(tradeFee)} ${this.fromToken?.symbol}`;
    }
    return '-';
  }
  private getFeeDetails() {
    if (this.record) {
      return [{
        title: "Liquidity Provider Fee",
        description: "This fee is paid to the AMM Liquidity Provider.",
        value: this.record.tradeFee
      }]
    } else {
      return []
    }
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
  private getBalance(token?: ITokenObject) {
    if (token && this.allTokenBalancesMap) {
      const address = token.address || '';
      let balance = address ? this.allTokenBalancesMap[address.toLowerCase()] ?? 0 : this.allTokenBalancesMap[token.symbol] || 0;
      return balance
    }
    return 0;
  }
  private async updateBalance() {
    const rpcWallet = this.state.getRpcWallet();
    if (rpcWallet.address) {
      if (this.hasData) await tokenStore.updateAllTokenBalances(rpcWallet);
      this.allTokenBalancesMap = tokenStore.tokenBalances;
    }
    else {
      this.allTokenBalancesMap = {};
    }
    if (this.fromToken) {
      const balance = this.getBalance(this.fromToken);
      this.payBalance.caption = `Balance: ${formatNumber(balance, 4)} ${this.fromToken.symbol}`;
    }
    if (this.toToken) {
      const balance = this.getBalance(this.toToken);
      this.receiveBalance.caption = `Balance: ${formatNumber(balance, 4)} ${this.toToken.symbol}`;
    }
    const enabled = !this.isMaxDisabled();
    this.maxButton.enabled = enabled;
  }

  private updateSwapButtonCaption() {
    if (this.swapBtn && this.swapBtn.hasChildNodes()) {
      this.swapBtn.caption = this.determineSwapButtonCaption();
    }
  }

  private determineSwapButtonCaption() {
    const isApproveButtonShown = this.isApproveButtonShown;
    if (!isClientWalletConnected()) {
      return "Connect Wallet";
    }
    if (!this.state.isRpcWalletConnected()) {
      return "Switch Network";
    }
    if (isApproveButtonShown) {
      const status = this.approveButtonStatus;
      switch (status) {
        case ApprovalStatus.APPROVING:
          return "Approving";
        case ApprovalStatus.TO_BE_APPROVED:
          return "Approve";
      }
      return '';
    } else {
      if (this.isSwapping) {
        return "Swapping";
      }
      if (this.isInsufficientBalance) {
        return `Insufficient ${this.fromToken?.symbol} balance`;
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
    const { key } = data;
    this.setMapStatus('swap', key, ApprovalStatus.TO_BE_APPROVED);
    this.updateSwapButtonCaption();
    if (this.swapBtn.rightIcon.visible)
      this.swapBtn.rightIcon.visible = false;
    await this.handleAddRoute();
  }
  private isButtonLoading() {
    if (this.isApproveButtonShown) {
      return this.isApprovingRouter;
    }
    return this.isSwapping;
  }
  private isSwapButtonDisabled() {
    const warningMessageText = this.getWarningMessageText();
    return (this.state.isRpcWalletConnected() && (warningMessageText != '' && !this.isPriceImpactTooHigh));
  }

  private async onClickSwapButton() {
    if (!isClientWalletConnected()) {
      if (this.mdWallet) {
        await application.loadPackage('@scom/scom-wallet-modal', '*');
        this.mdWallet.networks = this.networks;
        this.mdWallet.wallets = this.wallets;
        // this.$eventBus.dispatch(EventId.ConnectWallet);
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

    const isApproveButtonShown = this.isApproveButtonShown;
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
      this.priceInfo = new PriceInfo();
      this.priceInfo.width = 'auto';
      this.priceInfo.height = 'auto';
      this.pnlPriceInfo.appendChild(this.priceInfo);
      this.priceInfo.onTogglePrice = this.onTogglePrice.bind(this);
    }
    this.priceInfo.Items = this.getPriceInfo();

    if (!this.priceInfo2) {
      this.priceInfo2 = new PriceInfo();
      this.priceInfo2.width = 'auto';
      this.priceInfo2.height = 'auto';
      this.priceInfo2.onTogglePrice = this.onTogglePrice.bind(this);
    }
    this.priceInfoContainer.appendChild(this.priceInfo2);
  }

  private showModalFees = () => {
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

  private closeModalFees = () => {
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

  isEmptyData(value: ISwapConfigUI) {
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
                    <i-panel class="token-box">
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
                  <i-panel class="toggle-reverse">
                    <i-icon id="toggleReverseImage" position="relative" width={32} height={32} class="icon-swap rounded-icon custom-ic--swap" name="arrows-alt-v" onClick={this.onRevertSwap.bind(this)} />
                  </i-panel>
                  <i-vstack gap={5} minWidth={230} width="calc(100% - 25px)">
                    <i-panel class="token-box" height="100%">
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
                <i-panel class="row-chain">
                  <i-image id="fromTokenImage" width="30px" height="30px" url="#" />
                  <i-label id="fromTokenLabel" class="token-name" caption=""></i-label>
                </i-panel>
                <i-label id="fromTokenValue" class="token-value" caption=" - "></i-label>
              </i-hstack>
              <i-icon name="arrow-down" class="arrow-down custom-icon--fill" width={28} height={28} />
              <i-hstack class="mb-1" verticalAlignment='center' horizontalAlignment='start'>
                <i-panel class="row-chain">
                  <i-image id="toTokenImage" width="30px" height="30px" url="#" />
                  <i-label id="toTokenLabel" class="token-name" caption=""></i-label>
                </i-panel>
                <i-label id="toTokenValue" class="token-value text-primary bold" caption=" - "></i-label>
              </i-hstack>
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
                      class="btn-os btn-submit"
                      onClick={() => this.closeModalFees()}
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
                    class="btn-os btn-submit text-center"
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
