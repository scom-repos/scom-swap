import { customElements, Module, ControlElement, Input, VStack, Control, Upload, ComboBox, IComboItem, HStack } from '@ijstech/components';
import { BigNumber } from '@ijstech/eth-wallet';
import { Category, IContractInfo, IProvider, ISwapConfig, ITokenObject } from '@swap/global';
import { comboboxStyle, configStyle, pointerStyle, tokenSelectionStyle, uploadStyle } from './swap-config.css';
import { TokenSelection } from '@swap/token-selection';
import { getTargetChainTokenInfoObj } from '@swap/crosschain-utils';
import { isWalletConnected } from '@swap/store';

interface IContractInfoUI {
  chainId: string;
  factoryAddress: string;
  routerAddress: string;
  fromToken?: string;
  toToken?: string;
  tradeFee: {
    fee: string;
    base: string;
  }
}

interface IProviderUI {
  caption: string;
  image: string;
  key: string;
  dexId?: number;
  contractInfo: IContractInfoUI[];
}

interface IChainOption {
  label: string;
  value: string;
}

const chainsList = [1, 42, 56, 97, 4002, 43113, 43114, 80001, 13370, 338, 137, 250, 56, 97];
const categories: { label: string, value: Category }[] = [
  {
    label: 'Fixed Pair',
    value: 'fixed-pair',
  },
  {
    label: 'Aggregator',
    value: 'aggregator',
  }
]

type IProviderProp = 'caption' | 'image' | 'key' | 'dexId';
type IContractInfoProp = 'fee' | 'base' | 'factoryAddress' | 'routerAddress' | 'chainId' | 'fromToken' | 'toToken';
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['swap-config']: ControlElement;
    }
  }
};

@customElements('swap-config')
export class SwapConfig extends Module {
  private listStack: VStack;
  private cbbCategory: ComboBox;
  private category: Category = categories[0].value;
  private chainTokenMaps: { [chainId: string]: any } = {};
  private chainTokenBalances: { [chainId: string]: any } = {};
  private itemMap: Map<number, IProviderUI> = new Map();
  private _itemList: IProviderUI[] = [];
  private _chainOptions: IChainOption[];

  get itemList() {
    return Array.from(this.itemMap).map(item => item[1]);
  }

  set itemList(data: IProviderUI[]) {
    this._itemList = data;
  }

  get data() {
    return {
      category: this.category,
      providers: this.convertProviderUIToData(this.itemList)
    }
  }

  set data(config: ISwapConfig) {
    const categoryObj = categories.find(v => v.value === config.category);
    if (categoryObj) {
      this.category = config.category;
      this.cbbCategory.selectedItem = categoryObj;
    }
    this.itemList = this.convertDataToProviderUI(config.providers || []);
  }

  private get isFixedPair() {
    return this.category === 'fixed-pair';
  }

  showConfig() {
    this.listStack.clearInnerHTML();
    this.itemMap = new Map();
    this._itemList.forEach(item => this.addProvider(item));
  }

  private convertDataToProviderUI(providers: IProvider[]) {
    const providersUI: IProviderUI[] = providers.map(v => {
      const { caption, image, key, dexId, contractInfo } = v;
      let _contractInfo: IContractInfoUI[] = [];
      for (const chainId of Object.keys(contractInfo)) {
        _contractInfo.push({
          chainId,
          ...contractInfo[chainId]
        })
      }
      return {
        caption,
        image,
        key,
        dexId,
        contractInfo: _contractInfo
      }
    });
    return providersUI;
  }

  private convertProviderUIToData(providersUI: IProviderUI[]) {
    const providers: IProvider[] = providersUI.map(v => {
      const { caption, image, key, dexId, contractInfo } = v;
      let _contractInfo: { [chainId: string]: IContractInfo } = {};
      for (const contract of contractInfo) {
        const { chainId, factoryAddress, routerAddress, tradeFee, fromToken, toToken } = contract;
        if (chainId) {
          _contractInfo[chainId] = {
            factoryAddress,
            routerAddress,
            tradeFee
          }
          if (this.isFixedPair) {
            _contractInfo[chainId].fromToken = fromToken;
            _contractInfo[chainId].toToken = toToken;
          }
        }
      }
      return {
        caption,
        image,
        key,
        dexId,
        contractInfo: _contractInfo
      }
    });
    return providers;
  }

  private async updateProvider(source: Control, index: number, prop: IProviderProp, files?: File[]) {
    const item: any = this.itemMap.get(index);
    if (prop === 'image')
      item.image = files ? await (source as Upload).toBase64(files[0]) : undefined;
    else if (prop === 'dexId')
      item.dexId = +(source as Input).value;
    else
      item[prop] = (source as Input).value;
  }

  private deleteProvider(source: Control, index: number) {
    if (this.itemMap.has(index)) {
      source.remove();
      this.itemMap.delete(index);
    }
  }

  private updateContractInfo(source: Control, providerIndex: number, index: number, prop: IContractInfoProp, token?: ITokenObject) {
    const item = this.itemMap.get(providerIndex);
    if (!item) return;
    if (!item.contractInfo[index]) {
      item.contractInfo[index] = {
        chainId: '',
        factoryAddress: '',
        routerAddress: '',
        tradeFee: {
          fee: '',
          base: '',
        }
      }
    }
    if (prop === 'chainId')
      item.contractInfo[index].chainId = ((source as ComboBox).selectedItem as IComboItem).value;
    else if (prop === 'fee' || prop === 'base')
      item.contractInfo[index]['tradeFee'][prop] = (source as Input).value;
    else if (prop === 'fromToken' || prop === 'toToken')
      item.contractInfo[index][prop] = token?.address;
    else
      item.contractInfo[index][prop] = (source as Input).value;
  }

  private deleteContractInfo(source: Control, providerIndex: number, index: number) {
    const item = this.itemMap.get(providerIndex);
    if (!item) return;
    if (item.contractInfo[index]) {
      item.contractInfo.splice(index, 1);
    }
    source.remove();
  }

  private onRemovedImage(index: number) { }

  private onCategoryChanged() {
    const value = (this.cbbCategory.selectedItem as IComboItem).value as Category;
    this.category = value;
    const tokenSelections = this.listStack.querySelectorAll('.wrapper-token--selection');
    for (const selection of tokenSelections) {
      (selection as HStack).visible = this.isFixedPair;
    }
  }

  init() {
    super.init();
    this._chainOptions = chainsList.map(item => ({ label: `${item}`, value: `${item}` }));
  }

  private getChainTokenDataList(chainId: number) {
    let dataList: any[] = [];
    const _tokenMap = this.chainTokenMaps[chainId];
    const _tokenBalances = this.chainTokenBalances[chainId];
    if (_tokenMap) {
      for (const key of Object.keys(_tokenMap)) {
        let tokenAddress = key;
        let tokenObject = _tokenMap[tokenAddress];
        if (_tokenBalances) {
          dataList.push({
            ...tokenObject,
            status: false,
            balance: _tokenBalances[tokenAddress] ? _tokenBalances[tokenAddress] : 0,
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

  private async setTargetTokenList(comboBoxChain: ComboBox, fromTokenSelection: TokenSelection, toTokenSelection: TokenSelection, chainId: number) {
    if (this.isFixedPair) comboBoxChain.enabled = false;
    fromTokenSelection.enabled = false;
    toTokenSelection.enabled = false;
    if (fromTokenSelection.targetChainId != chainId) {
      fromTokenSelection.targetChainId = chainId;
      toTokenSelection.targetChainId = chainId;
      const tokenBalanceObj = await getTargetChainTokenInfoObj(chainId);
      this.chainTokenBalances[chainId] = isWalletConnected() ? tokenBalanceObj.balances : [];
      this.chainTokenMaps[chainId] = tokenBalanceObj.tokenMap ?? {};
    }
    fromTokenSelection.tokenDataListProp = this.getChainTokenDataList(chainId);
    toTokenSelection.tokenDataListProp = this.getChainTokenDataList(chainId);
    fromTokenSelection.enabled = true;
    toTokenSelection.enabled = true;
    if (this.isFixedPair) comboBoxChain.enabled = true;
  }

  private addProvider(item?: IProviderUI) {
    const lastIndex = this.itemList.length;
    let contractIndex = 0;
    const uploadElm = (
      <i-upload
        maxHeight={200}
        maxWidth={200}
        class={uploadStyle}
        onChanged={(source: Control, files: File[]) => this.updateProvider(source, lastIndex, 'image', files)}
        onRemoved={() => this.onRemovedImage(lastIndex)}
      ></i-upload>
    )
    const contractInfoElm = (
      <i-vstack
        width="100%"
        gap="1rem"
        padding={{ top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' }}
        border={{ width: 1, style: 'solid', color: 'rgba(217,225,232,.38)', radius: 5 }}
        position="relative"
      >
        <i-button
          caption="Add Contract Info"
          maxWidth={200}
          padding={{ left: '1rem', right: '1rem', top: '0.5rem', bottom: '0.5rem' }}
          onClick={() => this.addContractInfo(contractInfoElm, lastIndex, ++contractIndex)}
        />
      </i-vstack>
    )
    const itemElm = (
      <i-vstack
        gap="1rem"
        padding={{ top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' }}
        border={{ width: 1, style: 'solid', color: 'rgba(217,225,232,.38)', radius: 5 }}
        position="relative"
      >
        <i-icon
          name="times" fill="red" width={20} height={20}
          position="absolute"
          top={10} right={10}
          class={pointerStyle}
          onClick={() => this.deleteProvider(itemElm, lastIndex)}
        />
        <i-hstack gap={8} verticalAlignment="center" wrap="wrap">
          <i-hstack gap={2} width={60}>
            <i-label caption="Caption" />
            <i-label caption="*" font={{ color: 'red' }} />
            <i-label caption=":" />
          </i-hstack>
          <i-input
            width="100%"
            maxWidth={200}
            value={item?.caption || ''}
            onChanged={(source: Control) => this.updateProvider(source, lastIndex, 'caption')}
          />
        </i-hstack>
        <i-hstack gap={2} width={60}>
          <i-label caption="Image" />
          <i-label caption="*" font={{ color: 'red' }} />
          <i-label caption=":" />
        </i-hstack>
        {uploadElm}
        <i-hstack gap={8} verticalAlignment="center" wrap="wrap">
          <i-hstack gap={2} width={60}>
            <i-label caption="Key" />
            <i-label caption="*" font={{ color: 'red' }} />
            <i-label caption=":" />
          </i-hstack>
          <i-input
            width="100%"
            maxWidth={200}
            value={item?.key || ''}
            onChanged={(source: Control) => this.updateProvider(source, lastIndex, 'key')}
          />
        </i-hstack>
        <i-hstack gap={8} verticalAlignment="center" wrap="wrap">
          <i-hstack gap={2} width={60}>
            <i-label caption="Dex Id:" />
          </i-hstack>
          <i-input
            width="100%"
            maxWidth={200}
            value={item?.dexId || ''}
            inputType="number"
            onChanged={(source: Control) => this.updateProvider(source, lastIndex, 'dexId')}
          />
        </i-hstack>
        <i-hstack gap={8} verticalAlignment="center" wrap="wrap">
          <i-hstack gap={2} width={120}>
            <i-label caption="Contract Info" />
            <i-label caption="*" font={{ color: 'red' }} />
            <i-label caption=":" />
          </i-hstack>
          {contractInfoElm}
        </i-hstack>
      </i-vstack>
    );
    const contractInfo = item?.contractInfo;
    if (contractInfo) {
      for (contractIndex = 0; contractIndex < contractInfo.length; contractIndex++) {
        this.addContractInfo(contractInfoElm, lastIndex, contractIndex, contractInfo[contractIndex]);
      }
    } else {
      this.addContractInfo(contractInfoElm, lastIndex, contractIndex);
    }
    if (item?.image) uploadElm.preview(item.image);
    this.listStack.appendChild(itemElm);
    const initObj = {
      caption: '',
      image: '',
      key: '',
      dexId: undefined,
      contractInfo: []
    }
    this.itemMap.set(lastIndex, item || initObj);
  }

  private async addContractInfo(parentElm: VStack, providerIndex: number, index: number, item?: IContractInfoUI) {
    const chainId = item?.chainId;
    const hasChainId = !!chainId;
    const fromTokenSelection: TokenSelection = (<swap-token-selection class={tokenSelectionStyle} width="100%" />);
    const toTokenSelection: TokenSelection = (<swap-token-selection class={tokenSelectionStyle} width="100%" />);
    fromTokenSelection.enabled = hasChainId;
    fromTokenSelection.isBtnMaxShown = false;
    fromTokenSelection.onSelectToken = (token: ITokenObject) => this.updateContractInfo(fromTokenSelection, providerIndex, index, 'fromToken', token);
    toTokenSelection.enabled = hasChainId;
    toTokenSelection.isBtnMaxShown = false;
    toTokenSelection.onSelectToken = (token: ITokenObject) => this.updateContractInfo(toTokenSelection, providerIndex, index, 'toToken', token);
    const comboBoxChain: ComboBox = (
      <i-combo-box
        width="100%"
        icon={{ name: 'angle-down' }}
        items={this._chainOptions}
        selectedItem={{
          value: item?.chainId || '',
          label: item?.chainId || ''
        }}
        mode="single"
        class={comboboxStyle}
        onChanged={(source: Control) => {
          this.setTargetTokenList(comboBoxChain, fromTokenSelection, toTokenSelection, Number(((source as ComboBox).selectedItem as IComboItem).value));
          this.updateContractInfo(source, providerIndex, index, 'chainId');
        }}
      />
    )

    const contractElm = (
      <i-vstack
        gap="1rem"
        padding={{ top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' }}
        border={{ width: 1, style: 'solid', color: 'rgba(217,225,232,.38)', radius: 5 }}
        position='relative'
      >
        <i-icon
          name="times" fill="red" width={20} height={20}
          position="absolute"
          top={10} right={10}
          class={pointerStyle}
          onClick={() => this.deleteContractInfo(contractElm, providerIndex, index)}
        />
        <i-hstack gap={8} verticalAlignment="center" wrap="wrap">
          <i-hstack gap={2} width={120}>
            <i-label caption="Chain Id" />
            <i-label caption="*" font={{ color: 'red' }} />
            <i-label caption=":" />
          </i-hstack>
          {comboBoxChain}
        </i-hstack>
        <i-hstack gap={8} verticalAlignment="center" wrap="wrap">
          <i-hstack gap={2} width={120}>
            <i-label caption="Factory Address" />
            <i-label caption="*" font={{ color: 'red' }} />
            <i-label caption=":" />
          </i-hstack>
          <i-input
            width="100%"
            minWidth={300}
            maxWidth="calc(100% - 128px)"
            value={item?.factoryAddress || ''}
            onChanged={(source: Control) => this.updateContractInfo(source, providerIndex, index, 'factoryAddress')}
          />
        </i-hstack>
        <i-hstack gap={8} verticalAlignment="center" wrap="wrap">
          <i-hstack gap={2} width={120}>
            <i-label caption="Router Address" />
            <i-label caption="*" font={{ color: 'red' }} />
            <i-label caption=":" />
          </i-hstack>
          <i-input
            width="100%"
            minWidth={300}
            maxWidth="calc(100% - 128px)"
            value={item?.routerAddress || ''}
            onChanged={(source: Control) => this.updateContractInfo(source, providerIndex, index, 'routerAddress')}
          />
        </i-hstack>
        <i-hstack visible={this.isFixedPair} class="wrapper-token--selection" gap={8} verticalAlignment="center" wrap="wrap">
          <i-hstack gap={2} width={120}>
            <i-label caption="From Token" />
            <i-label caption="*" font={{ color: 'red' }} />
            <i-label caption=":" />
          </i-hstack>
          {fromTokenSelection}
        </i-hstack>
        <i-hstack visible={this.isFixedPair} class="wrapper-token--selection" gap={8} verticalAlignment="center" wrap="wrap">
          <i-hstack gap={2} width={120}>
            <i-label caption="To Token" />
            <i-label caption="*" font={{ color: 'red' }} />
            <i-label caption=":" />
          </i-hstack>
          {toTokenSelection}
        </i-hstack>
        <i-hstack gap={2}>
          <i-label caption="Trade Fee" />
          <i-label caption="*" font={{ color: 'red' }} />
          <i-label caption=":" />
        </i-hstack>
        <i-vstack
          gap="1rem"
          padding={{ top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' }}
          border={{ width: 1, style: 'solid', color: 'rgba(217,225,232,.38)', radius: 5 }}
        >
          <i-hstack gap={8} verticalAlignment="center" wrap="wrap">
            <i-hstack gap={2} width={104}>
              <i-label caption="Fee" />
              <i-label caption="*" font={{ color: 'red' }} />
              <i-label caption=":" />
            </i-hstack>
            <i-input
              width="100%"
              maxWidth={200}
              inputType="number"
              value={item?.tradeFee.fee || ''}
              onChanged={(source: Control) => this.updateContractInfo(source, providerIndex, index, 'fee')}
            />
          </i-hstack>
          <i-hstack gap={8} verticalAlignment="center" wrap="wrap">
            <i-hstack gap={2} width={104}>
              <i-label caption="Base" />
              <i-label caption="*" font={{ color: 'red' }} />
              <i-label caption=":" />
            </i-hstack>
            <i-input
              width="100%"
              maxWidth={200}
              inputType="number"
              value={item?.tradeFee.base || ''}
              onChanged={(source: Control) => this.updateContractInfo(source, providerIndex, index, 'base')}
            />
          </i-hstack>
        </i-vstack>
      </i-vstack>
    )
    parentElm.appendChild(contractElm);

    if (hasChainId) {
      await this.setTargetTokenList(comboBoxChain, fromTokenSelection, toTokenSelection, Number(chainId));
      const tokenMap = (this.chainTokenMaps[chainId] || {});
      const fromTokenAddress = item.fromToken || '';
      const toTokenAddress = item.toToken || '';
      const fromToken = fromTokenAddress.toLowerCase().startsWith('0x') ? fromTokenAddress.toLowerCase() : fromTokenAddress;
      const toToken = toTokenAddress.toLowerCase().startsWith('0x') ? toTokenAddress.toLowerCase() : toTokenAddress;
      fromTokenSelection.token = tokenMap[fromToken];
      toTokenSelection.token = tokenMap[toToken];
    }
  }

  render() {
    return (
      <i-vstack class={configStyle} gap="1rem" padding={{ top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' }}>
        <i-vstack gap="1rem" verticalAlignment="center" maxWidth={260}>
          <i-hstack gap={2} verticalAlignment="center">
            <i-label caption="Category" />
            <i-label caption="*" font={{ color: 'red' }} />
            <i-label caption=":" />
            <i-combo-box
              id="cbbCategory"
              width="100%"
              icon={{ name: 'angle-down' }}
              items={categories}
              selectedItem={categories[0]}
              mode="single"
              margin={{ left: 6 }}
              class={comboboxStyle}
              onChanged={this.onCategoryChanged}
            />
          </i-hstack>
          <i-button
            caption="Add Provider"
            padding={{ left: '1rem', right: '1rem', top: '0.5rem', bottom: '0.5rem' }}
            onClick={() => this.addProvider()}
          />
        </i-vstack>
        <i-vstack id="listStack" gap="0.5rem" />
      </i-vstack>
    )
  }
}
