import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Cormorant Garamond', serif;
    scroll-behavior: smooth;
  }

  html {
    scroll-behavior: smooth;
  }

  p {
    line-height: 1.5;
  font-size: 20px;
  padding: 5px 0;
  @media only screen and (max-width: 1024px) {
    font-size: 17px;
  }
  }

  h2 {
    font-size: 30px;
    text-decoration: underline;
  text-transform: capitalize;
  }

  h3 {
    font-size: 25px;
    text-transform: capitalize;
  @media only screen and (max-width: 1024px) {
    font-size: 20px;
  }
  }
`;

export default GlobalStyles;
