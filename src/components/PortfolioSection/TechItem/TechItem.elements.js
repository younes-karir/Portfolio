import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  padding: 4px 8px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.background.base};
  color: ${(props) => props.theme.colors.primary};
`;

export const Holder = styled.span`

  font-size: 0.7rem;
  font-weight: 600;
  text-transform: capitalize;

`;
