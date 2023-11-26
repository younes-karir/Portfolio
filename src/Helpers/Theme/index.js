import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

export const light = {
  title: "light",
  colors: {
    background: {
      base: "#f8f9fe",
      middle: "#ffffff",
      upper: "#ffffff",
      header: "#fff"
    },
    text: "#333333",
    primary: "#4d63dd",
    title1: "#222222",
    header: "#ffffff",
    profile: "#f8f9fe",
    profileCard: "#e8ebff",
  },
};

export const dark = {
  title: "dark",
  colors: {
    background: {
      base: "#0f141f",
      middle: "#192336",
      upper: "#192336",
      header: "#223049"
    },
    text: "#f8f9fe",
    primary: "#4d63dd",
    title1: "#b5b5b5",
    header: "#1b2942",
    profile: "#2b3e5e",
    profileCard: "#273c60",
  },
};

const Theme = ({ children }) => {
  const thiming = useSelector((state) => state.theme.Theme);
  return <ThemeProvider theme={thiming}>{children}</ThemeProvider>;
};

export default Theme;
