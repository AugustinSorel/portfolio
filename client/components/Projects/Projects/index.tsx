import { AnimatePresence } from "framer-motion";
import useLanguageStore from "../../../store/useLanguageStore";
import projectsData from "../../../utils/ProjectsData";
import ProjectsFilters from "../ProjectsFilters";
import ProjectsList from "../ProjectsList";
import * as Styles from "./Projects.styled";

const Projects = () => {
  const { isEnglishSelected } = useLanguageStore();

  return (
    <Styles.Section id="projects">
      <ProjectsFilters />
      <Styles.ListContainer>
        <ProjectsList projects={projectsData(isEnglishSelected).slice(0, 3)} />
        <ProjectsList projects={projectsData(isEnglishSelected).slice(3)} />
      </Styles.ListContainer>
    </Styles.Section>
  );
};
export default Projects;
