import useLanguageStore from "../store/useLanguageStore";

const useTranslation = () => {
  const { isEnglishSelected } = useLanguageStore();

  const subtitleContent = isEnglishSelected
    ? "<strong>software</strong> <strong> engineer </strong> student"
    : "étudiant en <strong> génie </strong> <strong> logicel </strong>";

  const paragraphTop = isEnglishSelected
    ? "I am a software engineer student from the University of Leicester."
    : "Je suis étudiant en génie logiciel à l'Université de Leicester.";

  const paragraphBottom = isEnglishSelected
    ? "<strong>Passionate</strong> about web development and design."
    : "<strong>Passionné</strong> par le développement web et le design.";

  return {
    subtitleContent,
    paragraphTop,
    paragraphBottom,
  };
};

export default useTranslation;
