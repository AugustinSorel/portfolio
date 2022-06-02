import { ProjectData } from "../../../types/ProjectsData";
import * as Styles from "./ProjectItem.styled";

type Props = {
  project: ProjectData;
};

const ProjectItem = ({ project }: Props) => {
  return (
    <Styles.ListItem>
      <Styles.Title>{project.title}</Styles.Title>
      <Styles.Category>{project.category}</Styles.Category>
      <Styles.ProjectTechList>
        {project.technologies.map((tech) => (
          <Styles.ProjectTechListItem key={tech}>
            <Styles.ProjectTechListItemText>
              {tech}
            </Styles.ProjectTechListItemText>
          </Styles.ProjectTechListItem>
        ))}
      </Styles.ProjectTechList>
    </Styles.ListItem>
  );
};

export default ProjectItem;
