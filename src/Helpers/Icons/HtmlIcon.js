import React from "react";
import { useSelector } from "react-redux";

const HtmlIcon = () => {

    const thiming = useSelector((state) => state.theme.Theme);

    const styles = {
        width: "2rem",
    }
  return (
    <svg
      id="Calque_1"
      style={styles}
      data-name="Calque 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 340 380"
    >
      <path
        d="m0,0l30,340,140,40,140-40c10-113.33,20-226.67,30-340H0Zm21.84,20h296.33l-26.88,304.55-121.29,34.65-121.29-34.65L21.84,20Zm73.67,60l-9.61,120h129.9l-4.1,50-41.7,6.19-41.19-6.19-1.82-20h-38.59l3.91,50,77.6,20,77.7-20,9.9-120h-126.6l3.2-40h83.59l2.3,20h36.99l-6.99-60H95.51Z"
        strokeWidth="0"
        fill={thiming.colors.text}

      />
    </svg>
  );
};

export default HtmlIcon;
