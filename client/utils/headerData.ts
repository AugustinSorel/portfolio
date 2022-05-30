export const subtitle = (isEnglishSelected: boolean) =>
  isEnglishSelected
    ? "<strong>software</strong> <strong> engineer </strong> student"
    : "étudiant en <strong> génie </strong> <strong> logicel </strong>";

export const paragraphTop = (isEnglishSelected: boolean) =>
  isEnglishSelected
    ? "I am a software engineer student from the University of Leicester."
    : "Je suis étudiant en génie logiciel à l'Université de Leicester.";

export const paragraphBottom = (isEnglishSelected: boolean) =>
  isEnglishSelected
    ? "<strong>Passionate</strong> about web development and design."
    : "<strong>Passionné</strong> par le développement web et le design.";
