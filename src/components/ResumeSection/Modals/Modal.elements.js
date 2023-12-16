import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
  max-width: 100%;
  min-height: 10rem;
  background-color: ${(props) => props.theme.colors.background.upper};
  /* box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px; */
  box-shadow:  ${(props) => props.theme.colors.BoderCard}  0px 0px 0px 1px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;


`;

export const YearContainer = styled.div`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.profileCard};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Year = styled.span`
  font-weight: 600;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
`;
export const CardTitleContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.title1};
`;
export const CardSub = styled.h5`
  color: ${(props) => props.theme.colors.text};
  font-size: 0.9rem;
  font-weight: 400;
`;
export const TextContainer = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.88rem;
  color: ${(props) => props.theme.colors.text};
  opacity: 0.8;
`;