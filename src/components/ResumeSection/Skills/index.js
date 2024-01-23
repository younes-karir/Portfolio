import React from "react";
import { CodingSkills, CodingSkillsTitle, SkillItem, SkillTitle, SkillsConatiner, SkillsWrapper } from "../ResumeSection.elements";
import HtmlIcon from "../../../Helpers/Icons/HtmlIcon";
import CssIcon from "../../../Helpers/Icons/CssIcon";
import JavascriptIcon from "../../../Helpers/Icons/JavascriptIcon";
import ReactIcon from "../../../Helpers/Icons/ReactIcon";
import ReduxIcon from "../../../Helpers/Icons/ReduxIcon";
import ExpressIcon from "../../../Helpers/Icons/ExpressIcon";
import StyledIcon from "../../../Helpers/Icons/StyledIcon";
import MuiIcon from "../../../Helpers/Icons/MuiIcon";
import GitIcon from "../../../Helpers/Icons/GitIcon";
import MongoIcon from "../../../Helpers/Icons/MongoIcon";
import { useTranslation } from "react-i18next";
import TypeScriptIcon from "../../../Helpers/Icons/TypeScriptIcon";
import JavaIcon from "../../../Helpers/Icons/JavaIcon";

const Skills = () => {
  const {t} = useTranslation();

  return (
    <SkillsConatiner>
      <CodingSkills>
        <CodingSkillsTitle>{t('skillsTitle')}</CodingSkillsTitle>
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
            <JavaIcon />
            <SkillTitle>java</SkillTitle>
          </SkillItem>
          <SkillItem>
            <TypeScriptIcon />
            <SkillTitle>TypeScript</SkillTitle>
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
        <CodingSkillsTitle>{t('toolsTitle')}</CodingSkillsTitle>
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
  );
};

export default Skills;
