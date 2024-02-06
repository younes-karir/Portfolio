import React from "react";
import { useSelector } from "react-redux";

const CssIcon = () => {
  const thiming = useSelector((state) => state.theme.Theme);

  const styles = {
    width: "1.8rem",
    
  };
  return (
    <svg
      id="Calque_1"
      data-name="Calque 1"
      style={styles}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 340 380"
    >
      <path
        d="m310,340l-140,40-140-40L0,0h340c-10,113.32-20,226.68-30,340Zm8.16-320H21.84l26.88,304.53,121.29,34.69,121.29-34.69,26.88-304.53ZM88.01,220h40l.98,25,41.02,13.98,41.02-13.98,2.97-45h-87.97l-2.03-40h92.03l2.97-40H81.02l-3.01-40h183.01l-5,80-7.03,115-78.98,26.02-78.98-26.02-3.01-55Z"
        fillRule="evenodd"
        strokeWidth="0"
        fill={thiming.colors.text}
      />
    </svg>
  );
};

export default CssIcon;
