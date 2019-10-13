<template>
  <div id="app">
    <ThemeProvider :theme="theme">
      <Root>
        <Box :px="[3, 4]" :py="[5, 6]" color="white" bg="blue">
          <Heading :fontSize="[4, 5, 6]">styled-system</Heading>
          <Paragraph fontWeight="bold">Basic demo</Paragraph>
        </Box>
      </Root>
    </ThemeProvider>
  </div>
</template>

<script>
import styled, { ThemeProvider, injectGlobal } from 'vue-styled-components'
import {
  space,
  color,
  typography,
  layout,
  propTypes,
} from 'vuejs-styled-system'

injectGlobal`
	* { box-sizing: border-box; }
  body{ margin:0; }
`;

const Root = styled.div`
  font-family: system-ui, sans-serif;
  line-height: 1.5;
`

const boxProps = {
  ...propTypes.space,
  ...propTypes.typography,
  ...propTypes.layout,
  ...propTypes.color,
}

const Box = styled('div', boxProps)`
  ${space}
  ${layout}
  ${typography}
  ${color}
`

const textProps = {
  ...propTypes.space,
  ...propTypes.typography,
  ...propTypes.color,
}

const Paragraph = styled('p', textProps)`
  ${space}
  ${typography}
  ${color}
`

const Heading = Paragraph.withComponent('h1')

export default {
  name: 'app',
  components: {
    ThemeProvider,
    Root,
    Box,
    Heading,
    Paragraph,
  },
  data() {
    return {
      theme: {
        fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
        space: [
          // margin and padding
          0,
          4,
          8,
          16,
          32,
          64,
          128,
          256,
        ],
        colors: {
          blue: '#07c',
          red: '#e10',
        },
      }
    }
  }
}
</script>
