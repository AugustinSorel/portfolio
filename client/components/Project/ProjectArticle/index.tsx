import { ProjectData } from "../../../types/ProjectsData";
import * as Styles from "./ProjectArticle.styled";

type Props = {
  project: ProjectData;
};

const ProjectArticle = ({ project }: Props) => {
  return (
    <Styles.Article>
      <Styles.Title>{project.title}</Styles.Title>
      <Styles.Description>{project.description}</Styles.Description>

      <Styles.List>
        {project.allTechnologies.map((technology) => (
          <Styles.ListItem key={technology}>
            <Styles.Text>{technology}</Styles.Text>
          </Styles.ListItem>
        ))}
      </Styles.List>
    </Styles.Article>
  );
};

export default ProjectArticle;
