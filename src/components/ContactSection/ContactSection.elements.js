import styled from "styled-components";
import devices from "../../Helpers/Devices";

export const Container = styled.section`
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.background};
  background-position: top left;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;

  padding: 0.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  /* gap: 6rem; */

  @media ${devices.mobileL} {
    padding: 2rem 0.5rem 3rem 0.5rem;
  }

  @media ${devices.tablet} {
    padding: 6rem 2rem 3rem 2rem;
  }

  @media ${devices.laptop} {
    padding: 7rem 3rem 5rem 3rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 1.88rem;
  line-height: 2.25rem;
  color: ${(props) => props.theme.colors.title1};
  font-weight: 700;
  text-transform: capitalize;
  position: relative;
  padding-bottom: 0.7rem;

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

export const Sub = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.88rem;
  text-transform: capitalize;
  opacity: 0.9;
  color: ${(props) => props.theme.colors.text};
`;

export const ConatctWrapper = styled.div`
  width: 100%;
  padding-top: 3rem;
  display: grid;
  grid-template-columns: 1fr;

  gap: 2rem;

  @media ${devices.tablet} {
    grid-template-columns: 1fr;
  }
  @media ${devices.laptop} {
    grid-template-columns: 3fr 2fr;
  }
`;

export const FormContainer = styled.div`
  /* background-color: red; */
  width: 100%;
  /* height: 20rem; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1rem;

  @media ${devices.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 5fr;
  }
  @media ${devices.laptop} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 5fr;
  }
`;
export const InfosContainer = styled.div`
  background-color: green;
  width: 100%;
`;
export const FormWrapper = styled.form``;
export const Eelement = styled.div`
  width: 100%;
  height: 5rem;
  background-color: red;

  ${(props) => {
    if (props.$fit)
      return " grid-column-start: 1; grid-column-end:3; height: 100%; ";

    if (props.$btn)
      return " grid-column-start: 1; grid-column-end:3; ";
  }}
`;
