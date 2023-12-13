import {
  AboutIcon,
  Back,
  BackContainer,
  ContactIcon,
  DownloadIcon,
  ElementTitle,
  HomeIcon,
  LinkWrapper,
  LinksContainer,
  LinksHolder,
  MLink,
  PortfolioIcon,
  ResumeIcon,
  Span,
  ThemeWrapper,
} from "./MenuBar.elements";
import ReactDOM from "react-dom";
import SideBarModal from "./animated/SideBarModal";
import SideBarContainer from "./animated/SideBarContainer";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SildeMenuClose } from "../../../Store/actions/UI-Actions";
import { useTranslation } from "react-i18next";
import ThemingMob from "../../UI/ThemeSwitch";
import MobDropList from "../../UI/MobDropList";

const Data = () => {
  const { t } = useTranslation();
  // const screenSize = useScreenSize();
  const dispatch = useDispatch();
  const theming = useSelector((state) => state.theme.Theme);

  const CloseMenuHAndler = () => {
    dispatch(SildeMenuClose());
  };

  const activeStyle = {
    color: theming.colors.primary,
  };

  return (
    <Fragment>
      <SideBarModal />
      <SideBarContainer>
        <BackContainer>
          <Back onClick={CloseMenuHAndler} />
        </BackContainer>
        <LinksContainer>
          <LinksHolder>
            <LinkWrapper>
              <MLink
                id="1"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={CloseMenuHAndler}
                activeStyle={activeStyle}
              >
                <HomeIcon />
                {t("home")}
              </MLink>
            </LinkWrapper>
            <LinkWrapper>
              <MLink
                id="1"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={CloseMenuHAndler}
                activeStyle={activeStyle}
              >
                <AboutIcon />
                {t("about")}
              </MLink>
            </LinkWrapper>
            <LinkWrapper>
              <MLink
                id="2"
                to="resume"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={CloseMenuHAndler}
                activeStyle={activeStyle}
              >
                <ResumeIcon />
                {t("resume")}
              </MLink>
            </LinkWrapper>
            <LinkWrapper>
              <MLink
                id="3"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={CloseMenuHAndler}
                activeStyle={activeStyle}
              >
                <PortfolioIcon />
                {t("portfolio")}
              </MLink>
            </LinkWrapper>
            <LinkWrapper>
              <MLink
                id="4"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={CloseMenuHAndler}
                activeStyle={activeStyle}
              >
                <ContactIcon />
                {t("contact")}
              </MLink>
            </LinkWrapper>
            <Span />
            <LinkWrapper>
              <ElementTitle>{t("resume")}</ElementTitle>
              <DownloadIcon />
            </LinkWrapper>
            <ThemeWrapper>
              <ElementTitle>{t("Theme")}</ElementTitle>
              <ThemingMob />
            </ThemeWrapper>
            <LinkWrapper $expend={true}>
              <MobDropList />
            </LinkWrapper>
          </LinksHolder>
        </LinksContainer>
      </SideBarContainer>
    </Fragment>
  );
};

const MenuBar = () => {
  return ReactDOM.createPortal(
    <Data />,
    document.getElementById("portal-root")
  );
};

export default MenuBar;
