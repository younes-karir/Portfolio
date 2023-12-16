import styled from "styled-components";
import devices from "../../../Helpers/Devices";

import { MdOutlineReadMore } from "react-icons/md";
import { MdMoreHoriz } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLink } from "react-icons/io5";
import { RiLinksLine } from "react-icons/ri";

export const Container = styled.div`
  height: 25rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
     ${(props) => props.theme.colors.BoderCard}  0px 0px 0px 1px;

    background-color: ${props => props.theme.colors.background.base};

  @media ${devices.laptop} {
    max-width: 25rem;
  }
`;

export const PortfolioImgWrapper = styled.div`
  width: 100%;
  height: 70%;
  background-color: ${props => props.theme.colors.background.header};
`;

export const Holder = styled.img``;

export const PortfolioDetails = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
`;
export const LinkWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding-left: 15px;
  display: flex;
  align-items: center;

  gap: 10px;
  color: ${porps => porps.theme.colors.text};


`;
export const Title = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  text-transform: capitalize;
`;
export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover{
    cursor: pointer;
  }

`;
export const LinkIcon = styled(RiLinksLine)`
color: inherit;
  font-size:1rem;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const InfosWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  overflow: hidden;
`;


export const MoreICon = styled(MdMoreHoriz)`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.primary};

`;
