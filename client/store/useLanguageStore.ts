import create from "zustand";

interface LanguageStore {
  isEnglishSelected: boolean;
  selectEnglish: () => void;
  selectFrench: () => void;
}

const useLanguageStore = create<LanguageStore>((set) => ({
  isEnglishSelected: true,
  selectEnglish: () => set({ isEnglishSelected: true }),
  selectFrench: () => set({ isEnglishSelected: false }),
}));

export default useLanguageStore;
