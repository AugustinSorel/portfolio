import useLanguageStore from "../../../store/useLanguageStore";
import { paragraphBottom, paragraphTop } from "../../../utils/headerData";
import * as Styles from "./ParagraphBox.styled";

const ParagraphBox = () => {
  const { isEnglishSelected } = useLanguageStore();

  return (
    <Styles.ParagraphContainer>
      <Styles.Paragraph>{paragraphTop(isEnglishSelected)}</Styles.Paragraph>
      <Styles.Paragraph
        dangerouslySetInnerHTML={{ __html: paragraphBottom(isEnglishSelected) }}
      />
    </Styles.ParagraphContainer>
  );
};

export default ParagraphBox;
