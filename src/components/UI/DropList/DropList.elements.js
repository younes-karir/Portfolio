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
    background-color: ${(props) => props.theme.colors.BoderCard};
  }
`;

export const Row = styled(TiArrowSortedDown)`
  font-size: 1.1rem;
  transform: ${(props) => (props.$flip ? "rotate(180deg)" : "rotate(0)")};
  color: ${(props) => props.theme.colors.text};
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
  padding: .75rem 0.5rem;
  width: fit-content;
  height: fit-content;
  border-radius: 4px;
  top: 130%;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: ${(props) => props.theme.colors.background.upper};
  overflow: hidden;
  box-shadow: ${(props) => props.theme.colors.BoderCard} 0px 0px 0px 1px,
    0px 3px 5px rgba(0, 0, 0, 0.04);
`;

export const Item = styled.div`
  padding: 5px 5px;
  width: 100%;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.BoderCard};
  }
`;

export const LanguageIcon = styled(MdOutlineLanguage)`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.text};
`;

export const ImgHolder = styled.img`
  height: 1.3rem;
`;
export const Text = styled.span``;
