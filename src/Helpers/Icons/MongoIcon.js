import React from "react";
import { useSelector } from "react-redux";

const MongoIcon = () => {
    const thiming = useSelector((state) => state.theme.Theme);

    const styles = {
      width: ".97rem",
    };
  
  return (
    <svg
      id="Calque_1"
      style={styles}
      data-name="Calque 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 230.05 511"
    >
      <path
        d="m230.02,247c-1.48-91.95-49.78-167.93-99.33-215.64C114.93,16.2,112.39,0,112.39,0c0,0,.34,7.12-7.84,15.68-34.38,36-56.23,55.03-77.11,100.63C1.45,173.09,0,248.31,0,248.31c0,0,1.38,61.92,27.44,112.39,20.18,39.07,55.72,71.01,69.8,82.73,1.29-4.42,3.78-13.37,5.48-22.5,2.63-14.16,3.82-29.22,3.83-29.37.26-3.36,3.04-5.97,6.41-6.03h.11c3.32,0,6.12,2.49,6.49,5.81.02.23,2.57,22.69,7.5,36.42,2.5,6.96,6.95,9.3,7.14,9.39,1.81.74,3.01,2.18,3.58,4.05.03.09.05.19.07.28,13.56-11.15,93.97-82.03,92.16-194.48h0Zm-136.31,128.53c-2.33,3.73-3.8,8.01-4.15,12.53,0,.11-.41,5.19-1.25,12.06-13.19-13.83-27.64-31.54-37.71-51.03-22.44-43.46-24.87-97.27-25.06-102.67.18-6.14,2.72-73.33,25.5-123.09,12.62-27.57,25.66-44.57,42.67-62.99v315.19Zm37.66,67.51s-4.32,6.51-5.23,14.37c-2.28,19.8-2.61,53.59-2.61,53.59l-13.07-3.92s-.35-22.27-2.62-39.21c-1.5-11.28-5.23-19.61-5.23-19.61,0,0,4.05-12.8,6.54-26.14,2.73-14.69,3.92-30.06,3.92-30.06,0,0,2.59,23.27,7.84,37.9,3.55,9.91,10.45,13.07,10.45,13.07h0Z"
        strokeWidth="0"
        fill={thiming.colors.text}

      />
    </svg>
  );
};

export default MongoIcon;
