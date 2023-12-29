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
  /* align-items: center; */
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



export const CertTitle = styled.h3`
  font-size: 1.3rem;
  line-height: 2.25rem;
  text-align: center;
  position: relative;
  padding-bottom: 10px;
  padding-top: .5rem;
  text-transform: capitalize;

  color: ${(props) => props.theme.colors.text};

  &::before {
    position: absolute;
    left: 50%;
    bottom: 0px;
    background-color: #4d63dd;
    content: "";
    width: 50px;
    height: 1px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

`;