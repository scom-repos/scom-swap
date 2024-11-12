
import { Button, HStack, Module, Styles, VStack } from "@ijstech/components";
import { getTokenObjArr, State } from "../store/index";
import { Constants, IEventBusRegistry, Wallet } from "@ijstech/eth-wallet";
import { getBuilderSchema, getProjectOwnerSchema } from "../formSchema";
import ScomCommissionFeeSetup from "@scom/scom-commission-fee-setup";
import configData from "../data.json";
import { ITokenObject, tokenStore } from "@scom/scom-token-list";
import { Category, DEAULT_SWAP_TYPE, ICommissionInfo, INetworkConfig, IProviderUI, ISwapWidgetData } from "../global/index";
import { IWalletPlugin } from "@scom/scom-wallet-modal";
import { getCommissionRate, getPair, getProviderProxySelectors } from "../swap-utils/index";
const Theme = Styles.Theme.ThemeVars;

interface IConfigOptions {
  refreshWidget: () => Promise<void>;
  refreshDappContainer: () => void;
  setContaiterTag: (value: any) => void;
  updateTheme: () => void;
  onChainChanged: () => Promise<void>;
  onWalletConnected: () => Promise<void>;
  updateContractAddress: () => void;
}

export class ConfigModel {
  private state: State;
  private module: Module;
  private options: IConfigOptions = {
    refreshWidget: async () => { },
    refreshDappContainer: () => { },
    setContaiterTag: (value: any) => { },
    updateTheme: () => { },
    onChainChanged: async () => { },
    onWalletConnected: async () => { },
    updateContractAddress: () => { }
  };
  private _data: ISwapWidgetData = {
    category: DEAULT_SWAP_TYPE,
    providers: [],
    tokens: [],
    defaultChainId: 0,
    wallets: [],
    networks: []
  };
  private _tokens: ITokenObject[] = [];
  private supportedChainIds: number[];
  private rpcWalletEvents: IEventBusRegistry[] = [];

  constructor(state: State, module: Module, options: IConfigOptions) {
    this.state = state;
    this.module = module;
    this.options = options;
  }

  get chainId() {
    return this.state.getChainId();
  }

  get campaignId() {
    return this._data.campaignId;
  }

  get defaultInputValue() {
    return this._data.defaultInputValue;
  }

  get defaultOutputValue() {
    return this._data.defaultOutputValue;
  }

  get defaultOutputToken() {
    return this._data.defaultOutputToken;
  }

  get defaultInputToken() {
    return this._data.defaultInputToken;
  }

  get isFixedPair() {
    return this._data.category === 'fixed-pair';
  }

  get isCrossChainSwap() {
    return this._data.category === 'cross-chain-swap';
  }

  get defaultChainId() {
    if (this.networks.some(v => v.chainId === this._data.defaultChainId)) {
      return this._data.defaultChainId;
    }
    return this.networks[0]?.chainId || this._data.defaultChainId;
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
    return this._tokens ?? [];
  }

  get rpcWallet() {
    return this.state.getRpcWallet();
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
    const customControls = formSchema.customControls();
    let self = this;
    const actions: any[] = [
      {
        name: 'Commissions',
        icon: 'dollar-sign',
        command: (builder: any, userInputData: any) => {
          let _oldData: ISwapWidgetData = {
            category: DEAULT_SWAP_TYPE,
            providers: [],
            defaultChainId: 0,
            wallets: [],
            networks: []
          }
          return {
            execute: async () => {
              _oldData = { ...this._data };
              if (userInputData.commissions) this._data.commissions = userInputData.commissions;
              this.options.refreshWidget();
              if (builder?.setData) builder.setData(this._data);
            },
            undo: () => {
              this._data = { ..._oldData };
              this.options.refreshWidget();
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
            category: DEAULT_SWAP_TYPE,
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
                ...themeSettings
              } = userInputData;

              const generalSettings = {
                logo,
                title,
                networks,
                category,
                providers,
              };

              this._data.logo = generalSettings.logo;
              this._data.title = generalSettings.title;
              this._data.networks = generalSettings.networks;
              this._data.defaultChainId = this._data.networks[0].chainId;
              this._data.category = generalSettings.category;
              this._data.providers = generalSettings.providers;
              this._tokens = [];
              if (generalSettings.networks) {
                let tokenList = [];
                for (let network of generalSettings.networks) {
                  const { chainId, tokens = [] } = network;
                  const _tokens = tokens.map(v => {
                    return {
                      chainId,
                      address: v.address
                    }
                  })
                  tokenList.push(..._tokens);
                }
                this._tokens = getTokenObjArr(tokenList);
              }
              await this.resetRpcWallet();
              this.options.updateContractAddress();
              this.options.refreshWidget();
              if (builder?.setData) builder.setData(this._data);

              oldTag = JSON.parse(JSON.stringify(this.module.tag));
              if (builder?.setTag) builder.setTag(themeSettings);
              else this.setTag(themeSettings);
              this.options.setContaiterTag(themeSettings);
            },
            undo: () => {
              this._data = JSON.parse(JSON.stringify(oldData));
              this.options.refreshWidget();
              if (builder?.setData) builder.setData(this._data);

              const tag = JSON.parse(JSON.stringify(oldTag));
              this.module.tag = tag;
              if (builder?.setTag) builder.setTag(tag);
              else this.setTag(tag);
              this.options.setContaiterTag(tag);
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
      },
      {
        name: 'Editor',
        target: 'Editor',
        getActions: (category?: string) => {
          const actions = this.determineActionsByTarget('builder', this.category);
          const editAction = actions.find(action => action.name === 'Edit');
          return editAction ? [editAction] : [];
        },
        getData: this.getData.bind(this),
        setData: this.setData.bind(this),
        getTag: this.getTag.bind(this),
        setTag: this.setTag.bind(this)
      }
    ]
  }

  getData() {
    return this._data;
  }

  async setData(value: ISwapWidgetData) {
    this._data = value;
    let tokenList = [];
    for (let network of value.networks) {
      const { chainId, tokens = [] } = network;
      tokenStore.updateTokenMapData(chainId);
      const _tokens = tokens.map(v => {
        return {
          chainId,
          address: v.address
        }
      })
      tokenList.push(..._tokens);
    }
    if (this._data.apiEndpoints) {
      this.state.setAPIEnpoints(this._data.apiEndpoints);
    }
    this._tokens = getTokenObjArr(tokenList);
    await this.resetRpcWallet();
    this.options.updateContractAddress();
    await this.options.refreshWidget();
  }

  getTag() {
    return this.module.tag;
  }

  setTag(value: any) {
    const newValue = value || {};
    for (let prop in newValue) {
      if (newValue.hasOwnProperty(prop)) {
        if (prop === 'light' || prop === 'dark')
          this.updateTag(prop, newValue[prop]);
        else
          this.module.tag[prop] = newValue[prop];
      }
    }
    this.options.setContaiterTag(this.module.tag);
    this.options.updateTheme();
  }

  private updateTag(type: 'light' | 'dark', value: any) {
    this.module.tag[type] = this.module.tag[type] ?? {};
    for (let prop in value) {
      if (value.hasOwnProperty(prop))
        this.module.tag[type][prop] = value[prop];
    }
  }

  removeRpcWalletEvents = () => {
    const rpcWallet = this.rpcWallet;
    for (let event of this.rpcWalletEvents) {
      rpcWallet.unregisterWalletEvent(event);
    }
    this.rpcWalletEvents = [];
  }

  resetRpcWallet = async () => {
    this.removeRpcWalletEvents();
    const rpcWalletId = await this.state.initRpcWallet(this.defaultChainId);
    const rpcWallet = this.rpcWallet;
    const chainChangedEvent = rpcWallet.registerWalletEvent(this, Constants.RpcWalletEvent.ChainChanged, async (chainId: number) => {
      await this.options.onChainChanged();
    });
    const connectedEvent = rpcWallet.registerWalletEvent(this, Constants.RpcWalletEvent.Connected, async (connected: boolean) => {
      this.options.onWalletConnected();
    });
    this.rpcWalletEvents.push(chainChangedEvent, connectedEvent);
    this.options.refreshDappContainer();
  }

  initWallet = async () => {
    try {
      await Wallet.getClientInstance().init();
      await this.rpcWallet.init();
    } catch (err) {
      console.log(err);
    }
  }

  isEmptyData = (value: ISwapWidgetData) => {
    return !value || !value.networks || value.networks.length === 0;
  }
}