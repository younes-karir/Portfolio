import React from "react";
import { useSelector } from "react-redux";

const TypeScriptIcon = () => {
  const thiming = useSelector((state) => state.theme.Theme);

  const styles = {
    width: "1.8rem",
  };
  return (
    <svg style={styles} viewBox="0 0 42 42">
      <rect
        x="1"
        y="1"
        width="40"
        height="40"
        fill="none"
        stroke={thiming.colors.text}
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <g>
        <polygon
          points="11 22.44 16 22.44 16 38 20 38 20 22.44 25 22.44 25 19 11 19 11 22.44"
          strokeWidth="0"
          fill={thiming.colors.text}
        />
        <path
          d="m30.21,24.15c0-1.08.77-2.1,2.9-2.1s4.02,1.26,4.02,1.26l.14-3.7s-11.25-3.08-11.25,4.72c0,5.73,7.72,5.73,7.72,8.31,0,.24.1,2.03-2.62,2.03s-5-1.71-5-1.71v4.16s11.88,3.84,11.88-4.82c0-5.62-7.79-5.34-7.79-8.14Z"
          strokeWidth="0"
          fill={thiming.colors.text}
        />
      </g>
    </svg>
  );
};

export default TypeScriptIcon;
