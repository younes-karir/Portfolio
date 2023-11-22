import React from "react";
import {
  ConatctWrapper,
  Container,
  Eelement,
  FormContainer,
  FormWrapper,
  InfosContainer,
  Sub,
  Submit,
  TexteArea,
  TexteField,
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
          <Eelement>
            <TexteField
              type="text"
              name="name"
              id="name"
              placeholder="Object"
            />
          </Eelement>
          <Eelement>
            <TexteField
              type="email"
              name="email"
              id="email"
              placeholder="Type Email Here"
            />
          </Eelement>
          <Eelement $fit={true}>
            <TexteArea placeholder="Message" name="message" id="message" />
          </Eelement>
          <Eelement $btn={true}>
          <Submit>
              <span>+ Mesage Me</span>
            </Submit>
          </Eelement>
        </FormContainer>
        <InfosContainer></InfosContainer>
      </ConatctWrapper>
    </Container>
  );
};

export default ContactSection;
