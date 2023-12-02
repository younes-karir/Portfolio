import ReactDOM from "react-dom";
import HeaderContainer from "./MenuBar/animated/HeaderContainer";
import {
  Download,
  HeaderWrapper,
  LinksContainer,
  Logo,
  LogoContainer,
  Menu,
  MobileMenu,
  Nav,
  Resume,
  SLink,
} from "./Header.elements";
import Theming from "../UI/Theming";
import { useDispatch, useSelector } from "react-redux";
import { SildeMenuOpen } from "../../Store/actions/UI-Actions";
import LogoIcon from "../../Helpers/Icons/Logo";
import LogoMobileIcon from "../../Helpers/Icons";

const Data = (props) => {
  const theming = useSelector((state) => state.theme.Theme);

  const dispatch = useDispatch();
  const ShowSideMenu = () => {
    dispatch(SildeMenuOpen());
  };

  const activeStyle = {
    color: theming.colors.primary,
    fontWeight: "500",
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LogoContainer>
          <LogoIcon $size='2rem' $color={theming.colors.text} />
          {/* <LogoMobileIcon /> */}

          {/* <Logo>KARIR</Logo> */}
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
      </HeaderWrapper>
    </HeaderContainer>
  );
};

const Header = () => {
  return ReactDOM.createPortal(
    <Data />,
    document.getElementById("portal-root")
  );
};

export default Header;
