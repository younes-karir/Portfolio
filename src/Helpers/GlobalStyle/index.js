// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    font-size: 16px;
    font-family: "Poppins", sans-serif;    

    &::-webkit-scrollbar {
    width: .6rem;
    
  }
    &::-webkit-scrollbar-track {
    }

    /* handle */
    &::-webkit-scrollbar-thumb {
    display: ${(props) => (!props.$hide ? "none" : "block")};
    background: ${(props) => props.theme.colors.primary}; 
    border-radius: 4px;
        &:hover {
          background: ${(props) => props.theme.colors.primary}; 
          opacity: .8;
          cursor: pointer;
         }
    }

  }

  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    /* transition: color,background-color 250ms ease-in-out; */
  }


  
`;

export default GlobalStyle;
