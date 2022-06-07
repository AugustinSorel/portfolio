import Link from "next/link";
import projectItemVariants from "../../../framerMotion/projectItemVariants";
import { ProjectData } from "../../../types/ProjectsData";
import ProjectDetails from "../ProjectDetails";
import ProjectTechList from "../ProjectTechList";
import * as Styles from "./ProjectItem.styled";

type Props = {
  project: ProjectData;
};

const ProjectItem = ({ project }: Props) => {
  return (
    <Styles.ListItem
      variants={projectItemVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      layout
    >
      <Styles.Article>
        <Link href={`/projects/${project.id}`} passHref>
          <Styles.Anchor>
            <Styles.Title layout>{project.title}</Styles.Title>
            <ProjectDetails category={project.category} date={project.date} />
            <ProjectTechList technologies={project.technologies} />
          </Styles.Anchor>
        </Link>
      </Styles.Article>
    </Styles.ListItem>
  );
};

export default ProjectItem;
