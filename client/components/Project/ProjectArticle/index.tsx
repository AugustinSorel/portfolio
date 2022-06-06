import { ProjectData } from "../../../types/ProjectsData";
import Carousel from "../../UIElements/carousel";
import ProjectLabelDescription from "../ProjectLabelDescription";
import ProjectList from "../ProjectList";
import * as Styles from "./ProjectArticle.styled";

type Props = {
  project: ProjectData;
};

const ProjectArticle = ({ project }: Props) => {
  return (
    <Styles.Article>
      <Styles.Title>{project.title}</Styles.Title>

      {project.images && <Carousel imagesString={project.images} />}

      <ProjectLabelDescription text="description" />
      <Styles.Description>{project.description}</Styles.Description>

      <ProjectLabelDescription text="what i have learned" />
      <ProjectList iterator={project.whatIHaveLearned} />

      <ProjectLabelDescription text="all technologies" />
      <ProjectList iterator={project.allTechnologies} />
    </Styles.Article>
  );
};

export default ProjectArticle;
