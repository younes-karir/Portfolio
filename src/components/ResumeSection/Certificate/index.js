import React from "react";
import {
  CardSub,
  CardTitle,
  Link,
  LinkIcon,
  Container,
  DetailsWrapper,
  Holder,
  TextContainer,
} from "./Certificat.elements";
import IbmIcon from "../../../Helpers/Icons/IbmIcon";
import UdemyIcon from "../../../Helpers/Icons/UdemyIcon";
import {} from "../../PortfolioSection/PortfolioItem/Item.elements";

const Certificate = (props) => {
  return (
    <Container>
      <Holder>{props.item.sub === "IBM" ? <IbmIcon isMobile={props.isMobile}/> : <UdemyIcon isMobile={props.isMobile}/>}</Holder>
      <DetailsWrapper>
        <CardTitle>
          {props.item.title}{" "}
          <Link id="link-show" href="#">
            <LinkIcon />
          </Link>
        </CardTitle>
        <CardSub>{props.item.sub}</CardSub>
        <TextContainer>issued {props.item.year}</TextContainer>
        <TextContainer>Credential ID {props.item.id}</TextContainer>
      </DetailsWrapper>
    </Container>
  );
};

export default Certificate;
