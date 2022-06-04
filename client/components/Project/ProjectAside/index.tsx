import { ProjectData } from "../../../types/ProjectsData";
import ProjectDetails from "../../ProjectsSection/ProjectDetails";
import ProjectTechList from "../../ProjectsSection/ProjectTechList";
import ProjectLinks from "../ProjectLinks";
import * as Styles from "./ProjectAside.styled";

type Props = {
  project: ProjectData;
};

const ProjectAside = ({ project }: Props) => {
  return (
    <Styles.Aside>
      <ProjectDetails category={project.category} date={project.date} />

      <ProjectTechList technologies={project.technologies} />

      <ProjectLinks links={project.links} />
    </Styles.Aside>
  );
};

export default ProjectAside;
