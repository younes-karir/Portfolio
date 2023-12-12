import styled from "styled-components";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const Container = styled.div`
  width: 100%;
  padding: 0.5rem 0rem;
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderTitle = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.2rem;
  font-weight: 500;
`;

export const HeaderIcon = styled(MdOutlineKeyboardArrowRight)`
  color: ${(props) => props.theme.colors.text};
  font-size:1.7rem;
`;
