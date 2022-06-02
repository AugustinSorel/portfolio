import { Categories, ProjectData, Technologies } from "../types/ProjectsData";

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
    category: Categories.Frontend,
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
    category: Categories.Simulation,
  },
  {
    title: "Sorting Algorithm Visualizer",
    technologies: [Technologies.csharp, Technologies.wpf, Technologies.xaml],
    category: Categories.Simulation,
  },
  {
    title: "Double Pendulum Simulation",
    technologies: [Technologies.csharp, Technologies.wpf, Technologies.xaml],
    category: Categories.Simulation,
  },
];

export default projectsData;
