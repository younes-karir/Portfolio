import React from "react";
import { Container, ItemTitle, Wrapper } from "./MobileDesign.elements";
import { RouterWrapper } from "../ResumeSection.elements";
import { Awards, Education, Experience } from "../Data";
import Modal from "../Modals";
import ArowIcon from "../../../Helpers/Icons/ArowIcon";
import ArowIconLeft from "../../../Helpers/Icons/ArowIconLeft";

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
        <RouterWrapper>
          {Awards.content.map((item) => (
            <Modal key={item.id} item={item} />
          ))}
          {/* <MoreModal /> */}
        </RouterWrapper>
      </Wrapper>
    </Container>
  );
};

export default MobileDesign;
