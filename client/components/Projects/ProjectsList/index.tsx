import useFilterStore from "../../../store/useFilterStore";
import projectsData from "../../../utils/ProjectsData";
import ProjectItem from "../ProjectItem";
import * as Styles from "./ProjectsList.styled";

const ProjectsList = () => {
  const { categorySelected } = useFilterStore();

  return (
    <Styles.List>
      {projectsData.map((project) => {
        if (!categorySelected || categorySelected === project.category) {
          return <ProjectItem key={project.title} project={project} />;
        }
      })}
    </Styles.List>
  );
};

export default ProjectsList;
