import styled from "styled-components";
import { animated, useTransition } from "react-spring";
import devices from "../../../../Helpers/Devices";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SideBarModal = ({ children }) => {
  const showBox = useSelector((state) => state.UI.sideMenu);


  useEffect(() => {
    if(showBox){
      document.body.style.overflowY = "hidden";
    }else{
      document.body.style.overflowY = "scroll";
    }
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [showBox]);



  const BoxTransition = useTransition(showBox, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 300,
    },
  });

  return BoxTransition((style, item) => (item ? <Box style={style}>{children}</Box> : ""));
};

export default SideBarModal;

const Box = styled(animated.div)`
  display: block;
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 15;

  @media ${devices.laptop} {
    display: none;
  }
`;
