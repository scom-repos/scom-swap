var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@swap/token-selection/tokenSelection.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    components_1.Styles.cssRule('.token-selection', {
        $nest: {
            '#tokenSearch': {
                width: '100% !important',
            },
            '.token-agree-input': {
                $nest: {
                    '.i-checkbox_label': {
                        fontSize: '1.5rem',
                        color: '#f6c958',
                        width: '150px !important'
                    },
                    '.checkmark': {
                        height: '30px',
                        width: '30px',
                        background: 'none',
                        border: `3px solid #6573c3`,
                    },
                    '.checkmark:after': {
                        border: `3px solid #6573c3`,
                        height: '16px',
                        left: '7.5px',
                        top: '0px',
                        width: '7px',
                        borderLeft: 0,
                        borderTop: 0,
                    }
                }
            },
            '.btn-source-panel': {
                padding: '5px',
                display: 'inline-block',
                background: 'linear-gradient(90deg, #a8327f 0%, #d4626a 100%)',
                borderRadius: '5px',
            },
            '.token-import-input': {
                width: '100%',
                $nest: {
                    'input': {
                        width: '100%',
                        background: 'none',
                        color: 'blue',
                        border: 'none',
                        fontSize: '1rem',
                        margin: '5px 0',
                    }
                }
            },
            '.pnl-token-import': {
                border: `2px solid #6573c3`,
                borderRadius: '0.75rem',
                margin: '1rem 0',
                padding: '1.25rem 1rem 1rem'
            },
            '.i-modal_header > i-icon': {
                fill: `#F15E61 !important`
            },
            'i-icon': {
                display: 'inline-block'
            },
            '.btn-import': {
                background: 'linear-gradient(90deg, #a8327f 0%, #d4626a 100%)',
                borderRadius: '5px',
                color: '#fff',
                fontSize: '1rem',
                padding: '0.25rem 1.25rem'
            },
            '::-webkit-scrollbar': {
                width: '3px',
            },
            '::-webkit-scrollbar-thumb': {
                background: '#F15E61',
                borderRadius: '5px',
            },
            '.ml-auto': {
                marginLeft: 'auto',
            },
            '.custom-btn': {
                display: 'flex',
                alignItems: 'center',
                width: 'max-content',
                padding: '0.25rem 0.5rem',
                boxShadow: 'none',
                background: 'linear-gradient(90deg, #a8327f 0%, #d4626a 100%)',
                $nest: {
                    '&:hover': {
                        background: 'linear-gradient(90deg, #a8327f 0%, #d4626a 100%)',
                        opacity: .9
                    },
                    '&.disabled': {
                        background: 'transparent linear-gradient(270deg,#351f52,#552a42) 0% 0% no-repeat padding-box',
                        opacity: 1
                    },
                    '> i-icon': {
                        marginRight: '0',
                        height: '18px !important',
                    },
                    '> i-image': {
                        lineHeight: 'initial',
                        marginRight: '0.5rem',
                    },
                    '&.has-token': {
                        background: 'transparent',
                        fontWeight: 'bold',
                        color: '#f6c958',
                        paddingRight: '0',
                        $nest: {
                            '> i-icon': {
                                marginRight: '-7px',
                                fill: '#F15E61',
                            }
                        }
                    },
                },
            },
            '#btnMax': {
                marginRight: '0.25rem',
            },
            '#btnToken': {
                background: '#0C1234',
                color: '#FFFFFF',
                height: '40px',
                width: '100%',
                padding: '0.5rem 0.75rem',
                maxWidth: '300px',
                borderRadius: '12px',
                $nest: {
                    'i-icon': {
                        marginLeft: '0.25rem',
                    },
                }
            },
            '.bg-modal': {
                $nest: {
                    '.modal': {
                        background: '#192046',
                        width: 500,
                        maxWidth: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '1rem',
                        color: '#fff',
                        marginTop: 40
                    },
                }
            },
            '#tokenImportModal.bg-modal .modal': {
                width: 400,
            },
            '#tokenSelectionModal': {
                $nest: {
                    '.i-modal_header': {
                        marginBottom: '1.5rem',
                        paddingBottom: '0.5rem',
                        borderBottom: `2px solid #F15E61`,
                        color: '#F15E61',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                    },
                    '.i-modal_header > span': {
                        color: '#F15E61',
                    },
                    '.i-modal_header > i-icon': {
                        fill: `#F15E61 !important`
                    },
                    '.search': {
                        position: 'relative',
                        marginBottom: '1.5rem',
                        $nest: {
                            'i-icon': {
                                position: 'absolute',
                                top: 'calc(50% - 4px)',
                                left: '1rem',
                                transform: 'rotate(90deg)',
                                opacity: 0.7
                            },
                            'i-input': {
                                width: '100%'
                            },
                            'i-input > input': {
                                width: '100%',
                                height: 'auto !important',
                                padding: '1rem 1.5rem 1rem 2.25rem',
                                borderRadius: '0.5rem',
                                border: '2px solid #2a3675',
                                background: 'transparent',
                                color: '#FFFFFF',
                                fontSize: 'inherit',
                            }
                        }
                    },
                    '.token-header': {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBlock: '0.5rem',
                        $nest: {
                            'i-label *': {
                                color: '#F15E61',
                                fontSize: '1rem',
                            },
                            '.token-section': {
                                position: 'relative',
                                cursor: 'pointer',
                            },
                            'i-icon': {
                                width: '10px',
                                height: '14px',
                                display: 'flex',
                                fill: '#FFFFFF',
                                position: 'absolute',
                                right: '0',
                            },
                            '.icon-sort-up': {
                                top: '2px',
                            },
                            '.icon-sort-down': {
                                bottom: '2px',
                            },
                            '.icon-sorted': {
                                fill: '#F15E61',
                            }
                        }
                    },
                    '.common-token': {
                        $nest: {
                            'i-grid-layout': {
                                margin: '0.5rem 0 0',
                                alignItems: 'center',
                                justifyContent: 'unset'
                            },
                            '.grid-item': {
                                padding: '0.35rem 0.5rem',
                                borderRadius: '1rem',
                                border: '2px solid transparent',
                                cursor: 'pointer',
                                $nest: {
                                    '&:hover': {
                                        borderColor: '#F15E61'
                                    },
                                    'i-image': {
                                        marginRight: '0.5rem'
                                    },
                                    'i-label': {
                                        overflow: 'hidden'
                                    },
                                }
                            },
                        }
                    },
                    '.token-list': {
                        margin: '0.5rem -0.5rem',
                        maxHeight: '45vh',
                        overflowY: 'auto',
                        $nest: {
                            '.token-info': {
                                display: 'flex',
                                flexDirection: 'column',
                                fontSize: '1rem',
                                marginRight: '0.5rem',
                                textAlign: 'left'
                            },
                            '.token-item': {
                                padding: '0.5rem',
                                overflow: 'unset',
                                $nest: {
                                    '&:hover': {
                                        background: 'linear-gradient(254.8deg,rgba(231,91,102,.1) -8.08%,rgba(181,32,130,.1) 84.35%) !important'
                                    },
                                    'i-image': {
                                        marginRight: '0.5rem'
                                    },
                                    '&:not(:first-child)': {
                                        marginTop: 0
                                    },
                                    'i-label': {
                                        color: '#FFFFFF'
                                    }
                                }
                            },
                            '.token-name i-label > *': {
                                fontSize: '0.75rem',
                                marginRight: '0.5rem',
                                color: '#f50057'
                            }
                        }
                    }
                }
            },
            '@media screen and (max-width: 425px)': {
                $nest: {
                    '.common-list': {
                        gridTemplateColumns: 'repeat(3, 1fr) !important',
                    }
                }
            }
        }
    });
});
define("@swap/token-selection/importToken.tsx", ["require", "exports", "@ijstech/components", "@ijstech/eth-wallet", "@swap/store"], function (require, exports, components_2, eth_wallet_1, store_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImportToken = void 0;
    ;
    let ImportToken = class ImportToken extends components_2.Module {
        constructor(parent, options) {
            super(parent, options);
            this._state = {
                address: '',
                name: ''
            };
            this.$eventBus = components_2.application.EventBus;
        }
        ;
        set token(value) {
            this._token = value;
            this.updateState();
        }
        get token() {
            return this._token;
        }
        updateState() {
            this._state.address = this.token.address || '';
            this._state.name = this.token.name || '';
        }
        closeModal() {
            this.importModal.visible = false;
        }
        showModal() {
            this.importModal.visible = true;
        }
        async onImportToken(source, event) {
            event.stopPropagation();
            const tokenObj = this.token;
            store_1.addUserTokens(tokenObj);
            store_1.tokenStore.updateTokenMapData();
            await store_1.tokenStore.updateAllTokenBalances();
            this.$eventBus.dispatch("emitNewToken" /* EmitNewToken */, tokenObj);
            if (typeof this.onUpdate === 'function') {
                this.onUpdate(tokenObj);
            }
            this.closeModal();
        }
        onHandleCheck(source, event) {
            this.importBtn.enabled = source.checked;
        }
        viewContract() {
            const chainId = eth_wallet_1.Wallet.getClientInstance().chainId;
            store_1.viewOnExplorerByAddress(chainId, this._state.address);
        }
        async init() {
            super.init();
            this.importModal.onClose = () => {
                this.tokenAgreeCheckBox.checked = false;
                this.importBtn.enabled = false;
            };
        }
        render() {
            return (this.$render("i-modal", { id: "importModal", class: "bg-modal", title: "Select Token", closeIcon: { name: 'times' } },
                this.$render("i-panel", { class: "pnl-token-import" },
                    this.$render("i-panel", null,
                        this.$render("i-icon", { name: "question", class: "cicrle", fill: "#e83e8c", width: 15, height: 15, margin: { right: 3 } }),
                        this.$render("i-label", { caption: this._state.name })),
                    this.$render("i-hstack", { margin: { top: 5, bottom: 5 } },
                        this.$render("i-label", { caption: this._state.address, font: { color: '#1890ff' }, class: "pointer", onClick: () => this.viewContract() })),
                    this.$render("i-panel", { class: "btn-source-panel" },
                        this.$render("i-icon", { name: "exclamation-triangle", margin: { right: 3 }, fill: "#fff", width: 15, height: 15 }),
                        this.$render("i-label", { caption: "Unknow Source" }))),
                this.$render("i-panel", { class: "pnl-token-import" },
                    this.$render("i-hstack", { horizontalAlignment: "center", margin: { bottom: 5 } },
                        this.$render("i-icon", { name: "exclamation-triangle", margin: { right: 3 }, fill: "#e83e8c", width: 30, height: 30 })),
                    this.$render("i-hstack", { horizontalAlignment: "center", class: "text-center", margin: { bottom: 5 } },
                        this.$render("i-label", { font: { bold: true, color: "#fff" }, caption: "Trade at your own risk!" })),
                    this.$render("i-hstack", { horizontalAlignment: "center", class: "text-center", margin: { bottom: 5 } },
                        this.$render("i-label", { font: { color: "#fff" }, caption: "Anyone can create a token, including creating fake versions of existing token that claims tp represent projects" })),
                    this.$render("i-hstack", { horizontalAlignment: "center", class: "text-center", margin: { bottom: 5 } },
                        this.$render("i-label", { width: 300, font: { bold: true, color: "#fff" }, caption: "If you purchased this token, you may not be to able sell it back" })),
                    this.$render("i-hstack", { horizontalAlignment: "center", class: "text-center" },
                        this.$render("i-checkbox", { id: "tokenAgreeCheckBox", width: "200", margin: { top: 30 }, height: 30, class: "token-agree-input", background: { color: 'transparent' }, caption: "I understand", onChanged: this.onHandleCheck.bind(this) }))),
                this.$render("i-button", { id: "importBtn", class: "btn-import", width: "100%", caption: "Import", height: 40, enabled: false, onClick: this.onImportToken.bind(this) })));
        }
    };
    __decorate([
        components_2.observable()
    ], ImportToken.prototype, "_state", void 0);
    ImportToken = __decorate([
        components_2.customElements('swap-import-token')
    ], ImportToken);
    exports.ImportToken = ImportToken;
});
define("@swap/token-selection/tokenSelection.tsx", ["require", "exports", "@ijstech/components", "@swap/store", "@swap/global", "@scom/oswap-openswap-contract", "@swap/assets", "@ijstech/eth-wallet", "@swap/token-selection/tokenSelection.css.ts"], function (require, exports, components_3, store_2, global_1, oswap_openswap_contract_1, assets_1, eth_wallet_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TokenSelection = void 0;
    ;
    let TokenSelection = class TokenSelection extends components_3.Module {
        constructor(parent, options) {
            super(parent, options);
            this._isSortBalanceShown = true;
            this._isBtnMaxShown = true;
            this.fallbackUrl = assets_1.default.fullPath('img/tokens/token-placeholder.svg');
            this.sortToken = (a, b, asc) => {
                if (a.balance != b.balance) {
                    return asc ? (a.balance - b.balance) : (b.balance - a.balance);
                }
                if (a.symbol.toLowerCase() < b.symbol.toLowerCase()) {
                    return -1;
                }
                if (a.symbol.toLowerCase() > b.symbol.toLowerCase()) {
                    return 1;
                }
                return 0;
            };
            this.getTokenObject = async (address, showBalance) => {
                const ERC20Contract = new oswap_openswap_contract_1.Contracts.ERC20(eth_wallet_2.Wallet.getClientInstance(), address);
                const symbol = await ERC20Contract.symbol();
                const name = await ERC20Contract.name();
                const decimals = (await ERC20Contract.decimals()).toFixed();
                let balance;
                if (showBalance && store_2.isWalletConnected()) {
                    balance = (await (ERC20Contract.balanceOf(eth_wallet_2.Wallet.getClientInstance().account.address))).shiftedBy(-decimals).toFixed();
                }
                return {
                    address: address.toLowerCase(),
                    decimals: +decimals,
                    name,
                    symbol,
                    balance
                };
            };
            this.$eventBus = components_3.application.EventBus;
            this.registerEvent();
        }
        get token() {
            return this._token;
        }
        set token(value) {
            this._token = value;
            this.updateButton(value);
        }
        get targetChainId() {
            return this._targetChainId;
        }
        set targetChainId(value) {
            this._targetChainId = value;
            this.updateDataByChain();
        }
        get tokenDataListProp() {
            return this._tokenDataListProp;
        }
        set tokenDataListProp(value) {
            this._tokenDataListProp = value;
            this.renderTokenItems();
            this.updateButton();
        }
        get onSelectToken() {
            return this._onSelectToken;
        }
        set onSelectToken(callback) {
            this._onSelectToken = callback;
        }
        get isCommonShown() {
            return this._isCommonShown;
        }
        set isCommonShown(value) {
            this._isCommonShown = value;
            this.renderCommonItems();
        }
        get isSortBalanceShown() {
            return this._isSortBalanceShown;
        }
        set isSortBalanceShown(value) {
            this._isSortBalanceShown = value;
            if (value) {
                this.sortBalancePanel.classList.remove('hidden');
            }
            else {
                this.sortBalancePanel.classList.add('hidden');
            }
        }
        get isBtnMaxShown() {
            return this._isBtnMaxShown;
        }
        set isBtnMaxShown(value) {
            this._isBtnMaxShown = value;
            if (!this.btnMax)
                return;
            if (value) {
                this.btnMax.classList.remove('hidden');
            }
            else {
                this.btnMax.classList.add('hidden');
            }
        }
        get onSetMaxBalance() {
            return this._onSetMaxBalance;
        }
        set onSetMaxBalance(callback) {
            this._onSetMaxBalance = callback;
        }
        get chainId() {
            if (this.targetChainId) {
                return this.targetChainId;
            }
            return store_2.isWalletConnected() ? this.currentChainId : store_2.getChainId();
        }
        get disableSelect() {
            return this._disableSelect;
        }
        set disableSelect(value) {
            this._disableSelect = value;
            this.btnToken.enabled = !value;
            // this.btnToken.rightIcon.name = value ? '' : 'caret-down';
            this.btnToken.rightIcon.visible = !value;
        }
        get disabledMaxBtn() {
            return this._disabledMaxBtn;
        }
        set disabledMaxBtn(value) {
            this._disabledMaxBtn = value;
            this.btnMax.enabled = !value;
        }
        async initData() {
            if (!this.chainId) {
                this.currentChainId = store_2.getChainId();
            }
            if (store_2.isWalletConnected()) {
                this.tokenBalancesMap = store_2.tokenStore.tokenBalances || {};
            }
            this.renderTokenItems();
        }
        async updateDataByChain() {
            this.tokenBalancesMap = await store_2.tokenStore.updateAllTokenBalances();
            this.renderTokenItems();
            this.updateButton();
        }
        async updateDataByNewToken() {
            this.tokenBalancesMap = store_2.tokenStore.tokenBalances || {};
            this.renderTokenItems();
        }
        async onChainChange() {
            if (!this.targetChainId) {
                this.currentChainId = store_2.getChainId();
                this.updateDataByChain();
            }
        }
        async onWalletConnect() {
            this.checkHasMetaMask = store_2.hasMetaMask();
            await this.initData();
            this.updateStatusButton();
        }
        async onWalletDisconnect() {
            await this.initData();
        }
        async onPaid() {
            await this.updateDataByChain();
            await this.initData();
        }
        registerEvent() {
            this.$eventBus.register(this, "isWalletConnected" /* IsWalletConnected */, this.onWalletConnect);
            this.$eventBus.register(this, "IsWalletDisconnected" /* IsWalletDisconnected */, this.onWalletDisconnect);
            this.$eventBus.register(this, "chainChanged" /* chainChanged */, this.onChainChange);
            this.$eventBus.register(this, "Paid" /* Paid */, this.onPaid);
            this.$eventBus.register(this, "emitNewToken" /* EmitNewToken */, this.updateDataByNewToken);
        }
        get tokenDataList() {
            if (this.tokenDataListProp && this.tokenDataListProp.length) {
                return this.tokenDataListProp;
            }
            const tokenList = store_2.tokenStore.getTokenList(this.chainId);
            return tokenList.map((token) => {
                var _a;
                const tokenObject = Object.assign({}, token);
                const nativeToken = store_2.ChainNativeTokenByChainId[this.chainId];
                if (token.symbol === nativeToken.symbol) {
                    Object.assign(tokenObject, { isNative: true });
                }
                if (!store_2.isWalletConnected()) {
                    Object.assign(tokenObject, {
                        balance: 0,
                    });
                }
                else if (this.tokenBalancesMap) {
                    Object.assign(tokenObject, {
                        balance: this.tokenBalancesMap[((_a = token.address) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || token.symbol] || 0,
                    });
                }
                return tokenObject;
            }).sort(this.sortToken);
        }
        get commonTokenDataList() {
            const tokenList = this.tokenDataList;
            if (!tokenList)
                return [];
            return tokenList.filter((token) => token.isCommon || token.isNative);
        }
        get tokenDataListFiltered() {
            let tokenList = this.tokenDataList || [];
            if (tokenList.length) {
                if (this.filterValue) {
                    tokenList = tokenList.filter((token) => {
                        var _a;
                        return token.symbol.toUpperCase().includes(this.filterValue) ||
                            token.name.toUpperCase().includes(this.filterValue) ||
                            ((_a = token.address) === null || _a === void 0 ? void 0 : _a.toUpperCase()) === this.filterValue;
                    });
                }
                if (this.sortValue !== undefined) {
                    tokenList = tokenList.sort((a, b) => {
                        return this.sortToken(a, b, this.sortValue);
                    });
                    const allBalanceZero = !tokenList.some((token) => token.balance && token.balance !== '0');
                    if (allBalanceZero && !this.sortValue) {
                        tokenList = tokenList.reverse();
                    }
                }
            }
            return tokenList;
        }
        sortBalance() {
            this.sortValue = !this.sortValue;
            if (this.sortValue) {
                this.iconSortUp.classList.add('icon-sorted');
                this.iconSortDown.classList.remove('icon-sorted');
            }
            else {
                this.iconSortUp.classList.remove('icon-sorted');
                this.iconSortDown.classList.add('icon-sorted');
            }
            this.renderTokenItems();
        }
        filterSearch(source) {
            this.filterValue = source.value.toUpperCase();
            this.renderTokenItems();
        }
        async renderCommonItems() {
            if (!this.commonTokenList)
                return;
            this.commonTokenList.innerHTML = '';
            if (this.isCommonShown && this.commonTokenDataList) {
                this.commonTokenPanel.classList.remove('hidden');
                this.commonTokenDataList.forEach((token) => {
                    const logoAddress = token.address && !this.targetChainId ? store_2.getTokenIcon(token.address) : assets_1.default.fullPath(store_2.getTokenIconPath(token, this.chainId));
                    this.commonTokenList.appendChild(this.$render("i-hstack", { background: { color: '#0c1234' }, onClick: () => this.onSelect(token), tooltip: { content: token.name }, verticalAlignment: "center", class: "grid-item" },
                        this.$render("i-image", { width: 24, height: 24, url: logoAddress, fallbackUrl: this.fallbackUrl }),
                        this.$render("i-label", { caption: token.symbol, onClick: () => this.onSelect(token) })));
                });
            }
            else {
                this.commonTokenPanel.classList.add('hidden');
            }
        }
        renderToken(token) {
            const logoAddress = token.address && !this.targetChainId ? store_2.getTokenIcon(token.address) : assets_1.default.fullPath(store_2.getTokenIconPath(token, this.chainId));
            return (this.$render("i-hstack", { width: "100%", verticalAlignment: "center", class: "token-item", padding: { top: '0.5rem', bottom: '0.5rem', left: '0.5rem', right: '0.5rem' }, onClick: () => this.onSelect(token) },
                this.$render("i-vstack", { width: "100%" },
                    this.$render("i-hstack", null,
                        this.$render("i-hstack", null,
                            this.$render("i-image", { width: 36, height: 36, url: logoAddress, fallbackUrl: this.fallbackUrl }),
                            this.$render("i-panel", { class: "token-info" },
                                this.$render("i-label", { caption: token.symbol, onClick: () => this.onSelect(token) }),
                                this.$render("i-hstack", { class: "token-name", verticalAlignment: "center" },
                                    this.$render("i-label", { caption: token.name, onClick: () => this.onSelect(token) }),
                                    token.address && !token.isNative ?
                                        this.$render("i-icon", { name: "copy", width: "14px", height: "14px", fill: '#fff', margin: { right: 8 }, tooltip: { content: `${token.symbol} has been copied`, trigger: 'click' }, onClick: () => components_3.application.copyToClipboard(token.address || ''), class: "inline-flex pointer" })
                                        : [],
                                    token.address && this.checkHasMetaMask ?
                                        this.$render("i-image", { width: 16, height: 16, url: assets_1.default.fullPath('img/swap/metamask.png'), tooltip: { content: 'Add to MetaMask' }, onClick: (target, event) => this.addToMetamask(event, token) })
                                        : []))),
                        this.$render("i-label", { class: "ml-auto", caption: global_1.formatNumber(token.balance, 4), onClick: () => this.onSelect(token) })),
                    token.isNew ? (this.$render("i-hstack", { horizontalAlignment: "center" },
                        this.$render("i-button", { caption: 'Import', class: "btn-import", margin: { top: 10 }, height: 34, onClick: (source, event) => this.showImportTokenModal(event, token) }))) : (this.$render("i-hstack", null)))));
        }
        async renderTokenItems() {
            if (!this.tokenList)
                return;
            this.renderCommonItems();
            this.tokenList.innerHTML = '';
            if (this.tokenDataListFiltered.length) {
                const tokenItems = this.tokenDataListFiltered.map((token) => this.renderToken(token));
                this.tokenList.append(...tokenItems);
            }
            else if (this.targetChainId && this.targetChainId !== store_2.getChainId()) {
                this.tokenList.innerHTML = '';
                this.tokenList.append(this.$render("i-label", { class: "text-center mt-1 mb-1", caption: "No tokens found" }));
            }
            else {
                try {
                    const tokenObj = await this.getTokenObject(this.filterValue, true);
                    if (!tokenObj)
                        throw new Error('Token is invalid');
                    this.tokenList.innerHTML = '';
                    this.tokenList.appendChild(this.renderToken(Object.assign(Object.assign({}, tokenObj), { isNew: true })));
                }
                catch (err) {
                    this.tokenList.innerHTML = '';
                    this.tokenList.append(this.$render("i-label", { class: "text-center mt-1 mb-1", font: { color: '#fff' }, caption: "No tokens found" }));
                }
            }
        }
        addToMetamask(event, token) {
            event.stopPropagation();
            const img = `${window.location.origin}${store_2.getTokenIconPath(token, this.chainId).substring(1)}`;
            window.ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {
                        address: token.address,
                        symbol: token.symbol,
                        decimals: token.decimals,
                        image: img
                    },
                },
            });
        }
        async showModal() {
            if (!this.enabled)
                return;
            this.tokenSearch.value = '';
            this.filterValue = '';
            this.sortValue = undefined;
            this.iconSortUp.classList.remove('icon-sorted');
            this.iconSortDown.classList.remove('icon-sorted');
            if (!this.tokenList.innerHTML) {
                await this.initData();
            }
            this.tokenSelectionModal.visible = true;
        }
        updateStatusButton() {
            const status = store_2.isWalletConnected();
            if (this.btnToken) {
                this.btnToken.enabled = !this.disableSelect && status;
            }
            if (this.btnMax) {
                this.btnMax.enabled = !this.disabledMaxBtn && status;
            }
        }
        updateButton(token) {
            var _a;
            const btnToken = this.btnToken;
            if (!btnToken)
                return;
            try {
                let image = btnToken.querySelector('i-image');
                if (!token) {
                    token = (_a = this.tokenDataList) === null || _a === void 0 ? void 0 : _a.find((v) => { var _a, _b; return (v.address && v.address == ((_a = this.token) === null || _a === void 0 ? void 0 : _a.address)) || (v.symbol == ((_b = this.token) === null || _b === void 0 ? void 0 : _b.symbol)); });
                }
                if (!token) {
                    btnToken.caption = 'Select a token';
                    btnToken.classList.remove('has-token');
                    this.btnMax.classList.add('hidden');
                    if (image) {
                        btnToken.removeChild(image);
                    }
                }
                else {
                    btnToken.caption = token.symbol;
                    btnToken.classList.add('has-token');
                    if (this.isBtnMaxShown) {
                        this.btnMax.classList.remove('hidden');
                    }
                    const logoAddress = token.address && !this.targetChainId ? store_2.getTokenIcon(token.address) : assets_1.default.fullPath(store_2.getTokenIconPath(token, this.chainId));
                    if (!image) {
                        image = new components_3.Image(btnToken, {
                            width: 20,
                            height: 20,
                            fallbackUrl: this.fallbackUrl
                        });
                        btnToken.prepend(image);
                    }
                    image.url = logoAddress;
                }
            }
            catch (_b) { }
        }
        async onSelect(token, isNew = false) {
            this.token = token;
            // The token has been not imported
            if (!isNew && token.isNew && !store_2.hasUserToken(token.address || '', this.chainId)) {
                store_2.setUserTokens(token, this.chainId);
                store_2.tokenStore.updateTokenMapData();
                await store_2.tokenStore.updateAllTokenBalances();
                this.$eventBus.dispatch("emitNewToken" /* EmitNewToken */, token);
                isNew = true;
            }
            this.onSelectToken(Object.assign(Object.assign({}, token), { isNew }));
            this.tokenSelectionModal.visible = false;
        }
        ;
        async init() {
            await this.onWalletConnect();
            super.init();
            this.disableSelect = !!this.getAttribute("disableSelect", true);
            this.disabledMaxBtn = this.getAttribute("disabledMaxBtn", true);
            this.updateStatusButton();
            this.updateButton(this._token);
        }
        showImportTokenModal(event, token) {
            event.stopPropagation();
            this.importTokenModal.token = token;
            this.importTokenModal.showModal();
            this.importTokenModal.onUpdate = this.onImportToken.bind(this);
        }
        onImportToken(token) {
            this.onSelect(token, true);
        }
        onCloseModal() {
            // reset list
            this.filterValue = '';
            this.renderTokenItems();
        }
        render() {
            return (this.$render("i-panel", { class: 'token-selection' },
                this.$render("i-panel", { class: "flex" },
                    this.$render("i-button", { id: "btnMax", enabled: false, class: "custom-btn hidden", caption: "Max", onClick: () => this.onSetMaxBalance() }),
                    this.$render("i-button", { id: "btnToken", enabled: false, class: "custom-btn", rightIcon: { name: "caret-down", fill: '#fff' }, caption: "Select a token", onClick: () => this.showModal() })),
                this.$render("i-modal", { id: "tokenSelectionModal", class: "bg-modal", title: "Select Token", closeIcon: { name: 'times' }, onClose: () => this.onCloseModal() },
                    this.$render("i-panel", { class: "search" },
                        this.$render("i-icon", { width: 16, height: 16, name: "search", fill: "white" }),
                        this.$render("i-input", { id: "tokenSearch", placeholder: "Search name or paste address", width: "100%", onKeyUp: this.filterSearch.bind(this) })),
                    this.$render("i-panel", { id: "commonTokenPanel", class: "common-token" },
                        this.$render("i-label", { caption: "Common Token" }),
                        this.$render("i-grid-layout", { id: "commonTokenList", columnsPerRow: 4, gap: { row: '1rem', column: '1rem' }, class: "common-list", verticalAlignment: "center" })),
                    this.$render("i-panel", { id: "sortBalancePanel", class: "token-header" },
                        this.$render("i-label", { caption: "Token" }),
                        this.$render("i-panel", { class: "token-section ml-auto", onClick: () => this.sortBalance() },
                            this.$render("i-label", { class: "mr-1", caption: "Balance" }),
                            this.$render("i-icon", { id: "iconSortUp", class: "icon-sort-up", name: "sort-up" }),
                            this.$render("i-icon", { id: "iconSortDown", class: "icon-sort-down", name: "sort-down" }))),
                    this.$render("i-grid-layout", { id: "tokenList", class: "token-list", columnsPerRow: 1 })),
                this.$render("swap-import-token", { id: "importTokenModal" })));
        }
    };
    __decorate([
        components_3.observable()
    ], TokenSelection.prototype, "sortValue", void 0);
    __decorate([
        components_3.observable()
    ], TokenSelection.prototype, "filterValue", void 0);
    TokenSelection = __decorate([
        components_3.customElements('swap-token-selection')
    ], TokenSelection);
    exports.TokenSelection = TokenSelection;
    ;
});
define("@swap/token-selection", ["require", "exports", "@swap/token-selection/tokenSelection.tsx", "@swap/token-selection/importToken.tsx"], function (require, exports, tokenSelection_1, importToken_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImportToken = exports.TokenSelection = void 0;
    Object.defineProperty(exports, "TokenSelection", { enumerable: true, get: function () { return tokenSelection_1.TokenSelection; } });
    Object.defineProperty(exports, "ImportToken", { enumerable: true, get: function () { return importToken_1.ImportToken; } });
});
