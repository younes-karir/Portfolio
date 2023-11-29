import styled from "styled-components";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-scroll";
import { RiHome5Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export const BackContainer = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  /* padding-right: 1rem; */
`;
export const Back = styled(IoClose)`
  font-size: 2.5rem;
  margin-right: 1rem;
  transform: scale(-1, 1);
  color: ${(props) => props.theme.colors.primary};
`;
export const LinksContainer = styled.div`
  height: calc(100% - 5rem);
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem 0rem 1rem;
`;

export const LinksHolder = styled.div`
  background-color: ${(props) => props.theme.colors.header};
  height: 80%;
  width: 100%;
  border-radius: 3px;
  padding-left: 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  max-height: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LinkWrapper = styled.div`
  width: 100%;
  padding: 1rem 0rem;
  height: fit-content;
  display: flex;
  gap: 20px;
`;

export const MLink = styled(Link)`
  height: fit-content;
  width: fit-content;
  line-height: 1.88rem;
  font-size: 1.2rem;
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
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  color: #fff;
  border-radius: 5px;
  font-size: 1rem;

  & span {
    position: relative;
    z-index: 2;
  }

  &:hover {
    cursor: pointer;
    /* transition: transform 0.1s; */
  }

  &:active {
    transform: translateY(1px);
  }
`;
