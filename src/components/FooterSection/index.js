import React from "react";
import {
  Container,
  CopyRightsLabel,
  CopyRightsWrapper,
  FacebookICon,
  GithubIcon,
  InstagramIcon,
  InternalLinks,
  LinkedICon,
  LinksWrapper,
  LogoLabel,
  SLink,
  SocialLink,
  SocialLinks,
  TwitterIcon,
} from "./FooterSection.elements";

const FooterSection = () => {
  return (
    <Container>
      <LinksWrapper>
        <InternalLinks>
          <SLink
            id="1"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Home
          </SLink>
          <SLink
            id="2"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            About
          </SLink>
          <SLink
            id="3"
            to="resume"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Resume
          </SLink>
          <SLink
            id="4"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Portfolio
          </SLink>
        </InternalLinks>
        <SocialLinks>
            <SocialLink  src='#'><FacebookICon /></SocialLink>
            <SocialLink><LinkedICon /></SocialLink>
            <SocialLink><GithubIcon /></SocialLink>
            <SocialLink><InstagramIcon /></SocialLink>
            <SocialLink><TwitterIcon /></SocialLink>
        </SocialLinks>
      </LinksWrapper>
      <CopyRightsWrapper>
        <CopyRightsLabel>Copyright © 2023 KARIR</CopyRightsLabel>
        <LogoLabel>KARIR</LogoLabel>
      </CopyRightsWrapper>
    </Container>
  );
};

export default FooterSection;
