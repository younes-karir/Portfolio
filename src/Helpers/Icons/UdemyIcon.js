import React from "react";
import { useSelector } from "react-redux";

const IbmIcon = () => {
  const thiming = useSelector((state) => state.theme.Theme);

  const styles = {
    width: "1.5rem",
  };
  return (
    <svg
      style={styles}
      viewBox="0 0 1290 2499.9"
    >
      <path
        d="m1289.91,744.43l-645.05-372.21L0,744.43v-372.21L644.95,0l645.05,372.21v372.21h-.09Z"
        fill="#a435f0"
        stroke-width="0"
      />
      <path
        d="m0,1057.01h337.87v820.5c0,211.98,158.36,315.34,307.08,315.34s307.21-106.1,307.21-318.18v-817.65h337.84v840.06c0,195.26-61.41,345.96-184.26,449.28-122.92,103.26-276.43,153.54-463.63,153.54s-340.62-50.19-460.6-153.54C61.41,2243.13,0,2098.03,0,1905.42v-848.41Z"
        strokeWidth="0"
        fill={thiming.colors.text}

      />
    </svg>
  );
};

export default IbmIcon;
