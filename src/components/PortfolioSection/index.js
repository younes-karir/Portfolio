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




const PortfolioSection = () => {
  return (
    <Container id="portfolio">
      <TitleContainer>
        <Title>MY PORTFOLIO</Title>
        <Sub>Recent Works</Sub>
      </TitleContainer>
      <ProjectsWrapper>
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
      </ProjectsWrapper>
      <MoreWrapper href="#">
        <MoreLink >Visite my repositories</MoreLink>
        <LinkRow/>
      </MoreWrapper>
    </Container>
  );
};

export default PortfolioSection;
