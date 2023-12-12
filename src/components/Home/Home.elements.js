import styled, { keyframes } from "styled-components";

import bck from "../../Helpers/Images/hero_bg_element.png";
import devices from "../../Helpers/Devices";
import { RiMenuLine } from "react-icons/ri";
import { LuMenu } from "react-icons/lu";
import { IoCaretBackSharp } from "react-icons/io5";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-scroll";

import { PiSmileyDuotone } from "react-icons/pi";

const fadeInLeft = keyframes`
0% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
}100% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
`;

const fadeInUp = keyframes`
0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
}100% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
`;

export const Container = styled.section`
  background-image: url(${bck});
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.background};
  background-position: top left;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  /* padding: 0.5rem; */
  gap: 6rem;

  @media ${devices.mobileL} {
    padding: 0.5rem 0.5rem 0rem 0.5rem;
  }

  @media ${devices.tablet} {
    padding: 0.5rem 2rem 0rem 2rem;
  }

  @media ${devices.laptop} {
    padding: 0.5rem 3rem 0rem 3rem;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  position: relative;
  
  @media ${devices.tablet} {
    padding: 1rem 0rem;
  }

  @media ${devices.laptop} {
    padding: 2rem 0rem;
  }
`;

export const LogoContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  padding: 0rem .5rem;


`;
export const Logo = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  line-height: 2rem;
  font-size: 2.5rem;
`;
export const LinksContainer = styled.div`
  width: fit-content;
  height: 100%;
  display: none;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  @media ${devices.tablet} {
    display: flex;
    gap: 15px;
  }

  @media ${devices.laptop} {
    display: flex;
    gap: 25px;
  }
`;
export const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  margin-right: 25px;
  gap: 10px;

  @media ${devices.tablet} {
    gap: 25px;
  }

  @media ${devices.laptop} {
    gap: 35px;
  }
`;
export const SLink = styled(Link)`
  height: fit-content;
  width: fit-content;
  line-height: 1.88rem;
  font-size: 1.05rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text};
  text-transform: capitalize;
  outline: none;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary};
  }

`;

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

  /* &:active {
    transform: translateY(1px);
  } */
`;

export const MobileMenu = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  @media ${devices.mobileL} {
  }

  @media ${devices.tablet} {
    display: none;
  }

  @media ${devices.laptop} {
    display: none;
  }
`;

export const Menu = styled(LuMenu)`
  height: 3rem;
  width: 3rem;
  stroke-width: 2;
`;


// content

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  gap: 30px;

  @media ${devices.tablet} {
    flex-direction: row;
  }

  @media ${devices.laptop} {
    flex-direction: row;
  }
`;

export const Infos = styled.div`
  width: 100%;
  max-height: 52rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media ${devices.tablet} {
    width: 50%;
    padding-bottom: 6rem;
  }

  @media ${devices.laptop} {
    width: 40%;
    align-items: flex-start;
  }
`;
export const HiContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${devices.laptop} {
    justify-content: flex-start;
  }
`;
export const HiButton = styled.button`
  position: relative;
  height: fit-content;
  width: fit-content;
  padding: 0.9rem 2rem;
  border-radius: 3px;
  /* background-color: rgba(77, 99, 221, 0.154); */
  background-color: transparent;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  border-style: solid;
  border-radius: 5px;
  font-size: 1rem;

  animation-duration: 1s;
  animation-name: ${fadeInLeft};
  animation-fill-mode: backwards;
`;

export const Row = styled(IoCaretBackSharp)`
  position: absolute;
  z-index: 0;
  font-size: 1.2rem;
  right: calc(50% - 0.6rem);
  top: calc(100% - 0.3rem);
  transform: rotateZ(-90deg);
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 42rem;

  @media ${devices.laptop} {
    align-items: flex-start;
    gap: 10px;
  }
`;
export const NameContainer = styled.span`
  color: ${(props) => props.theme.colors.title1};
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.5;
  text-transform: capitalize;

  animation-duration: 1.3s;
  animation-delay: 0.4s;
  animation-name: ${fadeInLeft};
  animation-fill-mode: backwards;
`;
export const StatuContainer = styled.span`
  font-size: 1.5rem;
  line-height: 2.25rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 10px;
  animation-duration: 1.5s;
  animation-delay: 0.8s;
  animation-name: ${fadeInLeft};
  animation-fill-mode: backwards;
`;
export const BioContainer = styled.span`
  font-size: 1rem;
  line-height: 1.9rem;
  color: ${(props) => props.theme.colors.text};
  opacity: 0.8;
  text-align: justify;
  font-weight: 400;
  padding: 0rem 0.5rem;
  max-width: 30rem;

  animation-duration: 1.5s;
  animation-delay: 1.1s;
  animation-name: ${fadeInLeft};
  animation-fill-mode: backwards;

  @media ${devices.laptop} {
    padding-left: 0rem;
    max-width: 100%;
  }
`;

export const DownloadHome = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media ${devices.laptop} {
    justify-content: flex-start;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;

export const ResumeHome = styled.button`
  height: fit-content;
  width: fit-content;
  padding: 0.9rem 2rem;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  border-radius: 5px;
  font-size: 1rem;
  transition: transform 0.1s;
  /* box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px; */

  animation-duration: 1.5s;
  animation-delay: 1.4s;
  animation-name: ${fadeInLeft};
  animation-fill-mode: backwards;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const SocialContainer = styled.div`
  width: 100%;
  max-width: 20rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media ${devices.laptop} {
    justify-content: space-between;
    padding-bottom: 1rem;
  }
`;
export const SocialWrapper = styled.div`
  height: 2rem;
  width: fit-content;
  display: flex;
  align-items: center;
  overflow: hidden;

  &:nth-child(1) {
    animation-duration: 1.2s;
    animation-delay: 1.7s;
    animation-name: ${fadeInLeft};
    animation-fill-mode: backwards;
  }
  &:nth-child(2) {
    animation-duration: 1.2s;
    animation-delay: 2s;
    animation-name: ${fadeInLeft};
    animation-fill-mode: backwards;
  }
  &:nth-child(3) {
    animation-duration: 1.2s;
    animation-delay: 2.2s;
    animation-name: ${fadeInLeft};
    animation-fill-mode: backwards;
  }
`;
export const Plus = styled(BiPlus)`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.text};
`;
export const Text = styled.a`
  font-size: 1rem;
  line-height: 1.88rem;
  font-weight: 500;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  text-transform: capitalize;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  overflow: hidden;

  @media ${devices.tablet} {
    width: 50%;
    padding-left: 2rem;
  }

  @media ${devices.laptop} {
    width: 60%;
    padding-left: 4rem;
  }
`;

export const Holder = styled.img`
  width: 70%;
  height: fit-content;
  max-width: 15rem;

  animation-duration: 2s;
  animation-delay: 0.9s;
  animation-name: ${fadeInUp};
  animation-fill-mode: backwards;

  @media ${devices.tablet} {
    max-width: 20rem;
  }

  @media ${devices.laptop} {
    max-width: 25rem;
  }
`;

export const SkillsContainer = styled.div`
  position: absolute;

  z-index: 1;
  width: 100%;
  height: 20rem;
  bottom: -13em;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  @media ${devices.tablet} {
    padding: 0.5rem 2rem 0rem 2rem;
    bottom: -4em;
    height: 8rem;
  }

  @media ${devices.laptop} {
    padding: 0.5rem 3rem 0rem 3rem;
    bottom: -4em;
    height: 8rem;
  }
`;
export const SkillsWrapper = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.header};
  border: solid 1px ${(props) => props.theme.colors.primary};

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;

  @media ${devices.tablet} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media ${devices.laptop} {
    max-width: 72rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const Skill = styled.div`
  height: 100%;
  /* width: 5rem; */
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const IconHolder = styled.img`
  height: 2.5rem;
`;

export const TitleIcon = styled.span`
  font-size: 0.6rem;
  font-weight: 600;
  color: #888;
`;


export const SmileIcon = styled(PiSmileyDuotone)`


`;