import useSelectedSkill from "../../../store/useSelectedSkill";
import skillsData from "../../../utils/skillsData";
import Accordion from "../../FormElements/Accordion";
import SkillList from "../SkillList";
import * as Styles from "./SkillsSection.styled";

const SkillsSection = () => {
  const { selectedSkill, setSelectedSkill } = useSelectedSkill();

  return (
    <Styles.Section id="skills">
      {skillsData.map((skill) => (
        <Accordion
          isContentOpen={selectedSkill === skill.title}
          toggleShowContent={() => setSelectedSkill(skill.title)}
          key={skill.title}
          title={skill.title}
        >
          <SkillList skills={skill.skills} />
        </Accordion>
      ))}
    </Styles.Section>
  );
};

export default SkillsSection;
