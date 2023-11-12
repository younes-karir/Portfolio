import styled, { keyframes } from "styled-components";
import { BiSolidDownArrow } from "react-icons/bi";


const fadeInLeft = (width) => keyframes`
0% {
    width: 0;
}100% {
    width: ${width};
}
`;

const PlaceInLeft = keyframes`
0% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
}100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
`;


export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const Title = styled.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1;
  text-transform: uppercase;
  color: ${props => props.theme.colors.text};
  opacity: .7;
`;
export const PorsWrapper = styled.div`
  width: 100%;
  height: 0.7rem;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #dbdbdb;
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: ${props => props.$value};
    background-color: ${(props) => props.theme.colors.primary};
    z-index: 2;
    animation: ${fadeInLeft(props => props.$value)} 1s ;
  }
`;

export const PorsLabel = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(${props => props.$value} - 32px);
  top: -50px;
  font-size: 12px;
  padding: 2px 20px;
  font-weight: 300;
  line-height: 1.88rem;
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  animation: ${PlaceInLeft} 1s ;
`;

export const Row = styled(BiSolidDownArrow)`
  font-size: 0.7rem;
  position: absolute;
  left: calc(50% - 0.4rem);
  bottom: -0.55rem;
  z-index: 1;
`;
