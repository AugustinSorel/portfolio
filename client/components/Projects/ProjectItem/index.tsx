import { ProjectData } from "../../../types/ProjectsData";
import ProjectTechList from "../ProjectTechList";
import * as Styles from "./ProjectItem.styled";

type Props = {
  project: ProjectData;
};

const ProjectItem = ({ project }: Props) => {
  return (
    <Styles.ListItem>
      <Styles.Title>{project.title}</Styles.Title>
      <Styles.Category>{project.category}</Styles.Category>
      <ProjectTechList technologies={project.technologies} />
    </Styles.ListItem>
  );
};

export default ProjectItem;
