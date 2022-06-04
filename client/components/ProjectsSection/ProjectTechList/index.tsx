import { Technologies } from "../../../types/ProjectsData";
import * as Styles from "./ProjectTechList.styled";

type Props = {
  technologies: Technologies[];
};

const ProjectTechList = ({ technologies }: Props) => {
  return (
    <Styles.List>
      {technologies.map((tech) => (
        <Styles.ListItem key={tech}>
          <Styles.Text>{tech}</Styles.Text>
        </Styles.ListItem>
      ))}
    </Styles.List>
  );
};

export default ProjectTechList;
