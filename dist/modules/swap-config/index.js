var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@swap/swap-config/swap-config.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uploadStyle = exports.pointerStyle = void 0;
    exports.pointerStyle = components_1.Styles.style({
        cursor: 'pointer'
    });
    exports.uploadStyle = components_1.Styles.style({
        $nest: {
            '.i-upload_preview-img': {
                maxHeight: '100%',
                display: 'block'
            },
            '.i-upload-wrapper': {
                maxHeight: 'inherit',
                overflow: 'hidden'
            }
        }
    });
});
define("@swap/swap-config", ["require", "exports", "@ijstech/components", "@swap/swap-config/swap-config.css.ts"], function (require, exports, components_2, swap_config_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SwapConfig = void 0;
    const chainsList = [1, 42, 56, 97, 4002, 43113, 43114, 80001, 13370, 338, 137, 250, 56, 97];
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
            var _a;
            const lastIndex = this.itemList.length;
            const uploadElm = (this.$render("i-upload", { maxHeight: 200, maxWidth: 200, class: swap_config_css_1.uploadStyle, onChanged: (source, files) => this.updateConfig(source, lastIndex, 'image', files), onRemoved: () => this.onRemovedImage(lastIndex) }));
            const comboboxElm = (this.$render("i-combo-box", { width: "100%", icon: { name: 'angle-down' }, items: this._chainOptions, mode: "tags", onChanged: (source) => this.updateConfig(source, lastIndex, 'supportedChains') }));
            const itemElm = (this.$render("i-vstack", { gap: '0.5rem', padding: { top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' }, border: { width: 1, style: 'solid', color: 'rgba(217,225,232,.38)', radius: 5 }, position: "relative" },
                this.$render("i-icon", { name: "times", fill: "red", width: 20, height: 20, position: "absolute", top: 10, right: 10, class: swap_config_css_1.pointerStyle, onClick: () => this.deleteProvider(itemElm, lastIndex) }),
                this.$render("i-hstack", null,
                    this.$render("i-label", { caption: "Caption" }),
                    this.$render("i-label", { caption: "*", font: { color: 'red' }, margin: { left: '4px' } }),
                    this.$render("i-label", { caption: ":" })),
                this.$render("i-input", { width: "100%", value: (item === null || item === void 0 ? void 0 : item.caption) || '', onChanged: (source) => this.updateConfig(source, lastIndex, 'caption') }),
                this.$render("i-hstack", null,
                    this.$render("i-label", { caption: "Image" }),
                    this.$render("i-label", { caption: "*", font: { color: 'red' }, margin: { left: '4px' } }),
                    this.$render("i-label", { caption: ":" })),
                uploadElm,
                this.$render("i-hstack", null,
                    this.$render("i-label", { caption: "Key" }),
                    this.$render("i-label", { caption: "*", font: { color: 'red' }, margin: { left: '4px' } }),
                    this.$render("i-label", { caption: ":" })),
                this.$render("i-input", { width: "100%", value: (item === null || item === void 0 ? void 0 : item.key) || '', onChanged: (source) => this.updateConfig(source, lastIndex, 'key') }),
                this.$render("i-label", { caption: "Dex Id" }),
                this.$render("i-input", { width: "100%", value: (item === null || item === void 0 ? void 0 : item.dexId) || '', inputType: "number", onChanged: (source) => this.updateConfig(source, lastIndex, 'dexId') }),
                this.$render("i-label", { caption: "Supported Chains" }),
                comboboxElm,
                this.$render("i-hstack", null,
                    this.$render("i-label", { caption: "Factory Address" }),
                    this.$render("i-label", { caption: "*", font: { color: 'red' }, margin: { left: '4px' } }),
                    this.$render("i-label", { caption: ":" })),
                this.$render("i-input", { width: "100%", value: (item === null || item === void 0 ? void 0 : item.factoryAddress) || '', onChanged: (source) => this.updateConfig(source, lastIndex, 'factoryAddress') }),
                this.$render("i-hstack", null,
                    this.$render("i-label", { caption: "Router Address" }),
                    this.$render("i-label", { caption: "*", font: { color: 'red' }, margin: { left: '4px' } }),
                    this.$render("i-label", { caption: ":" })),
                this.$render("i-input", { width: "100%", value: (item === null || item === void 0 ? void 0 : item.routerAddress) || '', onChanged: (source) => this.updateConfig(source, lastIndex, 'routerAddress') }),
                this.$render("i-hstack", null,
                    this.$render("i-label", { caption: "Trade Fee" }),
                    this.$render("i-label", { caption: "*", font: { color: 'red' }, margin: { left: '4px' } }),
                    this.$render("i-label", { caption: ":" })),
                this.$render("i-vstack", { gap: '0.5rem', padding: { top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' }, border: { width: 1, style: 'solid', color: 'rgba(217,225,232,.38)', radius: 5 } },
                    this.$render("i-hstack", null,
                        this.$render("i-label", { caption: "Fee" }),
                        this.$render("i-label", { caption: "*", font: { color: 'red' }, margin: { left: '4px' } }),
                        this.$render("i-label", { caption: ":" })),
                    this.$render("i-input", { width: "100%", inputType: "number", value: (item === null || item === void 0 ? void 0 : item.tradeFee.fee) || '', onChanged: (source) => this.updateConfig(source, lastIndex, 'fee') }),
                    this.$render("i-hstack", null,
                        this.$render("i-label", { caption: "Base" }),
                        this.$render("i-label", { caption: "*", font: { color: 'red' }, margin: { left: '4px' } }),
                        this.$render("i-label", { caption: ":" })),
                    this.$render("i-input", { width: "100%", inputType: "number", value: (item === null || item === void 0 ? void 0 : item.tradeFee.base) || '', onChanged: (source) => this.updateConfig(source, lastIndex, 'base') }))));
            if (item === null || item === void 0 ? void 0 : item.image)
                uploadElm.preview(item.image);
            if ((_a = item === null || item === void 0 ? void 0 : item.supportedChains) === null || _a === void 0 ? void 0 : _a.length) {
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
            };
            this.itemMap.set(lastIndex, item || initObj);
        }
        async updateConfig(source, index, prop, files) {
            const item = this.itemMap.get(index);
            if (prop === 'fee' || prop === 'base')
                item['tradeFee'][prop] = source.value;
            else if (prop === 'image')
                item.image = files ? await source.toBase64(files[0]) : undefined;
            else if (prop === 'supportedChains') {
                item.supportedChains = (source.selectedItem || []).map(item => Number(item.value));
            }
            else if (prop === 'dexId')
                item.dexId = +source.value;
            else
                item[prop] = source.value;
        }
        deleteProvider(source, index) {
            if (this.itemMap.has(index)) {
                source.remove();
                this.itemMap.delete(index);
            }
        }
        onRemovedImage(index) { }
        init() {
            super.init();
            this._chainOptions = chainsList.map(item => ({ label: `${item}`, value: `${item}` }));
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
