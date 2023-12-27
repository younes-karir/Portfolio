import styled from "styled-components";


export const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  gap: 5px;
  cursor: pointer;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-weight: 400;
  opacity: 80%;

  &:hover{
    text-decoration: underline;
    /* text-decoration-color:${props => props.theme.colors.UnderLine} ; */
    opacity: 1;
    /* font-weight: 500; */

  }


`;

export const MoreLink = styled.span`
  font-size: .85rem;
  color: inherit;
  font-weight: inherit;

`;