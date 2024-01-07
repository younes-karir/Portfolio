import React from "react";
import {
  Container,
  LinkRow,
  MoreLink,
  MoreWrapper,
  ProjectsWrapper,
  Sub,
  Title,
  TitleContainer,
} from "./PortfolioSection.elements";
import PortfolioItem from "./PortfolioItem";
import { useTranslation } from "react-i18next";




const PortfolioSection = () => {
  const {t} = useTranslation();
  return (
    <Container id="portfolio">
      <TitleContainer>
        <Title>{t('portfolioTitle')}</Title>
        <Sub>{t('portfolioQ_1')}</Sub>
      </TitleContainer>
      <ProjectsWrapper>
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
      </ProjectsWrapper>
      <MoreWrapper href="#">
        <MoreLink >{t('portfolioVisiteMyRep')}</MoreLink>
        <LinkRow/>
      </MoreWrapper>
    </Container>
  );
};

export default PortfolioSection;
