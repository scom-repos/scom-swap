import { customElements, Module, ControlElement, Input, VStack, Control, Upload, ComboBox, IComboItem } from '@ijstech/components';
import { pointerStyle, uploadStyle } from './swap-config.css';

export interface IConfig {
  data: IProvider[]
}

export interface IProvider {
  factoryAddress: string;
  routerAddress: string;
  tradeFee: { fee: string, base: string };
  caption: string;
  image: string;
  key: string;
  dexId?: number;
  supportedChains?: number[];
}

interface IChainOption {
  label: string;
  value: string;
}
const chainsList = [1, 42, 56, 97, 4002, 43113, 43114, 80001, 13370, 338, 137, 250, 56, 97];

type IProviderProp = 'factoryAddress'|'routerAddress'|'fee'|'base'|'caption'|'image'|'key'|'dexId'|'supportedChains';

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

  private itemMap: Map<number, IProvider> = new Map();
  private _itemList: IProvider[] = [];
  private _chainOptions: IChainOption[];

  get itemList() {
    return Array.from(this.itemMap).map(item => item[1]);
  }
  set itemList(data: IProvider[]) {
    this._itemList = data;
  }

  get data() {
    return { data: this.itemList }
  }

  set data(config: IConfig) {
    this.itemList = config.data || [];
    this.listStack.clearInnerHTML();
    this.itemMap = new Map();
    this._itemList.forEach(item => this.addProvider(item));
  }

  private addProvider(item?: IProvider) {
    const lastIndex = this.itemList.length;
    const uploadElm = (
      <i-upload
        maxHeight={200}
        maxWidth={200}
        class={uploadStyle}
        onChanged={(source: Control, files: File[]) => this.updateConfig(source, lastIndex, 'image', files)}
        onRemoved={() => this.onRemovedImage(lastIndex)}
      ></i-upload>
    )
    const comboboxElm: ComboBox = (
      <i-combo-box
        width="100%"
        icon={{ name: 'angle-down' }}
        items={this._chainOptions}
        mode="tags"
        onChanged={(source: Control) => this.updateConfig(source, lastIndex, 'supportedChains')}
      ></i-combo-box>
    )
    const itemElm = (
      <i-vstack
        gap='0.5rem'
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
        ></i-icon>
        <i-hstack>
          <i-label caption="Caption"></i-label>
          <i-label caption="*" font={{ color: 'red' }} margin={{left: '4px'}}></i-label>
          <i-label caption=":"></i-label>
        </i-hstack>
        <i-input
          width="100%" value={item?.caption || ''}
          onChanged={(source: Control) => this.updateConfig(source, lastIndex, 'caption')}
        ></i-input>
        <i-hstack>
          <i-label caption="Image"></i-label>
          <i-label caption="*" font={{ color: 'red' }} margin={{left: '4px'}}></i-label>
          <i-label caption=":"></i-label>
        </i-hstack>
        { uploadElm }
        <i-hstack>
          <i-label caption="Key"></i-label>
          <i-label caption="*" font={{ color: 'red' }} margin={{left: '4px'}}></i-label>
          <i-label caption=":"></i-label>
        </i-hstack>
        <i-input
          width="100%" value={item?.key || ''}
          onChanged={(source: Control) => this.updateConfig(source, lastIndex, 'key')}
        ></i-input>
        <i-label caption="Dex Id"></i-label>
        <i-input
          width="100%" value={item?.dexId || ''}
          inputType="number"
          onChanged={(source: Control) => this.updateConfig(source, lastIndex, 'dexId')}
        ></i-input>
        <i-label caption="Supported Chains"></i-label>
        { comboboxElm}
        <i-hstack>
          <i-label caption="Factory Address"></i-label>
          <i-label caption="*" font={{ color: 'red' }} margin={{left: '4px'}}></i-label>
          <i-label caption=":"></i-label>
        </i-hstack>
        <i-input
          width="100%" value={item?.factoryAddress || ''}
          onChanged={(source: Control) => this.updateConfig(source, lastIndex, 'factoryAddress')}
        ></i-input>
        <i-hstack>
          <i-label caption="Router Address"></i-label>
          <i-label caption="*" font={{ color: 'red' }} margin={{left: '4px'}}></i-label>
          <i-label caption=":"></i-label>
        </i-hstack>
        <i-input
          width="100%" value={item?.routerAddress || ''}
          onChanged={(source: Control) => this.updateConfig(source, lastIndex, 'routerAddress')}
        ></i-input>
        <i-hstack>
          <i-label caption="Trade Fee"></i-label>
          <i-label caption="*" font={{ color: 'red' }} margin={{left: '4px'}}></i-label>
          <i-label caption=":"></i-label>
        </i-hstack>
        <i-vstack
          gap='0.5rem'
          padding={{ top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' }}
          border={{ width: 1, style: 'solid', color: 'rgba(217,225,232,.38)', radius: 5 }}
        >
          <i-hstack>
            <i-label caption="Fee"></i-label>
            <i-label caption="*" font={{ color: 'red' }} margin={{left: '4px'}}></i-label>
            <i-label caption=":"></i-label>
          </i-hstack>
          <i-input
            width="100%" inputType="number"
            value={item?.tradeFee.fee || ''}
            onChanged={(source: Control) => this.updateConfig(source, lastIndex, 'fee')}
          ></i-input>
          <i-hstack>
            <i-label caption="Base"></i-label>
            <i-label caption="*" font={{ color: 'red' }} margin={{left: '4px'}}></i-label>
            <i-label caption=":"></i-label>
          </i-hstack>
          <i-input
            width="100%" inputType="number"
            value={item?.tradeFee.base || ''}
            onChanged={(source: Control) => this.updateConfig(source, lastIndex, 'base')}
          ></i-input>
        </i-vstack>
      </i-vstack>
    );
    if (item?.image) uploadElm.preview(item.image);
    if (item?.supportedChains?.length) {
      comboboxElm.selectedItem = item.supportedChains.map(item => ({ label: `${item}`, value: `${item}` }));
    }
    this.listStack.appendChild(itemElm);
    const initObj = {
      factoryAddress: "",
      routerAddress: "",
      tradeFee: { fee: "", base: "" },
      caption: "",
      image: "",
      key: "",
      dexId: undefined,
      supportedChains: []
    }
    this.itemMap.set(lastIndex, item ||  initObj);
  }

  private async updateConfig(source: Control, index: number, prop: IProviderProp, files?: File[]) {
    const item: any = this.itemMap.get(index);
    if (prop === 'fee' || prop === 'base')
      item['tradeFee'][prop] = (source as Input).value;
    else if (prop === 'image')
      item.image = files ? await (source as Upload).toBase64(files[0]) : undefined;
    else if (prop === 'supportedChains') {
      item.supportedChains = ((source as ComboBox).selectedItem as IComboItem[] || []).map(item => Number(item.value));
    }
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

  private onRemovedImage(index: number) { }
  
  init() {
    super.init();
    this._chainOptions = chainsList.map(item => ({ label: `${item}`, value: `${item}` }));
  }

  render() {
    return (
      <i-vstack gap='0.5rem' padding={{ top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' }}>
        <i-panel>
          <i-button
            caption="Add Provider"
            padding={{ left: '1rem', right: '1rem', top: '0.5rem', bottom: '0.5rem' }}
            onClick={() => this.addProvider()}
          ></i-button>
        </i-panel>
        <i-vstack id="listStack" gap="0.5rem"></i-vstack>
      </i-vstack>
    )
  }
}
