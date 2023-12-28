import React from "react";
import { Container, ItemTitle, Wrapper } from "./MobileDesign.elements";
import { Certficates, Line, RouterWrapper } from "../ResumeSection.elements";
import { Awards, Education, Experience } from "../Data";
import Modal from "../Modals";
import ArowIcon from "../../../Helpers/Icons/ArowIcon";
import ArowIconLeft from "../../../Helpers/Icons/ArowIconLeft";
import Certificate from "../Certificate";
import MoreModal from "../MoreModal";

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
        <ItemTitle>
          CERTIFICATION
          <ArowIconLeft />
        </ItemTitle>
        <Certficates>
            {Awards.content.map((item) => (
              <>
                <Certificate key={item.id} item={item} />
                <Line />
              </>
            ))}
            <MoreModal />
          </Certficates>
      </Wrapper>
    </Container>
  );
};

export default MobileDesign;
