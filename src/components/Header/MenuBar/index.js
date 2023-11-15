import { Back, BackContainer, Download, Home, LinkWrapper, LinksContainer, MLink, Resume } from "./MenuBar.elements";
import ReactDOM from "react-dom";
import SideBarModal from "./animated/SideBarModal";
import SideBarContainer from "./animated/SideBarContainer";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { SildeMenuClose } from "../../../Store/actions/UI-Actions";

const Data = () => {
  const dispatch = useDispatch();

  const CloseMenuHAndler = () => {
    dispatch(SildeMenuClose());
  };

  return (
    <Fragment>
      <SideBarModal />
      <SideBarContainer>
        <BackContainer>
          <Back onClick={CloseMenuHAndler} />
        </BackContainer>
        <LinksContainer>
          <LinkWrapper>
            <Home />
            <MLink
              id="1"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              // activeStyle={activeStyle}
            >
              Home
            </MLink>
          </LinkWrapper>
          <LinkWrapper>
            <Home />
            <MLink
              id="1"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              // activeStyle={activeStyle}
            >
              Home
            </MLink>
          </LinkWrapper>
          <LinkWrapper>
            <Home />
            <MLink
              id="1"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              // activeStyle={activeStyle}
            >
              Home
            </MLink>
          </LinkWrapper>
          <LinkWrapper>
            <Home />
            <MLink
              id="1"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              // activeStyle={activeStyle}
            >
              Home
            </MLink>
          </LinkWrapper>
          <Download>
            <Resume>
              <span>+ Download CV</span>
            </Resume>
          </Download>
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
