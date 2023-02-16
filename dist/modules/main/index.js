var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@swap/main/index.css.ts", ["require", "exports", "@ijstech/components", "@swap/assets"], function (require, exports, components_1, assets_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_1.Styles.Theme.ThemeVars;
    const colorVar = {
        primaryButton: 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box',
        primaryGradient: 'linear-gradient(255deg,#f15e61,#b52082)',
        darkBg: '#181E3E 0% 0% no-repeat padding-box',
        primaryDisabled: 'transparent linear-gradient(270deg,#351f52,#552a42) 0% 0% no-repeat padding-box !important'
    };
    components_1.Styles.fontFace({
        fontFamily: "Montserrat Regular",
        src: `url("${assets_1.default.fullPath('fonts/montserrat/Montserrat-Regular.ttf')}") format("truetype")`,
        fontWeight: 'nomal',
        fontStyle: 'normal'
    });
    components_1.Styles.fontFace({
        fontFamily: "Montserrat Bold",
        src: `url("${assets_1.default.fullPath('fonts/montserrat/Montserrat-Bold.ttf')}") format("truetype")`,
        fontWeight: 'bold',
        fontStyle: 'normal'
    });
    components_1.Styles.fontFace({
        fontFamily: "Montserrat Light",
        src: `url("${assets_1.default.fullPath('fonts/montserrat/Montserrat-Light.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_1.Styles.fontFace({
        fontFamily: "Montserrat Medium",
        src: `url("${assets_1.default.fullPath('fonts/montserrat/Montserrat-Medium.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_1.Styles.fontFace({
        fontFamily: "Montserrat SemiBold",
        src: `url("${assets_1.default.fullPath('fonts/montserrat/Montserrat-SemiBold.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_1.Styles.fontFace({
        fontFamily: "Raleway Regular",
        src: `url("${assets_1.default.fullPath('fonts/raleway/Raleway-Regular.ttf')}") format("truetype")`,
        fontWeight: 'nomal',
        fontStyle: 'normal'
    });
    components_1.Styles.fontFace({
        fontFamily: "Raleway Bold",
        src: `url("${assets_1.default.fullPath('fonts/raleway/Raleway-Bold.ttf')}") format("truetype")`,
        fontWeight: 'bold',
        fontStyle: 'normal'
    });
    components_1.Styles.fontFace({
        fontFamily: "Raleway Light",
        src: `url("${assets_1.default.fullPath('fonts/raleway/Raleway-Light.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_1.Styles.fontFace({
        fontFamily: "Raleway Medium",
        src: `url("${assets_1.default.fullPath('fonts/raleway/Raleway-Medium.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_1.Styles.fontFace({
        fontFamily: "Raleway SemiBold",
        src: `url("${assets_1.default.fullPath('fonts/raleway/Raleway-SemiBold.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_1.Styles.cssRule('.pageblock-swap', {
        $nest: {
            'i-label': {
                color: '#fff'
            },
            '.btn-register': {
                padding: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                opacity: 1,
                color: '#fff',
                $nest: {
                    'i-icon': {
                        marginInline: '0.25rem',
                        display: 'flex',
                        alignItems: 'center',
                    }
                }
            },
            'i-icon': {
                display: 'inline-block'
            },
            '.register-panel': {
                padding: '10px',
                border: '2px solid ' + Theme.colors.primary.main,
                borderRadius: '12px'
            },
            '::-webkit-scrollbar': {
                width: '3px',
            },
            '::-webkit-scrollbar-thumb': {
                background: Theme.colors.primary.main,
                borderRadius: '5px',
            },
            '*': {
                boxSizing: 'border-box',
                // margin: 0,
                // padding: 0
            },
            '.flex-1': {
                flex: '1 1 0%!important'
            },
            '.my-2': {
                marginTop: '0.5rem!important',
                marginBottom: '0.5rem!important',
            },
            '.ml-auto': {
                marginLeft: 'auto'
            },
            '#swapContainer i-button': {
                fontWeight: 600,
                verticalAlign: 'middle',
                lineHeight: 1.5,
            },
            '#swapContainer i-button.disabled': {
                opacity: 0.4,
            },
            '#swapContainer i-button:not(.disabled):hover': {
                transition: 'all .2s ease-out',
                background: 'linear-gradient(255deg,#f15e61,#b52082)'
            },
            '#swapContainer i-button:focus': {
                outline: 0,
                boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)'
            },
            '#swapContainer': {
                width: 520,
                maxWidth: '100%',
                padding: '1rem',
                margin: '0 auto 2rem'
            },
            '.bill-board': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                marginBottom: '2.5rem',
                $nest: {
                    '> i-image': {
                        display: 'inline-block',
                        width: '100%'
                    },
                    '> i-image img': {
                        display: 'block',
                        width: '60%',
                        margin: 'auto'
                    }
                }
            },
            '.icon-list': {
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                maxWidth: 'calc(100% - 4rem)',
            },
            '.icon-item': {
                paddingBottom: 0,
                paddingTop: '0.25rem',
                marginRight: '0.25rem',
                border: '2px solid transparent',
                borderRadius: '50%',
                padding: '0.25rem',
                $nest: {
                    '> img': {
                        width: 30,
                        height: 30
                    }
                }
            },
            '.content-swap': {
                padding: '1.25rem',
                // margin: '0.5rem auto 2rem',
                marginTop: '0.5rem',
                marginBottom: '2rem',
                background: '#192046',
                borderRadius: '1rem',
                $nest: {
                    'i-label.custom-label *': {
                        fontSize: '1.125rem',
                        color: '#fff',
                    }
                }
            },
            '.input--token-container': {
                padding: '0.5rem 1rem',
                marginLeft: '-15px',
                marginRight: '-15px',
            },
            'i-label.text--grey *': {
                color: 'hsla(0,0%,100%,0.55)'
            },
            '.btn-max': {
                position: 'relative',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                padding: '0 0.5rem',
                marginLeft: '0.5rem',
                bottom: '1.5px',
                background: 'transparent linear-gradient(255deg,#e75b66,#b52082) 0% 0% no-repeat padding-box',
                color: '#fff'
            },
            '.custom--slider': {
                width: '100%',
                margin: '0px 6px 22px',
                display: 'flex',
                alignItems: 'center',
                $nest: {
                    'i-range, i-range > .slider': {
                        width: '100% !important'
                    },
                    'input[type="range"]': {
                        background: '#0c1234',
                        backgroundImage: `linear-gradient(#f15e61, #f15e61)`,
                        backgroundSize: '0% 100%',
                    },
                    'input[type="range"]::-webkit-slider-thumb': {
                        backgroundColor: '#f15e61',
                        border: '2px solid #e83e8c'
                    },
                    'input[type="range"]:focus::-webkit-slider-thumb': {
                        outline: 0,
                    },
                    'input[type="range"]::-webkit-slider-runnable-track': {
                        height: '4px'
                    }
                }
            },
            '.bg-box': {
                background: '#0c1234',
                margin: '0.5rem 0',
                border: '1px solid transparent',
                borderRadius: '0.75rem'
            },
            '#swapContainer .input--token-box': {
                padding: '0.75rem 1rem',
                $nest: {
                    '#btnToken': {
                        height: 'auto !important'
                    },
                    'i-button.custom-btn': {
                        background: '#192046',
                        padding: '0.5rem',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontWeight: 700,
                        lineHeight: 1.5,
                        alignSelf: 'center',
                        textAlign: 'center',
                        opacity: 1,
                        color: '#fff',
                        $nest: {
                            '&:not(.disabled):hover': {
                                background: '#192046'
                            },
                            '&> span': {
                                verticalAlign: 'middle',
                            },
                            '&> i-icon': {
                                maxWidth: 10,
                                height: '16px !important',
                                opacity: 0.5,
                                marginRight: 'unset',
                                fill: '#fff'
                            },
                            '&> :not(:last-child)': {
                                marginRight: '0.5rem'
                            }
                        }
                    },
                    '.text-value': {
                        display: 'block',
                        $nest: {
                            '> *': {
                                fontSize: '1.25rem',
                                paddingRight: '0.25rem'
                            }
                        }
                    },
                    '.token-input': {
                        width: '100%'
                    },
                    '.token-input > input': {
                        width: '100%',
                        height: 'auto !important',
                        padding: '.375rem .75rem',
                        paddingRight: '0.25rem',
                        paddingLeft: 0,
                        borderRadius: '0.25rem',
                        border: 'none',
                        background: 'transparent',
                        color: '#fff',
                        fontSize: '1.25rem',
                        textAlign: 'right'
                    }
                }
            },
            '.toggle-reverse': {
                margin: '1rem 0 0.5rem',
                fontSize: '20px',
                textAlign: 'center',
                $nest: {
                    '> .icon-swap': {
                        display: 'inline-flex',
                        padding: '0.25rem',
                    }
                }
            },
            '.rounded-icon': {
                display: 'inline-flex',
                padding: '3px',
                background: '#252a48',
                border: '2px solid transparent',
                borderRadius: '50%',
                cursor: 'pointer'
            },
            '.total-routes': {
                padding: '0.25rem 1rem 0.5rem'
            },
            '.swap-btn-container': {
                marginBottom: '1.5rem',
                $nest: {
                    '.btn-swap': {
                        position: 'relative',
                        width: '100%',
                        borderRadius: '0.65rem',
                        fontSize: '1.125rem',
                        padding: '1.25rem 0.75rem',
                        opacity: 1,
                        color: '#fff'
                    }
                }
            },
            '#payCol, #receiveCol': {
                maxWidth: 'calc(100% - 9rem)',
            },
            '#tokenModal': {
                $nest: {
                    '.modal': {
                        background: '#192046',
                        width: 492,
                        padding: '0.75rem 1rem',
                        borderRadius: '1rem',
                        color: '#fff'
                    },
                    '.i-modal_header': {
                        marginBottom: '1.5rem',
                        paddingBottom: '0.5rem',
                        borderBottom: '2px solid #0c1234',
                        color: Theme.colors.primary.main,
                        fontSize: '1.25rem',
                        fontWeight: 700,
                    },
                    '.i-modal_header > i-icon': {
                        fill: '#f15e61 !important'
                    },
                    '.search': {
                        position: 'relative',
                        marginBottom: '1.5rem',
                        $nest: {
                            'i-icon': {
                                position: 'absolute',
                                top: 'calc(50% - 8px)',
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
                                color: 'inherit',
                                fontSize: 'inherit',
                            }
                        }
                    },
                    '.common-token': {
                        $nest: {
                            '.common-list': {
                                margin: '0.5rem -0.5rem 0'
                            },
                            '.grid-item': {
                                padding: '0.35rem 0.5rem',
                                borderRadius: '1rem',
                                border: '2px solid transparent',
                                $nest: {
                                    '&:hover': {
                                        borderColor: '#e83e8c',
                                        transform: 'none'
                                    },
                                    'i-image': {
                                        marginRight: '0.5rem'
                                    }
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
                            },
                            '.token-item': {
                                padding: '0.5rem',
                                overflow: 'unset',
                                animation: 'none',
                                $nest: {
                                    '&:hover': {
                                        background: 'linear-gradient(254.8deg,rgba(231,91,102,.1) -8.08%,rgba(181,32,130,.1) 84.35%) !important',
                                        transform: 'none !important'
                                    },
                                    'i-image': {
                                        marginRight: '0.5rem'
                                    },
                                    '&:not(:first-child)': {
                                        marginTop: 0
                                    }
                                }
                            },
                            '.token-name i-label > *': {
                                fontSize: '0.75rem',
                                color: 'rgba(255,255,255,0.55)'
                            }
                        }
                    },
                }
            },
            '.list-routing': {
                maxHeight: '27.5rem',
                overflowY: 'auto'
            },
            '.routing-item': {
                position: 'relative',
                color: "#fff",
                background: "#192046",
                border: '2px solid #2a3675',
                padding: '1.25rem 1rem 1rem',
                borderRadius: '0.75rem',
                margin: '1rem'
            },
            '#listRouting': {
                maxHeight: '27.5rem',
                overflowY: 'auto',
            },
            '#listRouting.active': {
                $nest: {
                    '.pnl-routing': {
                        marginRight: 'calc(1rem - 3px)',
                    }
                }
            },
            '.routing-selected': {
                borderColor: '#e83e8c'
            },
            '.best-price': {
                color: '#fff',
                position: 'absolute',
                top: '-15px',
                left: '30px',
                background: 'linear-gradient(255deg,#f15e61,#b52082)',
                borderRadius: ' 0.75rem',
                padding: '0.25rem 1rem',
                $nest: {
                    '&>*': {
                        fontSize: 'inherit'
                    }
                }
            },
            '.toggle-routes': {
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                $nest: {
                    'i-label': {
                        fontSize: '14px',
                        color: '#fff',
                        marginRight: '8px'
                    },
                    'i-icon': {
                        display: 'inline-block',
                    }
                }
            },
            '.toggle-routes.hidden': {
                display: 'none',
            },
            '.pnl-routing': {
                position: 'relative',
                color: '#fff',
                background: '#192046',
                border: '2px solid #2a3675',
                padding: '1.25rem 1rem 1rem',
                borderRadius: '0.75rem',
                margin: '1rem',
                lineHeight: 1.5,
                $nest: {
                    '.routing-name': {
                        marginRight: '0.25rem',
                        fontSize: '0.875rem',
                    },
                    '.routing-caption > *': {
                        marginRight: '0.25rem',
                        color: '#ffffff8c',
                        fontSize: '0.875rem',
                        whiteSpace: 'nowrap',
                    },
                    '.route-icon': {
                        marginRight: '0.25rem',
                        display: 'inline-block'
                    },
                    '&.routing-disabled': {
                        opacity: 0.8,
                    },
                }
            },
            '.pnl-routing.routing-selected': {
                borderColor: '#e83e8c'
            },
            '.balanceValue': {
                textAlign: 'right',
                display: 'block'
            },
            '.price-percent *': {
                color: '#f7d063',
                whiteSpace: 'nowrap',
                textAlign: 'right'
            },
            '.w-100': {
                width: '100%',
            },
            '.text-yellow': {
                color: Theme.colors.secondary.main,
                $nest: {
                    '*': {
                        color: Theme.colors.secondary.main,
                    },
                },
            },
            '.text-pink': {
                color: Theme.colors.primary.main,
                $nest: {
                    '*': {
                        color: Theme.colors.primary.main,
                    },
                },
            },
            '.hints': {
                display: 'flex',
                alignItems: 'start',
                marginTop: '-0.5rem',
                $nest: {
                    '*': {
                        fontSize: '0.8rem',
                        opacity: 0.9,
                    },
                    'i-label *': {
                        color: '#f7d063',
                        marginLeft: '0.25rem',
                    },
                },
            },
            '.chain-icon': {
                margin: '0.25rem 0.5rem 0 0',
                borderRadius: '50%',
                border: '2px solid transparent',
                padding: '0.25rem',
                cursor: 'pointer',
                filter: 'grayscale(1)',
                $nest: {
                    '&.icon-disabled': {
                        cursor: 'default',
                    },
                    '&.icon-selected': {
                        borderColor: '#e83e8c',
                        cursor: 'default',
                        filter: 'inherit',
                    },
                    'img': {
                        width: '32px',
                        height: '32px',
                    },
                },
            },
            '.cursor-default': {
                cursor: 'default !important',
            },
            '.hidden': {
                display: 'none !important'
            },
            '.custom-modal': {
                $nest: {
                    '.modal': {
                        background: '#192046',
                        width: 490,
                        maxWidth: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '1rem',
                        color: '#fff'
                    },
                    '.i-modal_header': {
                        marginBottom: '1.5rem',
                        paddingBottom: '0.5rem',
                        borderBottom: '2px solid #0c1234',
                        color: Theme.colors.primary.main,
                        fontSize: '1.25rem',
                        fontWeight: 700,
                    },
                    '.i-modal_header > i-icon': {
                        fill: '#f15e61 !important'
                    },
                    '.i-modal_header ~ i-icon': {
                        display: 'inline-block',
                        margin: '0.75rem 0',
                        background: '#252a48',
                        border: '2px solid transparent',
                        borderRadius: '50%',
                        padding: '0.25rem'
                    },
                }
            },
            '#registerPairModal': {
                $nest: {
                    '.modal': {
                        background: '#192046',
                        width: 420,
                        maxWidth: '100%',
                        padding: '0.75rem 1rem 1.25rem 1rem',
                        borderRadius: '1rem',
                        color: '#fff'
                    },
                    '.i-modal_header': {
                        marginBottom: '1.5rem',
                        paddingBottom: '0.5rem',
                        borderBottom: '2px solid #0c1234',
                        color: Theme.colors.primary.main,
                        fontSize: '1.25rem',
                        fontWeight: 700,
                    },
                    '.i-modal_header .i-modal-close': {
                        fill: Theme.colors.primary.main + ' !important'
                    },
                }
            },
            '#swapModal': {
                $nest: {
                    '.icon-swap': {
                        margin: 0
                    },
                    'i-image:not(.rounded-icon)': {
                        display: 'inline-block',
                        marginRight: '0.5rem'
                    },
                    '#tokenReceiveValue': {
                        margin: '0 5px'
                    },
                    '#payOrReceiveValue': {
                        marginInline: '0.25rem',
                    },
                    '.text-primary *': {
                        color: Theme.colors.primary.main,
                    },
                    '.price-info': {
                        padding: '1rem'
                    },
                    '.arrow-down': {
                        display: 'inline-block',
                        margin: '0.75rem 0',
                        background: '#252a48',
                        border: '2px solid transparent',
                        borderRadius: '50%',
                        padding: '0.25rem'
                    },
                    '.arrow-down--chain': {
                        margin: '0.75rem 6rem !important',
                    },
                    '.token-value': {
                        marginLeft: 'auto',
                    },
                    '.token-value > *, #swapModal .token-name > *': {
                        fontSize: '1.1rem'
                    },
                    '.row-chain': {
                        display: 'flex',
                        alignItems: 'center',
                    },
                }
            },
            '#openswapResult': {
                $nest: {
                    '.modal': {
                        background: '#252a48',
                        width: '440px',
                        maxWidth: '100%',
                        padding: '0.5rem',
                        borderRadius: '12px'
                    },
                    'i-label:nth-child(2)': {
                        marginBottom: '0.25rem'
                    },
                    '.waiting-txt > *': {
                        fontSize: '22px'
                    },
                    'i-loading': {
                        marginTop: '3rem',
                        marginBottom: '0.5rem'
                    },
                    'i-loading .i-loading-spinner_icon': {
                        width: '50px',
                        height: '48px'
                    }
                }
            },
            '#modalViewOrder': {
                $nest: {
                    'i-label > *': {
                        fontSize: '.875rem',
                        wordBreak: 'normal'
                    },
                    '.i-modal_content': {
                        padding: '0 1rem 1rem',
                    },
                    '.flex-col': {
                        flexDirection: 'column',
                    },
                    'i-button': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '150px',
                        height: '50px !important',
                        fontWeight: 600,
                        borderRadius: 5,
                        margin: '0.5rem',
                    },
                    '.btn-cancel': {
                        background: '#eaecef',
                        color: Theme.background.default,
                    },
                    '.btn-submit': {
                        textAlign: 'center',
                    },
                    '.btn-submit > *': {
                        color: `${Theme.text.primary} !important`,
                    },
                }
            },
            '#modalFees': {
                $nest: {
                    '.i-modal_header': {
                        marginBottom: '0.5rem !important',
                    },
                    '.i-modal_content': {
                        $nest: {
                            'i-label *': {
                                fontSize: '0.875rem',
                            },
                            'i-button': {
                                width: '150px',
                                paddingBlock: '0.25rem',
                            },
                        },
                    },
                },
            },
            '.action-setting': {
                margin: 'auto 0 0 auto',
                $nest: {
                    '> i-icon': {
                        marginLeft: '0.5rem'
                    },
                    '> i-label': {
                        opacity: 0.75
                    }
                }
            },
            '.btn-os': {
                background: colorVar.primaryButton,
                height: 'auto !important',
                color: '#fff',
                transition: 'background .3s ease',
                fontSize: '1rem',
                fontWeight: 'bold',
                fontFamily: 'Raleway Bold',
                $nest: {
                    'i-icon.loading-icon': {
                        marginInline: '0.25rem',
                        width: '16px !important',
                        height: '16px !important',
                    },
                },
            },
            '.btn-os:not(.disabled):not(.is-spinning):hover, .btn-os:not(.disabled):not(.is-spinning):focus': {
                background: colorVar.primaryGradient,
                backgroundColor: 'transparent',
                boxShadow: 'none',
                opacity: .9
            },
            '.btn-os:not(.disabled):not(.is-spinning):focus': {
                boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)'
            },
            '.btn-os.disabled, .btn-os.is-spinning': {
                background: colorVar.primaryDisabled,
                opacity: 1
            },
            '.dark-bg, .dark-modal > div > div': {
                background: colorVar.darkBg,
                borderRadius: 5
            },
            '.btn-transparent, .btn-transparent:not(.disabled):focus, .btn-transparent:not(.disabled):hover': {
                background: 'transparent',
                boxShadow: 'none',
                backgroundColor: 'transparent'
            }
        }
    });
});
define("@swap/main", ["require", "exports", "@ijstech/components", "@ijstech/eth-wallet", "@swap/assets", "@swap/store", "@swap/swap-utils", "@swap/global", "@swap/crosschain-utils", "@swap/price-info", "@swap/result", "@swap/expert-mode-settings", "@swap/transaction-settings", "@ijstech/eth-contract", "@swap/main/index.css.ts"], function (require, exports, components_2, eth_wallet_1, assets_2, store_1, swap_utils_1, global_1, crosschain_utils_1, price_info_1, result_1, expert_mode_settings_1, transaction_settings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SwapBlock = void 0;
    const priceImpactTooHighMsg = 'Price Impact Too High. If you want to bypass this check, please turn on Expert Mode';
    const defaultInput = '1';
    let SwapBlock = class SwapBlock extends components_2.Module {
        constructor(parent, options) {
            super(parent, options);
            this.defaultEdit = true;
            this.isInited = false;
            this.fallbackUrl = assets_2.default.fullPath('img/tokens/Custom.png');
            this._lastUpdated = 0;
            // Cross Chain
            this.crossChainApprovalStatus = global_1.ApprovalStatus.NONE;
            this.oldSupportedChainList = [];
            this.supportedChainList = [];
            this.onWalletConnect = async (connected) => {
                var _a, _b;
                if (connected && (this.chainId == null || this.chainId == undefined)) {
                    this.onChainChange();
                }
                else {
                    if ((_b = (_a = this._data) === null || _a === void 0 ? void 0 : _a.providers) === null || _b === void 0 ? void 0 : _b.length)
                        this.onSetupPage(connected);
                }
            };
            this.onWalletDisconnect = async (connected) => {
                if (!connected) {
                    //await this.handleAddRoute();
                    //await this.updateBalance();
                    await this.onSetupPage(connected);
                }
            };
            this.onChainChange = () => {
                var _a, _b;
                this.chainId = store_1.getChainId();
                if (this.chainId != null && this.chainId != undefined)
                    this.swapBtn.classList.remove('hidden');
                // this.availableMarkets = getAvailableMarkets() || [];
                if ((_b = (_a = this._data) === null || _a === void 0 ? void 0 : _a.providers) === null || _b === void 0 ? void 0 : _b.length)
                    this.onSetupPage(true);
                this.swapButtonText = this.getSwapButtonText();
            };
            this.initWalletData = async () => {
                let accountsChangedEventHandler = async (account) => {
                    store_1.tokenStore.updateTokenMapData();
                };
                let chainChangedEventHandler = async (hexChainId) => {
                    store_1.tokenStore.updateTokenMapData();
                };
                let selectedProvider = localStorage.getItem('walletProvider');
                if (!selectedProvider && store_1.hasMetaMask()) {
                    selectedProvider = eth_wallet_1.WalletPlugin.MetaMask;
                }
                const isValidProvider = Object.values(eth_wallet_1.WalletPlugin).includes(selectedProvider);
                if (!eth_wallet_1.Wallet.getClientInstance().chainId) {
                    eth_wallet_1.Wallet.getClientInstance().chainId = store_1.getDefaultChainId();
                }
                if (store_1.hasWallet() && isValidProvider) {
                    await store_1.connectWallet(selectedProvider, {
                        'accountsChanged': accountsChangedEventHandler,
                        'chainChanged': chainChangedEventHandler
                    });
                }
            };
            this.getAddressFromUrl = () => {
                const wHref = window.location.href;
                const startIdx = wHref.indexOf('?');
                const search = wHref.substring(startIdx, wHref.length);
                const queryString = search;
                const urlParams = new URLSearchParams(queryString);
                this.fromTokenSymbol = urlParams.get('fromToken') || '';
                this.toTokenSymbol = urlParams.get('toToken') || '';
                const targetId = urlParams.get('toChainId');
                this.targetChainId = targetId ? new eth_wallet_1.BigNumber(targetId).toNumber() : undefined;
                if (!this.isCrossChain) {
                    this.chainId = store_1.getChainId();
                    const fromAmount = urlParams.get("fromAmount") ? (urlParams.get("fromAmount") || "") : this.targetChainId && this.chainId !== this.targetChainId ? "1" : "";
                    const toAmount = urlParams.get('toAmount') || '';
                    this.fromInputValue = new eth_wallet_1.BigNumber(fromAmount).abs();
                    this.toInputValue = new eth_wallet_1.BigNumber(toAmount).abs();
                }
            };
            this.redirectToken = () => {
                var _a, _b, _c;
                let queryRouter = {
                    chainId: this.chainId,
                    toChainId: ((_a = this.desChain) === null || _a === void 0 ? void 0 : _a.chainId) || this.targetChainId,
                    fromToken: ((_b = this.fromToken) === null || _b === void 0 ? void 0 : _b.symbol) || this.fromTokenSymbol,
                    toToken: ((_c = this.toToken) === null || _c === void 0 ? void 0 : _c.symbol) || this.toTokenSymbol,
                };
                if (this.isCrossChain) {
                    this.isFrom = false;
                }
                if (this.isFrom) {
                    queryRouter = Object.assign(Object.assign({}, queryRouter), { toAmount: this.toInputValue.toFixed() });
                }
                else {
                    queryRouter = Object.assign(Object.assign({}, queryRouter), { fromAmount: this.fromInputValue.toFixed() });
                }
                this.fromTokenSymbol = queryRouter.fromToken;
                this.toTokenSymbol = queryRouter.toToken;
                this.targetChainId = queryRouter.toChainId;
                if (!this.isCrossChainEnabled) {
                    delete queryRouter['toChainId'];
                }
                // if (!window.location.hash.includes('#/swap')) return;
                // const queryString = new URLSearchParams(queryRouter).toString();
                // const newURL = window.location.protocol + "//" + window.location.host + '/' + location.hash.split("?")[0] + '?' + queryString;
                // window.history.pushState({ path: newURL }, '', newURL);
            };
            this.fixedNumber = (value) => {
                const val = typeof value === 'object' ? value : new eth_wallet_1.BigNumber(value);
                if (val.isNaN())
                    return '0';
                let formatted = '';
                if (val.gte(1)) {
                    formatted = val.toNumber().toLocaleString('en-US', { maximumFractionDigits: 4 });
                }
                else {
                    formatted = val.toNumber().toLocaleString('en-US', { maximumSignificantDigits: 4 });
                }
                return formatted.replace(/,/g, '');
            };
            this.onSetupPage = async (connected) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                // this.getAddressFromUrl();
                this.chainId = store_1.getChainId();
                const isFixedPair = ((_a = this._data) === null || _a === void 0 ? void 0 : _a.category) === 'fixed-pair';
                if (isFixedPair) {
                    this.setFixedPairData();
                }
                this.toggleReverseImage.enabled = !isFixedPair;
                this.firstTokenSelection.disableSelect = isFixedPair;
                this.secondTokenSelection.disableSelect = isFixedPair;
                // this.checkHasWallet = hasWallet();
                this.swapButtonText = this.getSwapButtonText();
                await this.updateBalance();
                await this.onRenderChainList();
                const input = this.receiveCol.children[0];
                if (this.isCrossChain) {
                    this.initRoutes();
                    this.toInputValue = new eth_wallet_1.BigNumber(0);
                    if (input) {
                        input.value = '-';
                        input.readOnly = true;
                    }
                    this.toggleReverseImage.classList.add('cursor-default');
                    if (this.isEstimated('from')) {
                        this.onUpdateEstimatedPosition(false, true);
                    }
                }
                else {
                    if (input) {
                        input.readOnly = false;
                    }
                    if (!isFixedPair) {
                        this.toggleReverseImage.classList.remove('cursor-default');
                    }
                }
                if (this.fromInputValue.isGreaterThanOrEqualTo(0)) {
                    this.onUpdateEstimatedPosition(false, true);
                    const input = this.payCol.children[0];
                    if (input) {
                        input.value = this.fixedNumber(this.fromInputValue);
                    }
                }
                else if (this.toInputValue.isGreaterThanOrEqualTo(0)) {
                    this.onUpdateEstimatedPosition(true, true);
                    const input = this.receiveCol.children[0];
                    if (input) {
                        input.value = this.fixedNumber(this.toInputValue);
                    }
                }
                if (!isFixedPair) {
                    this.setDefaultToken();
                }
                // TODO Only allow Oswap to be selected in Mainnet Oswap2Oswap Pilot launch, BSC <-> AVAX, should be changed when any2any is ready
                if (!isFixedPair && (this.chainId === 56 && ((_b = this.desChain) === null || _b === void 0 ? void 0 : _b.chainId) === 43114 || this.chainId === 43114 && ((_c = this.desChain) === null || _c === void 0 ? void 0 : _c.chainId) === 56)) {
                    // Use hardcode map for Oswap2Oswap pilot launch
                    const fromOswapTokenObj = store_1.getOpenSwapToken(this.chainId);
                    this.firstTokenSelection.tokenDataListProp = [Object.assign(Object.assign({}, fromOswapTokenObj), { status: false, balance: fromOswapTokenObj.address ? (_d = this.allTokenBalancesMap[fromOswapTokenObj.address.toLowerCase()]) !== null && _d !== void 0 ? _d : 0 : 0 })];
                    this.onUpdateToken(fromOswapTokenObj, true);
                    this.firstTokenSelection.token = fromOswapTokenObj;
                    this.fromToken = fromOswapTokenObj;
                    // Update from Token description
                    const fromBalance = this.getBalance(this.fromToken);
                    this.payBalance.caption = `Balance: ${global_1.formatNumber(fromBalance, 4)} ${this.fromToken.symbol}`;
                    // Update Mainnet ToTokenSelection
                    await this.updateTargetChainBalances();
                    const toOswapTokenObj = store_1.getOpenSwapToken(this.desChain.chainId);
                    if (this.targetChainTokenBalances) {
                        this.secondTokenSelection.tokenDataListProp = [Object.assign(Object.assign({}, toOswapTokenObj), { status: false, balance: (_f = (_e = this.targetChainTokenBalances[toOswapTokenObj.address.toLowerCase()]) !== null && _e !== void 0 ? _e : this.targetChainTokenBalances[toOswapTokenObj.symbol]) !== null && _f !== void 0 ? _f : 0 })];
                    }
                    else {
                        this.secondTokenSelection.tokenDataListProp = [Object.assign(Object.assign({}, toOswapTokenObj), { status: null })];
                    }
                    this.onUpdateToken(toOswapTokenObj, false);
                    this.secondTokenSelection.token = toOswapTokenObj;
                    this.toToken = toOswapTokenObj;
                    // Update to token description
                    const toBalance = (_g = this.targetChainTokenBalances[toOswapTokenObj.address.toLowerCase()]) !== null && _g !== void 0 ? _g : 0;
                    this.receiveBalance.caption = `Balance: ${global_1.formatNumber(toBalance, 4)} ${this.toToken.symbol}`;
                }
                else {
                    // Reset firstTokenSelection tokenDataListProp to empty array to allow bypass in TokenSelection get tokenDataList, and get show all token selection
                    this.firstTokenSelection.tokenDataListProp = [];
                    this.setTargetTokenList();
                }
                //if (connected) {
                (_h = this.actionSetting) === null || _h === void 0 ? void 0 : _h.classList.remove("hidden");
                clearInterval(this.timer);
                this.timer = setInterval(() => {
                    this.lastUpdated++;
                }, 1000);
                this.lastUpdated = 0;
                if (!this.record)
                    this.swapBtn.classList.add('hidden');
                // this.onRenderIconList();
                this.onRenderPriceInfo();
                this.redirectToken();
                await this.handleAddRoute();
                /*
              } else {
                this.actionSetting?.classList.add("hidden");
                clearInterval(this.timer);
                this.lastUpdated = 0;
                this.swapBtn.classList.remove('hidden');
              }
              */
            };
            this.setDefaultToken = () => {
                var _a;
                let lstTokenMap = Object.values(store_1.tokenStore.tokenMap);
                const defaultCrossChainToken = lstTokenMap.find((v) => !v.address);
                let lstTargetTokenMap = Object.values(this.targetTokenMap);
                const oswapIndex = lstTargetTokenMap.findIndex((item) => item.symbol === 'OSWAP');
                if (oswapIndex > 0) {
                    [lstTargetTokenMap[0], lstTargetTokenMap[oswapIndex]] = [lstTargetTokenMap[oswapIndex], lstTargetTokenMap[0]];
                }
                if (this.fromTokenSymbol && this.toTokenSymbol) {
                    if (!this.isCrossChain && this.fromTokenSymbol === this.toTokenSymbol) {
                        this.toToken = undefined;
                        this.toTokenSymbol = '';
                    }
                    const firstObj = lstTokenMap.find((item) => this.fromTokenSymbol === item.symbol || this.fromTokenSymbol === item.address);
                    const secondObj = lstTargetTokenMap.find((item) => this.toTokenSymbol === item.symbol || this.toTokenSymbol === item.address);
                    if (firstObj) {
                        this.fromToken = firstObj || store_1.ChainNativeTokenByChainId[this.chainId];
                    }
                    else if (this.isCrossChain) {
                        this.fromToken = defaultCrossChainToken;
                    }
                    else {
                        const token = lstTokenMap.find((item) => item.symbol !== (secondObj === null || secondObj === void 0 ? void 0 : secondObj.symbol));
                        this.fromToken = (secondObj === null || secondObj === void 0 ? void 0 : secondObj.symbol) === store_1.ChainNativeTokenByChainId[this.chainId].symbol ? token : store_1.ChainNativeTokenByChainId[this.chainId];
                    }
                    if (secondObj) {
                        this.toToken = secondObj;
                    }
                    else if (this.isCrossChain) {
                        this.toToken = lstTargetTokenMap[0];
                    }
                    else {
                        const token = lstTargetTokenMap.find((item) => { var _a, _b; return !(item.address === ((_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.address) || item.symbol === ((_b = this.fromToken) === null || _b === void 0 ? void 0 : _b.symbol)); });
                        this.toToken = ((_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol) === store_1.ChainNativeTokenByChainId[this.chainId].symbol ? token : store_1.ChainNativeTokenByChainId[this.chainId];
                    }
                    this.onUpdateToken(this.fromToken, true);
                    this.onUpdateToken(this.toToken, false);
                    this.firstTokenSelection.token = this.fromToken;
                    this.secondTokenSelection.token = this.toToken;
                    this.fromInputValue = this.fromInputValue || new eth_wallet_1.BigNumber(defaultInput);
                }
                else {
                    this.fromInputValue = new eth_wallet_1.BigNumber(defaultInput);
                    let firstDefaultToken = defaultCrossChainToken;
                    let secondDefaultToken = lstTargetTokenMap.find((v) => v.symbol === store_1.projectNativeTokenSymbol()) || lstTokenMap.find((v) => v.symbol === 'USDT' || v.symbol === 'USDT.e');
                    if (firstDefaultToken && secondDefaultToken) {
                        const fromAmount = parseFloat(defaultInput);
                        this.fromInputValue = new eth_wallet_1.BigNumber(fromAmount);
                        this.onUpdateToken(firstDefaultToken, true);
                        this.onUpdateToken(secondDefaultToken, false);
                        this.firstTokenSelection.token = this.fromToken;
                        this.secondTokenSelection.token = this.toToken;
                    }
                    this.redirectToken();
                }
                this.onUpdateSliderValue();
            };
            this.getMinReceivedMaxSold = () => {
                var _a, _b;
                const slippageTolerance = store_1.getSlippageTolerance();
                if (!slippageTolerance)
                    return null;
                if (this.isFrom) {
                    const poolAmount = new eth_wallet_1.BigNumber((_a = this.record) === null || _a === void 0 ? void 0 : _a.amountIn);
                    if (poolAmount.isZero())
                        return null;
                    const minReceivedMaxSold = poolAmount.times(1 + slippageTolerance / 100).toNumber();
                    return minReceivedMaxSold;
                }
                else {
                    const poolAmount = new eth_wallet_1.BigNumber((_b = this.record) === null || _b === void 0 ? void 0 : _b.amountOut);
                    if (poolAmount.isZero())
                        return null;
                    const minReceivedMaxSold = poolAmount.times(1 - slippageTolerance / 100).toNumber();
                    return minReceivedMaxSold;
                }
            };
            this.sortToken = (a, b) => {
                return b.value - a.value;
            };
            this.onUpdateEstimatedPosition = (isFrom, reverseRouting = false) => {
                if (this.isFrom != isFrom) {
                    this.isFrom = isFrom;
                    if (reverseRouting) {
                        const tokenBoxInput = isFrom ? this.payContainer.childNodes[1] : this.receiveContainer.childNodes[1];
                        tokenBoxInput.appendChild(this.routingContainer);
                    }
                }
            };
            this.isEstimated = (tokenPosition, strict = false) => {
                if (tokenPosition === 'from') {
                    return strict ? this.isFrom && !this.fromInputValue.isZero() : this.isFrom;
                }
                else if (tokenPosition === 'to') {
                    return strict ? !this.isFrom && !this.toInputValue.isZero() : !this.isFrom;
                }
                else {
                    return false;
                }
            };
            this.onSwapConfirming = (key) => {
                this.setMapStatus('swap', key, global_1.ApprovalStatus.APPROVING);
                if (!this.swapBtn.rightIcon.visible)
                    this.swapBtn.rightIcon.visible = true;
            };
            this.onSwapConfirmed = async (data) => {
                const { key, isCrossChain } = data;
                this.setMapStatus('swap', key, global_1.ApprovalStatus.TO_BE_APPROVED);
                if (this.swapBtn.rightIcon.visible)
                    this.swapBtn.rightIcon.visible = false;
                await this.handleAddRoute();
                if (isCrossChain) {
                    this.showViewOrderModal();
                }
            };
            this.registerPairButtonStatus = (pair) => {
                const statusMap = this.registerPairButtonStatusMap;
                return Object.keys(statusMap).includes(pair.pairAddress) ? statusMap[pair.pairAddress] : global_1.ApprovalStatus.NONE;
            };
            this.onSubmit = async () => {
                var _a, _b;
                try {
                    this.swapModal.visible = false;
                    this.showResultMessage(this.openswapResult, 'warning', `Swapping ${global_1.formatNumber(this.fromInputValue, 4)} ${(_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol} to ${global_1.formatNumber(this.toInputValue, 4)} ${(_b = this.toToken) === null || _b === void 0 ? void 0 : _b.symbol}`);
                    if (this.isCrossChain) {
                        if (this.toToken && this.fromToken && this.desChain) {
                            this.record.minReceivedMaxSold = this.getMinReceivedMaxSold();
                            const { error } = await swap_utils_1.createBridgeVaultOrder({
                                vaultAddress: this.record.vaultAddress,
                                targetChainId: this.desChain.chainId,
                                tokenIn: this.fromToken,
                                tokenOut: this.toToken,
                                amountIn: this.record.fromAmount,
                                minAmountOut: this.record.minReceivedMaxSold,
                                sourceRouteInfo: this.record.sourceRouteObj ? { amountOut: this.record.sourceRouteObj.amountOut, pairs: this.record.sourceRouteObj.pairs } : undefined
                            });
                            if (error) {
                                this.showResultMessage(this.openswapResult, 'error', error);
                            }
                        }
                        return;
                    }
                    const route = this.record.bestRoute ? this.record.bestRoute : [this.fromToken, this.toToken];
                    const swapData = {
                        provider: this.record.provider,
                        queueType: this.record.queueType,
                        routeTokens: this.record.bestRoute,
                        bestSmartRoute: route,
                        pairs: this.record.pairs,
                        fromAmount: this.record.fromAmount,
                        toAmount: this.record.toAmount,
                        isFromEstimated: this.isFrom,
                        providerList: this._data.providers
                    };
                    const { error } = await swap_utils_1.executeSwap(swapData);
                    if (error) {
                        this.showResultMessage(this.openswapResult, 'error', error);
                    }
                }
                catch (error) {
                    console.error(error);
                }
            };
            this.onApproveRouterMax = () => {
                const item = this.record;
                this.showResultMessage(this.openswapResult, 'warning', 'Approving');
                this.setApprovalSpenderAddress();
                this.approvalModelAction.doApproveAction(this.fromToken, this.fromInputValue.toString(), this.record);
            };
            this.onSetMaxBalance = async (value) => {
                var _a, _b, _c;
                if (!((_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol))
                    return;
                this.isFrom = false;
                const address = ((_b = this.fromToken) === null || _b === void 0 ? void 0 : _b.address) || ((_c = this.fromToken) === null || _c === void 0 ? void 0 : _c.symbol);
                let balance = this.getBalance(this.fromToken);
                let inputVal = new eth_wallet_1.BigNumber(balance);
                if (!address) {
                    inputVal = new eth_wallet_1.BigNumber(0);
                }
                if (value == 0 || value) {
                    inputVal = inputVal.multipliedBy(value).dividedBy(100);
                }
                else {
                    this.onUpdateSliderValue(100);
                }
                if (inputVal.eq(this.fromInputValue))
                    return;
                this.fromInputValue = inputVal;
                const input = this.payCol.children[0];
                input.value = this.fromInputValue.toString();
                await this.handleAddRoute();
            };
            this.isMaxDisabled = () => {
                var _a, _b;
                const address = ((_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.address) || ((_b = this.fromToken) === null || _b === void 0 ? void 0 : _b.symbol);
                let balance = this.getBalance(this.fromToken);
                return !address || balance <= 0;
            };
            this.onRefresh = async (source) => {
                source.enabled = false;
                await this.handleAddRoute();
                source.enabled = true;
            };
            this.onSetting = () => {
                this.transactionModal.showModal();
            };
            this.getSupportedChainList = () => {
                const list = store_1.getMatchNetworks({ isDisabled: false });
                const testnetSupportedList = list.filter(v => v.isTestnet);
                const mainnetSupportedList = list.filter(v => !v.isTestnet);
                const isMainnet = mainnetSupportedList.some((item) => item.chainId == this.chainId);
                this.supportedChainList = isMainnet ? mainnetSupportedList : testnetSupportedList;
            };
            this.disableSelectChain = (disabled, isDes) => {
                const chains = isDes ? this.desChainList : this.srcChainList;
                const imgs = chains.querySelectorAll('i-image');
                imgs.forEach((elm) => {
                    const img = elm;
                    img.enabled = !disabled;
                    if (disabled) {
                        img.classList.add('.cursor-default');
                    }
                    else {
                        img.classList.remove('.cursor-default');
                    }
                });
            };
            this.selectSourceChain = async (obj, img) => {
                var _a;
                if ((this.srcChain && this.srcChain.chainId != obj.chainId) || !this.srcChain) {
                    await store_1.switchNetwork(obj.chainId);
                    if (!obj.isCrossChainSupported) {
                        this.selectDestinationChain(obj, img);
                    }
                    this.srcChain = obj;
                    this.srcChainLabel.caption = this.srcChain.name;
                    const selected = this.srcChainList.querySelector('.icon-selected');
                    if (selected) {
                        selected.classList.remove('icon-selected');
                    }
                    if (img) {
                        img.classList.add('icon-selected');
                    }
                    else {
                        (_a = this.srcChainList.firstElementChild) === null || _a === void 0 ? void 0 : _a.classList.add('icon-selected');
                    }
                }
            };
            this.selectDestinationChain = async (obj, img) => {
                var _a;
                if (!this.isCrossChainEnabled)
                    return;
                this.disableSelectChain(true, true);
                const selected = this.desChainList.querySelector('.icon-selected');
                if (selected) {
                    selected.classList.remove('icon-selected');
                }
                const oldDestination = this.desChain;
                try {
                    this.desChain = obj;
                    this.targetChainId = this.desChain.chainId;
                    await this.updateTargetChainBalances();
                    if (img) {
                        img.classList.add('icon-selected');
                    }
                    else {
                        const currentNetwork = this.supportedChainList.find((f) => f.chainId == obj.chainId);
                        const img = this.desChainList.querySelector(`[data-tooltip="${currentNetwork === null || currentNetwork === void 0 ? void 0 : currentNetwork.name}"]`);
                        if (img) {
                            img.classList.add('icon-selected');
                        }
                    }
                }
                catch (err) {
                    console.log('err', err);
                    if (oldDestination) {
                        this.desChain = oldDestination;
                        if (selected) {
                            selected.classList.add('icon-selected');
                        }
                    }
                    else {
                        this.desChain = this.supportedChainList[0];
                        (_a = this.desChainList.firstElementChild) === null || _a === void 0 ? void 0 : _a.classList.add('icon-selected');
                    }
                }
                if (this.desChain) {
                    this.targetChainId = this.desChain.chainId;
                    this.desChainLabel.caption = this.desChain.name;
                }
                this.setTargetTokenList();
                this.disableSelectChain(false, true);
            };
            this.setTargetTokenList = (isDisabled) => {
                var _a, _b, _c;
                if (((_a = this.srcChain) === null || _a === void 0 ? void 0 : _a.isCrossChainSupported) && !isDisabled) {
                    const targetChainId = ((_b = this.desChain) === null || _b === void 0 ? void 0 : _b.chainId) || this.chainId;
                    if (this.secondTokenSelection.targetChainId != targetChainId) {
                        this.secondTokenSelection.targetChainId = targetChainId;
                    }
                    this.secondTokenSelection.tokenDataListProp = this.targetChainTokenDataList;
                }
                else {
                    const srcChainId = ((_c = this.srcChain) === null || _c === void 0 ? void 0 : _c.chainId) || this.chainId;
                    if (this.secondTokenSelection.targetChainId != srcChainId) {
                        this.secondTokenSelection.targetChainId = srcChainId;
                    }
                    this.secondTokenSelection.tokenDataListProp = [];
                }
            };
            this.onSourceChainChanged = () => {
                var _a;
                const selected = this.srcChainList.querySelector('.icon-selected');
                if (selected) {
                    selected.classList.remove('icon-selected');
                }
                this.getSupportedChainList();
                if (!this.chainId)
                    this.chainId = this.supportedChainList[0].chainId;
                const currentNetwork = this.supportedChainList.find((f) => f.chainId == this.chainId);
                this.srcChain = currentNetwork;
                this.srcChainLabel.caption = ((_a = this.srcChain) === null || _a === void 0 ? void 0 : _a.name) || '-';
                const img = this.srcChainList.querySelector(`[network-name="${currentNetwork === null || currentNetwork === void 0 ? void 0 : currentNetwork.name}"]`);
                if (img) {
                    img.classList.add('icon-selected');
                }
            };
            this.onSelectSourceChain = async (obj, img) => {
                if (this.isMetaMask || !store_1.isWalletConnected()) {
                    await this.selectSourceChain(obj, img);
                    this.onSetupPage(true);
                }
            };
            this.onSelectDestinationChain = async (obj, img) => {
                var _a;
                if (obj.chainId === ((_a = this.desChain) === null || _a === void 0 ? void 0 : _a.chainId))
                    return;
                await this.selectDestinationChain(obj, img);
                this.onSetupPage(true);
            };
            this.setDefaultChain = async () => {
                var _a;
                if (this.supportedChainList && this.supportedChainList.length) {
                    let obj = this.supportedChainList.find((f) => f.chainId == this.chainId);
                    if (!obj)
                        obj = this.supportedChainList[0];
                    if (!this.srcChain && obj) {
                        await this.selectSourceChain(obj);
                    }
                    this.onSourceChainChanged();
                    const targetChain = this.supportedChainList.find((f) => f.chainId == this.targetChainId);
                    const isSupported = targetChain && targetChain.isCrossChainSupported;
                    if (!this.desChain && isSupported) {
                        await this.selectDestinationChain(targetChain);
                    }
                    else if (!isSupported && obj) {
                        await this.selectDestinationChain(obj);
                    }
                    else {
                        if (this.isCrossChain)
                            await this.updateTargetChainBalances();
                        if (this.toToken) {
                            const balance = this.getBalance(this.toToken, this.isCrossChain);
                            this.receiveBalance.caption = `Balance: ${global_1.formatNumber(balance, 4)} ${this.toToken.symbol}`;
                        }
                        this.setTargetTokenList();
                    }
                    this.desChainLabel.caption = ((_a = this.desChain) === null || _a === void 0 ? void 0 : _a.name) || '-';
                }
                else {
                    this.setTargetTokenList(true);
                }
            };
            this.initChainIcon = (network, isDes) => {
                const img = new components_2.Image();
                img.url = assets_2.default.fullPath(network.img);
                img.tooltip.content = network.name;
                img.classList.add('chain-icon');
                img.setAttribute('data-tooltip', network.name); // for query
                if (isDes) {
                    img.onClick = () => this.onSelectDestinationChain(network, img);
                    this.desChainList.appendChild(img);
                }
                else {
                    if (!this.isMetaMask) {
                        img.tooltip.content = `Openswap supports this network ${network.name} (${network.chainId}), please switch network in the connected wallet.`;
                        img.classList.add('icon-disabled');
                    }
                    img.setAttribute('network-name', network.name);
                    img.setAttribute('chain-id', `${network.chainId}`);
                    img.onClick = () => this.onSelectSourceChain(network, img);
                    this.srcChainList.appendChild(img);
                }
            };
            this.updateSrcChainIconList = () => {
                const listElm = this.srcChainList.querySelectorAll('i-image');
                for (const elm of listElm) {
                    const networkName = elm.getAttribute('network-name');
                    const chainId = elm.getAttribute('chain-id');
                    const tooltip = this.isMetaMask ? networkName : `Openswap supports this network ${networkName} (${chainId}), please switch network in the connected wallet.`;
                    if (tooltip) {
                        elm.tooltip.content = tooltip;
                    }
                    if (this.isMetaMask) {
                        elm.classList.remove('icon-disabled');
                    }
                    else {
                        elm.classList.add('icon-disabled');
                    }
                }
            };
            this.onRenderChainList = async () => {
                var _a, _b;
                this.oldSupportedChainList = this.supportedChainList;
                this.getSupportedChainList();
                if (((_a = this.oldSupportedChainList[0]) === null || _a === void 0 ? void 0 : _a.chainId) == ((_b = this.supportedChainList[0]) === null || _b === void 0 ? void 0 : _b.chainId)) {
                    this.updateSrcChainIconList();
                    await this.setDefaultChain();
                    return;
                }
                ;
                this.srcChainList.innerHTML = '';
                this.desChainList.innerHTML = '';
                this.srcChain = undefined;
                this.desChain = undefined;
                this.supportedChainList.forEach((network) => {
                    this.initChainIcon(network);
                    if (network.isCrossChainSupported) {
                        this.initChainIcon(network, true);
                    }
                });
                await this.setDefaultChain();
            };
            this.showViewOrderModal = () => {
                this.modalViewOrder.visible = true;
            };
            this.closeViewOrderModal = () => {
                this.modalViewOrder.visible = false;
            };
            this.onViewOrder = () => {
                this.modalViewOrder.visible = false;
                window.open('#/cross-chain-bridge-record');
            };
            this.showModalFees = () => {
                const fees = this.getFeeDetails();
                this.feesInfo.clearInnerHTML();
                fees.forEach((fee) => {
                    var _a;
                    this.feesInfo.appendChild(this.$render("i-hstack", { horizontalAlignment: "space-between", verticalAlignment: "center", margin: { top: 10 }, border: { bottom: { color: '#0c1234', width: '2px', style: 'solid' } }, padding: { bottom: 16 } },
                        this.$render("i-hstack", { verticalAlignment: "center" },
                            this.$render("i-label", { caption: fee.title, margin: { right: 4 } }),
                            this.$render("i-icon", { name: "question-circle", width: 15, height: 15, fill: "#fff", tooltip: { content: fee.description }, "data-placement": "right" })),
                        this.$render("i-label", { class: "ml-auto", caption: `${global_1.formatNumber(fee.value)} ${(_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol}` })));
                });
                this.feesInfo.appendChild(this.$render("i-hstack", { horizontalAlignment: "space-between", verticalAlignment: "center", margin: { top: 16 } },
                    this.$render("i-hstack", { verticalAlignment: "center" },
                        this.$render("i-label", { caption: "Total Transaction Fee" })),
                    this.$render("i-label", { class: "ml-auto", caption: this.getTradeFeeExactAmount() })));
                this.modalFees.visible = true;
            };
            this.closeModalFees = () => {
                this.modalFees.visible = false;
            };
            this.onRegister = () => {
                const { listMarket, listPairAddress } = this.registerPairsParams;
                this.showResultMessage(this.openswapResult, 'warning', 'Registering');
                const callBack = (err, reply) => {
                    if (err) {
                        this.showResultMessage(this.openswapResult, 'error', err);
                    }
                    else {
                        listPairAddress.forEach((pairAddress) => {
                            this.setMapStatus('register', pairAddress, global_1.ApprovalStatus.APPROVING);
                        });
                        this.showResultMessage(this.openswapResult, 'success', reply);
                        return reply;
                    }
                    this.registerBtn.rightIcon.visible = this.isRegisteringPair;
                    this.registerBtn.enabled = !this.isRegisteringPair;
                };
                const confirmationCallBack = () => {
                    listPairAddress.forEach((pairAddress) => {
                        this.setMapStatus('register', pairAddress, global_1.ApprovalStatus.NONE);
                    });
                    if (!this.hasRegisterPair && this.registerPairModal.visible && this.record) {
                        this.registerPairModal.visible = false;
                        this.registerBtn.rightIcon.visible = this.isRegisteringPair;
                        this.registerBtn.enabled = !this.isRegisteringPair;
                        this.onClickSwapButton();
                    }
                };
                global_1.registerSendTxEvents({
                    transactionHash: callBack,
                    confirmation: confirmationCallBack
                });
                swap_utils_1.registerPairsByAddress(listMarket, listPairAddress);
            };
            this.showResultMessage = (result, status, content) => {
                if (!result)
                    return;
                let params = { status };
                if (status === 'success') {
                    params.txtHash = content;
                }
                else {
                    params.content = content;
                }
                result.message = Object.assign({}, params);
                result.showModal();
            };
            this.init = async () => {
                this.chainId = store_1.getChainId();
                store_1.setDataFromSCConfig({ infuraId: store_1.InfuraId, networks: store_1.Networks });
                store_1.setTokenStore();
                // this.availableMarkets = getAvailableMarkets() || [];
                this.swapButtonText = this.getSwapButtonText();
                super.init();
                this.openswapResult = new result_1.Result();
                this.swapComponent.appendChild(this.openswapResult);
                this.transactionModal = new transaction_settings_1.TransactionSettings();
                this.swapComponent.appendChild(this.transactionModal);
                this.initExpertModal();
            };
            this.fromInputValue = new eth_wallet_1.BigNumber(0);
            this.toInputValue = new eth_wallet_1.BigNumber(0);
            this.swapButtonStatusMap = {};
            this.approveButtonStatusMap = {};
            this.registerPairButtonStatusMap = {};
            this.$eventBus = components_2.application.EventBus;
            this.registerEvent();
        }
        async getData() {
            return this._data;
        }
        async setData(value) {
            this._data = value;
            this.cardConfig.data = value;
            this.setProviders();
            await this.initData();
            this.onSetupPage(store_1.isWalletConnected());
        }
        async getTag() {
            return this.tag;
        }
        async setTag(value) {
            this.tag = value;
        }
        async confirm() {
            var _a, _b;
            this._data = this.cardConfig.data;
            this.swapContainer.visible = true;
            this.cardConfig.visible = false;
            this.setProviders();
            if ((_b = (_a = this._data) === null || _a === void 0 ? void 0 : _a.providers) === null || _b === void 0 ? void 0 : _b.length) {
                await this.initData();
                this.onSetupPage(store_1.isWalletConnected());
            }
        }
        async discard() {
            this.swapContainer.visible = false;
            this.cardConfig.visible = false;
        }
        async edit() {
            this.cardConfig.data = this._data;
            this.cardConfig.showConfig();
            this.swapContainer.visible = false;
            this.cardConfig.visible = true;
        }
        async config() { }
        setProviders() {
            var _a, _b;
            const providers = ((_a = this._data) === null || _a === void 0 ? void 0 : _a.providers) || [];
            if (((_b = this._data) === null || _b === void 0 ? void 0 : _b.category) === 'fixed-pair') {
                store_1.setProviderList([providers[0]]);
            }
            else {
                store_1.setProviderList(providers);
            }
        }
        isEmptyObject(obj) {
            for (let prop in obj) {
                if (!obj[prop] && prop !== 'dexId') {
                    return true;
                }
            }
            return false;
        }
        validate() {
            var _a;
            const data = ((_a = this.cardConfig.data) === null || _a === void 0 ? void 0 : _a.providers) || [];
            if (!data || !data.length)
                return false;
            for (let item of data) {
                if (this.isEmptyObject(item)) {
                    return false;
                }
                const contractInfo = item.contractInfo || {};
                const contractChainIds = Object.keys(contractInfo);
                if (!contractChainIds.length) {
                    return false;
                }
                for (const chainId of contractChainIds) {
                    const hasTradeFee = !this.isEmptyObject(contractInfo[chainId].tradeFee);
                    if (!hasTradeFee || this.isEmptyObject(contractInfo[chainId])) {
                        return false;
                    }
                }
            }
            return true;
        }
        registerEvent() {
            this.$eventBus.register(this, "isWalletConnected" /* IsWalletConnected */, this.onWalletConnect);
            this.$eventBus.register(this, "IsWalletDisconnected" /* IsWalletDisconnected */, this.onWalletDisconnect);
            this.$eventBus.register(this, "chainChanged" /* chainChanged */, this.onChainChange);
            this.$eventBus.register(this, "SlippageToleranceChanged" /* SlippageToleranceChanged */, () => { this.priceInfo.Items = this.getPriceInfo(); });
            this.$eventBus.register(this, "ExpertModeChanged" /* ExpertModeChanged */, () => {
                this.swapButtonText = this.getSwapButtonText();
            });
        }
        get isApproveButtonShown() {
            const warningMessageText = this.getWarningMessageText();
            return warningMessageText === '' && this.approveButtonStatus !== global_1.ApprovalStatus.NONE;
        }
        get isPriceImpactTooHigh() {
            var _a;
            if (this.isCrossChain)
                return false;
            const warningMessageText = this.getWarningMessageText();
            return ((_a = this.record) === null || _a === void 0 ? void 0 : _a.priceImpact) > 15 && !store_1.isExpertMode() && warningMessageText === priceImpactTooHighMsg;
        }
        get isInsufficientBalance() {
            var _a;
            if (!this.fromToken && !this.record)
                return false;
            const balance = this.getBalance(this.fromToken);
            return ((_a = this.record) === null || _a === void 0 ? void 0 : _a.fromAmount) && this.record.fromAmount.gt(balance);
        }
        get isSwapping() {
            var _a;
            const key = (_a = this.record) === null || _a === void 0 ? void 0 : _a.key;
            return key && this.swapButtonStatusMap[key] === global_1.ApprovalStatus.APPROVING;
        }
        get approveButtonStatus() {
            var _a;
            const key = (_a = this.record) === null || _a === void 0 ? void 0 : _a.key;
            return this.approveButtonStatusMap[key];
        }
        get isApprovingRouter() {
            return this.approveButtonStatus === global_1.ApprovalStatus.APPROVING;
        }
        get lastUpdated() {
            return this._lastUpdated;
        }
        set lastUpdated(value) {
            this._lastUpdated = value;
            this.lastUpdatedText = `Last updated ${this._lastUpdated}(s) ago`;
        }
        get isValidToken() {
            var _a, _b;
            if (((_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol) && ((_b = this.toToken) === null || _b === void 0 ? void 0 : _b.symbol)) {
                return true;
            }
            return false;
        }
        get targetTokenMap() {
            return this.isCrossChain ? this.targetChainTokenMap : store_1.tokenStore.tokenMap;
        }
        ;
        setFixedPairData() {
            var _a, _b, _c;
            const providers = (_a = this._data) === null || _a === void 0 ? void 0 : _a.providers;
            if (providers && providers.length) {
                const contractInfo = (providers[0].contractInfo || {})[this.chainId];
                if (contractInfo) {
                    const fromTokenAddress = contractInfo.fromToken || '';
                    const toTokenAddress = contractInfo.toToken || '';
                    const fromToken = fromTokenAddress.toLowerCase().startsWith('0x') ? fromTokenAddress.toLowerCase() : fromTokenAddress;
                    const toToken = toTokenAddress.toLowerCase().startsWith('0x') ? toTokenAddress.toLowerCase() : toTokenAddress;
                    this.fromToken = store_1.tokenStore.tokenMap[fromToken];
                    this.toToken = store_1.tokenStore.tokenMap[toToken];
                    this.fromTokenSymbol = (_b = this.fromToken) === null || _b === void 0 ? void 0 : _b.symbol;
                    this.toTokenSymbol = (_c = this.toToken) === null || _c === void 0 ? void 0 : _c.symbol;
                    this.fromInputValue = new eth_wallet_1.BigNumber(defaultInput);
                    this.onUpdateToken(this.fromToken, true);
                    this.onUpdateToken(this.toToken, false);
                }
                else {
                    this.fromToken = undefined;
                    this.toToken = undefined;
                    this.fromTokenSymbol = '';
                    this.toTokenSymbol = '';
                    this.fromInputValue = new eth_wallet_1.BigNumber(defaultInput);
                    this.payBalance.caption = `Balance: 0`;
                    this.receiveBalance.caption = `Balance: 0`;
                    this.initRoutes();
                    this.onUpdateSliderValue(0);
                    const pay = this.payCol.children[0];
                    if (pay) {
                        pay.value = '-';
                    }
                    const receive = this.receiveCol.children[0];
                    if (receive) {
                        receive.value = '-';
                    }
                }
                this.firstTokenSelection.token = this.fromToken;
                this.secondTokenSelection.token = this.toToken;
                this.toggleReverseImage.classList.add('cursor-default');
            }
        }
        initTokenSelection() {
            this.firstTokenSelection.disableSelect = false;
            this.firstTokenSelection.onSelectToken = (token) => this.onSelectToken(token, true);
            this.firstTokenSelection.isBtnMaxShown = false;
            this.firstTokenSelection.isCommonShown = true;
            this.secondTokenSelection.disableSelect = false;
            this.secondTokenSelection.onSelectToken = (token) => this.onSelectToken(token, false);
            this.secondTokenSelection.isBtnMaxShown = false;
            this.secondTokenSelection.isCommonShown = true;
        }
        async initApprovalModelAction() {
            this.approvalModelAction = await swap_utils_1.getApprovalModelAction({
                sender: this,
                payAction: this.onSubmit,
                onToBeApproved: async (token) => {
                    this.swapBtn.enabled = true;
                },
                onToBePaid: async (token) => {
                },
                onApproving: async (token, receipt, data) => {
                    if (this.isCrossChain) {
                        this.crossChainApprovalStatus = global_1.ApprovalStatus.APPROVING;
                    }
                    else {
                        this.setMapStatus('approve', data.key, global_1.ApprovalStatus.APPROVING);
                    }
                    this.showResultMessage(this.openswapResult, 'success', receipt);
                    if ((this.isApprovingRouter || this.isCrossChain) && !this.swapBtn.rightIcon.visible)
                        this.swapBtn.rightIcon.visible = true;
                },
                onApproved: async (token, data) => {
                    if (this.isCrossChain) {
                        this.crossChainApprovalStatus = global_1.ApprovalStatus.NONE;
                    }
                    else {
                        this.setMapStatus('approve', data.key, global_1.ApprovalStatus.NONE);
                    }
                    if (this.swapBtn.rightIcon.visible)
                        this.swapBtn.rightIcon.visible = false;
                    await this.handleAddRoute();
                },
                onApprovingError: async (token, err) => {
                    this.showResultMessage(this.openswapResult, 'error', err);
                    this.crossChainApprovalStatus = global_1.ApprovalStatus.TO_BE_APPROVED;
                    if (this.swapBtn.rightIcon.visible)
                        this.swapBtn.rightIcon.visible = false;
                },
                onPaying: async (receipt, data) => {
                    this.showResultMessage(this.openswapResult, 'success', receipt);
                    this.onSwapConfirming(data.key);
                },
                onPaid: async (data) => {
                    components_2.application.EventBus.dispatch("Paid" /* Paid */);
                    this.onSwapConfirmed({ key: data.key, isCrossChain: this.isCrossChain });
                    await this.updateBalance();
                },
                onPayingError: async (err) => {
                    this.showResultMessage(this.openswapResult, 'error', err);
                }
            });
        }
        async onRevertSwap() {
            if (this.isCrossChain)
                return;
            this.onUpdateEstimatedPosition(!this.isEstimated('from'), true);
            [this.fromToken, this.toToken] = [this.toToken, this.fromToken];
            [this.fromInputValue, this.toInputValue] = [this.toInputValue, this.fromInputValue];
            [this.payBalance.caption, this.receiveBalance.caption] = [this.receiveBalance.caption, this.payBalance.caption];
            [this.fromTokenSymbol, this.toTokenSymbol] = [this.toTokenSymbol, this.fromTokenSymbol];
            this.firstTokenSelection.token = this.fromToken;
            this.secondTokenSelection.token = this.toToken;
            this.payCol.clearInnerHTML();
            this.receiveCol.clearInnerHTML();
            this.payCol.appendChild(this.$render("i-input", { class: "token-input", width: "100%", placeholder: "0.0", inputType: "number", value: this.getInputValue(true), onKeyUp: this.onTokenInputChange.bind(this) }));
            this.receiveCol.appendChild(this.$render("i-input", { class: "token-input", width: "100%", placeholder: "0.0", inputType: "number", value: this.getInputValue(false), onKeyUp: this.onTokenInputChange.bind(this) }));
            this.redirectToken();
            this.onUpdateSliderValue();
            await this.handleAddRoute();
        }
        tipFormatter(value) {
            return `${Number(value).toFixed()}%`;
        }
        setupCrossChainPopup() {
            var _a, _b, _c;
            const arrows = this.swapModal.querySelectorAll('i-icon.arrow-down');
            if (!this.isCrossChain) {
                arrows.forEach((arrow) => {
                    arrow.classList.remove('arrow-down--chain');
                });
            }
            else {
                arrows.forEach((arrow) => {
                    arrow.classList.add('arrow-down--chain');
                });
            }
            (_a = this.lbReminderRejected) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
            if (this.isCrossChain && this.srcChain && this.desChain) {
                this.srcChainFirstPanel.classList.remove('hidden');
                this.targetChainFirstPanel.classList.remove('hidden');
                this.srcChainTokenImage.url = assets_2.default.fullPath(this.srcChain.img);
                this.srcChainTokenLabel.caption = this.srcChain.name;
                this.targetChainTokenImage.url = assets_2.default.fullPath(this.desChain.img);
                this.targetChainTokenLabel.caption = this.desChain.name;
                const { sourceVaultToken, targetVaultToken, sourceRouteObj, vaultTokenFromSourceChain, vaultTokenToTargetChain } = this.record;
                if (sourceVaultToken && sourceRouteObj) {
                    this.srcChainSecondPanel.classList.remove('hidden');
                    this.srcChainVaultImage.url = assets_2.default.fullPath(this.srcChain.img);
                    this.srcChainVaultLabel.caption = this.srcChain.name;
                    this.srcVaultTokenImage.url = assets_2.default.fullPath(store_1.getTokenIconPath(sourceVaultToken, this.srcChain.chainId));
                    this.srcVaultTokenLabel.caption = sourceVaultToken.symbol;
                    this.srcVaultTokenValue.caption = global_1.formatNumber(vaultTokenFromSourceChain);
                    (_b = this.lbReminderRejected) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
                    this.lbReminderRejected.caption = `If the order is not executed in the target chain, the estimated withdrawalble amount is <b class="text-pink">${global_1.formatNumber(vaultTokenFromSourceChain)} ${sourceVaultToken === null || sourceVaultToken === void 0 ? void 0 : sourceVaultToken.symbol}</b>`;
                }
                else {
                    this.srcChainSecondPanel.classList.add('hidden');
                }
                if (targetVaultToken && targetVaultToken.symbol !== ((_c = this.toToken) === null || _c === void 0 ? void 0 : _c.symbol)) {
                    this.targetChainSecondPanel.classList.remove('hidden');
                    this.targetChainVaultImage.url = assets_2.default.fullPath(this.desChain.img);
                    this.targetChainVaultLabel.caption = this.desChain.name;
                    this.targetVaultTokenImage.url = assets_2.default.fullPath(store_1.getTokenIconPath(targetVaultToken, this.desChain.chainId));
                    this.targetVaultTokenLabel.caption = targetVaultToken.symbol;
                    this.targetVaultTokenValue.caption = global_1.formatNumber(vaultTokenToTargetChain);
                    // Hide vault info at toToken
                    this.crossChainVaultInfoVstack.classList.add('hidden');
                }
                else {
                    this.targetChainSecondPanel.classList.add('hidden');
                    // Show vault info at the end if vaultTokenSymbol same as toToken
                    this.crossChainVaultInfoVstack.classList.remove('hidden');
                }
            }
            else {
                this.srcChainFirstPanel.classList.add('hidden');
                this.targetChainFirstPanel.classList.add('hidden');
                this.srcChainSecondPanel.classList.add('hidden');
                this.targetChainSecondPanel.classList.add('hidden');
                this.crossChainVaultInfoVstack.classList.add('hidden');
            }
        }
        handleSwapPopup() {
            var _a, _b, _c, _d, _e;
            if (!this.record)
                return;
            this.setupCrossChainPopup();
            const slippageTolerance = store_1.getSlippageTolerance();
            this.fromTokenImage.url = assets_2.default.fullPath(store_1.getTokenIconPath(this.fromToken, this.chainId));
            this.fromTokenLabel.caption = (_b = (_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol) !== null && _b !== void 0 ? _b : '';
            this.fromTokenValue.caption = global_1.formatNumber(this.fromInputValue, 4);
            this.toTokenImage.url = assets_2.default.fullPath(store_1.getTokenIconPath(this.toToken, this.isCrossChain ? (_c = this.desChain) === null || _c === void 0 ? void 0 : _c.chainId : this.chainId));
            this.toTokenLabel.caption = (_e = (_d = this.toToken) === null || _d === void 0 ? void 0 : _d.symbol) !== null && _e !== void 0 ? _e : '';
            this.toTokenValue.caption = global_1.formatNumber(this.toInputValue, 4);
            const minimumReceived = this.getMinReceivedMaxSold();
            if (minimumReceived || minimumReceived == 0) {
                this.payOrReceiveValue.caption = global_1.formatNumber(minimumReceived, 4);
            }
            else {
                this.payOrReceiveValue.caption = ' - ';
            }
            this.payOrReceiveToken.caption = this.isFrom ? this.fromTokenLabel.caption : this.toTokenLabel.caption;
            this.estimateMsg = `${this.isFrom ? 'Input' : 'Output'} is estimated. If the price change by more than ${slippageTolerance}%, your transaction will revert`;
            this.payOrReceiveText = this.isFrom ? 'You will pay at most' : 'You will receive at least';
            this.priceInfo2.Items = this.getPriceInfo();
            this.swapModal.visible = true;
        }
        doSwap() {
            this.approvalModelAction.doPayAction(this.record);
        }
        onCloseSwapModal() {
            this.swapModal.visible = false;
        }
        onUpdateToken(token, isFrom) {
            var _a, _b;
            if (!token)
                return;
            const balance = this.getBalance(token, !isFrom && this.isCrossChain);
            if (isFrom) {
                this.fromToken = token;
                const enabled = !this.isMaxDisabled();
                this.fromSlider.enabled = enabled;
                this.maxButton.enabled = enabled;
                /*if (this.toToken?.symbol === token.symbol && !this.isCrossChain) {
                  this.initRoutes();
                  this.toToken = undefined;
                  this.toInputValue = new BigNumber(0);
                  this.receiveBalance.caption = 'Balance: 0';
                  this.secondTokenSelection.token = undefined;
                  this.updateTokenInput(false, true);
                  this.priceInfo.Items = this.getPriceInfo();
                }*/
                if (this.fromInputValue.gt(0)) {
                    const fromInput = (_a = this.payCol.getElementsByTagName('I-INPUT')) === null || _a === void 0 ? void 0 : _a[0];
                    // const toInput = this.receiveCol.getElementsByTagName('I-INPUT')?.[0] as Input;
                    const limit = global_1.limitDecimals(this.fromInputValue.toFixed(), token.decimals || 18);
                    if (!this.fromInputValue.eq(limit)) {
                        if (fromInput) {
                            fromInput.value = limit;
                        }
                        this.fromInputValue = new eth_wallet_1.BigNumber(limit);
                    }
                }
                else if (this.fromInputValue.isZero()) {
                    this.onUpdateEstimatedPosition(true);
                }
                this.payBalance.caption = `Balance: ${global_1.formatNumber(balance, 4)} ${token.symbol}`;
                this.updateTokenInput(true);
            }
            else {
                this.toToken = token;
                /*if (this.fromToken?.symbol === token.symbol && !this.isCrossChain) {
                  this.initRoutes();
                  this.fromToken = undefined;
                  this.fromSlider.enabled = false;
                  this.onUpdateSliderValue(0);
                  this.maxButton.enabled = false;
                  this.fromInputValue = new BigNumber(0);
                  this.payBalance.caption = 'Balance: 0';
                  this.firstTokenSelection.token = undefined;
                  this.updateTokenInput(true, true);
                  this.priceInfo.Items = this.getPriceInfo();
                }*/
                if (this.toInputValue.gt(0)) {
                    const toInput = (_b = this.receiveCol.getElementsByTagName('I-INPUT')) === null || _b === void 0 ? void 0 : _b[0];
                    const limit = global_1.limitDecimals(this.toInputValue.toFixed(), token.decimals || 18);
                    if (!this.toInputValue.eq(limit)) {
                        if (toInput) {
                            toInput.value = limit;
                        }
                        this.toInputValue = new eth_wallet_1.BigNumber(limit);
                    }
                }
                else if (this.toInputValue.isZero()) {
                    this.onUpdateEstimatedPosition(false);
                }
                this.receiveBalance.caption = `Balance: ${global_1.formatNumber(balance, 4)} ${token.symbol}`;
                this.updateTokenInput(false);
            }
            this.onUpdateSliderValue();
        }
        async onSelectToken(token, isFrom) {
            this.firstTokenSelection.enabled = false;
            this.secondTokenSelection.enabled = false;
            if (token.isNew && store_1.isWalletConnected()) {
                await store_1.tokenStore.updateAllTokenBalances();
                this.allTokenBalancesMap = store_1.tokenStore.tokenBalances;
            }
            this.onUpdateToken(token, isFrom);
            this.redirectToken();
            await this.handleAddRoute();
            this.firstTokenSelection.enabled = true;
            this.secondTokenSelection.enabled = true;
        }
        setApprovalSpenderAddress() {
            var _a;
            const item = this.record;
            // if (this.isCrossChain && item.contractAddress){
            //   setApprovalModalSpenderAddress(Market.HYBRID, item.contractAddress)
            // } else if (item?.provider && this.availableMarkets.includes(item.provider)) {
            //   const market = ProviderConfigMap[item.key].marketCode;
            //   setApprovalModalSpenderAddress(market);
            // } else {
            //   setApprovalModalSpenderAddress(Market.HYBRID);
            // }
            const market = ((_a = store_1.getProviderByKey(item.provider)) === null || _a === void 0 ? void 0 : _a.key) || '';
            swap_utils_1.setApprovalModalSpenderAddress(market);
        }
        getInputValue(isFrom) {
            const token = isFrom ? this.fromToken : this.toToken;
            const value = isFrom ? this.fromInputValue : this.toInputValue;
            if (!value || value.isNaN())
                return '';
            return global_1.limitDecimals(value.toFixed(), (token === null || token === void 0 ? void 0 : token.decimals) || 18);
        }
        async updateTokenInput(isFrom, init) {
            const _col = isFrom ? this.payCol : this.receiveCol;
            const label = _col.querySelector('i-label');
            if (init && !label) {
                _col.innerHTML = '';
                const label = await components_2.Label.create();
                label.caption = " - ";
                label.classList.add("text-value");
                label.classList.add("text-right");
                _col.appendChild(label);
            }
            else if (!init && label) {
                _col.removeChild(label);
                const input = await components_2.Input.create();
                input.width = '100%';
                input.placeholder = '0.0';
                input.inputType = 'number';
                input.value = this.getInputValue(isFrom);
                input.onKeyUp = this.onTokenInputChange.bind(this);
                input.classList.add("token-input");
                _col.appendChild(input);
            }
        }
        addToMetamask(event, token) {
            event.stopPropagation();
            return window.ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {
                        address: token.address,
                        symbol: token.symbol,
                        decimals: token.decimals,
                        image: token.logoURI
                    },
                },
            });
        }
        toggleShowRoutes(source) {
            this.listRouting.classList.toggle('active');
            const items = this.listRouting.querySelectorAll('i-panel.pnl-routing');
            if (this.listRouting.classList.contains('active')) {
                items.forEach((elm) => {
                    elm.classList.remove('hidden');
                });
                this.showIcon.name = 'angle-up';
                this.showCaption.caption = "Show Less";
            }
            else {
                items.forEach((elm, idx) => {
                    if (idx != 0) {
                        elm.classList.add('hidden');
                    }
                });
                this.showIcon.name = 'angle-down';
                this.showCaption.caption = "Show More";
            }
        }
        async onSelectRouteItem(source, item) {
            if (source.classList.contains("routing-selected"))
                return;
            const selected = this.listRouting.querySelector(".routing-selected");
            selected === null || selected === void 0 ? void 0 : selected.classList.remove("routing-selected");
            source.classList.add("routing-selected");
            if (this.isFrom) {
                if (this.payCol.children) {
                    let balanceValue = item.amountIn;
                    const input = this.payCol.children[0];
                    input.value = this.fixedNumber(balanceValue);
                    this.fromInputValue = typeof balanceValue !== 'object' ? new eth_wallet_1.BigNumber(balanceValue) : balanceValue;
                }
            }
            else {
                if (this.receiveCol.children) {
                    let balanceValue = item.amountOut;
                    const input = this.receiveCol.children[0];
                    input.value = this.fixedNumber(balanceValue);
                    this.toInputValue = typeof balanceValue !== 'object' ? new eth_wallet_1.BigNumber(balanceValue) : balanceValue;
                }
            }
            this.swapBtn.classList.remove('hidden');
            this.record = item;
            if (this.isCrossChain && this.fromToken && !this.fromToken.isNative) {
                try {
                    this.setApprovalSpenderAddress();
                    await this.approvalModelAction.checkAllowance(this.fromToken, this.fromInputValue.toFixed());
                }
                catch (e) {
                    console.log('Cannot check the Approval status (Cross Chain)', e);
                }
            }
            this.swapButtonText = this.getSwapButtonText();
            const enabled = !this.isSwapButtonDisabled();
            this.swapBtn.enabled = enabled;
            const isButtonLoading = this.isButtonLoading();
            if (this.swapBtn.rightIcon.visible != isButtonLoading) {
                this.swapBtn.rightIcon.visible = isButtonLoading;
            }
            this.priceInfo.Items = this.getPriceInfo();
        }
        onTokenInputChange(source) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(async () => {
                var _a, _b, _c, _d;
                const fromInput = (_a = this.payCol.getElementsByTagName('I-INPUT')) === null || _a === void 0 ? void 0 : _a[0];
                const toInput = (_b = this.receiveCol.getElementsByTagName('I-INPUT')) === null || _b === void 0 ? void 0 : _b[0];
                const isFrom = source.isSameNode(fromInput);
                const amount = source.value;
                if (global_1.isInvalidInput(amount)) {
                    this.resetValuesByInput();
                    if (fromInput)
                        fromInput.value = '0';
                    if (toInput)
                        toInput.value = '0';
                    return;
                }
                const limit = isFrom ? (_c = this.fromToken) === null || _c === void 0 ? void 0 : _c.decimals : (_d = this.toToken) === null || _d === void 0 ? void 0 : _d.decimals;
                const value = new eth_wallet_1.BigNumber(global_1.limitDecimals(amount, limit || 18));
                if (!value.gt(0)) {
                    this.resetValuesByInput();
                    if (isFrom && toInput) {
                        toInput.value = '0';
                    }
                    else if (!isFrom && fromInput) {
                        fromInput.value = '0';
                    }
                }
                else {
                    let valueChanged = false;
                    const isLastDot = amount.indexOf('.') === amount.length - 1;
                    if (isFrom) {
                        if (!this.fromInputValue.eq(value)) {
                            this.fromInputValue = value;
                            this.onUpdateEstimatedPosition(false, true);
                            valueChanged = true;
                        }
                        if (!isLastDot)
                            fromInput.value = value.toFixed();
                    }
                    else {
                        if (!this.toInputValue.eq(value)) {
                            this.toInputValue = value;
                            this.onUpdateEstimatedPosition(true, true);
                            valueChanged = true;
                        }
                        if (!isLastDot)
                            toInput.value = value.toFixed();
                    }
                    this.redirectToken();
                    if (valueChanged)
                        await this.handleAddRoute();
                    this.onUpdateSliderValue();
                }
            }, 1000);
        }
        resetValuesByInput() {
            this.onUpdateSliderValue(0);
            this.initRoutes();
            this.priceInfo.Items = this.getPriceInfo();
            this.fromInputValue = new eth_wallet_1.BigNumber(0);
            this.toInputValue = new eth_wallet_1.BigNumber(0);
            this.redirectToken();
        }
        initRoutes() {
            this.listRouting.innerHTML = '';
            this.routeFound.caption = '0 Route(s) Found';
            this.toggleRoutes.classList.add('hidden');
            this.record = null;
            this.isPriceToggled = false;
            this.swapBtn.classList.add('hidden');
        }
        async handleAddRoute() {
            var _a, _b, _c;
            if (!this.fromToken || !this.toToken || !(this.fromInputValue.gt(0) || this.toInputValue.gt(0)))
                return;
            this.initRoutes();
            this.disableSelectChain(true);
            this.disableSelectChain(true, true);
            let listRouting = [];
            if (!this.isCrossChain) {
                listRouting = await swap_utils_1.getAllRoutesData(this.fromToken, this.toToken, this.fromInputValue, this.toInputValue, this.isFrom);
                listRouting = listRouting.map((v) => {
                    // const config = ProviderConfigMap[v.provider];
                    return Object.assign(Object.assign({}, v), { isHybrid: false // config.marketCode == Market.HYBRID,
                     });
                });
            }
            else if (this.srcChain && this.desChain) {
                const tokenIn = Object.assign({}, this.fromToken);
                const tokenOut = Object.assign({}, this.toToken);
                listRouting = await swap_utils_1.getAvailableRouteOptions({
                    fromChainId: this.srcChain.chainId,
                    toChainId: this.desChain.chainId,
                    tokenIn: tokenIn,
                    tokenOut: tokenOut,
                    amountIn: this.fromInputValue
                });
                listRouting = listRouting.map((v) => {
                    let route = {};
                    if (v.sourceRouteObj) {
                        const amountOut = v.targetRouteObj ? v.targetRouteObj.amountOut : v.sourceRouteObj.amountOut;
                        route = Object.assign(Object.assign(Object.assign({}, v), v.sourceRouteObj), { tradeFee: v.tradeFee, price: v.price, amountOut: new eth_wallet_1.BigNumber(amountOut) });
                        if (v.targetRouteObj) {
                            const config = store_1.getProviderByKey(v.targetRouteObj.provider); // ProviderConfigMap[v.targetRouteObj.provider];
                            if (config) {
                                route.targetRouteObj = Object.assign(Object.assign({}, route.targetRouteObj), { caption: config.caption || '', route: v.targetRouteObj.bestRoute, isHybrid: false // config.marketCode == Market.HYBRID,
                                 });
                            }
                            else {
                                route.targetRouteObj = undefined;
                            }
                        }
                    }
                    else {
                        route = Object.assign(Object.assign(Object.assign({}, v), v.targetRouteObj), { tradeFee: v.tradeFee, price: v.price });
                    }
                    return Object.assign(Object.assign({}, route), { fromAmount: new eth_wallet_1.BigNumber(route.fromAmount) });
                });
                if (listRouting.length) {
                    (_a = this.minSwapHintLabel) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
                }
                else {
                    (_b = this.minSwapHintLabel) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
                }
            }
            this.swapModalConfirmBtn.caption = 'Confirm Swap';
            this.swapModalConfirmBtn.enabled = true;
            this.record = listRouting[0] || null;
            if (listRouting[0] && this.isCrossChain) {
                const assetSymbol = listRouting[0].targetVaultToken.symbol;
                const { vaultAddress, vaultRegistryAddress, tokenAddress: vaultTokenAddress, softCap } = swap_utils_1.bridgeVaultConstantMap[assetSymbol === 'USDT.e' ? 'USDT' : assetSymbol][this.desChain.chainId];
                const [vault, bonds, oraclePriceMap] = await Promise.all([
                    crosschain_utils_1.getBridgeVault(this.desChain.chainId, vaultAddress),
                    crosschain_utils_1.getBondsInBridgeVault(this.desChain.chainId, vaultRegistryAddress),
                    swap_utils_1.getOraclePriceMap(this.desChain.chainId)
                ]);
                const assetBalance = (_c = vault.lpAssetBalance) !== null && _c !== void 0 ? _c : 0;
                const assetDecimal = listRouting[0].targetVaultToken.decimals;
                const targetVaultAssetBalance = (new eth_wallet_1.BigNumber(assetBalance)).shiftedBy(-assetDecimal);
                const targetVaultBondBalance = bonds.reduce((acc, cur) => {
                    var _a;
                    if (cur.chainId !== ((_a = this.desChain) === null || _a === void 0 ? void 0 : _a.chainId))
                        return acc;
                    acc = acc.plus((new eth_wallet_1.BigNumber(cur.bond)).shiftedBy(-18));
                    return acc;
                }, new eth_wallet_1.BigNumber(0));
                const vaultTokenToTargetChain = new eth_wallet_1.BigNumber(listRouting[0].vaultTokenToTargetChain);
                const vaultToUsdPrice = oraclePriceMap[vaultTokenAddress.toLowerCase()]; // This will be the vaultToken -> USD Price
                const oswapToUsdPrice = oraclePriceMap[swap_utils_1.bridgeVaultConstantMap['OSWAP'][this.desChain.chainId].tokenAddress.toLowerCase()];
                const vaultToOswapPrice = vaultToUsdPrice.div(oswapToUsdPrice); // This will vaultToken -> oswap price;
                this.targetVaultAssetBalanceLabel1.caption = `Vault Asset Balance: ${global_1.formatNumber(targetVaultAssetBalance.toNumber(), 4)} ${assetSymbol}`;
                this.targetVaultAssetBalanceLabel2.caption = `Vault Asset Balance: ${global_1.formatNumber(targetVaultAssetBalance.toNumber(), 4)} ${assetSymbol}`;
                if (!vault.vaultGroup) {
                    this.targetVaultBondBalanceLabel1.caption = `Vault Bond Balance: ${global_1.formatNumber(targetVaultBondBalance.toNumber(), 4)} ${assetSymbol}`;
                    this.targetVaultBondBalanceLabel2.caption = `Vault Bond Balance: ${global_1.formatNumber(targetVaultBondBalance.toNumber(), 4)} ${assetSymbol}`;
                }
                else if (vault.vaultGroup === 'OSWAP') {
                    this.targetVaultBondBalanceLabel1.caption = `Vault Bond Balance: ${global_1.formatNumber(targetVaultBondBalance.toNumber(), 4)} OSWAP`;
                    this.targetVaultBondBalanceLabel2.caption = `Vault Bond Balance: ${global_1.formatNumber(targetVaultBondBalance.toNumber(), 4)} OSWAP`;
                }
                else {
                    this.targetVaultBondBalanceLabel1.caption = `Vault Bond Balance: ${global_1.formatNumber(targetVaultBondBalance.toNumber(), 4)} OSWAP ≈ ${global_1.formatNumber(targetVaultBondBalance.div(vaultToOswapPrice).toNumber(), 4)} ${assetSymbol}`;
                    this.targetVaultBondBalanceLabel2.caption = `Vault Bond Balance: ${global_1.formatNumber(targetVaultBondBalance.toNumber(), 4)} OSWAP ≈ ${global_1.formatNumber(targetVaultBondBalance.div(vaultToOswapPrice).toNumber(), 4)} ${assetSymbol}`;
                }
                this.crossChainSoftCapLabel1.caption = softCap ? `Cap: ${softCap} ${assetSymbol}` : "-";
                this.crossChainSoftCapLabel2.caption = softCap ? `Cap: ${softCap} ${assetSymbol}` : "-";
                if (softCap && vaultTokenToTargetChain.toNumber() >= softCap) {
                    this.swapModalConfirmBtn.caption = 'Cap Reached';
                    this.swapModalConfirmBtn.enabled = false;
                }
                else if (vaultTokenToTargetChain.gt(targetVaultAssetBalance) || vaultTokenToTargetChain.multipliedBy(vaultToOswapPrice).gt(targetVaultBondBalance)) {
                    this.swapModalConfirmBtn.caption = 'Exceed Vault Asset Balance or Bond Balance';
                    this.swapModalConfirmBtn.enabled = false;
                }
                else {
                    this.swapModalConfirmBtn.enabled = true;
                }
            }
            this.lastUpdated = 0;
            this.disableSelectChain(false);
            this.disableSelectChain(false, true);
            this.swapButtonStatusMap = {};
            this.approveButtonStatusMap = {};
            this.registerPairButtonStatusMap = {};
            this.initRoutes();
            const pricePercent = this.getPricePercent(listRouting, false);
            this.listRouting.innerHTML = '';
            let nodeItems = [];
            for (let index = 0; index < listRouting.length; index++) {
                const option = listRouting[index];
                const approveButtonStatus = option.isApproveButtonShown ? global_1.ApprovalStatus.TO_BE_APPROVED : global_1.ApprovalStatus.NONE;
                this.approveButtonStatusMap[option.key] = approveButtonStatus;
                this.swapButtonStatusMap[option.key] = global_1.ApprovalStatus.TO_BE_APPROVED;
                nodeItems.push(await this.addRoute(option, index, pricePercent));
            }
            this.listRouting.clearInnerHTML();
            this.listRouting.append(...nodeItems);
            let unregisteredPairAddresses = listRouting.filter(v => v.bestSmartRoute).flatMap((v) => v.bestSmartRoute).filter((v) => !v.isRegistered).map((v) => v.pairAddress);
            unregisteredPairAddresses.forEach((v) => this.registerPairButtonStatusMap[v] = global_1.ApprovalStatus.TO_BE_APPROVED);
            if (this.isCrossChain && listRouting[0])
                this.crossChainApprovalStatus = listRouting[0].isApproveButtonShown ? global_1.ApprovalStatus.TO_BE_APPROVED : global_1.ApprovalStatus.NONE;
            this.routeFound.caption = listRouting.length + ' Route(s) Found';
            if (listRouting.length > 1)
                this.toggleRoutes.classList.remove('hidden');
            else if (!listRouting.length) {
                this.priceInfo.Items = this.getPriceInfo();
                if (this.isEstimated('to')) {
                    const input = this.receiveCol.children[0];
                    this.toInputValue = new eth_wallet_1.BigNumber(0);
                    input.value = '-';
                }
                else {
                    const input = this.payCol.children[0];
                    this.fromInputValue = new eth_wallet_1.BigNumber(0);
                    input.value = '-';
                }
            }
            if (this.record)
                this.setApprovalSpenderAddress();
        }
        getProviderCaption(provider, caption) {
            let providerObj;
            if (typeof provider === 'string') {
                providerObj = provider ? store_1.getProviderByKey(provider) : null;
                if (!providerObj)
                    return caption;
            }
            else {
                providerObj = provider;
            }
            const tooltip = JSON.stringify({ content: providerObj.caption });
            let tokenIcon = `<i-image tooltip='${tooltip}' url="${providerObj.image}" width="24" height="24"
      class="inline-block" fallbackUrl="${this.fallbackUrl}"></i-image>`;
            return `${tokenIcon}`;
        }
        async addRoute(item, index, pricePercent) {
            // const isHybrid = ProviderConfigMap[item.provider].marketCode === Market.HYBRID;
            const isBestSmartRoute = item.bestSmartRoute && item.bestSmartRoute.length; // isHybrid && item.bestSmartRoute && item.bestSmartRoute.length;
            const providerByKey = store_1.getProviderByKey(item.provider);
            const providerConfig = isBestSmartRoute ? item.bestSmartRoute : providerByKey ? [providerByKey] : [];
            let balanceValue = this.isFrom ? item.amountIn : item.amountOut;
            const swapBalance = global_1.formatNumber(balanceValue, 4);
            const routingMainPanel = new components_2.Panel();
            routingMainPanel.classList.add("flex", "pnl-routing");
            if (!this.listRouting.classList.contains('active') && index != 0) {
                routingMainPanel.classList.add("hidden");
            }
            routingMainPanel.onClick = (source) => this.onSelectRouteItem(source, item);
            const routingMainRow = new components_2.HStack();
            routingMainRow.width = "100%";
            routingMainRow.horizontalAlignment = "space-between";
            routingMainRow.verticalAlignment = "center";
            routingMainPanel.appendChild(routingMainRow);
            // Left Panel: marketing, best routes
            const leftPanel = new components_2.Panel();
            routingMainRow.appendChild(leftPanel);
            const marketRow = new components_2.HStack();
            marketRow.width = "100%";
            marketRow.verticalAlignment = "center";
            marketRow.wrap = "wrap";
            routingMainRow.horizontalAlignment = "start";
            routingMainRow.verticalAlignment = "center";
            const hasTargetRouteObj = this.isCrossChain && item.sourceRouteObj && item.targetRouteObj;
            if (this.isCrossChain && index) {
                routingMainPanel.classList.add('routing-disabled');
                routingMainPanel.tooltip.content = 'The optimised route will be automatically selected for cross-chain swapping';
                routingMainPanel.setAttribute('data-placement', 'right');
                routingMainPanel.onClick = () => { };
            }
            if (hasTargetRouteObj && this.srcChain) {
                const srcLabel = await components_2.Label.create();
                srcLabel.caption = `(${this.srcChain.name})`;
                srcLabel.classList.add("routing-name");
                marketRow.appendChild(srcLabel);
            }
            for (let index = 0; index < providerConfig.length; index++) {
                const config = providerConfig[index];
                const label = await components_2.Label.create();
                label.caption = this.getProviderCaption((config === null || config === void 0 ? void 0 : config.provider) || config, config.caption);
                label.classList.add("routing-name");
                marketRow.appendChild(label);
                if (index !== providerConfig.length - 1) {
                    const icon = new components_2.Icon(marketRow, {
                        width: 14,
                        height: 14,
                        fill: "#ffffff8c",
                        name: "angle-right"
                    });
                    marketRow.appendChild(icon);
                }
            }
            ;
            if (providerConfig.length == 1) {
                const label = await components_2.Label.create();
                label.caption = providerConfig[0].caption;
                marketRow.appendChild(label);
            }
            leftPanel.appendChild(marketRow);
            const routePanel = new components_2.Panel();
            const routeRow = new components_2.HStack();
            routeRow.width = "100%";
            routeRow.verticalAlignment = "center";
            routeRow.wrap = "wrap";
            for (let index = 0; index < item.bestRoute.length; index++) {
                const route = item.bestRoute[index];
                const label = await components_2.Label.create();
                label.caption = route.symbol;
                label.classList.add("routing-caption");
                routeRow.appendChild(label);
                if (index !== item.bestRoute.length - 1) {
                    const icon = new components_2.Icon(routeRow, {
                        width: 14,
                        height: 14,
                        fill: "#ffffff8c",
                        name: "arrow-right"
                    });
                    icon.classList.add("route-icon");
                    routeRow.appendChild(icon);
                }
            }
            routePanel.appendChild(routeRow);
            leftPanel.appendChild(routePanel);
            if (hasTargetRouteObj && this.desChain) {
                const routingTargetRow = new components_2.HStack();
                routingTargetRow.width = "100%";
                // routingTargetRow.justify = "space-between";
                routingTargetRow.verticalAlignment = "center";
                const routeTargetRow = new components_2.HStack();
                routeTargetRow.width = "100%";
                routeTargetRow.verticalAlignment = "center";
                leftPanel.appendChild(routingTargetRow);
                const targetLabel = await components_2.Label.create();
                targetLabel.caption = `(${this.desChain.name})`;
                targetLabel.classList.add("routing-name");
                routingTargetRow.appendChild(targetLabel);
                const isTargetHybrid = false; // ProviderConfigMap[item.targetRouteObj.provider].marketCode === Market.HYBRID;
                const isTargetBestSmartRoute = isTargetHybrid && item.targetRouteObj && item.targetRouteObj.bestSmartRoute && item.targetRouteObj.bestSmartRoute.length;
                if (isTargetBestSmartRoute) {
                    for (let idx = 0; idx < item.targetRouteObj.bestSmartRoute.length; idx++) {
                        const pair = item.targetRouteObj.bestSmartRoute[idx];
                        const label = await components_2.Label.create();
                        label.caption = this.getProviderCaption((pair === null || pair === void 0 ? void 0 : pair.provider) || pair, pair.caption);
                        label.classList.add("routing-name");
                        routingTargetRow.appendChild(label);
                        if (idx !== item.targetRouteObj.bestSmartRoute.length - 1) {
                            const icon = new components_2.Icon(routingTargetRow, {
                                width: 14,
                                height: 14,
                                fill: "#ffffff8c",
                                name: "angle-right"
                            });
                            routingTargetRow.appendChild(icon);
                        }
                    }
                    ;
                    leftPanel.appendChild(routingTargetRow);
                }
                else {
                    targetLabel.caption = `(${this.desChain.name}) ${this.getProviderCaption(item.targetRouteObj.provider, item.targetRouteObj.caption)} ${item.targetRouteObj.provider}`;
                }
                const groupTokens = (pairs) => {
                    let list = [];
                    if (!pairs)
                        return list;
                    pairs.forEach((pair, index) => {
                        if (index === 0) {
                            list.push(pair.fromToken);
                        }
                        list.push(pair.toToken);
                    });
                    return list;
                };
                const routes = isTargetBestSmartRoute ? groupTokens(item.targetRouteObj.bestSmartRoute) : item.targetRouteObj.route;
                for (let idx = 0; idx < routes.length; idx++) {
                    const token = routes[idx];
                    const label = await components_2.Label.create();
                    label.caption = token.symbol;
                    label.classList.add("routing-caption");
                    routeTargetRow.appendChild(label);
                    if (idx !== routes.length - 1) {
                        const icon = new components_2.Icon(routeTargetRow, {
                            width: 14,
                            height: 14,
                            fill: "#ffffff8c",
                            name: "arrow-right"
                        });
                        icon.classList.add("route-icon");
                        routeTargetRow.appendChild(icon);
                    }
                }
                ;
                const routeTargetPanel = new components_2.Panel();
                routeTargetPanel.classList.add("w-100");
                routeTargetPanel.appendChild(routeTargetRow);
                leftPanel.appendChild(routeTargetPanel);
            }
            //Right Panel: balance, price percent
            const rightPanel = new components_2.Panel();
            routingMainPanel.appendChild(rightPanel);
            const balancePanel = new components_2.Panel();
            balancePanel.classList.add("text-right");
            const balanceLabel = await components_2.Label.create();
            balanceLabel.caption = swapBalance;
            balanceLabel.classList.add("ml-auto");
            balanceLabel.classList.add("balanceValue");
            balancePanel.appendChild(balanceLabel);
            rightPanel.appendChild(balancePanel);
            if (index == 0) {
                if (pricePercent) {
                    const pricePercentPanel = new components_2.Panel();
                    pricePercentPanel.classList.add("text-right");
                    const pricePercentLabel = await components_2.Label.create();
                    pricePercentLabel.caption = pricePercent;
                    pricePercentLabel.classList.add("ml-auto");
                    pricePercentLabel.classList.add("price-percent");
                    pricePercentPanel.appendChild(pricePercentLabel);
                    rightPanel.appendChild(pricePercentPanel);
                }
                const bestPriceLabel = await components_2.Label.create();
                bestPriceLabel.caption = "Best Price";
                bestPriceLabel.classList.add("best-price");
                routingMainPanel.appendChild(bestPriceLabel);
                this.onSelectRouteItem(routingMainPanel, item);
            }
            return routingMainPanel;
        }
        getPricePercent(routes, isFrom) {
            if (routes && routes.length > 1) {
                const amountStr = isFrom ? 'amountIn' : 'amountOut';
                const firstAmount = new eth_wallet_1.BigNumber(routes[0][amountStr] || 0);
                const secondAmount = new eth_wallet_1.BigNumber(routes[1][amountStr] || 0);
                if (firstAmount.eq(0) || secondAmount.eq(0)) {
                    return 0;
                }
                let percent = new eth_wallet_1.BigNumber(0);
                if (isFrom) {
                    percent = secondAmount.minus(firstAmount).dividedBy(firstAmount);
                }
                else {
                    percent = firstAmount.minus(secondAmount).dividedBy(secondAmount);
                }
                percent = percent.multipliedBy(100);
                if (percent.gte(0.01)) {
                    return `Save ${global_1.formatNumber(percent.toNumber(), 2)}%`;
                }
            }
            return 0;
        }
        // Price Info
        onTogglePrice(priceInfo) {
            this.isPriceToggled = !this.isPriceToggled;
            priceInfo.Items = this.getPriceInfo();
        }
        getRate() {
            var _a, _b, _c, _d, _e, _f;
            const value = this.isPriceToggled ? (_a = this.record) === null || _a === void 0 ? void 0 : _a.priceSwap : (_b = this.record) === null || _b === void 0 ? void 0 : _b.price;
            let fromSymbol = (_c = this.fromToken) === null || _c === void 0 ? void 0 : _c.symbol;
            let toSymbol = (_d = this.toToken) === null || _d === void 0 ? void 0 : _d.symbol;
            if (this.isCrossChain) {
                const srcName = (_e = this.srcChain) === null || _e === void 0 ? void 0 : _e.name;
                const desName = (_f = this.desChain) === null || _f === void 0 ? void 0 : _f.name;
                if (srcName) {
                    fromSymbol = `${fromSymbol} (${srcName})`;
                }
                if (desName) {
                    toSymbol = `${toSymbol} (${desName})`;
                }
            }
            if (value || value == 0) {
                if (this.isPriceToggled) {
                    return `1 ${fromSymbol} ≈ ${global_1.formatNumber(value)} ${toSymbol}`;
                }
                return `1 ${toSymbol} ≈ ${global_1.formatNumber(value)} ${fromSymbol}`;
            }
            return '-';
        }
        getPriceImpact() {
            var _a;
            const value = (_a = this.record) === null || _a === void 0 ? void 0 : _a.priceImpact;
            if (value || value == 0) {
                return `${global_1.formatNumber(value)}%`;
            }
            return '-';
        }
        getMinimumReceived() {
            var _a, _b;
            const value = this.getMinReceivedMaxSold();
            if (value || value == 0) {
                if (this.isFrom) {
                    return `${global_1.formatNumber(value)} ${(_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol}`;
                }
                return `${global_1.formatNumber(value)} ${(_b = this.toToken) === null || _b === void 0 ? void 0 : _b.symbol}`;
            }
            return '-';
        }
        getTradeFeeExactAmount() {
            var _a, _b, _c, _d;
            const tradeFee = this.isCrossChain ? (_a = this.record) === null || _a === void 0 ? void 0 : _a.tradeFee : (_b = this.record) === null || _b === void 0 ? void 0 : _b.fromAmount.times((_c = this.record) === null || _c === void 0 ? void 0 : _c.tradeFee).toNumber();
            if (tradeFee || tradeFee == 0) {
                return `${global_1.formatNumber(tradeFee)} ${(_d = this.fromToken) === null || _d === void 0 ? void 0 : _d.symbol}`;
            }
            return '-';
        }
        getFeeDetails() {
            if (this.isCrossChain && this.record) {
                let record = this.record;
                let detail = [
                    {
                        title: "Source Chain Liquidity Fee",
                        description: "This fee is paid to the AMM Liquidity Providers on the Source Chain.",
                        value: record.fees.sourceRouteLiquidityFee,
                        isHidden: record.fees.sourceRouteLiquidityFee == 0
                    },
                    {
                        title: "Target Chain Liquidity Fee",
                        description: "This fee is paid to the AMM Liquidity Providers on the Target Chain.",
                        value: record.fees.targetRouteLiquidityFee,
                        isHidden: record.targetRouteObj.pairs.length == 0
                    },
                    {
                        title: "Base Fee",
                        description: "This fee is paid to the trolls to cover gas fee on the Target Chain",
                        value: record.fees.baseFee,
                    },
                    {
                        title: "Bridge Vault Liquidity Fee",
                        description: "This fee is paid to the Bridge Vault Liquidity Provider on Target Chain",
                        value: record.fees.transactionFee,
                    },
                    {
                        title: "Protocol Fee",
                        description: "This fee is paid to the troll owners on the Cross Chain Network",
                        value: record.fees.protocolFee,
                    },
                    {
                        title: "Imbalance Fee",
                        description: "This fee is acted as an incentive to balance the vault.",
                        value: record.fees.imbalanceFee,
                    }
                ];
                return detail.filter(v => !v.isHidden);
            }
            else if (!this.isCrossChain && this.record) {
                return [{
                        title: "Liquidity Provider Fee",
                        description: "This fee is paid to the AMM Liquidity Provider.",
                        value: this.record.tradeFee
                    }];
            }
            else {
                return [];
            }
        }
        getPriceInfo() {
            const rate = this.getRate();
            const priceImpact = this.getPriceImpact();
            const minimumReceived = this.getMinimumReceived();
            const tradeFeeExactAmount = this.getTradeFeeExactAmount();
            const fees = this.getFeeDetails();
            const countFees = fees.length;
            let feeTooltip;
            if (countFees === 1) {
                const fee = fees[0];
                feeTooltip = `${fee.description}`;
            }
            else if (countFees > 1) {
                feeTooltip = fees;
            }
            let info = [
                {
                    title: "Rate",
                    value: this.isValidToken ? rate : '-',
                    isToggleShown: this.record && this.isValidToken,
                },
                {
                    title: "Price Impact",
                    value: this.isValidToken ? priceImpact : '-',
                    isHidden: this.isCrossChain,
                },
                {
                    title: "Minimum Received",
                    value: this.isValidToken ? minimumReceived : '-',
                },
                {
                    title: "Transaction Fee",
                    value: this.isValidToken ? tradeFeeExactAmount : '-',
                    tooltip: feeTooltip,
                    onClick: countFees > 1 ? () => this.showModalFees() : null
                },
                {
                    title: "Estimated Time",
                    value: this.isValidToken && this.record ? '30 seconds' : '-',
                    isHidden: !this.isCrossChain,
                },
            ];
            return info.filter((f) => !f.isHidden);
        }
        getBalance(token, isCrossChain) {
            var _a;
            if (token && this.allTokenBalancesMap) {
                const address = token.address || '';
                let balance = 0;
                if (isCrossChain) {
                    balance = token.isNative ? this.targetChainTokenBalances[token.symbol] : this.targetChainTokenBalances[address.toLowerCase()];
                }
                else {
                    balance = address ? (_a = this.allTokenBalancesMap[address.toLowerCase()]) !== null && _a !== void 0 ? _a : 0 : this.allTokenBalancesMap[token.symbol] || 0;
                }
                return balance;
            }
            return 0;
        }
        async updateBalance() {
            if (this.isCrossChain)
                await this.updateTargetChainBalances();
            if (store_1.isWalletConnected())
                await store_1.tokenStore.updateAllTokenBalances();
            this.allTokenBalancesMap = store_1.isWalletConnected() ? store_1.tokenStore.tokenBalances : [];
            if (this.fromToken) {
                const balance = this.getBalance(this.fromToken);
                this.payBalance.caption = `Balance: ${global_1.formatNumber(balance, 4)} ${this.fromToken.symbol}`;
            }
            if (this.toToken) {
                const balance = this.getBalance(this.toToken, this.isCrossChain);
                this.receiveBalance.caption = `Balance: ${global_1.formatNumber(balance, 4)} ${this.toToken.symbol}`;
            }
            const enabled = !this.isMaxDisabled();
            this.fromSlider.enabled = enabled;
            this.maxButton.enabled = enabled;
        }
        async updateTargetChainBalances() {
            var _a, _b;
            const targetChainId = ((_a = this.desChain) === null || _a === void 0 ? void 0 : _a.chainId) || this.targetChainId;
            if (targetChainId) {
                const tokenBalanceObj = await crosschain_utils_1.getTargetChainTokenInfoObj(targetChainId);
                this.targetChainTokenBalances = store_1.isWalletConnected() ? tokenBalanceObj.balances : [];
                this.targetChainTokenMap = (_b = tokenBalanceObj.tokenMap) !== null && _b !== void 0 ? _b : {};
            }
        }
        getSwapButtonText() {
            var _a;
            const isApproveButtonShown = this.isCrossChain ? this.crossChainApprovalStatus !== global_1.ApprovalStatus.NONE : this.isApproveButtonShown;
            if (!store_1.isWalletConnected()) {
                return "Connect Wallet";
            }
            if (isApproveButtonShown) {
                const status = this.isCrossChain ? this.crossChainApprovalStatus : this.approveButtonStatus;
                switch (status) {
                    case global_1.ApprovalStatus.APPROVING:
                        return "Approving";
                    case global_1.ApprovalStatus.TO_BE_APPROVED:
                        return "Approve";
                }
                return '';
            }
            else {
                if (this.isSwapping) {
                    return this.isCrossChain ? "Creating Order" : "Swapping";
                }
                if (this.isInsufficientBalance) {
                    return `Insufficient ${(_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol} balance`;
                }
                if (this.isCrossChain) {
                    return "Create Order";
                }
                if (this.isPriceImpactTooHigh) {
                    return "Turn on Expert Mode";
                }
                if (this.hasRegisterPair) {
                    return "Register Pair";
                }
                return "Swap";
            }
        }
        getWarningMessageText() {
            var _a, _b, _c;
            const tokens = [(_a = this.fromToken) === null || _a === void 0 ? void 0 : _a.symbol, (_b = this.toToken) === null || _b === void 0 ? void 0 : _b.symbol];
            if (tokens.every(v => v === 'ETH' || v === 'WETH')) {
                return 'Invalid pair';
            }
            if (!this.record) {
                return '';
            }
            if (this.record.key === 'Oracle' && (this.record.fromAmount.isZero() || this.record.toAmount.isZero())) {
                return 'Circuit breaker triggered';
            }
            let balance = this.getBalance(this.fromToken);
            if (this.record.fromAmount.gt(balance)) {
                return `Insufficient ${(_c = this.fromToken) === null || _c === void 0 ? void 0 : _c.symbol} balance`;
            }
            if (this.record.priceImpact > 15 && !store_1.isExpertMode()) {
                return priceImpactTooHighMsg;
            }
            return '';
        }
        setMapStatus(type, key, status) {
            let mapStatus = {};
            if (type === 'register') {
                mapStatus = this.registerPairButtonStatusMap;
                mapStatus[key] = status;
                this.registerPairButtonStatusMap = Object.assign({}, mapStatus);
            }
            else if (type === 'approve') {
                mapStatus = this.approveButtonStatusMap;
                mapStatus[key] = status;
                this.approveButtonStatusMap = Object.assign({}, mapStatus);
            }
            else {
                mapStatus = this.swapButtonStatusMap;
                mapStatus[key] = status;
                this.swapButtonStatusMap = Object.assign({}, mapStatus);
            }
            this.swapButtonText = this.getSwapButtonText();
        }
        isButtonLoading() {
            if (this.isApproveButtonShown || (this.isCrossChain && this.crossChainApprovalStatus === global_1.ApprovalStatus.APPROVING)) {
                return this.isApprovingRouter;
            }
            return this.isSwapping;
        }
        isSwapButtonDisabled() {
            const warningMessageText = this.getWarningMessageText();
            return (store_1.isWalletConnected() && (warningMessageText != '' && !this.isPriceImpactTooHigh));
        }
        get bestSmartRoute() {
            if (this.record) {
                const item = this.record;
                if (item.isHybrid && item.bestSmartRoute) {
                    return item.bestSmartRoute;
                }
            }
            return [];
        }
        ;
        get hasRegisterPair() {
            const statusMap = this.registerPairButtonStatusMap;
            return this.bestSmartRoute.some((pair) => {
                return Object.keys(statusMap).includes(pair.pairAddress) && statusMap[pair.pairAddress] !== global_1.ApprovalStatus.NONE;
            });
        }
        get pairs() {
            return this.bestSmartRoute.filter((pair) => {
                return [global_1.ApprovalStatus.TO_BE_APPROVED, global_1.ApprovalStatus.APPROVING].includes(this.registerPairButtonStatus(pair));
            });
        }
        get isRegisteringPair() {
            return this.pairs.some((pair) => this.registerPairButtonStatus(pair) === global_1.ApprovalStatus.APPROVING);
        }
        renderRegisterPairUI() {
            let listMarket = [];
            let listPairAddress = [];
            this.pairs.forEach((pair) => {
                var _a;
                const market = (_a = store_1.getProviderByKey(pair.provider)) === null || _a === void 0 ? void 0 : _a.key; // ProviderConfigMap[pair.provider].marketCode;
                listMarket.push(market);
                listPairAddress.push(pair.pairAddress);
            });
            this.registerPairsParams = {
                listMarket,
                listPairAddress,
            };
            this.registerBtn.caption = this.isRegisteringPair ? 'Registering' : 'Register';
            this.registerBtn.rightIcon.visible = this.isRegisteringPair;
            this.registerBtn.enabled = !this.isRegisteringPair;
            this.registerPanel.clearInnerHTML();
            this.pairs.forEach((pair) => {
                const { fromToken, toToken } = pair;
                this.registerPanel.appendChild(this.$render("i-hstack", { verticalAlignment: "center", horizontalAlignment: "space-between", margin: { bottom: 20 } },
                    this.$render("i-image", { width: 40, height: 40, tooltip: {
                            content: `${fromToken.name} (${fromToken.symbol})`
                        }, url: assets_2.default.fullPath(store_1.getTokenIconPath(fromToken, this.chainId)) }),
                    this.$render("i-icon", { margin: { left: 10, right: 10 }, name: "arrow-right", fill: '#fff', width: 15, height: 15 }),
                    this.$render("i-image", { width: 40, height: 40, tooltip: {
                            content: `${toToken.name} (${toToken.symbol})`
                        }, url: assets_2.default.fullPath(store_1.getTokenIconPath(toToken, this.chainId)) })));
            });
            this.registerPairModal.visible = true;
        }
        onClickSwapButton() {
            if (!store_1.isWalletConnected()) {
                this.$eventBus.dispatch("connectWallet" /* ConnectWallet */);
                return;
            }
            if (!this.record || this.isSwapButtonDisabled())
                return;
            const isApproveButtonShown = this.isCrossChain ? this.crossChainApprovalStatus !== global_1.ApprovalStatus.NONE : this.isApproveButtonShown;
            if (isApproveButtonShown) {
                this.onApproveRouterMax();
                return;
            }
            if (this.isPriceImpactTooHigh) {
                this.$eventBus.dispatch("ShowExpertModal" /* ShowExpertModal */);
                return;
            }
            if (this.hasRegisterPair) {
                this.renderRegisterPairUI();
                return;
            }
            this.handleSwapPopup();
        }
        onSliderChange(source, event) {
            const value = source.value;
            this.onSetMaxBalance(value);
        }
        onUpdateSliderValue(value) {
            if (value != null) {
                this.fromSlider.value = value;
                return;
            }
            const balance = this.getBalance(this.fromToken);
            const maxBal = new eth_wallet_1.BigNumber(balance);
            // TODO: < 0.0001
            if (maxBal.lte(0)) {
                this.fromSlider.value = 0;
                return;
            }
            const input = this.payCol.children[0];
            const val = new eth_wallet_1.BigNumber(input === null || input === void 0 ? void 0 : input.value).dividedBy(maxBal).multipliedBy(100).toNumber();
            if (isNaN(val))
                return;
            this.fromSlider.value = val > 100 ? 100 : val;
        }
        async onRenderIconList() {
            // this.iconList.innerHTML = '';
            // this.availableMarkets.forEach(async (item: any) => {
            //   const config = getProviderList().find(p => p.key === item)  // ProviderConfigMap[item];
            //   if (config) {
            //     const image = new Image();
            //     image.url = config.image;
            //     image.tooltip.content = config.key;
            //     image.classList.add('icon-item');
            //     this.iconList.appendChild(image);
            //   }
            // })
        }
        onRenderPriceInfo() {
            if (!this.priceInfo) {
                this.priceInfo = new price_info_1.PriceInfo();
                this.priceInfo.width = 'auto';
                this.priceInfo.height = 'auto';
                this.swapContainer.appendChild(this.priceInfo);
                this.priceInfo.onTogglePrice = this.onTogglePrice.bind(this);
            }
            this.priceInfo.Items = this.getPriceInfo();
            if (!this.priceInfo2) {
                this.priceInfo2 = new price_info_1.PriceInfo();
                this.priceInfo2.width = 'auto';
                this.priceInfo2.height = 'auto';
                this.priceInfo2.onTogglePrice = this.onTogglePrice.bind(this);
            }
            this.priceInfoContainer.appendChild(this.priceInfo2);
        }
        // Cross Chain
        get isCrossChainEnabled() {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return false;
            if (store_1.getSiteEnv() === global_1.SITE_ENV.MAINNET) {
                (_a = this.srcChainBox) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
                (_b = this.desChainBox) === null || _b === void 0 ? void 0 : _b.classList.add('hidden');
                return false;
            }
            let chainId = store_1.getChainId();
            if (!this.supportedChainList.some((v) => v.chainId == chainId)) {
                (_c = this.srcChainBox) === null || _c === void 0 ? void 0 : _c.classList.add('hidden');
                (_d = this.desChainBox) === null || _d === void 0 ? void 0 : _d.classList.add('hidden');
                return false;
            }
            (_e = this.srcChainBox) === null || _e === void 0 ? void 0 : _e.classList.remove('hidden');
            if ((_f = this.srcChain) === null || _f === void 0 ? void 0 : _f.isCrossChainSupported) {
                (_g = this.desChainBox) === null || _g === void 0 ? void 0 : _g.classList.remove('hidden');
            }
            else {
                (_h = this.desChainBox) === null || _h === void 0 ? void 0 : _h.classList.add('hidden');
            }
            return true;
        }
        ;
        get isCrossChain() {
            var _a, _b, _c, _d;
            const srcChainId = (_a = this.srcChain) === null || _a === void 0 ? void 0 : _a.chainId;
            const desChainId = (_b = this.desChain) === null || _b === void 0 ? void 0 : _b.chainId;
            const isCrossChainSupported = (_c = this.srcChain) === null || _c === void 0 ? void 0 : _c.isCrossChainSupported;
            if (this.isCrossChainEnabled && isCrossChainSupported && srcChainId != desChainId) {
                return true;
            }
            (_d = this.minSwapHintLabel) === null || _d === void 0 ? void 0 : _d.classList.add('hidden');
            return false;
        }
        ;
        get targetChainTokenDataList() {
            let dataList = [];
            if (this.targetChainTokenMap && this.isCrossChain) {
                for (const key of Object.keys(this.targetChainTokenMap)) {
                    let tokenAddress = key;
                    let tokenObject = this.targetChainTokenMap[tokenAddress];
                    if (this.targetChainTokenBalances) {
                        dataList.push(Object.assign(Object.assign({}, tokenObject), { status: false, balance: this.targetChainTokenBalances[tokenAddress] ? this.targetChainTokenBalances[tokenAddress] : 0 }));
                    }
                    else {
                        dataList.push(Object.assign(Object.assign({}, tokenObject), { status: null }));
                    }
                }
            }
            return dataList;
        }
        ;
        get fromTokenToVaultMap() {
            let map = {};
            for (const vaultGroup of store_1.BridgeVaultGroupList) {
                if (vaultGroup.deprecated)
                    continue;
                const vaults = vaultGroup.vaults;
                if (!vaults[this.chainId] || Object.keys(vaults).length < 2)
                    continue;
                const currentChainTokenAddress = vaults[this.chainId].tokenAddress.toLowerCase();
                map[currentChainTokenAddress] = vaults;
            }
            return map;
        }
        ;
        get isMetaMask() {
            return store_1.getWalletProvider() === eth_wallet_1.WalletPlugin.MetaMask;
        }
        initExpertModal() {
            this.expertModal = new expert_mode_settings_1.ExpertModeSettings();
            this.swapComponent.appendChild(this.expertModal);
            this.$eventBus.register(this, "ShowExpertModal" /* ShowExpertModal */, () => {
                this.expertModal.showModal();
            });
        }
        async initData() {
            if (!this.isInited) {
                await this.initWalletData();
                store_1.setCurrentChainId(store_1.getDefaultChainId());
                this.initTokenSelection();
                await this.initApprovalModelAction();
                this.isInited = true;
            }
        }
        render() {
            return (this.$render("i-panel", { id: "swapComponent", background: { color: '#0c1234' } },
                this.$render("i-panel", { class: "pageblock-swap" },
                    this.$render("i-panel", { id: "swapContainer" },
                        this.$render("i-panel", { class: "bill-board" },
                            this.$render("i-image", { url: assets_2.default.fullPath("img/swap/swap.svg") })),
                        this.$render("i-panel", null,
                            this.$render("i-hstack", { wrap: "wrap", horizontalAlignment: "space-between", verticalAlignment: "center" },
                                this.$render("i-panel", { id: "iconList", class: "icon-list" }),
                                this.$render("i-panel", { id: "actionSetting", class: "action-setting hidden" },
                                    this.$render("i-label", { caption: this.lastUpdatedText }),
                                    this.$render("i-icon", { width: 26, height: 26, class: "rounded-icon", name: "sync-alt", fill: "white", onClick: this.onRefresh }),
                                    this.$render("i-icon", { width: 26, height: 26, class: "rounded-icon", name: "cog", fill: "white", onClick: this.onSetting })))),
                        this.$render("i-panel", { class: "content-swap" },
                            this.$render("i-hstack", { class: "my-2", verticalAlignment: "center", horizontalAlignment: "space-between" },
                                this.$render("i-label", { class: "custom-label", caption: "You Pay" })),
                            this.$render("i-vstack", { id: "srcChainBox", visible: false, class: "my-2 w-100" },
                                this.$render("i-hstack", { verticalAlignment: "center", horizontalAlignment: "space-between" },
                                    this.$render("i-label", { class: "text--grey", caption: "Selected Source Chain" }),
                                    this.$render("i-label", { id: "srcChainLabel", caption: "-" })),
                                this.$render("i-panel", { id: "srcChainList", class: "icon-list", maxWidth: "100%" })),
                            this.$render("i-range", { id: "fromSlider", class: "custom--slider", width: '100%', min: 0, max: 100, tooltipFormatter: this.tipFormatter, tooltipVisible: true, stepDots: 5, onChanged: swap_utils_1.debounce(this.onSliderChange.bind(this), 500, this) }),
                            this.$render("i-panel", { class: "token-box" },
                                this.$render("i-vstack", { id: "payContainer", class: "input--token-container" },
                                    this.$render("i-hstack", { class: "balance-info", horizontalAlignment: "space-between", verticalAlignment: "center", width: "100%" },
                                        this.$render("i-label", { id: "payBalance", class: "text--grey ml-auto", caption: "Balance: 0" }),
                                        this.$render("i-button", { id: "maxButton", class: "btn-max", caption: "Max", enabled: false, onClick: () => this.onSetMaxBalance() })),
                                    this.$render("i-panel", { class: "bg-box", width: "100%" },
                                        this.$render("i-hstack", { class: "input--token-box", verticalAlignment: "center", horizontalAlignment: "space-between", width: "100%" },
                                            this.$render("i-vstack", null,
                                                this.$render("swap-token-selection", { disableSelect: true, id: "firstTokenSelection" })),
                                            this.$render("i-vstack", { id: "payCol" },
                                                this.$render("i-label", { class: "text-value text-right", caption: " - " })))))),
                            this.$render("i-panel", { id: "minSwapHintLabel", visible: false, class: "hints" },
                                this.$render("i-icon", { name: "star", fill: "#f7d063", width: 13, height: 13 }),
                                this.$render("i-label", { caption: "No crosschain routes are found. You may try updating the input amount or selecting another token." })),
                            this.$render("i-panel", { class: "toggle-reverse" },
                                this.$render("i-image", { id: "toggleReverseImage", width: 32, height: 32, class: "icon-swap rounded-icon", url: assets_2.default.fullPath("img/swap/icon-swap.png"), onClick: this.onRevertSwap.bind(this) })),
                            this.$render("i-panel", { class: "token-box" },
                                this.$render("i-vstack", { id: "receiveContainer", class: "input--token-container" },
                                    this.$render("i-vstack", { class: "balance-info", width: "100%" },
                                        this.$render("i-vstack", { width: "100%" },
                                            this.$render("i-label", { class: "custom-label", caption: "You Receive" })),
                                        this.$render("i-vstack", { id: "desChainBox", visible: false, class: "my-2 w-100" },
                                            this.$render("i-hstack", { verticalAlignment: "center", horizontalAlignment: "space-between" },
                                                this.$render("i-label", { class: "text--grey", caption: "Selected Destination Chain" }),
                                                this.$render("i-label", { id: "desChainLabel", class: "ml-auto", caption: "-" })),
                                            this.$render("i-panel", { id: "desChainList", class: "icon-list", maxWidth: "100%" })),
                                        this.$render("i-vstack", { class: "text-right", width: "100%" },
                                            this.$render("i-label", { id: "receiveBalance", class: "text--grey ml-auto", caption: "Balance: 0" }))),
                                    this.$render("i-panel", { class: "bg-box", width: "100%" },
                                        this.$render("i-hstack", { class: "input--token-box", verticalAlignment: "center", horizontalAlignment: "space-between", width: "100%" },
                                            this.$render("i-vstack", null,
                                                this.$render("swap-token-selection", { disableSelect: true, id: "secondTokenSelection" })),
                                            this.$render("i-vstack", { id: "receiveCol" },
                                                this.$render("i-label", { class: "text-value text-right", caption: " - " }))),
                                        this.$render("i-panel", { id: "routingContainer", class: "routing-container" },
                                            this.$render("i-panel", { id: "listRouting" }),
                                            this.$render("i-hstack", { horizontalAlignment: 'space-between', verticalAlignment: 'center' },
                                                this.$render("i-label", { id: "routeFound", class: "total-routes text--grey", caption: "0 Route(s) Found" }),
                                                this.$render("i-panel", { id: "toggleRoutes", class: "toggle-routes hidden", onClick: this.toggleShowRoutes },
                                                    this.$render("i-label", { id: "showCaption", caption: "Show More" }),
                                                    this.$render("i-icon", { id: "showIcon", width: 30, height: 30, fill: "#fff", name: "angle-down" })))))))),
                        this.$render("i-panel", { class: "swap-btn-container", width: "100%" },
                            this.$render("i-button", { id: "swapBtn", class: "btn-swap btn-os hidden", height: 67, caption: this.swapButtonText, rightIcon: { spin: true, visible: false }, onClick: this.onClickSwapButton.bind(this) }))),
                    this.$render("i-modal", { id: "swapModal", class: "custom-modal", title: "Confirm Swap", closeIcon: { name: 'times' } },
                        this.$render("i-hstack", { verticalAlignment: 'center', horizontalAlignment: 'start' },
                            this.$render("i-panel", { id: "srcChainFirstPanel", class: "row-chain" },
                                this.$render("i-image", { id: "srcChainTokenImage", width: "30px", height: "30px", url: "#" }),
                                this.$render("i-label", { id: "srcChainTokenLabel", class: "token-name", caption: "" }),
                                this.$render("i-icon", { name: "minus", fill: '#fff', width: 28, height: 10 })),
                            this.$render("i-panel", { class: "row-chain" },
                                this.$render("i-image", { id: "fromTokenImage", width: "30px", height: "30px", url: "#" }),
                                this.$render("i-label", { id: "fromTokenLabel", class: "token-name", caption: "" })),
                            this.$render("i-label", { id: "fromTokenValue", class: "token-value", caption: " - " })),
                        this.$render("i-icon", { name: "arrow-down", class: "arrow-down", fill: "#fff", width: 28, height: 28 }),
                        this.$render("i-panel", { id: "srcChainSecondPanel" },
                            this.$render("i-hstack", { verticalAlignment: 'center', horizontalAlignment: 'start' },
                                this.$render("i-panel", { class: "row-chain" },
                                    this.$render("i-image", { id: "srcChainVaultImage", width: "30px", height: "30px", url: "#" }),
                                    this.$render("i-label", { id: "srcChainVaultLabel", class: "token-name", caption: "" }),
                                    this.$render("i-icon", { name: "minus", fill: '#fff', width: 28, height: 10 })),
                                this.$render("i-panel", { class: "row-chain" },
                                    this.$render("i-image", { id: "srcVaultTokenImage", width: "30px", height: "30px", url: "#" }),
                                    this.$render("i-label", { id: "srcVaultTokenLabel", class: "token-name", caption: "" })),
                                this.$render("i-label", { id: "srcVaultTokenValue", class: "token-value", caption: "-" })),
                            this.$render("i-icon", { name: "arrow-down", class: "arrow-down", fill: "#fff", width: 28, height: 28 })),
                        this.$render("i-panel", { id: "targetChainSecondPanel" },
                            this.$render("i-hstack", { verticalAlignment: 'center', horizontalAlignment: 'start' },
                                this.$render("i-panel", { class: "row-chain" },
                                    this.$render("i-image", { id: "targetChainVaultImage", width: "30px", height: "30px", url: "#" }),
                                    this.$render("i-label", { id: "targetChainVaultLabel", class: "token-name", caption: "" }),
                                    this.$render("i-icon", { name: "minus", fill: '#fff', width: 28, height: 10 })),
                                this.$render("i-panel", { class: "row-chain" },
                                    this.$render("i-image", { id: "targetVaultTokenImage", width: "30px", height: "30px", url: "#" }),
                                    this.$render("i-label", { id: "targetVaultTokenLabel", class: "token-name", caption: "" })),
                                this.$render("i-label", { id: "targetVaultTokenValue", class: "token-value", caption: "-" })),
                            this.$render("i-vstack", { class: "text-right" },
                                this.$render("i-label", { id: "crossChainSoftCapLabel1", class: "text--grey ml-auto" }),
                                this.$render("i-label", { id: "targetVaultAssetBalanceLabel1", class: "text--grey ml-auto", caption: "Vault Asset Balance: 0" }),
                                this.$render("i-label", { id: "targetVaultBondBalanceLabel1", class: "text--grey ml-auto", caption: "Vault Bond Balance: 0" })),
                            this.$render("i-icon", { name: "arrow-down", class: "arrow-down", fill: "#fff", width: 28, height: 28 })),
                        this.$render("i-hstack", { class: "mb-1", verticalAlignment: 'center', horizontalAlignment: 'start' },
                            this.$render("i-panel", { id: "targetChainFirstPanel", class: "row-chain" },
                                this.$render("i-image", { id: "targetChainTokenImage", width: "30px", height: "30px", url: "#" }),
                                this.$render("i-label", { id: "targetChainTokenLabel", class: "token-name", caption: "" }),
                                this.$render("i-icon", { name: "minus", fill: '#fff', width: 28, height: 10 })),
                            this.$render("i-panel", { class: "row-chain" },
                                this.$render("i-image", { id: "toTokenImage", width: "30px", height: "30px", url: "#" }),
                                this.$render("i-label", { id: "toTokenLabel", class: "token-name", caption: "" })),
                            this.$render("i-label", { id: "toTokenValue", class: "token-value text-primary bold", caption: " - " })),
                        this.$render("i-vstack", { id: "crossChainVaultInfoVstack", class: "text-right" },
                            this.$render("i-label", { id: "crossChainSoftCapLabel2", class: "text--grey ml-auto" }),
                            this.$render("i-label", { id: "targetVaultAssetBalanceLabel2", class: "text--grey ml-auto", caption: "Vault Asset Balance: 0" }),
                            this.$render("i-label", { id: "targetVaultBondBalanceLabel2", class: "text--grey ml-auto", caption: "Vault Bond Balance: 0" })),
                        this.$render("i-panel", { class: "mb-1" },
                            this.$render("i-label", { caption: this.estimateMsg })),
                        this.$render("i-panel", { class: "mb-1" },
                            this.$render("i-label", { caption: this.payOrReceiveText }),
                            this.$render("i-label", { id: "payOrReceiveValue", class: "text-primary bold", caption: "" }),
                            this.$render("i-label", { id: "payOrReceiveToken", caption: "" })),
                        this.$render("i-panel", { id: "priceInfoContainer", class: "bg-box mt-1 mb-1", width: "100%" }),
                        this.$render("i-label", { id: "lbReminderRejected", class: "flex", margin: { top: 8, bottom: 16 } }),
                        this.$render("i-panel", { class: "swap-btn-container", width: "100%" },
                            this.$render("i-button", { id: "swapModalConfirmBtn", class: "btn-swap btn-os", height: "auto", caption: "Confirm Swap", onClick: this.doSwap }))),
                    this.$render("i-modal", { id: "registerPairModal", title: "Register Pair on your Hybrid Router!", closeIcon: { name: 'times' } },
                        this.$render("i-label", { caption: "Congratulation on being the first one to use the below pairs on your hybrid router! Please click 'register' below to perform the swap. Approved to be distributed to our beloved community contributors!" }),
                        this.$render("i-panel", { margin: { top: 30, bottom: 10 }, width: "100%" },
                            this.$render("i-label", { font: { color: "#ffffff8c", bold: false }, caption: "Pair(s) to be register" })),
                        this.$render("i-hstack", { verticalAlignment: "center", horizontalAlignment: "space-between" },
                            this.$render("i-panel", { id: "registerPanel", class: "register-panel" }),
                            this.$render("i-panel", null,
                                this.$render("i-button", { id: "registerBtn", width: 150, class: "btn-register btn-os", height: "auto", rightIcon: { spin: true, visible: false }, onClick: () => this.onRegister(), caption: "Register" })))),
                    this.$render("i-modal", { id: "modalViewOrder", class: "bg-modal custom-modal", title: "Cross Chain", closeIcon: { name: 'times' } },
                        this.$render("i-panel", { class: "i-modal_content" },
                            this.$render("i-panel", { class: "mt-1" },
                                this.$render("i-hstack", { verticalAlignment: 'center', horizontalAlignment: 'center', class: "mb-1" },
                                    this.$render("i-image", { width: 50, height: 50, url: assets_2.default.fullPath('img/success-icon.svg') })),
                                this.$render("i-hstack", { verticalAlignment: 'center', class: "flex-col" },
                                    this.$render("i-label", { caption: "The order was created successfully!" }),
                                    this.$render("i-label", { caption: "Do you want to view the record?" })),
                                this.$render("i-hstack", { verticalAlignment: 'center', horizontalAlignment: 'center', class: "mt-1" },
                                    this.$render("i-button", { caption: "Cancel", class: "btn-os btn-cancel", onClick: () => this.closeViewOrderModal() }),
                                    this.$render("i-button", { caption: "View Order", class: "btn-os btn-submit", onClick: () => this.onViewOrder() }))))),
                    this.$render("i-modal", { id: "modalFees", class: "bg-modal custom-modal", title: "Transaction Fee Details", closeIcon: { name: 'times' } },
                        this.$render("i-panel", { class: "i-modal_content" },
                            this.$render("i-panel", null,
                                this.$render("i-vstack", { id: "feesInfo" }),
                                this.$render("i-hstack", { verticalAlignment: "center", horizontalAlignment: "center", margin: { top: 16, bottom: 8 } },
                                    this.$render("i-button", { caption: "Close", class: "btn-os btn-submit", onClick: () => this.closeModalFees() })))))),
                this.$render("swap-config", { id: "cardConfig", visible: false })));
        }
    };
    __decorate([
        components_2.observable()
    ], SwapBlock.prototype, "swapButtonText", void 0);
    __decorate([
        components_2.observable()
    ], SwapBlock.prototype, "lastUpdatedText", void 0);
    __decorate([
        components_2.observable()
    ], SwapBlock.prototype, "estimateMsg", void 0);
    __decorate([
        components_2.observable()
    ], SwapBlock.prototype, "payOrReceiveText", void 0);
    SwapBlock = __decorate([
        components_2.customModule
    ], SwapBlock);
    exports.SwapBlock = SwapBlock;
});
