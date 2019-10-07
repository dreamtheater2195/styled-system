import { system, getPx } from '@vue-styled-system/core'

const defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}

const config = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices',
  },
  top: {
    property: 'top',
    scale: 'space',
    defaultScale: defaults.space,
    transform: getPx,
  },
  right: {
    property: 'right',
    scale: 'space',
    defaultScale: defaults.space,
    transform: getPx,
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
    defaultScale: defaults.space,
    transform: getPx,
  },
  left: {
    property: 'left',
    scale: 'space',
    defaultScale: defaults.space,
    transform: getPx,
  },
}

export const position = system(config)

export default position
