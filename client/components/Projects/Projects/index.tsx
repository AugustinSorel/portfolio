import ProjectsFilters from "../ProjectsFilters";
import ProjectsList from "../ProjectsList";
import * as Styles from "./Projects.styled";

const Projects = () => {
  return (
    <Styles.Section id="projects">
      <ProjectsFilters />
      <ProjectsList />
    </Styles.Section>
  );
};
export default Projects;
