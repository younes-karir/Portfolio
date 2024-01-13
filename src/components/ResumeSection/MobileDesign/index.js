import {
  CertTitle,
  Container,
  ItemTitle,
  Wrapper,
} from "./MobileDesign.elements";
import { Certficates, Line, RouterWrapper } from "../ResumeSection.elements";
import Modal from "../Modals";
import ArowIconLeft from "../../../Helpers/Icons/ArowIconLeft";
import Certificate from "../Certificate";
import MoreModal from "../MoreModal";
import Skills from "../Skills";
import { useTranslation } from "react-i18next";

const MobileDesign = () => {
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

  return (
    <Container>
      <Wrapper id="ex">
        <ItemTitle>
          EXPERIENCE
          {/* <ArowIcon selected={true} />*/}
          <ArowIconLeft />
        </ItemTitle>
        <RouterWrapper>
          {Experience.content.map((item) => (
            <Modal key={"experience" + item.id} item={item} />
          ))}
          {/* <MoreModal /> */}
        </RouterWrapper>
      </Wrapper>
      <Wrapper id="ed">
        <ItemTitle>
          EDUCATION
          <ArowIconLeft />
        </ItemTitle>
        <RouterWrapper>
          {Education.content.map((item) => (
            <Modal key={"education" + item.id} item={item} />
          ))}
          {/* <MoreModal /> */}
        </RouterWrapper>
      </Wrapper>
      <Wrapper id="ce">
        <Certficates>
          <CertTitle>CERTIFICATION</CertTitle>
          <Line id="break" $break={true} />
          {Awards.content.map((item) => (
            <>
              <Certificate
                key={"certificate" + item.id}
                item={item}
                isMobile={true}
              />
              <Line key={"line" + item.id} />
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
