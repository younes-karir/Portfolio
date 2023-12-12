import {
  AboutText,
  ContactContainer,
  ContactContent,
  ContactTitle,
  ContactWrapper,
  Container,
  Details,
  ExperienceText,
  Holder,
  InfosWrapper,
  LocationIcon,
  ProfileWrapper,
  SectionContainer,
  Sub,
  Title,
  TitleContainer,
} from "./About.elements";

import ProfileImg from "../../Helpers/Images/main_profile.png";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const {t} = useTranslation();
  return (
    <Container  id="about" >
      <TitleContainer>
        <Title>{t('aboutTitle')}</Title>
        <Sub>{t('aboutQ_1')}</Sub>
      </TitleContainer>
      <SectionContainer>
        <ProfileWrapper>
          <Holder src={ProfileImg}  />
        </ProfileWrapper>
        <InfosWrapper>
          <AboutText>
           { t('aboutSub')}
          </AboutText>
          <ExperienceText>{t('aboutExp')}</ExperienceText>
          <Details>
           {t('bio_2')}
          </Details>  
          <ContactContainer>
            <ContactWrapper>
              <ContactTitle>{t('phoneTitle')} :</ContactTitle>
              <ContactContent>+212660895757</ContactContent>
            </ContactWrapper>
            <ContactWrapper>
              <ContactTitle>{t('emailTitle')} :</ContactTitle>
              <ContactContent>youneskarir@gmail.com</ContactContent>
            </ContactWrapper>
            <ContactWrapper>
              <ContactTitle>{t('adressTitle')} :</ContactTitle>
              <ContactContent>{/*<LocationIcon/>*/}{t('adressData')}</ContactContent>
            </ContactWrapper>
          </ContactContainer>
        </InfosWrapper>
      </SectionContainer>
    </Container>
  );
};

export default AboutSection;
