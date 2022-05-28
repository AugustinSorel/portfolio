import zustand from "zustand";

interface LanguageStore {
  isEnglishSelected: boolean;
  selectEnglish: () => void;
  selectFrench: () => void;
}

const useLanguageStore = zustand<LanguageStore>((set) => ({
  isEnglishSelected: true,
  selectEnglish: () => set({ isEnglishSelected: true }),
  selectFrench: () => set({ isEnglishSelected: false }),
}));

export default useLanguageStore;
