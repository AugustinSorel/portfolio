import useFilterStore from "../../../store/useFilterStore";
import useLanguageStore from "../../../store/useLanguageStore";
import projectsData from "../../../utils/ProjectsData";
import ProjectItem from "../ProjectItem";
import * as Styles from "./ProjectsList.styled";

const ProjectsList = () => {
  const { categorySelected } = useFilterStore();
  const { isEnglishSelected } = useLanguageStore();

  return (
    <Styles.List>
      {projectsData(isEnglishSelected).map((project) => {
        if (!categorySelected || categorySelected === project.category) {
          return <ProjectItem key={project.title} project={project} />;
        }
      })}
    </Styles.List>
  );
};

export default ProjectsList;
