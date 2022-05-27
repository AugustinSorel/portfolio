import { useState } from "react";
import Button from "../FormElements/Button";
import MenuSvg from "../UIElements/MenuSvg";
import SvgIcon from "../UIElements/SvgIcon";
import * as Styles from "./Header.styled";

const HeaderTopSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnglishSelected, setIsEnglishSelected] = useState(true);

  const contactClickHandler = () => {
    console.log("go to contact page");
  };

  return (
    <Styles.TopSection>
      <Styles.MenuContainer>
        <Styles.MenuText>menu</Styles.MenuText>
        <Button onClick={() => setIsMenuOpen((prev) => !prev)}>
          <MenuSvg isMenuOpen={isMenuOpen} />
        </Button>
      </Styles.MenuContainer>

      <Styles.ContactContainer>
        <Styles.ContactText>contact</Styles.ContactText>
        <Button onClick={contactClickHandler}>
          <SvgIcon path="arrowDown" />
        </Button>
      </Styles.ContactContainer>

      <Styles.LanguageContainer>
        <Button onClick={() => setIsEnglishSelected(false)}>
          <Styles.LanguageText isActive={!isEnglishSelected}>
            fr
          </Styles.LanguageText>
        </Button>
        <Styles.LanguageSeparator>x</Styles.LanguageSeparator>
        <Button onClick={() => setIsEnglishSelected(true)}>
          <Styles.LanguageText isActive={isEnglishSelected}>
            en
          </Styles.LanguageText>
        </Button>
      </Styles.LanguageContainer>
    </Styles.TopSection>
  );
};

const HeaderBottomSection = () => {
  return (
    <Styles.BottomSection>
      <Styles.Title>Augustin sorel</Styles.Title>
      <Styles.Subtitle>
        <Styles.Strong>software</Styles.Strong>
        <Styles.Strong> engineer </Styles.Strong>
        student
      </Styles.Subtitle>
      <Styles.ParagraphContainer>
        <Styles.Paragraph>
          I am a software engineer student from the University of Leicester.
        </Styles.Paragraph>
        <Styles.Paragraph>
          <Styles.Strong> Passionate </Styles.Strong> about web development and
          design.
        </Styles.Paragraph>
      </Styles.ParagraphContainer>
    </Styles.BottomSection>
  );
};

const Header = () => {
  return (
    <Styles.Header>
      <HeaderTopSection />
      <HeaderBottomSection />
    </Styles.Header>
  );
};

export default Header;
