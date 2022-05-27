import * as Styles from "./Header.styled";

const HeaderTopSection = () => {
  return (
    <Styles.TopSection>
      <Styles.MenuContainer>
        <Styles.MenuText>menu</Styles.MenuText>
        <button>X</button>
      </Styles.MenuContainer>

      <Styles.ContactContainer>
        <Styles.ContactText>contact</Styles.ContactText>
        <button>X</button>
      </Styles.ContactContainer>

      <Styles.LanguageContainer>
        <Styles.LanguageText>FR x UK</Styles.LanguageText>
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
