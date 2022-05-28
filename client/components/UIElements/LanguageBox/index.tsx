import useLanguageStore from "../../../store/useLanguageStore";
import LanguageText from "../LanguageText";
import * as Styles from "./LanguageBox.styled";

const LanguageBox = () => {
  const { isEnglishSelected, selectEnglish, selectFrench } = useLanguageStore();

  return (
    <Styles.Container>
      <LanguageText
        text="fr"
        clickHandler={selectFrench}
        isActive={!isEnglishSelected}
      />
      <Styles.LanguageSeparator>x</Styles.LanguageSeparator>
      <LanguageText
        text="en"
        clickHandler={selectEnglish}
        isActive={isEnglishSelected}
      />
    </Styles.Container>
  );
};

export default LanguageBox;
