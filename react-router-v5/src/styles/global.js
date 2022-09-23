import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`${({ theme }) => css`
  body {
    background: ${theme.backgroundColor};
    color: ${theme.textColor};
    font-family: sans-serif;
  }
`}`

export { GlobalStyle }
