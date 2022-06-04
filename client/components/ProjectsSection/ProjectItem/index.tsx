import Link from "next/link";
import projectItemVariants from "../../../framerMotion/projectItemVariants";
import { ProjectData } from "../../../types/ProjectsData";
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
            <Styles.Title>{project.title}</Styles.Title>
            <Styles.Container>
              <Styles.Category>{project.category}</Styles.Category>
              <Styles.Date>{project.date}</Styles.Date>
            </Styles.Container>
            <ProjectTechList technologies={project.technologies} />
          </Styles.Anchor>
        </Link>
      </Styles.Article>
    </Styles.ListItem>
  );
};

export default ProjectItem;
