import { AnimatePresence } from "framer-motion";
import useFilterStore from "../../../store/useFilterStore";
import { ProjectData } from "../../../types/ProjectsData";
import ProjectItem from "../ProjectItem";
import * as Styles from "./ProjectsList.styled";

type Props = {
  projects: ProjectData[];
};

const ProjectsList = ({ projects }: Props) => {
  const { categorySelected } = useFilterStore();

  return (
    <Styles.List>
      {projects.map((project) => (
        <AnimatePresence exitBeforeEnter key={project.title}>
          {(!categorySelected || categorySelected === project.category) && (
            <ProjectItem project={project} />
          )}
        </AnimatePresence>
      ))}
    </Styles.List>
  );
};

export default ProjectsList;
