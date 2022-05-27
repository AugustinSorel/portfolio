import { useState } from "react";
import { scaleDown, scaleUp } from "../../../framerMotion/whileVariants";
import Button from "../../FormElements/Button";
import MenuSvg from "../MenuSvg";
import SvgIcon from "../SvgIcon";
import * as Styles from "./HeaderTopSection.styled";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clickHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Styles.MenuContainer>
      <Styles.MenuText>menu</Styles.MenuText>
      <Button onClick={clickHandler} text="menuButton">
        <MenuSvg isMenuOpen={isMenuOpen} />
      </Button>
    </Styles.MenuContainer>
  );
};

const Contact = () => {
  const contactClickHandler = () => {};
  return (
    <Styles.ContactContainer>
      <Styles.ContactText>contact</Styles.ContactText>
      <Button onClick={contactClickHandler} text="contactButton">
        <SvgIcon path="arrowDown" />
      </Button>
    </Styles.ContactContainer>
  );
};

const Language = () => {
  const [isEnglishSelected, setIsEnglishSelected] = useState(true);
  return (
    <Styles.LanguageContainer>
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
    </Styles.LanguageContainer>
  );
};

const HeaderTopSection = () => {
  return (
    <Styles.Container>
      <Menu />
      <Contact />
      <Language />
    </Styles.Container>
  );
};

export default HeaderTopSection;
