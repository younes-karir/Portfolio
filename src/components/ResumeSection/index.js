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
import { useTranslation } from "react-i18next";

function ResumeSection() {
  const [DataList, setDataList] = useState(Experience);
  const {t} = useTranslation();

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
        <Title>{t('resumeTitle')}</Title>
        <Sub>{t('resumeQ_1')}</Sub>
      </TitleContainer>
      <MobileDesign />
      <ResumeWrapper>
        <RoutersContainer>
          <RoutLink
            selected={DataList.name === "ex"}
            onClick={() => ExSwitch()}
          >
            <ArowIcon selected={DataList.name === "ex"} />
            {t('resumeExperience')}
          </RoutLink>
          <RoutLink
            selected={DataList.name === "ed"}
            onClick={() => EdSwitch()}
          >
            <ArowIcon selected={DataList.name === "ed"} />
            {t('resumeEducation')}
          </RoutLink>
          <RoutLink
            selected={DataList.name === "aw"}
            onClick={() => AwSwitch()}
          >
            <ArowIcon selected={DataList.name === "aw"} />
            {t('resumeCertification')}
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
