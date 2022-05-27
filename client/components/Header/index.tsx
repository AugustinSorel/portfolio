import * as Styles from "./Header.styled";

const Header = () => {
  return (
    <Styles.Header>
      <Styles.TopSection>
        <Styles.Box>menu</Styles.Box>
        <Styles.Box>contact</Styles.Box>
        <Styles.Box>FR x UK</Styles.Box>
      </Styles.TopSection>

      <Styles.BottomSection>
        <Styles.Title>Augustin sorel</Styles.Title>
        <Styles.Subtitle>
          <Styles.Strong>software</Styles.Strong>
          <Styles.Strong> engineer </Styles.Strong>
          student
        </Styles.Subtitle>
        <Styles.ParagraphContainer>
          <Styles.Paragraph>
            I'm a software engineer student from the University of Leicester.
          </Styles.Paragraph>
          <Styles.Paragraph>
            <Styles.Strong> Passionate </Styles.Strong> about web development
            and design.
          </Styles.Paragraph>
        </Styles.ParagraphContainer>
      </Styles.BottomSection>
    </Styles.Header>
  );
};

export default Header;
