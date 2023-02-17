import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

export default Styles.style({
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
})