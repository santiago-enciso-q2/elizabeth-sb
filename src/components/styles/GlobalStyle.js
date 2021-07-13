import { createGlobalStyle } from "styled-components";
import { themes, themes as theme } from "./ColorStyles";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  
  ${normalize()}

  body {
    line-height: 1;
    font-family: Nunito, monospace;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${theme.light.backgroundColor};

    @media (prefers-color-scheme: dark) {
      background: ${themes.dark.backgroundColor};
    }
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: #3913B8;
    font-weight: 600;
    text-decoration: none;
  }
`;
