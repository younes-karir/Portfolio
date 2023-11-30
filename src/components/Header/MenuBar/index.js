import {
  Back,
  BackContainer,
  LinkWrapper,
  LinksContainer,
  LinksHolder,
  MLink,
  Resume,
} from "./MenuBar.elements";
import ReactDOM from "react-dom";
import SideBarModal from "./animated/SideBarModal";
import SideBarContainer from "./animated/SideBarContainer";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SildeMenuClose } from "../../../Store/actions/UI-Actions";
import ArowIconMenu from "../../../Helpers/Icons/ArowIconMenu";

const Data = () => {
  const [Selected, setSelected] = useState('home');
  const dispatch = useDispatch();
  const theming = useSelector((state) => state.theme.Theme);

  const CloseMenuHAndler = () => {
    dispatch(SildeMenuClose());
  };

  const activeStyle = {
    color: '#fff',
    backgroundColor: theming.colors.primary,
  };

  const selectedHandler =(selected) =>{
    setSelected(selected);
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
                onSetActive={selectedHandler}
              >
                Home
                {Selected === 'home'  && <ArowIconMenu selected={true} />}
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
                onSetActive={selectedHandler}

              >
                {Selected === 'about'  && <ArowIconMenu selected={true} />}
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
                onSetActive={selectedHandler}

              >
                {Selected === 'resume'  && <ArowIconMenu selected={true} />}
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
                onSetActive={selectedHandler}

              >
                {Selected === 'portfolio'  && <ArowIconMenu selected={true} />}
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
                onSetActive={selectedHandler}

              >
                {Selected === 'contact'  && <ArowIconMenu selected={true} />}
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
