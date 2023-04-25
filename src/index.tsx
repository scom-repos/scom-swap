import { Module, Panel, Icon, Button, Label, VStack, Image, Container, Range, IEventBus, application, customModule, Modal, Input, observable, HStack, Control, customElements, ControlElement, IDataSchema, Styles } from '@ijstech/components';
import { BigNumber, Wallet } from '@ijstech/eth-wallet';
import Assets from './assets';
import './index.css';
import {
  getChainId,
  isExpertMode,
  getSlippageTolerance,
  isWalletConnected,
  switchNetwork,
  getWalletProvider,
  getMatchNetworks,
  setDataFromSCConfig,
  setProviderList,
  getProviderByKey,
  getNetworkInfo,
  getEmbedderCommissionFee,
  getProxyAddress,
  getIPFSGatewayUrl,
  WalletPlugin,
  getSupportedTokens
} from "./store/index";
import { tokenStore, assets as tokenAssets } from '@scom/scom-token-list';

import {
  getAllRoutesData,
  executeSwap,
  getApprovalModelAction,
  setApprovalModalSpenderAddress,
  debounce,
  getCommissionAmount,
  getCurrentCommissions
} from './swap-utils/index'

import {
  ITokenObject,
  formatNumber,
  ApprovalStatus,
  EventId,
  IERC20ApprovalAction,
  IExtendedNetwork,
  limitDecimals,
  isInvalidInput,
  PageBlock,
  IProvider,
  uniqWith,
  ISwapConfigUI,
  IProviderUI,
  Category,
  ICommissionInfo,
  INetworkConfig
} from './global/index';

import { PriceInfo } from './price-info/index';
import { TokenSelection } from './token-selection/index';
import { Result } from './result/index';
import { ExpertModeSettings } from './expert-mode-settings/index'
import { TransactionSettings } from './transaction-settings/index'
import Config from './config/index';
import scconfig from './scconfig.json';
import ScomWalletModal, {IWalletPlugin} from '@scom/scom-wallet-modal';
import ScomDappContainer from '@scom/scom-dapp-container'


const Theme = Styles.Theme.ThemeVars;
const priceImpactTooHighMsg = 'Price Impact Too High. If you want to bypass this check, please turn on Expert Mode';
const defaultInput = '1';
type StatusMapType = 'approve' | 'swap';

interface ScomSwapElement extends ControlElement {
  category: Category;
  providers: IProviderUI[];
  tokens?: ITokenObject[];
  defaultChainId: number;
  networks: INetworkConfig[];
  wallets: IWalletPlugin[];
  showHeader?: boolean;
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
export default class ScomSwap extends Module implements PageBlock {
  private _oldData: ISwapConfigUI = {
    category: 'fixed-pair',
    providers: [],
    tokens: [],
    defaultChainId: 0,
    wallets: [],
    networks: []
  };
  private _data: ISwapConfigUI = {
    category: 'fixed-pair',
    providers: [],
    tokens: [],
    defaultChainId: 0,
    wallets: [],
    networks: []
  };
  private oldTag: any = {};
  tag: any = {};
  defaultEdit: boolean = true

  private swapComponent: Panel;
  private swapContainer: Container;
  private isInited: boolean = false;

  private payContainer: Panel;
  private receiveContainer: Panel;
  private payBalance: Label;
  private receiveBalance: Label;
  private firstTokenSelection: TokenSelection;
  private secondTokenSelection: TokenSelection;
  private payCol: VStack;
  private receiveCol: VStack;
  private listRouting: Panel;
  private toggleRoutes: Panel;
  private routeFound: Label;
  private swapModal: Modal;
  private priceInfo: PriceInfo;
  private priceInfo2: PriceInfo;
  // private detailsFeeInfo: PriceInfo
  private priceInfoContainer: Panel;
  private fromTokenImage: Image;
  private fromTokenLabel: Label;
  private fromTokenValue: Label;
  private toTokenImage: Image;
  private toTokenLabel: Label;
  private toTokenValue: Label;
  private payOrReceiveValue: Label;
  private payOrReceiveToken: Label;
  private routingContainer: Panel;
  private openswapResult: Result;
  private fromSlider: Range;
  private maxButton: Button;
  private swapBtn: Button;
  // private iconList: Panel;
  private actionSetting: Panel;
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
  // private checkHasWallet: boolean;
  // private availableMarkets: any;
  private currentChainId: number;
  private supportedChainIds: number[];
  private swapButtonStatusMap: any;
  private approveButtonStatusMap: any;
  private _lastUpdated: number = 0;
  private lbLastUpdated: Label;
  private timer: any;
  private $eventBus: IEventBus;
  private lbEstimate: Label;
  private lbPayOrReceive: Label;
  private approvalModelAction: IERC20ApprovalAction;

  // Cross Chain
  private toggleReverseImage: Image;
  private oldSupportedChainList: IExtendedNetwork[] = [];
  private supportedChainList: IExtendedNetwork[] = [];
  private srcChainLabel: Label;
  private srcChainList: Panel;
  private desChainLabel: Label;
  private desChainList: Panel;
  private srcChain: IExtendedNetwork | undefined;
  private desChain: IExtendedNetwork | undefined;
  private targetChainId: number | undefined;
  private srcChainFirstPanel: Panel;
  private targetChainFirstPanel: Panel;
  private swapModalConfirmBtn: Button;
  private modalFees: Modal;
  private feesInfo: VStack;
  private lbReminderRejected: Label;
  private showCaption: Label;
  private showIcon: Icon;

  private transactionModal: TransactionSettings;
  private expertModal: ExpertModeSettings;
  private networkErrModal: Modal;
  private supportedNetworksElm: VStack;
  private configDApp: Config;
  private contractAddress: string;

  static async create(options?: ScomSwapElement, parent?: Container){
    let self = new this(parent, options);
    await self.ready();
    return self;
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

  get tokens() {
    return this._data.tokens ?? [];
  }
  set tokens(value: ITokenObject[]) {
    this._data.tokens = value;
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

  getEmbedderActions() {
    const propertiesSchema: IDataSchema = {
      type: "object",
      properties: {
        category: {
          type: "string",
          required: true,
          enum: [
            "fixed-pair",
            "aggregator"
          ]
        },
        providers: {
          type: "array",
          required: true,
          items: {
            type: "object",
            properties: {
              caption: {
                type: "string",
                required: true
              },
              image: {
                type: "string",
                required: true
              },
              key: {
                type: "string",
                required: true
              },
              dexId: {
                type: "number"
              },
              chainId: {
                type: "number",
                enum: [1, 56, 137, 250, 97, 80001, 43113, 43114],
                required: true
              },
              factoryAddress: {
                type: "string",
                required: true
              },
              routerAddress: {
                type: "string",
                required: true
              },
              fromToken: {
                type: "string",
                title: "From Token (Fixed pair)"
              },
              toToken: {
                type: "string",
                title: "To Token (Fixed pair)"
              },
              tradeFee: {
                type: "object",
                properties: {
                  fee: {
                    type: "string",
                    required: true
                  },
                  base: {
                    type: "string",
                    required: true
                  }
                }
              }
            }
          }
        }
      }
    }

    const themeSchema: IDataSchema = {
      type: 'object',
      properties: {
        "dark": {
          type: 'object',
          properties: {
            backgroundColor: {
              type: 'string',
              format: 'color',
              readOnly: true
            },
            fontColor: {
              type: 'string',
              format: 'color',
              readOnly: true
            },
            inputBackgroundColor: {
              type: 'string',
              format: 'color',
              readOnly: true
            },
            inputFontColor: {
              type: 'string',
              format: 'color',
              readOnly: true
            }
          }
        },
        "light": {
          type: 'object',
          properties: {
            backgroundColor: {
              type: 'string',
              format: 'color',
              readOnly: true
            },
            fontColor: {
              type: 'string',
              format: 'color',
              readOnly: true
            },
            inputBackgroundColor: {
              type: 'string',
              format: 'color',
              readOnly: true
            },
            inputFontColor: {
              type: 'string',
              format: 'color',
              readOnly: true
            }
          }
        }
      }
    }

    return this._getActions(propertiesSchema, themeSchema);
  }

  getActions() {
    const propertiesSchema: IDataSchema = {
      type: "object",
      properties: {
        category: {
          type: "string",
          required: true,
          enum: [
            "fixed-pair",
            "aggregator"
          ]
        },
        providers: {
          type: "array",
          required: true,
          items: {
            type: "object",
            properties: {
              caption: {
                type: "string",
                required: true
              },
              image: {
                type: "string",
                required: true
              },
              key: {
                type: "string",
                required: true
              },
              dexId: {
                type: "number"
              },
              chainId: {
                type: "number",
                enum: [1, 56, 137, 250, 97, 80001, 43113, 43114],
                required: true
              },
              factoryAddress: {
                type: "string",
                required: true
              },
              routerAddress: {
                type: "string",
                required: true
              },
              fromToken: {
                type: "string",
                title: "From Token (Fixed pair)"
              },
              toToken: {
                type: "string",
                title: "To Token (Fixed pair)"
              },
              tradeFee: {
                type: "object",
                properties: {
                  fee: {
                    type: "string",
                    required: true
                  },
                  base: {
                    type: "string",
                    required: true
                  }
                }
              }
            }
          }
        }
      }
    }

    const themeSchema: IDataSchema = {
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
            }
          }
        }
      }
    }

    return this._getActions(propertiesSchema, themeSchema);
  }

  _getActions(propertiesSchema: IDataSchema, themeSchema: IDataSchema) {
    const actions = [
      {
        name: 'Settings',
        icon: 'cog',
        command: (builder: any, userInputData: any) => {
          return {
            execute: async () => {
              this._oldData = {...this._data};
              this.configDApp.data = this._data;
              this.refreshUI();
            },
            undo: () => {
              this._data = {...this._oldData};
              this.configDApp.data = this._data;
              this.refreshUI();
            },
            redo: () => { }
          }
        },
        userInputDataSchema: propertiesSchema,
        userInputUISchema: {
          type: "Group",
          elements: [
            {
              type: "Control",
              scope: "#/properties/category",
              options: {
                detail: {
                  type: "HorizontalLayout"
                }
              }
            },
            {
              type: "Control",
              scope: "#/properties/providers",
              options: {
                detail: {
                  type: "VerticalLayout"
                }
              }
            }
          ]
        }
      },
      {
        name: 'Theme Settings',
        icon: 'palette',
        command: (builder: any, userInputData: any) => {
          return {
            execute: async () => {
              if (!userInputData) return;
              this.oldTag = { ...this.tag };
              this.setTag(userInputData);
              if (builder) builder.setTag(userInputData);
            },
            undo: () => {
              if (!userInputData) return;
              this.setTag(this.oldTag);
              if (builder) builder.setTag(this.oldTag);
            },
            redo: () => { }
          }
        },
        userInputDataSchema: themeSchema
      }
    ]
    return actions
  }

  getConfigurators() {
    let self = this;
    return [
      {
        name: 'Commissions',
        target: 'Embedders',
        elementName: 'i-scom-swap-config',
        getLinkParams: () => {
          const commissions = this._data.commissions || [];
          return {
            data: window.btoa(JSON.stringify(commissions))
          }
        },
        setLinkParams: async (params: any) => {
          if (params.data) {
            const decodedString = window.atob(params.data);
            const commissions = JSON.parse(decodedString);
            let resultingData = {
              ...self._data,
              commissions
            };
            await this.setData(resultingData);
          }
        },
        bindOnChanged: (element: Config, callback: (data: any) => Promise<void>) => {
          element.onCustomCommissionsChanged = async (data: any) => {
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
        }
      }
    ]
  }

  async getData() {
    return this._data;
  }

  async setData(value: ISwapConfigUI) {
    this._data = value;
    this.configDApp.data = value;
    this.updateContractAddress();
    await this.refreshUI();
    if (this.mdWallet) {
      this.mdWallet.networks = value.networks;
      this.mdWallet.wallets = value.wallets;
    }
  }

  async getTag() {
    return this.tag;
  }

  private updateTag(type: 'light'|'dark', value: any) {
    this.tag[type] = this.tag[type] ?? {};
    for (let prop in value) {
      if (value.hasOwnProperty(prop))
        this.tag[type][prop] = value[prop];
    }
  }

  async setTag(value: any) {
    const newValue = value || {};
    if (newValue.light) this.updateTag('light', newValue.light);
    if (newValue.dark) this.updateTag('dark', newValue.dark);
    if (this.dappContainer)
      this.dappContainer.setTag(this.tag);
    this.updateTheme();
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
  }

  private setProviders() {
    const providers = this.originalData?.providers || [];
    if (this.isFixedPair) {
      setProviderList([providers[0]]);
    } else {
      setProviderList(providers);
    }
  }

  updateContractAddress() {
    if (this.approvalModelAction) {
      if (getCurrentCommissions(this.commissions).length) {
        this.contractAddress = getProxyAddress();
      } else {
        this.contractAddress = '';
      }
      this.setApprovalSpenderAddress();
    }
  }

  // private isEmptyObject(obj: any): boolean {
  //   for (let prop in obj) {
  //     if (!obj[prop] && prop !== 'dexId') {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  // validate() {
  //   const data = this.cardConfig.data?.providers || [];
  //   if (!data || !data.length) return false;
  //   for (let item of data) {
  //     if (this.isEmptyObject(item)) {
  //       return false;
  //     }
  //     const contractInfo = item.contractInfo || {};
  //     const contractChainIds = Object.keys(contractInfo);
  //     if (!contractChainIds.length) {
  //       return false;
  //     }
  //     for (const chainId of contractChainIds) {
  //       const hasTradeFee = !this.isEmptyObject(contractInfo[chainId].tradeFee);
  //       if (!hasTradeFee || this.isEmptyObject(contractInfo[chainId])) {
  //         return false;
  //       }
  //     }
  //   }
  //   return true;
  // }

  private get isFixedPair() {
    return this._data?.category === 'fixed-pair';
  }

  private get originalData() {
    if (!this._data) return undefined;
    const { category, providers } = this._data;
    if (!providers.length) return undefined;
    let _providers: IProvider[] = [];
    if (this.isFixedPair) {
      const { key, caption, image, dexId } = providers[0];
      let defaultProvider: IProvider = {
        caption,
        image,
        key,
        dexId,
        contractInfo: {}
      };
      const arr = providers.filter(v => v.key === key);
      arr.forEach(v => {
        if (!defaultProvider.contractInfo[v.chainId]) {
          const { factoryAddress, routerAddress, tradeFee, fromToken, toToken } = v;
          defaultProvider.contractInfo[v.chainId] = {
            factoryAddress,
            routerAddress,
            tradeFee,
            fromToken,
            toToken
          }
        }
      });
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
        const { key, caption, image, dexId } = arr[0];
        let defaultProvider: IProvider = {
          caption,
          image,
          key,
          dexId,
          contractInfo: {}
        }
        arr.forEach(v => {
          const { factoryAddress, routerAddress, tradeFee } = v;
          if (!defaultProvider.contractInfo[v.chainId]) {
            defaultProvider.contractInfo[v.chainId] = {
              factoryAddress,
              routerAddress,
              tradeFee
            }
          }
        });
        _providers.push(defaultProvider);
      })
    }
    return { category, providers: _providers };
  }

  private async refreshUI() {
    this.setProviders();
    await this.initData();
    await this.onSetupPage(isWalletConnected());
  }

  constructor(parent?: Container, options?: any) {
    super(parent, options);
    setDataFromSCConfig(scconfig);
    this.fromInputValue = new BigNumber(0);
    this.toInputValue = new BigNumber(0);
    this.swapButtonStatusMap = {};
    this.approveButtonStatusMap = {};
    this.$eventBus = application.EventBus;
    this.registerEvent();
  }

  private registerEvent() {
    this.$eventBus.register(this, EventId.IsWalletConnected, this.onWalletConnect)
    this.$eventBus.register(this, EventId.IsWalletDisconnected, this.onWalletDisconnect)
    this.$eventBus.register(this, EventId.chainChanged, this.onChainChange)
    this.$eventBus.register(this, EventId.SlippageToleranceChanged, () => { this.priceInfo.Items = this.getPriceInfo() })
    this.$eventBus.register(this, EventId.ExpertModeChanged, () => {
      this.setSwapButtonText();
    });
  }

  onWalletConnect = async (connected: boolean) => {
    if (connected && (this.currentChainId == null || this.currentChainId == undefined)) {
      this.onChainChange();
    } else {
      if (this.originalData?.providers?.length) await this.onSetupPage(connected);
    }
  }

  onWalletDisconnect = async (connected: boolean) => {
    if (!connected) {
      //await this.handleAddRoute();
      //await this.updateBalance();
      await this.onSetupPage(connected);
    }
  }

  onChainChange = async () => {
    this.currentChainId = getChainId();
    if (this.currentChainId != null && this.currentChainId != undefined)
      this.swapBtn.visible = true;
    // this.availableMarkets = getAvailableMarkets() || [];
    this.updateContractAddress();
    if (this.originalData?.providers?.length) await this.onSetupPage(true);
    this.setSwapButtonText();
  }

  get supportedNetworks() {
    let providers: IProvider[] = [];
    if (this.originalData?.providers) {
      providers = this.isFixedPair ? [this.originalData.providers[0]] : this.originalData.providers;
    }
    let supportedNetworks = [];
    for (const provider of providers) {
      supportedNetworks.push(...Object.keys(provider.contractInfo));
    }
    return uniqWith(supportedNetworks, (cur: any, oth: any) => { return cur == oth });
  }

  get isApproveButtonShown(): boolean {
    const warningMessageText = this.getWarningMessageText();
    return warningMessageText === '' && this.approveButtonStatus !== ApprovalStatus.NONE
  }
  get isPriceImpactTooHigh(): boolean {
    const warningMessageText = this.getWarningMessageText();
    return this.record?.priceImpact > 15 && !isExpertMode() && warningMessageText === priceImpactTooHighMsg
  }
  get isInsufficientBalance(): boolean {
    if (!this.fromToken || !this.record) return false;
    const balance = this.getBalance(this.fromToken);
    return this.maxSold.gt(balance);
  }
  get maxSold() {
    if (!this.fromToken || !this.record) return new BigNumber(0)
    const commissionAmount = getCommissionAmount(this.commissions, new BigNumber(this.record.fromAmount));
    const amountWithCommission = this.record.fromAmount.plus(commissionAmount);
    if (!this.isFrom) return new BigNumber(amountWithCommission);
    return new BigNumber(this.getMinReceivedMaxSold() || amountWithCommission);
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
  get lastUpdated(): number {
    return this._lastUpdated
  }
  set lastUpdated(value: number) {
    this._lastUpdated = value;
    if (this.lbLastUpdated) {
      this.lbLastUpdated.caption = `Last updated ${this._lastUpdated}(s) ago`;
    }
  }
  get isValidToken(): boolean {
    if (this.fromToken?.symbol && this.toToken?.symbol) {
      return true;
    }
    return false;
  }

  private redirectToken = () => {
    let queryRouter: any = {
      chainId: this.currentChainId,
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
    this.targetChainId = queryRouter.toChainId;
  };

  private fixedNumber = (value: BigNumber | string | number) => {
    const val = typeof value === 'object' ? value : new BigNumber(value);
    if (val.isNaN()) return '0';
    let formatted = '';
    if (val.gte(1)) {
      formatted = val.toNumber().toLocaleString('en-US', { maximumFractionDigits: 4 });
    } else {
      formatted = val.toNumber().toLocaleString('en-US', { maximumSignificantDigits: 4 });
    }
    return formatted.replace(/,/g, '');
  }

  private setFixedPairData() {
    const providers = this.originalData?.providers;
    if (providers && providers.length) {
      const contractInfo = (providers[0].contractInfo || {})[this.currentChainId];
      if (contractInfo) {
        const fromTokenAddress = contractInfo.fromToken || '';
        const toTokenAddress = contractInfo.toToken || '';
        const fromToken = fromTokenAddress.toLowerCase().startsWith('0x') ? fromTokenAddress.toLowerCase() : fromTokenAddress;
        const toToken = toTokenAddress.toLowerCase().startsWith('0x') ? toTokenAddress.toLowerCase() : toTokenAddress;
        this.fromToken = tokenStore.tokenMap[fromToken];
        this.toToken = tokenStore.tokenMap[toToken];
        this.fromTokenSymbol = this.fromToken?.symbol;
        this.toTokenSymbol = this.toToken?.symbol;
        this.fromInputValue = new BigNumber(defaultInput);
        this.onUpdateToken(this.fromToken, true);
        this.onUpdateToken(this.toToken, false);
        this.firstTokenSelection.token = this.fromToken;
        this.secondTokenSelection.token = this.toToken;
        this.toggleReverseImage.classList.add('cursor-default');
      } else {
        this.resetUI();
      }
    }
  }

  private resetUI() {
    this.record = undefined;
    this.fromToken = undefined;
    this.toToken = undefined;
    this.fromTokenSymbol = '';
    this.toTokenSymbol = '';
    this.fromInputValue = new BigNumber(defaultInput);
    this.payBalance.caption = `Balance: 0`;
    this.receiveBalance.caption = `Balance: 0`;
    this.initRoutes();
    this.onUpdateSliderValue(0);
    const pay = this.payCol.children[0] as Input;
    if (pay) {
      pay.value = '-';
    }
    const receive = this.receiveCol.children[0] as Input;
    if (receive) {
      receive.value = '-';
    }
    this.firstTokenSelection.token = undefined;
    this.secondTokenSelection.token = undefined;
    this.firstTokenSelection.disableSelect = true;
    this.secondTokenSelection.disableSelect = true;
    this.toggleReverseImage.enabled = false;
    this.toggleReverseImage.classList.add('cursor-default');
    clearInterval(this.timer);
    this.lastUpdated = 0;
    this.swapBtn.visible = false;
    this.onRenderPriceInfo();
  }

  private onSetupPage = async (connected: boolean, _chainId?: number) => {
    const data: any = { 
      defaultChainId: this.defaultChainId, 
      wallets: this.wallets, 
      networks: this.networks, 
      showHeader: this.showHeader 
    }
    if (this.dappContainer?.setData) this.dappContainer.setData(data)
    this.currentChainId = _chainId ? _chainId : getChainId();
    tokenStore.updateTokenMapData();
    if (connected) {
      await tokenStore.updateAllTokenBalances();
    }
    // if (this.supportedNetworks.every((v: string | number) => v != this.chainId)) {
    //   this.showNetworkErrModal();
    //   this.resetUI();
    //   this.onRenderChainList();
    //   return;
    // }
    this.closeNetworkErrModal();
    if (this.isFixedPair) {
      this.setFixedPairData();
    }
    this.toggleReverseImage.enabled = !this.isFixedPair;
    this.firstTokenSelection.disableSelect = this.isFixedPair;
    this.secondTokenSelection.disableSelect = this.isFixedPair;

    this.setSwapButtonText();
    await this.updateBalance();
    await this.onRenderChainList();
    const input = this.receiveCol.children[0] as Input;
    if (input) {
      input.readOnly = false;
    }
    if (!this.isFixedPair) {
      this.toggleReverseImage.classList.remove('cursor-default');
    }
    if (this.fromInputValue.isGreaterThanOrEqualTo(0)) {
      this.onUpdateEstimatedPosition(false, true);
      const input = this.payCol.children[0] as Input;
      if (input) {
        input.value = this.fixedNumber(this.fromInputValue);
      }
    } else if (this.toInputValue.isGreaterThanOrEqualTo(0)) {
      this.onUpdateEstimatedPosition(true, true);
      const input = this.receiveCol.children[0] as Input;
      if (input) {
        input.value = this.fixedNumber(this.toInputValue);
      }
    }
    this.firstTokenSelection.tokenDataListProp = getSupportedTokens(this._data.tokens || [], this.currentChainId);
    this.setTargetTokenList();

    //if (connected) {
    this.actionSetting?.classList.remove("hidden");
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.lastUpdated++;
    }, 1000)
    this.lastUpdated = 0;
    if (!this.record)
      this.swapBtn.enabled = false;
    // this.onRenderIconList();
    this.onRenderPriceInfo();
    this.redirectToken();
    await this.handleAddRoute();
  }

  private async initTokenSelection() {
    await this.firstTokenSelection.ready();
    await this.secondTokenSelection.ready();
    this.firstTokenSelection.disableSelect = false;
    this.firstTokenSelection.onSelectToken = (token: ITokenObject) => this.onSelectToken(token, true);
    this.firstTokenSelection.isBtnMaxShown = false;
    this.firstTokenSelection.isCommonShown = true;
    this.secondTokenSelection.disableSelect = false;
    this.secondTokenSelection.onSelectToken = (token: ITokenObject) => this.onSelectToken(token, false);
    this.secondTokenSelection.isBtnMaxShown = false;
    this.secondTokenSelection.isCommonShown = true;
  }
  async initApprovalModelAction() {
    this.approvalModelAction = await getApprovalModelAction({
      sender: this,
      payAction: this.onSubmit,
      onToBeApproved: async (token: ITokenObject) => {
        this.swapBtn.enabled = true;
      },
      onToBePaid: async (token: ITokenObject) => {
      },
      onApproving: async (token: ITokenObject, receipt?: string, data?: any) => {
        this.setMapStatus('approve', data.key, ApprovalStatus.APPROVING);
        this.showResultMessage(this.openswapResult, 'success', receipt);
        if (this.isApprovingRouter && !this.swapBtn.rightIcon.visible)
          this.swapBtn.rightIcon.visible = true;
      },
      onApproved: async (token: ITokenObject, data?: any) => {
        this.setMapStatus('approve', data.key, ApprovalStatus.NONE);
        if (this.swapBtn.rightIcon.visible)
          this.swapBtn.rightIcon.visible = false;
        await this.handleAddRoute();
      },
      onApprovingError: async (token: ITokenObject, err: Error) => {
        this.showResultMessage(this.openswapResult, 'error', err);
        if (this.swapBtn.rightIcon.visible)
          this.swapBtn.rightIcon.visible = false;
      },
      onPaying: async (receipt?: string, data?: any) => {
        this.showResultMessage(this.openswapResult, 'success', receipt);
        this.onSwapConfirming(data.key);
      },
      onPaid: async (data?: any) => {
        application.EventBus.dispatch(EventId.Paid);
        this.onSwapConfirmed({ key: data.key });
        await this.updateBalance();
      },
      onPayingError: async (err: Error) => {
        this.showResultMessage(this.openswapResult, 'error', err);
      }
    })
  }

  async onRevertSwap() {
    this.onUpdateEstimatedPosition(!this.isEstimated('from'), true);
    [this.fromToken, this.toToken] = [this.toToken, this.fromToken];
    [this.fromInputValue, this.toInputValue] = [this.toInputValue, this.fromInputValue];
    [this.payBalance.caption, this.receiveBalance.caption] = [this.receiveBalance.caption, this.payBalance.caption];
    [this.fromTokenSymbol, this.toTokenSymbol] = [this.toTokenSymbol, this.fromTokenSymbol];
    this.firstTokenSelection.token = this.fromToken;
    this.secondTokenSelection.token = this.toToken;

    this.payCol.clearInnerHTML();
    this.receiveCol.clearInnerHTML();
    this.payCol.appendChild(<i-input class="token-input" width="100%" placeholder="0.0" inputType="number" value={this.getInputValue(true)} onKeyUp={this.onTokenInputChange.bind(this)} />);
    this.receiveCol.appendChild(<i-input class="token-input" width="100%" placeholder="0.0" inputType="number" value={this.getInputValue(false)} onKeyUp={this.onTokenInputChange.bind(this)} />);
    this.redirectToken();

    this.onUpdateSliderValue();
    await this.handleAddRoute();
  }

  tipFormatter(value: any) {
    return `${Number(value).toFixed()}%`;
  }

  private totalAmount = () => {
    const commissionAmount = getCommissionAmount(this.commissions, this.fromInputValue);
    return this.fromInputValue.plus(commissionAmount);
  }

  setupCrossChainPopup() {
    const arrows = this.swapModal.querySelectorAll('i-icon.arrow-down');
    arrows.forEach((arrow: Element) => {
      arrow.classList.remove('arrow-down--chain');
    });
    this.lbReminderRejected?.classList.add('hidden');
    this.srcChainFirstPanel.classList.add('hidden');
    this.targetChainFirstPanel.classList.add('hidden');
  }

  handleSwapPopup() {
    if (!this.record) return;
    this.setupCrossChainPopup();
    const slippageTolerance = getSlippageTolerance();
    this.fromTokenImage.url = tokenAssets.tokenPath(this.fromToken, this.currentChainId);
    this.fromTokenLabel.caption = this.fromToken?.symbol ?? '';
    this.fromTokenValue.caption = formatNumber(this.totalAmount(), 4);
    this.toTokenImage.url = tokenAssets.tokenPath(this.toToken, this.currentChainId);
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
  doSwap() {
    this.approvalModelAction.doPayAction(this.record);
  }
  getMinReceivedMaxSold = (): number | null => {
    const slippageTolerance = getSlippageTolerance();
    if (!slippageTolerance) return null;
    if (this.isFrom) {
      const poolAmount = new BigNumber(this.record?.amountIn);
      if (poolAmount.isZero()) return null;
      const commissionAmount = getCommissionAmount(this.commissions, poolAmount);
      const minReceivedMaxSold = poolAmount.plus(commissionAmount).times(1 + slippageTolerance / 100).toNumber();
      return minReceivedMaxSold;
    } else {
      const poolAmount = new BigNumber(this.record?.amountOut);
      if (poolAmount.isZero()) return null;
      const minReceivedMaxSold = poolAmount.times(1 - slippageTolerance / 100).toNumber();
      return minReceivedMaxSold;
    }
  }

  onCloseSwapModal() {
    this.swapModal.visible = false;
  }

  onUpdateToken(token: ITokenObject, isFrom: boolean) {
    if (!token) return;
    const balance = this.getBalance(token);
    if (isFrom) {
      this.fromToken = token;
      const enabled = !this.isMaxDisabled();
      this.fromSlider.enabled = enabled;
      this.maxButton.enabled = enabled;
      /*if (this.toToken?.symbol === token.symbol && !this.isCrossChain) {
        this.initRoutes();
        this.toToken = undefined;
        this.toInputValue = new BigNumber(0);
        this.receiveBalance.caption = 'Balance: 0';
        this.secondTokenSelection.token = undefined;
        this.updateTokenInput(false, true);
        this.priceInfo.Items = this.getPriceInfo();
      }*/
      if (this.fromInputValue.gt(0)) {
        const fromInput = this.payCol.getElementsByTagName('I-INPUT')?.[0] as Input;
        // const toInput = this.receiveCol.getElementsByTagName('I-INPUT')?.[0] as Input;
        const limit = limitDecimals(this.fromInputValue.toFixed(), token.decimals || 18);
        if (!this.fromInputValue.eq(limit)) {
          if (fromInput) {
            fromInput.value = limit;
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
      /*if (this.fromToken?.symbol === token.symbol && !this.isCrossChain) {
        this.initRoutes();
        this.fromToken = undefined;
        this.fromSlider.enabled = false;
        this.onUpdateSliderValue(0);
        this.maxButton.enabled = false;
        this.fromInputValue = new BigNumber(0);
        this.payBalance.caption = 'Balance: 0';
        this.firstTokenSelection.token = undefined;
        this.updateTokenInput(true, true);
        this.priceInfo.Items = this.getPriceInfo();
      }*/
      if (this.toInputValue.gt(0)) {
        const toInput = this.receiveCol.getElementsByTagName('I-INPUT')?.[0] as Input;
        const limit = limitDecimals(this.toInputValue.toFixed(), token.decimals || 18);
        if (!this.toInputValue.eq(limit)) {
          if (toInput) {
            toInput.value = limit;
          }
          this.toInputValue = new BigNumber(limit);
        }
      } else if (this.toInputValue.isZero()) {
        this.onUpdateEstimatedPosition(false);
      }
      this.receiveBalance.caption = `Balance: ${formatNumber(balance, 4)} ${token.symbol}`;
      this.updateTokenInput(false);
    }
    this.onUpdateSliderValue();
  }
  async onSelectToken(token: ITokenObject, isFrom: boolean) {
    this.firstTokenSelection.enabled = false;
    this.secondTokenSelection.enabled = false;
    if (token.isNew && isWalletConnected()) {
      await tokenStore.updateAllTokenBalances();
      this.allTokenBalancesMap = tokenStore.tokenBalances;
    }
    this.onUpdateToken(token, isFrom);
    this.redirectToken();
    await this.handleAddRoute();
    this.firstTokenSelection.enabled = true;
    this.secondTokenSelection.enabled = true;
  }

  setApprovalSpenderAddress() {
    const item = this.record;
    if (!item) return;
    // if (this.isCrossChain && item.contractAddress){
    //   setApprovalModalSpenderAddress(Market.HYBRID, item.contractAddress)
    // } else if (item?.provider && this.availableMarkets.includes(item.provider)) {
    //   const market = ProviderConfigMap[item.key].marketCode;
    //   setApprovalModalSpenderAddress(market);
    // } else {
    //   setApprovalModalSpenderAddress(Market.HYBRID);
    // }
    const market =  getProviderByKey(item.provider)?.key || '';
    if (this.approvalModelAction) {
      if (getCurrentCommissions(this.commissions).length) {
        this.contractAddress = getProxyAddress();
        setApprovalModalSpenderAddress(market, this.contractAddress);
      } else {
        setApprovalModalSpenderAddress(market);
      }
    }
  }

  getInputValue(isFrom: boolean) {
    const token = isFrom ? this.fromToken : this.toToken;
    const value = isFrom ? this.fromInputValue : this.toInputValue;
    if (!value || value.isNaN()) return '';
    return limitDecimals(value.toFixed(), token?.decimals || 18);
  }

  async updateTokenInput(isFrom: boolean, init?: boolean) {
    const _col = isFrom ? this.payCol : this.receiveCol;
    const label = _col.querySelector('i-label') as Node;
    if (init && !label) {
      _col.innerHTML = '';
      const label = await Label.create();
      label.caption = " - ";
      label.classList.add("text-value");
      label.classList.add("text-right");
      _col.appendChild(label);
    }
    else if (!init && label) {
      _col.removeChild(label);
      const input: Input = await Input.create();
      input.width = '100%';
      input.placeholder = '0.0';
      input.inputType = 'number';
      input.value = this.getInputValue(isFrom);
      input.onKeyUp = this.onTokenInputChange.bind(this);
      input.classList.add("token-input");
      _col.appendChild(input);
    }
  }

  addToMetamask(event: Event, token: ITokenObject) {
    event.stopPropagation();
    return window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: token.address,
          symbol: token.symbol,
          decimals: token.decimals,
          image: token.logoURI
        },
      },
    });
  }

  toggleShowRoutes(source: Control) {
    this.listRouting.classList.toggle('active');
    const items = this.listRouting.querySelectorAll('i-panel.pnl-routing');
    if (this.listRouting.classList.contains('active')) {
      items.forEach((elm: Element) => {
        elm.classList.remove('hidden');
      });
      this.showIcon.name = 'angle-up'
      this.showCaption.caption = "Show Less";
    } else {
      items.forEach((elm: Element, idx: number) => {
        if (idx != 0) {
          elm.classList.add('hidden');
        }
      });
      this.showIcon.name = 'angle-down'
      this.showCaption.caption = "Show More";
    }
  }
  async onSelectRouteItem(source: Control, item: any) {
    if (source.classList.contains("routing-selected")) return;
    const selected = this.listRouting.querySelector(".routing-selected");
    selected?.classList.remove("routing-selected");
    source.classList.add("routing-selected");

    if (this.isFrom) {
      if (this.payCol.children) {
        let balanceValue = item.amountIn;
        const input = this.payCol.children[0] as Input;
        input.value = this.fixedNumber(balanceValue);
        this.fromInputValue = typeof balanceValue !== 'object' ? new BigNumber(balanceValue) : balanceValue;
      }
    } else {
      if (this.receiveCol.children) {
        let balanceValue = item.amountOut;
        const input = this.receiveCol.children[0] as Input;
        input.value = this.fixedNumber(balanceValue);
        this.toInputValue = typeof balanceValue !== 'object' ? new BigNumber(balanceValue) : balanceValue;
      }
    }

    this.swapBtn.visible = true;
    this.record = item;
    this.setSwapButtonText();
    const enabled = !this.isSwapButtonDisabled();
    this.swapBtn.enabled = enabled;
    const isButtonLoading = this.isButtonLoading();
    if (this.swapBtn.rightIcon.visible != isButtonLoading) {
      this.swapBtn.rightIcon.visible = isButtonLoading;
    }
    this.priceInfo.Items = this.getPriceInfo();
  }
  onTokenInputChange(source: Control) {
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
        this.onUpdateSliderValue();
      }

    }, 1000);
  }
  resetValuesByInput() {
    this.onUpdateSliderValue(0);
    this.initRoutes();
    this.priceInfo.Items = this.getPriceInfo();
    this.fromInputValue = new BigNumber(0);
    this.toInputValue = new BigNumber(0);
    this.redirectToken();
  }
  initRoutes() {
    this.listRouting.innerHTML = '';
    this.routeFound.caption = '0 Route(s) Found';
    this.toggleRoutes.classList.add('hidden');
    this.record = null;
    this.isPriceToggled = false;
    this.swapBtn.visible = false;
  }
  async handleAddRoute() {
    if (!this.fromToken || !this.toToken || !(this.fromInputValue.gt(0) || this.toInputValue.gt(0))) return;
    this.initRoutes();
    this.disableSelectChain(true);
    this.disableSelectChain(true, true);
    let listRouting: any[] = [];
    const useAPI = this._data.category === 'aggregator';
    this.updateContractAddress();
    listRouting = await getAllRoutesData(this.fromToken, this.toToken, this.fromInputValue, this.toInputValue, this.isFrom, useAPI, this.commissions);
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

    this.lastUpdated = 0;
    this.disableSelectChain(false);
    this.disableSelectChain(false, true);
    this.swapButtonStatusMap = {};
    this.approveButtonStatusMap = {};
    this.initRoutes();
    const pricePercent = this.getPricePercent(listRouting, false)
    this.listRouting.innerHTML = '';
    let nodeItems: HTMLElement[] = [];
    for (let index = 0; index < listRouting.length; index++) {
      const option = listRouting[index];
      const approveButtonStatus = option.isApproveButtonShown ? ApprovalStatus.TO_BE_APPROVED : ApprovalStatus.NONE;
      this.approveButtonStatusMap[option.key] = approveButtonStatus;
      this.swapButtonStatusMap[option.key] = ApprovalStatus.TO_BE_APPROVED;
      nodeItems.push(await this.addRoute(option, index, pricePercent));
    }
    this.listRouting.clearInnerHTML();
    this.listRouting.append(...nodeItems);
    this.routingContainer.visible = listRouting.length > 1;
    this.routeFound.caption = listRouting.length + ' Route(s) Found';
    if (listRouting.length > 1)
      this.toggleRoutes.classList.remove('hidden');
    else if (!listRouting.length) {
      this.priceInfo.Items = this.getPriceInfo();
      if (this.isEstimated('to')) {
        const input = this.receiveCol.children[0] as Input;
        this.toInputValue = new BigNumber(0);
        input.value = '-';
      } else {
        const input = this.payCol.children[0] as Input;
        this.fromInputValue = new BigNumber(0);
        input.value = '-';
      }
    }
    if (this.record) {
      this.setApprovalSpenderAddress();    
      const commissionFee = getEmbedderCommissionFee();
      const commissionAmount = getCommissionAmount(this.commissions, this.record.fromAmount);
      const total = this.record?.fromAmount ? new BigNumber(this.record.fromAmount).plus(commissionAmount) : new BigNumber(0);
      this.lbYouPayTitle.caption = commissionAmount.gt(0) ? `You Pay (incl. ${new BigNumber(commissionFee).times(100)}% fee)` : `You Pay`;
      this.lbYouPayValue.caption = `${formatNumber(total)} ${this.fromToken?.symbol}`;
    }
  }
  getProviderCaption(provider: string | IProvider, caption: string) {
    let providerObj: any;
    if (typeof provider === 'string') {
      providerObj = provider ? getProviderByKey(provider) : null;
      if (!providerObj) return caption;
    } else {
      providerObj = provider;
    }
    const tooltip = JSON.stringify({ content: providerObj.caption })
    let imageUrl = providerObj.image;
    if (imageUrl?.startsWith('ipfs://')) {
      const ipfsGatewayUrl = getIPFSGatewayUrl();
      imageUrl = imageUrl.replace('ipfs://', ipfsGatewayUrl);
    }

    let tokenIcon = `<i-image tooltip='${tooltip}' url="${imageUrl}" width="24" height="24"
      class="inline-block" fallbackUrl="${tokenAssets.fallbackUrl}"></i-image>`;
    return `${tokenIcon}`;
  }
  async addRoute(item: any, index: number, pricePercent: any) {
    // const isHybrid = ProviderConfigMap[item.provider].marketCode === Market.HYBRID;
    const isBestSmartRoute = item.bestSmartRoute && item.bestSmartRoute.length; // isHybrid && item.bestSmartRoute && item.bestSmartRoute.length;
    const providerByKey = getProviderByKey(item.provider);
    const providerConfig = isBestSmartRoute ? item.bestSmartRoute : providerByKey ? [providerByKey] : [];

    let balanceValue = this.isFrom ? item.amountIn : item.amountOut;
    const swapBalance = formatNumber(balanceValue, 4);

    const routingMainPanel = new Panel();
    routingMainPanel.classList.add("flex", "pnl-routing");
    if (!this.listRouting.classList.contains('active') && index != 0) {
      routingMainPanel.classList.add("hidden");
    }
    routingMainPanel.onClick = (source: Control) => this.onSelectRouteItem(source, item);

    const routingMainRow = new HStack();
    routingMainRow.width = "100%";
    routingMainRow.horizontalAlignment = "space-between";
    routingMainRow.verticalAlignment = "center";
    routingMainPanel.appendChild(routingMainRow);

    // Left Panel: marketing, best routes
    const leftPanel = new Panel();
    routingMainRow.appendChild(leftPanel);

    const marketRow = new HStack();
    marketRow.width = "100%";
    marketRow.verticalAlignment = "center";
    marketRow.wrap = "wrap";
    routingMainRow.horizontalAlignment = "start";
    routingMainRow.verticalAlignment = "center";

    for (let index = 0; index < providerConfig.length; index++) {
      const config = providerConfig[index];
      const label = await Label.create();
      label.caption = this.getProviderCaption(config?.provider || config, config.caption);
      label.classList.add("routing-name");

      marketRow.appendChild(label);
      if (index !== providerConfig.length - 1) {
        const icon = new Icon(marketRow, {
          width: 14,
          height: 14,
          fill: "#ffffff8c",
          name: "angle-right"
        });
        marketRow.appendChild(icon);
      }
    };

    if (providerConfig.length == 1) {
      const label = await Label.create()
      label.caption = providerConfig[0].caption;
      marketRow.appendChild(label)
    }

    leftPanel.appendChild(marketRow);

    const routePanel = new Panel();
    const routeRow = new HStack();
    routeRow.width = "100%";
    routeRow.verticalAlignment = "center";
    routeRow.wrap = "wrap";

    for (let index = 0; index < item.bestRoute.length; index++) {
      const route = item.bestRoute[index];
      const label = await Label.create();
      label.caption = route.symbol;
      label.classList.add("routing-caption");
      routeRow.appendChild(label);
      if (index !== item.bestRoute.length - 1) {
        const icon = new Icon(routeRow, {
          width: 14,
          height: 14,
          fill: "#ffffff8c",
          name: "arrow-right"
        });
        icon.classList.add("route-icon");
        routeRow.appendChild(icon);
      }
    }

    routePanel.appendChild(routeRow);
    leftPanel.appendChild(routePanel);

    //Right Panel: balance, price percent
    const rightPanel = new Panel();
    routingMainPanel.appendChild(rightPanel);

    const balancePanel = new Panel();
    balancePanel.classList.add("text-right");
    const balanceLabel = await Label.create();
    balanceLabel.caption = swapBalance;
    balanceLabel.classList.add("ml-auto");
    balanceLabel.classList.add("balanceValue");
    balancePanel.appendChild(balanceLabel);
    rightPanel.appendChild(balancePanel);

    if (index == 0) {
      if (pricePercent) {
        const pricePercentPanel = new Panel();
        pricePercentPanel.classList.add("text-right");
        const pricePercentLabel = await Label.create();
        pricePercentLabel.caption = pricePercent;
        pricePercentLabel.classList.add("ml-auto");
        pricePercentLabel.classList.add("price-percent");
        pricePercentPanel.appendChild(pricePercentLabel);
        rightPanel.appendChild(pricePercentPanel);
      }
      const bestPriceLabel = await Label.create();
      bestPriceLabel.caption = "Best Price";
      bestPriceLabel.classList.add("best-price");
      routingMainPanel.appendChild(bestPriceLabel);

      this.onSelectRouteItem(routingMainPanel, item);
    }

    return routingMainPanel;
  }
  getPricePercent(routes: any, isFrom: boolean) {
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

  sortToken = (a: any, b: any) => {
    return b.value - a.value;
  };
  // Price Info
  onTogglePrice(priceInfo: PriceInfo) {
    this.isPriceToggled = !this.isPriceToggled;
    priceInfo.Items = this.getPriceInfo();
  }
  getRate() {
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
  getPriceImpact() {
    const value = this.record?.priceImpact;
    if (value || value == 0) {
      return `${formatNumber(value)}%`;
    }
    return '-';
  }
  getMinimumReceived() {
    const value = this.getMinReceivedMaxSold();
    if (value || value == 0) {
      if (this.isFrom) {
        return `${formatNumber(value)} ${this.fromToken?.symbol}`;
      }
      return `${formatNumber(value)} ${this.toToken?.symbol}`;
    }
    return '-';
  }
  getTradeFeeExactAmount() {
    const tradeFee = this.record?.fromAmount.times(this.record?.tradeFee).toNumber();
    if (tradeFee || tradeFee == 0) {
      return `${formatNumber(tradeFee)} ${this.fromToken?.symbol}`;
    }
    return '-';
  }
  getFeeDetails() {
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
  getPriceInfo() {
    const rate = this.getRate();
    const priceImpact = this.getPriceImpact();
    const minimumReceived = this.getMinimumReceived();
    const tradeFeeExactAmount = this.getTradeFeeExactAmount();
    const commissionFee = getEmbedderCommissionFee();
    const commissionAmount = this.record ? getCommissionAmount(this.commissions, new BigNumber(this.record.fromAmount || 0)) : new BigNumber(0);

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
      },
      {
        title: "Commission Fee",
        value: this.isValidToken ? `${new BigNumber(commissionFee).times(100)}% (${formatNumber(commissionAmount)} ${this.fromToken?.symbol})` : '-',
        isHidden: !getCurrentCommissions(this.commissions).length
      }
    ];
    return info.filter((f: any) => !f.isHidden);
  }
  onUpdateEstimatedPosition = (isFrom: boolean, reverseRouting: boolean = false) => {
    if (this.isFrom != isFrom) {
      this.isFrom = isFrom;

      if (reverseRouting) {
        const tokenBoxInput = isFrom ? this.payContainer.childNodes[1] : this.receiveContainer.childNodes[1];
        tokenBoxInput.appendChild(this.routingContainer);
      }
    }
  }
  isEstimated = (tokenPosition: string, strict = false) => {
    if (tokenPosition === 'from') {
      return strict ? this.isFrom && !this.fromInputValue.isZero() : this.isFrom;
    } else if (tokenPosition === 'to') {
      return strict ? !this.isFrom && !this.toInputValue.isZero() : !this.isFrom;
    } else {
      return false;
    }
  };
  getBalance(token?: ITokenObject) {
    if (token && this.allTokenBalancesMap) {
      const address = token.address || '';
      let balance = address ? this.allTokenBalancesMap[address.toLowerCase()] ?? 0 : this.allTokenBalancesMap[token.symbol] || 0;
      return balance
    }
    return 0;
  }
  async updateBalance() {
    if (isWalletConnected()) await tokenStore.updateAllTokenBalances();
    this.allTokenBalancesMap = isWalletConnected() ? tokenStore.tokenBalances : [];
    if (this.fromToken) {
      const balance = this.getBalance(this.fromToken);
      this.payBalance.caption = `Balance: ${formatNumber(balance, 4)} ${this.fromToken.symbol}`;
    }
    if (this.toToken) {
      const balance = this.getBalance(this.toToken);
      this.receiveBalance.caption = `Balance: ${formatNumber(balance, 4)} ${this.toToken.symbol}`;
    }
    const enabled = !this.isMaxDisabled();
    this.fromSlider.enabled = enabled;
    this.maxButton.enabled = enabled;
  }

  private setSwapButtonText() {
    if (this.swapBtn && this.swapBtn.hasChildNodes()) {
      this.swapBtn.caption = this.getSwapButtonText();
    }
  }

  getSwapButtonText() {
    const isApproveButtonShown = this.isApproveButtonShown;
    if (!isWalletConnected()) {
      return "Connect Wallet";
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
  getWarningMessageText() {
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
    if (this.record.priceImpact > 15 && !isExpertMode()) {
      return priceImpactTooHighMsg;
    }
    return '';
  }
  setMapStatus(type: StatusMapType, key: string, status: ApprovalStatus) {
    let mapStatus = {} as any;
    if (type === 'approve') {
      mapStatus = this.approveButtonStatusMap;
      mapStatus[key] = status;
      this.approveButtonStatusMap = {
        ...mapStatus
      };
    } else {
      mapStatus = this.swapButtonStatusMap;
      mapStatus[key] = status;
      this.swapButtonStatusMap = {
        ...mapStatus
      };
    }
    this.setSwapButtonText();
  }
  onSwapConfirming = (key: any) => {
    this.setMapStatus('swap', key, ApprovalStatus.APPROVING);
    if (!this.swapBtn.rightIcon.visible)
      this.swapBtn.rightIcon.visible = true;
  }
  onSwapConfirmed = async (data: any) => {
    const { key } = data;
    this.setMapStatus('swap', key, ApprovalStatus.TO_BE_APPROVED);
    if (this.swapBtn.rightIcon.visible)
      this.swapBtn.rightIcon.visible = false;
    await this.handleAddRoute();
  }
  isButtonLoading() {
    if (this.isApproveButtonShown) {
      return this.isApprovingRouter;
    }
    return this.isSwapping;
  }
  isSwapButtonDisabled() {
    const warningMessageText = this.getWarningMessageText();
    return (isWalletConnected() && (warningMessageText != '' && !this.isPriceImpactTooHigh));
  }

  onClickSwapButton() {
    if (!isWalletConnected()) {
      // this.$eventBus.dispatch(EventId.ConnectWallet);
      this.mdWallet.showModal();
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
  onSubmit = async () => {
    try {
      this.swapModal.visible = false;
      this.showResultMessage(this.openswapResult, 'warning', `Swapping ${formatNumber(this.totalAmount(), 4)} ${this.fromToken?.symbol} to ${formatNumber(this.toInputValue, 4)} ${this.toToken?.symbol}`);
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
        commissions: this.commissions
      }

      const { error } = await executeSwap(swapData);
      if (error) {
        this.showResultMessage(this.openswapResult, 'error', error as any);
      }
    } catch (error) {
      console.error(error);
    }
  }
  onApproveRouterMax = () => {
    this.showResultMessage(this.openswapResult, 'warning', 'Approving');
    this.setApprovalSpenderAddress();
    this.approvalModelAction.doApproveAction(this.fromToken as ITokenObject, this.totalAmount().toString(), this.record);
  }
  onSetMaxBalance = async (value?: number) => {
    if (!this.fromToken?.symbol) return;
    this.isFrom = false;
    const address = this.fromToken?.address || this.fromToken?.symbol;
    let balance = this.getBalance(this.fromToken);
    let inputVal = new BigNumber(balance);
    if (!address) {
      inputVal = new BigNumber(0);
    } else {
      const commissionAmount = getCommissionAmount(this.commissions, new BigNumber(balance));
      if (commissionAmount.gt(0)) {
        const totalFee = new BigNumber(balance).plus(commissionAmount).dividedBy(balance);
        inputVal = inputVal.dividedBy(totalFee);
      }
    }
    if (value == 0 || value) {
      inputVal = inputVal.multipliedBy(value).dividedBy(100);
    } else {
      this.onUpdateSliderValue(100);
    }
    if (inputVal.eq(this.fromInputValue)) return;
    this.fromInputValue = inputVal;
    const input = this.payCol.children[0] as Input;
    input.value = limitDecimals(this.fromInputValue.toFixed(), this.fromToken?.decimals || 18);
    if (this.receiveContainer && this.receiveContainer.childNodes[1]) {
      this.receiveContainer.childNodes[1].appendChild(this.routingContainer);
      this.redirectToken();
    }
    await this.handleAddRoute();
  }
  isMaxDisabled = (): boolean => {
    const address = this.fromToken?.address || this.fromToken?.symbol;
    let balance = this.getBalance(this.fromToken);
    return !address || balance <= 0
  }
  onSliderChange(source: Control, event: Event) {
    const value = (source as Range).value;
    this.onSetMaxBalance(value);
  }
  onUpdateSliderValue(value?: number) {
    if (value != null) {
      this.fromSlider.value = value;
      return;
    }
    const balance = this.getBalance(this.fromToken);
    const maxBal = new BigNumber(balance);
    // TODO: < 0.0001
    if (maxBal.lte(0)) {
      this.fromSlider.value = 0;
      return;
    }
    const input = this.payCol.children[0] as Input;
    const val = new BigNumber(input?.value).dividedBy(maxBal).multipliedBy(100).toNumber();
    if (isNaN(val)) return;
    this.fromSlider.value = val > 100 ? 100 : val;
  }
  async onRenderIconList() {
    // this.iconList.innerHTML = '';
    // this.availableMarkets.forEach(async (item: any) => {
    //   const config = getProviderList().find(p => p.key === item)  // ProviderConfigMap[item];
    //   if (config) {
    //     const image = new Image();
    //     image.url = config.image;
    //     image.tooltip.content = config.key;
    //     image.classList.add('icon-item');
    //     this.iconList.appendChild(image);
    //   }
    // })
  }
  onRenderPriceInfo() {
    if (!this.priceInfo) {
      this.priceInfo = new PriceInfo();
      this.priceInfo.width = 'auto';
      this.priceInfo.height = 'auto';
      this.swapContainer.appendChild(this.priceInfo);
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

  private onRefresh = async (source: Control) => {
    source.enabled = false;
    await this.handleAddRoute();
    source.enabled = true;
  }

  private onSetting = () => {
    this.transactionModal.showModal();
  }

  get isMetaMask() {
    return getWalletProvider() === WalletPlugin.MetaMask;
  }

  getSupportedChainList = () => {
    const list = getMatchNetworks({ isDisabled: false });
    this.supportedChainList = list;
  };

  disableSelectChain = (disabled: boolean, isDes?: boolean) => {
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

  selectSourceChain = async (obj: IExtendedNetwork, img?: Image) => {
    if ((this.srcChain && this.srcChain.chainId != obj.chainId) || !this.srcChain) {
      await switchNetwork(obj.chainId);
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

  setTargetTokenList = (isDisabled?: boolean) => {
    const srcChainId = this.srcChain?.chainId || this.currentChainId;
    if (this.secondTokenSelection.targetChainId != srcChainId) {
      this.secondTokenSelection.targetChainId = srcChainId;
    }
    this.secondTokenSelection.tokenDataListProp = getSupportedTokens(this._data.tokens || [], srcChainId);
  }

  onSourceChainChanged = () => {
    const selected = this.srcChainList.querySelector('.icon-selected');
    if (selected) {
      selected.classList.remove('icon-selected');
    }
    this.getSupportedChainList();
    if (!this.currentChainId)
      this.currentChainId = this.supportedChainList[0].chainId;
    const currentNetwork = this.supportedChainList.find((f: IExtendedNetwork) => f.chainId == this.currentChainId);
    this.srcChain = currentNetwork;
    this.srcChainLabel.caption = this.srcChain?.chainName || '-';
    const img = this.srcChainList.querySelector(`[network-name="${currentNetwork?.chainName}"]`);
    if (img) {
      img.classList.add('icon-selected');
    }
  }

  onSelectSourceChain = async (obj: IExtendedNetwork, img?: Image) => {
    if (this.isMetaMask || !isWalletConnected()) {
      await this.selectSourceChain(obj, img);
      this.currentChainId = obj.chainId;
      await this.onSetupPage(true, this.currentChainId);
    }
  }

  initChainIcon = (network: IExtendedNetwork) => {
    const img = new Image();
    img.url = network.image;
    img.tooltip.content = network.chainName;
    img.classList.add('chain-icon');
    img.setAttribute('data-tooltip', network.chainName); // for query
    if (!this.isMetaMask) {
      img.tooltip.content = `Openswap supports this network ${network.chainName} (${network.chainId}), please switch network in the connected wallet.`;
      img.classList.add('icon-disabled');
    }
    img.setAttribute('network-name', network.chainName);
    img.setAttribute('chain-id', `${network.chainId}`);
    img.onClick = () => this.onSelectSourceChain(network, img);
    this.srcChainList.appendChild(img);
  };

  updateSrcChainIconList = () => {
    const listElm = this.srcChainList.querySelectorAll('i-image');
    for (const elm of listElm) {
      const networkName = elm.getAttribute('network-name');
      const chainId = elm.getAttribute('chain-id');
      const tooltip = this.isMetaMask ? networkName : `Openswap supports this network ${networkName} (${chainId}), please switch network in the connected wallet.`
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

  onRenderChainList = async () => {
    this.oldSupportedChainList = this.supportedChainList;
    this.getSupportedChainList();
    this.srcChainList.innerHTML = '';
    this.desChainList.innerHTML = '';
    this.srcChain = undefined;
    this.desChain = undefined;
    this.supportedChainList.forEach((network: IExtendedNetwork) => {
      this.initChainIcon(network);
    });
  };

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

  private showResultMessage = (result: Result, status: 'warning' | 'success' | 'error', content?: string | Error) => {
    if (!result) return;
    let params: any = { status };
    if (status === 'success') {
      params.txtHash = content;
    } else {
      params.content = content;
    }
    result.message = { ...params };
    result.showModal();
  }

  private initExpertModal() {
    this.expertModal = new ExpertModeSettings();
    this.swapComponent.appendChild(this.expertModal);
    this.$eventBus.register(this, EventId.ShowExpertModal, () => {
      this.expertModal.showModal();
    })
  }

  private showNetworkErrModal() {
    this.supportedNetworksElm.clearInnerHTML();
    if (!this.supportedNetworks.length) {
      this.supportedNetworksElm.appendChild(<i-label caption={`No networks are supported. Please configure the swap!`} font={{ size: '16px' }} />)
    } else if (this.supportedChainList.some(v => v.chainId == this.currentChainId)) {
      const network = getNetworkInfo(this.currentChainId);
      this.supportedNetworksElm.appendChild(<i-label caption={`The ${network.chainName} (${network.chainId}) network has not been configured for the swap!`} font={{ size: '16px' }} />)
    } else {
      this.supportedNetworksElm.appendChild(<i-label caption={`We only support the following ${this.supportedNetworks.length > 1 ? 'networks' : 'network'}:`} font={{ size: '16px' }} />)
      for (const chainId of this.supportedNetworks) {
        const network = getNetworkInfo(chainId);
        if (network) {
          this.supportedNetworksElm.appendChild(
            <i-label font={{ bold: true, size: '16px' }} caption={`${network.chainName} (${network.chainId})`} />
          )
        }
      }
    }
    this.networkErrModal.visible = true;
  }

  private closeNetworkErrModal() {
    this.networkErrModal.visible = false;
  }

  private async initData() {
    if (!this.isInited) {
      await this.initTokenSelection();
      await this.initApprovalModelAction();
      this.isInited = true;
    }
  }

  async init() {
    this.isReadyCallbackQueued = true;
    this.currentChainId = getChainId();
  // setTokenStore();
    // this.availableMarkets = getAvailableMarkets() || [];
    super.init();
    this.setSwapButtonText();
    this.openswapResult = new Result();
    this.swapComponent.appendChild(this.openswapResult);
    this.transactionModal = new TransactionSettings();
    this.swapComponent.appendChild(this.transactionModal);
    this.initExpertModal();
    const category = this.getAttribute('category', true, "fixed-pair");
    const providers = this.getAttribute('providers', true, []);
    const commissions = this.getAttribute('commissions', true, []);
    const tokens = this.getAttribute('tokens', true, []);
    const defaultChainId = this.getAttribute('defaultChainId', true);
    const networks = this.getAttribute('networks', true);
    const wallets = this.getAttribute('wallets', true);
    const showHeader = this.getAttribute('showHeader', true);

    this.updateContractAddress();
    await this.setData({category, providers, commissions, tokens, defaultChainId, networks, wallets, showHeader});
    this.isReadyCallbackQueued = false;
    this.executeReadyCallback();
  }

  render() {
    return (
      <i-scom-dapp-container id="dappContainer">
        <i-panel id="swapComponent" background={{ color: Theme.background.main }}>
          <i-panel class="pageblock-swap">
            <i-panel id="swapContainer">
              <i-panel class="content-swap">
                <i-hstack 
                  horizontalAlignment="space-between" 
                  verticalAlignment="center" 
                  padding={{bottom: '0.5rem'}} 
                  border={{bottom: {color: Theme.text.primary, width: '1px', style: 'solid'}}}
                >
                  <i-label caption='Swap' font={{ size: '1.3rem' }}></i-label>
                  <i-hstack wrap="wrap" horizontalAlignment="space-between" verticalAlignment="center">
                    <i-panel id="iconList" class="icon-list">
                    </i-panel>
                    <i-panel id="actionSetting" class="action-setting hidden">
                      <i-label id="lbLastUpdated"></i-label>
                      <i-icon width={26} height={26} class="rounded-icon" name="sync-alt" fill="white" onClick={this.onRefresh}></i-icon>
                      <i-icon width={26} height={26} class="rounded-icon" name="cog" fill="white" onClick={this.onSetting}></i-icon>
                    </i-panel>
                  </i-hstack>   
                </i-hstack>           
                <i-vstack id="srcChainBox" class="my-2 w-100" visible={false}>
                  <i-hstack verticalAlignment="center" horizontalAlignment="space-between">
                    <i-label class="text--grey" caption="Current Network" />
                    <i-label id="srcChainLabel" caption="-" />
                  </i-hstack>
                  <i-panel id="srcChainList" class="icon-list" maxWidth="100%" />
                </i-vstack>
                <i-range
                  id="fromSlider"
                  class="custom--slider"
                  width='100%'
                  min={0}
                  max={100}
                  tooltipFormatter={this.tipFormatter}
                  tooltipVisible
                  stepDots={5}
                  onChanged={debounce(this.onSliderChange.bind(this), 500, this)}
                />
                <i-hstack class="my-2" verticalAlignment="center" horizontalAlignment="space-between">
                  <i-label caption="You Buy" font={{ size: '1.125rem' }}></i-label>
                </i-hstack>             
                <i-panel class="token-box">
                  <i-vstack id="payContainer" class="input--token-container" >
                    <i-hstack class="balance-info" horizontalAlignment="space-between" verticalAlignment="center" width="100%">
                      <i-label id="payBalance" class="text--grey ml-auto" caption="Balance: 0"></i-label>
                      <i-button id="maxButton" class="btn-max" caption="Max" enabled={false} onClick={() => this.onSetMaxBalance()}></i-button>
                    </i-hstack>
                    <i-panel class="bg-box" width="100%">
                      <i-hstack class="input--token-box" verticalAlignment="center" horizontalAlignment="space-between" width="100%">
                        <i-vstack>
                          <i-scom-swap-token-selection disableSelect={true} id="firstTokenSelection"></i-scom-swap-token-selection>
                        </i-vstack>
                        <i-vstack id="payCol">
                          <i-label class="text-value text-right" caption=" - "></i-label>
                        </i-vstack>
                      </i-hstack>
                    </i-panel>
                  </i-vstack>
                </i-panel>
                <i-hstack horizontalAlignment="space-between">
                  <i-label id='lbYouPayTitle' caption="You Pay" font={{ size: '1.125rem' }}></i-label>
                  <i-label id='lbYouPayValue' caption='0' font={{ size: '1.125rem' }}></i-label>
                </i-hstack>
                <i-panel class="toggle-reverse">
                  <i-image id="toggleReverseImage" width={32} height={32} class="icon-swap rounded-icon" url={Assets.fullPath("img/swap/icon-swap.png")} onClick={this.onRevertSwap.bind(this)} />
                </i-panel>
                <i-panel class="token-box">
                  <i-vstack id="receiveContainer" class="input--token-container" >
                    <i-vstack class="balance-info" width="100%">
                      <i-vstack width="100%">
                        <i-label caption="You Receive" font={{ size: '1.125rem' }}></i-label>
                      </i-vstack>
                      <i-vstack id="desChainBox" visible={false} class="my-2 w-100">
                        <i-hstack verticalAlignment="center" horizontalAlignment="space-between">
                          <i-label class="text--grey" caption="Selected Destination Chain" />
                          <i-label id="desChainLabel" class="ml-auto" caption="-" />
                        </i-hstack>
                        <i-panel id="desChainList" class="icon-list" maxWidth="100%" />
                      </i-vstack>
                      <i-vstack class="text-right" width="100%">
                        <i-label id="receiveBalance" class="text--grey ml-auto" caption="Balance: 0"></i-label>
                      </i-vstack>
                    </i-vstack>
                    <i-panel class="bg-box" width="100%">
                      <i-hstack class="input--token-box" verticalAlignment="center" horizontalAlignment="space-between" width="100%">
                        <i-vstack>
                          <i-scom-swap-token-selection disableSelect={true} id="secondTokenSelection"></i-scom-swap-token-selection>
                        </i-vstack>
                        <i-vstack id="receiveCol">
                          <i-label class="text-value text-right" caption=" - "></i-label>
                        </i-vstack>
                      </i-hstack>
                      <i-panel id="routingContainer" class="routing-container">
                        <i-panel id="listRouting"></i-panel>
                        <i-hstack horizontalAlignment='space-between' verticalAlignment='center'>
                          <i-label id="routeFound" class="total-routes text--grey" caption="0 Route(s) Found"></i-label>
                          <i-panel id="toggleRoutes" class="toggle-routes hidden" onClick={this.toggleShowRoutes}>
                            <i-label id="showCaption" caption="Show More"></i-label>
                            <i-icon id="showIcon" width={30} height={30} fill={Theme.text.primary} name="angle-down"></i-icon>
                          </i-panel>
                        </i-hstack>
                      </i-panel>
                    </i-panel>
                  </i-vstack>
                </i-panel>
              </i-panel>
              <i-panel class="swap-btn-container" width="100%">
                <i-button
                  id="swapBtn" class="btn-swap btn-os" height={67}
                  visible={false}
                  rightIcon={{ spin: true, visible: false }}
                  onClick={this.onClickSwapButton.bind(this)}
                ></i-button>
              </i-panel>
            </i-panel>
            <i-modal id="swapModal" class="custom-modal" title="Confirm Swap" closeIcon={{ name: 'times' }}>
              <i-hstack verticalAlignment='center' horizontalAlignment='start'>
                <i-panel id="srcChainFirstPanel" class="row-chain">
                  <i-image id="srcChainTokenImage" width="30px" height="30px" url="#" />
                  <i-label id="srcChainTokenLabel" class="token-name" caption="" />
                  <i-icon name="minus" fill={Theme.text.primary} width={28} height={10} />
                </i-panel>
                <i-panel class="row-chain">
                  <i-image id="fromTokenImage" width="30px" height="30px" url="#" />
                  <i-label id="fromTokenLabel" class="token-name" caption=""></i-label>
                </i-panel>
                <i-label id="fromTokenValue" class="token-value" caption=" - "></i-label>
              </i-hstack>
              <i-icon name="arrow-down" class="arrow-down" fill={Theme.text.primary} width={28} height={28} />
              <i-hstack class="mb-1" verticalAlignment='center' horizontalAlignment='start'>
                <i-panel id="targetChainFirstPanel" class="row-chain">
                  <i-image id="targetChainTokenImage" width="30px" height="30px" url="#" />
                  <i-label id="targetChainTokenLabel" class="token-name" caption="" />
                  <i-icon name="minus" fill={Theme.text.primary} width={28} height={10} />
                </i-panel>
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
              <i-panel id="priceInfoContainer" class="bg-box mt-1 mb-1" width="100%">
              </i-panel>
              <i-label id="lbReminderRejected" class="flex" margin={{ top: 8, bottom: 16 }} />
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
          <i-scom-swap-config id="configDApp" visible={false} />
          <i-scom-wallet-modal
            id="mdWallet"
            wallets={[]}
          ></i-scom-wallet-modal>
        </i-panel>
      </i-scom-dapp-container>
    )
  }
}
