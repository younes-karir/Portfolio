import styled from "styled-components";
import devices from "../../Helpers/Devices";


export const Container = styled.section`
  width: 100%;
  height: 50rem;
  background-position: top left;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 1rem 0rem 1rem;

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

