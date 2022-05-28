import create from "zustand";

interface NavSideBarStore {
  isNavSideBarOpen: boolean;
  closeNavSideBar: () => void;
  openNavSideBar: () => void;
}

const useNavSideBarStore = create<NavSideBarStore>((set) => ({
  isNavSideBarOpen: false,

  closeNavSideBar: () => set({ isNavSideBarOpen: false }),

  openNavSideBar: () => set({ isNavSideBarOpen: true }),
}));

export default useNavSideBarStore;
