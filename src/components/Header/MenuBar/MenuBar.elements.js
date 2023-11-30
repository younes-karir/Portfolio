import styled from "styled-components";
import { Link } from "react-scroll";
import { RiHome5Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export const BackContainer = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;
export const Back = styled(IoClose)`
  font-size: 2.5rem;
  margin-right: 1.2rem;
  transform: scale(-1, 1);
  color: ${(props) => props.theme.colors.primary};
`;
export const LinksContainer = styled.div`
  height: calc(100% - 5rem);
  background-color: ${(props) => props.theme.colors.background.base};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 0.5rem;
`;

export const LinksHolder = styled.div`
  height: 80%;
  width: 100%;
  border-radius: 3px;
  max-height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LinkWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 20px;
`;

export const MLink = styled(Link)`
  height: fit-content;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  height: 4rem;
  padding-left: 2rem;
  background-color: ${(props) => props.theme.colors.background.upper};
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  text-transform: capitalize;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    0px 3px 3px rgba(18, 18, 18, 0.04);

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
  }

  &:active {
    transform: translateY(1px);
  }
`;
