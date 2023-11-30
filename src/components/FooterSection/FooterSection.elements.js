import styled from "styled-components";
import { Link } from "react-scroll";

import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";
import devices from "../../Helpers/Devices";

export const Container = styled.footer`
  height: fit-content;
  width: 100%;
  background-color: none;
  background-color: ${(props) => props.theme.colors.background.middle};
  padding: 1rem 0.5rem 0rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    0px 3px 5px rgba(0, 0, 0, 0.04);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  @media ${devices.mobileL} {
    padding: 1rem 1rem 1rem 1rem;
  }

  @media ${devices.tablet} {
    padding: 1rem 1rem 0rem 1rem;
  }

  @media ${devices.tablet} {
    padding: 1rem 3rem 0rem 3rem;
  }

  @media ${devices.laptop} {
    padding: 1rem 5rem 0rem 3rem;
  }
`;

export const LinksWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: .5rem 0rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;

  @media ${devices.tablet} {
    

    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0rem;
  }
`;

export const InternalLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;
export const SLink = styled(Link)`
  height: fit-content;
  width: fit-content;
  line-height: 1.88rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
  text-transform: capitalize;
  outline: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  @media ${devices.tablet} {
    justify-content: flex-end;
  }
`;
export const SocialLink = styled.a`
  color: ${(props) => props.theme.colors.text};
`;

export const FacebookICon = styled(FaFacebook)`
  color: inherit;
  font-size: 1.1rem;
`;
export const LinkedICon = styled(FaLinkedin)`
  color: inherit;
  font-size: 1.1rem;
`;
export const InstagramIcon = styled(FaInstagram)`
  color: inherit;
  font-size: 1.1rem;
`;

export const TwitterIcon = styled(FaSquareXTwitter)`
  color: inherit;
  font-size: 1.1rem;
`;

export const GithubIcon = styled(FaGithub)`
  color: inherit;
  font-size: 1.1rem;
`;

export const CopyRights = styled(FaRegCopyright)`
  color: inherit;
  font-size: 1.1rem;
`;

export const CopyRightsWrapper = styled.div`
  border-top: solid 1px ${(porps) => porps.theme.colors.text};
  width: 100%;
  height: 100%;
  padding: .5rem 0rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;

  @media ${devices.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0rem;
  }
`;
export const CopyRightsLabel = styled.div`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.text};
  opacity: 0.5;
  display: flex;
  align-items: center;


`;

export const LogoLabel = styled.h2`
  text-align: left;
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  font-size: 1.5em;

  @media ${devices.tablet} {
    text-align: right;
  }
`;
