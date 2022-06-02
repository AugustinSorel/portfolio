import projectsData from "../../../utils/ProjectsData";
import ProjectItem from "../ProjectItem";
import * as Styles from "./ProjectsList.styled";

const ProjectsList = () => {
  return (
    <Styles.List>
      {projectsData.map((project) => (
        <ProjectItem key={project.title} project={project} />
      ))}
    </Styles.List>
  );
};

export default ProjectsList;
