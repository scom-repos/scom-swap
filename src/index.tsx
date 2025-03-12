import { Module, Panel, Button, Label, VStack, Image, Container, IEventBus, application, customModule, Modal, Input, Control, customElements, ControlElement, Styles, HStack, Icon, FormatUtils, GridLayout } from '@ijstech/components';
import { BigNumber, INetwork, Wallet, IERC20ApprovalAction, TransactionReceipt } from '@ijstech/eth-wallet';
import {
  isClientWalletConnected,
  getSupportedTokens,
  State,
  WalletPlugin,
  getNetworkInfo,
} from "./store/index";
import { ITokenObject, tokenStore, assets as tokenAssets } from '@scom/scom-token-list';
import { setApprovalModalSpenderAddress } from './swap-utils/index';
import {
  ApprovalStatus,
  EventId,
  formatNumber,
  isInvalidInput,
  ISwapWidgetData,
  IProviderUI,
  Category,
  ICommissionInfo,
  INetworkConfig,
  ITokenConfig,
  SwapTypes,
  DEAULT_SWAP_TYPE
} from './global/index';
import { PriceInfo } from './price-info/index';
import { ExpertModeSettings } from './expert-mode-settings/index';
import configData from './data.json';
import ScomWalletModal, { IWalletPlugin } from '@scom/scom-wallet-modal';
import ScomDappContainer, { WidgetType } from '@scom/scom-dapp-container'
import getDexList from '@scom/scom-dex-list';
import ScomTokenInput from '@scom/scom-token-input';
import ScomTxStatusModal from '@scom/scom-tx-status-modal';
import { swapStyle } from './index.css';
import { ConfigModel, SwapModel } from './model';
import { Block, BlockNoteEditor, BlockNoteSpecs, callbackFnType, executeFnType, getWidgetEmbedUrl, parseUrl } from '@scom/scom-blocknote-sdk';
import { mainJson } from './languages/index';

export { ISwapWidgetData };

const Theme = Styles.Theme.ThemeVars;
const ROUNDING_NUMBER = BigNumber.ROUND_DOWN;

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
  defaultInputToken?: ITokenConfig;
  defaultOutputToken?: ITokenConfig;
  defaultInputValue?: string;
  defaultOutputValue?: string;
  apiEndpoints?: Record<string, string>;
	widgetType?: WidgetType;
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
export default class ScomSwap extends Module implements BlockNoteSpecs {
  private state: State;
  tag: any = {};

  private pnlBranding: VStack;
  private imgLogo: Image;
  private lbTitle: Label;
  private swapComponent: Panel;
  private pnlPriceInfo: Panel;
  private wrapperSwap: GridLayout;
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
  private lbYouPayValue: Label;
  private mdWallet: ScomWalletModal;
  private dappContainer: ScomDappContainer;
  private configModel: ConfigModel;
  private swapModel: SwapModel;

  private timeout: any;
  private isPriceToggled: boolean;
  private $eventBus: IEventBus;
  private lbEstimate: Label;
  private lbPayOrReceive: Label;
  private approvalModelAction: IERC20ApprovalAction;

  private toggleReverseImage: HStack;
  private hIcon: Icon;
  private vIcon: Icon;
  private swapModalConfirmBtn: Button;
  private modalFees: Modal;
  private feesInfo: VStack;

  private expertModal: ExpertModeSettings;
  private contractAddress: string;
  private clientEvents: any[] = [];
	private _widgetType: WidgetType = WidgetType.Standalone;

  // Cross Chain
  private minSwapHintLabel: Label;
  private srcChainBox: Panel;
  private desChainBox: Panel;
  private srcChainLabel: Label;
  private srcChainList: HStack;
  private desChainLabel: Label;
  private desChainList: HStack;
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
  private lbReminderRejectedValue: Label;
  private pnlReminderRejected: Panel;

  static async create(options?: ScomSwapElement, parent?: Container) {
    let self = new this(parent, options);
    await self.ready();
    return self;
  }

  addBlock(blocknote: any, executeFn: executeFnType, callbackFn?: callbackFnType) {
    const blockType = 'swap';
    const moduleData = {
      name: '@scom/scom-swap',
      localPath: 'scom-swap',
    }

    const swapRegex = /https:\/\/widget.noto.fan\/(#!\/)?scom\/scom-swap\/\S+/g;
    function getData(href: string) {
      const widgetData = parseUrl(href);
      if (widgetData) {
        const { module, properties } = widgetData;
        if (module.localPath === moduleData.localPath) return {...properties};
      }
      return false;
    }

    const SwapBlock = blocknote.createBlockSpec({
      type: blockType,
      propSchema: {
        ...blocknote.defaultProps,
        category: { default: DEAULT_SWAP_TYPE, values: SwapTypes },
        providers: { default: [] },
        tokens: { default: [] },
        defaultChainId: { default: 0 },
        networks: { default: [] },
        logo: { default: '' },
        title: { default: '' },
        campaignId: { default: null},
        wallets: { default: [] },
        commissions: { default: [] },
        defaultInputValue: { default: '' },
        defaultOutputValue: { default: '' },
        defaultInputToken: { default: null },
        defaultOutputToken: { default: null },
        apiEndpoints: { default: null }
      },
      content: "none"
    },
    {
      render: (block: Block) => {
        const wrapper = new Panel();
        const props = JSON.parse(JSON.stringify(block.props));
        const customElm = new ScomSwap(wrapper, {...props});
        if (typeof callbackFn === 'function') {
          callbackFn(customElm, block);
        }
        wrapper.appendChild(customElm);
        return {
          dom: wrapper
        };
      },
      parseFn: () => {
        return [
          {
            tag: `div[data-content-type=${blockType}]`,
            node: blockType
          },
          {
            tag: "a",
            getAttrs: (element: string|HTMLElement) => {
              if (typeof element === "string") {
                return false;
              }
              const href = element.getAttribute('href');
              if (href) return getData(href);
              return false;
            },
            priority: 402,
            node: blockType
          },
          {
            tag: "p",
            getAttrs: (element: string|HTMLElement) => {
              if (typeof element === "string") {
                return false;
              }
              const child = element.firstChild as HTMLElement;
              if (child?.nodeName === 'A' && child.getAttribute('href')) {
                const href = child.getAttribute('href');
                return getData(href);
              }
              return false;
            },
            priority: 403,
            node: blockType
          },
        ]
      },
      toExternalHTML: (block: any, editor: any) => {
        const link = document.createElement("a");
        const url = getWidgetEmbedUrl(
          {
            type: blockType,
            props: {...(block.props || {})}
          },
          moduleData
        );
        link.setAttribute("href", url);
        link.textContent = blockType;
        const wrapper = document.createElement("p");
        wrapper.appendChild(link);
        return { dom: wrapper };
      },
      pasteRules: [
        {
          find: swapRegex,
          handler(props: any) {
            const { state, chain, range } = props;
            const textContent = state.doc.resolve(range.from).nodeAfter?.textContent;
            const widgetData = parseUrl(textContent);
            const { module, properties } = widgetData;
            if (!widgetData && module.localPath !== moduleData.localPath) return null;
            chain().BNUpdateBlock(state.selection.from, {
              type: blockType,
              props: {
                ...properties
              },
            }).setTextSelection(range.from + 1);
          }
        }
      ]
    });

    const SwapSlashItem = {
      name: "Swap",
      execute: (editor: BlockNoteEditor) => {
        const block: any = {
          type: blockType,
          props: configData.defaultBuilderData
        };
        if (typeof executeFn === 'function') {
          executeFn(editor, block);
        }
      },
      aliases: [blockType, "widget"],
      group: "Widget",
      icon: {name: 'exchange-alt'},
      hint: "Insert a swap widget",
    }

    return {
      block: SwapBlock,
      slashItem: SwapSlashItem,
      moduleData
    };
  }


  removeRpcWalletEvents() {
    this.configModel.removeRpcWalletEvents();
  }

  onHide() {
    this.dappContainer.onHide();
    this.removeRpcWalletEvents();
    for (let event of this.clientEvents) {
      event.unregister();
    }
    this.clientEvents = [];
  }

  initModels() {
    if (!this.state) {
      this.state = new State(configData);
    }
    if (!this.configModel) {
      this.configModel = new ConfigModel(this.state, this, {
        updateContractAddress: () => this.updateContractAddress(),
        refreshWidget: () => this.refreshWidget(),
        refreshDappContainer: () => this.refreshDappContainer(),
        setContaiterTag: (value: any) => this.setContaiterTag(value),
        updateTheme: () => this.updateTheme(),
        onChainChanged: () => this.onChainChanged(),
        onWalletConnected: () => this.onWalletConnected()
      });
    }
    if (!this.swapModel) {
      this.swapModel = new SwapModel(this, this.state, this.configModel, {
        setHintLabel: (value: boolean) => {
          if (this.minSwapHintLabel) this.minSwapHintLabel.visible = value;
        },
        showModalFees: () => this.showModalFees()
      });
    }
  }

  get chainId() {
    return this.configModel.chainId;
  }

  private get rpcWallet() {
    return this.configModel.rpcWallet;
  }

  get category() {
    return this.configModel.category;
  }
  set category(value: Category) {
    this.configModel.category = value;
  }

  get providers() {
    return this.configModel.providers;
  }
  set providers(value: IProviderUI[]) {
    this.configModel.providers = value;
  }

  get commissions() {
    return this.configModel.commissions ?? [];
  }
  set commissions(value: ICommissionInfo[]) {
    this.configModel.commissions = value;
  }

  get defaultChainId() {
    return this.configModel.defaultChainId;
  }
  set defaultChainId(value: number) {
    this.configModel.defaultChainId = value;
  }

  get wallets() {
    return this.configModel.wallets;
  }
  set wallets(value: IWalletPlugin[]) {
    this.configModel.wallets = value;
  }

  get networks() {
    return this.configModel.networks ?? [];
  }
  set networks(value: INetworkConfig[]) {
    this.configModel.networks = value;
  }

  get showHeader() {
    return this.configModel.showHeader;
  }
  set showHeader(value: boolean) {
    this.configModel.showHeader = value;
  }

  get title() {
    return this.configModel.title;
  }
  set title(value: string) {
    this.configModel.title = value ?? '';
  }

  get logo() {
    return this.configModel.logo;
  }
  set logo(value: string) {
    this.configModel.logo = value ?? '';
  }	

	get widgetType() {
		return this._widgetType;
	}

	set widgetType(value: WidgetType) {
		this._widgetType = value;
	}

  set width(value: string | number) {
    this.resizeLayout();
  }

  getConfigurators() {
    this.initModels();
    return this.configModel.getConfigurators();
  }

  private refreshDappContainer = () => {
    const rpcWallet = this.rpcWallet;
    const data = {
      defaultChainId: this.defaultChainId,
      wallets: this.wallets,
      networks: this.networks,
      showHeader: this.showHeader,
      rpcWalletId: rpcWallet.instanceId,
			widgetType: this.widgetType
    }
    if (this.dappContainer?.setData) this.dappContainer.setData(data);
  }

  getData() {
    return this.configModel.getData();
  }

  async setData(value: ISwapWidgetData) {
    this.configModel.setData(value);
  }

  getTag() {
    return this.tag;
  }

  async setTag(value: any) {
    this.configModel.setTag(value);
  }

  private setContaiterTag(value: any) {
    if (this.dappContainer) this.dappContainer.setTag(value);
  }

  private updateStyle(name: string, value: any) {
    if (value) {
      this.style.setProperty(name, value);
    } else {
      this.style.removeProperty(name);
    }
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

  private updateContractAddress() {
    if (this.approvalModelAction) {
      if (this.configModel.campaignId !== undefined) {
        this.contractAddress = this.state.getProxyAddress();
      } else {
        this.contractAddress = '';
      }
      this.setApprovalSpenderAddress();
    }
  }

  private async refreshWidget() {
    this.swapModel.setProviders();
    await this.initData();
    await this.initializeWidgetConfig();
  }

  constructor(parent?: Container, options?: any) {
    super(parent, options);
    this.initModels();
  }

  private registerEvent() {
    this.clientEvents.push(this.$eventBus.register(this, EventId.SlippageToleranceChanged, () => { this.priceInfo.setData(this.swapModel.getPriceInfo(this.isPriceToggled)) }));
    this.clientEvents.push(this.$eventBus.register(this, EventId.ExpertModeChanged, () => {
      this.updateSwapButtonCaption();
    }));
  }

  private onChainChanged = async () => {
    const currentChainId = this.state.getChainId();
    if (currentChainId != null && currentChainId != undefined)
      this.swapBtn.visible = true;
    this.updateContractAddress();
    await this.initializeWidgetConfig();
  }

  private onWalletConnected = async () => {
    if (this.swapBtn) this.swapBtn.visible = true;
    this.updateContractAddress();
    await this.initializeWidgetConfig();
  }

  private initializeDefaultTokenPair() {
    if (this.swapModel.isCrossChain) {
      let { firstDefaultToken, secondDefaultToken } = this.swapModel.calculateDefaultTokens();
      this.firstTokenInput.chainId = firstDefaultToken.chainId;
      this.secondTokenInput.chainId = secondDefaultToken.chainId;
      this.swapModel.fromInputValue = new BigNumber(this.configModel.defaultInputValue);
      this.firstTokenInput.token = this.swapModel.fromToken;
      this.secondTokenInput.token = this.swapModel.toToken;
    }
    else {
      const providers = this.swapModel.originalData?.providers;
      if (providers && providers.length) {
        let { firstDefaultToken, secondDefaultToken } = this.swapModel.calculateDefaultTokens();
        this.firstTokenInput.chainId = firstDefaultToken.chainId;
        this.secondTokenInput.chainId = secondDefaultToken.chainId;
        this.swapModel.fromInputValue = new BigNumber(this.configModel.defaultInputValue);
        this.swapModel.toInputValue = new BigNumber(this.configModel.defaultOutputValue);
        this.firstTokenInput.token = this.swapModel.fromToken;
        this.secondTokenInput.token = this.swapModel.toToken;
        this.toggleReverseImage.cursor = 'default';
      }
    }
  }

  private initializeWidgetConfig = async () => {
    setTimeout(async () => {
      await this.configModel.initWallet();
      this.initializeDefaultTokenPair();
      await this.renderChainList();
      await this.updateBalances();
      const { fromToken, toToken, record, isCrossChain, fromInputValue, toInputValue } = this.swapModel;
      const isFixedPair = this.configModel.isFixedPair;
      this.updateTokenValues(fromToken, true);
      this.updateTokenValues(toToken, false);
      this.hIcon.enabled = this.vIcon.enabled = !isFixedPair && !isCrossChain;
      this.firstTokenInput.tokenReadOnly = isFixedPair;
      this.firstTokenInput.inputReadOnly = false;
      this.secondTokenInput.tokenReadOnly = isFixedPair;
      this.secondTokenInput.inputReadOnly = false;
      const { logo, title, tokens } = this.configModel;
      this.pnlBranding.visible = !!logo || !!title;
      if (logo?.startsWith('ipfs://')) {
        this.imgLogo.url = logo.replace('ipfs://', '/ipfs/');
      }
      else {
        this.imgLogo.url = logo;
      }
      this.lbTitle.caption = title;

      this.updateSwapButtonCaption();

      this.toggleReverseImage.cursor = isFixedPair ? 'default' : 'pointer';
      if (isCrossChain) {
        this.initRoutes();
        this.swapModel.toInputValue = new BigNumber(0);
        if (this.secondTokenInput) {
          this.secondTokenInput.value = '-';
          this.secondTokenInput.inputReadOnly = true;
        }
        this.toggleReverseImage.cursor = 'default';
        if (this.swapModel.isEstimated('from')) {
          this.swapModel.updateEstimatedPosition(false);
        }
      } else {
        if (this.secondTokenInput) {
          this.secondTokenInput.inputReadOnly = false;
        }
        this.toggleReverseImage.cursor = 'pointer';
      }
      if (fromInputValue.isGreaterThan(0)) {
        this.swapModel.updateEstimatedPosition(false);
        this.firstTokenInput.value = this.swapModel.fixedNumber(fromInputValue);
      }
      else if (toInputValue.isGreaterThan(0)) {
        this.swapModel.updateEstimatedPosition(true);
        this.secondTokenInput.value = this.swapModel.fixedNumber(toInputValue);
      }
      this.firstTokenInput.tokenDataListProp = getSupportedTokens(tokens, fromToken.chainId);
      this.secondTokenInput.tokenDataListProp = getSupportedTokens(tokens, toToken.chainId);
      if (!record)
        this.swapBtn.enabled = !this.swapModel.isSwapButtonDisabled;
      this.renderPriceInfo();
      await this.handleAddRoute();
    });
  }

  private async initApprovalModelAction() {
    this.approvalModelAction = await this.state.setApprovalModelAction({
      sender: this,
      payAction: this.onSubmit,
      onToBeApproved: async (token: ITokenObject, data?: any) => {
        if (this.swapModel.isCrossChain) {
          this.swapModel.crossChainApprovalStatus = ApprovalStatus.TO_BE_APPROVED;
        } else {
          this.swapModel.setMapStatus('approve', data.key, ApprovalStatus.TO_BE_APPROVED);
          this.swapModel.setMapStatus('swap', data.key, ApprovalStatus.TO_BE_APPROVED);
        }
        this.updateSwapButtonCaption();
        const enabled = !this.swapModel.isSwapButtonDisabled;
        this.swapBtn.enabled = enabled;
      },
      onToBePaid: async (token: ITokenObject, data?: any) => {
        if (this.swapModel.isCrossChain) {
          this.swapModel.crossChainApprovalStatus = ApprovalStatus.NONE;
        } else {
          this.swapModel.setMapStatus('approve', data.key, ApprovalStatus.NONE);
          this.swapModel.setMapStatus('swap', data.key, ApprovalStatus.TO_BE_APPROVED);
        }
        this.updateSwapButtonCaption();
        const enabled = !this.swapModel.isSwapButtonDisabled;
        this.swapBtn.enabled = enabled;
      },
      onApproving: async (token: ITokenObject, receipt?: string, data?: any) => {
        if (this.swapModel.isCrossChain) {
          this.swapModel.crossChainApprovalStatus = ApprovalStatus.APPROVING;
        } else {
          this.swapModel.setMapStatus('approve', data.key, ApprovalStatus.APPROVING);
        }
        this.updateSwapButtonCaption();
        this.showResultMessage('success', receipt);
        if ((this.swapModel.isApprovingRouter || this.swapModel.isCrossChain) && !this.swapBtn.rightIcon.visible)
          this.swapBtn.rightIcon.visible = true;
      },
      onApproved: async (token: ITokenObject, data?: any) => {
        if (this.swapModel.isCrossChain) {
          this.swapModel.crossChainApprovalStatus = ApprovalStatus.NONE;
        } else {
          this.swapModel.setMapStatus('approve', data.key, ApprovalStatus.NONE);
        }
        this.updateSwapButtonCaption();
        if (this.swapBtn.rightIcon.visible)
          this.swapBtn.rightIcon.visible = false;
        await this.handleAddRoute();
      },
      onApprovingError: async (token: ITokenObject, err: Error) => {
        this.showResultMessage('error', err);
        this.swapModel.crossChainApprovalStatus = ApprovalStatus.TO_BE_APPROVED;
        if (this.swapBtn.rightIcon.visible)
          this.swapBtn.rightIcon.visible = false;
      },
      onPaying: async (receipt?: string, data?: any) => {
        this.showResultMessage('success', receipt);
        this.onSwapConfirming(data.key);
      },
      onPaid: async (data?: any, receipt?: TransactionReceipt) => {
        this.onSwapConfirmed({ key: data.key, isCrossChain: this.swapModel.isCrossChain });
        await this.updateBalances();
        application.EventBus.dispatch(EventId.Paid, {
          isCrossChain: this.swapModel.isCrossChain,
          data: data ?? null,
          id: this.uuid,
          receipt: receipt
        });
      },
      onPayingError: async (err: Error) => {
        this.showResultMessage('error', err);
      }
    })
  }

  private async onRevertSwap() {
    if (this.swapModel.isCrossChain) return;
    this.swapModel.updateEstimatedPosition(!this.swapModel.isEstimated('from'));
    [this.swapModel.fromToken, this.swapModel.toToken] = [this.swapModel.toToken, this.swapModel.fromToken];
    const enabled = !this.swapModel.isMaxDisabled;
    this.maxButton.enabled = enabled;
    [this.swapModel.fromInputValue, this.swapModel.toInputValue] = [this.swapModel.toInputValue, this.swapModel.fromInputValue];
    [this.payBalance.caption, this.receiveBalance.caption] = [this.receiveBalance.caption, this.payBalance.caption];
    this.firstTokenInput.token = this.swapModel.fromToken;
    this.secondTokenInput.token = this.swapModel.toToken;
    this.firstTokenInput.value = this.swapModel.getInputValue(true);
    this.secondTokenInput.value = this.swapModel.getInputValue(false);

    await this.handleAddRoute();
  }

  private setupCrossChainPopup() {
    const { isCrossChain, srcChain, desChain, record, toToken } = this.swapModel;
    const arrows = this.swapModal.querySelectorAll('i-icon.arrow-down');
    if (!isCrossChain) {
      arrows.forEach((arrow: Icon) => {
        arrow.margin = { top: '0.75rem', bottom: '0.75rem' };
      });
    } else {
      arrows.forEach((arrow: Icon) => {
        arrow.margin = { top: '0.75rem', left: '6rem', bottom: '0.75rem', right: '6rem' };
      });
    }
    if (this.pnlReminderRejected) this.pnlReminderRejected.visible = false;
    if (isCrossChain && srcChain && desChain) {
      this.srcChainFirstPanel.visible = true;
      this.targetChainFirstPanel.visible = true;
      this.srcChainTokenImage.url = srcChain.image;
      this.srcChainTokenLabel.caption = srcChain.chainName;
      this.targetChainTokenImage.url = desChain.image;
      this.targetChainTokenLabel.caption = desChain.chainName;
      const { sourceVaultToken, targetVaultToken, sourceRouteObj, vaultTokenFromSourceChain, vaultTokenToTargetChain } = record;
      if (sourceVaultToken && sourceRouteObj) {
        this.srcChainSecondPanel.visible = true;
        this.srcChainVaultImage.url = srcChain.image;
        this.srcChainVaultLabel.caption = srcChain.chainName;
        this.srcVaultTokenImage.url = tokenAssets.getTokenIconPath(sourceVaultToken, srcChain.chainId);
        this.srcVaultTokenLabel.caption = sourceVaultToken.symbol;
        this.srcVaultTokenValue.caption = formatNumber(vaultTokenFromSourceChain);
        if (this.pnlReminderRejected) {
          this.pnlReminderRejected.visible = true;
          this.lbReminderRejectedValue.caption = `${formatNumber(vaultTokenFromSourceChain)} ${sourceVaultToken?.symbol}`;
        }
      } else {
        this.srcChainSecondPanel.visible = false;
      }
      if (targetVaultToken && targetVaultToken.symbol !== toToken?.symbol) {
        this.targetChainSecondPanel.visible = true;
        this.targetChainVaultImage.url = desChain.image;
        this.targetChainVaultLabel.caption = desChain.chainName;
        this.targetVaultTokenImage.url = tokenAssets.getTokenIconPath(targetVaultToken, desChain.chainId);
        this.targetVaultTokenLabel.caption = targetVaultToken.symbol;
        this.targetVaultTokenValue.caption = formatNumber(vaultTokenToTargetChain);
        // Hide vault info at toToken
        this.crossChainVaultInfoVstack.visible = false;
      } else {
        this.targetChainSecondPanel.visible = false;
        // Show vault info at the end if vaultTokenSymbol same as toToken
        this.crossChainVaultInfoVstack.visible = true;
      }
    } else {
      this.srcChainFirstPanel.visible = false;
      this.targetChainFirstPanel.visible = false;
      this.srcChainSecondPanel.visible = false;
      this.targetChainSecondPanel.visible = false;
      this.crossChainVaultInfoVstack.visible = false;
    }
  }

  private handleSwapPopup() {
    const { isFrom, isCrossChain, desChain, record, fromToken, toToken, fromInputValue, toInputValue } = this.swapModel;
    if (!record) return;
    this.setupCrossChainPopup();
    const currentChainId = this.state.getChainId();
    const slippageTolerance = this.state.slippageTolerance;
    this.fromTokenImage.url = tokenAssets.tokenPath(fromToken, currentChainId);
    this.fromTokenLabel.caption = fromToken?.symbol ?? '';
    this.fromTokenValue.caption = formatNumber(fromInputValue, 4);
    this.toTokenImage.url = tokenAssets.tokenPath(toToken, isCrossChain ? desChain?.chainId : currentChainId);
    this.toTokenLabel.caption = toToken?.symbol ?? '';
    this.toTokenValue.caption = formatNumber(toInputValue, 4);
    const minimumReceived = this.swapModel.minReceivedMaxSold;
    if (minimumReceived || minimumReceived == 0) {
      this.payOrReceiveValue.caption = formatNumber(minimumReceived, 4);
    } else {
      this.payOrReceiveValue.caption = ' - ';
    }
    this.payOrReceiveToken.caption = isFrom ? this.fromTokenLabel.caption : this.toTokenLabel.caption;
    const caption = this.i18n.get(
        isFrom ? 'input_is_estimated_if_the_price_change_by_more_than_your_transaction_will_revert' : 'output_is_estimated_if_the_price_change_by_more_than_your_transaction_will_revert',
        {value: `${slippageTolerance}`}
      )
    this.lbEstimate.caption = caption;
    this.lbPayOrReceive.caption = isFrom ? '$you_will_pay_at_most' : '$you_will_receive_at_least';
    this.priceInfo2.setData(this.swapModel.getPriceInfo(this.isPriceToggled));

    this.swapModal.visible = true;
  }

  private onCloseModal(name: string) {
    this[name].visible = false;
  }

  private doSwap() {
    this.approvalModelAction.doPayAction(this.swapModel.record);
  }

  private async updateTokenValues(token: ITokenObject, isFrom: boolean) {
    if (!token) return;
    const balance = this.swapModel.getBalance(token);
    if (isFrom) {
      const enabled = !this.swapModel.isMaxDisabled;
      this.maxButton.enabled = enabled;
      this.swapModel.updateTokenValues(token, true, this.firstTokenInput);
      this.payBalance.caption = `${this.i18n.get('$balance')}: ${formatNumber(balance, 4)} ${token.symbol}`;
      await this.updateTokenInput(true);
    } else {
      this.swapModel.updateTokenValues(token, false, this.secondTokenInput);
      this.receiveBalance.caption = `${this.i18n.get('$balance')}: ${formatNumber(balance, 4)} ${token.symbol}`;
      await this.updateTokenInput(false);
    }
  }

  private async onSelectToken(token: ITokenObject, isFrom: boolean) {
    if (!token) return
    this.firstTokenInput.enabled = false;
    this.secondTokenInput.enabled = false;
    // if (token.isNew && this.state.isRpcWalletConnected()) {
    //   const rpcWallet = this.state.getRpcWallet();
    //   await tokenStore.updateAllTokenBalances(rpcWallet);
    // }
    await this.updateTokenValues(token, isFrom);
    await this.handleAddRoute();
    this.firstTokenInput.enabled = true;
    this.secondTokenInput.enabled = true;
  }

  private setApprovalSpenderAddress() {
    const item = this.swapModel.record;
    if (!item) return;
    const market = this.state.getProviderByKey(item.provider)?.key || '';
    if (this.approvalModelAction) {
      if (this.swapModel.isCrossChain && item.contractAddress) {
        setApprovalModalSpenderAddress(this.state, market, item.contractAddress);
      } else if (this.configModel.campaignId !== undefined) {
        this.contractAddress = this.state.getProxyAddress();
        setApprovalModalSpenderAddress(this.state, market, this.contractAddress);
      } else {
        setApprovalModalSpenderAddress(this.state, market);
      }
    }
  }

  private async updateTokenInput(isFrom: boolean, init?: boolean) {
    const inputEl = isFrom ? this.firstTokenInput : this.secondTokenInput;
    if (inputEl) inputEl.value = this.swapModel.getInputValue(isFrom);
  }

  private async onSelectRouteItem(item: any) {
    if (this.swapModel.isFrom) {
      if (this.payCol.children) {
        let balanceValue = item.amountIn;
        this.firstTokenInput.value = this.swapModel.fixedNumber(balanceValue);
        this.swapModel.fromInputValue = typeof balanceValue !== 'object' ? new BigNumber(balanceValue) : balanceValue;
      }
    } else {
      if (this.receiveCol.children) {
        let balanceValue = item.amountOut;
        this.secondTokenInput.value = this.swapModel.fixedNumber(balanceValue);
        this.swapModel.toInputValue = typeof balanceValue !== 'object' ? new BigNumber(balanceValue) : balanceValue;
      }
    }

    this.swapModel.record = item;
    if (this.swapModel.isCrossChain && this.swapModel.fromToken && !this.swapModel.fromToken.isNative && this.state.isRpcWalletConnected()) {
      try {
        this.setApprovalSpenderAddress();
        await this.approvalModelAction.checkAllowance(this.swapModel.fromToken, this.swapModel.fromInputValue.toFixed());
      } catch (e) {
        console.log('Cannot check the Approval status (Cross Chain)', e);
      }
    }
    const isButtonLoading = this.swapModel.isButtonLoading;
    if (this.swapBtn.rightIcon.visible != isButtonLoading) {
      this.swapBtn.rightIcon.visible = isButtonLoading;
    }
    if (this.priceInfo)
      await this.priceInfo.setData(this.swapModel.getPriceInfo(this.isPriceToggled));
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
      const limit = (isFrom ? this.swapModel.fromToken?.decimals : this.swapModel.toToken?.decimals) || 18;
      const value = new BigNumber(amount).dp(limit, ROUNDING_NUMBER);
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
          if (!this.swapModel.fromInputValue.eq(value)) {
            this.swapModel.fromInputValue = value;
            this.swapModel.updateEstimatedPosition(false);
            valueChanged = true;
          }
          if (!isLastDot)
            fromInput.value = value.toFixed();
        } else {
          if (!this.swapModel.toInputValue.eq(value)) {
            this.swapModel.toInputValue = value;
            this.swapModel.updateEstimatedPosition(true);
            valueChanged = true;
          }
          if (!isLastDot)
            toInput.value = value.toFixed();
        }
        if (valueChanged) await this.handleAddRoute();
      }

    }, 1000);
  }

  private resetValuesByInput() {
    this.initRoutes();
    if (this.priceInfo) this.priceInfo.setData(this.swapModel.getPriceInfo(this.isPriceToggled));
    this.swapModel.fromInputValue = new BigNumber(0);
    this.swapModel.toInputValue = new BigNumber(0);
  }

  private initRoutes() {
    this.swapModel.record = null;
    this.isPriceToggled = false;
    this.swapBtn.visible = false;
  }

  private async handleAddRoute() {
    const { isCrossChain, srcChain, desChain, fromToken, toToken, fromInputValue, toInputValue } = this.swapModel;
    if (!fromToken || !toToken || !(fromInputValue.gt(0) || toInputValue.gt(0))) {
      this.initRoutes();
      this.showEmptyRoute();
      this.lbYouPayValue.caption = '0';
      this.minSwapHintLabel.visible = false;
      return;
    };
    this.initRoutes();
    let listRouting: any[] = [];
    this.updateContractAddress();
    if (!isCrossChain) {
      listRouting = await this.swapModel.getSwapRoutesData();
    } else if (srcChain && desChain) {
      listRouting = await this.swapModel.getCrossChainRouteData();
      if (this.minSwapHintLabel) {
        this.minSwapHintLabel.visible = !listRouting.length;
      }
    }
    if (listRouting[0] && isCrossChain) {
      const { assetSymbol, vault, targetVaultAssetBalance, targetVaultBondBalance, vaultTokenToTargetChain, vaultToOswapPrice, softCap, minValue } = await this.swapModel.getVaultData(listRouting[0]);
      this.targetVaultAssetBalanceLabel1.caption = `${this.i18n.get('$vault_asset_balance')}: ${formatNumber(targetVaultAssetBalance.toNumber(), 4)} ${assetSymbol}`;
      this.targetVaultAssetBalanceLabel2.caption = `${this.i18n.get('$vault_asset_balance')}: ${formatNumber(targetVaultAssetBalance.toNumber(), 4)} ${assetSymbol}`;
      if (!vault.vaultGroup) {
        this.targetVaultBondBalanceLabel1.caption = `${this.i18n.get('$vault_bond_balance')}: ${formatNumber(targetVaultBondBalance.toNumber(), 4)} ${assetSymbol}`;
        this.targetVaultBondBalanceLabel2.caption = `${this.i18n.get('$vault_bond_balance')}: ${formatNumber(targetVaultBondBalance.toNumber(), 4)} ${assetSymbol}`;
      } else if (vault.vaultGroup === 'OSWAP') {
        this.targetVaultBondBalanceLabel1.caption = `${this.i18n.get('$vault_bond_balance')}: ${formatNumber(targetVaultBondBalance.toNumber(), 4)} OSWAP`;
        this.targetVaultBondBalanceLabel2.caption = `${this.i18n.get('$vault_bond_balance')}: ${formatNumber(targetVaultBondBalance.toNumber(), 4)} OSWAP`;
      } else {
        this.targetVaultBondBalanceLabel1.caption = `${this.i18n.get('$vault_bond_balance')}: ${formatNumber(targetVaultBondBalance.toNumber(), 4)} OSWAP ≈ ${formatNumber(targetVaultBondBalance.div(vaultToOswapPrice).toNumber(), 4)} ${assetSymbol}`;
        this.targetVaultBondBalanceLabel2.caption = `${this.i18n.get('$vault_bond_balance')}: ${formatNumber(targetVaultBondBalance.toNumber(), 4)} OSWAP ≈ ${formatNumber(targetVaultBondBalance.div(vaultToOswapPrice).toNumber(), 4)} ${assetSymbol}`;
      }
      this.crossChainSoftCapLabel1.caption = softCap ? `${this.i18n.get('$cap')}: ${formatNumber(softCap)} ${assetSymbol}` : "-";
      this.crossChainSoftCapLabel2.caption = softCap ? `${this.i18n.get('$cap')}: ${formatNumber(softCap)} ${assetSymbol}` : "-";
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
        this.swapModalConfirmBtn.caption = '$cap_reached';
        this.swapModalConfirmBtn.enabled = false;
      } else if (vaultTokenToTargetChain.gt(targetVaultAssetBalance) || vaultTokenToTargetChain.multipliedBy(vaultToOswapPrice).gt(targetVaultBondBalance)) {
        this.swapModalConfirmBtn.caption = '$exceed_vault_asset_balance_or_bond_balance';
        this.swapModalConfirmBtn.enabled = false;
      } else {
        this.swapModalConfirmBtn.enabled = true;
      }
      this.swapModel.crossChainApprovalStatus = listRouting[0].isApproveButtonShown ? ApprovalStatus.TO_BE_APPROVED : ApprovalStatus.NONE;
    }
    this.disableSelectChain(false);
    this.disableSelectChain(false, true);

    this.swapModalConfirmBtn.caption = '$confirm_swap';
    this.swapModalConfirmBtn.enabled = true;
    this.swapModel.record = listRouting[0] || null;
    this.swapModel.swapButtonStatusMap = {};
    this.swapModel.approveButtonStatusMap = {};
    this.initRoutes();
    if (listRouting.length) {
      // this.receiveCol.classList.add('bg-box--active');
      this.lbRouting.opacity = 0;
      const option = listRouting[0];
      await this.onSelectRouteItem(option);
    } else {
      // this.receiveCol.classList.remove('bg-box--active');
      this.showEmptyRoute();
    }
    if (this.swapModel.record) {
      this.setApprovalSpenderAddress();
      await this.approvalModelAction.checkAllowance(this.swapModel.fromToken as ITokenObject, this.swapModel.fromInputValue.toFixed(), this.swapModel.record);
      this.swapBtn.visible = true;
      const total = this.swapModel.record?.fromAmount ? new BigNumber(this.swapModel.record.fromAmount) : new BigNumber(0);
      this.lbYouPayValue.caption = `${formatNumber(total)} ${this.swapModel.fromToken?.symbol}`;
    }
    else {
      this.updateSwapButtonCaption();
      this.swapBtn.visible = true;
      this.swapBtn.enabled = !this.swapModel.isSwapButtonDisabled;
    }
  }

  private showEmptyRoute() {
    this.lbRouting.opacity = 0.75;
    if (this.priceInfo)
      this.priceInfo.setData(this.swapModel.getPriceInfo(this.isPriceToggled));
    if (this.swapModel.isEstimated('to')) {
      this.swapModel.toInputValue = new BigNumber(0);
      this.secondTokenInput.value = '';
    } else {
      this.swapModel.fromInputValue = new BigNumber(0);
      this.firstTokenInput.value = '';
    }
  }

  // Price Info
  private onTogglePrice(priceInfo: PriceInfo) {
    this.isPriceToggled = !this.isPriceToggled;
    priceInfo.setData(this.swapModel.getPriceInfo(this.isPriceToggled));
  }

  private async updateBalances() {
    const { fromToken, toToken } = this.swapModel;
    const chainIds = [...new Set([fromToken.chainId, toToken.chainId])];
    for (let chainId of chainIds) {
      await tokenStore.updateTokenBalancesByChainId(chainId);
    }
    if (fromToken) {
      const balance = this.swapModel.getBalance(fromToken);
      this.payBalance.caption = `${this.i18n.get('$balance')}: ${formatNumber(balance, 4)} ${fromToken.symbol}`;
    }
    if (toToken) {
      const balance = this.swapModel.getBalance(toToken);
      this.receiveBalance.caption = `${this.i18n.get('$balance')}: ${formatNumber(balance, 4)} ${toToken.symbol}`;
    }
    const enabled = !this.swapModel.isMaxDisabled;
    this.maxButton.enabled = enabled;
  }

  private updateSwapButtonCaption() {
    if (this.swapBtn && this.swapBtn.hasChildNodes()) {
      this.swapBtn.caption = this.swapModel.determineSwapButtonCaption;
    }
  }

  private onSwapConfirming = (key: any) => {
    this.swapModel.setMapStatus('swap', key, ApprovalStatus.APPROVING);
    this.updateSwapButtonCaption();
    if (!this.swapBtn.rightIcon.visible)
      this.swapBtn.rightIcon.visible = true;
  }
  private onSwapConfirmed = async (data: any) => {
    const { key, isCrossChain } = data;
    this.swapModel.setMapStatus('swap', key, ApprovalStatus.TO_BE_APPROVED);
    this.updateSwapButtonCaption();
    if (this.swapBtn.rightIcon.visible)
      this.swapBtn.rightIcon.visible = false;
    await this.handleAddRoute();
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
    const { record, isSwapButtonDisabled, isCrossChain, isApproveButtonShown, crossChainApprovalStatus, isPriceImpactTooHigh } = this.swapModel;
    if (!record || isSwapButtonDisabled) return;

    const isApproveShown = isCrossChain ? crossChainApprovalStatus !== ApprovalStatus.NONE : isApproveButtonShown;
    if (isApproveShown) {
      this.approveRouterMax();
      return;
    }
    if (isPriceImpactTooHigh) {
      this.$eventBus.dispatch(EventId.ShowExpertModal);
      return;
    }
    this.handleSwapPopup();
  }

  private onSubmit = async () => {
    const { fromInputValue, fromToken, toInputValue, toToken } = this.swapModel;
    this.swapModal.visible = false;
    this.showResultMessage('warning', `${this.i18n.get('$swapping')} ${formatNumber(fromInputValue, 4)} ${fromToken?.symbol} ${this.i18n.get('$to')} ${formatNumber(toInputValue, 4)} ${toToken?.symbol}`);
    const error = await this.swapModel.onSubmit();
    if (error) {
      this.showResultMessage('error', error as any);
    }
  }

  private approveRouterMax = () => {
    this.showResultMessage('warning', '$approving');
    this.setApprovalSpenderAddress();
    const { fromToken, fromInputValue, record } = this.swapModel;
    this.approvalModelAction.doApproveAction(fromToken as ITokenObject, fromInputValue.toFixed(), record);
  }

  private onSetMaxBalance = async () => {
    const fromToken = this.swapModel.fromToken;
    if (!fromToken?.symbol) return;
    this.swapModel.isFrom = false;
    const address = fromToken?.address || fromToken?.symbol;
    let balance = this.swapModel.getBalance(fromToken);
    let inputVal = new BigNumber(balance);
    if (!address) {
      inputVal = new BigNumber(0);
    }
    if (inputVal.eq(this.swapModel.fromInputValue)) return;
    this.swapModel.fromInputValue = inputVal;
    const decimals = fromToken?.decimals || 18;
    this.firstTokenInput.value = this.swapModel.fromInputValue.dp(decimals, ROUNDING_NUMBER).toFixed();
    await this.handleAddRoute();
  }

  private renderPriceInfo() {
    const padding = { top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' };
    if (!this.priceInfo) {
      this.priceInfo = <i-scom-swap-price-info display="block" width={'auto'} height={'auto'}></i-scom-swap-price-info>
      this.pnlPriceInfo.appendChild(this.priceInfo);
      this.priceInfo.onTogglePrice = this.onTogglePrice.bind(this);
    }
    this.priceInfo.setData(this.swapModel.getPriceInfo(this.isPriceToggled));

    if (!this.priceInfo2) {
      this.priceInfo2 = <i-scom-swap-price-info padding={{ ...padding }} display="block" width={'auto'} height={'auto'}></i-scom-swap-price-info>
      this.priceInfo2.onTogglePrice = this.onTogglePrice.bind(this);
    }
    this.priceInfoContainer.appendChild(this.priceInfo2);
  }

  get isMetaMask() {
    return Wallet.getClientInstance().clientSideProvider?.name === WalletPlugin.MetaMask;
  }

  private disableSelectChain = (disabled: boolean, isDes?: boolean) => {
    const chains = isDes ? this.desChainList : this.srcChainList;
    const imgs = chains.querySelectorAll('i-image');
    imgs.forEach((elm: Element) => {
      const img = elm as Image;
      img.enabled = !disabled;
      if (disabled) {
        img.cursor = 'default';
      } else {
        img.cursor = 'pointer';
      }
    });
  }

  private selectSourceChain = async (obj: INetwork, img?: Image) => {
    const { isCrossChainEnabled, srcChain, bridgeSupportedChainList } = this.swapModel;
    if (!isCrossChainEnabled) return;
    this.disableSelectChain(true, false);
    const selected = this.srcChainList.querySelector('.icon-selected') as Control;
    selected && this.updateChainIcon(selected, false);
    const oldSourceChain = srcChain;
    try {
      this.swapModel.srcChain = obj;
      if (img) {
        this.updateChainIcon(img, true);
      } else {
        const currentNetwork = getNetworkInfo(bridgeSupportedChainList.find((f: INetwork) => f.chainId == obj.chainId)?.chainId);
        const img = this.srcChainList.querySelector(`[data-tooltip="${currentNetwork?.chainName}"]`) as Control;
        if (img) this.updateChainIcon(img, true);
      }
    } catch (err) {
      console.log('err', err)
      if (oldSourceChain) {
        this.swapModel.srcChain = oldSourceChain;
        if (selected) this.updateChainIcon(selected, true);
      } else {
        this.swapModel.srcChain = getNetworkInfo(bridgeSupportedChainList[0]?.chainId);
        const elm = this.srcChainList?.firstElementChild as Control;
        elm && this.updateChainIcon(elm, true);
      }
    }
    if (this.swapModel.srcChain) {
      this.srcChainLabel.caption = this.swapModel.srcChain.chainName;
    }
    this.firstTokenInput.tokenDataListProp = getSupportedTokens(this.configModel.tokens, this.swapModel.srcChain.chainId);
    this.disableSelectChain(false, false);
  }

  private selectDestinationChain = async (obj: INetwork, img?: Image) => {
    const { isCrossChainEnabled, desChain, bridgeSupportedChainList } = this.swapModel;
    if (!isCrossChainEnabled) return;
    this.disableSelectChain(true, true);
    const selected = this.desChainList.querySelector('.icon-selected') as Control;
    selected && this.updateChainIcon(selected, false);
    const oldDestinationChain = desChain;
    try {
      this.swapModel.desChain = obj;
      if (img) {
        this.updateChainIcon(img, true);
      } else {
        const currentNetwork = getNetworkInfo(bridgeSupportedChainList.find((f: INetwork) => f.chainId == obj.chainId)?.chainId);
        const img = this.desChainList.querySelector(`[data-tooltip="${currentNetwork?.chainName}"]`) as Control;
        img && this.updateChainIcon(img, true);
      }
    } catch (err) {
      console.log('err', err)
      if (oldDestinationChain) {
        this.swapModel.desChain = oldDestinationChain;
        selected && this.updateChainIcon(selected, true);
      } else {
        this.swapModel.desChain = getNetworkInfo(bridgeSupportedChainList[0]?.chainId);
        const elm = this.desChainList?.firstElementChild as Control;
        elm && this.updateChainIcon(elm, true);
      }
    }
    if (this.swapModel.desChain) {
      this.desChainLabel.caption = this.swapModel.desChain.chainName;
    }
    // this.setTargetTokenList();
    this.secondTokenInput.tokenDataListProp = getSupportedTokens(this.configModel.tokens, this.swapModel.desChain.chainId);
    this.disableSelectChain(false, true);
  }

  private updateChainIcon(el: Control, selected: boolean) {
    if (selected) {
      el.classList.add('icon-selected');
      el.border.color = Theme.colors.primary.main;
      el.cursor = 'default';
    } else {
      el.classList.remove('icon-selected');
      el.border.color = 'transparent';
      el.cursor = 'pointer';
    }
  }

  private onSelectSourceChain = async (obj: INetwork, img?: Image) => {
    this.firstTokenInput.chainId = obj.chainId;
    if (obj.chainId === this.swapModel.srcChain?.chainId) return;
    const rpcWallet = this.state.getRpcWallet();
    await rpcWallet.switchNetwork(obj.chainId);
  }

  private onSelectDestinationChain = async (obj: INetwork, img?: Image) => {
    this.secondTokenInput.chainId = obj.chainId;
    if (obj.chainId === this.swapModel.desChain?.chainId) return;
    await this.selectDestinationChain(obj, img);
    const tokenList = getSupportedTokens(this.configModel.tokens, obj.chainId);
    this.swapModel.toToken = tokenList[0];
    this.secondTokenInput.token = this.swapModel.toToken;
    await tokenStore.updateTokenBalancesByChainId(obj.chainId);
    const balance = this.swapModel.getBalance(this.swapModel.toToken);
    this.receiveBalance.caption = `${this.i18n.get('$balance')}: ${formatNumber(balance, 4)} ${this.swapModel.toToken.symbol}`;
    const enabled = !this.swapModel.isMaxDisabled;
    this.maxButton.enabled = enabled;
    await this.updateTokenValues(this.swapModel.toToken, false);
    await this.handleAddRoute();
  }

  private initChainIcon = (network: INetwork, isDes?: boolean) => {
    const img = new Image(undefined, {
      width: 32,
      height: 32,
      margin: { top: '0.25rem', right: '0.5rem' },
      border: { radius: '50%', width: '2px', style: 'solid', color: 'transparent' },
      padding: { top: '0.25rem', right: '0.25rem', bottom: '0.25rem', left: '0.25rem' },
      url: network.image,
      tooltip: { content: network.chainName },
      cursor: 'pointer'
    });
    // img.url = network.image;
    // img.tooltip.content = network.chainName;
    img.classList.add('chain-icon');
    img.setAttribute('data-tooltip', network.chainName); // for query
    if (isDes) {
      img.onClick = () => this.onSelectDestinationChain(network, img);
      this.desChainList.appendChild(img);
    } else {
      if (!this.isMetaMask) {
        img.tooltip.content = this.i18n.get('swap_supports_this_network_please_switch_network_in_the_connected_wallet', {chainId: `${network.chainId}`, chainName: network.chainName});
        img.cursor = 'default';
      }
      img.setAttribute('network-name', network.chainName);
      img.setAttribute('chain-id', `${network.chainId}`);
      img.onClick = () => this.onSelectSourceChain(network, img);
      this.srcChainList.appendChild(img);
    }
  };

  private renderChainList = async () => {
    if (!this.configModel.isCrossChainSwap) return;
    this.swapModel.updateBridgeSupportChainList();
    const { bridgeSupportedChainList, fromToken, toToken } = this.swapModel;
    if (bridgeSupportedChainList.length < 2) return;
    this.srcChainList.innerHTML = '';
    this.desChainList.innerHTML = '';
    this.swapModel.srcChain = undefined;
    this.swapModel.desChain = undefined;
    bridgeSupportedChainList.forEach((v: INetworkConfig) => {
      const network = getNetworkInfo(v.chainId);
      this.initChainIcon(network, false);
      this.initChainIcon(network, true);
    });

    const firstChainId = fromToken?.chainId;
    const secondChainId = toToken?.chainId;
    if (firstChainId && secondChainId) {
      const firstNetwork = getNetworkInfo(firstChainId);
      const secondNetwork = getNetworkInfo(secondChainId);
      await this.selectSourceChain(firstNetwork);
      await this.selectDestinationChain(secondNetwork);
    }
    this.srcChainBox.visible = true;
    this.desChainBox.visible = true;
  };

  showModalFees = () => {
    const { feeDetails, fromToken, tradeFeeExactAmount } = this.swapModel;
    this.feesInfo.clearInnerHTML();
    feeDetails.forEach((fee) => {
      const feeValue = FormatUtils.formatNumber(fee.value.toFixed(), { decimalFigures: 4 });
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
          <i-label margin={{ left: 'auto' }} caption={`${feeValue} ${fromToken?.symbol}`} />
        </i-hstack>
      )
    })
    this.feesInfo.appendChild(
      <i-hstack horizontalAlignment="space-between" verticalAlignment="center" margin={{ top: 16 }}>
        <i-hstack verticalAlignment="center">
          <i-label caption="$total_transaction_fee" />
        </i-hstack>
        <i-label margin={{ left: 'auto' }} caption={tradeFeeExactAmount} />
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

  private resizeLayout() {
    if (!this.wrapperSwap) return;
    const tagWidth = Number(this.tag?.width);
    if ((this.offsetWidth !== 0 && this.offsetWidth < 550) || (window as any).innerWidth < 550 || (!isNaN(tagWidth) && tagWidth !== 0 && tagWidth < 550)) {
      this.wrapperSwap.templateColumns = ['auto'];
      this.toggleReverseImage.alignItems = 'center';
      this.toggleReverseImage.padding = { bottom: '1rem', top: '1rem' };
      this.hIcon.visible = false;
      this.vIcon.visible = true;
    } else {
      this.wrapperSwap.templateColumns = ['1fr', '32px', '1fr'];
      this.toggleReverseImage.alignItems = 'end';
      this.toggleReverseImage.padding = { bottom: '40px' };
      this.hIcon.visible = true;
      this.vIcon.visible = false;
    }
  }

  private async initData() {
    if (!this.isInited) {
      await this.initApprovalModelAction();
      this.isInited = true;
    }
  }

  async init() {
    this.i18n.init({...mainJson});
    await super.init();
    this.$eventBus = application.EventBus;
    this.registerEvent();
    this.updateSwapButtonCaption();
    this.initExpertModal();
    const dexList = getDexList();
    this.state.setDexInfoList(dexList);
		const widgetType = this.getAttribute('widgetType', true);
		if (widgetType) this.widgetType = widgetType;
    const lazyLoad = this.getAttribute('lazyLoad', true, false);
    if (!lazyLoad) {
      const campaignId = this.getAttribute('campaignId', true);
      const category = this.getAttribute('category', true, DEAULT_SWAP_TYPE);
      const providers = this.getAttribute('providers', true, []);
      const commissions = this.getAttribute('commissions', true, []);
      const defaultChainId = this.getAttribute('defaultChainId', true);
      const networks = this.getAttribute('networks', true);
      const wallets = this.getAttribute('wallets', true);
      const showHeader = this.getAttribute('showHeader', true);
      const title = this.getAttribute('title', true);
      const logo = this.getAttribute('logo', true);
      const defaultInputValue = this.getAttribute('defaultInputValue', true);
      const defaultOutputValue = this.getAttribute('defaultOutputValue', true);
      const defaultInputToken = this.getAttribute('defaultInputToken', true);
      const defaultOutputToken = this.getAttribute('defaultOutputToken', true);
      const apiEndpoints = this.getAttribute('apiEndpoints', true);
      let data = {
        campaignId,
        category,
        providers,
        commissions,
        defaultChainId,
        networks,
        wallets,
        showHeader,
        title,
        logo,
        defaultInputValue,
        defaultOutputValue,
        defaultInputToken,
        defaultOutputToken,
        apiEndpoints
      };
      if (!this.configModel.isEmptyData(data)) {
        await this.setData(data);
      }
    };
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
        <i-panel id="swapComponent" background={{ color: Theme.background.main }} overflow={'hidden'}>
          <i-panel class={swapStyle}>
            <i-panel
              id="swapContainer"
              width={720}
              maxWidth={'100%'}
              minHeight={340}
              margin={{ left: 'auto', right: 'auto' }}
              padding={{ top: '1rem', left: '1rem', right: '1rem', bottom: '1rem' }}
            >
              <i-vstack id="pnlBranding" margin={{ bottom: '0.25rem' }} gap="0.5rem" horizontalAlignment="center">
                <i-image id='imgLogo' height={100}></i-image>
                <i-label id='lbTitle' font={{ bold: true, size: '1.5rem' }}></i-label>
              </i-vstack>
              <i-panel
                margin={{ top: '0.5rem', bottom: '1rem' }}
                border={{ radius: '1rem' }}
              >
                <i-grid-layout
                  id="wrapperSwap"
                  templateColumns={['1fr', '32px', '1fr']}
                  gap={{ column: 10 }}
                  mediaQueries={[
                    {
                      maxWidth: '767px',
                      properties: {
                        templateColumns: ['auto']
                      }
                    }
                  ]}
                >
                  <i-vstack gap={5} minWidth={230} width="100%">
                    <i-vstack id="srcChainBox" width="100%" margin={{ top: 8, bottom: 8 }} visible={false}>
                      <i-hstack gap={8} horizontalAlignment="space-between">
                        <i-label opacity={0.8} caption="$source_chain" minWidth="7rem" />
                        <i-label id="srcChainLabel" textOverflow="ellipsis" margin={{ left: 'auto' }} caption="-" />
                      </i-hstack>
                      <i-hstack id="srcChainList" wrap="wrap" verticalAlignment="center" maxWidth="100%" />
                    </i-vstack>
                    <i-panel minHeight={120} margin={{ top: 'auto' }}>
                      <i-vstack gap={8}>
                        <i-vstack width="100%" gap={8}>
                          <i-vstack width="100%">
                            <i-label caption="$you_swap" font={{ size: '1.125rem' }}></i-label>
                          </i-vstack>
                          <i-hstack gap={'0.5rem'} horizontalAlignment="end" verticalAlignment="center" width="100%">
                            <i-label id="payBalance" opacity={0.55} caption="$balance"></i-label>
                            <i-button
                              id="maxButton" class="btn-max"
                              caption="$max" enabled={false}
                              font={{ weight: 600, size: '1rem', color: Theme.colors.primary.contrastText }}
                              lineHeight={1.5}
                              border={{ radius: '0.5rem' }}
                              padding={{ left: '0.5rem', right: '0.5rem' }}
                              onClick={this.onSetMaxBalance}
                            ></i-button>
                          </i-hstack>
                        </i-vstack>
                        <i-panel
                          id="payCol"
                          class="bg-box"
                          background={{ color: Theme.input.background }}
                          width="100%"
                          margin={{ top: 'auto' }}
                          border={{ radius: '1rem', width: '2px', style: 'solid', color: 'transparent' }}
                        >
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
                            height={'auto'} width={'100%'}
                            display='flex'
                            font={{ size: '1.25rem' }}
                            padding={{ left: '0.75rem', right: '0.75rem' }}
                            overflow={'hidden'}
                            tokenButtonStyles={{
                              background: { color: Theme.background.main },
                              padding: { top: '0.5rem', bottom: '0.5rem', left: '0.5rem', right: '0.5rem' },
                              border: { radius: 8 },
                              font: { size: '1rem', weight: 700, color: Theme.input.fontColor },
                              lineHeight: 1.5,
                              opacity: 1
                            }}
                            onInputAmountChanged={this.onTokenInputChange}
                            onSelectToken={(token: ITokenObject) => this.onSelectToken(token, true)}
                          ></i-scom-token-input>
                        </i-panel>
                      </i-vstack>
                    </i-panel>
                    <i-hstack horizontalAlignment="space-between">
                      <i-label id="lbYouPayTitle" caption="$you_pay" font={{ size: '1rem' }}></i-label>
                      <i-label id="lbYouPayValue" caption="0" font={{ size: '1rem' }}></i-label>
                    </i-hstack>
                  </i-vstack>
                  <i-hstack
                    id="toggleReverseImage"
                    alignItems="end" justifyContent="center"
                    stack={{ basis: '32px' }}
                    padding={{ bottom: 40 }}
                    onClick={this.onRevertSwap}
                    mediaQueries={[
                      {
                        maxWidth: '767px',
                        properties: {
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: { bottom: '1rem', top: '1rem' }
                        }
                      }
                    ]}
                  >
                    <i-icon
                      id="hIcon"
                      width={32} height={32} name="arrows-alt-h" fill={Theme.text.primary}
                      padding={{ left: '0.45rem', right: '0.45rem', top: '0.45rem', bottom: '0.45rem' }}
                      background={{ color: Theme.input.background }}
                      border={{ radius: '50%' }}
                      mediaQueries={[
                        {
                          maxWidth: '767px',
                          properties: {
                            visible: false
                          }
                        }
                      ]}
                    />
                    <i-icon
                      id="vIcon"
                      width={32} height={32} name="arrows-alt-v" fill={Theme.text.primary}
                      padding={{ left: '0.45rem', right: '0.45rem', top: '0.45rem', bottom: '0.45rem' }}
                      background={{ color: Theme.input.background }}
                      border={{ radius: '50%' }}
                      visible={false}
                      mediaQueries={[
                        {
                          maxWidth: '767px',
                          properties: {
                            visible: true
                          }
                        }
                      ]}
                    />
                  </i-hstack>
                  <i-vstack gap={5} minWidth={230} width="100%">
                    <i-vstack id="desChainBox" width="100%" margin={{ top: 8, bottom: 8 }} visible={false}>
                      <i-hstack gap={8} horizontalAlignment="space-between">
                        <i-label opacity={0.8} caption="$destination_chain" minWidth="7rem" />
                        <i-label id="desChainLabel" textOverflow="ellipsis" margin={{ left: 'auto' }} caption="-" />
                      </i-hstack>
                      <i-hstack id="desChainList" wrap="wrap" verticalAlignment="center" maxWidth="100%" />
                    </i-vstack>
                    <i-panel height="100%" minHeight={120} margin={{ top: 'auto' }}>
                      <i-vstack height="100%" gap={8}>
                        <i-vstack width="100%" gap={8}>
                          <i-vstack width="100%">
                            <i-label caption="$you_receive" font={{ size: '1.125rem' }}></i-label>
                          </i-vstack>
                          <i-hstack horizontalAlignment="end" width="100%">
                            <i-label id="receiveBalance" opacity={0.55} margin={{ left: 'auto' }} caption="$balance"></i-label>
                          </i-hstack>
                        </i-vstack>
                        <i-panel
                          id="receiveCol"
                          background={{ color: Theme.input.background }}
                          width="100%"
                          margin={{ top: 'auto' }}
                          border={{ radius: '1rem', width: '2px', style: 'solid', color: 'transparent' }}
                        >
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
                            height={'auto'} width={'100%'}
                            display='flex'
                            overflow={'hidden'}
                            font={{ size: '1.25rem' }}
                            padding={{ left: '0.75rem', right: '0.75rem' }}
                            tokenButtonStyles={{
                              background: { color: Theme.background.main },
                              padding: { top: '0.5rem', bottom: '0.5rem', left: '0.5rem', right: '0.5rem' },
                              border: { radius: 8 },
                              font: { size: '1rem', weight: 700, color: Theme.input.fontColor },
                              lineHeight: 1.5,
                              opacity: 1
                            }}
                            onInputAmountChanged={this.onTokenInputChange}
                            onSelectToken={(token: ITokenObject) => this.onSelectToken(token, false)}
                          ></i-scom-token-input>
                        </i-panel>
                      </i-vstack>
                    </i-panel>
                    <i-hstack horizontalAlignment="end">
                      <i-label id="lbRouting" caption="$no_routing" opacity={0} font={{ size: '1rem' }} />
                    </i-hstack>
                  </i-vstack>
                </i-grid-layout>
              </i-panel>
              <i-hstack
                id="minSwapHintLabel"
                verticalAlignment="center"
                margin={{ top: '-0.5rem' }}
                gap={'0.25rem'}
              >
                <i-icon name="star" fill={Theme.colors.primary.main} width={13} height={13} />
                <i-label caption="$no_crosschain_routes_are_found_you_may_try_updating_the_input_amount_or_selecting_another_token" opacity={0.9} font={{ color: Theme.colors.primary.main, size: '0.8rem' }} />
              </i-hstack>
              <i-panel id="pnlPriceInfo" />
              <i-vstack
                horizontalAlignment="center"
                width="100%"
                margin={{ top: 10 }}
              >
                <i-button
                  id="swapBtn"
                  class="btn-os"
                  maxWidth={360}
                  height={60} width={'100%'}
                  visible={false}
                  rightIcon={{ spin: true, visible: false, fill: Theme.colors.primary.contrastText, width: 16, height: 16 }}
                  border={{ radius: '0.65rem' }}
                  font={{ size: '1.125rem', color: Theme.colors.primary.contrastText, bold: true }}
                  opacity={1}
                  lineHeight={1.5}
                  padding={{ left: '0.75rem', right: '0.75rem', top: '0.5rem', bottom: '0.5rem' }}
                  onClick={this.onClickSwapButton.bind(this)}
                ></i-button>
              </i-vstack>
            </i-panel>
            <i-modal
              id="swapModal"
              width={490} maxWidth={'100%'}
              padding={{ left: '1rem', right: '1rem', top: '0.75rem', bottom: '0.75rem' }}
              border={{ radius: '1rem' }}
            >
              <i-hstack
                verticalAlignment="center" horizontalAlignment="space-between"
                margin={{ bottom: '1.5rem' }} padding={{ bottom: '0.5rem' }}
                border={{ bottom: { width: '2px', style: 'solid', color: Theme.background.main } }}
              >
                <i-label
                  font={{ color: Theme.colors.primary.main, size: '1.25rem', weight: 700 }}
                  caption="$confirm_swap"
                ></i-label>
                <i-icon
                  fill={Theme.colors.primary.main}
                  name="times"
                  width={16} height={16}
                  cursor="pointer"
                  onClick={() => this.onCloseModal('swapModal')}
                ></i-icon>
              </i-hstack>
              <i-vstack>
                <i-hstack verticalAlignment='center' horizontalAlignment='start'>
                  <i-hstack id="srcChainFirstPanel" verticalAlignment="center" gap={'0.5rem'}>
                    <i-image id="srcChainTokenImage" width="30px" height="30px" url="#" />
                    <i-label id="srcChainTokenLabel" font={{ size: '1.1rem' }} caption="" />
                    <i-icon name="minus" fill={Theme.input.fontColor} width={28} height={10} />
                  </i-hstack>
                  <i-hstack verticalAlignment="center" gap={'0.5rem'}>
                    <i-image id="fromTokenImage" width="30px" height="30px" url="#" />
                    <i-label id="fromTokenLabel" font={{ size: '1.1rem' }} caption=""></i-label>
                  </i-hstack>
                  <i-label id="fromTokenValue" margin={{ left: 'auto' }} font={{ size: '1.1rem' }} caption=" - "></i-label>
                </i-hstack>
                <i-icon
                  width={28} height={28} name="arrow-down" fill={Theme.input.fontColor}
                  border={{ width: '2px', style: 'solid', color: 'transparent', radius: '50%' }}
                  padding={{ left: '0.25rem', right: '0.25rem', top: '0.25rem', bottom: '0.25rem' }}
                  background={{ color: Theme.input.background }}
                  margin={{ top: '0.75rem', bottom: '0.75rem' }}
                  class="arrow-down"
                ></i-icon>
                <i-panel id="srcChainSecondPanel">
                  <i-hstack verticalAlignment='center' horizontalAlignment='start'>
                    <i-hstack verticalAlignment="center" gap={'0.5rem'}>
                      <i-image id="srcChainVaultImage" width="30px" height="30px" url="#" />
                      <i-label id="srcChainVaultLabel" font={{ size: '1.1rem' }} caption="" />
                      <i-icon name="minus" fill={Theme.input.fontColor} width={28} height={10} />
                    </i-hstack>
                    <i-hstack verticalAlignment="center" gap={'0.5rem'}>
                      <i-image id="srcVaultTokenImage" fallbackUrl={tokenAssets.fallbackUrl} width="30px" height="30px" url="#" />
                      <i-label id="srcVaultTokenLabel" font={{ size: '1.1rem' }} caption="" />
                    </i-hstack>
                    <i-label id="srcVaultTokenValue" margin={{ left: 'auto' }} font={{ size: '1.1rem' }} caption="-" />
                  </i-hstack>
                  <i-icon
                    width={28} height={28} name="arrow-down" fill={Theme.input.fontColor}
                    border={{ width: '2px', style: 'solid', color: 'transparent', radius: '50%' }}
                    padding={{ left: '0.25rem', right: '0.25rem', top: '0.25rem', bottom: '0.25rem' }}
                    background={{ color: Theme.input.background }}
                    margin={{ top: '0.75rem', bottom: '0.75rem' }}
                    class="arrow-down"
                  ></i-icon>
                </i-panel>
                <i-panel id="targetChainSecondPanel">
                  <i-hstack verticalAlignment='center' horizontalAlignment='start'>
                    <i-hstack verticalAlignment="center" gap={'0.5rem'}>
                      <i-image id="targetChainVaultImage" width="30px" height="30px" url="#" />
                      <i-label id="targetChainVaultLabel" font={{ size: '1.1rem' }} caption="" />
                      <i-icon name="minus" fill={Theme.input.fontColor} width={28} height={10} />
                    </i-hstack>
                    <i-hstack verticalAlignment="center" gap={'0.5rem'}>
                      <i-image id="targetVaultTokenImage" fallbackUrl={tokenAssets.fallbackUrl} width="30px" height="30px" url="#" />
                      <i-label id="targetVaultTokenLabel" font={{ size: '1.1rem' }} caption="" />
                    </i-hstack>
                    <i-label id="targetVaultTokenValue" margin={{ left: 'auto' }} font={{ size: '1.1rem' }} caption="-" />
                  </i-hstack>
                  <i-vstack justifyContent='end'>
                    <i-label id="crossChainSoftCapLabel1" opacity={0.55} margin={{ left: 'auto' }}></i-label>
                    <i-label id="targetVaultAssetBalanceLabel1" opacity={0.55} margin={{ left: 'auto' }} caption="$vault_asset_balance"></i-label>
                    <i-label id="targetVaultBondBalanceLabel1" opacity={0.55} margin={{ left: 'auto' }} caption="$vault_bond_balance"></i-label>
                  </i-vstack>
                  <i-icon
                    width={28} height={28} name="arrow-down" fill={Theme.input.fontColor}
                    border={{ width: '2px', style: 'solid', color: 'transparent', radius: '50%' }}
                    padding={{ left: '0.25rem', right: '0.25rem', top: '0.25rem', bottom: '0.25rem' }}
                    margin={{ top: '0.75rem', bottom: '0.75rem' }}
                    background={{ color: Theme.input.background }}
                    class="arrow-down"
                  ></i-icon>
                </i-panel>
                <i-hstack margin={{ bottom: '1rem' }} verticalAlignment='center' horizontalAlignment='start'>
                  <i-hstack id="targetChainFirstPanel" verticalAlignment="center" gap={'0.5rem'}>
                    <i-image id="targetChainTokenImage" fallbackUrl={tokenAssets.fallbackUrl} width="30px" height="30px" url="#" />
                    <i-label id="targetChainTokenLabel" font={{ size: '1.1rem' }} caption="" />
                    <i-icon name="minus" fill={Theme.input.fontColor} width={28} height={10} />
                  </i-hstack>
                  <i-hstack verticalAlignment="center" gap={'0.5rem'}>
                    <i-image id="toTokenImage" width="30px" height="30px" url="#" />
                    <i-label id="toTokenLabel" font={{ size: '1.1rem' }} caption=""></i-label>
                  </i-hstack>
                  <i-label id="toTokenValue" margin={{ left: 'auto' }} font={{ weight: 700, color: Theme.colors.primary.main }} caption=" - "></i-label>
                </i-hstack>
                <i-vstack id="crossChainVaultInfoVstack" justifyContent='end'>
                  <i-label id="crossChainSoftCapLabel2" opacity={0.55} margin={{ left: 'auto' }}></i-label>
                  <i-label id="targetVaultAssetBalanceLabel2" opacity={0.55} margin={{ left: 'auto' }} caption="$vault_asset_balance"></i-label>
                  <i-label id="targetVaultBondBalanceLabel2" opacity={0.55} margin={{ left: 'auto' }} caption="$vault_bond_balance"></i-label>
                </i-vstack>
                <i-label id="lbEstimate" display="block" margin={{ bottom: '1rem' }}></i-label>
                <i-hstack margin={{ bottom: '1rem' }} gap={'0.25rem'}>
                  <i-label id="lbPayOrReceive"></i-label>
                  <i-label id="payOrReceiveValue" font={{ weight: 700, color: Theme.colors.primary.main }} caption=""></i-label>
                  <i-label id="payOrReceiveToken" caption=""></i-label>
                </i-hstack>
              </i-vstack>
              <i-panel
                id="priceInfoContainer"
                background={{ color: Theme.background.main }}
                border={{ radius: '1rem', width: '2px', style: 'solid', color: 'transparent' }}
                margin={{ top: '1rem', bottom: '1rem' }}
                width="100%"
              />
              <i-panel>
                <i-hstack id="pnlReminderRejected" margin={{ top: 8, bottom: 16 }} display='inline'>
                  <i-label caption="$if_the_order_is_not_executed_in_the_target_chain_the_estimated_withdrawalble_amount_is" display='inline' />
                  <i-label id="lbReminderRejectedValue" font={{ color: Theme.colors.primary.main, bold: true }} display='inline' padding={{ left: '0.25rem' }} />
                </i-hstack>
              </i-panel>
              <i-panel
                width="100%"
                margin={{ top: 10 }}
              >
                <i-button
                  id="swapModalConfirmBtn"
                  class="btn-os"
                  height="auto" width={'100%'}
                  caption="$confirm_swap"
                  border={{ radius: '0.65rem' }}
                  font={{ size: '1.125rem', color: Theme.colors.primary.contrastText, bold: true }}
                  opacity={1}
                  lineHeight={1.5}
                  padding={{ left: '0.75rem', right: '0.75rem', top: '0.5rem', bottom: '0.5rem' }}
                  onClick={this.doSwap}
                ></i-button>
              </i-panel>
            </i-modal>

            <i-modal
              id="modalFees"
              width={490} maxWidth={'100%'}
              padding={{ left: '1rem', right: '1rem', top: '0.75rem', bottom: '0.75rem' }}
              border={{ radius: '1rem' }}
            >
              <i-hstack
                verticalAlignment="center" horizontalAlignment="space-between"
                margin={{ bottom: '0.5rem' }} padding={{ bottom: '0.5rem' }}
                border={{ bottom: { width: '2px', style: 'solid', color: Theme.background.main } }}
              >
                <i-label
                  font={{ color: Theme.colors.primary.main, size: '0.875rem', weight: 700 }}
                  caption="$transaction_fee_details"
                ></i-label>
                <i-icon
                  fill={Theme.colors.primary.main}
                  name="times"
                  width={16} height={16}
                  cursor="pointer"
                  onClick={() => this.onCloseModal('modalFees')}
                ></i-icon>
              </i-hstack>
              <i-vstack gap="1rem">
                <i-vstack id="feesInfo" />
                <i-hstack
                  verticalAlignment="center"
                  horizontalAlignment="center"
                  margin={{ bottom: '0.5rem' }}
                >
                  <i-button
                    caption="$close"
                    class="btn-os"
                    lineHeight={1.5}
                    width='150px' height="auto"
                    padding={{ top: '0.25rem', bottom: '0.25rem', left: '0.25rem', right: '0.25rem' }}
                    font={{ size: '1rem', color: Theme.colors.primary.contrastText, weight: 700 }}
                    onClick={() => this.closeModalFees()}
                  />
                </i-hstack>
              </i-vstack>
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
