import { useEffect, useState } from "react";
import useLanguageStore from "../../../store/useLanguageStore";
import { ProjectData } from "../../../types/ProjectsData";
import projectsData from "../../../utils/ProjectsData";
import ProjectTechList from "../../ProjectsSection/ProjectTechList";
import * as Styles from "./ProjectArticle.styled";

type Props = {
  project: ProjectData;
};

const ProjectArticle = ({ project }: Props) => {
  const { isEnglishSelected } = useLanguageStore();
  const [translatedProject, setTranslatedProject] = useState(project);

  useEffect(() => {
    setTranslatedProject(
      projectsData(isEnglishSelected).find(
        (project) => project.id === translatedProject.id
      )!
    );
  }, [isEnglishSelected]);

  return (
    <Styles.Article>
      <Styles.Title>{translatedProject.title}</Styles.Title>
      <Styles.Description>{translatedProject.description}</Styles.Description>

      <Styles.List>
        {translatedProject.allTechnologies.map((technology) => (
          <Styles.ListItem key={technology}>
            <Styles.Text>{technology}</Styles.Text>
          </Styles.ListItem>
        ))}
      </Styles.List>
    </Styles.Article>
  );
};

export default ProjectArticle;
