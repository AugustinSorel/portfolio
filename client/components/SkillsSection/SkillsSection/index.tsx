import Accordion from "../../FormElements/Accordion";
import * as Styles from "./SkillsSection.styled";

type Skill = {
  title: string;
  skills: string[];
};

const skillsData: Skill[] = [
  {
    title: "frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    title: "backend",
    skills: ["Node.js", "Express", "MongoDB", "GraphQL"],
  },
  {
    title: "devops",

    skills: ["Git", "GitHub", "GitLab", "Docker", "AWS", "Heroku"],
  },
  {
    title: "design",
    skills: ["UX", "UI", "Sketch", "Figma", "Adobe XD"],
  },
];

const SkillsSection = () => {
  return (
    <Styles.Section id="skills">
      {skillsData.map((skill) => (
        <Accordion key={skill.title} title={skill.title}>
          {skill.skills.map((skill) => (
            <h5 key={skill}>{skill}</h5>
          ))}
        </Accordion>
      ))}
    </Styles.Section>
  );
};

export default SkillsSection;
