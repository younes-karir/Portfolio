import styled, { keyframes } from "styled-components";

const ldsRipple = keyframes`
   0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
  `;

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 200;
  background-color: ${(props) => props.theme.colors.background.base};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;
export const Eclips = styled.div`
  position: absolute;
  border: 2px solid ${(props) => props.theme.colors.primary};
  opacity: 1;
  border-radius: 50%;
  top: 36px;
  left: 36px;
  width: 0;
  height: 0;
  opacity: 0;
  animation: ${ldsRipple} 1300ms cubic-bezier(0, 0.2, 0.8, 1) infinite;

  &:nth-child(2) {
    animation-delay: -0.5s;
  }
`;
