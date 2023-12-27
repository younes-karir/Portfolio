import React, { useState } from "react";
import {
  Certficates,
  CodingSkills,
  CodingSkillsTitle,
  Container,
  ResumeWrapper,
  RoutLink,
  RouterWrapper,
  RoutersContainer,
  SkillItem,
  SkillTitle,
  SkillsConatiner,
  SkillsWrapper,
  Sub,
  Title,
  TitleContainer,
} from "./ResumeSection.elements";
import ArowIcon from "../../Helpers/Icons/ArowIcon";
import Modal from "./Modals";
import ReactIcon from "../../Helpers/Icons/ReactIcon";
import JavascriptIcon from "../../Helpers/Icons/JavascriptIcon";
import ReduxIcon from "../../Helpers/Icons/ReduxIcon";
import ExpressIcon from "../../Helpers/Icons/ExpressIcon";
import HtmlIcon from "../../Helpers/Icons/HtmlIcon";
import CssIcon from "../../Helpers/Icons/CssIcon";
import GitIcon from "../../Helpers/Icons/GitIcon";
import StyledIcon from "../../Helpers/Icons/StyledIcon";
import MuiIcon from "../../Helpers/Icons/MuiIcon";
import MongoIcon from "../../Helpers/Icons/MongoIcon";
import MobileDesign from "./MobileDesign";
import { Awards, Education, Experience } from "./Data";
import Certificate from "./Certificate";

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
              <Certificate key={item.id} item={item} />
            ))}
          </Certficates>
        ) : (
          <RouterWrapper>
            {DataList.content.map((item) => (
              <Modal key={item.id} item={item} name={DataList.name} />
            ))}
          </RouterWrapper>
        )}
        <SkillsConatiner>
          <CodingSkills>
            <CodingSkillsTitle>Skills</CodingSkillsTitle>
            <SkillsWrapper>
              <SkillItem>
                <HtmlIcon />
                <SkillTitle>Html</SkillTitle>
              </SkillItem>
              <SkillItem>
                <CssIcon />
                <SkillTitle>Css</SkillTitle>
              </SkillItem>
              <SkillItem>
                <JavascriptIcon />
                <SkillTitle>javascript</SkillTitle>
              </SkillItem>
              <SkillItem>
                <ReactIcon />
                <SkillTitle>React.js</SkillTitle>
              </SkillItem>
              <SkillItem>
                <ReduxIcon />
                <SkillTitle>Redux.js</SkillTitle>
              </SkillItem>
              <SkillItem>
                <ExpressIcon />
                <SkillTitle>Express.js</SkillTitle>
              </SkillItem>
              <SkillItem>
                <StyledIcon />
                <SkillTitle>Styled</SkillTitle>
              </SkillItem>
              <SkillItem>
                <MuiIcon />
                <SkillTitle>Mui</SkillTitle>
              </SkillItem>
            </SkillsWrapper>
          </CodingSkills>
          <CodingSkills>
            <CodingSkillsTitle>Tools</CodingSkillsTitle>
            <SkillsWrapper>
              <SkillItem>
                <GitIcon />
                <SkillTitle>Git</SkillTitle>
              </SkillItem>
              <SkillItem>
                <MongoIcon />
                <SkillTitle>Mongodb</SkillTitle>
              </SkillItem>
            </SkillsWrapper>
          </CodingSkills>
        </SkillsConatiner>
      </ResumeWrapper>
    </Container>
  );
}

export default ResumeSection;
