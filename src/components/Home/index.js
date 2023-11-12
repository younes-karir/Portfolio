import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Content,
  Download,
  Header,
  LinksContainer,
  Logo,
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

// import reactIcon from "../../Helpers/Icons/react.svg";
// import reduxIcon from "../../Helpers/Icons/redux.svg";
// import ExpressIcon from "../../Helpers/Icons/express.svg";
// import MongodbIcon from "../../Helpers/Icons/mongodb.svg";
// import SCIcon from "../../Helpers/Icons/styled-components.svg";
// import jsIcon from "../../Helpers/Icons/js.svg";

const Home = () => {
  const theming = useSelector((state) => state.theme.Theme);

  const dispatch = useDispatch();
  const ShowSideMenu = () => {
    dispatch(SildeMenuOpen());
  };

  const activeStyle = {
    color : theming.colors.primary,
    fontWeight : '500',
  }


  return (
    <Container id="home">
      <Header>
        <LogoContainer>
          <Logo>KARIR</Logo>
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
              Home
            </SLink>
            <SLink
              id="2"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              activeStyle={activeStyle}

            >
              About
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
              Resume
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
              Portfolio
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
              Contact
            </SLink>
          </Nav>
          <Theming />
          <Download>
            <Resume>
              <span>+ Download CV</span>
            </Resume>
          </Download>
        </LinksContainer>
        <MobileMenu>
          <Menu onClick={ShowSideMenu} />
        </MobileMenu>
      </Header>
      {/* Content  */}
      <Content>
        <Infos>
          <HiContainer>
            <HiButton>
              Hi! There
              <Row />
            </HiButton>
          </HiContainer>
          <InformationContainer>
            <NameContainer>younes karir</NameContainer>
            <StatuContainer>
              <span>I'm a Web Developper :)</span>
              {/* <span>|</span> */}
            </StatuContainer>
            <BioContainer>
              Maborisum ipsum dolor seat ameat consecteturetel seat more be
              elite. Maborisum ipsum dolor seat ameat.
            </BioContainer>
            <DownloadHome>
              <ResumeHome>+ Download CV</ResumeHome>
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
      {/* <SkillsContainer>
        <SkillsWrapper>
        <Skill>
            <IconHolder src={jsIcon} />
            <TitleIcon>Javascript</TitleIcon>
          </Skill>
          <Skill>
            <IconHolder src={reactIcon} />
            <TitleIcon>React js</TitleIcon>
          </Skill>
          <Skill>
            <IconHolder src={SCIcon}  />
            <TitleIcon>Styled-componenets</TitleIcon>
          </Skill>
          <Skill>
            <IconHolder src={reduxIcon} />
            <TitleIcon>Redux js</TitleIcon>
          </Skill>
          <Skill>
            <IconHolder src={ExpressIcon} />
            <TitleIcon>Express js</TitleIcon>
          </Skill>
          <Skill>
            <IconHolder src={MongodbIcon} />
            <TitleIcon>Mongodb</TitleIcon>
          </Skill>
          <Skill>
            <IconHolder src={MongodbIcon} />
            <TitleIcon>Mongodb</TitleIcon>
          </Skill>
          <Skill>
            <IconHolder src={MongodbIcon} />
            <TitleIcon>Mongodb</TitleIcon>
          </Skill>
        </SkillsWrapper>
      </SkillsContainer> */}
    </Container>
  );
};

export default Home;
