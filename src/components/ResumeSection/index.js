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
  SkillsConatiner,
  Sub,
  Title,
  TitleContainer,
} from "./ResumeSection.elements";
import ArowIcon from "../../Helpers/Icons/ArowIcon";
import Modal from "./Modals";
import Skill from "./Skills";

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
    {
      id: 4,
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
            <CodingSkillsWrapper>
              {SkillsList.map((item) => <Skill key={item.id} item={item}/>)}
            </CodingSkillsWrapper>
          </CodingSkills>
          <DesignSkills></DesignSkills>
        </SkillsConatiner>
      </ResumeWrapper>
    </Container>
  );
}

export default ResumeSection;
