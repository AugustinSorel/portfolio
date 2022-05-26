import * as Styles from "./Header.styled";

const Header = () => {
  return (
    <Styles.Header>
      <Styles.TopContainer>
        <Styles.Box>menu</Styles.Box>
        <Styles.Box>contact</Styles.Box>
        <Styles.Box>FR x UK</Styles.Box>
      </Styles.TopContainer>

      <Styles.BottomContainer>
        <Styles.Title>Augustin sorel</Styles.Title>
        <Styles.Box>software engineer student</Styles.Box>
        <Styles.ParagraphContainer>
          <Styles.Paragraph>
            I'm a software engineer student from the University of Leicester.
          </Styles.Paragraph>
          <Styles.Paragraph>
            <Styles.Strong> Passionate </Styles.Strong> about web development
            and design.
          </Styles.Paragraph>
        </Styles.ParagraphContainer>
      </Styles.BottomContainer>
    </Styles.Header>
  );
};

export default Header;
