import styled from "styled-components";
import devices from "../../Helpers/Devices";
import bck from "../../Helpers/Images/hero_bg_element.png";

export const Container = styled.section`
  background-image: url(${bck});
  width: 100%;
  /* height: fit-content; */
  background-color: ${(props) => props.theme.colors.background};
  background-position: top left;
  background-repeat: no-repeat;
  /* background-size: cover; */
  position: relative;
  display: flex;
  flex-direction: column;

  padding: 0.5rem;
  padding-top: 6rem;
  padding-bottom: 3rem;
  /* margin-bottom: 3rem; */
  /* gap: 6rem; */

  @media ${devices.mobileL} {
    padding: 2rem 0.5rem 3rem 0.5rem;
  }

  @media ${devices.tablet} {
    padding: 6rem 2rem 3rem 2rem;
  }

  @media ${devices.laptop} {
    padding: 7rem 3rem 5rem 3rem;
    background-position: 80% -75%;
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
  gap: 4rem;

  @media ${devices.tablet} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  @media ${devices.laptop} {
    grid-template-columns: 4fr 3fr;
    gap: 4rem;
  }
`;

export const FormContainer = styled.form`
  /* background-color: red; */
  width: 100%;
  height: 28rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 5fr 1fr;
    gap: 1.5rem;
  }
  @media ${devices.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 5fr;
    gap: 1.5rem;
  }
`;

export const Eelement = styled.div`
  width: 100%;
  height: fit-content;

  ${(props) => {
    if (props.$fit)
      return `@media  ${devices.laptop} , ${devices.tablet} { grid-column-start: 1; grid-column-end:3; height: 100% }  `;
  }}

  ${(props) => {
    if (props.$btn) return " grid-column-start: 1; grid-column-end:3; ";
  }};
`;

export const TexteField = styled.input`
  font-size: 1rem;
  font-family: inherit;
  border: none;
  height: 60px;
  padding: 0px 20px;
  background: ${(props) => props.theme.colors.header};
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  line-height: 1;
  box-shadow: 0px 6px 26px rgba(0, 0, 0, 0.06);
`;

export const TexteArea = styled.textarea`
  font-size: 1rem;
  font-family: inherit;
  height: 10rem;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  padding: 1rem;
  line-height: 1.3;
  border: none;
  background: ${(props) => props.theme.colors.header};
  color: ${(props) => props.theme.colors.text};
  box-shadow: 0px 6px 26px rgba(0, 0, 0, 0.06);

  @media ${devices.laptop}, ${devices.tablet} {
    height: 100%;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }
`;

export const Submit = styled.button`
  position: relative;
  height: fit-content;
  width: fit-content;
  padding: 0.9rem 1rem;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.primary};
  /* color: ${(props) => props.theme.colors.text}; */
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  overflow: hidden;

  transition: all 0.3s;

  & span {
    position: relative;
    z-index: 2;
  }

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: ${(props) => props.theme.colors.text};
    transition: all 0.3s;
    z-index: 1;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover:after {
    width: 100%;
  }

  &:hover:before {
    width: 100%;
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const InfosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media ${devices.laptop} {
    padding-left: 2rem;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.header};
  box-shadow: 0px 6px 26px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
export const InfoTitle = styled.h4`
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
`;
export const InfoContent = styled.span`
  font-weight: 300;
  line-height: 1.88rem;
  color: ${(props) => props.theme.colors.text};
  opacity: 0.7;
`;
