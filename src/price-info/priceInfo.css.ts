import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

Styles.cssRule('.price-info', {
  display: 'flex',
  flexDirection: 'column',
  $nest: {
    'i-hstack': {
      $nest: {
        '&> i-label:first-child': {
          marginRight: '0.5rem',
          opacity: 0.75
        },
        'i-icon.icon-tooltip': {
          opacity: 0.75,
          fill: Theme.text.primary,
          $nest: {
            'svg': {
              fill: `${Theme.text.primary} !important`
            }
          }
        }
      }
    },
    '.rounded-icon': {
      display: 'inline-flex',
      padding: 0
    }
  }
})