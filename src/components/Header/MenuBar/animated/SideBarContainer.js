import styled from "styled-components";
import { animated, useTransition } from "react-spring";
import devices from "../../../../Helpers/Devices";
import { useSelector } from "react-redux";


import { PiDownloadSimpleFill } from "react-icons/pi";

const SideBarContainer = ({ children }) => {
  const showMenu = useSelector((state) => state.UI.sideMenu);

  const BoxTransition = useTransition(showMenu, {
    from: { x: 400 },
    enter: { x: 0 },
    leave: { x: 400 },
    config: {
      duration: 250,
    },
  });

  return BoxTransition((style, item) =>
    item ? <Box style={style}>{children}</Box> : ""
  );
};

export default SideBarContainer;

const Box = styled(animated.div)`
  position: fixed;
  height: 100%;
  width: 80%;
  max-width: 25rem;
  right: 0;
  background-color: ${(props) => props.theme.colors.background.upper};
  z-index: 15;  
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 2rem; */

  @media ${devices.laptop} {
    display: none;
  }
`;
