var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@swap/swap-config/swap-config.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pointerStyle = void 0;
    exports.pointerStyle = components_1.Styles.style({
        cursor: 'pointer'
    });
});
define("@swap/swap-config", ["require", "exports", "@ijstech/components", "@swap/swap-config/swap-config.css.ts"], function (require, exports, components_2, swap_config_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SwapConfig = void 0;
    ;
    let SwapConfig = class SwapConfig extends components_2.Module {
        constructor() {
            super(...arguments);
            this.itemMap = new Map();
            this._itemList = [];
        }
        get itemList() {
            return Array.from(this.itemMap).map(item => item[1]);
        }
        set itemList(data) {
            this._itemList = data;
        }
        get data() {
            return { data: this.itemList };
        }
        set data(config) {
            this.itemList = config.data || [];
            this.listStack.clearInnerHTML();
            this.itemMap = new Map();
            this._itemList.forEach(item => this.addProvider(item));
        }
        addProvider(item) {
            const lastIndex = this.itemList.length;
            const itemElm = (this.$render("i-vstack", { gap: '0.5rem', padding: { top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' }, border: { width: 1, style: 'solid', color: 'rgba(217,225,232,.38)', radius: 5 }, position: "relative" },
                this.$render("i-icon", { name: "times", fill: "red", width: 20, height: 20, position: "absolute", top: 10, right: 10, class: swap_config_css_1.pointerStyle, onClick: () => this.deleteProvider(itemElm, lastIndex) }),
                this.$render("i-hstack", null,
                    this.$render("i-label", { caption: "Factory Address" }),
                    this.$render("i-label", { caption: "*", font: { color: 'red' }, margin: { left: '4px' } }),
                    this.$render("i-label", { caption: ":" })),
                this.$render("i-input", { width: "100%", onChanged: (source) => this.updateConfig(source, lastIndex, 'factoryAddress') }),
                this.$render("i-hstack", null,
                    this.$render("i-label", { caption: "Router Address" }),
                    this.$render("i-label", { caption: "*", font: { color: 'red' }, margin: { left: '4px' } }),
                    this.$render("i-label", { caption: ":" })),
                this.$render("i-input", { width: "100%", onChanged: (source) => this.updateConfig(source, lastIndex, 'routerAddress') }),
                this.$render("i-hstack", null,
                    this.$render("i-label", { caption: "Trade Fee" }),
                    this.$render("i-label", { caption: "*", font: { color: 'red' }, margin: { left: '4px' } }),
                    this.$render("i-label", { caption: ":" })),
                this.$render("i-vstack", { gap: '0.5rem', padding: { top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' }, border: { width: 1, style: 'solid', color: 'rgba(217,225,232,.38)', radius: 5 } },
                    this.$render("i-hstack", null,
                        this.$render("i-label", { caption: "Fee" }),
                        this.$render("i-label", { caption: "*", font: { color: 'red' }, margin: { left: '4px' } }),
                        this.$render("i-label", { caption: ":" })),
                    this.$render("i-input", { width: "100%", inputType: "number", onChanged: (source) => this.updateConfig(source, lastIndex, 'fee') }),
                    this.$render("i-hstack", null,
                        this.$render("i-label", { caption: "Base" }),
                        this.$render("i-label", { caption: "*", font: { color: 'red' }, margin: { left: '4px' } }),
                        this.$render("i-label", { caption: ":" })),
                    this.$render("i-input", { width: "100%", inputType: "number", onChanged: (source) => this.updateConfig(source, lastIndex, 'base') }))));
            this.listStack.appendChild(itemElm);
            const initObj = {
                factoryAddress: "",
                routerAddress: "",
                tradeFee: { fee: "", base: "" }
            };
            this.itemMap.set(lastIndex, item || initObj);
        }
        updateConfig(source, index, prop) {
            const item = this.itemMap.get(index);
            if (prop === 'fee' || prop === 'base')
                item['tradeFee'][prop] = source.value;
            else
                item[prop] = source.value;
        }
        deleteProvider(source, index) {
            if (this.itemMap.has(index)) {
                source.remove();
                this.itemMap.delete(index);
            }
        }
        render() {
            return (this.$render("i-vstack", { gap: '0.5rem', padding: { top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' } },
                this.$render("i-panel", null,
                    this.$render("i-button", { caption: "Add Provider", padding: { left: '1rem', right: '1rem', top: '0.5rem', bottom: '0.5rem' }, onClick: () => this.addProvider() })),
                this.$render("i-vstack", { id: "listStack", gap: "0.5rem" })));
        }
    };
    SwapConfig = __decorate([
        components_2.customElements('swap-config')
    ], SwapConfig);
    exports.SwapConfig = SwapConfig;
});
