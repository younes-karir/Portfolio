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
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SildeMenuClose } from "../../../Store/actions/UI-Actions";
import ArowIconMenu from "../../../Helpers/Icons/ArowIconMenu";
import Theming from "../../UI/Theming";

const Data = () => {

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
                Home
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
                about me
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
                resume
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
                Portfolio
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
                contact
              </MLink>
            </LinkWrapper>
            <Span />
            <LinkWrapper>
              <ElementTitle>Resume</ElementTitle>
              <DownloadIcon />
            </LinkWrapper>
            <ThemeWrapper>
              <ElementTitle>Theme</ElementTitle>
              <Theming size={"1.7rem"} />
            </ThemeWrapper>
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
