import styled from "styled-components";
import { animated, useTransition } from "react-spring";
import devices from "../../../../Helpers/Devices";
import { useSelector } from "react-redux";

const SideBarContainer = ({ children }) => {
  const showMenu = useSelector((state) => state.UI.sideMenu);

  const BoxTransition = useTransition(false, {
    from: { x: 400 },
    enter: { x: 0 },
    leave: { x: 400 },
    config: {
      duration: 300,
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
  height: 100%;
  width: 80%;
  max-width: 25rem;
  right: 0;
  background-color: ${(props) => props.theme.colors.background.base};
  z-index: 15;
  @media ${devices.laptop} {
    display: none;
  }
`;
