import React from "react";
import { CardSub, CardTitle, CardTitleContainer, Container, Detail, DetailsWrapper, Holder, Punkt, PunktWrapper, TItem, TextContainer, Year, YearContainer } from "./Certificat.elements";

const Certificate = (props) => {
  return (
    <Container>
      <Holder  src={props.item.img}/>
      <DetailsWrapper>
       <CardTitleContainer>
        <CardTitle>{props.item.title}</CardTitle>
        <CardSub>
          {props.item.sub}
        </CardSub>
      </CardTitleContainer>
      <TextContainer>
          {/* <TItem>
            <PunktWrapper>
              <Punkt />
            </PunktWrapper>
            <Detail>efwf ewfwef</Detail>
          </TItem> */}
      </TextContainer>
      </DetailsWrapper>
    </Container>
  );
};

export default Certificate;
