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
  align-items: flex-start;
  gap: 1rem;
`;

export const ItemTitle = styled.div`
  width: fit-content;
  font-size: 1.1rem;
  height: fit-content;
  padding: .7rem 1.4rem  ;
  border-radius: 4px;
  color: #fff;
  /* color: ${(props) => props.theme.colors.primary}; */
  /* border-left: solid 4px ${(props) => props.theme.colors.primary}; */
  background-color: ${(props) => props.theme.colors.primary};
  position: relative;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  font-weight: 500;
`;
