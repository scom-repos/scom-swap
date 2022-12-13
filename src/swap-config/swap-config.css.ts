import { Styles } from "@ijstech/components";

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
