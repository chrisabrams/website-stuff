import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from 'src/theme'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:200,300,400');

  body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
  }

  ul, li {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }
`

export default ({ element }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      {element}
    </React.Fragment>
  </ThemeProvider>
)
