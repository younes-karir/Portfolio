import React from "react";
import {
  Container,
  InfosWrapper,
  Link,
  LinkIcon,
  LinkWrapper,
  PortfolioDetails,
  PortfolioImgWrapper,
  Title,
} from "./Item.elements";
import TechItem from "../TechItem";
// import ProjectImg from "../../../Helpers/Images/man_image.png";

const PortfolioItem = () => {
  return (
    <Container>
      <PortfolioImgWrapper>
        {/* <Holder  src={ProjectImg} /> */}
      </PortfolioImgWrapper>
      <PortfolioDetails>
        <LinkWrapper>
          <Title>React Portfolio</Title>
          <Link href="#">
            <LinkIcon />
          </Link>
        </LinkWrapper>
        <InfosWrapper>
          <TechItem >React.js</TechItem>
          <TechItem >redux.js</TechItem>
          <TechItem >styled-components</TechItem>

          {/* <MoreICon /> */}
        </InfosWrapper>
      </PortfolioDetails>
    </Container>
  );
};

export default PortfolioItem;
