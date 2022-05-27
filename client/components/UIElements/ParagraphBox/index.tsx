import * as Styles from "./ParagraphBox.styled";

const ParagraphBox = () => {
  return (
    <Styles.ParagraphContainer>
      <Styles.Paragraph>
        I am a software engineer student from the University of Leicester.
      </Styles.Paragraph>
      <Styles.Paragraph>
        <strong> Passionate </strong> about web development and design.
      </Styles.Paragraph>
    </Styles.ParagraphContainer>
  );
};

export default ParagraphBox;
