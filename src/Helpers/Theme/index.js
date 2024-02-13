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
    text: "#343a40",
    primary: "#4d63dd",
    title1: "#212529",
    header: "#ffffff",
    profile: "#f8f9fe",
    profileCard: "#e8ebff",
    BoderCard :'rgba(0, 0, 0, 0.05)',
    UnderLine : '#333333',
  },
};



export const dark = {
  title: "dark",
  colors: {
    background: {
      base: "#181d28",
      middle: "#1d2330ed",
      upper: "#192336",
      header: "#131924"
    },
    text: "#e8e8e8",
    primary: "#4d63dd",
    title1: "#f0f0f0",
    header: "#1b2942",
    profile: "#2b3e5e",
    profileCard: "#273c60b5",
    BoderCard :'#4d63dd93',
    UnderLine : '#4d63dd',
  },
};



const Theme = ({ children }) => {
  const thiming = useSelector((state) => state.theme.Theme);
  return <ThemeProvider theme={thiming}>{children}</ThemeProvider>;
};

export default Theme;
