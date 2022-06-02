import useFilterStore from "../../../store/useFilterStore";
import useLanguageStore from "../../../store/useLanguageStore";
import projectsData from "../../../utils/ProjectsData";
import ProjectItem from "../ProjectItem";
import * as Styles from "./ProjectsList.styled";

const ProjectsList = () => {
  const { categorySelected } = useFilterStore();
  const { isEnglishSelected } = useLanguageStore();

  return (
    <Styles.ListContainer>
      <Styles.List>
        {projectsData(isEnglishSelected)
          .slice(0, 3)
          .map((project) => {
            if (!categorySelected || categorySelected === project.category) {
              return <ProjectItem key={project.title} project={project} />;
            }
          })}
      </Styles.List>
      <Styles.List>
        {projectsData(isEnglishSelected)
          .slice(3)
          .map((project) => {
            if (!categorySelected || categorySelected === project.category) {
              return <ProjectItem key={project.title} project={project} />;
            }
          })}
      </Styles.List>
    </Styles.ListContainer>
  );
};

export default ProjectsList;
