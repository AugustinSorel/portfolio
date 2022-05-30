import useLanguageStore from "../../../store/useLanguageStore";
import { subtitle } from "../../../utils/headerData";
import * as Styles from "./SubtitleBox.styled";

const SubtitleBox = () => {
  const { isEnglishSelected } = useLanguageStore();

  return (
    <Styles.Subtitle
      dangerouslySetInnerHTML={{ __html: subtitle(isEnglishSelected) }}
    />
  );
};

export default SubtitleBox;
