import React from "react";
import { useSelector } from "react-redux";

const LogoIcon = (props) => {
  const thiming = useSelector((state) => state.theme.Theme);

  const styles = {
    width: props.$size,
  };

  return (
    <svg
      id="Calque_1"
      data-name="Calque 1"
      style={styles}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 232.36 263.46"
    >
      <g id="SvgjsG13735">
        <path
          d="m172.21,29.89l-63.9,93.92V2.09c4.91-2.8,10.94-2.79,15.84.03l48.06,27.77Z"
          fill={props.$color}
          strokeWidth="0"
        />
        <path
          d="m232.36,73.85v67.72l-6.82.22c-4.25,0-8.27-1.21-12.06-3.64-4.71-3.04-9.49-8.2-14.34-15.48l-30.51-45.76,24.42-34.98,31.4,18.14c4.91,2.85,7.93,8.1,7.91,13.78Z"
          fill={props.$color}
          strokeWidth="0"
        />
        <path
          d="m232.36,166.83v22.82c.02,5.68-3,10.93-7.91,13.78l-100.3,57.9c-4.92,2.84-10.97,2.84-15.89,0L7.92,203.38C3.02,200.54,0,195.31,0,189.65v-115.85c-.01-5.68,3.01-10.93,7.92-13.77L83.5,16.41v150.42h24.81l45.75-68.06,25.73,41.2c5.46,8.5,10.85,14.87,16.16,19.12,4.7,3.64,9.86,5.92,15.48,6.83,3.49.76,9.03,1.06,16.62.91h4.31Z"
          fill={props.$color}
          strokeWidth="0"
        />
      </g>
      <g id="SvgjsG13736">
        <polygon
          points="213.6 162.56 213.6 187.83 213.36 187.83 213.36 162.57 213.6 162.56"
          fill={props.$color}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
};

export default LogoIcon;
