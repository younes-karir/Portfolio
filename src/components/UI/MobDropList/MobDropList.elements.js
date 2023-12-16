import styled from "styled-components";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineLanguage } from "react-icons/md";

export const Container = styled.div`
  width: 100%;
  border-radius: 4px;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.BoderCard};

  /* background-color: ${(props) =>
    props.$opened ? props.theme.colors.BoderCard : "none"}; */

  padding: 0.5rem;
  border-radius: 4px;
`;

export const SelectedItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const HeaderTitle = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.2rem;
  font-weight: 500;
`;

export const HeaderIcon = styled(MdOutlineKeyboardArrowRight)`
  color: ${(props) => props.theme.colors.text};
  transform: ${(props) => (props.$flip ? "rotate(90deg)" : "rotate(0)")};

  font-size: 1.7rem;
  transition: transform 200ms ease-in-out;
`;

export const ListeContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  box-shadow: ${(props) => props.theme.colors.BoderCard} 0px 0px 0px 1px;
  border-radius: 4px;
  padding: .5rem;
`;

export const Item = styled.span`
  padding: 5px 5px;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  opacity: ${p => p.$selected ? 0.5 : 1} ;
  cursor: ${props => props.$selected ? 'default' : 'pointer'};
 
`;

export const Text = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
`;

