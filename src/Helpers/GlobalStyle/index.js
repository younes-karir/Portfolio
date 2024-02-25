// globalStyles.js
import { createGlobalStyle } from "styled-components";

import Store from "../../Store/Store";

const GlobalStyle = createGlobalStyle`

  body {
    font-size: 12px;
    font-family: "Poppins", sans-serif;    
    
  }

  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;

  }


   *::-webkit-scrollbar {
      width: 0.5rem;
      background-color: ${props => props.theme.colors.background.base};
    
      
    }
    *::-webkit-scrollbar-track  {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.00);
      
    }

    *::-webkit-scrollbar-thumb  {
      border-right: 2px solid ${props => props.theme.colors.background.base} ;
      background-color: ${props => props.theme.colors.primary};
    }
  
`;

export default GlobalStyle;
