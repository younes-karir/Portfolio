import styled from "styled-components";
import devices from "../../Helpers/Devices";

export const BaseFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background.base};

/* 
  ::-webkit-scrollbar {
    width: 0.6rem;
  }
  ::-webkit-scrollbar-track {
    position: absolute;
  }

   handle 
  ::-webkit-scrollbar-thumb {
     transition: opacity 200ms ease-in-out;

    display: ${(props) => (!props.$hide ? "none" : "block")};
    opacity: ${(props) => (!props.$hide ? 0 : 1)}; 

    background: ${(props) => props.theme.colors.primary};
    border-radius: 4px;
    &:hover {
      background: ${(props) => props.theme.colors.primary};
      opacity: 0.8;
      cursor: pointer;
    }
  } */
 


`;
