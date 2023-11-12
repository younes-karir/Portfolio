
import AboutSection from "../AboutSection";
import Header from "../Header";
import MenuBar from "../Header/MenuBar";
import Home from "../Home";
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
      <MenuBar />
      <ScrollToTop />
    </BaseFrame>
  );
};

export default Content;
