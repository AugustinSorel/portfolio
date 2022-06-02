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
  vercel = "vercel",
  netlify = "netlify",
  heroku = "heroku",
  next = "next",
}

type ProjectData = {
  title: string;
  technologies: Technologies[];
  category: Categories;
};

const projectsData: ProjectData[] = [
  {
    title: "instagram clone",
    technologies: [
      Technologies.react,
      Technologies.nodejs,
      Technologies.express,
      Technologies.mongodb,
      Technologies.typescript,
    ],
    category: Categories.Fullstack,
  },
  {
    title: "multiplayer tic-tac-toe",
    technologies: [
      Technologies.react,
      Technologies.nodejs,
      Technologies.express,
      Technologies.socketio,
      Technologies.typescript,
    ],
    category: Categories.Fullstack,
  },
  {
    title: "Portfolio",
    technologies: [
      Technologies.next,
      Technologies.react,
      Technologies.nodejs,
      Technologies.express,
      Technologies.typescript,
    ],
    category: Categories.Fullstack,
  },
  {
    title: "gym logger",
    technologies: [
      Technologies.wpa,
      Technologies.react,
      Technologies.nodejs,
      Technologies.express,
      Technologies.mongodb,
    ],
    category: Categories.Fullstack,
  },
  {
    title: "DFS visualizer",
    technologies: [Technologies.csharp, Technologies.wpf, Technologies.xaml],
    category: Categories.CSharp,
  },
  {
    title: "Sorting Algorithm Visualizer",
    technologies: [Technologies.csharp, Technologies.wpf, Technologies.xaml],
    category: Categories.CSharp,
  },
  {
    title: "Double Pendulum Simulation",
    technologies: [Technologies.csharp, Technologies.wpf, Technologies.xaml],
    category: Categories.CSharp,
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
              {project.technologies.map((tech) => (
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
