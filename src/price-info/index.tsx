import { customElements, Module, Control, ControlElement, VStack, Label, Icon, HStack, Container, Styles } from '@ijstech/components';

const Theme = Styles.Theme.ThemeVars;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['i-scom-swap-price-info']: ControlElement;
    }
  }
};

@customElements('i-scom-swap-price-info')
export class PriceInfo extends Module {
  private priceContent: VStack;

  private _items: any[];
  public onTogglePrice: any;

  constructor(parent?: Container, options?: any) {
    super(parent, options);
  }

  private get Items(): any[] {
    return this._items;
  }
  private set Items(value: any[]) {
    this._items = value;
  }

  async setData(value: any[]) {
    this.Items = value;
    await this.renderItems();
  }

  getData() {
    return this.Items;
  }

  private async renderItems() {
    // if (this.priceContent.children.length === this.Items.length) {
    //   this.updateItems();
    //   return;
    // }
    this.priceContent.clearInnerHTML();
    for (let i = 0; i < this.Items.length; i++) {
      const item = this.Items[i];
      const row = (
        <i-hstack
          verticalAlignment="center"
          horizontalAlignment="space-between"
          padding={{ top: '0.25rem', bottom: '0.25rem', left: 0, right: 0 }}
          gap="0.5rem"
          visible={!item.isHidden}
        ></i-hstack>
      )
      const pnlTitle = <i-hstack verticalAlignment="center" gap="0.5rem"></i-hstack>;
      const titleLabel = <i-label caption={item.title} opacity={0.75}></i-label>;
      pnlTitle.appendChild(titleLabel);

      if (item.tooltip) {
        const iconTooltip = this.renderIconTooltip(pnlTitle, item);
        pnlTitle.appendChild(iconTooltip);
      }
      
      row.appendChild(pnlTitle);

      const pnlValue = <i-hstack verticalAlignment="center"horizontalAlignment="end" gap="0.5rem"></i-hstack>;
      const valueLabel = <i-label caption={item.value}></i-label>;
      pnlValue.appendChild(valueLabel);

      if (item.isToggleShown) {
        const image = this.onRenderToggleBtn(pnlValue);
        pnlValue.appendChild(image);
      }

      row.appendChild(pnlValue);
      this.priceContent.appendChild(row);
    }
  }

  onRenderToggleBtn = (parent: Control) => {
    const image = new Icon(parent, {
      width: 18,
      height: 18,
      name: 'arrows-alt-v',
      fill: Theme.text.primary,
      border: {width: '2px', style: 'solid', color: 'transparent', radius: '50%'},
      background: {color: Theme.input.background},
      margin: {left: 5},
    });
    image.style.transform = "rotate(90deg)";
    image.onClick = (source: Control, event: Event) => {
      event.stopPropagation();
      if (this.onTogglePrice)
        this.onTogglePrice(this);
    };
    return image;
  }

  renderIconTooltip = (parent: Control, item: any) => {
    const iconTooltip = new Icon(parent, {
      opacity: 0.75,
      fill: Theme.text.primary,
      name: 'question-circle',
      width: 15,
      height: 15
    });
    iconTooltip.classList.add('icon-tooltip');
    if (item.onClick) {
      iconTooltip.cursor = 'pointer';
      iconTooltip.tooltip.content = 'Click to view details';
      iconTooltip.tooltip.placement = 'right';
      iconTooltip.tooltip.maxWidth = '270px';
      iconTooltip.onClick = item.onClick;
    } else {
      iconTooltip.tooltip.content = item.tooltip;
      iconTooltip.tooltip.placement = 'right';
      iconTooltip.tooltip.maxWidth = '270px';
    }
    return iconTooltip;
  }

  // updateItems = async () => {
  //   for (let i = 0; i < this.Items.length; i++) {
  //     const item = this.Items[i];
  //     const row = this.priceContent.children[i] as HStack;
  //     const iconTooltip = row.querySelector('.icon-tooltip');
  //     const titleLabel = row.firstChild as Label;
  //     const valueLabel = row.children[iconTooltip ? 2 : 1] as Label;
  //     if (titleLabel?.caption && item.title != titleLabel.caption) {
  //       titleLabel.caption = item.title
  //     }
  //     if (valueLabel?.caption && item.value != valueLabel.caption) {
  //       valueLabel.caption = item.value
  //     }
  //     if (iconTooltip) {
  //       row.removeChild(iconTooltip);
  //     }
  //     if (item.tooltip) {
  //       const _iconTooltip = this.renderIconTooltip(row, item);
  //       row.insertBefore(_iconTooltip, row.children[1]);
  //     }
  //     if (item.isToggleShown && row.children.length <= 2) {
  //       const image = this.onRenderToggleBtn(row);
  //       row.appendChild(image);
  //     } else if (!item.isToggleShown && row.children.length > 2 && !item.tooltip) {
  //       row.removeChild(row.children[2]);
  //     }

  //     setTimeout(function(){
  //       const iconTooltips = row.querySelectorAll(".icon-tooltip");
  //       if (iconTooltips && iconTooltips.length > 1) {
  //           row.removeChild(iconTooltips[1])
  //       }
  //     }, 2000)
  //   }
  // }

  init() {
    super.init();
  }

  render() {
    return (
      <i-vstack class="price-info" width="auto">
        {/* <i-label class="header" caption="Price Info" padding={{ bottom: '0.5rem' }} font={{ size: '1.125rem' }}></i-label> */}
        <i-vstack id="priceContent"></i-vstack>
      </i-vstack>
    )
  }
}