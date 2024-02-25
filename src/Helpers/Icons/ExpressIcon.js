import React from "react";
import { useSelector } from "react-redux";

const ExpressIcon = () => {

    
    const thiming = useSelector((state) => state.theme.Theme);

    const styles = {
        width: "2.7rem",
    }

  return (
    <svg
      id="Calque_1"
      style={styles}
      data-name="Calque 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 499.64 310.01"
    >
      <path
        d="m497.29,10h-8.5c-10.51,0-20.41,4.9-26.8,13.24l-87,113.77-87-113.77c-6.37-8.34-16.28-13.24-26.78-13.24h-8.5l109.71,143.46-112.06,146.54h8.5c10.51,0,20.41-4.9,26.79-13.24l89.35-116.84,89.35,116.84c6.38,8.34,16.28,13.24,26.79,13.24h8.5l-112.06-146.54L497.29,10ZM212.89,242.42c-25.54,38.81-75.82,58.7-123.89,41.16-42.29-15.43-69-57.47-69-102.49v-11.09h230v-41.34C250,63.61,201.82,6.66,137.05.57,62.73-6.42,0,52.1,0,125v55.73c0,53.71,32.15,103.64,82.69,121.83,66.03,23.76,135.48-11.7,158.96-72.56h-6.38c-9.11,0-17.38,4.81-22.38,12.42ZM20,125c0-57.9,47.1-105,105-105s105,47.1,105,105v25H20v-25Z"
        strokeWidth="0"
        fill={thiming.colors.text}
      />
    </svg>
  );
};

export default ExpressIcon;
