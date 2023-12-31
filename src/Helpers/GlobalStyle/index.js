// globalStyles.js
import { createGlobalStyle } from "styled-components";

import Store from "../../Store/Store";

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

  /* width */
  body::-webkit-scrollbar {
  width: .45rem;
}
body {
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.colors.primary} ${(props) =>
  props.theme.colors.background.base};
}
body::-webkit-scrollbar-track {
  background: ${(props) => props.theme.colors.background.base};
}
body::-webkit-scrollbar-thumb {
  background-color:  ${(props) => props.theme.colors.primary} ;
  border-radius: 5px;
  border: 1.5px solid ${(props) => props.theme.colors.background.base};
  border-left: none;
}




  
`;

export default GlobalStyle;
