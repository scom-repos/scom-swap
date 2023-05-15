import { Styles } from '@ijstech/components';

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
          opacity: 0.75
        }
      }
    },
    '.rounded-icon': {
      display: 'inline-flex',
      padding: 0
    }
  }
})