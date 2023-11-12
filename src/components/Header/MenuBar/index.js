import { Back, BackContainer, LinksContainer } from "./MenuBar.elements";
import ReactDOM from "react-dom";
import SideBarModal from "./animated/SideBarModal";
import SideBarContainer from "./animated/SideBarContainer";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import {  SildeMenuClose } from "../../../Store/actions/UI-Actions";

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
        <LinksContainer>{/* data  */}</LinksContainer>
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
