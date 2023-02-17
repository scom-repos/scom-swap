import { Styles } from "@ijstech/components";
const Theme = Styles.Theme.ThemeVars;

export const configStyle = Styles.style({
  $nest: {
    'i-label': {
      color: '#fff'
    }
  }
})

export const comboboxStyle = Styles.style({
  maxWidth: 200,
  $nest: {
    '.selection': {
      paddingInline: 0,
    },
    '.selection input': {
      padding: '1px 2px',
    },
    '.icon-btn i-icon': {
      fill: `${Theme.colors.primary.main} !important`
    },
  }
})

export const tokenSelectionStyle = Styles.style({
  maxWidth: 200,
  $nest: {
    '#btnToken': {
      background: '#252a48 !important',
      height: 30,
    },
    '#btnMax': {
      display: 'none',
    }
  }
})

export const pointerStyle = Styles.style({
  cursor: 'pointer'
})

export const uploadStyle = Styles.style({
  $nest: {
    '.i-upload_preview-img': {
      maxHeight: '100%',
      display: 'block'
    },
    '.i-upload-wrapper': {
      maxHeight: 'inherit',
      overflow: 'hidden'
    }
  }
})
