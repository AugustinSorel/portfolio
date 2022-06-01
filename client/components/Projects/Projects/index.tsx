import Checkbox from "../../FormElements/Checkbox";
import * as Styles from "./Projects.styled";

enum Categories {
  Fullstack = "fullstack",
  Frontend = "frontend",
  CSharp = "c#",
}

enum Technologies {
  react = "react",
  nodejs = "nodejs",
  express = "express",
  mongodb = "mongodb",
  typescript = "typescript",
  zustand = "zustand",
  framerMotion = "framer motion",
  styledComponents = "styled-components",
  csharp = "C#",
  wpf = "WPF",
  socketio = "socket.io",
  jwt = "JWT",
  zod = "ZOD",
  multer = "multer",
  reactQuery = "react-query",
  recharts = "recharts",
  xaml = "XAML",
  wpa = "WPA",
}

type ProjectData = {
  title: string;
  description: Technologies[];
  category: Categories;
};

const projectsData: ProjectData[] = [
  {
    title: "project one",
    description: [Technologies.csharp, Technologies.wpf],
    category: Categories.Fullstack,
  },
  {
    title: "project two",
    description: [
      Technologies.nodejs,
      Technologies.express,
      Technologies.mongodb,
    ],
    category: Categories.Frontend,
  },
  {
    title: "project three",
    description: [
      Technologies.react,
      Technologies.reactQuery,
      Technologies.recharts,
    ],
    category: Categories.CSharp,
  },
  {
    title: "project four",
    description: [
      Technologies.typescript,
      Technologies.zustand,
      Technologies.framerMotion,
      Technologies.styledComponents,
    ],
    category: Categories.Fullstack,
  },
];

const Projects = () => {
  return (
    <Styles.Section id="projects">
      <Styles.FilterList>
        {Object.values(Categories).map((category) => (
          <Styles.FilterListItem key={category}>
            <Checkbox
              text={category}
              isActive={false}
              clickHandler={() => {}}
            />
          </Styles.FilterListItem>
        ))}
      </Styles.FilterList>

      <Styles.ProjectsList>
        {projectsData.map((project) => (
          <Styles.ProjectsListItem key={project.title}>
            <Styles.ProjectTitle>{project.title}</Styles.ProjectTitle>
            <Styles.ProjectCategory>{project.category}</Styles.ProjectCategory>
            <Styles.ProjectTechList>
              {project.description.map((tech) => (
                <Styles.ProjectTechListItem key={tech}>
                  <Styles.ProjectTechListItemText>
                    {tech}
                  </Styles.ProjectTechListItemText>
                </Styles.ProjectTechListItem>
              ))}
            </Styles.ProjectTechList>
          </Styles.ProjectsListItem>
        ))}
      </Styles.ProjectsList>
    </Styles.Section>
  );
};
export default Projects;
