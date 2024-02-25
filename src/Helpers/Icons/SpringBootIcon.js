import { useSelector } from "react-redux";

const SpringBootIcon = (props) => {
  const thiming = useSelector((state) => state.theme.Theme);

  const styles = {
    width: props.isMobile ? "3rem" : "2.2rem",
  };
  return (
    <svg style={styles} viewBox="0 0 24 21.55">
      <path
        d="m23.69,9.48L18.96,1.29c-.41-.71-1.42-1.29-2.24-1.29H7.27c-.82,0-1.83.58-2.24,1.29L.31,9.48c-.41.71-.41,1.87,0,2.58l4.73,8.19c.41.71,1.42,1.29,2.24,1.29h9.45c.82,0,1.83-.58,2.24-1.29l4.73-8.19c.41-.71.41-1.87,0-2.58h0Zm-12.72-4.95c0-.54.44-.97.97-.97s.97.44.97.97v5.82c0,.54-.44.97-.97.97s-.97-.44-.97-.97v-5.82Zm.97,12.43c-3.64,0-6.61-2.97-6.61-6.61,0-2.09.99-4.05,2.67-5.3.38-.29.93-.21,1.21.18,0,0,0,0,0,0,.29.38.21.93-.18,1.21,0,0,0,0,0,0-2.16,1.6-2.61,4.66-1.01,6.82,1.6,2.16,4.66,2.61,6.82,1.01,1.24-.92,1.97-2.37,1.97-3.92,0-1.55-.74-3-1.99-3.93-.39-.28-.47-.83-.18-1.21.28-.39.83-.47,1.21-.18,1.69,1.25,2.68,3.22,2.69,5.32,0,3.65-2.97,6.61-6.61,6.61Z"
        strokeWidth="0"
        fill={thiming.colors.text}
      />
    </svg>
  );
};

export default SpringBootIcon;
