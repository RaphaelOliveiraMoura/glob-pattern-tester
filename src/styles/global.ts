import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poiret One', cursive;
  }

  html, body, #__next {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: #333;
  }
`

export default GlobalStyles
