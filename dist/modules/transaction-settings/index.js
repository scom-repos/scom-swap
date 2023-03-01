var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@swap/transaction-settings/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = components_1.Styles.style({
        textAlign: 'center',
        $nest: {
            'i-label': {
                color: '#fff'
            },
            'i-button': {
                color: '#fff'
            },
            '.settings-content i-icon': {
                marginLeft: '4px'
            },
            '#slippageGroup': {
                marginTop: '0.75rem',
                gap: 12,
                $nest: {
                    '.transaction-input > input': {
                        paddingRight: '1.35rem',
                        textAlign: 'right',
                    }
                }
            },
            '.pill-slippage': {
                background: '#0c1234',
                lineHeight: '2.25rem',
                borderRadius: '0.75rem',
                border: '2px solid transparent',
                $nest: {
                    '&:not(.disabled):hover': {
                        borderColor: '#a7a9ac',
                        background: '#0c1234'
                    },
                }
            },
            'i-label *': {
                fontSize: '1rem'
            },
            '.trans-title': {
                marginTop: '1.5rem',
                marginBottom: '0.5rem'
            },
            '.slippage-input__warning': {
                position: 'absolute',
                top: 'calc(50% - 1px)',
                left: '10px',
                transform: 'translateY(-50%)'
            },
            '.transaction-input': {
                position: 'relative',
                minWidth: '5rem',
                maxWidth: '5.5rem',
                width: '100%',
                background: '#0c1234',
                borderRadius: '0.75rem',
                $nest: {
                    '&> input': {
                        width: 'inherit',
                        background: 'transparent',
                        border: '2px solid transparent',
                        borderRadius: '0.75rem',
                        color: '#fff',
                        textAlign: 'center',
                        padding: 0
                    },
                    '&> i-label': {
                        position: 'absolute',
                        top: '47%',
                        transform: 'translateY(-50%)',
                        right: '8px',
                    }
                }
            },
            '.transaction-input__error input': {
                color: '#fd5356',
                borderColor: '#fd5356',
            },
            '.transaction-input__error input:focus': {
                borderColor: '#fd5356 !important'
            },
            '.transaction-input input:hover, .transaction-input input:focus': {
                borderColor: '#a7a9ac'
            },
            '.pill-slippage.active, .transaction-input.active>input': {
                borderColor: '#e83e8c !important'
            },
            '.slippage-message': {
                paddingTop: '7px',
                $nest: {
                    '*': {
                        color: '#f05e61',
                        fontSize: '14px',
                    }
                }
            },
            'i-switch': {
                $nest: {
                    '.wrapper': {
                        display: 'flex',
                        position: 'relative',
                        width: '88.625px',
                        height: '40px',
                        borderRadius: '12px',
                        background: '#0c1234',
                        outline: 'none',
                        padding: 0,
                    },
                    '.thumb': {
                        margin: '3px',
                        borderRadius: '50%',
                        background: 'linear-gradient(255deg,#f15e61,#b52082)',
                        color: '#565a69',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        transition: 'all .3s ease-in-out',
                        width: '2rem',
                        height: '2rem',
                        padding: 0
                    },
                    '.switch-base.checked': {
                        transform: 'translateX(48px)',
                    },
                    '.track': {
                        color: '#fff',
                        $nest: {
                            "&::before, &::after": {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%',
                                top: 'auto',
                                transform: 'none',
                                fontSize: 'inherit',
                                color: '#fff',
                                opacity: '1 !important'
                            },
                            "&::before": {
                                width: '50%',
                                left: 'auto',
                            },
                            "&::after": {
                                right: 0,
                                left: '50%',
                            }
                        }
                    }
                }
            },
            '.modal': {
                borderRadius: '1rem',
                padding: '1rem',
                width: 405
            },
            '.i-modal_header': {
                marginBottom: '1rem',
                paddingBottom: '0.5rem',
                borderBottom: '2px solid #0c1234',
                $nest: {
                    '&> span': {
                        paddingRight: '2rem',
                        color: '#f15e61',
                        fontWeight: 700,
                    }
                }
            },
            '.i-modal-close': {
                fill: '#f15e61 !important',
            },
        }
    });
});
define("@swap/transaction-settings", ["require", "exports", "@ijstech/components", "@swap/store", "@swap/transaction-settings/index.css.ts"], function (require, exports, components_2, store_1, index_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransactionSettings = void 0;
    ;
    const listSlippage = [0.1, 0.5, 1];
    let TransactionSettings = class TransactionSettings extends components_2.Module {
        constructor(parent, options) {
            super(parent, options);
            this.onActiveItem = (source) => {
                const activeItem = this.slippageGroup.querySelector('.active');
                if (activeItem) {
                    if (source.isSameNode(activeItem))
                        return;
                    activeItem.classList.remove('active');
                }
                source.classList.add('active');
            };
            this.onSelectSlippage = (source, val) => {
                this.inputSlippageTolerance(source, val);
                if (listSlippage.includes(val)) {
                    this.slippageInput.value = '';
                }
            };
            this.inputSlippageTolerance = (source, val) => {
                if (val) {
                    const value = +val;
                    const hasWarningIcon = this.slippageInput.contains(this.warningIcon);
                    this.slippageInput.value = value;
                    this.slippageInput.placeholder = value.toFixed(2);
                    if (value < 50) {
                        store_1.setSlippageTolerance(value);
                        this.$eventBus.dispatch("SlippageToleranceChanged" /* SlippageToleranceChanged */);
                        this.setSlippageToleranceMessage();
                        this.slippageInput.classList.remove('transaction-input__error');
                        if (value > 5) {
                            if (!hasWarningIcon)
                                this.slippageInput.prepend(this.warningIcon);
                        }
                        else if (hasWarningIcon)
                            this.slippageInput.removeChild(this.warningIcon);
                    }
                    else {
                        this.slippageToleranceMessage = 'Please enter a valid slippage percentage';
                        this.slippageInput.classList.add('transaction-input__error');
                        if (hasWarningIcon)
                            this.slippageInput.removeChild(this.warningIcon);
                    }
                }
                const index = listSlippage.indexOf(+val);
                if (index >= 0 && source.isSameNode(this.slippageInput)) {
                    const buttons = this.slippageGroup.querySelectorAll('i-button.pill-slippage');
                    this.onActiveItem(buttons[index]);
                }
                else {
                    this.onActiveItem(source);
                }
            };
            this.blurSlippageTolerance = (source) => {
                const val = source.value;
                if (val && val >= 50) {
                    this.inputSlippageTolerance(source, 0.5);
                }
                else if (!this.slippageInput.value) {
                    this.inputSlippageTolerance(source, store_1.getSlippageTolerance());
                }
            };
            this.setSlippageToleranceMessage = () => {
                const slippageTolerance = store_1.getSlippageTolerance();
                if (slippageTolerance < 0.5) {
                    return (this.slippageToleranceMessage = 'Your transaction may fail');
                }
                else if (slippageTolerance >= 0.5 && slippageTolerance <= 5) {
                    return (this.slippageToleranceMessage = '');
                }
                else if (slippageTolerance > 5 && slippageTolerance < 50) {
                    return (this.slippageToleranceMessage = 'Your transaction may be frontrun');
                }
                else {
                    return (this.slippageToleranceMessage = 'Please enter a valid slippage percentage');
                }
            };
            this.inputDeadline = (source, event) => {
                const val = source.value;
                store_1.setTransactionDeadline(+val);
                const hasMessage = this.deadlineGroup.contains(this.deadlineMessage);
                if (val > 180) {
                    this.deadlineInput.classList.add('transaction-input__error');
                    if (!hasMessage)
                        this.deadlineGroup.appendChild(this.deadlineMessage);
                }
                else {
                    this.deadlineInput.classList.remove('transaction-input__error');
                    if (hasMessage)
                        this.deadlineGroup.removeChild(this.deadlineMessage);
                }
            };
            this.blurTransactionDeadline = (source) => {
                const val = source.value;
                const newVal = val > 180 || val < 1 ? 30 : parseInt(val);
                source.value = newVal;
                store_1.setTransactionDeadline(newVal);
                if (val > 180 && this.deadlineGroup.contains(this.deadlineMessage)) {
                    this.deadlineGroup.removeChild(this.deadlineMessage);
                }
                this.deadlineInput.classList.remove('transaction-input__error');
            };
            this.handleProcessExpertMode = () => {
                if (store_1.isExpertMode()) {
                    store_1.toggleExpertMode();
                    this.$eventBus.dispatch("ExpertModeChanged" /* ExpertModeChanged */);
                    return;
                }
                this.$eventBus.dispatch("ShowExpertModal" /* ShowExpertModal */);
            };
            this.$eventBus = components_2.application.EventBus;
            this.registerEvent();
        }
        get showSlippageOnly() {
            return this._showSlippageOnly;
        }
        set showSlippageOnly(value) {
            this._showSlippageOnly = value;
            if (value) {
                this.slippageRow.visible = false;
                this.deadlineRow.visible = false;
                this.deadlineInputRow.visible = false;
                this.switchBoxRow.visible = false;
            }
            else {
                this.slippageRow.visible = true;
                this.deadlineRow.visible = true;
                this.deadlineInputRow.visible = true;
                this.switchBoxRow.visible = true;
            }
        }
        registerEvent() {
            this.$eventBus.register(this, "ExpertModeChanged" /* ExpertModeChanged */, () => {
                if (this.switchBox)
                    this.switchBox.checked = store_1.isExpertMode();
            });
        }
        async onRenderSlippage() {
            listSlippage.map(async (value) => {
                const button = await components_2.Button.create({
                    height: 'auto',
                    width: '4rem',
                    caption: `${value}%`
                });
                button.classList.add('pill-slippage');
                button.onClick = (source) => this.onSelectSlippage(source, value);
                this.slippageGroup.prepend(button);
            });
            const label = await components_2.Label.create();
            label.caption = '%';
            this.slippageInput.appendChild(label);
        }
        async onRenderWarningElm() {
            this.deadlineMessage = await components_2.Label.create();
            this.deadlineMessage.caption = 'Please enter a valid transaction deadline';
            this.deadlineMessage.classList.add("slippage-message");
            this.warningIcon = await components_2.Icon.create();
            this.warningIcon.fill = '#f05e61';
            this.warningIcon.width = 15.75;
            this.warningIcon.height = 14;
            this.warningIcon.name = 'exclamation-triangle';
            this.warningIcon.classList.add('slippage-input__warning');
        }
        setDefaultTransactionSettings() {
            const slippageTolerance = store_1.getSlippageTolerance();
            const index = listSlippage.indexOf(slippageTolerance);
            if (index >= 0) {
                const buttons = this.slippageGroup.querySelectorAll('i-button.pill-slippage');
                this.onActiveItem(buttons[index]);
                this.slippageInput.value = '';
            }
            else {
                this.slippageInput.value = slippageTolerance;
                this.onActiveItem(this.slippageInput);
            }
            this.slippageInput.placeholder = slippageTolerance.toFixed(2);
            const transactionDeadline = store_1.getTransactionDeadline();
            this.deadlineInput.value = transactionDeadline;
        }
        async init() {
            this.classList.add(index_css_1.default);
            super.init();
            await this.onRenderSlippage();
            await this.onRenderWarningElm();
            this.setDefaultTransactionSettings();
        }
        closeModal() {
            this.transactionModal.visible = false;
        }
        showModal() {
            this.transactionModal.visible = true;
        }
        render() {
            return (this.$render("i-modal", { id: "transactionModal", class: 'dark-modal', title: "Transaction Settings", closeIcon: { name: 'times' } },
                this.$render("i-panel", { id: "mainContent" },
                    this.$render("i-panel", { class: "settings-content" },
                        this.$render("i-hstack", { id: "slippageRow", verticalAlignment: 'center' },
                            this.$render("i-label", { caption: "Slippage Tolerance" }),
                            this.$render("i-icon", { width: 16, height: 16, name: "question-circle", fill: "rgba(255,255,255,0.55)", tooltip: {
                                    content: 'Your transaction will revert if the price changes unfavorably by more than this percentage.'
                                } })),
                        this.$render("i-hstack", { id: "slippageGroup", gap: ".5rem" },
                            this.$render("i-input", { id: "slippageInput", height: 40, width: "100%", inputType: "number", class: 'transaction-input', onChanged: (source, event) => this.inputSlippageTolerance(source, source.value), onBlur: this.blurSlippageTolerance })),
                        this.$render("i-hstack", null,
                            this.$render("i-label", { class: "slippage-message", caption: this.slippageToleranceMessage })),
                        this.$render("i-hstack", { id: "deadlineRow", verticalAlignment: 'center', class: "trans-title" },
                            this.$render("i-label", { caption: "Transaction deadline" }),
                            this.$render("i-icon", { width: 16, height: 16, name: "question-circle", fill: "rgba(255,255,255,0.55)", tooltip: {
                                    content: 'Your transaction will revert if it is pending for more than this long.'
                                } })),
                        this.$render("i-hstack", { id: "deadlineInputRow", verticalAlignment: 'center' },
                            this.$render("i-input", { id: "deadlineInput", height: 40, width: "100%", class: "transaction-input", inputType: "number", onChanged: this.inputDeadline, onBlur: this.blurTransactionDeadline }),
                            this.$render("i-label", { class: "ml-1", caption: "minutes" }),
                            this.$render("i-hstack", { id: "deadlineGroup" })),
                        this.$render("i-hstack", { id: "switchBoxRow", horizontalAlignment: 'space-between', verticalAlignment: 'center', class: "mt-1" },
                            this.$render("i-label", { class: "toggle-text", caption: "Toggle Expert Mode" }),
                            this.$render("i-switch", { id: "switchBox", checkedTrackColor: "transparent", uncheckedTrackColor: "transparent", checkedThumbText: "Off", uncheckedThumbText: "On", checkedText: "Off", uncheckedText: "On", checked: store_1.isExpertMode(), onClick: this.handleProcessExpertMode }))))));
        }
    };
    __decorate([
        components_2.observable()
    ], TransactionSettings.prototype, "slippageToleranceMessage", void 0);
    TransactionSettings = __decorate([
        components_2.customModule,
        components_2.customElements('transaction-settings')
    ], TransactionSettings);
    exports.TransactionSettings = TransactionSettings;
    ;
});
