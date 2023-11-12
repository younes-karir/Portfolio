import styled from "styled-components";
import { animated, useTransition } from "react-spring";
import devices from "../../../../Helpers/Devices";
import { useSelector } from "react-redux";

const HeaderContainer = ({ children }) => {
  const showHeader = useSelector((state) => state.UI.headerShow);

  const BoxTransition = useTransition(showHeader, {
    from: { y: -100 },
    enter: { y: 0 },
    leave: { y: -100},
    config: {
      duration: 350,
    },
  });

  return BoxTransition((style, item) =>
    item ? <Box style={style}>{children}</Box> : ""
  );
};

export default HeaderContainer;

const Box = styled(animated.div)`
  position: fixed;
  height: 4rem;
  width: 100%;
  top: 0;
  background-color: ${(props) => props.theme.colors.header};
  z-index: 5;
  display: flex;
  align-items: center;
  padding: 0.5rem;

  box-shadow: 0 13px 35px -12px rgba(35, 35, 35, 0.15);
  @media ${devices.tablet} {
    height: 4.5rem;
    padding: 1rem 2rem;
  }

  @media ${devices.laptop} {
    height: 5rem;
    padding: 2rem 3rem;
  }
`;
