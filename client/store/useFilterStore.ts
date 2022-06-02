import create from "zustand";
import { Categories } from "../types/ProjectsData";

interface FilterStore {
  categorySelected: null | Categories;
  setCategorySelected: (category: Categories) => void;
}

const useFilterStore = create<FilterStore>((set, get) => ({
  categorySelected: null,

  setCategorySelected: (category: Categories) => {
    if (category === get().categorySelected) {
      return set({ categorySelected: null });
    }
    set({ categorySelected: category });
  },
}));

export default useFilterStore;
