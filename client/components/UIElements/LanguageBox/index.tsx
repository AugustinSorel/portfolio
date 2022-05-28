import { useState } from "react";
import LanguageText from "../LanguageText";
import * as Styles from "./LanguageBox.styled";

const LanguageBox = () => {
  const [isEnglishSelected, setIsEnglishSelected] = useState(true);

  return (
    <Styles.Container>
      <LanguageText
        text="fr"
        clickHandler={() => setIsEnglishSelected(false)}
        isActive={!isEnglishSelected}
      />
      <Styles.LanguageSeparator>x</Styles.LanguageSeparator>
      <LanguageText
        text="en"
        clickHandler={() => setIsEnglishSelected(true)}
        isActive={isEnglishSelected}
      />
    </Styles.Container>
  );
};

export default LanguageBox;
