import useLanguageStore from "../../../store/useLanguageStore";
import Checkbox from "../../FormElements/Checkbox";
import * as Styles from "./LanguageBox.styled";

const LanguageBox = () => {
  const { isEnglishSelected, selectEnglish, selectFrench } = useLanguageStore();

  return (
    <Styles.Container>
      <Checkbox
        text="fr"
        clickHandler={selectFrench}
        isActive={!isEnglishSelected}
      />
      <Styles.LanguageSeparator>x</Styles.LanguageSeparator>
      <Checkbox
        text="en"
        clickHandler={selectEnglish}
        isActive={isEnglishSelected}
      />
    </Styles.Container>
  );
};

export default LanguageBox;
