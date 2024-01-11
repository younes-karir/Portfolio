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
import Certificate from "./Certificate";
import Skills from "./Skills";
import { useTranslation } from "react-i18next";

function ResumeSection() {
  const { t } = useTranslation();
  
  const Education = {
    name: "ed",
    content: [
      {
        id: 1,
        year: t("firstEducationDate"),
        title: t("firstEducationTitle"),
        sub: t("firstEducationSub"),
        details: [t("firstEducationDetails_1")],
      },
      {
        id: 2,
        year: t("secoundEducationDate"),
        title: t("secoundEducationTitle"),
        sub: t("secoundEducationSub"),
        details: [t("secoundEducationDetails_1")],
      },
      {
        id: 3,
        year: t("thirdEducationDate"),
        title: t("thirdEducationTitle"),
        sub: t("thirdEducationSub"),
        details: [t("thirdEducationDetails_1")],
      },
    ],
  };

  const Experience = {
    name: "ex",
    content: [
      {
        id: 1,
        year: t("firstJobDate"),
        title: t("firstJobTitle"),
        sub: t("firstJobSub"),
        details: [
          t("firstJobDetails_1"),
          t("firstJobDetails_2"),
          t("firstJobDetails_3"),
          t("firstJobDetails_4"),
        ],
      },
      {
        id: 2,
        year: t("secoundJobDate"),
        title: t("secoundJobTitle"),
        sub: t("secoundJobSub"),
        details: [t("secoundJobDetails_1"), t("secoundJobDetails_2")],
      },
    ],
  };

  const Awards = {
    name: "aw",
    content: [
      {
        id: 1,
        source: "IBM",
        year: t("fifthCertificateDate"),
        title: t("fifthCertificateTitle"),
        CrId: t("fifthCertificateCredentialId"),
        link: "https://www.coursera.org/account/accomplishments/records/7JW8M6MB98EA",
      },
      {
        id: 2,
        source: "UDEMY",
        year: t("firstCertificateDate"),
        title: t("firstCertificateTitle"),
        CrId: t("firstCertificateCredentialId"),
        link: "https://www.udemy.com/certificate/UC-83e4dfea-dc8d-4e0a-936f-5f3ddd6a0b94/",
      },
      {
        id: 3,
        source: "UDEMY",
        year: t("secoundCertificateDate"),
        title: t("secoundCertificateTitle"),
        CrId: t("secoundCertificateCredentialId"),
        link: "https://www.udemy.com/certificate/UC-5d747795-0b3f-493e-93c6-d06579c7b442/",
      },
      {
        id: 4,
        source: "UDEMY",
        year: t("thirdCertificateDate"),
        title: t("thirdCertificateTitle"),
        CrId: t("thirdCertificateCredentialId"),
        link: "https://www.udemy.com/certificate/UC-a23a3f8e-4c8b-40ca-b136-552888cd8ae8/",
      },
      {
        id: 5,
        year: t("fourthCertificateDate"),
        title: t("fourthCertificateTitle"),
        CrId: t("fourthCertificateCredentialId"),
        link: "https://www.udemy.com/certificate/UC-ef50bcb3-6655-47a5-90be-3d0e5fff88cd/",
      },
    ],
  };

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
        <Title>{t("resumeTitle")}</Title>
        <Sub>{t("resumeQ_1")}</Sub>
      </TitleContainer>
      <MobileDesign />
      <ResumeWrapper>
        <RoutersContainer>
          <RoutLink
            selected={DataList.name === "ex"}
            onClick={() => ExSwitch()}
          >
            <ArowIcon selected={DataList.name === "ex"} />
            {t("resumeExperience")}
          </RoutLink>
          <RoutLink
            selected={DataList.name === "ed"}
            onClick={() => EdSwitch()}
          >
            <ArowIcon selected={DataList.name === "ed"} />
            {t("resumeEducation")}
          </RoutLink>
          <RoutLink
            selected={DataList.name === "aw"}
            onClick={() => AwSwitch()}
          >
            <ArowIcon selected={DataList.name === "aw"} />
            {t("resumeCertification")}
          </RoutLink>
        </RoutersContainer>

        {DataList.name === "aw" ? (
          <Certficates>
            {DataList.content.map((item) => (
              <>
                <Certificate key={item.id} item={item} isMobile={false} />
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
