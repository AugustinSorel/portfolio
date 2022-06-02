import { AnimatePresence, Variants } from "framer-motion";
import { ProjectData } from "../../../types/ProjectsData";
import ProjectTechList from "../ProjectTechList";
import * as Styles from "./ProjectItem.styled";

type Props = {
  project: ProjectData;
};

const variants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const ProjectItem = ({ project }: Props) => {
  return (
    <Styles.ListItem
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 2 }}
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
