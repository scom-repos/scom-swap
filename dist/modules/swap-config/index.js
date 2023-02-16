var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@swap/swap-config/swap-config.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uploadStyle = exports.pointerStyle = exports.tokenSelectionStyle = exports.comboboxStyle = exports.configStyle = void 0;
    const Theme = components_1.Styles.Theme.ThemeVars;
    exports.configStyle = components_1.Styles.style({
        $nest: {
            'i-label': {
                color: '#fff'
            }
        }
    });
    exports.comboboxStyle = components_1.Styles.style({
        maxWidth: 200,
        $nest: {
            '.selection': {
                paddingInline: 0,
            },
            '.selection input': {
                padding: '1px 2px',
            },
            '.icon-btn i-icon': {
                fill: `${Theme.colors.primary.main} !important`
            },
        }
    });
    exports.tokenSelectionStyle = components_1.Styles.style({
        maxWidth: 200,
        $nest: {
            '#btnToken': {
                background: '#252a48 !important',
                height: 30,
            },
            '#btnMax': {
                display: 'none',
            }
        }
    });
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
define("@swap/swap-config", ["require", "exports", "@ijstech/components", "@swap/swap-config/swap-config.css.ts", "@swap/crosschain-utils", "@swap/store"], function (require, exports, components_2, swap_config_css_1, crosschain_utils_1, store_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SwapConfig = void 0;
    const chainsList = [1, 42, 56, 97, 4002, 43113, 43114, 80001, 13370, 338, 137, 250, 56, 97];
    const categories = [
        {
            label: 'Fixed Pair',
            value: 'fixed-pair',
        },
        {
            label: 'Aggregator',
            value: 'aggregator',
        }
    ];
    ;
    let SwapConfig = class SwapConfig extends components_2.Module {
        constructor() {
            super(...arguments);
            this.category = categories[0].value;
            this.chainTokenMaps = {};
            this.chainTokenBalances = {};
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
            return {
                category: this.category,
                providers: this.convertProviderUIToData(this.itemList)
            };
        }
        set data(config) {
            const categoryObj = categories.find(v => v.value === config.category);
            if (categoryObj) {
                this.category = config.category;
                this.cbbCategory.selectedItem = categoryObj;
            }
            this.itemList = this.convertDataToProviderUI(config.providers || []);
        }
        get isFixedPair() {
            return this.category === 'fixed-pair';
        }
        showConfig() {
            this.listStack.clearInnerHTML();
            this.itemMap = new Map();
            this._itemList.forEach(item => this.addProvider(item));
        }
        convertDataToProviderUI(providers) {
            const providersUI = providers.map(v => {
                const { caption, image, key, dexId, contractInfo } = v;
                let _contractInfo = [];
                for (const chainId of Object.keys(contractInfo)) {
                    _contractInfo.push(Object.assign({ chainId }, contractInfo[chainId]));
                }
                return {
                    caption,
                    image,
                    key,
                    dexId,
                    contractInfo: _contractInfo
                };
            });
            return providersUI;
        }
        convertProviderUIToData(providersUI) {
            const providers = providersUI.map(v => {
                const { caption, image, key, dexId, contractInfo } = v;
                let _contractInfo = {};
                for (const contract of contractInfo) {
                    const { chainId, factoryAddress, routerAddress, tradeFee, fromToken, toToken } = contract;
                    if (chainId) {
                        _contractInfo[chainId] = {
                            factoryAddress,
                            routerAddress,
                            tradeFee
                        };
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
                };
            });
            return providers;
        }
        async updateProvider(source, index, prop, files) {
            const item = this.itemMap.get(index);
            if (prop === 'image')
                item.image = files ? await source.toBase64(files[0]) : undefined;
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
        updateContractInfo(source, providerIndex, index, prop, token) {
            const item = this.itemMap.get(providerIndex);
            if (!item)
                return;
            if (!item.contractInfo[index]) {
                item.contractInfo[index] = {
                    chainId: '',
                    factoryAddress: '',
                    routerAddress: '',
                    tradeFee: {
                        fee: '',
                        base: '',
                    }
                };
            }
            if (prop === 'chainId')
                item.contractInfo[index].chainId = source.selectedItem.value;
            else if (prop === 'fee' || prop === 'base')
                item.contractInfo[index]['tradeFee'][prop] = source.value;
            else if (prop === 'fromToken' || prop === 'toToken')
                item.contractInfo[index][prop] = token === null || token === void 0 ? void 0 : token.address;
            else
                item.contractInfo[index][prop] = source.value;
        }
        deleteContractInfo(source, providerIndex, index) {
            const item = this.itemMap.get(providerIndex);
            if (!item)
                return;
            if (item.contractInfo[index]) {
                item.contractInfo.splice(index, 1);
            }
            source.remove();
        }
        onRemovedImage(index) { }
        onCategoryChanged() {
            const value = this.cbbCategory.selectedItem.value;
            this.category = value;
            const tokenSelections = this.listStack.querySelectorAll('.wrapper-token--selection');
            for (const selection of tokenSelections) {
                selection.visible = this.isFixedPair;
            }
        }
        init() {
            super.init();
            this._chainOptions = chainsList.map(item => ({ label: `${item}`, value: `${item}` }));
        }
        getChainTokenDataList(chainId) {
            let dataList = [];
            const _tokenMap = this.chainTokenMaps[chainId];
            const _tokenBalances = this.chainTokenBalances[chainId];
            if (_tokenMap) {
                for (const key of Object.keys(_tokenMap)) {
                    let tokenAddress = key;
                    let tokenObject = _tokenMap[tokenAddress];
                    if (_tokenBalances) {
                        dataList.push(Object.assign(Object.assign({}, tokenObject), { status: false, balance: _tokenBalances[tokenAddress] ? _tokenBalances[tokenAddress] : 0 }));
                    }
                    else {
                        dataList.push(Object.assign(Object.assign({}, tokenObject), { status: null }));
                    }
                }
            }
            return dataList;
        }
        ;
        async setTargetTokenList(comboBoxChain, fromTokenSelection, toTokenSelection, chainId) {
            var _a;
            if (this.isFixedPair)
                comboBoxChain.enabled = false;
            fromTokenSelection.enabled = false;
            toTokenSelection.enabled = false;
            if (fromTokenSelection.targetChainId != chainId) {
                fromTokenSelection.targetChainId = chainId;
                toTokenSelection.targetChainId = chainId;
                const tokenBalanceObj = await crosschain_utils_1.getTargetChainTokenInfoObj(chainId);
                this.chainTokenBalances[chainId] = store_1.isWalletConnected() ? tokenBalanceObj.balances : [];
                this.chainTokenMaps[chainId] = (_a = tokenBalanceObj.tokenMap) !== null && _a !== void 0 ? _a : {};
            }
            fromTokenSelection.tokenDataListProp = this.getChainTokenDataList(chainId);
            toTokenSelection.tokenDataListProp = this.getChainTokenDataList(chainId);
            fromTokenSelection.enabled = true;
            toTokenSelection.enabled = true;
            if (this.isFixedPair)
                comboBoxChain.enabled = true;
        }
        addProvider(item) {
            const lastIndex = this.itemList.length;
            let contractIndex = 0;
            const uploadElm = (this.$render("i-upload", { maxHeight: 200, maxWidth: 200, class: swap_config_css_1.uploadStyle, onChanged: (source, files) => this.updateProvider(source, lastIndex, 'image', files), onRemoved: () => this.onRemovedImage(lastIndex) }));
            const contractInfoElm = (this.$render("i-vstack", { width: "100%", gap: "1rem", padding: { top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' }, border: { width: 1, style: 'solid', color: 'rgba(217,225,232,.38)', radius: 5 }, position: "relative" },
                this.$render("i-button", { caption: "Add Contract Info", maxWidth: 200, padding: { left: '1rem', right: '1rem', top: '0.5rem', bottom: '0.5rem' }, onClick: () => this.addContractInfo(contractInfoElm, lastIndex, ++contractIndex) })));
            const itemElm = (this.$render("i-vstack", { gap: "1rem", padding: { top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' }, border: { width: 1, style: 'solid', color: 'rgba(217,225,232,.38)', radius: 5 }, position: "relative" },
                this.$render("i-icon", { name: "times", fill: "red", width: 20, height: 20, position: "absolute", top: 10, right: 10, class: swap_config_css_1.pointerStyle, onClick: () => this.deleteProvider(itemElm, lastIndex) }),
                this.$render("i-hstack", { gap: 8, verticalAlignment: "center", wrap: "wrap" },
                    this.$render("i-hstack", { gap: 2, width: 60 },
                        this.$render("i-label", { caption: "Caption" }),
                        this.$render("i-label", { caption: "*", font: { color: 'red' } }),
                        this.$render("i-label", { caption: ":" })),
                    this.$render("i-input", { width: "100%", maxWidth: 200, value: (item === null || item === void 0 ? void 0 : item.caption) || '', onChanged: (source) => this.updateProvider(source, lastIndex, 'caption') })),
                this.$render("i-hstack", { gap: 2, width: 60 },
                    this.$render("i-label", { caption: "Image" }),
                    this.$render("i-label", { caption: "*", font: { color: 'red' } }),
                    this.$render("i-label", { caption: ":" })),
                uploadElm,
                this.$render("i-hstack", { gap: 8, verticalAlignment: "center", wrap: "wrap" },
                    this.$render("i-hstack", { gap: 2, width: 60 },
                        this.$render("i-label", { caption: "Key" }),
                        this.$render("i-label", { caption: "*", font: { color: 'red' } }),
                        this.$render("i-label", { caption: ":" })),
                    this.$render("i-input", { width: "100%", maxWidth: 200, value: (item === null || item === void 0 ? void 0 : item.key) || '', onChanged: (source) => this.updateProvider(source, lastIndex, 'key') })),
                this.$render("i-hstack", { gap: 8, verticalAlignment: "center", wrap: "wrap" },
                    this.$render("i-hstack", { gap: 2, width: 60 },
                        this.$render("i-label", { caption: "Dex Id:" })),
                    this.$render("i-input", { width: "100%", maxWidth: 200, value: (item === null || item === void 0 ? void 0 : item.dexId) || '', inputType: "number", onChanged: (source) => this.updateProvider(source, lastIndex, 'dexId') })),
                this.$render("i-hstack", { gap: 8, verticalAlignment: "center", wrap: "wrap" },
                    this.$render("i-hstack", { gap: 2, width: 120 },
                        this.$render("i-label", { caption: "Contract Info" }),
                        this.$render("i-label", { caption: "*", font: { color: 'red' } }),
                        this.$render("i-label", { caption: ":" })),
                    contractInfoElm)));
            const contractInfo = item === null || item === void 0 ? void 0 : item.contractInfo;
            if (contractInfo) {
                for (contractIndex = 0; contractIndex < contractInfo.length; contractIndex++) {
                    this.addContractInfo(contractInfoElm, lastIndex, contractIndex, contractInfo[contractIndex]);
                }
            }
            else {
                this.addContractInfo(contractInfoElm, lastIndex, contractIndex);
            }
            if (item === null || item === void 0 ? void 0 : item.image)
                uploadElm.preview(item.image);
            this.listStack.appendChild(itemElm);
            const initObj = {
                caption: '',
                image: '',
                key: '',
                dexId: undefined,
                contractInfo: []
            };
            this.itemMap.set(lastIndex, item || initObj);
        }
        async addContractInfo(parentElm, providerIndex, index, item) {
            const chainId = item === null || item === void 0 ? void 0 : item.chainId;
            const hasChainId = !!chainId;
            const fromTokenSelection = (this.$render("swap-token-selection", { class: swap_config_css_1.tokenSelectionStyle, width: "100%" }));
            const toTokenSelection = (this.$render("swap-token-selection", { class: swap_config_css_1.tokenSelectionStyle, width: "100%" }));
            fromTokenSelection.enabled = hasChainId;
            fromTokenSelection.isBtnMaxShown = false;
            fromTokenSelection.onSelectToken = (token) => this.updateContractInfo(fromTokenSelection, providerIndex, index, 'fromToken', token);
            toTokenSelection.enabled = hasChainId;
            toTokenSelection.isBtnMaxShown = false;
            toTokenSelection.onSelectToken = (token) => this.updateContractInfo(toTokenSelection, providerIndex, index, 'toToken', token);
            const comboBoxChain = (this.$render("i-combo-box", { width: "100%", icon: { name: 'angle-down' }, items: this._chainOptions, selectedItem: {
                    value: (item === null || item === void 0 ? void 0 : item.chainId) || '',
                    label: (item === null || item === void 0 ? void 0 : item.chainId) || ''
                }, mode: "single", class: swap_config_css_1.comboboxStyle, onChanged: (source) => {
                    this.setTargetTokenList(comboBoxChain, fromTokenSelection, toTokenSelection, Number(source.selectedItem.value));
                    this.updateContractInfo(source, providerIndex, index, 'chainId');
                } }));
            const contractElm = (this.$render("i-vstack", { gap: "1rem", padding: { top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' }, border: { width: 1, style: 'solid', color: 'rgba(217,225,232,.38)', radius: 5 }, position: 'relative' },
                this.$render("i-icon", { name: "times", fill: "red", width: 20, height: 20, position: "absolute", top: 10, right: 10, class: swap_config_css_1.pointerStyle, onClick: () => this.deleteContractInfo(contractElm, providerIndex, index) }),
                this.$render("i-hstack", { gap: 8, verticalAlignment: "center", wrap: "wrap" },
                    this.$render("i-hstack", { gap: 2, width: 120 },
                        this.$render("i-label", { caption: "Chain Id" }),
                        this.$render("i-label", { caption: "*", font: { color: 'red' } }),
                        this.$render("i-label", { caption: ":" })),
                    comboBoxChain),
                this.$render("i-hstack", { gap: 8, verticalAlignment: "center", wrap: "wrap" },
                    this.$render("i-hstack", { gap: 2, width: 120 },
                        this.$render("i-label", { caption: "Factory Address" }),
                        this.$render("i-label", { caption: "*", font: { color: 'red' } }),
                        this.$render("i-label", { caption: ":" })),
                    this.$render("i-input", { width: "100%", minWidth: 300, maxWidth: "calc(100% - 128px)", value: (item === null || item === void 0 ? void 0 : item.factoryAddress) || '', onChanged: (source) => this.updateContractInfo(source, providerIndex, index, 'factoryAddress') })),
                this.$render("i-hstack", { gap: 8, verticalAlignment: "center", wrap: "wrap" },
                    this.$render("i-hstack", { gap: 2, width: 120 },
                        this.$render("i-label", { caption: "Router Address" }),
                        this.$render("i-label", { caption: "*", font: { color: 'red' } }),
                        this.$render("i-label", { caption: ":" })),
                    this.$render("i-input", { width: "100%", minWidth: 300, maxWidth: "calc(100% - 128px)", value: (item === null || item === void 0 ? void 0 : item.routerAddress) || '', onChanged: (source) => this.updateContractInfo(source, providerIndex, index, 'routerAddress') })),
                this.$render("i-hstack", { visible: this.isFixedPair, class: "wrapper-token--selection", gap: 8, verticalAlignment: "center", wrap: "wrap" },
                    this.$render("i-hstack", { gap: 2, width: 120 },
                        this.$render("i-label", { caption: "From Token" }),
                        this.$render("i-label", { caption: "*", font: { color: 'red' } }),
                        this.$render("i-label", { caption: ":" })),
                    fromTokenSelection),
                this.$render("i-hstack", { visible: this.isFixedPair, class: "wrapper-token--selection", gap: 8, verticalAlignment: "center", wrap: "wrap" },
                    this.$render("i-hstack", { gap: 2, width: 120 },
                        this.$render("i-label", { caption: "To Token" }),
                        this.$render("i-label", { caption: "*", font: { color: 'red' } }),
                        this.$render("i-label", { caption: ":" })),
                    toTokenSelection),
                this.$render("i-hstack", { gap: 2 },
                    this.$render("i-label", { caption: "Trade Fee" }),
                    this.$render("i-label", { caption: "*", font: { color: 'red' } }),
                    this.$render("i-label", { caption: ":" })),
                this.$render("i-vstack", { gap: "1rem", padding: { top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' }, border: { width: 1, style: 'solid', color: 'rgba(217,225,232,.38)', radius: 5 } },
                    this.$render("i-hstack", { gap: 8, verticalAlignment: "center", wrap: "wrap" },
                        this.$render("i-hstack", { gap: 2, width: 104 },
                            this.$render("i-label", { caption: "Fee" }),
                            this.$render("i-label", { caption: "*", font: { color: 'red' } }),
                            this.$render("i-label", { caption: ":" })),
                        this.$render("i-input", { width: "100%", maxWidth: 200, inputType: "number", value: (item === null || item === void 0 ? void 0 : item.tradeFee.fee) || '', onChanged: (source) => this.updateContractInfo(source, providerIndex, index, 'fee') })),
                    this.$render("i-hstack", { gap: 8, verticalAlignment: "center", wrap: "wrap" },
                        this.$render("i-hstack", { gap: 2, width: 104 },
                            this.$render("i-label", { caption: "Base" }),
                            this.$render("i-label", { caption: "*", font: { color: 'red' } }),
                            this.$render("i-label", { caption: ":" })),
                        this.$render("i-input", { width: "100%", maxWidth: 200, inputType: "number", value: (item === null || item === void 0 ? void 0 : item.tradeFee.base) || '', onChanged: (source) => this.updateContractInfo(source, providerIndex, index, 'base') })))));
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
            return (this.$render("i-vstack", { class: swap_config_css_1.configStyle, gap: "1rem", padding: { top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' } },
                this.$render("i-vstack", { gap: "1rem", verticalAlignment: "center", maxWidth: 260 },
                    this.$render("i-hstack", { gap: 2, verticalAlignment: "center" },
                        this.$render("i-label", { caption: "Category" }),
                        this.$render("i-label", { caption: "*", font: { color: 'red' } }),
                        this.$render("i-label", { caption: ":" }),
                        this.$render("i-combo-box", { id: "cbbCategory", width: "100%", icon: { name: 'angle-down' }, items: categories, selectedItem: categories[0], mode: "single", margin: { left: 6 }, class: swap_config_css_1.comboboxStyle, onChanged: this.onCategoryChanged })),
                    this.$render("i-button", { caption: "Add Provider", padding: { left: '1rem', right: '1rem', top: '0.5rem', bottom: '0.5rem' }, onClick: () => this.addProvider() })),
                this.$render("i-vstack", { id: "listStack", gap: "0.5rem" })));
        }
    };
    SwapConfig = __decorate([
        components_2.customElements('swap-config')
    ], SwapConfig);
    exports.SwapConfig = SwapConfig;
});
