import styled from "styled-components";
import devices from "../../../Helpers/Devices";

import { MdOutlineSchool } from "react-icons/md";
import { TbArrowBadgeRight } from "react-icons/tb";

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 10rem;
  background-color: ${(props) => props.theme.colors.background.upper};
  box-shadow: ${(props) => props.theme.colors.BoderCard} 0px 0px 0px 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem 1rem;
  height: fit-content;


  @media ${devices.tablet} {
    height: 100%;
  }
  @media ${devices.laptop} {
    height: fit-content;
  }
`;

export const YearContainer = styled.div`
  padding: 6px 12px;
  background-color: ${(props) => props.theme.colors.profileCard};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Year = styled.span`
  font-weight: 600;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.primary};
`;
export const CardTitleContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.5;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text};
`;

export const SchoolIcon = styled(MdOutlineSchool)`
  color: ${(props) => props.theme.colors.text};
  /* opacity: .5; */
  font-size: 1.3rem;
`;

export const CardSub = styled.h5`
  color: ${(props) => props.theme.colors.text};
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0.75;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const PunktWrapper = styled.div`
width: 1.5rem;
`;

export const Punkt = styled(TbArrowBadgeRight)`
  font-size: 1.2rem;
  width: fit-content;
  text-align: center;
`;

export const TextContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

export const TItem = styled.div`
  height: fit-content;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 300;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const Detail = styled.p`
width: calc(100% - 1.5rem);


`;
