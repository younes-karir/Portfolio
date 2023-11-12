import styled from "styled-components";
import devices from "../../Helpers/Devices";

import { IoMdArrowDropright } from "react-icons/io";

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
    padding: 7rem 3rem 3rem 3rem;
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

export const ResumeWrapper = styled.div`
  width: 100%;
  padding-top: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  /* @media ${devices.tablet} {
    grid-template-columns: 1fr 4fr;
  } */
  @media ${devices.laptop} {
    grid-template-columns: 1fr 3fr 3fr;
    gap: 1rem;
  }
`;
export const RoutersContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media ${devices.tablet} {
    flex-direction: row;
  }

  @media ${devices.laptop} {
    flex-direction: column;
  }
`;
export const RoutLink = styled.div`
  width: 90%;
  height: 5rem;
  color: ${(props) => (!props.selected ? props.theme.colors.text : "#fff")};
  background-color: ${(props) =>
    props.selected ? props.theme.colors.primary : props.theme.colors.header};
  position: relative;

  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }
  @media ${devices.laptop} {
    height: 6rem;
    max-width: 10rem;
  }
`;

export const RouterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media ${devices.laptop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.5rem;
  }
`;

export const SkillsConatiner = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${devices.laptop} {
    height: 100%;
  }
`;

export const CodingSkills = styled.div`
  background-color: ${(props) => props.theme.colors.header};
  width: 100%;
  padding: 3rem 2rem;
`;
export const CodingSkillsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap:4rem;
`;
export const CodingSkillsTitle = styled.h3`
  margin-bottom: 2.5rem;
  font-size: 1.4rem;
  line-height: 2.25rem;
  color: ${(props) => props.theme.colors.text};
`;

export const DesignSkills = styled.div`
 background-color: ${(props) => props.theme.colors.header};
  width: 100%;
  padding: 3rem 2rem;
`;
