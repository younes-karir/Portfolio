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
    <Container href={props.item.link} target="_blank">
      <Holder>{props.item.source === "IBM" ? <IbmIcon isMobile={props.isMobile}/> : <UdemyIcon isMobile={props.isMobile}/>}</Holder>
      <DetailsWrapper>
        <CardTitle>
          {props.item.title}
          <Link id="link-show">
            <LinkIcon />
          </Link>
        </CardTitle>
        <TextContainer>issued {props.item.year}</TextContainer>
        <TextContainer>Credential ID {props.item.CrId}</TextContainer>
      </DetailsWrapper>
    </Container>
  );
};

export default Certificate;
