import { Module, Panel, Icon, Button, Label, VStack, Image, Container, Range, IEventBus, application, customModule, Modal, Input, observable, HStack, Control } from '@ijstech/components';
import { BigNumber, Wallet, WalletPlugin } from '@ijstech/eth-wallet';
import '@ijstech/eth-contract';
import Assets from '@swap/assets';
import './index.css';
import {
  ChainNativeTokenByChainId,
  getChainId,
  isExpertMode,
  projectNativeTokenSymbol,
  getSlippageTolerance,
  isWalletConnected,
  hasWallet,
  switchNetwork,
  getTokenIconPath,
  getWalletProvider,
  BridgeVaultGroupList,
  getSiteEnv,
  getMatchNetworks,
  getOpenSwapToken,
  connectWallet,
  hasMetaMask,
  getDefaultChainId,
  setDataFromSCConfig,
  setCurrentChainId,
  InfuraId,
  Networks,
  setProviderList,
  getProviderByKey,
  tokenStore,
  setTokenStore,
  getNetworkInfo,
} from "@swap/store";

import {
  getAllRoutesData,
  executeSwap,
  getApprovalModelAction,
  setApprovalModalSpenderAddress,
  createBridgeVaultOrder,
  getAvailableRouteOptions,
  registerPairsByAddress,
  debounce,
  getOraclePriceMap,
  bridgeVaultConstantMap
} from '@swap/swap-utils'

import {
  ITokenObject,
  formatNumber,
  ApprovalStatus,
  EventId,
  IERC20ApprovalAction,
  INetwork,
  limitDecimals,
  isInvalidInput,
  SITE_ENV,
  registerSendTxEvents,
  PageBlock,
  IProvider,
  ISwapConfig,
  uniqWith,
  ISwapConfigUI,
  IProviderUI
} from '@swap/global';

import {
  getTargetChainTokenInfoObj,
  ICrossChainRouteResult,
  getBridgeVault,
  getBondsInBridgeVault,
} from '@swap/crosschain-utils';

import { PriceInfo } from '@swap/price-info';
import { TokenSelection } from '@swap/token-selection';
import { Result } from '@swap/result';
import { ExpertModeSettings } from '@swap/expert-mode-settings'
import { TransactionSettings } from '@swap/transaction-settings'

const priceImpactTooHighMsg = 'Price Impact Too High. If you want to bypass this check, please turn on Expert Mode';
const defaultInput = '1';
type StatusMapType = 'register' | 'approve' | 'swap';

declare const window: any;

@customModule
export class SwapBlock extends Module implements PageBlock {
  private _oldData: ISwapConfigUI;
  private _data: ISwapConfigUI;
  private oldTag: any;
  tag: any
  defaultEdit: boolean = true
  readonly onConfirm: () => Promise<void>
  readonly onDiscard: () => Promise<void>
  readonly onEdit: () => Promise<void>

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
  private chainId: number;
  private fallbackUrl: string = Assets.fullPath('img/tokens/Custom.png');
  private swapButtonStatusMap: any;
  private approveButtonStatusMap: any;
  private registerPairButtonStatusMap: any;
  private _lastUpdated: number = 0;
  private lbLastUpdated: Label;
  private timer: any;
  private $eventBus: IEventBus;
  private lbEstimate: Label;
  private lbPayOrReceive: Label;
  private approvalModelAction: IERC20ApprovalAction;
  private registerPairModal: Modal;
  private registerPanel: Panel;
  private registerBtn: Button;
  private registerPairsParams: any;

  // Cross Chain
  private crossChainApprovalStatus: ApprovalStatus = ApprovalStatus.NONE;
  private toggleReverseImage: Image;
  private oldSupportedChainList: INetwork[] = [];
  private supportedChainList: INetwork[] = [];
  private targetChainTokenBalances: any;
  private targetChainTokenMap: any;
  private minSwapHintLabel: Label;
  private srcChainBox: Panel;
  private desChainBox: Panel;
  private srcChainLabel: Label;
  private srcChainList: Panel;
  private desChainLabel: Label;
  private desChainList: Panel;
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
  private swapModalConfirmBtn: Button;
  private crossChainVaultInfoVstack: VStack;
  private modalViewOrder: Modal;
  private modalFees: Modal;
  private feesInfo: VStack;
  private lbReminderRejected: Label;
  private showCaption: Label;
  private showIcon: Icon;

  private transactionModal: TransactionSettings;
  private expertModal: ExpertModeSettings;
  private networkErrModal: Modal;
  private supportedNetworksElm: VStack;

  getActions() {
    const actions = [
      {
        name: 'Settings',
        icon: 'cog',
        command: (builder: any, userInputData: any) => {
          return {
            execute: async () => {
              this._oldData = this._data;
              this.refreshUI();
            },
            undo: () => {
              this._data = this._oldData;
              this.refreshUI();
            },
            redo: () => { }
          }
        },
        userInputDataSchema: {
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
      },
      // {
      //   name: 'Theme Settings',
      //   icon: 'palette',
      //   command: (builder: any, userInputData: any) => {
      //     return {
      //       execute: async () => {
      //         if (userInputData) {
      //           this.oldTag = this.tag;
      //           this.setTag(userInputData);
      //           if (builder) builder.setTag(userInputData);
      //         }
      //       },
      //       undo: () => {
      //         if (userInputData) {
      //           this.setTag(this.oldTag);
      //           if (builder) builder.setTag(this.oldTag);
      //         }
      //       },
      //       redo: () => { }
      //     }
      //   },
      //   userInputDataSchema: {
      //     type: 'object',
      //     properties: {
      //       backgroundColor: {
      //         type: 'string',
      //         format: 'color'
      //       },
      //       fontColor: {
      //         type: 'string',
      //         format: 'color'
      //       },
      //       inputBackgroundColor: {
      //         type: 'string',
      //         format: 'color'
      //       },
      //       inputFontColor: {
      //         type: 'string',
      //         format: 'color'
      //       }
      //     }
      //   }
      // }
    ]
    return actions;
  }

  async getData() {
    return this._data;
  }

  async setData(value: ISwapConfigUI) {
    this._data = value;
    this.setProviders();
    await this.initData();
    this.onSetupPage(isWalletConnected());
  }

  async getTag() {
    return this.tag;
  }

  async setTag(value: any) {
    this.tag = value;
    this.updateTheme();
  }

  private updateTheme() {
    if (this.tag) {
      const { fontColor, backgroundColor, inputFontColor, inputBackgroundColor } = this.tag;
      if (fontColor)
        this.style.setProperty('--text-primary', fontColor);
      if (backgroundColor)
        this.style.setProperty('--background-main', backgroundColor);
      if (inputFontColor)
        this.style.setProperty('--input-font_color', inputFontColor);
      if (inputBackgroundColor)
        this.style.setProperty('--input-background', inputBackgroundColor);
    }
  }

  async confirm() {
    this.setProviders();
    if (this._data?.providers?.length) {
      await this.initData();
      this.onSetupPage(isWalletConnected());
    }
  }

  async discard() {
    // this.swapContainer.visible = false;
  }

  async edit() {
    // this.swapContainer.visible = false;
  }

  async config() { }

  private setProviders() {
    const providers = this.originalData?.providers || [];
    if (this.isFixedPair) {
      setProviderList([providers[0]]);
    } else {
      setProviderList(providers);
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
    this.onSetupPage(isWalletConnected());
  }

  constructor(parent?: Container, options?: any) {
    super(parent, options);
    this.fromInputValue = new BigNumber(0);
    this.toInputValue = new BigNumber(0);
    this.swapButtonStatusMap = {};
    this.approveButtonStatusMap = {};
    this.registerPairButtonStatusMap = {};
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
    if (connected && (this.chainId == null || this.chainId == undefined)) {
      this.onChainChange();
    } else {
      if (this.originalData?.providers?.length) this.onSetupPage(connected);
    }
  }

  onWalletDisconnect = async (connected: boolean) => {
    if (!connected) {
      //await this.handleAddRoute();
      //await this.updateBalance();
      await this.onSetupPage(connected);
    }
  }

  onChainChange = () => {
    this.chainId = getChainId();
    if (this.chainId != null && this.chainId != undefined)
      this.swapBtn.classList.remove('hidden');
    // this.availableMarkets = getAvailableMarkets() || [];
    if (this.originalData?.providers?.length) this.onSetupPage(true);
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
    if (this.isCrossChain) return false;
    const warningMessageText = this.getWarningMessageText();
    return this.record?.priceImpact > 15 && !isExpertMode() && warningMessageText === priceImpactTooHighMsg
  }
  get isInsufficientBalance(): boolean {
    if (!this.fromToken && !this.record) return false;
    const balance = this.getBalance(this.fromToken);
    return this.record?.fromAmount && this.record.fromAmount.gt(balance)
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
  get targetTokenMap() {
    return this.isCrossChain ? this.targetChainTokenMap : tokenStore.tokenMap;
  };

  private initWalletData = async () => {
    let accountsChangedEventHandler = async (account: string) => {
      tokenStore.updateTokenMapData();
    }
    let chainChangedEventHandler = async (hexChainId: number) => {
      tokenStore.updateTokenMapData();
    }
    let selectedProvider = localStorage.getItem('walletProvider') as WalletPlugin;
    if (!selectedProvider && hasMetaMask()) {
      selectedProvider = WalletPlugin.MetaMask;
    }
    const isValidProvider = Object.values(WalletPlugin).includes(selectedProvider);
    if (!Wallet.getClientInstance().chainId) {
      Wallet.getClientInstance().chainId = getDefaultChainId();
    }
    if (hasWallet() && isValidProvider) {
      await connectWallet(selectedProvider, {
        'accountsChanged': accountsChangedEventHandler,
        'chainChanged': chainChangedEventHandler
      });
    }
  }



  getAddressFromUrl = () => {
    const wHref = window.location.href;
    const startIdx = wHref.indexOf('?');
    const search = wHref.substring(startIdx, wHref.length);
    const queryString = search;
    const urlParams = new URLSearchParams(queryString);
    this.fromTokenSymbol = urlParams.get('fromToken') || '';
    this.toTokenSymbol = urlParams.get('toToken') || '';
    const targetId = urlParams.get('toChainId');
    this.targetChainId = targetId ? new BigNumber(targetId).toNumber() : undefined;
    if (!this.isCrossChain) {
      this.chainId = getChainId();
      const fromAmount = urlParams.get("fromAmount") ? (urlParams.get("fromAmount") || "") : this.targetChainId && this.chainId !== this.targetChainId ? "1" : "";
      const toAmount = urlParams.get('toAmount') || '';
      this.fromInputValue = new BigNumber(fromAmount).abs();
      this.toInputValue = new BigNumber(toAmount).abs();
    }
  }

  private redirectToken = () => {
    let queryRouter: any = {
      chainId: this.chainId,
      toChainId: this.desChain?.chainId || this.targetChainId,
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
    // if (!window.location.hash.includes('#/swap')) return;
    // const queryString = new URLSearchParams(queryRouter).toString();
    // const newURL = window.location.protocol + "//" + window.location.host + '/' + location.hash.split("?")[0] + '?' + queryString;
    // window.history.pushState({ path: newURL }, '', newURL);
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
      const contractInfo = (providers[0].contractInfo || {})[this.chainId];
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
    this.swapBtn.classList.add('hidden');
    this.onRenderPriceInfo();
  }

  private onSetupPage = async (connected: boolean) => {
    // this.getAddressFromUrl();
    this.chainId = getChainId();
    if (this.supportedNetworks.every((v: string | number) => v != this.chainId)) {
      this.showNetworkErrModal();
      this.resetUI();
      return;
    }
    if (this.isFixedPair) {
      this.setFixedPairData();
    }
    this.toggleReverseImage.enabled = !this.isFixedPair;
    this.firstTokenSelection.disableSelect = this.isFixedPair;
    this.secondTokenSelection.disableSelect = this.isFixedPair;
    // this.checkHasWallet = hasWallet();
    this.setSwapButtonText();
    await this.updateBalance();
    await this.onRenderChainList();
    const input = this.receiveCol.children[0] as Input;
    if (this.isCrossChain) {
      this.initRoutes();
      this.toInputValue = new BigNumber(0);
      if (input) {
        input.value = '-';
        input.readOnly = true;
      }
      this.toggleReverseImage.classList.add('cursor-default');
      if (this.isEstimated('from')) {
        this.onUpdateEstimatedPosition(false, true);
      }
    } else {
      if (input) {
        input.readOnly = false;
      }
      if (!this.isFixedPair) {
        this.toggleReverseImage.classList.remove('cursor-default');
      }
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
    if (!this.isFixedPair) {
      this.setDefaultToken();
    }
    // TODO Only allow Oswap to be selected in Mainnet Oswap2Oswap Pilot launch, BSC <-> AVAX, should be changed when any2any is ready
    if (!this.isFixedPair && (this.chainId === 56 && this.desChain?.chainId === 43114 || this.chainId === 43114 && this.desChain?.chainId === 56)) {
      // Use hardcode map for Oswap2Oswap pilot launch
      const fromOswapTokenObj = getOpenSwapToken(this.chainId)!;
      this.firstTokenSelection.tokenDataListProp = [{
        ...fromOswapTokenObj,
        status: false,
        balance: fromOswapTokenObj.address ? this.allTokenBalancesMap[fromOswapTokenObj.address.toLowerCase()] ?? 0 : 0,
      }];
      this.onUpdateToken(fromOswapTokenObj, true);
      this.firstTokenSelection.token = fromOswapTokenObj;
      this.fromToken = fromOswapTokenObj;
      // Update from Token description
      const fromBalance = this.getBalance(this.fromToken);
      this.payBalance.caption = `Balance: ${formatNumber(fromBalance, 4)} ${this.fromToken.symbol}`;

      // Update Mainnet ToTokenSelection
      await this.updateTargetChainBalances();
      const toOswapTokenObj = getOpenSwapToken(this.desChain.chainId)!;
      if (this.targetChainTokenBalances) {
        this.secondTokenSelection.tokenDataListProp = [{
          ...toOswapTokenObj,
          status: false,
          balance: this.targetChainTokenBalances[toOswapTokenObj.address!.toLowerCase()] ?? this.targetChainTokenBalances[toOswapTokenObj.symbol] ?? 0,
        }];
      } else {
        this.secondTokenSelection.tokenDataListProp = [{
          ...toOswapTokenObj,
          status: null,
        }];
      }
      this.onUpdateToken(toOswapTokenObj, false);
      this.secondTokenSelection.token = toOswapTokenObj;
      this.toToken = toOswapTokenObj;
      // Update to token description
      const toBalance = this.targetChainTokenBalances[toOswapTokenObj.address!.toLowerCase()] ?? 0;
      this.receiveBalance.caption = `Balance: ${formatNumber(toBalance, 4)} ${this.toToken.symbol}`;
    } else {
      // Reset firstTokenSelection tokenDataListProp to empty array to allow bypass in TokenSelection get tokenDataList, and get show all token selection
      this.firstTokenSelection.tokenDataListProp = [];
      this.setTargetTokenList();
    }

    //if (connected) {
    this.actionSetting?.classList.remove("hidden");
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.lastUpdated++;
    }, 1000)
    this.lastUpdated = 0;
    if (!this.record)
      this.swapBtn.classList.add('hidden');
    // this.onRenderIconList();
    this.onRenderPriceInfo();
    this.redirectToken();
    await this.handleAddRoute();
    /*
  } else {
    this.actionSetting?.classList.add("hidden");
    clearInterval(this.timer);
    this.lastUpdated = 0;
    this.swapBtn.classList.remove('hidden');
  }
  */
  }

  private initTokenSelection() {
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
        if (this.isCrossChain) {
          this.crossChainApprovalStatus = ApprovalStatus.APPROVING;
        } else {
          this.setMapStatus('approve', data.key, ApprovalStatus.APPROVING);
        }
        this.showResultMessage(this.openswapResult, 'success', receipt);
        if ((this.isApprovingRouter || this.isCrossChain) && !this.swapBtn.rightIcon.visible)
          this.swapBtn.rightIcon.visible = true;
      },
      onApproved: async (token: ITokenObject, data?: any) => {
        if (this.isCrossChain) {
          this.crossChainApprovalStatus = ApprovalStatus.NONE;
        } else {
          this.setMapStatus('approve', data.key, ApprovalStatus.NONE);
        }
        if (this.swapBtn.rightIcon.visible)
          this.swapBtn.rightIcon.visible = false;
        await this.handleAddRoute();
      },
      onApprovingError: async (token: ITokenObject, err: Error) => {
        this.showResultMessage(this.openswapResult, 'error', err);
        this.crossChainApprovalStatus = ApprovalStatus.TO_BE_APPROVED;
        if (this.swapBtn.rightIcon.visible)
          this.swapBtn.rightIcon.visible = false;
      },
      onPaying: async (receipt?: string, data?: any) => {
        this.showResultMessage(this.openswapResult, 'success', receipt);
        this.onSwapConfirming(data.key);
      },
      onPaid: async (data?: any) => {
        application.EventBus.dispatch(EventId.Paid);
        this.onSwapConfirmed({ key: data.key, isCrossChain: this.isCrossChain });
        await this.updateBalance();
      },
      onPayingError: async (err: Error) => {
        this.showResultMessage(this.openswapResult, 'error', err);
      }
    })
  }

  setDefaultToken = () => {
    let lstTokenMap: any = Object.values(tokenStore.tokenMap);
    const defaultCrossChainToken = lstTokenMap.find((v: any) => !v.address);
    let lstTargetTokenMap = Object.values(this.targetTokenMap);
    const oswapIndex = lstTargetTokenMap.findIndex((item: any) => item.symbol === 'OSWAP');
    if (oswapIndex > 0) {
      [lstTargetTokenMap[0], lstTargetTokenMap[oswapIndex]] = [lstTargetTokenMap[oswapIndex], lstTargetTokenMap[0]];
    }
    if (this.fromTokenSymbol && this.toTokenSymbol) {
      if (!this.isCrossChain && this.fromTokenSymbol === this.toTokenSymbol) {
        this.toToken = undefined;
        this.toTokenSymbol = '';
      }
      const firstObj = lstTokenMap.find((item: any) => this.fromTokenSymbol === item.symbol || this.fromTokenSymbol === item.address);
      const secondObj: any = lstTargetTokenMap.find((item: any) => this.toTokenSymbol === item.symbol || this.toTokenSymbol === item.address);
      if (firstObj) {
        this.fromToken = firstObj || ChainNativeTokenByChainId[this.chainId];
      } else if (this.isCrossChain) {
        this.fromToken = defaultCrossChainToken;
      } else {
        const token = lstTokenMap.find((item: any) => item.symbol !== secondObj?.symbol);
        this.fromToken = secondObj?.symbol === ChainNativeTokenByChainId[this.chainId].symbol ? token : ChainNativeTokenByChainId[this.chainId];
      }
      if (secondObj) {
        this.toToken = secondObj;
      } else if (this.isCrossChain) {
        this.toToken = lstTargetTokenMap[0] as ITokenObject;
      } else {
        const token = lstTargetTokenMap.find((item: any) => !(item.address === this.fromToken?.address || item.symbol === this.fromToken?.symbol)) as ITokenObject;
        this.toToken = this.fromToken?.symbol === ChainNativeTokenByChainId[this.chainId].symbol ? token : ChainNativeTokenByChainId[this.chainId];
      }
      this.onUpdateToken(this.fromToken as ITokenObject, true);
      this.onUpdateToken(this.toToken as ITokenObject, false);
      this.firstTokenSelection.token = this.fromToken;
      this.secondTokenSelection.token = this.toToken;
      this.fromInputValue = this.fromInputValue || new BigNumber(defaultInput);
    } else {
      this.fromInputValue = new BigNumber(defaultInput);
      let firstDefaultToken: any = defaultCrossChainToken;
      let secondDefaultToken: any = lstTargetTokenMap.find((v: any) => v.symbol === projectNativeTokenSymbol()) || lstTokenMap.find((v: any) => v.symbol === 'USDT' || v.symbol === 'USDT.e');
      if (firstDefaultToken && secondDefaultToken) {
        const fromAmount = parseFloat(defaultInput);
        this.fromInputValue = new BigNumber(fromAmount);
        this.onUpdateToken(firstDefaultToken, true);
        this.onUpdateToken(secondDefaultToken, false);
        this.firstTokenSelection.token = this.fromToken;
        this.secondTokenSelection.token = this.toToken;
      }
      this.redirectToken();
    }

    this.onUpdateSliderValue();
  }

  async onRevertSwap() {
    if (this.isCrossChain) return;
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

  setupCrossChainPopup() {
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
      this.srcChainTokenImage.url = Assets.fullPath(this.srcChain.img);
      this.srcChainTokenLabel.caption = this.srcChain.name;
      this.targetChainTokenImage.url = Assets.fullPath(this.desChain.img);
      this.targetChainTokenLabel.caption = this.desChain.name;
      const { sourceVaultToken, targetVaultToken, sourceRouteObj, vaultTokenFromSourceChain, vaultTokenToTargetChain } = this.record;
      if (sourceVaultToken && sourceRouteObj) {
        this.srcChainSecondPanel.classList.remove('hidden');
        this.srcChainVaultImage.url = Assets.fullPath(this.srcChain.img);
        this.srcChainVaultLabel.caption = this.srcChain.name;
        this.srcVaultTokenImage.url = Assets.fullPath(getTokenIconPath(sourceVaultToken, this.srcChain.chainId));
        this.srcVaultTokenLabel.caption = sourceVaultToken.symbol;
        this.srcVaultTokenValue.caption = formatNumber(vaultTokenFromSourceChain);
        this.lbReminderRejected?.classList.remove('hidden');
        this.lbReminderRejected.caption = `If the order is not executed in the target chain, the estimated withdrawalble amount is <b class="text-pink">${formatNumber(vaultTokenFromSourceChain)} ${sourceVaultToken?.symbol}</b>`;
      } else {
        this.srcChainSecondPanel.classList.add('hidden');
      }
      if (targetVaultToken && targetVaultToken.symbol !== this.toToken?.symbol) {
        this.targetChainSecondPanel.classList.remove('hidden');
        this.targetChainVaultImage.url = Assets.fullPath(this.desChain.img);
        this.targetChainVaultLabel.caption = this.desChain.name;
        this.targetVaultTokenImage.url = Assets.fullPath(getTokenIconPath(targetVaultToken, this.desChain.chainId));
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

  handleSwapPopup() {
    if (!this.record) return;
    this.setupCrossChainPopup();
    const slippageTolerance = getSlippageTolerance();
    this.fromTokenImage.url = Assets.fullPath(getTokenIconPath(this.fromToken, this.chainId));
    this.fromTokenLabel.caption = this.fromToken?.symbol ?? '';
    this.fromTokenValue.caption = formatNumber(this.fromInputValue, 4);
    this.toTokenImage.url = Assets.fullPath(getTokenIconPath(this.toToken, this.isCrossChain ? this.desChain?.chainId : this.chainId));
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
      const minReceivedMaxSold = poolAmount.times(1 + slippageTolerance / 100).toNumber();
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
    const balance = this.getBalance(token, !isFrom && this.isCrossChain);
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
    // if (this.isCrossChain && item.contractAddress){
    //   setApprovalModalSpenderAddress(Market.HYBRID, item.contractAddress)
    // } else if (item?.provider && this.availableMarkets.includes(item.provider)) {
    //   const market = ProviderConfigMap[item.key].marketCode;
    //   setApprovalModalSpenderAddress(market);
    // } else {
    //   setApprovalModalSpenderAddress(Market.HYBRID);
    // }
    const market = getProviderByKey(item.provider)?.key || '';
    setApprovalModalSpenderAddress(market);
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

    this.swapBtn.classList.remove('hidden');
    this.record = item;
    if (this.isCrossChain && this.fromToken && !this.fromToken.isNative) {
      try {
        this.setApprovalSpenderAddress()
        await this.approvalModelAction.checkAllowance(this.fromToken, this.fromInputValue.toFixed());
      } catch (e) {
        console.log('Cannot check the Approval status (Cross Chain)', e);
      }
    }
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
    this.swapBtn.classList.add('hidden');
  }
  async handleAddRoute() {
    if (!this.fromToken || !this.toToken || !(this.fromInputValue.gt(0) || this.toInputValue.gt(0))) return;
    this.initRoutes();
    this.disableSelectChain(true);
    this.disableSelectChain(true, true);
    let listRouting: any[] = [];
    if (!this.isCrossChain) {
      listRouting = await getAllRoutesData(this.fromToken, this.toToken, this.fromInputValue, this.toInputValue, this.isFrom);
      listRouting = listRouting.map((v: any) => {
        // const config = ProviderConfigMap[v.provider];
        return {
          ...v,
          isHybrid: false // config.marketCode == Market.HYBRID,
        }
      });
    } else if (this.srcChain && this.desChain) {
      const tokenIn = Object.assign({}, this.fromToken) as any;
      const tokenOut = Object.assign({}, this.toToken) as any;
      listRouting = await getAvailableRouteOptions({
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
            const config = getProviderByKey(v.targetRouteObj.provider);  // ProviderConfigMap[v.targetRouteObj.provider];
            if (config) {
              route.targetRouteObj = {
                ...route.targetRouteObj,
                caption: config.caption || '',
                route: v.targetRouteObj.bestRoute,
                isHybrid: false // config.marketCode == Market.HYBRID,
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

    this.swapModalConfirmBtn.caption = 'Confirm Swap';
    this.swapModalConfirmBtn.enabled = true;
    this.record = listRouting[0] || null;

    if (listRouting[0] && this.isCrossChain) {
      const assetSymbol = listRouting[0].targetVaultToken.symbol;
      const { vaultAddress, vaultRegistryAddress, tokenAddress: vaultTokenAddress, softCap } = bridgeVaultConstantMap[assetSymbol === 'USDT.e' ? 'USDT' : assetSymbol][this.desChain!.chainId];
      const [vault, bonds, oraclePriceMap] = await Promise.all([
        getBridgeVault(this.desChain!.chainId, vaultAddress),
        getBondsInBridgeVault(this.desChain!.chainId, vaultRegistryAddress),
        getOraclePriceMap(this.desChain!.chainId)
      ]);
      const assetBalance = vault.lpAssetBalance ?? 0;
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
        this.targetVaultBondBalanceLabel1.caption = `Vault Bond Balance: ${formatNumber(targetVaultBondBalance.toNumber(), 4)} OSWAP ≈ ${formatNumber(targetVaultBondBalance.div(vaultToOswapPrice).toNumber(), 4)} ${assetSymbol}`;
        this.targetVaultBondBalanceLabel2.caption = `Vault Bond Balance: ${formatNumber(targetVaultBondBalance.toNumber(), 4)} OSWAP ≈ ${formatNumber(targetVaultBondBalance.div(vaultToOswapPrice).toNumber(), 4)} ${assetSymbol}`;
      }
      this.crossChainSoftCapLabel1.caption = softCap ? `Cap: ${softCap} ${assetSymbol}` : "-";
      this.crossChainSoftCapLabel2.caption = softCap ? `Cap: ${softCap} ${assetSymbol}` : "-";
      if (softCap && vaultTokenToTargetChain.toNumber() >= softCap) {
        this.swapModalConfirmBtn.caption = 'Cap Reached';
        this.swapModalConfirmBtn.enabled = false;
      } else if (vaultTokenToTargetChain.gt(targetVaultAssetBalance) || vaultTokenToTargetChain.multipliedBy(vaultToOswapPrice).gt(targetVaultBondBalance)) {
        this.swapModalConfirmBtn.caption = 'Exceed Vault Asset Balance or Bond Balance';
        this.swapModalConfirmBtn.enabled = false;
      } else {
        this.swapModalConfirmBtn.enabled = true;
      }

    }
    this.lastUpdated = 0;
    this.disableSelectChain(false);
    this.disableSelectChain(false, true);
    this.swapButtonStatusMap = {};
    this.approveButtonStatusMap = {};
    this.registerPairButtonStatusMap = {};
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
    let unregisteredPairAddresses = (listRouting.filter(v => v.bestSmartRoute) as any).flatMap((v: any) => v.bestSmartRoute).filter((v: any) => !v.isRegistered).map((v: any) => v.pairAddress);
    unregisteredPairAddresses.forEach((v: any) => this.registerPairButtonStatusMap[v] = ApprovalStatus.TO_BE_APPROVED);
    if (this.isCrossChain && listRouting[0]) this.crossChainApprovalStatus = listRouting[0].isApproveButtonShown ? ApprovalStatus.TO_BE_APPROVED : ApprovalStatus.NONE
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
    if (this.record) this.setApprovalSpenderAddress()
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
    let tokenIcon = `<i-image tooltip='${tooltip}' url="${providerObj.image}" width="24" height="24"
      class="inline-block" fallbackUrl="${this.fallbackUrl}"></i-image>`;
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

    const hasTargetRouteObj = this.isCrossChain && item.sourceRouteObj && item.targetRouteObj;
    if (this.isCrossChain && index) {
      routingMainPanel.classList.add('routing-disabled');
      routingMainPanel.tooltip.content = 'The optimised route will be automatically selected for cross-chain swapping';
      routingMainPanel.setAttribute('data-placement', 'right');
      routingMainPanel.onClick = () => { };
    }
    if (hasTargetRouteObj && this.srcChain) {
      const srcLabel = await Label.create();
      srcLabel.caption = `(${this.srcChain.name})`;
      srcLabel.classList.add("routing-name");
      marketRow.appendChild(srcLabel);
    }
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

    if (hasTargetRouteObj && this.desChain) {
      const routingTargetRow = new HStack();
      routingTargetRow.width = "100%";
      // routingTargetRow.justify = "space-between";
      routingTargetRow.verticalAlignment = "center";

      const routeTargetRow = new HStack();
      routeTargetRow.width = "100%";
      routeTargetRow.verticalAlignment = "center";

      leftPanel.appendChild(routingTargetRow);
      const targetLabel = await Label.create();
      targetLabel.caption = `(${this.desChain.name})`;
      targetLabel.classList.add("routing-name");
      routingTargetRow.appendChild(targetLabel);

      const isTargetHybrid = false; // ProviderConfigMap[item.targetRouteObj.provider].marketCode === Market.HYBRID;
      const isTargetBestSmartRoute = isTargetHybrid && item.targetRouteObj && item.targetRouteObj.bestSmartRoute && item.targetRouteObj.bestSmartRoute.length;
      if (isTargetBestSmartRoute) {
        for (let idx = 0; idx < item.targetRouteObj.bestSmartRoute.length; idx++) {
          const pair = item.targetRouteObj.bestSmartRoute[idx];
          const label = await Label.create();
          label.caption = this.getProviderCaption(pair?.provider || pair, pair.caption);
          label.classList.add("routing-name");
          routingTargetRow.appendChild(label);
          if (idx !== item.targetRouteObj.bestSmartRoute.length - 1) {
            const icon = new Icon(routingTargetRow, {
              width: 14,
              height: 14,
              fill: "#ffffff8c",
              name: "angle-right"
            });
            routingTargetRow.appendChild(icon);
          }
        };
        leftPanel.appendChild(routingTargetRow);
      } else {
        targetLabel.caption = `(${this.desChain.name}) ${this.getProviderCaption(item.targetRouteObj.provider, item.targetRouteObj.caption)} ${item.targetRouteObj.provider}`;
      }

      const groupTokens = (pairs: any) => {
        let list: any[] = [];
        if (!pairs) return list;
        pairs.forEach((pair: any, index: number) => {
          if (index === 0) {
            list.push(pair.fromToken);
          }
          list.push(pair.toToken);
        });
        return list;
      };
      const routes = isTargetBestSmartRoute ? groupTokens(item.targetRouteObj.bestSmartRoute) : item.targetRouteObj.route;
      for (let idx = 0; idx < routes.length; idx++) {
        const token = routes[idx];
        const label = await Label.create();
        label.caption = token.symbol;
        label.classList.add("routing-caption");
        routeTargetRow.appendChild(label);
        if (idx !== routes.length - 1) {
          const icon = new Icon(routeTargetRow, {
            width: 14,
            height: 14,
            fill: "#ffffff8c",
            name: "arrow-right"
          });
          icon.classList.add("route-icon");
          routeTargetRow.appendChild(icon);
        }
      };
      const routeTargetPanel = new Panel();
      routeTargetPanel.classList.add("w-100");
      routeTargetPanel.appendChild(routeTargetRow);
      leftPanel.appendChild(routeTargetPanel);
    }

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
    if (this.isCrossChain) {
      const srcName = this.srcChain?.name;
      const desName = this.desChain?.name;
      if (srcName) {
        fromSymbol = `${fromSymbol} (${srcName})`;
      }
      if (desName) {
        toSymbol = `${toSymbol} (${desName})`;
      }
    }
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
    const tradeFee = this.isCrossChain ? this.record?.tradeFee : this.record?.fromAmount.times(this.record?.tradeFee).toNumber();
    if (tradeFee || tradeFee == 0) {
      return `${formatNumber(tradeFee)} ${this.fromToken?.symbol}`;
    }
    return '-';
  }
  getFeeDetails() {
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
    } else if (!this.isCrossChain && this.record) {
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
        title: "Minimum Received",
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
        isHidden: !this.isCrossChain,
      },
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
  getBalance(token?: ITokenObject, isCrossChain?: boolean) {
    if (token && this.allTokenBalancesMap) {
      const address = token.address || '';
      let balance: number = 0
      if (isCrossChain) {
        balance = token.isNative ? this.targetChainTokenBalances[token.symbol] : this.targetChainTokenBalances[address.toLowerCase()];
      } else {
        balance = address ? this.allTokenBalancesMap[address.toLowerCase()] ?? 0 : this.allTokenBalancesMap[token.symbol] || 0;
      }
      return balance
    }
    return 0;
  }
  async updateBalance() {
    if (this.isCrossChain) await this.updateTargetChainBalances();
    if (isWalletConnected()) await tokenStore.updateAllTokenBalances();
    this.allTokenBalancesMap = isWalletConnected() ? tokenStore.tokenBalances : [];
    if (this.fromToken) {
      const balance = this.getBalance(this.fromToken);
      this.payBalance.caption = `Balance: ${formatNumber(balance, 4)} ${this.fromToken.symbol}`;
    }
    if (this.toToken) {
      const balance = this.getBalance(this.toToken, this.isCrossChain);
      this.receiveBalance.caption = `Balance: ${formatNumber(balance, 4)} ${this.toToken.symbol}`;
    }
    const enabled = !this.isMaxDisabled();
    this.fromSlider.enabled = enabled;
    this.maxButton.enabled = enabled;
  }
  async updateTargetChainBalances() {
    const targetChainId = this.desChain?.chainId || this.targetChainId;
    if (targetChainId) {
      const tokenBalanceObj = await getTargetChainTokenInfoObj(targetChainId);
      this.targetChainTokenBalances = isWalletConnected() ? tokenBalanceObj.balances : [];
      this.targetChainTokenMap = tokenBalanceObj.tokenMap ?? {};
    }
  }

  private setSwapButtonText() {
    if (this.swapBtn && this.swapBtn.hasChildNodes()) {
      this.swapBtn.caption = this.getSwapButtonText();
    }
  }

  getSwapButtonText() {
    const isApproveButtonShown = this.isCrossChain ? this.crossChainApprovalStatus !== ApprovalStatus.NONE : this.isApproveButtonShown;
    if (!isWalletConnected()) {
      return "Connect Wallet";
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
      if (this.hasRegisterPair) {
        return "Register Pair";
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
    let balance = this.getBalance(this.fromToken)
    if (this.record.fromAmount.gt(balance)) {
      return `Insufficient ${this.fromToken?.symbol} balance`;
    }
    if (this.record.priceImpact > 15 && !isExpertMode()) {
      return priceImpactTooHighMsg;
    }
    return '';
  }
  setMapStatus(type: StatusMapType, key: string, status: ApprovalStatus) {
    let mapStatus = {} as any;
    if (type === 'register') {
      mapStatus = this.registerPairButtonStatusMap;
      mapStatus[key] = status;
      this.registerPairButtonStatusMap = {
        ...mapStatus
      };
    } else if (type === 'approve') {
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
    const { key, isCrossChain } = data;
    this.setMapStatus('swap', key, ApprovalStatus.TO_BE_APPROVED);
    if (this.swapBtn.rightIcon.visible)
      this.swapBtn.rightIcon.visible = false;
    await this.handleAddRoute();
    if (isCrossChain) {
      this.showViewOrderModal();
    }
  }
  isButtonLoading() {
    if (this.isApproveButtonShown || (this.isCrossChain && this.crossChainApprovalStatus === ApprovalStatus.APPROVING)) {
      return this.isApprovingRouter;
    }
    return this.isSwapping;
  }
  isSwapButtonDisabled() {
    const warningMessageText = this.getWarningMessageText();
    return (isWalletConnected() && (warningMessageText != '' && !this.isPriceImpactTooHigh));
  }

  get bestSmartRoute() {
    if (this.record) {
      const item = this.record;
      if (item.isHybrid && item.bestSmartRoute) {
        return item.bestSmartRoute;
      }
    }
    return [];
  };

  get hasRegisterPair() {
    const statusMap = this.registerPairButtonStatusMap;
    return this.bestSmartRoute.some((pair: any) => {
      return Object.keys(statusMap).includes(pair.pairAddress) && statusMap[pair.pairAddress] !== ApprovalStatus.NONE;
    });
  }

  get pairs() {
    return this.bestSmartRoute.filter((pair: any) => {
      return [ApprovalStatus.TO_BE_APPROVED, ApprovalStatus.APPROVING].includes(this.registerPairButtonStatus(pair));
    });
  }

  get isRegisteringPair() {
    return this.pairs.some((pair: any) => this.registerPairButtonStatus(pair) === ApprovalStatus.APPROVING);
  }

  registerPairButtonStatus = (pair: any) => {
    const statusMap = this.registerPairButtonStatusMap;
    return Object.keys(statusMap).includes(pair.pairAddress) ? statusMap[pair.pairAddress] : ApprovalStatus.NONE;
  };

  renderRegisterPairUI() {
    let listMarket = [] as any;
    let listPairAddress = [] as any;
    this.pairs.forEach((pair: any) => {
      const market = getProviderByKey(pair.provider)?.key // ProviderConfigMap[pair.provider].marketCode;
      listMarket.push(market);
      listPairAddress.push(pair.pairAddress);
    });
    this.registerPairsParams = {
      listMarket,
      listPairAddress,
    }
    this.registerBtn.caption = this.isRegisteringPair ? 'Registering' : 'Register';
    this.registerBtn.rightIcon.visible = this.isRegisteringPair;
    this.registerBtn.enabled = !this.isRegisteringPair;
    this.registerPanel.clearInnerHTML();
    this.pairs.forEach((pair: any) => {
      const { fromToken, toToken } = pair;
      this.registerPanel.appendChild(
        <i-hstack verticalAlignment="center" horizontalAlignment="space-between" margin={{ bottom: 20 }}>
          <i-image
            width={40}
            height={40}
            tooltip={{
              content: `${fromToken.name} (${fromToken.symbol})`
            }}
            url={Assets.fullPath(getTokenIconPath(fromToken, this.chainId))}
          />
          <i-icon margin={{ left: 10, right: 10 }} name="arrow-right" fill='#fff' width={15} height={15} />
          <i-image
            width={40}
            height={40}
            tooltip={{
              content: `${toToken.name} (${toToken.symbol})`
            }}
            url={Assets.fullPath(getTokenIconPath(toToken, this.chainId))}
          />
        </i-hstack>
      )
    });
    this.registerPairModal.visible = true;
  }

  onClickSwapButton() {
    if (!isWalletConnected()) {
      this.$eventBus.dispatch(EventId.ConnectWallet);
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
    if (this.hasRegisterPair) {
      this.renderRegisterPairUI();
      return;
    }
    this.handleSwapPopup();
  }
  onSubmit = async () => {
    try {
      this.swapModal.visible = false;
      this.showResultMessage(this.openswapResult, 'warning', `Swapping ${formatNumber(this.fromInputValue, 4)} ${this.fromToken?.symbol} to ${formatNumber(this.toInputValue, 4)} ${this.toToken?.symbol}`);
      if (this.isCrossChain) {
        if (this.toToken && this.fromToken && this.desChain) {
          this.record.minReceivedMaxSold = this.getMinReceivedMaxSold()
          const { error } = await createBridgeVaultOrder({
            vaultAddress: this.record.vaultAddress,
            targetChainId: this.desChain.chainId,
            tokenIn: this.fromToken,
            tokenOut: this.toToken,
            amountIn: this.record.fromAmount,
            minAmountOut: this.record.minReceivedMaxSold,
            sourceRouteInfo: this.record.sourceRouteObj ? { amountOut: this.record.sourceRouteObj.amountOut, pairs: this.record.sourceRouteObj.pairs } : undefined
          })
          if (error) {
            this.showResultMessage(this.openswapResult, 'error', error as any);
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
        providerList: this.originalData?.providers || []
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
    const item = this.record;
    this.showResultMessage(this.openswapResult, 'warning', 'Approving');
    this.setApprovalSpenderAddress();
    this.approvalModelAction.doApproveAction(this.fromToken as ITokenObject, this.fromInputValue.toString(), this.record);
  }
  onSetMaxBalance = async (value?: number) => {
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
    } else {
      this.onUpdateSliderValue(100);
    }
    if (inputVal.eq(this.fromInputValue)) return;
    this.fromInputValue = inputVal;
    const input = this.payCol.children[0] as Input;
    input.value = this.fromInputValue.toString();
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

  // Cross Chain
  get isCrossChainEnabled() {
    return false;

    if (getSiteEnv() === SITE_ENV.MAINNET) {
      this.srcChainBox?.classList.add('hidden');
      this.desChainBox?.classList.add('hidden');
      return false;
    }

    let chainId = getChainId();

    if (!this.supportedChainList.some((v: any) => v.chainId == chainId)) {
      this.srcChainBox?.classList.add('hidden');
      this.desChainBox?.classList.add('hidden');
      return false;
    }
    this.srcChainBox?.classList.remove('hidden');
    if (this.srcChain?.isCrossChainSupported) {
      this.desChainBox?.classList.remove('hidden');
    } else {
      this.desChainBox?.classList.add('hidden');
    }
    return true;
  };

  get isCrossChain() {
    const srcChainId = this.srcChain?.chainId;
    const desChainId = this.desChain?.chainId;
    const isCrossChainSupported = this.srcChain?.isCrossChainSupported;
    if (this.isCrossChainEnabled && isCrossChainSupported && srcChainId != desChainId) {
      return true;
    }
    this.minSwapHintLabel?.classList.add('hidden');
    return false;
  };

  get targetChainTokenDataList() {
    let dataList: any[] = [];
    if (this.targetChainTokenMap && this.isCrossChain) {
      for (const key of Object.keys(this.targetChainTokenMap)) {
        let tokenAddress = key;
        let tokenObject = this.targetChainTokenMap[tokenAddress];
        if (this.targetChainTokenBalances) {
          dataList.push({
            ...tokenObject,
            status: false,
            balance: this.targetChainTokenBalances[tokenAddress] ? this.targetChainTokenBalances[tokenAddress] : 0,
          });
        } else {
          dataList.push({
            ...tokenObject,
            status: null,
          });
        }
      }
    }
    return dataList;
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
    return getWalletProvider() === WalletPlugin.MetaMask;
  }

  getSupportedChainList = () => {
    const list = getMatchNetworks({ isDisabled: false });
    const testnetSupportedList = list.filter(v => v.isTestnet);
    const mainnetSupportedList = list.filter(v => !v.isTestnet);
    const isMainnet = mainnetSupportedList.some((item: any) => item.chainId == this.chainId);
    this.supportedChainList = isMainnet ? mainnetSupportedList : testnetSupportedList;
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

  selectSourceChain = async (obj: INetwork, img?: Image) => {
    if ((this.srcChain && this.srcChain.chainId != obj.chainId) || !this.srcChain) {
      await switchNetwork(obj.chainId);
      if (!obj.isCrossChainSupported) {
        this.selectDestinationChain(obj, img)
      }
      this.srcChain = obj;
      this.srcChainLabel.caption = this.srcChain.name;
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

  selectDestinationChain = async (obj: INetwork, img?: Image) => {
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
      await this.updateTargetChainBalances()
      if (img) {
        img.classList.add('icon-selected');
      } else {
        const currentNetwork = this.supportedChainList.find((f: INetwork) => f.chainId == obj.chainId);
        const img = this.desChainList.querySelector(`[data-tooltip="${currentNetwork?.name}"]`);
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
        this.desChain = this.supportedChainList[0];
        this.desChainList.firstElementChild?.classList.add('icon-selected');
      }
    }
    if (this.desChain) {
      this.targetChainId = this.desChain.chainId;
      this.desChainLabel.caption = this.desChain.name;
    }
    this.setTargetTokenList();
    this.disableSelectChain(false, true);
  };

  setTargetTokenList = (isDisabled?: boolean) => {
    if (this.srcChain?.isCrossChainSupported && !isDisabled) {
      const targetChainId = this.desChain?.chainId || this.chainId;
      if (this.secondTokenSelection.targetChainId != targetChainId) {
        this.secondTokenSelection.targetChainId = targetChainId;
      }
      this.secondTokenSelection.tokenDataListProp = this.targetChainTokenDataList;
    } else {
      const srcChainId = this.srcChain?.chainId || this.chainId;
      if (this.secondTokenSelection.targetChainId != srcChainId) {
        this.secondTokenSelection.targetChainId = srcChainId;
      }
      this.secondTokenSelection.tokenDataListProp = [];
    }
  }

  onSourceChainChanged = () => {
    const selected = this.srcChainList.querySelector('.icon-selected');
    if (selected) {
      selected.classList.remove('icon-selected');
    }
    this.getSupportedChainList();
    if (!this.chainId)
      this.chainId = this.supportedChainList[0].chainId;
    const currentNetwork = this.supportedChainList.find((f: INetwork) => f.chainId == this.chainId);
    this.srcChain = currentNetwork;
    this.srcChainLabel.caption = this.srcChain?.name || '-';
    const img = this.srcChainList.querySelector(`[network-name="${currentNetwork?.name}"]`);
    if (img) {
      img.classList.add('icon-selected');
    }
  }

  onSelectSourceChain = async (obj: INetwork, img?: Image) => {
    if (this.isMetaMask || !isWalletConnected()) {
      await this.selectSourceChain(obj, img);
      this.onSetupPage(true);
    }
  }

  onSelectDestinationChain = async (obj: INetwork, img?: Image) => {
    if (obj.chainId === this.desChain?.chainId) return;
    await this.selectDestinationChain(obj, img);
    this.onSetupPage(true);
  }

  setDefaultChain = async () => {
    if (this.supportedChainList && this.supportedChainList.length) {
      let obj = this.supportedChainList.find((f: INetwork) => f.chainId == this.chainId);
      if (!obj)
        obj = this.supportedChainList[0];
      if (!this.srcChain && obj) {
        await this.selectSourceChain(obj);
      }
      this.onSourceChainChanged();
      const targetChain = this.supportedChainList.find((f: INetwork) => f.chainId == this.targetChainId);
      const isSupported = targetChain && targetChain.isCrossChainSupported;
      if (!this.desChain && isSupported) {
        await this.selectDestinationChain(targetChain);
      } else if (!isSupported && obj) {
        await this.selectDestinationChain(obj);
      } else {
        if (this.isCrossChain) await this.updateTargetChainBalances();
        if (this.toToken) {
          const balance = this.getBalance(this.toToken, this.isCrossChain);
          this.receiveBalance.caption = `Balance: ${formatNumber(balance, 4)} ${this.toToken.symbol}`;
        }
        this.setTargetTokenList();
      }
      this.desChainLabel.caption = this.desChain?.name || '-';
    } else {
      this.setTargetTokenList(true);
    }
  };

  initChainIcon = (network: INetwork, isDes?: boolean) => {
    const img = new Image();
    img.url = Assets.fullPath(network.img);
    img.tooltip.content = network.name;
    img.classList.add('chain-icon');
    img.setAttribute('data-tooltip', network.name); // for query
    if (isDes) {
      img.onClick = () => this.onSelectDestinationChain(network, img);
      this.desChainList.appendChild(img);
    } else {
      if (!this.isMetaMask) {
        img.tooltip.content = `Openswap supports this network ${network.name} (${network.chainId}), please switch network in the connected wallet.`;
        img.classList.add('icon-disabled');
      }
      img.setAttribute('network-name', network.name);
      img.setAttribute('chain-id', `${network.chainId}`);
      img.onClick = () => this.onSelectSourceChain(network, img);
      this.srcChainList.appendChild(img);
    }
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
    if (this.oldSupportedChainList[0]?.chainId == this.supportedChainList[0]?.chainId) {
      this.updateSrcChainIconList();
      await this.setDefaultChain();
      return;
    };
    this.srcChainList.innerHTML = '';
    this.desChainList.innerHTML = '';
    this.srcChain = undefined;
    this.desChain = undefined;
    this.supportedChainList.forEach((network: INetwork) => {
      this.initChainIcon(network);
      if (network.isCrossChainSupported) {
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
    window.open('#/cross-chain-bridge-record');
  }

  showModalFees = () => {
    const fees = this.getFeeDetails();
    this.feesInfo.clearInnerHTML();
    fees.forEach((fee) => {
      this.feesInfo.appendChild(
        <i-hstack
          horizontalAlignment="space-between" verticalAlignment="center" margin={{ top: 10 }}
          border={{ bottom: { color: '#0c1234', width: '2px', style: 'solid' } }}
          padding={{ bottom: 16 }}
        >
          <i-hstack verticalAlignment="center">
            <i-label caption={fee.title} margin={{ right: 4 }} />
            <i-icon
              name="question-circle"
              width={15}
              height={15}
              fill="#fff"
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

  onRegister = () => {
    const { listMarket, listPairAddress } = this.registerPairsParams;
    this.showResultMessage(this.openswapResult, 'warning', 'Registering');
    const callBack = (err: any, reply: any) => {
      if (err) {
        this.showResultMessage(this.openswapResult, 'error', err);
      } else {
        listPairAddress.forEach((pairAddress: string) => {
          this.setMapStatus('register', pairAddress, ApprovalStatus.APPROVING);
        });
        this.showResultMessage(this.openswapResult, 'success', reply);
        return reply;
      }
      this.registerBtn.rightIcon.visible = this.isRegisteringPair;
      this.registerBtn.enabled = !this.isRegisteringPair;
    };

    const confirmationCallBack = () => {
      listPairAddress.forEach((pairAddress: string) => {
        this.setMapStatus('register', pairAddress, ApprovalStatus.NONE);
      });
      if (!this.hasRegisterPair && this.registerPairModal.visible && this.record) {
        this.registerPairModal.visible = false;
        this.registerBtn.rightIcon.visible = this.isRegisteringPair;
        this.registerBtn.enabled = !this.isRegisteringPair;
        this.onClickSwapButton();
      }
    };

    registerSendTxEvents({
      transactionHash: callBack,
      confirmation: confirmationCallBack
    });

    registerPairsByAddress(listMarket, listPairAddress);
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
      return;
    }
    this.supportedNetworksElm.appendChild(<i-label caption={`We only support the following ${this.supportedNetworks.length > 1 ? 'networks' : 'network'}:`} font={{ size: '16px' }} />)
    for (const chainId of this.supportedNetworks) {
      const network = getNetworkInfo(chainId);
      if (network) {
        this.supportedNetworksElm.appendChild(
          <i-label font={{ bold: true, size: '16px' }} caption={`${network.name} (${network.chainId})`} />
        )
      }
    }
    this.networkErrModal.visible = true;
  }

  private closeNetworkErrModal() {
    this.networkErrModal.visible = false;
  }

  private async initData() {
    if (!this.isInited) {
      await this.initWalletData();
      setCurrentChainId(getDefaultChainId());
      this.initTokenSelection();
      await this.initApprovalModelAction();
      this.isInited = true;
    }
  }

  async init() {
    this.chainId = getChainId();
    setDataFromSCConfig({ infuraId: InfuraId, networks: Networks });
    setTokenStore();
    // this.availableMarkets = getAvailableMarkets() || [];
    super.init();
    this.setSwapButtonText();
    this.openswapResult = new Result();
    this.swapComponent.appendChild(this.openswapResult);
    this.transactionModal = new TransactionSettings();
    this.swapComponent.appendChild(this.transactionModal);
    this.initExpertModal();
  }

  render() {
    return (
      <i-panel id="swapComponent" background={{ color: '#0c1234' }}>
        <i-panel class="pageblock-swap">
          <i-panel id="swapContainer">
            <i-panel class="bill-board">
              <i-image url={Assets.fullPath("img/swap/swap.svg")}></i-image>
            </i-panel>
            <i-panel>
              <i-hstack wrap="wrap" horizontalAlignment="space-between" verticalAlignment="center">
                <i-panel id="iconList" class="icon-list">
                </i-panel>
                <i-panel id="actionSetting" class="action-setting hidden">
                  <i-label id="lbLastUpdated"></i-label>
                  <i-icon width={26} height={26} class="rounded-icon" name="sync-alt" fill="white" onClick={this.onRefresh}></i-icon>
                  <i-icon width={26} height={26} class="rounded-icon" name="cog" fill="white" onClick={this.onSetting}></i-icon>
                </i-panel>
              </i-hstack>
            </i-panel>
            <i-panel class="content-swap">
              <i-hstack class="my-2" verticalAlignment="center" horizontalAlignment="space-between">
                <i-label class="custom-label" caption="You Pay"></i-label>
              </i-hstack>
              <i-vstack id="srcChainBox" visible={false} class="my-2 w-100">
                <i-hstack verticalAlignment="center" horizontalAlignment="space-between">
                  <i-label class="text--grey" caption="Selected Source Chain" />
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
              <i-panel class="token-box">
                <i-vstack id="payContainer" class="input--token-container" >
                  <i-hstack class="balance-info" horizontalAlignment="space-between" verticalAlignment="center" width="100%">
                    <i-label id="payBalance" class="text--grey ml-auto" caption="Balance: 0"></i-label>
                    <i-button id="maxButton" class="btn-max" caption="Max" enabled={false} onClick={() => this.onSetMaxBalance()}></i-button>
                  </i-hstack>
                  <i-panel class="bg-box" width="100%">
                    <i-hstack class="input--token-box" verticalAlignment="center" horizontalAlignment="space-between" width="100%">
                      <i-vstack>
                        <swap-token-selection disableSelect={true} id="firstTokenSelection"></swap-token-selection>
                      </i-vstack>
                      <i-vstack id="payCol">
                        <i-label class="text-value text-right" caption=" - "></i-label>
                      </i-vstack>
                    </i-hstack>
                  </i-panel>
                </i-vstack>
              </i-panel>
              <i-panel id="minSwapHintLabel" visible={false} class="hints">
                <i-icon name="star" fill="#f7d063" width={13} height={13} />
                <i-label caption="No crosschain routes are found. You may try updating the input amount or selecting another token." />
              </i-panel>
              <i-panel class="toggle-reverse">
                <i-image id="toggleReverseImage" width={32} height={32} class="icon-swap rounded-icon" url={Assets.fullPath("img/swap/icon-swap.png")} onClick={this.onRevertSwap.bind(this)} />
              </i-panel>
              <i-panel class="token-box">
                <i-vstack id="receiveContainer" class="input--token-container" >
                  <i-vstack class="balance-info" width="100%">
                    <i-vstack width="100%">
                      <i-label class="custom-label" caption="You Receive"></i-label>
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
                        <swap-token-selection disableSelect={true} id="secondTokenSelection"></swap-token-selection>
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
                          <i-icon id="showIcon" width={30} height={30} fill="#fff" name="angle-down"></i-icon>
                        </i-panel>
                      </i-hstack>
                    </i-panel>
                  </i-panel>
                </i-vstack>
              </i-panel>
            </i-panel>
            <i-panel class="swap-btn-container" width="100%">
              <i-button
                id="swapBtn" class="btn-swap btn-os hidden" height={67}
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
                <i-icon name="minus" fill='#fff' width={28} height={10} />
              </i-panel>
              <i-panel class="row-chain">
                <i-image id="fromTokenImage" width="30px" height="30px" url="#" />
                <i-label id="fromTokenLabel" class="token-name" caption=""></i-label>
              </i-panel>
              <i-label id="fromTokenValue" class="token-value" caption=" - "></i-label>
            </i-hstack>
            <i-icon name="arrow-down" class="arrow-down" fill="#fff" width={28} height={28} />
            <i-panel id="srcChainSecondPanel">
              <i-hstack verticalAlignment='center' horizontalAlignment='start'>
                <i-panel class="row-chain">
                  <i-image id="srcChainVaultImage" width="30px" height="30px" url="#" />
                  <i-label id="srcChainVaultLabel" class="token-name" caption="" />
                  <i-icon name="minus" fill='#fff' width={28} height={10} />
                </i-panel>
                <i-panel class="row-chain">
                  <i-image id="srcVaultTokenImage" width="30px" height="30px" url="#" />
                  <i-label id="srcVaultTokenLabel" class="token-name" caption="" />
                </i-panel>
                <i-label id="srcVaultTokenValue" class="token-value" caption="-" />
              </i-hstack>
              <i-icon name="arrow-down" class="arrow-down" fill="#fff" width={28} height={28} />
            </i-panel>
            <i-panel id="targetChainSecondPanel">
              <i-hstack verticalAlignment='center' horizontalAlignment='start'>
                <i-panel class="row-chain">
                  <i-image id="targetChainVaultImage" width="30px" height="30px" url="#" />
                  <i-label id="targetChainVaultLabel" class="token-name" caption="" />
                  <i-icon name="minus" fill='#fff' width={28} height={10} />
                </i-panel>
                <i-panel class="row-chain">
                  <i-image id="targetVaultTokenImage" width="30px" height="30px" url="#" />
                  <i-label id="targetVaultTokenLabel" class="token-name" caption="" />
                </i-panel>
                <i-label id="targetVaultTokenValue" class="token-value" caption="-" />
              </i-hstack>
              <i-vstack class="text-right">
                <i-label id="crossChainSoftCapLabel1" class="text--grey ml-auto"></i-label>
                <i-label id="targetVaultAssetBalanceLabel1" class="text--grey ml-auto" caption="Vault Asset Balance: 0"></i-label>
                <i-label id="targetVaultBondBalanceLabel1" class="text--grey ml-auto" caption="Vault Bond Balance: 0"></i-label>
              </i-vstack>
              <i-icon name="arrow-down" class="arrow-down" fill="#fff" width={28} height={28} />
            </i-panel>
            <i-hstack class="mb-1" verticalAlignment='center' horizontalAlignment='start'>
              <i-panel id="targetChainFirstPanel" class="row-chain">
                <i-image id="targetChainTokenImage" width="30px" height="30px" url="#" />
                <i-label id="targetChainTokenLabel" class="token-name" caption="" />
                <i-icon name="minus" fill='#fff' width={28} height={10} />
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
            <i-panel id="priceInfoContainer" class="bg-box mt-1 mb-1" width="100%">
            </i-panel>
            <i-label id="lbReminderRejected" class="flex" margin={{ top: 8, bottom: 16 }} />
            <i-panel class="swap-btn-container" width="100%">
              <i-button id="swapModalConfirmBtn" class="btn-swap btn-os" height="auto" caption="Confirm Swap" onClick={this.doSwap}></i-button>
            </i-panel>
          </i-modal>

          <i-modal id="registerPairModal" title="Register Pair on your Hybrid Router!" closeIcon={{ name: 'times' }}>
            <i-label caption="Congratulation on being the first one to use the below pairs on your hybrid router! Please click 'register' below to perform the swap. Approved to be distributed to our beloved community contributors!"></i-label>
            <i-panel margin={{ top: 30, bottom: 10 }} width="100%">
              <i-label font={{ color: "#ffffff8c", bold: false }} caption="Pair(s) to be register"></i-label>
            </i-panel>
            <i-hstack verticalAlignment="center" horizontalAlignment="space-between">
              <i-panel id="registerPanel" class="register-panel" />
              <i-panel>
                <i-button
                  id="registerBtn" width={150} class="btn-register btn-os" height="auto"
                  rightIcon={{ spin: true, visible: false }}
                  onClick={() => this.onRegister()} caption="Register"
                />
              </i-panel>
            </i-hstack>
          </i-modal>

          <i-modal
            id="modalViewOrder"
            class="bg-modal custom-modal"
            title="Cross Chain"
            closeIcon={{ name: 'times' }}
          >
            <i-panel class="i-modal_content">
              <i-panel class="mt-1">
                <i-hstack verticalAlignment='center' horizontalAlignment='center' class="mb-1">
                  <i-image width={50} height={50} url={Assets.fullPath('img/success-icon.svg')} />
                </i-hstack>
                <i-hstack verticalAlignment='center' class="flex-col">
                  <i-label caption="The order was created successfully!" />
                  <i-label caption="Do you want to view the record?" />
                </i-hstack>
                <i-hstack verticalAlignment='center' horizontalAlignment='center' class="mt-1">
                  <i-button
                    caption="Cancel"
                    class="btn-os btn-cancel"
                    onClick={() => this.closeViewOrderModal()}
                  />
                  <i-button
                    caption="View Order"
                    class="btn-os btn-submit"
                    onClick={() => this.onViewOrder()}
                  />
                </i-hstack>
              </i-panel>
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
      </i-panel>
    )
  }
}
