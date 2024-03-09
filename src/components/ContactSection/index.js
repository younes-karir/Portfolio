import React from "react";
import {
  ConatctWrapper,
  Container,
  Eelement,
  FormContainer,
  FormWrapper,
  InfoContent,
  InfoTitle,
  InfoWrapper,
  InfosContainer,
  Sub,
  Submit,
  TexteArea,
  TexteField,
  Title,
  TitleContainer,
} from "./ContactSection.elements";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <Container id="contact">
      <TitleContainer>
        <Title>{t("contactTitle")}</Title>
        <Sub>{t("contactQ_1")}</Sub>
      </TitleContainer>
      <ConatctWrapper>
        <FormContainer>
          <Eelement>
            <TexteField
              type="text"
              name="name"
              id="name"
              placeholder={t("contactObject")}
            />
          </Eelement>
          <Eelement>
            <TexteField
              type="email"
              name="email"
              id="email"
              placeholder={t("contactEmail")}
            />
          </Eelement>
          <Eelement $fit={true}>
            <TexteArea
              placeholder={t("contactMessage")}
              name="message"
              id="message"
            />
          </Eelement>
          <Eelement $btn={true}>
            <Submit>
              <span>{t('contactBtn')}</span>
            </Submit>  
          </Eelement> 
        </FormContainer>
        <InfosContainer>
          <InfoWrapper>
            <InfoTitle>{t('contactDetailsTitleEmail')}</InfoTitle>
            <InfoContent>{t('contactDetailsContentEmail')}</InfoContent>
          </InfoWrapper>
          <InfoWrapper>
            <InfoTitle>{t('contactDetailsTitlePhone')}</InfoTitle>
            <InfoContent>{t('contactDetailsContentPhone')}</InfoContent>
          </InfoWrapper>
          <InfoWrapper>
            <InfoTitle>{t('contactDetailsTitleAddress')}</InfoTitle>
            <InfoContent>{t('contactDetailsContentAddress')}</InfoContent>
          </InfoWrapper>
        </InfosContainer>
      </ConatctWrapper>
    </Container>
  );
};

export default ContactSection;
