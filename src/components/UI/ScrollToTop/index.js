import React from 'react';
import ReactDOM from "react-dom";
import { Icon } from './ScrollToTop.elements';

import { animateScroll } from "react-scroll";


const Data = (props) => {
  
  const options = {
    // your options here, for example:
    duration: 500,
    smooth: true,
  };
  
  
  return (
    <Icon  />
  )
}


const ScrollToTop = () => {
    return ReactDOM.createPortal(
      <Data />,
      document.getElementById("portal-root")
    );
  };



export default ScrollToTop;