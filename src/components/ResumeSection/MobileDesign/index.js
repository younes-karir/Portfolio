import React from "react";
import {
  CertTitle,
  Container,
  ItemTitle,
  Wrapper,
} from "./MobileDesign.elements";
import { Certficates, Line, RouterWrapper } from "../ResumeSection.elements";
import { Awards, Education, Experience } from "../Data";
import Modal from "../Modals";
import ArowIcon from "../../../Helpers/Icons/ArowIcon";
import ArowIconLeft from "../../../Helpers/Icons/ArowIconLeft";
import Certificate from "../Certificate";
import MoreModal from "../MoreModal";
import Skills from "../Skills";

const MobileDesign = () => {
  return (
    <Container>
      <Wrapper>
        <ItemTitle>
          EXPERIENCE
          {/* <ArowIcon selected={true} />*/}
          <ArowIconLeft />
        </ItemTitle>
        <RouterWrapper>
          {Experience.content.map((item) => (
            <Modal key={item.id} item={item} />
          ))}
          {/* <MoreModal /> */}
        </RouterWrapper>
      </Wrapper>
      <Wrapper>
        <ItemTitle>
          EDUCATION
          <ArowIconLeft />
        </ItemTitle>
        <RouterWrapper>
          {Education.content.map((item) => (
            <Modal key={item.id} item={item} />
          ))}
          {/* <MoreModal /> */}
        </RouterWrapper>
      </Wrapper>
      <Wrapper>
        <Certficates>
          <CertTitle>CERTIFICATION</CertTitle>
          <Line $break = {true}/>
          {Awards.content.map((item) => (
            <>
              <Certificate key={item.id} item={item} isMobile={true} />
              <Line />
            </>
          ))}
          <MoreModal />
        </Certficates>
      </Wrapper>
      <Skills />
    </Container>
  );
};

export default MobileDesign;
