import * as Styles from "./SubtitleBox.styled";

const subtitleContent = false
  ? "<strong>software</strong> <strong> engineer </strong> student"
  : "étudiant en <strong> génie </strong> <strong> logicel </strong>";

const SubtitleBox = () => {
  return (
    <Styles.Subtitle dangerouslySetInnerHTML={{ __html: subtitleContent }} />
  );
};

export default SubtitleBox;
