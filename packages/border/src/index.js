import { system, getPx } from '@vue-styled-system/core'

const config = {
  border: {
    property: 'border',
    scale: 'borders',
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths',
    transform: getPx,
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles',
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors',
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii',
    transform: getPx,
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders',
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
    transform: getPx,
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii',
    transform: getPx,
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders',
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders',
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
    transform: getPx,
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
    transform: getPx,
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders',
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders',
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders',
  },
  borderTopWidth: {
    property: 'borderTopWidth',
    scale: 'borderWidths',
    transform: getPx,
  },
  borderTopColor: {
    property: 'borderTopColor',
    scale: 'colors',
  },
  borderTopStyle: {
    property: 'borderTopStyle',
    scale: 'borderStyles',
  },
  borderTopLeftRadius: {
    property:'borderTopLeftRadius',
    scale: 'radii',
    transform: getPx,
  },
  borderTopRightRadius: {
    property:'borderTopRightRadius',
    scale: 'radii',
    transform: getPx,
  },
  borderBottomWidth: {
    property: 'borderBottomWidth',
    scale: 'borderWidths',
    transform: getPx,
  },
  borderBottomColor: {
    property: 'borderBottomColor',
    scale: 'colors',
  },
  borderBottomStyle: {
    property: 'borderBottomStyle',
    scale: 'borderStyles',
  },
  borderBottomLeftRadius: {
    property:'borderBottomLeftRadius',
    scale: 'radii',
    transform: getPx,
  },
  borderBottomRightRadius: {
    property:'borderBottomRightRadius',
    scale: 'radii',
    transform: getPx,
  },
  borderLeftWidth: {
    property: 'borderLeftWidth',
    scale: 'borderWidths',
    transform: getPx,
  },
  borderLeftColor: {
    property: 'borderLeftColor',
    scale: 'colors',
  },
  borderLeftStyle: {
    property: 'borderLeftStyle',
    scale: 'borderStyles',
  },
  borderRightWidth: {
    property: 'borderRightWidth',
    scale: 'borderWidths',
    transform: getPx,
  },
  borderRightColor: {
    property: 'borderRightColor',
    scale: 'colors',
  },
  borderRightStyle: {
    property: 'borderRightStyle',
    scale: 'borderStyles',
  },
}

export const border = system(config)

export default border
