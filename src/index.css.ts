import { Styles } from '@ijstech/components';
import Assets from './assets';
const Theme = Styles.Theme.ThemeVars;

const colorVar = {
  primaryButton: 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box',
  primaryGradient: 'linear-gradient(255deg,#f15e61,#b52082)',
  darkBg: '#181E3E 0% 0% no-repeat padding-box',
  primaryDisabled: 'transparent linear-gradient(270deg,#351f52,#552a42) 0% 0% no-repeat padding-box !important'
}

Styles.fontFace({
  fontFamily: "Montserrat Regular",
  src: `url("${Assets.fullPath('fonts/montserrat/Montserrat-Regular.ttf')}") format("truetype")`,
  fontWeight: 'nomal',
  fontStyle: 'normal'
})

Styles.fontFace({
  fontFamily: "Montserrat Bold",
  src: `url("${Assets.fullPath('fonts/montserrat/Montserrat-Bold.ttf')}") format("truetype")`,
  fontWeight: 'bold',
  fontStyle: 'normal'
})

Styles.fontFace({
  fontFamily: "Montserrat Light",
  src: `url("${Assets.fullPath('fonts/montserrat/Montserrat-Light.ttf')}") format("truetype")`,
  fontStyle: 'normal'
})

Styles.fontFace({
  fontFamily: "Montserrat Medium",
  src: `url("${Assets.fullPath('fonts/montserrat/Montserrat-Medium.ttf')}") format("truetype")`,
  fontStyle: 'normal'
})

Styles.fontFace({
  fontFamily: "Montserrat SemiBold",
  src: `url("${Assets.fullPath('fonts/montserrat/Montserrat-SemiBold.ttf')}") format("truetype")`,
  fontStyle: 'normal'
})

Styles.fontFace({
  fontFamily: "Raleway Regular",
  src: `url("${Assets.fullPath('fonts/raleway/Raleway-Regular.ttf')}") format("truetype")`,
  fontWeight: 'nomal',
  fontStyle: 'normal'
})

Styles.fontFace({
  fontFamily: "Raleway Bold",
  src: `url("${Assets.fullPath('fonts/raleway/Raleway-Bold.ttf')}") format("truetype")`,
  fontWeight: 'bold',
  fontStyle: 'normal'
})

Styles.fontFace({
  fontFamily: "Raleway Light",
  src: `url("${Assets.fullPath('fonts/raleway/Raleway-Light.ttf')}") format("truetype")`,
  fontStyle: 'normal'
})

Styles.fontFace({
  fontFamily: "Raleway Medium",
  src: `url("${Assets.fullPath('fonts/raleway/Raleway-Medium.ttf')}") format("truetype")`,
  fontStyle: 'normal'
})

Styles.fontFace({
  fontFamily: "Raleway SemiBold",
  src: `url("${Assets.fullPath('fonts/raleway/Raleway-SemiBold.ttf')}") format("truetype")`,
  fontStyle: 'normal'
})

Styles.cssRule('.pageblock-swap', {
  $nest: {
    // 'i-label': {
    //   color: Theme.text.primary
    // },
    '.btn-register': {
      padding: '0.75rem',
      display: 'flex',
      alignItems: 'center',
      opacity: 1,
      color: Theme.colors.primary.contrastText,
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
      border: '2px solid #F15E61',
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
      background: 'linear-gradient(255deg,#f15e61,#b52082)',
      color: Theme.colors.primary.contrastText
    },
    '#swapContainer i-button:focus': {
      outline: 0,
      boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)'
    },
    '#swapContainer': {
      width: 720,
      maxWidth: '100%',
      minHeight: 340,
      padding: '1rem',
      marginInline: 'auto'
    },
    '.swap-flex--col': {
      flexDirection: 'column',
      $nest: {
        '& > i-vstack': {
          width: '100% !important'
        },
        '.custom-ic--swap': {
          bottom: '0 !important',
          transform: 'none !important'
        }
      }
    },
    '.visibility-hidden': {
      visibility: 'hidden'
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
      marginTop: '0.5rem',
      marginBottom: '1rem',
      borderRadius: '1rem',
      $nest: {
        'i-label.custom-label *': {
          fontSize: '1.125rem',
          // color: Theme.text.primary,
        }
      }
    },
    // '.input--token-container': {
    //   padding: '0.5rem 1rem',
    //   marginLeft: '-15px',
    //   marginRight: '-15px',
    // },
    'i-label.text--grey *': {
      color: Theme.text.primary,
      opacity: 0.55, // 'hsla(0,0%,100%,0.55)'
    },
    '.btn-max': {
      position: 'relative',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      padding: '0 0.5rem',
      marginLeft: '0.5rem',
      bottom: '1.5px',
      background: 'transparent linear-gradient(255deg,#e75b66,#b52082) 0% 0% no-repeat padding-box',
      color: Theme.colors.primary.contrastText
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
          background: Theme.background.main,
          backgroundImage: `linear-gradient(#f15e61, #f15e61)`,
          backgroundSize: '0% 100%',
        },
        'input[type="range"]::-webkit-slider-thumb': {
          backgroundColor: '#F15E61',
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
      margin: '0.5rem 0',
      border: '2px solid transparent',
      borderRadius: '1rem',
      $nest: {
        '&.bg-box--active': {
          borderColor: '#E53780'
        }
      }
    },
    '#swapContainer .input--token-box': {
      padding: '0.5rem 0.25rem',
      $nest: {
        '#btnToken': {
          height: 'auto !important'
        },
        'i-button.custom-btn': {
          // background: '#ffffff30',
          padding: '0.5rem',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: 700,
          lineHeight: 1.5,
          alignSelf: 'center',
          textAlign: 'center',
          opacity: 1,
          color: Theme.input.fontColor,
          $nest: {
            '&:not(.disabled):hover': {
              color: Theme.input.fontColor,
              // background: '#ffffff35'
            },
            '&> span': {
              verticalAlign: 'middle',
            },
            '&> i-icon': {
              maxWidth: 10,
              height: '16px !important',
              opacity: 0.5,
              marginRight: 'unset',
              fill: Theme.input.fontColor,
              $nest: {
                'svg': {
                  fill: `${Theme.input.fontColor} !important`
                }
              }
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
          color: Theme.input.fontColor,
          fontSize: '1.125rem',
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
        },
        '.custom-ic--swap': {
          bottom: -60,
          transform: 'rotate(90deg)',
          padding: '0.45rem !important'
        }
      }
    },
    '.rounded-icon': {
      display: 'inline-flex',
      padding: '3px',
      background: Theme.input.background,
      border: '2px solid transparent',
      borderRadius: '50%',
      cursor: 'pointer'
    },
    '.total-routes': {
      padding: '0.25rem 1rem 0.5rem'
    },
    '.swap-btn-container': {
      marginTop: 10,
      $nest: {
        '.btn-swap': {
          position: 'relative',
          width: '100%',
          borderRadius: '0.65rem',
          fontSize: '1.125rem',
          padding: '0.5rem 0.75rem',
          opacity: 1,
          color: Theme.colors.primary.contrastText
        }
      }
    },
    '#payCol, #receiveCol': {
      maxWidth: 'calc(100% - 9rem)',
    },
    '#tokenModal': {
      $nest: {
        '.modal': {
          background: Theme.background.modal,
          width: 492,
          padding: '0.75rem 1rem',
          borderRadius: '1rem',
          // color: Theme.text.primary
        },
        '.i-modal_header': {
          marginBottom: '1.5rem',
          paddingBottom: '0.5rem',
          borderBottom: `2px soid ${Theme.background.main}`,
          color: Theme.colors.primary.main,
          fontSize: '1.25rem',
          fontWeight: 700,
        },
        '.i-modal_header > i-icon': {
          fill: `${Theme.colors.primary.main} !important`
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
                  borderColor: Theme.divider,
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
              // color: 'rgba(255,255,255,0.55)'
              color: Theme.text.primary,
              opacity: 0.55
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
      // color: "#fff",
      background: Theme.background.modal,
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
      borderColor: Theme.divider
    },
    '.best-price': {
      color: Theme.colors.primary.contrastText,
      position: 'absolute',
      top: '-10px',
      left: '30px',
      background: 'linear-gradient(255deg,#f15e61,#b52082)',
      borderRadius: ' 0.75rem',
      padding: '0.15rem 1rem',
      zIndex: 1,
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
          // color: Theme.text.primary,
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
      // color: Theme.text.primary,
      background: Theme.background.modal,
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
      borderColor: Theme.divider
    },
    '.balanceValue': {
      textAlign: 'right',
      display: 'block'
    },
    '.price-percent *': {
      color: Theme.colors.secondary.main, // '#f7d063',
      whiteSpace: 'nowrap',
      textAlign: 'right'
    },
    '.w-100': {
      width: '100%',
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
          color: Theme.colors.secondary.main,
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
          borderColor: Theme.divider,
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
          background: Theme.background.modal,
          width: 490,
          maxWidth: '100%',
          padding: '0.75rem 1rem',
          borderRadius: '1rem',
          color: Theme.text.primary
        },
        '.i-modal_header': {
          marginBottom: '1.5rem',
          paddingBottom: '0.5rem',
          borderBottom: `2px soid ${Theme.background.main}`,
          color: Theme.colors.primary.main,
          fontSize: '1.25rem',
          fontWeight: 700,
          $nest: {
            '&> span': {
              color: Theme.colors.primary.main,
            },
            '&> i-icon': {
              fill: `${Theme.colors.primary.main} !important`
            },
            '& ~ i-icon': {
              display: 'inline-block',
              margin: '0.75rem 0',
              background: Theme.input.background,
              border: '2px solid transparent',
              borderRadius: '50%',
              padding: '0.25rem'
            }
          }
        },
      }
    },
    '#registerPairModal': {
      $nest: {
        '.modal': {
          background: Theme.background.modal,
          width: 420,
          maxWidth: '100%',
          padding: '0.75rem 1rem 1.25rem 1rem',
          borderRadius: '1rem',
          color: Theme.text.primary
        },
        '.i-modal_header': {
          marginBottom: '1.5rem',
          paddingBottom: '0.5rem',
          borderBottom: `2px soid ${Theme.background.main}`,
          color: Theme.colors.primary.main,
          fontSize: '1.25rem',
          fontWeight: 700,
          $nest: {
            '&> span': {
              color: Theme.colors.primary.main,
            },
            '.i-modal-close': {
              fill: `${Theme.colors.primary.main} !important`,
            }
          }
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
          background: Theme.input.background,
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
        'i-icon.custom-icon--fill': {
          fill: Theme.input.fontColor,
          $nest: {
            'svg': {
              fill: `${Theme.input.fontColor} !important`
            }
          }
        }
      }
    },
    '#openswapResult': {
      $nest: {
        '.modal': {
          background: Theme.background.modal,
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
              textAlign: 'center',
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
      color: Theme.text.primary,
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
        'i-icon.is-spin': {
          fill: Theme.colors.primary.contrastText,
          $nest: {
            'svg': {
              fill: Theme.colors.primary.contrastText
            }
          }
        }
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
})
