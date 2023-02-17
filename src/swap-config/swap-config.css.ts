import { Styles } from "@ijstech/components";

export const configStyle = Styles.style({
  $nest: {
    'i-label': {
      color: '#fff'
    },
    'i-button': {
      color: '#fff',
      background: 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box'
    }
  }
})

export const comboboxStyle = Styles.style({
  maxWidth: 280,
  $nest: {
    '.selection': {
      paddingInline: 0,
    },
    '.selection input': {
      padding: '1px 2px',
    },
    '.icon-btn i-icon': {
      fill: '#fff !important'
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
    },
    '.i-upload_btn': {
      padding: '8px'
    },
    'i-upload-drag': {
      cursor: 'pointer'
    }
  }
})
