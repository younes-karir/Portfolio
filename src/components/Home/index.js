import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Content,
  Download,
  Header,
  LinksContainer,
  LogoContainer,
  Nav,
  Resume,
  Menu,
  MobileMenu,
  Infos,
  Profile,
  HiContainer,
  HiButton,
  Row,
  InformationContainer,
  NameContainer,
  StatuContainer,
  BioContainer,
  DownloadHome,
  ResumeHome,
  SocialContainer,
  SocialWrapper,
  Text,
  Plus,
  Holder,
  SLink,
} from "./Home.elements";
import { SildeMenuOpen } from "../../Store/actions/UI-Actions";
import Theming from "../UI/Theming";

import defaultImg from "../../Helpers/Images/profile.png";
import LogoIcon from "../../Helpers/Icons/Logo";
import { useTranslation } from "react-i18next";
import { ThemingContainer } from "../Header/Header.elements";
import DropList from "../UI/DropList";


const Home = () => {
  const {t} = useTranslation();
  const theming = useSelector((state) => state.theme.Theme);

  const dispatch = useDispatch();
  const ShowSideMenu = () => {
    dispatch(SildeMenuOpen());
  };

  const activeStyle = {
    color : theming.colors.primary,
  }


  return (
    <Container id="home">
      <Header>
        <LogoContainer>
          {/* <Logo>KARIR</Logo> */}
          <LogoIcon $size='2rem' $color={theming.colors.primary}/>

        </LogoContainer>
        <LinksContainer>
          <Nav>
            <SLink
              id="1"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              activeStyle={activeStyle}


            >
              {t('home')}
            </SLink>
            <SLink
              id="2"
              to="about"
              spy={true}
              smooth={true}
              offset={5}
              duration={500}
              activeStyle={activeStyle}

            >
              {t('about')}
            </SLink>
            <SLink
              id="3"
              to="resume"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              activeStyle={activeStyle}

            >
              {t('resume')}
            </SLink>
            <SLink
              id="4"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              activeStyle={activeStyle}

            >
              {t('portfolio')}
            </SLink>
            <SLink
              id="5"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              activeStyle={activeStyle}

            >
              {t('contact')}
            </SLink>
          </Nav>
          <ThemingContainer>
            <Theming size={"1.2rem"} />
            <DropList />
          </ThemingContainer>
          <Download>
            <Resume>
              <span>+ {t('downloadCv')}</span>
            </Resume>
          </Download>
        </LinksContainer>
        <MobileMenu>
          <Menu onClick={ShowSideMenu} />
        </MobileMenu>
      </Header>
      <Content>
        <Infos>
          <HiContainer>
            <HiButton>
              {t('hiThere')}
              <Row />
            </HiButton>
          </HiContainer>
          <InformationContainer>
            <NameContainer>younes karir</NameContainer>
            <StatuContainer>
              <span>{t('status')} </span>
            </StatuContainer>
            <BioContainer>
            {t('bio_1')}
            </BioContainer>
            <DownloadHome>
              <ResumeHome>+ {t('downloadCv')}</ResumeHome>
            </DownloadHome>
            <SocialContainer>
              <SocialWrapper>
                <Plus />
                <Text href="#">Facebook</Text>
              </SocialWrapper>
              <SocialWrapper>
                <Plus />
                <Text href="#">Github</Text>
              </SocialWrapper>
              <SocialWrapper>
                <Plus />
                <Text href="#">Linkedin</Text>
              </SocialWrapper>
            </SocialContainer>
          </InformationContainer>
        </Infos>
        <Profile>
          <Holder src={defaultImg} />
        </Profile>
      </Content>
    </Container>
  );
};

export default Home;
