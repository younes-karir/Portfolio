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
          {props.name === 'ed' && <SchoolIcon />}
          {props.item.sub} 
        </CardSub>
      </CardTitleContainer>
      <TextContainer>
        {props.item.details.map((i) => (
          <TItem key={i}>
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
