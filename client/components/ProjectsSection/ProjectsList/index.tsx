import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import useFilterStore from "../../../store/useFilterStore";
import useLanguageStore from "../../../store/useLanguageStore";
import { ProjectData } from "../../../types/ProjectsData";
import ProjectItem from "../ProjectItem";
import * as Styles from "./ProjectsList.styled";

const ProjectsList = () => {
  const { getProjectFiltered, categorySelected } = useFilterStore();

  const { isEnglishSelected } = useLanguageStore();

  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    setProjects(getProjectFiltered(isEnglishSelected));
  }, [isEnglishSelected, categorySelected, getProjectFiltered]);

  return (
    <Styles.List>
      <AnimatePresence initial={false}>
        {projects.map((project) => (
          <ProjectItem project={project} key={project.id} />
        ))}
      </AnimatePresence>
    </Styles.List>
  );
};

export default ProjectsList;
