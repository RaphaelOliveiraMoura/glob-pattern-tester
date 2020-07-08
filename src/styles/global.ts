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
`

export default GlobalStyles
