import create from "zustand";
import { Categories, ProjectData } from "../types/ProjectsData";
import projectsData from "../utils/ProjectsData";

interface FilterStore {
  categorySelected: null | Categories;
  setCategorySelected: (category: Categories) => void;

  getProjectFiltered: (isEnglishSelected: boolean) => ProjectData[];
}

const useFilterStore = create<FilterStore>((set, get) => ({
  categorySelected: null,

  setCategorySelected: (category: Categories) => {
    if (category === get().categorySelected) {
      return set({ categorySelected: null });
    }

    set({ categorySelected: category });
  },

  getProjectFiltered: (isEnglishSelected: boolean) => {
    if (!get().categorySelected) {
      return projectsData(isEnglishSelected);
    }

    return projectsData(isEnglishSelected).filter(
      (project) => project.category === get().categorySelected
    );
  },
}));

export default useFilterStore;
