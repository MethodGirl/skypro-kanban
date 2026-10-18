
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    min-height: 100%;
  }

  body {
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: #000000;
    background-color: #EAEEF6;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    font: inherit;
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  ul,
  ol {
    list-style: none;
  }

  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }

    100% {
      height: auto;
      opacity: 1;
    }
  }
`;

export default GlobalStyles;
