import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

// const colorVar = {
//   primaryButton: 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box',
//   primaryGradient: 'linear-gradient(255deg,#f15e61,#b52082)',
//   darkBg: '#181E3E 0% 0% no-repeat padding-box',
//   primaryDisabled: 'transparent linear-gradient(270deg,#351f52,#552a42) 0% 0% no-repeat padding-box !important'
// }

export const swapStyle = Styles.style({
  $nest: {
    '::-webkit-scrollbar': {
      width: '3px',
    },
    '::-webkit-scrollbar-thumb': {
      background: Theme.colors.primary.main,
      borderRadius: '5px',
    },
    // '*': {
    //   boxSizing: 'border-box',
    // },
    '#swapContainer': {
      // width: 720,
      // maxWidth: '100%',
      // minHeight: 340,
      // padding: '1rem',
      // marginInline: 'auto',
      $nest: {
        '#btnToken': {
          // height: 'auto !important',
          // background: `${Theme.background.main} !important`,
          // padding: '0.5rem !important',
          // borderRadius: '8px',
          // fontSize: '1rem',
          // fontWeight: 700,
          // lineHeight: 1.5,
          // alignSelf: 'center',
          // textAlign: 'center',
          // opacity: 1,
          // color: Theme.input.fontColor,
          $nest: {
            '&:not(.disabled):hover': {
              color: Theme.input.fontColor
            },
            // '&> span': {
            //   verticalAlign: 'middle',
            // },
            // '&> i-icon': {
            //   maxWidth: 10,
            //   height: '16px !important',
            //   opacity: 0.5,
            //   marginRight: 'unset',
            //   fill: Theme.input.fontColor,
            //   $nest: {
            //     'svg': {
            //       fill: `${Theme.input.fontColor} !important`
            //     }
            //   }
            // },
            '&> :not(:last-child)': {
              marginRight: '0.5rem'
            }
          }
        }
      }
    },
    // '.swap-flex--col': {
    //   flexDirection: 'column',
    //   $nest: {
    //     '& > i-vstack': {
    //       width: '100% !important'
    //     },
    //     '.custom-ic--swap': {
    //       margin: 'auto',
    //       bottom: '0 !important',
    //       transform: 'none !important'
    //     }
    //   }
    // },
    // '.visibility-hidden': {
    //   visibility: 'hidden'
    // },
    // '.content-swap': {
    //   marginTop: '0.5rem',
    //   marginBottom: '1rem',
    //   borderRadius: '1rem'
    // },
    // 'i-label.text--grey *': {
    //   color: Theme.text.primary,
    //   opacity: 0.55, // 'hsla(0,0%,100%,0.55)'
    // },
    '.btn-max': {
      // position: 'relative',
      // borderRadius: '0.5rem',
      // fontSize: '1rem',
      // padding: '0 0.5rem',
      // marginLeft: '0.5rem',
      // bottom: '1.5px',
      background: 'var(--max-button-background)',
      // color: Theme.colors.primary.contrastText
    },
    // '.bg-box': {
    //   margin: '0.5rem 0',
    //   border: '2px solid transparent',
    //   borderRadius: '1rem',
    //   $nest: {
    //     '&.bg-box--active': {
    //       borderColor: '#E53780'
    //     }
    //   }
    // },
    // '.rounded-icon': {
    //   display: 'inline-flex',
    //   padding: '3px',
    //   background: Theme.input.background,
    //   border: '2px solid transparent',
    //   borderRadius: '50%',
    //   cursor: 'pointer'
    // },
    // '.swap-btn-container': {
    //   marginTop: 10,
    //   $nest: {
    //     '.btn-swap': {
    //       position: 'relative',
    //       width: '100%',
    //       borderRadius: '0.65rem',
    //       fontSize: '1.125rem',
    //       padding: '0.5rem 0.75rem',
    //       opacity: 1,
    //       color: Theme.colors.primary.contrastText
    //     }
    //   }
    // },
    // '#receiveCol': {
    //   maxWidth: 'calc(100% - 9rem)',
    // },
    // '.hints': {
    //   display: 'flex',
    //   alignItems: 'center',
    //   marginTop: '-0.5rem',
    //   $nest: {
    //     '*': {
    //       fontSize: '0.8rem',
    //       opacity: 0.9,
    //     },
    //     'i-label *': {
    //       marginLeft: '0.25rem',
    //     },
    //   },
    // },
    '.chain-icon': {
      // margin: '0.25rem 0.5rem 0 0',
      // borderRadius: '50%',
      // border: '2px solid transparent',
      // padding: '0.25rem',
      // cursor: 'pointer',
      filter: 'grayscale(1)',
      $nest: {
        // '&.icon-disabled': {
        //   cursor: 'default',
        // },
        '&.icon-selected': {
          // borderColor: Theme.colors.primary.main,
          // cursor: 'default',
          filter: 'inherit',
        },
        // 'img': {
        //   width: '32px',
        //   height: '32px',
        // },
      },
    },
    // '.chain-text': {
    //   whiteSpace: 'nowrap',
    //   overflow: 'hidden !important',
    //   textOverflow: 'ellipsis'
    // },
    // '.cursor-default': {
    //   cursor: 'default !important',
    // },
    // '.hidden': {
    //   display: 'none !important'
    // },
    // '.custom-md--view': {
    //   $nest: {
    //     'i-label > *': {
    //       fontSize: '.875rem',
    //       wordBreak: 'normal'
    //     },
    //     '.i-modal_content': {
    //       padding: '0 1rem 1rem',
    //     },
    //     '.flex-col': {
    //       flexDirection: 'column',
    //     },
    //     'i-button': {
    //       display: 'flex',
    //       alignItems: 'center',
    //       justifyContent: 'center',
    //       width: '150px',
    //       height: '50px !important',
    //       fontWeight: 600,
    //       borderRadius: 5,
    //       margin: '0.5rem',
    //     }
    //   }
    // },
    // '.custom-modal': {
    //   $nest: {
    //     '.modal': {
    //       background: Theme.background.modal,
    //       width: 490,
    //       maxWidth: '100%',
    //       padding: '0.75rem 1rem',
    //       borderRadius: '1rem',
    //       color: Theme.text.primary
    //     },
    //     '.i-modal_header': {
    //       marginBottom: '1.5rem',
    //       paddingBottom: '0.5rem',
    //       borderBottom: `2px soid ${Theme.background.main}`,
    //       color: Theme.colors.primary.main,
    //       fontSize: '1.25rem',
    //       fontWeight: 700,
    //       $nest: {
    //         '&> span': {
    //           color: Theme.colors.primary.main,
    //         },
    //         '&> i-icon': {
    //           fill: `${Theme.colors.primary.main} !important`
    //         },
    //         '& ~ i-icon': {
    //           display: 'inline-block',
    //           margin: '0.75rem 0',
    //           background: Theme.input.background,
    //           border: '2px solid transparent',
    //           borderRadius: '50%',
    //           padding: '0.25rem'
    //         }
    //       }
    //     },
    //   }
    // },
    // '#registerPairModal': {
    //   $nest: {
    //     '.modal': {
    //       background: Theme.background.modal,
    //       width: 420,
    //       maxWidth: '100%',
    //       padding: '0.75rem 1rem 1.25rem 1rem',
    //       borderRadius: '1rem',
    //       color: Theme.text.primary
    //     },
    //     '.i-modal_header': {
    //       marginBottom: '1.5rem',
    //       paddingBottom: '0.5rem',
    //       borderBottom: `2px soid ${Theme.background.main}`,
    //       color: Theme.colors.primary.main,
    //       fontSize: '1.25rem',
    //       fontWeight: 700,
    //       $nest: {
    //         '&> span': {
    //           color: Theme.colors.primary.main,
    //         },
    //         '.i-modal-close': {
    //           fill: `${Theme.colors.primary.main} !important`,
    //         }
    //       }
    //     },
    //   }
    // },
    // '#swapModal': {
    //   $nest: {
    //     '.icon-swap': {
    //       margin: 0
    //     },
    //     'i-image:not(.rounded-icon)': {
    //       display: 'inline-block',
    //       marginRight: '0.5rem'
    //     },
    //     '#tokenReceiveValue': {
    //       margin: '0 5px'
    //     },
    //     '#payOrReceiveValue': {
    //       marginInline: '0.25rem',
    //     },
    //     '.text-primary *': {
    //       color: Theme.colors.primary.main,
    //     },
    //     '.price-info': {
    //       padding: '1rem'
    //     },
    //     '.arrow-down': {
    //       display: 'inline-block',
    //       margin: '0.75rem 0',
    //       background: Theme.input.background,
    //       border: '2px solid transparent',
    //       borderRadius: '50%',
    //       padding: '0.25rem'
    //     },
    //     '.arrow-down--chain': {
    //       margin: '0.75rem 6rem !important',
    //     },
    //     '.token-value': {
    //       marginLeft: 'auto',
    //     },
    //     '.token-value > *, #swapModal .token-name > *': {
    //       fontSize: '1.1rem'
    //     },
    //     '.row-chain': {
    //       display: 'flex',
    //       alignItems: 'center',
    //     },
    //     'i-icon.custom-icon--fill': {
    //       fill: Theme.input.fontColor,
    //       $nest: {
    //         'svg': {
    //           fill: `${Theme.input.fontColor} !important`
    //         }
    //       }
    //     }
    //   }
    // },
    // '#modalFees': {
    //   $nest: {
    //     '.i-modal_header': {
    //       marginBottom: '0.5rem !important',
    //     },
    //     '.i-modal_content': {
    //       $nest: {
    //         'i-label *': {
    //           fontSize: '0.875rem',
    //         },
    //         'i-button': {
    //           width: '150px',
    //           paddingBlock: '0.25rem',
    //           textAlign: 'center',
    //         },
    //       },
    //     },
    //   },
    // },
    '.btn-os': {
      background: 'var(--primary-button-background)',
      transition: 'background .3s ease'
    },
    '.btn-os:not(.disabled):not(.is-spinning):hover, .btn-os:not(.disabled):not(.is-spinning):focus': {
      background: 'var(--primary-button-hover-background)',
      boxShadow: 'none',
      opacity: .9
    },
    '.btn-os:not(.disabled):not(.is-spinning):focus': {
      boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)',
      outline: 0
    },
    '.btn-os.disabled, .btn-os.is-spinning': {
      background: 'var(--primary-button-disabled-background)',
      opacity: 0.4
    },
    '.btn-max:not(.disabled):hover': {
      transition: 'all .2s ease-out',
      background: 'var(--max-button-hover-background)'
    }
  }
})
