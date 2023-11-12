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
  ProfileWrapper,
  SectionContainer,
  Sub,
  Title,
  TitleContainer,
} from "./About.elements";

import ProfileImg from "../../Helpers/Images/main_profile.png";

const AboutSection = () => {

  return (
    <Container  id="about" >
      <TitleContainer>
        <Title>About me</Title>
        <Sub>Freelance Graphic & Web Designer</Sub>
      </TitleContainer>
      <SectionContainer>
        <ProfileWrapper>
          <Holder src={ProfileImg}  />
        </ProfileWrapper>
        <InfosWrapper>
          <AboutText>
            Hello! I,m Spruce Springlane Graphic &amp; Web Design and Web
            Developer.
          </AboutText>
          <ExperienceText>Have 6 Years Experienced</ExperienceText>
          <Details>
            Maborisum ipsum dolor seat ameconsecteturers seat more be elite
            consecteture. ContrarpopulabelLoreIpsum is notili more consecteture
            elite Maborisum ipsum dolor seat ameconsecteturers seat more be
            elite consecteture. ContrarpopulabelLoreIpsum is notili more
            consecteture elite.
          </Details>
          <ContactContainer>
            <ContactWrapper>
              <ContactTitle>Phone :</ContactTitle>
              <ContactContent>+212660895757</ContactContent>
            </ContactWrapper>
            <ContactWrapper>
              <ContactTitle>E-Mail :</ContactTitle>
              <ContactContent>youneskarir@gmail.com</ContactContent>
            </ContactWrapper>
            <ContactWrapper>
              <ContactTitle>Adresse :</ContactTitle>
              <ContactContent>Beni Mellal, Morroco.</ContactContent>
            </ContactWrapper>
            {/* <ContactWrapper>
                <ContactTitle>Phone :</ContactTitle>
                <ContactContent>+00000000</ContactContent>
              </ContactWrapper> */}
          </ContactContainer>
        </InfosWrapper>
      </SectionContainer>
    </Container>
  );
};

export default AboutSection;
