import styled from "styled-components";

import arIcon from "../../../Helpers/Images/caret-down.png";


export const Container = styled.div`
  position: relative;
  font-family: inherit;
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

export const Elements = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  background-color: transparent;
  background-image:url(arIcon);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
  padding: 5px 0 5px 0px;
  border: none;

  color: ${(props) => props.theme.colors.text};

  &:hover {
    /* border-color: #777; */
    cursor: pointer;
  }

  &:focus {
    /* border-color: #999; */
    /* box-shadow: 0 0 1px 2px #6db4ff; */
    outline: none;
  }

  &::-ms-expand {
    display: none;
  }

  &:disabled,
  &[aria-disabled="true"] {
    cursor: not-allowed;
    background-color: rgba(211, 211, 211, 0.75);
  }

  &:disabled:hover,
  &[aria-disabled="true"]:hover {
    border-color: #999;
  }
`;

export const Item = styled.option`
    display: flex;
`;

