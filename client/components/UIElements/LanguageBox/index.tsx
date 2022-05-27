import { useState } from "react";
import { scaleDown, scaleUp } from "../../../framerMotion/whileVariants";
import * as Styles from "./LanguageBox.styled";

const LanguageBox = () => {
  const [isEnglishSelected, setIsEnglishSelected] = useState(true);
  return (
    <Styles.Container>
      <Styles.LanguageText
        $isActive={!isEnglishSelected}
        onClick={() => setIsEnglishSelected(false)}
        whileFocus={{ ...scaleUp }}
        whileHover={{ ...scaleUp }}
        whileTap={{ ...scaleDown }}
      >
        fr
      </Styles.LanguageText>
      <Styles.LanguageSeparator>x</Styles.LanguageSeparator>
      <Styles.LanguageText
        $isActive={isEnglishSelected}
        onClick={() => setIsEnglishSelected(true)}
        whileFocus={{ ...scaleUp }}
        whileHover={{ ...scaleUp }}
        whileTap={{ ...scaleDown }}
      >
        en
      </Styles.LanguageText>
    </Styles.Container>
  );
};

export default LanguageBox;
