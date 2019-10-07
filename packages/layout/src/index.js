import { system, get } from '@vue-styled-system/core'

const isNumber = n => typeof n === 'number' && !isNaN(n)
const px = n => (isNumber(n) && n !== 0 ? n + 'px' : n)
const getWidth = (n, scale) =>
  px(get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%'))
const getPx = (n, scale) => px(get(scale, n, n))

const config = {
  width: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth,
  },
  height: {
    property: 'height',
    scale: 'sizes',
    transform: getPx,
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes',
    transform: getPx,
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes',
    transform: getPx,
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes',
    transform: getPx,
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes',
    transform: getPx,
  },
  size: {
    properties: ['width', 'height'],
    scale: 'sizes',
    transform: getPx,
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true,
}

export const layout = system(config)
export default layout
