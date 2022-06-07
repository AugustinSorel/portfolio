import * as Styles from "./SkillList.styled";

type Props = {
  skills: string[];
};

const SkillList = ({ skills }: Props) => {
  return (
    <Styles.List>
      {skills.map((skill) => (
        <Styles.ListItem key={skill}>{skill}</Styles.ListItem>
      ))}
    </Styles.List>
  );
};

export default SkillList;
