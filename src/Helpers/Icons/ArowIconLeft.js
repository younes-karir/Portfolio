import React from "react";
import { useSelector } from "react-redux";

const ArowIconLeft = (props) => {
  const thiming = useSelector((state) => state.theme.Theme);
  const styled = {
    width: "1.5rem",
    position: "absolute",
    top: "calc(50% - 8.33px)",
    left: "-.9rem",
    zIndex: 2,
    transform:  'scaleX(-1)',
  };

  return (
    <svg
      style={styled}
      id="Calque_2"
      data-name="Calque 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 327.57 227.37"
    >
      <polygon
        points="255.1 113.69 124.21 0 124.21 227.37 255.1 113.69"
        fill={thiming.colors.primary}
        strokeWidth="0"
      />
    </svg>
  );
};

export default ArowIconLeft;
