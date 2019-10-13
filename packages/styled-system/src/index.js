import { createStyleFunction, createParser } from '@vue-styled-system/core'
// v4 api shims
import layout from '@vue-styled-system/layout'
import color from '@vue-styled-system/color'
import typography from '@vue-styled-system/typography'
import flexbox from '@vue-styled-system/flexbox'
import grid from '@vue-styled-system/grid'
import border from '@vue-styled-system/border'
import background from '@vue-styled-system/background'
import position from '@vue-styled-system/position'

export {
  get,
  createParser,
  createStyleFunction,
  compose,
  system,
} from '@vue-styled-system/core'

export { margin, padding, space } from '@vue-styled-system/space'
export { color } from '@vue-styled-system/color'
export { layout } from '@vue-styled-system/layout'
export { typography } from '@vue-styled-system/typography'
export { flexbox } from '@vue-styled-system/flexbox'
export { border } from '@vue-styled-system/border'
export { background } from '@vue-styled-system/background'
export { position } from '@vue-styled-system/position'
export { grid } from '@vue-styled-system/grid'
export { shadow } from '@vue-styled-system/shadow'
export { default as boxShadow, default as textShadow } from '@vue-styled-system/shadow'

export {
  variant,
  buttonStyle,
  textStyle,
  colorStyle
} from '@vue-styled-system/variant'

const {
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  size,
  verticalAlign,
  display,
  overflow,
  overflowX,
  overflowY
} = layout
const { opacity } = color
const {
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  textAlign,
  fontStyle,
  letterSpacing,
} = typography

const {
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
} = flexbox
const {
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
} = grid
const {
  borderWidth,
  borderStyle,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius,
} = border
const {
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
} = background
const {
  zIndex,
  top,
  right,
  bottom,
  left,
} = position

export { default as borders } from '@vue-styled-system/border'
export {
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  size,
  verticalAlign,
  display,
  overflow,
  overflowX,
  overflowY,
  // color
  opacity,
  // typography
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  textAlign,
  fontStyle,
  letterSpacing,
  // flexbox
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
  // grid
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
  // border
  borderWidth,
  borderStyle,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius,
  // background
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  // position
  zIndex,
  top,
  right,
  bottom,
  left,
}

export const propType = [Number, String, Array, Object]

export const createPropTypes = props => {
  return props.reduce((acc, name) => ({
    ...acc,
    [name]: propType,
  }), {})
}

export const propTypes = {
  space: createPropTypes(space.propNames),
  color: createPropTypes(color.propNames),
  layout: createPropTypes(layout.propNames),
  typography: createPropTypes(typography.propNames),
  flexbox: createPropTypes(flexbox.propNames),
  border: createPropTypes(border.propNames),
  background: createPropTypes(background.propNames),
  position: createPropTypes(position.propNames),
  grid: createPropTypes(grid.propNames),
  shadow: createPropTypes(shadow.propNames),
  buttonStyle: createPropTypes(buttonStyle.propNames),
  textStyle: createPropTypes(textStyle.propNames),
  colorStyle: createPropTypes(colorStyle.propNames),
}

// v4 style API shim
export const style = ({
  prop,
  cssProperty,
  alias,
  key,
  transformValue,
  scale,
  // new api
  properties,
}) => {
  const config = {}
  config[prop] = createStyleFunction({
    properties,
    property: cssProperty || prop,
    scale: key,
    defaultScale: scale,
    transform: transformValue,
  })
  if (alias) config[alias] = config[prop]
  const parse = createParser(config)

  return parse
}
