import styled from "styled-components";
import { IoChevronBack } from "react-icons/io5";



export const BackContainer = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  /* padding-right: 1rem; */
`;
export const Back = styled(IoChevronBack)`
  font-size: 2.5rem;
  transform: scale(-1, 1);
  color: ${(props) => props.theme.colors.primary};
`;
export const LinksContainer = styled.div`
  height: calc(100% - 5rem);
  width: 100%;
`;
