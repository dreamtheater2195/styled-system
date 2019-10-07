import { system, getPx } from '@vue-styled-system/core'

const defaults = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
}

const config = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts',
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
    defaultScale: defaults.fontSizes,
    transform: getPx,
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights',
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights',
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings',
    transform: getPx,
  },
  textAlign: true,
  fontStyle: true,
}

export const typography = system(config)
export default typography
