import ReactDOM from "react-dom";

import HeaderContainer from "./MenuBar/animated/HeaderContainer";
import {
  Download,
  HeaderWrapper,
  LinksContainer,
  LogoContainer,
  Menu,
  MobileMenu,
  Nav,
  Resume,
  SLink,
  ThemingContainer,
} from "./Header.elements";
import Theming from "../UI/Theming";
import { useDispatch, useSelector } from "react-redux";
import { SildeMenuOpen } from "../../Store/actions/UI-Actions";
import LogoIcon from "../../Helpers/Icons/Logo";
import { useTranslation } from "react-i18next";
import DropList from "../UI/DropList";

import DocResume from "../../Helpers/Documents/resume.pdf";

const Data = (props) => {
  const { t } = useTranslation();
  const theming = useSelector((state) => state.theme.Theme);

  const dispatch = useDispatch();
  const ShowSideMenu = () => {
    dispatch(SildeMenuOpen());
  };

  const activeStyle = {
    color: theming.colors.primary,
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LogoContainer>
          <LogoIcon $size="2rem" $color={theming.colors.text} />
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
              {t("home")}
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
              {t("about")}
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
              {t("resume")}
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
              {t("portfolio")}
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
              {t("contact")}
            </SLink>
          </Nav>
          <ThemingContainer>
            <Theming size={"1.2rem"} />
            <DropList />
          </ThemingContainer>
          <Download>
            {/* <Resume href={DocResume} target="_blank" rel="noreferrer"> */}
            <Resume>
              <span>+ {t("downloadCv")}</span>
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
