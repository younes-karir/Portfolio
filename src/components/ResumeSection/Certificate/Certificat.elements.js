import styled from "styled-components";
import devices from "../../../Helpers/Devices";


import { TbArrowBadgeRight } from "react-icons/tb";


export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.background.upper};
  box-shadow: ${(props) => props.theme.colors.BoderCard} 0px 0px 0px 1px;
  display: flex;
  flex-direction: column;
  padding: .7rem;
  align-items: center;

`;


export const  Holder = styled.img`
    width: 100%;
    height: auto;


`;
export const DetailsWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  gap: 10px;
`;


export const Year = styled.span`
  font-weight: 600;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const YearContainer = styled.div`
  padding: 6px 12px;
  background-color: ${(props) => props.theme.colors.profileCard};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CardTitleContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text};
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


