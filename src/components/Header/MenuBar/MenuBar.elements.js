import styled from "styled-components";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-scroll";
import { RiHome5Line } from "react-icons/ri";



export const BackContainer = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  /* padding-right: 1rem; */
`;
export const Back = styled(IoChevronBack)`
  font-size: 2.5rem;
  transform: scale(-1, 1);
  color: ${(props) => props.theme.colors.primary};
`;
export const LinksContainer = styled.div`
  height: calc(100% - 5rem);
  width: 100%;
  display: flex;
  flex-direction: column;
`;


export const LinkWrapper = styled.div`
width: 100%;
height: fit-content;
display: flex;
align-items: center;
justify-content:center;
gap: 20px;

padding-top: 2rem;

`;


export const MLink = styled(Link)`
  height: fit-content;
  width: fit-content;
  line-height: 1.88rem;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
  text-transform: capitalize;
  outline: none;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary};
  }

`;


export const Home = styled(RiHome5Line)`
 font-size: 2rem;
 color: ${(props) => props.theme.colors.text};

`;
export const About = styled(RiHome5Line)``;
export const ResumeIcon = styled(RiHome5Line)``;
export const Portfolio = styled(RiHome5Line)``;
export const Contact = styled(RiHome5Line)``;


export const Download = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Resume = styled.button`
  position: relative;
  height: fit-content;
  width: fit-content;
  padding: 0.9rem 1rem;
  border-radius: 3px;
  background-color: transparent;
  border-width: 1.5px;
  border-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  border-style: solid;
  border-radius: 5px;
  font-size: 1rem;
  overflow: hidden;

  transition: all 0.3s;

  & span {
    position: relative;
    z-index: 2;
  }

  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: ${(props) => props.theme.colors.primary};
    transition: width 0.3s 200ms;
  }

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: rgba(77, 99, 221, 0.35);
    transition: all 0.3s;
    z-index: 1;
  }

  &:hover {
    color: #fff;
    cursor: pointer;
    /* transition: transform 0.1s; */
  }

  &:hover:after {
    width: 100%;
  }

  &:hover:before {
    width: 100%;
  }

  &:active {
    transform: translateY(1px);
  }
`;
