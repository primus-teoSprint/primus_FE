import { theme } from '@/styles/theme'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans KR', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700;&family=Song+Myung&display=swap"') format('woff');
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;

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
