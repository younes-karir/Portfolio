import { PiCaretCircleUpFill } from "react-icons/pi";


import styled from "styled-components";
import { animated, useTransition } from "react-spring";
import { useSelector } from "react-redux";
import { animateScroll } from "react-scroll";

export const Icon = ({ children }) => {
  const showHeader = useSelector((state) => state.UI.headerShow);



  const ScrollToTopHandler = () => {
    animateScroll.scrollToTop();
  }

  const BoxTransition = useTransition(showHeader, {
    from: { scale : 0.5 , opacity : 0 },
    enter: { scale : 1 , opacity : 1},
    leave: { scale : 0.5, opacity : 0 },
    trail : 500,
    config: {
      duration: 350,
    },
  });

  return BoxTransition((style, item) =>
    item ? <Box style={style} onClick={ScrollToTopHandler}>{children}</Box> : ""
  );
};


const Box = styled(animated(PiCaretCircleUpFill))`
  font-size: 3rem;
  z-index: 10;  
  color: ${(props) => props.theme.colors.primary};
  position: fixed;
  bottom: 0;
  right: 0;
  margin-bottom: 10px;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }
`;
