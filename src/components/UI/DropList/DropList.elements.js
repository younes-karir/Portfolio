import styled from "styled-components";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdOutlineLanguage } from "react-icons/md";

export const Container = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
  border-radius: 50%;
  padding: 5px;

  &:hover {
    background-color: ${(props) => props.theme.colors.profileCard};
  }
`;

export const Row = styled(TiArrowSortedDown)`
  font-size: 1.1rem;
  transform: ${(props) => (props.$flip ? "rotate(180deg)" : "rotate(0)")};
  color: ${(props) => props.theme.colors.text};

  /* transition: transform 250ms ease-in-out; */
`;

export const Selected = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;

export const SelectedItem = styled.span`
  font-size: 1rem;
  font-weight: 500;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.text};
`;

export const Elements = styled.div`
  position: absolute;
  padding: 0.7rem ;
  width: 6rem;
  height: fit-content;
  border-radius: 4px;
  top: 130%;
  right: 0;
  /* left: calc(50% - 2.5rem ); */
  display: flex;
  flex-direction: column;
  gap: 7px;
  background-color: ${(props) => props.theme.colors.background.upper};
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    0px 3px 5px rgba(0, 0, 0, 0.04);
`;

export const Item = styled.span`
  width: 100%;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};

  &:hover {
    cursor: pointer;
    /* background-color: ${(porps) => porps.theme.colors.text}; */
    color: ${(porps) => porps.theme.colors.primary};
  }
`;

export const LanguageIcon = styled(MdOutlineLanguage)`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.text};
`;
