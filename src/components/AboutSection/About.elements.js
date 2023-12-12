import styled from "styled-components";

import { HiLocationMarker } from "react-icons/hi";

import devices from "../../Helpers/Devices";

export const Container = styled.section`
  width: 100%;
  background-color: ${props => props.theme.colors.background.middle};
  height: fit-content;
  background-position: top left;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;


  padding: 6rem 1rem 0rem 1rem;

  @media ${devices.mobileL} {
    padding: 2rem 0.5rem 0rem 0.5rem;
  }

  @media ${devices.tablet} {
    padding: 6rem 2rem 0rem 2rem;
  }

  @media ${devices.laptop} {
    padding: 7rem 3rem 0rem 3rem;
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

export const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding-bottom: 2rem;

  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 3rem;
  }

  @media ${devices.laptop} {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 5rem;
  }
`;

export const ProfileWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.profile};
  max-width: 25rem;

  @media ${devices.tablet} {
    width: 50%;
  }

  @media ${devices.laptop} {
    width: 27%;
    padding: 2rem;
  }
`;
export const Holder = styled.img`
  width: 100%;
  max-width: 30rem;

  
`;
export const InfosWrapper = styled.div`
  width: 100%;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.5rem;
  gap: 20px;

  @media ${devices.tablet} {
    padding: 0;
  }

  @media ${devices.laptop} {
    padding: 0;
    width: 60%;
    max-width: calc(100% - 30rem);
    
  }
`;

export const AboutText = styled.h1`
  font-size: 1.8srem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.title1};
`;

export const ExperienceText = styled.h3`
  font-size: 1.1rem;
  line-height: 28px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

export const Details = styled.span`
  font-size: 1rem;
  line-height: 1.9rem;
  color: ${(props) => props.theme.colors.text};
  opacity: 0.8;
  text-align: justify;
  font-weight: 300;

  @media ${devices.laptop} {
    max-width: 50rem;
  }
`;

export const ContactContainer = styled.div`
  /* padding-top: 2rem; */
  width: 100%;
  max-width: 40rem;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-items: center;
  column-gap: 1rem;
  row-gap: .6rem;


  @media ${devices.tablet} {
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
  }

  @media ${devices.laptop} {
    row-gap: 1rem;
  }

`;
export const ContactWrapper = styled.div`

  height: 5rem;
  width: 100%;
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
  @media ${devices.laptop} {
    gap: 6px;
  }
`;
export const ContactTitle = styled.h4`
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;
export const ContactContent = styled.p`
  font-size: 1rem;
  font-weight: 300;
  /* line-height: 1.88rem; */
  color: ${(props) => props.theme.colors.text};
  text-transform: capitalize;


  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;


export const LocationIcon = styled(HiLocationMarker)`
  font-size: 1.3rem;
  padding-bottom: 3px;
  color: ${props => props.theme.colors.text};

`;