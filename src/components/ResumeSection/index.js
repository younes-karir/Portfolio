import React, { useState } from "react";
import {
  Certficates,
  Container,
  Line,
  ResumeWrapper,
  RoutLink,
  RouterWrapper,
  RoutersContainer,
  Sub,
  Title,
  TitleContainer,
} from "./ResumeSection.elements";
import ArowIcon from "../../Helpers/Icons/ArowIcon";
import Modal from "./Modals";
import MobileDesign from "./MobileDesign";
import { Awards, Education, Experience } from "./Data";
import Certificate from "./Certificate";
import MoreModal from "./MoreModal";
import Skills from "./Skills";

function ResumeSection() {
  const [DataList, setDataList] = useState(Experience);

  const ExSwitch = () => {
    setDataList(Experience);
  };

  const EdSwitch = () => {
    setDataList(Education);
  };

  const AwSwitch = () => {
    setDataList(Awards);
  };

  return (
    <Container id="resume">
      <TitleContainer>
        <Title>my resume</Title>
        <Sub>High Skilled Provide High Quality</Sub>
      </TitleContainer>
      <MobileDesign />
      <ResumeWrapper>
        <RoutersContainer>
          <RoutLink
            selected={DataList.name === "ex"}
            onClick={() => ExSwitch()}
          >
            <ArowIcon selected={DataList.name === "ex"} />
            Experience
          </RoutLink>
          <RoutLink
            selected={DataList.name === "ed"}
            onClick={() => EdSwitch()}
          >
            <ArowIcon selected={DataList.name === "ed"} />
            Education
          </RoutLink>
          <RoutLink
            selected={DataList.name === "aw"}
            onClick={() => AwSwitch()}
          >
            <ArowIcon selected={DataList.name === "aw"} />
            Certification
          </RoutLink>
        </RoutersContainer>

        {DataList.name === "aw" ? (
          <Certficates>
            {DataList.content.map((item) => (
              <>
                <Certificate key={item.id} item={item} isMobile={false}/>
                {item.id !== 5 && <Line />}
              </>
            ))}
            {/* <MoreModal /> */}
          </Certficates>
        ) : (
          <RouterWrapper>
            {DataList.content.map((item) => (
              <Modal key={item.id} item={item} name={DataList.name} />
            ))}
          </RouterWrapper>
        )}
        <Skills />
      </ResumeWrapper>
    </Container>
  );
}

export default ResumeSection;
