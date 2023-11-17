import React, { useState } from "react";
import {
  CodingSkills,
  CodingSkillsTitle,
  CodingSkillsWrapper,
  Container,
  DesignSkills,
  ResumeWrapper,
  RoutLink,
  RouterWrapper,
  RoutersContainer,
  SkillIcon,
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
import Skill from "./Skills";
import DSkills from "./DSkills";
import ReactIcon from "../../Helpers/Icons/ReactIcon";
import JavascriptIcon from "../../Helpers/Icons/JavascriptIcon";
import ReduxIcon from "../../Helpers/Icons/ReduxIcon";
import ExpressIcon from "../../Helpers/Icons/ExpressIcon";
import HtmlIcon from "../../Helpers/Icons/HtmlIcon";
import CssIcon from "../../Helpers/Icons/CssIcon";
import GitIcon from "../../Helpers/Icons/GitIcon";

const Education = {
  name: "ed",
  content: [
    {
      id: 1,
      year: "2020 - 2021",
      title: "Graphic Design",
      sub: "Springlean Graphic University",
      details:
        "Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam.",
    },
    {
      id: 2,
      year: "2020 - 2021",
      title: "Graphic Design",
      sub: "Springlean Graphic University",
      details:
        "Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam.",
    },
    {
      id: 3,
      year: "2020 - 2021",
      title: "Graphic Design",
      sub: "Springlean Graphic University",
      details:
        "Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam.",
    },
  ],
};

const Experience = {
  name: "ex",
  content: [
    {
      id: 1,
      year: "2020",
      title: "Graphic Design",
      sub: "Springlean Graphic University",
      details:
        "Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam.",
    },
    {
      id: 2,
      year: "2020 - 2021",
      title: "Graphic Design",
      sub: "Springlean Graphic University",
      details:
        "Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam.",
    },
  ],
};

const Awards = {
  name: "aw",
  content: [
    {
      id: 1,
      year: "2020 - 2021",
      title: "Graphic Design",
      sub: "Springlean Graphic University",
      details:
        "Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam.",
    },
    {
      id: 2,
      year: "2020 - 2021",
      title: "Graphic Design",
      sub: "Springlean Graphic University",
      details:
        "Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam.",
    },
  ],
};

// skills

const SkillsList = [
  { id: 1, title: "html & css", pers: 90 },
  { id: 2, title: "javascript", pers: 90 },
  { id: 3, title: "react.js", pers: 80 },
  { id: 4, title: "java", pers: 70 },
];

function ResumeSection(props) {
  const [DataList, setDataList] = useState(Education);

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
      <ResumeWrapper>
        <RoutersContainer>
          <RoutLink
            selected={DataList.name === "ed"}
            onClick={() => EdSwitch()}
          >
            <ArowIcon selected={DataList.name === "ed"} />
            Education
          </RoutLink>
          <RoutLink
            selected={DataList.name === "ex"}
            onClick={() => ExSwitch()}
          >
            <ArowIcon selected={DataList.name === "ex"} />
            Experience
          </RoutLink>
          <RoutLink
            selected={DataList.name === "aw"}
            onClick={() => AwSwitch()}
          >
            <ArowIcon selected={DataList.name === "aw"} />
            Awards
          </RoutLink>
        </RoutersContainer>
        <RouterWrapper>
          {DataList.content.map((item) => (
            <Modal key={item.id} item={item} />
          ))}
        </RouterWrapper>
        <SkillsConatiner>
          <CodingSkills>
            <CodingSkillsTitle>Coding Skills</CodingSkillsTitle>
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
       
            </SkillsWrapper>
          </CodingSkills>
        </SkillsConatiner>
      </ResumeWrapper>
    </Container>
  );
}

export default ResumeSection;
