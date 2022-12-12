import { customElements, Module, ControlElement, Input, VStack, Control } from '@ijstech/components';
import { pointerStyle } from './swap-config.css';

export interface IConfig {
  data: IData[]
}

 export interface IData {
  factoryAddress: string;
  routerAddress: string;
  tradeFee: {
    fee: string,
    base: string
  }
}

type IDataProp = 'factoryAddress' | 'routerAddress' | 'fee' | 'base';

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
  private itemMap: Map<number, IData> = new Map();
  private _itemList: IData[] = [];

  get itemList() {
    return Array.from(this.itemMap).map(item => item[1]);
  }
  set itemList(data: IData[]) {
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

  private addProvider(item?: IData) {
    const lastIndex = this.itemList.length;
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
          <i-label caption="Factory Address"></i-label>
          <i-label caption="*" font={{ color: 'red' }} margin={{left: '4px'}}></i-label>
          <i-label caption=":"></i-label>
        </i-hstack>
        <i-input width="100%" onChanged={(source: Control) => this.updateConfig(source, lastIndex, 'factoryAddress')}></i-input>
        <i-hstack>
          <i-label caption="Router Address"></i-label>
          <i-label caption="*" font={{ color: 'red' }} margin={{left: '4px'}}></i-label>
          <i-label caption=":"></i-label>
        </i-hstack>
        <i-input width="100%" onChanged={(source: Control) => this.updateConfig(source, lastIndex, 'routerAddress')}></i-input>
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
          <i-input width="100%" inputType="number" onChanged={(source: Control) => this.updateConfig(source, lastIndex, 'fee')}></i-input>
          <i-hstack>
            <i-label caption="Base"></i-label>
            <i-label caption="*" font={{ color: 'red' }} margin={{left: '4px'}}></i-label>
            <i-label caption=":"></i-label>
          </i-hstack>
          <i-input width="100%" inputType="number" onChanged={(source: Control) => this.updateConfig(source, lastIndex, 'base')}></i-input>
        </i-vstack>
      </i-vstack>
    );
    this.listStack.appendChild(itemElm);
    const initObj = {
      factoryAddress: "",
      routerAddress: "",
      tradeFee: { fee: "", base: "" }
    }
    this.itemMap.set(lastIndex, item ||  initObj);
  }

  private updateConfig(source: Control, index: number, prop: IDataProp) {
    const item: any = this.itemMap.get(index);
    if (prop === 'fee' || prop === 'base')
      item['tradeFee'][prop] = (source as Input).value;
    else
      item[prop] = (source as Input).value;
  }

  private deleteProvider(source: Control, index: number) {
    if (this.itemMap.has(index)) {
      source.remove();
      this.itemMap.delete(index);
    }
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
