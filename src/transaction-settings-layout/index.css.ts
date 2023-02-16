import { Styles } from '@ijstech/components';

export default Styles.style({
  textAlign: 'center',
  $nest: {
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
  }
})
