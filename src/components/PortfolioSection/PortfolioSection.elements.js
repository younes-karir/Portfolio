import styled from "styled-components";
import devices from "../../Helpers/Devices";


import { FaChevronRight } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";


export const Container = styled.section`
  width: 100%;
  background-color: ${props  => props.theme.colors.background.middle};
  height: fit-content;
  background-position: top left;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 6rem 0.5rem 0rem 0.5rem;

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

export const ProjectsWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding-bottom: 4rem;
  padding-top: 4rem;
  display: grid;
  row-gap: 2rem;
  grid-template-columns: 1fr;
  

  @media ${devices.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media ${devices.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
`;


export const MoreWrapper = styled.a`
  display: flex;
  align-items: center;
  font-style: italic;
  gap: 5px;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-weight: 400;
  opacity: 80%;

  &:hover{
    text-decoration: underline;
    /* text-decoration-color:${props => props.theme.colors.UnderLine} ; */
    opacity: 1;
    /* font-weight: 500; */

  }


`;
export const MoreLink = styled.span`
  font-size: .85rem;
  color: inherit;
  font-weight: inherit;

`;
export const LinkRow = styled(HiExternalLink)`
  color: inherit;
  font-size: 1rem;
`;