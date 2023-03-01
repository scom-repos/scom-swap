var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@swap/expert-mode-settings/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
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
            '.modal': {
                borderRadius: '1rem',
                padding: '1rem',
                width: 327
            },
            '.i-modal_header': {
                marginBottom: '1.25rem',
                paddingBottom: '0.75rem',
                borderBottom: '2px solid #0c1234',
                $nest: {
                    '&> span': {
                        margin: 'auto',
                        padding: '0 2rem',
                        color: '#f15e61',
                        fontWeight: 700,
                    }
                }
            },
            '.i-modal-close': {
                fill: '#f15e61 !important',
            },
            '.expert-content': {
                fontWeight: 'bold',
                $nest: {
                    '.warning-box': {
                        padding: '0.75rem 1rem',
                        marginBottom: '1.25rem',
                        background: 'linear-gradient(90deg,#df5869 -19.25%,#bc4c7b 116.5%)',
                        border: '1px solid #f15e61',
                        borderRadius: '0.5rem',
                    },
                    '.warning-box i-label *': {
                        color: '#fff',
                        fontSize: '1rem',
                    },
                    'i-label.warning-text *': {
                        color: '#f7d063',
                        fontSize: '1.05rem',
                    },
                    'i-button': {
                        padding: '0.75rem',
                        margin: '1.25rem 0 0.5rem',
                        background: 'transparent linear-gradient(255deg,#e75b66,#b52082) 0% 0% no-repeat padding-box',
                    }
                }
            }
        }
    });
});
define("@swap/expert-mode-settings", ["require", "exports", "@ijstech/components", "@swap/store", "@swap/expert-mode-settings/index.css.ts"], function (require, exports, components_2, store_1, index_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExpertModeSettings = void 0;
    ;
    let ExpertModeSettings = class ExpertModeSettings extends components_2.Module {
        constructor(parent, options) {
            super(parent, options);
            this.$eventBus = components_2.application.EventBus;
        }
        ;
        async init() {
            this.classList.add(index_css_1.default);
            super.init();
        }
        closeModal() {
            this.expertModal.visible = false;
        }
        showModal() {
            this.expertModal.visible = true;
        }
        onToggle() {
            store_1.toggleExpertMode();
            this.closeModal();
            this.$eventBus.dispatch("ExpertModeChanged" /* ExpertModeChanged */);
        }
        render() {
            return (this.$render("i-modal", { id: "expertModal", class: 'dark-modal', title: "Expert Mode", closeIcon: { name: 'times' } },
                this.$render("i-panel", { class: "expert-content" },
                    this.$render("i-panel", { class: "warning-box" },
                        this.$render("i-label", { caption: "Expert mode allows high slippage trades that often result in bad rates and lost funds." })),
                    this.$render("i-label", { class: "warning-text", caption: "Only use this mode if you know what you are doing." }),
                    this.$render("i-button", { width: "100%", height: "auto", caption: "Turn On Expert Mode", onClick: this.onToggle.bind(this) }))));
        }
    };
    ExpertModeSettings = __decorate([
        components_2.customModule,
        components_2.customElements('expert-mode-settings')
    ], ExpertModeSettings);
    exports.ExpertModeSettings = ExpertModeSettings;
    ;
});
