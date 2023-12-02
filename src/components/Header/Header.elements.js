import styled from "styled-components";
import devices from "../../Helpers/Devices";
import { RiMenuLine } from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";
import { LuMenu } from "react-icons/lu";

import {Link} from 'react-scroll';


export const HeaderWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media ${devices.tablet} {
    padding: 0rem 0rem;
  }

  @media ${devices.laptop} {
    padding: 0rem 0rem;
  }
`;

export const LogoContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
 
`;
export const Logo = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  line-height: 2rem;
  font-size: 2.2rem;
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
    gap: 30px;
  }

  @media ${devices.laptop} {
    gap: 50px;
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
export const To = styled.span`

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

  &:active {
    transform: translateY(1px);
  }
`;

export const MobileMenu = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
  background-color: green;  
  
  @media ${devices.mobileL} {
  }

  @media ${devices.tablet} {
    display: none;
  }

  @media ${devices.laptop} {
    display: none;
  }
`;

export const Menu = styled(CgMenuGridO)`
  height: 2.5rem;
  width: 2.5rem;
`;
