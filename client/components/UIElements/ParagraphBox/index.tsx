import useTranslation from "../../../hooks/useTranslation";
import * as Styles from "./ParagraphBox.styled";

const ParagraphBox = () => {
  const { paragraphBottom, paragraphTop } = useTranslation();

  return (
    <Styles.ParagraphContainer>
      <Styles.Paragraph>{paragraphTop}</Styles.Paragraph>
      <Styles.Paragraph dangerouslySetInnerHTML={{ __html: paragraphBottom }} />
    </Styles.ParagraphContainer>
  );
};

export default ParagraphBox;
