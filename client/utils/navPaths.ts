import NavPath from "../types/NavPath";

const navPaths = (isEnglishSelected: boolean): NavPath[] => [
  {
    href: "/#qualifications",
    label: isEnglishSelected ? "qualifications" : "qualifications",
  },
  {
    href: "/#experiences",
    label: isEnglishSelected ? "experiences" : "expériences",
  },
  {
    href: "/#projects",
    label: isEnglishSelected ? "projects" : "projets",
  },
  {
    href: "/#skills",
    label: isEnglishSelected ? "skills" : "compétences",
  },
  {
    href: "/#contact",
    label: isEnglishSelected ? "contact" : "contact",
  },
];

export default navPaths;
