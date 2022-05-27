import * as Styles from "./HeaderBottomSection.styled";

const Title = () => {
  return <Styles.Title>Augustin sorel</Styles.Title>;
};

const Subtitle = () => {
  return (
    <Styles.Subtitle>
      <Styles.Strong>software</Styles.Strong>
      <Styles.Strong> engineer </Styles.Strong>
      student
    </Styles.Subtitle>
  );
};

const Paragraph = () => {
  return (
    <Styles.ParagraphContainer>
      <Styles.Paragraph>
        I am a software engineer student from the University of Leicester.
      </Styles.Paragraph>
      <Styles.Paragraph>
        <Styles.Strong> Passionate </Styles.Strong> about web development and
        design.
      </Styles.Paragraph>
    </Styles.ParagraphContainer>
  );
};

const HeaderBottomSection = () => {
  return (
    <Styles.Container>
      <Title />
      <Subtitle />
      <Paragraph />
    </Styles.Container>
  );
};

export default HeaderBottomSection;
