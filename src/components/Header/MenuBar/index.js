import {
  Back,
  BackContainer,
  Download,
  Home,
  LinkWrapper,
  LinksContainer,
  LinksHolder,
  MLink,
  Resume,
} from "./MenuBar.elements";
import ReactDOM from "react-dom";
import SideBarModal from "./animated/SideBarModal";
import SideBarContainer from "./animated/SideBarContainer";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SildeMenuClose } from "../../../Store/actions/UI-Actions";

const Data = () => {
  const dispatch = useDispatch();
  const theming = useSelector((state) => state.theme.Theme);


  const CloseMenuHAndler = () => {
    dispatch(SildeMenuClose());
  };

  const activeStyle = {
    color : theming.colors.primary,
    fontWeight : '500', 
  }


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
              {/* <Home /> */}
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
                Home
              </MLink>
            </LinkWrapper>
            <LinkWrapper>
              {/* <Home /> */}
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
                about me
              </MLink>
            </LinkWrapper>
            <LinkWrapper>
              {/* <Home /> */}
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
                resume
              </MLink>
            </LinkWrapper>
            <LinkWrapper>
              {/* <Home /> */}
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
                Portfolio
              </MLink>
            </LinkWrapper>
            <LinkWrapper>
              {/* <Home /> */}
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
                contact
              </MLink>
            </LinkWrapper>
            <LinkWrapper>
              <Resume>
                <span>+ Download CV</span>
              </Resume>
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
