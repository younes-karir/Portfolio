import styled from "styled-components";
import { MdOutlineExpandMore } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";

export const Container = styled.div`
  height: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.background};
`;

export const Wrapper = styled.div`
  height: 100%;
  color: ${props => props.theme.colors.text};
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 .5rem;
  gap: 10px;
  & > span {
    font-size: 0.9rem;
  }

  


  &:hover{
    cursor: pointer;
    & > svg {
        visibility: visible;
    }
  }
`;

export const MoreIcon = styled(MdOutlineExpandMore)`
  font-size: 1.5rem;
  visibility: hidden;
`;
