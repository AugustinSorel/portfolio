import useTranslation from "../../../hooks/useTranslation";
import * as Styles from "./SubtitleBox.styled";

const SubtitleBox = () => {
  const { subtitleContent } = useTranslation();

  return (
    <Styles.Subtitle dangerouslySetInnerHTML={{ __html: subtitleContent }} />
  );
};

export default SubtitleBox;
