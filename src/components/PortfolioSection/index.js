import React from "react";
import {
  Container,
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
      </ProjectsWrapper>
    </Container>
  );
};

export default PortfolioSection;
