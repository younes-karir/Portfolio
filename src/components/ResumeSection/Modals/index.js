import React from "react";
import {
  CardSub,
  CardTitle,
  CardTitleContainer,
  Container,
  Detail,
  Punkt,
  PunktWrapper,
  SchoolIcon,
  TItem,
  TextContainer,
  Year,
  YearContainer,
} from "./Modal.elements";

const Modal = (props) => {
  return (
    <Container>
      <YearContainer>
        <Year>{props.item.year}</Year>
      </YearContainer>
      <CardTitleContainer>
        <CardTitle>{props.item.title}</CardTitle>
        <CardSub>
          <SchoolIcon />
          {props.item.sub} | {props.item.place}
        </CardSub>
      </CardTitleContainer>
      <TextContainer>
        {props.item.details.map((i) => (
          <TItem>
            <PunktWrapper>
              <Punkt />
            </PunktWrapper>
            <Detail>{i}</Detail>
          </TItem>
        ))}
      </TextContainer>
    </Container>
  );
};

export default Modal;
