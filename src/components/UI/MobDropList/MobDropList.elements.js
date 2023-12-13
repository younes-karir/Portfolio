import styled from "styled-components";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const Container = styled.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  /* padding: ${props => props.$opened ? '.5rem' : 'none'} ; */
  background-color: ${props => props.$opened ? props.theme.colors.background.base : 'none'};
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.$opened ? '.5rem' : 'none'} ;

  background-color: ${props => props.$opened ? props.theme.colors.profileCard : 'none'};
  transition: all 200ms ease-in-out;
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
  padding-top: 9px;
  /* gap: 5px; */
`;
