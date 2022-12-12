import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

Styles.cssRule('.price-info', {
  display: 'flex',
  flexDirection: 'column',
  opacity: 0.75,
  $nest: {
    'i-hstack > i-label:first-child': {
      marginRight: '0.5rem'
    },
    '.rounded-icon': {
      display: 'inline-flex',
      padding: 0
    }
  }
})