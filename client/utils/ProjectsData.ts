import { Categories, ProjectData, Technologies } from "../types/ProjectsData";

const projectsData = (isEnglishSelected: boolean): ProjectData[] => [
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
    title: isEnglishSelected ? "gym logger" : "journal de sport",
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
    title: isEnglishSelected ? "DFS visualizer" : "visualiseur DFS",
    technologies: [Technologies.csharp, Technologies.wpf, Technologies.xaml],
    category: Categories.Simulation,
  },
  {
    title: isEnglishSelected
      ? "multiplayer tic-tac-toe"
      : "morpion multijoueur",
    technologies: [
      Technologies.react,
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
      Technologies.nodejs,
      Technologies.express,
      Technologies.typescript,
    ],
    category: Categories.Frontend,
  },
  {
    title: isEnglishSelected
      ? "Sorting Algorithm Visualizer"
      : "Visualiseur de tri par algorithme",
    technologies: [Technologies.csharp, Technologies.wpf, Technologies.xaml],
    category: Categories.Simulation,
  },
  {
    title: isEnglishSelected
      ? "Double Pendulum Simulation"
      : "Simulation d'un double pendule",
    technologies: [Technologies.csharp, Technologies.wpf, Technologies.xaml],
    category: Categories.Simulation,
  },
];

export default projectsData;
