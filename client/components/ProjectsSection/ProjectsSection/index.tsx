import ProjectsFilters from "../ProjectsFilters";
import ProjectsList from "../ProjectsList";
import * as Styles from "./Projects.styled";

const ProjectsSection = () => {
  return (
    <Styles.Section id="projects">
      <ProjectsFilters />
      <ProjectsList />
    </Styles.Section>
  );
};
export default ProjectsSection;
