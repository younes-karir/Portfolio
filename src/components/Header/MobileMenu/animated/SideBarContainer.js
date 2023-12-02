import styled from "styled-components";
import { animated, useTransition } from "react-spring";
import devices from "../../../../Helpers/Devices";
import { useSelector } from "react-redux";

const SideBarContainer = ({ children }) => {
  const showMenu = useSelector((state) => state.UI.sideMenu);

  const BoxTransition = useTransition(showMenu, {
    from: {  height :' 10%' },
    enter: {  height :' 100%'},
    leave: {  with :' 10%'},
    config: {
      duration: 800,
    },
  });

  return BoxTransition((style, item) =>
    item ? <Box style={style}>{children}</Box> : ""
  );
};

export default SideBarContainer;

const Box = styled(animated.div)`
  display: block;
  position: fixed;
  height: 100vh;
  width: 80%;
  max-width: 25rem;
  right: 0;
  background-color: ${(props) => props.theme.colors.background.upper};
  z-index: 15;
  @media ${devices.laptop} {
    display: none;
  }
`;
