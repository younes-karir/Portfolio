import styled from "styled-components";
import devices from "../../Helpers/Devices";

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 4.5rem);
  background-color: ${(props) => props.theme.colors.backgroundDarker};
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0px 10px 10px 10px;

  @media ${devices.mobileL} {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media ${devices.tablet} {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media ${devices.laptop} {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media ${devices.tablet} {
    flex-direction: row-reverse;
    align-items: start;
    height: 20rem;
  }
`;
export const ImgWrapper = styled.div`
  width: 80%;
  height: 80%;
  position: relative;
  display: flex;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;



  @media ${devices.tablet} {
    width: 40%;
    height: 100%;
  }
`;

export const ImgHolder = styled.img`
  height: 18rem;
  width: fit-content  ;
  border: solid 6px white;
  border-radius: 2px;
  z-index: 10;

`;



export const InfoWrapper = styled.div`
  background-color: blue;
  width: 100%;
  height: 60%;

  @media ${devices.tablet} {
    width: 70%;
    height: 100%;
  }
`;



