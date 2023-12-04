import styled from "styled-components";
import { Link } from "react-scroll";
import { RiHome5Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

import { PiDownloadSimpleFill } from "react-icons/pi";


//  links icons 

import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";


export const BackContainer = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  /* margin-bottom: 2rem; */

  padding-right: 1.5rem;
  padding-top: 1.5rem;


`;
export const Back = styled(IoIosClose)`
  font-size: 3rem;

  color: ${(props) => props.theme.colors.text};
`;
export const LinksContainer = styled.div`
  height: calc(100% - 5rem);
  background-color: ${(props) => props.theme.colors.background.upper};
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
  padding-left: 1rem;
  padding-right: 0.5rem;
`;

export const LinksHolder = styled.div`
  height: fit-content;
  width: 100%;
  border-radius: 3px;
  max-height: 35rem;
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
`;

export const LinkWrapper = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  justify-content: space-between;
  gap: 20px;
`;

export const MLink = styled(Link)`
  /* font-family: sans-serif; */
  height: fit-content;
  position: relative;
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  height: 2rem;
  /* padding-left: 2rem; */
  /* background-color: ${(props) => props.theme.colors.background.upper}; */
  font-size: 1.3rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
  text-transform: capitalize;
  outline: none;
  /* box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    0px 3px 3px rgba(18, 18, 18, 0.04); */

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const Home = styled(RiHome5Line)`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.text};
`;

export const Download = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Resume = styled.button`
  position: relative;
  height: fit-content;
  width: 100%;
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

export const ThemeWrapper = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
export const ElementTitle = styled.h4`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.3rem;
  font-weight: 500;
  /* font-family: sans-serif; */
`;

export const DownloadIcon = styled(PiDownloadSimpleFill)`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.8rem;
`;


export const Span = styled.span`
background-color: #4d63dd;
height: 1px;
`;


export const HomeIcon = styled(HiOutlineHome)`
  font-size:1.6rem;
  color:inherit;
`;
export const AboutIcon = styled(HiOutlineUserCircle)`
  font-size:1.6rem;
  color:inherit;
`;
export const ResumeIcon = styled(HiOutlineDocumentText)`
  font-size:1.6rem;
  color:inherit;
`;
export const PortfolioIcon = styled(HiOutlineBriefcase)`
  font-size:1.6rem;
  color:inherit;
`;
export const ContactIcon = styled(HiOutlineMail)`
  font-size:1.6rem;
  color:inherit;
`;
