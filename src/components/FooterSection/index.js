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
import { useTranslation } from "react-i18next";


const FooterSection = () => {
  const {t} = useTranslation();
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
            {t('home')}
          </SLink>
          <SLink
            id="2"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {t('about')}
          </SLink>
          <SLink
            id="3"
            to="resume"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {t('resume')}
          </SLink>
          <SLink
            id="4"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {t('portfolio')}
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
        <CopyRightsLabel>{t('copyRights')} © 2023 KARIR</CopyRightsLabel>
        <LogoLabel>KARIR</LogoLabel>
      </CopyRightsWrapper>
    </Container>
  );
};

export default FooterSection;
