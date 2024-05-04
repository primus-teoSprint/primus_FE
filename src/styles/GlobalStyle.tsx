import { theme } from '@/styles/theme'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'NanumSquare', sans-serif;

    &::-webkit-scrollbar {
      display: none; 
    }
  }

  html,
  body {
    background-color: ${theme.color.white};
    color: ${theme.color.black};
  }

  a,
  button {
    all: unset;
  }
`

export default GlobalStyle
