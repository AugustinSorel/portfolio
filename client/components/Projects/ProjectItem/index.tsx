import projectItemVariants from "../../../framerMotion/projectItemVariants";
import { ProjectData } from "../../../types/ProjectsData";
import ProjectTechList from "../ProjectTechList";
import * as Styles from "./ProjectItem.styled";

type Props = {
  project: ProjectData;
};

const ProjectItem = ({ project }: Props) => {
  return (
    <Styles.ListItem
      variants={projectItemVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      layout
    >
      <Styles.Article>
        <Styles.Title>{project.title}</Styles.Title>
        <Styles.Category>{project.category}</Styles.Category>
        <ProjectTechList technologies={project.technologies} />
      </Styles.Article>
    </Styles.ListItem>
  );
};

export default ProjectItem;
