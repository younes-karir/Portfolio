
import AboutSection from "../AboutSection";
import Header from "../Header";
import MenuBar from "../Header/MenuBar";
import Home from "../Home";
import PortfolioSection from "../PortfolioSection";

import ResumeSection from "../ResumeSection";
import ScrollToTop from "../UI/ScrollToTop";
import { BaseFrame } from "./Content.elements";


const Content = () => {



  return (
    <BaseFrame>
      <Header />
      <Home />
      <AboutSection />
      <ResumeSection />    
      <PortfolioSection />
      <MenuBar />
      <ScrollToTop />
    </BaseFrame>
  );
};

export default Content;
