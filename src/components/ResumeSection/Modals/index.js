import React from "react";
import {
  CardSub,
  CardTitle,
  CardTitleContainer,
  Container,
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
        <CardSub>{props.item.sub}</CardSub>
      </CardTitleContainer>
      <TextContainer>{props.item.details}</TextContainer>
    </Container>
  );
};

export default Modal;
