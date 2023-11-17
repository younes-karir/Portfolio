import styled from "styled-components";
import devices from "../../../Helpers/Devices";

export const Container = styled.div`
  width: 90%;
  max-width: 100%;
  min-height: 10rem;
  background-color: ${(props) => props.theme.colors.header};
  box-shadow: 0px 20px 60px 0px rgba(0, 11, 40, 0.06);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;


  @media ${devices.tablet} {
    width: 100%;
  }

  @media ${devices.laptop} {
  }
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