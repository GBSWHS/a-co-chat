import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    width: 100vw;
    height: 100vh;
    transition: all .35s;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`