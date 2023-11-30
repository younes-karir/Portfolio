import React from "react";
import { useSelector } from "react-redux";

const LogoMobileIcon = () => {
  const thiming = useSelector((state) => state.theme.Theme);

  const styles = {
    width: "7.5rem",
  };

  return (
    <svg
      id="Calque_1"
      data-name="Calque 1"
      style={styles}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 408 113.21"
    >
      <g id="SvgjsG4008">
        <polygon
          points="86.97 0 47.95 57.34 47.95 0 86.97 0"
          fill="#4d63dd"
          stroke-width="0"
        />
        <path
          d="m110.33,9.59v56.8l-2.83.09c-2.15,0-4.2-.62-6.12-1.85-2.39-1.55-4.82-4.17-7.29-7.87l-15.5-23.24L101.94.08c4.73.59,8.39,4.62,8.39,9.51Z"
          fill="#4d63dd"
          stroke-width="0"
        />
        <path
          d="m110.33,79.2v21.54c0,5.3-4.29,9.59-9.59,9.59H9.59c-5.29,0-9.59-4.29-9.59-9.59V9.59C0,4.29,4.3,0,9.59,0h25.76v79.2h12.6l23.24-34.58,13.07,20.93c2.78,4.32,5.51,7.56,8.21,9.71,2.39,1.85,5.01,3.01,7.86,3.47,1.78.39,4.59.54,8.45.47h1.55Z"
          fill="#4d63dd"
          stroke-width="0"
        />
      </g>
    </svg>
  );
};

export default LogoMobileIcon;
