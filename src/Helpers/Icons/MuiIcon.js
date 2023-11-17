import React from "react";
import { useSelector } from "react-redux";

const MuiIcon = () => {
  const thiming = useSelector((state) => state.theme.Theme);

  const styles = {
    width: "2rem",
  };

  return (
    <svg
      id="Calque_1"
      data-name="Calque 1"
      style={styles}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 19.05"
    >
      <path
        d="m0,0v10.39l3,1.73v-6.93l6,3.46,6-3.47v3.47l-6,3.46v3.46l6,3.46,9-5.19v-6.93l-3,1.73v3.46l-6,3.46-3-1.73,6-3.47V0l-9,5.2L0,0ZM24,0l-3,1.73v3.47l3-1.73V0h0Z"
        stroke-width="0"
        fill={thiming.colors.text}
      />
    </svg>
  );
};

export default MuiIcon;
