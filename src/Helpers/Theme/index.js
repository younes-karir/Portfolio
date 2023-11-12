
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";




export const light = {
  title :"light",
  colors: {
    background: "#f8f9fe",
    text:"#333333",
    primary : '#4d63dd',
    title1 : '#222222',
    header : '#ffffff',
    profile : '#f8f9fe',
    profileCard : '#e8ebff'
  }
};

export const dark = {
  title :"dark",
  colors: {
    background: "#121b2c",
    text:"#f8f9fe",
    primary : '#4d63dd',
    title1 : '#b5b5b5',
    header : '#1b2942',
    profile : '#2b3e5e',
    profileCard : '#273c60'

  }
};


const Theme = ({ children }) => {
  const thiming = useSelector((state) => state.theme.Theme);
  return (
    <ThemeProvider theme={thiming}>{children}</ThemeProvider>
  );
};

export default Theme;
