import styled from "styled-components";
import devices from "../../../Helpers/Devices";

export const Container = styled.div`
  width: 100%;
  padding-top: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;

  @media ${devices.tablet} {
    display: none;
  }
  @media ${devices.laptop} {
    display: none;
  }
`;


export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const ItemTitle = styled.div`
  width: calc(100% - .8rem);
  /* width: 100%; */
  font-size: 1.2rem;
  height: fit-content;
  padding: 1rem 0  ;
  color: #fff;
  background-color: ${(props) => props.theme.colors.primary};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;
