import styled from "styled-components";
import devices from "../../Helpers/Devices";

export const Container = styled.section`
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.background.base};
  background-position: top left;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;

  padding: 0.5rem;
  padding-top: 6rem;
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

export const ResumeWrapper = styled.div`
  width: 100%;
  padding-top: 3rem;
  display: none;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media ${devices.tablet} {
    display: grid;
  }
  @media ${devices.laptop} {
    grid-template-columns: 1fr 4fr 2fr;
  }
`;
export const RoutersContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2rem;

  @media ${devices.tablet} {
    flex-direction: row;
    align-items: center;
  }

  @media ${devices.laptop} {
    flex-direction: column;
    align-items: center;
  }
`;
export const RoutLink = styled.div`
  width: 97%;
  height: 5rem;
  border-radius: 4px;
  color: ${(props) => (!props.selected ? props.theme.colors.text : "#fff")};
  box-shadow: ${(props) =>
    !props.selected
      ? `${props.theme.colors.BoderCard} 0px 0px 0px 1px`
      : "none"};
  background-color: ${(props) =>
    props.selected
      ? props.theme.colors.primary
      : props.theme.colors.background.upper};
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
  position: relative;
  align-items: center;
  gap: 1rem;

  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media ${devices.laptop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const Certficates = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding:1rem;
  gap:.7rem;
  background-color: ${(props) => props.theme.colors.background.upper};
    /* border-left: 4px solid ${props => props.theme.colors.primary}; */

  box-shadow: ${(props) => props.theme.colors.BoderCard} 0px 0px 0px 1px;
`;


export const Line = styled.span`
  width: 100%;
  height: fit-content;
  border: .7px solid ${(props) => props.theme.colors.BoderCard};


`;

export const SkillsConatiner = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  /* padding-top: 1rem; */
  box-shadow: ${(props) => props.theme.colors.BoderCard} 0px 0px 0px 1px;
  background-color: ${(props) => props.theme.colors.background.upper};
  @media ${devices.laptop} {
    height: 100%;
  }
`;

export const CodingSkills = styled.div`
  background-color: ${(props) => props.theme.colors.background.upper};
  width: 100%;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const CodingSkillsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
export const CodingSkillsTitle = styled.h3`
  /* margin-bottom: 2.5rem; */
  font-size: 1.3rem;
  line-height: 2.25rem;
  text-align: center;
  position: relative;
  padding-bottom: 10px;
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

export const DesignSkills = styled.div`
  background-color: ${(props) => props.theme.colors.background.upper};
  width: 100%;
  padding: 3rem 2rem;
`;

export const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 40px;
  column-gap: 10px;

  @media ${devices.tablet} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  @media ${devices.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;
export const SkillTitle = styled.h3`
  color: ${(props) => props.theme.colors.text};
  opacity: 0.8;
  font-size: 0.6em;
  font-weight: 600;
  text-transform: uppercase;
`;

// Mobile design
