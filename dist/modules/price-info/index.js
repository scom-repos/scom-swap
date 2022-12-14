var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@swap/price-info/priceInfo.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_1.Styles.Theme.ThemeVars;
    components_1.Styles.cssRule('.price-info', {
        display: 'flex',
        flexDirection: 'column',
        opacity: 0.75,
        $nest: {
            'i-hstack > i-label:first-child': {
                marginRight: '0.5rem'
            },
            '.rounded-icon': {
                display: 'inline-flex',
                padding: 0
            }
        }
    });
});
define("@swap/price-info", ["require", "exports", "@ijstech/components", "@swap/assets", "@swap/price-info/priceInfo.css.ts"], function (require, exports, components_2, assets_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PriceInfo = void 0;
    ;
    let PriceInfo = class PriceInfo extends components_2.Module {
        constructor(parent, options) {
            super(parent, options);
            this.renderItems = async () => {
                if (this.priceContent.children.length === this.Items.length) {
                    this.updateItems();
                    return;
                }
                this.priceContent.innerHTML = '';
                for (let i = 0; i < this.Items.length; i++) {
                    const item = this.Items[i];
                    const row = new components_2.HStack();
                    row.horizontalAlignment = "space-between";
                    row.verticalAlignment = "center";
                    row.padding = { top: '0.25rem', bottom: '0.25rem', left: 0, right: 0 };
                    if (item.isHidden) {
                        row.classList.add('hidden');
                    }
                    const titleLabel = new components_2.Label(row, { caption: item.title });
                    row.appendChild(titleLabel);
                    if (item.tooltip) {
                        const iconTooltip = this.renderIconTooltip(row, item);
                        row.appendChild(await iconTooltip);
                    }
                    const valueLabel = new components_2.Label(row, { caption: item.value });
                    valueLabel.classList.add("ml-auto");
                    row.appendChild(valueLabel);
                    if (item.isToggleShown) {
                        const image = this.onRenderToggleBtn(row);
                        row.appendChild(image);
                    }
                    this.priceContent.appendChild(row);
                }
            };
            this.onRenderToggleBtn = (parent) => {
                const image = new components_2.Image(parent, {
                    width: 18,
                    height: 18,
                    url: assets_1.default.fullPath("img/swap/icon-swap.png")
                });
                image.classList.add("rounded-icon");
                image.style.marginLeft = "5px";
                image.style.transform = "rotate(90deg)";
                image.onClick = (source, event) => {
                    event.stopPropagation();
                    if (this.onTogglePrice)
                        this.onTogglePrice(this);
                };
                return image;
            };
            this.renderIconTooltip = async (parent, item) => {
                const iconTooltip = await components_2.Icon.create();
                iconTooltip.classList.add('icon-tooltip');
                iconTooltip.name = 'question-circle';
                iconTooltip.width = 15;
                iconTooltip.height = 15;
                iconTooltip.fill = '#fff';
                if (item.onClick) {
                    iconTooltip.classList.add('pointer');
                    iconTooltip.tooltip.content = 'Click to view details';
                    iconTooltip.tooltip.placement = 'right';
                    iconTooltip.tooltip.maxWidth = '270px';
                    iconTooltip.onClick = item.onClick;
                }
                else {
                    iconTooltip.tooltip.content = item.tooltip;
                    iconTooltip.tooltip.placement = 'right';
                    iconTooltip.tooltip.maxWidth = '270px';
                }
                return iconTooltip;
            };
            this.updateItems = async () => {
                for (let i = 0; i < this.Items.length; i++) {
                    const item = this.Items[i];
                    const row = this.priceContent.children[i];
                    const iconTooltip = row.querySelector('.icon-tooltip');
                    const titleLabel = row.firstChild;
                    const valueLabel = row.children[iconTooltip ? 2 : 1];
                    if ((titleLabel === null || titleLabel === void 0 ? void 0 : titleLabel.caption) && item.title != titleLabel.caption) {
                        titleLabel.caption = item.title;
                    }
                    if ((valueLabel === null || valueLabel === void 0 ? void 0 : valueLabel.caption) && item.value != valueLabel.caption) {
                        valueLabel.caption = item.value;
                    }
                    if (iconTooltip) {
                        row.removeChild(iconTooltip);
                    }
                    if (item.tooltip) {
                        const _iconTooltip = this.renderIconTooltip(row, item);
                        row.insertBefore(await _iconTooltip, row.children[1]);
                    }
                    if (item.isToggleShown && row.children.length <= 2) {
                        const image = this.onRenderToggleBtn(row);
                        row.appendChild(image);
                    }
                    else if (!item.isToggleShown && row.children.length > 2 && !item.tooltip) {
                        row.removeChild(row.children[2]);
                    }
                    setTimeout(function () {
                        const iconTooltips = row.querySelectorAll(".icon-tooltip");
                        if (iconTooltips && iconTooltips.length > 1) {
                            row.removeChild(iconTooltips[1]);
                        }
                    }, 2000);
                }
            };
            this.headerTitle = 'Price Info';
        }
        get Items() {
            return this._items;
        }
        set Items(value) {
            this._items = value;
            this.renderItems();
        }
        init() {
            super.init();
        }
        render() {
            return (this.$render("i-panel", { class: "price-info", width: "auto" },
                this.$render("i-label", { class: "header", caption: "Price Info", padding: { bottom: '0.5rem' }, font: { size: '1.125rem' } }),
                this.$render("i-panel", { id: "priceContent" })));
        }
    };
    __decorate([
        components_2.observable()
    ], PriceInfo.prototype, "headerTitle", void 0);
    PriceInfo = __decorate([
        components_2.customElements('price-info')
    ], PriceInfo);
    exports.PriceInfo = PriceInfo;
});
