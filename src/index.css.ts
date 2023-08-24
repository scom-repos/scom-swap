import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

const colorVar = {
  // primaryButton: 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box',
  // primaryGradient: 'linear-gradient(255deg,#f15e61,#b52082)',
  darkBg: '#181E3E 0% 0% no-repeat padding-box',
  // primaryDisabled: 'transparent linear-gradient(270deg,#351f52,#552a42) 0% 0% no-repeat padding-box !important'
}

export const swapStyle = Styles.style({
  $nest: {
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
    '::-webkit-scrollbar': {
      width: '3px',
    },
    '::-webkit-scrollbar-thumb': {
      background: Theme.colors.primary.main,
      borderRadius: '5px',
    },
    '*': {
      boxSizing: 'border-box',
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
    '#swapContainer i-button#btn-max:not(.disabled):hover': {
      transition: 'all .2s ease-out',
      background: 'var(--max-button-hover-background)',
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
      marginInline: 'auto',
      $nest: {
        '#btnToken': {
          height: 'auto !important',
          background: `${Theme.background.main} !important`,
          padding: '0.5rem !important',
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
    '.content-swap': {
      marginTop: '0.5rem',
      marginBottom: '1rem',
      borderRadius: '1rem'
    },
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
      background: 'var(--max-button-background)',
      color: Theme.colors.primary.contrastText
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
    // '#receiveCol': {
    //   maxWidth: 'calc(100% - 9rem)',
    // },
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
    '.btn-os': {
      background: 'var(--primary-button-background)',
      height: 'auto !important',
      color: Theme.text.primary,
      transition: 'background .3s ease',
      fontSize: '1rem',
      fontWeight: 'bold',
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
      background: 'var(--primary-button-hover-background)',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      opacity: .9
    },
    '.btn-os:not(.disabled):not(.is-spinning):focus': {
      boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)'
    },
    '.btn-os.disabled, .btn-os.is-spinning': {
      background: 'var(--primary-button-disabled-background)',
      opacity: 1
    },
    '.dark-modal > div > div': {
      background: colorVar.darkBg,
      borderRadius: 5
    }
  }
})
