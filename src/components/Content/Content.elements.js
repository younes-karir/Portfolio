import styled from "styled-components";
import devices from "../../Helpers/Devices";

export const BaseFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.header};
  /* gap: 3rem; */
  @media ${devices.mobileL} {
    /* gap: 30px; */
  }

  @media ${devices.tablet} {
    /* gap: 40px; */
  }

  @media ${devices.laptop} {
  }
`;
