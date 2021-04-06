import { createGlobalStyle } from "styled-components";
import Theme from "./theme";
import styledNormalize from "styled-normalize";
import * as prismStyle from "prismjs/themes/prism-coy.css";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  ${prismStyle}

  html {
    box-sizing: border-box;
    background-color: ${Theme.layout.backgroundColor};
  }

  body {
    font-family: ${Theme.fonts.base};
    line-height: 1.9em;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    outline: none;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  .gatsby-highlight {
    max-width: 100% !important;

    * {
      box-shadow: none !important;
    }
    code {
      border-left: none !important;
      border-left: 4px solid #1A936F !important;
      background-image: none !important;
    }
    pre {
      border: none !important;
      box-shadow: none !important;
      background-image: none !important;
    }

    pre::before {
      content: none !important;
    }

    pre::after {
      content: none !important;
    }
  }

  .gatsby-highlight-code-line {
    background-color: #353631;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
  }
`;

export default GlobalStyle;
