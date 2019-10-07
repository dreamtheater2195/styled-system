import border from '../src'

test('returns border styles', () => {
  const style = border({ border: '1px solid gold' })
  expect(style).toEqual({ border: '1px solid gold' })
})

test('returns individual border styles', () => {
  const style = border({
    theme: {
      borderWidths: { thin: 1 },
      colors: { primary: 'red' },
      borderStyles: { thick: 'solid' },
      radii: { small: 5 },
    },
    borderTopWidth: 'thin',
    borderTopColor: 'primary',
    borderTopStyle: 'thick',
    borderTopLeftRadius: 'small',
    borderTopRightRadius: 'small',
    borderBottomWidth: 'thin',
    borderBottomColor: 'primary',
    borderBottomStyle: 'thick',
    borderBottomLeftRadius: 'small',
    borderBottomRightRadius: 'small',
    borderRightWidth: 'thin',
    borderRightColor: 'primary',
    borderRightStyle: 'thick',
    borderLeftWidth: 'thin',
    borderLeftColor: 'primary',
    borderLeftStyle: 'thick',
  })
  expect(style).toEqual({
    borderTopColor: 'red',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    borderBottomColor: 'red',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    borderRightColor: 'red',
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderLeftColor: 'red',
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
  })
})

test('returns border top and bottom radii', () => {
  const style = border({
    theme: {
      radii: { small: 5 },
    },
    borderTopLeftRadius: 'small',
    borderTopRightRadius: 'small',
    borderBottomRightRadius: 'small',
    borderBottomRightRadius: 'small',
  })
  expect(style).toEqual({
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
    borderBottomRightRadius: '5px',
  })
})
