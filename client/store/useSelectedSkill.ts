import create from "zustand";

interface ISelectedSkill {
  selectedSkill: string | null;
  setSelectedSkill: (skill: string) => void;
}

const useSelectedSkill = create<ISelectedSkill>((set, get) => ({
  selectedSkill: null,

  setSelectedSkill: (newSkill: string) => {
    const currentSkill = get().selectedSkill;

    if (newSkill === currentSkill) {
      return set({ selectedSkill: null });
    }

    set({ selectedSkill: newSkill });
  },
}));

export default useSelectedSkill;
