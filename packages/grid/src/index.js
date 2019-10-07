import { system, getPx } from '@vue-styled-system/core'

const defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}

const config = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: defaults.space,
    transform: getPx,
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
    defaultScale: defaults.space,
    transform: getPx,
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
    defaultScale: defaults.space,
    transform: getPx,
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true,
}

export const grid = system(config)
export default grid
