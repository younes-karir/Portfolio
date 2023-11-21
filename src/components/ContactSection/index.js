import React from "react";
import {
  ConatctWrapper,
  Container,
  Eelement,
  FormContainer,
  FormWrapper,
  InfosContainer,
  Sub,
  Title,
  TitleContainer,
} from "./ContactSection.elements";

const ContactSection = () => {
  return (
    <Container id="contact">
      <TitleContainer>
        <Title>contact me</Title>
        <Sub>Feel Free Message OR Call Me</Sub>
      </TitleContainer>
      <ConatctWrapper>
        <FormContainer>
            <Eelement></Eelement>
            <Eelement></Eelement>
            <Eelement $fit={true}></Eelement>
            <Eelement  $btn={true}></Eelement>

        </FormContainer>
        <InfosContainer></InfosContainer>
      </ConatctWrapper>
    </Container>
  );
};

export default ContactSection;
