import styled from "styled-components";

export const DropDownContainer = styled("div")`
  width: 100%;
  position: relative;
  padding: 0.5rem;
  border: solid 1px gray;

  &:hover{
    cursor: pointer;
  }
`;

export const DropDownHeader = styled("div")`


  font-weight: 500;
  font-size: 1rem;
  color: #3faffa;
  background: #ffffff;
`;

export const DropDownListContainer = styled("div")`
    position: absolute;
`;

export const DropDownList = styled("ul")`
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled("li")`
  list-style: none;
  &:hover{
    cursor: pointer;
  }
`;
