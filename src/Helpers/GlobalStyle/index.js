// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    font-size: 16px;
    font-family: "Poppins", sans-serif;    
  }

  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    /* transition: color,background-color 250ms ease-in-out; */

  }

  
`;

export default GlobalStyle;
