import ParagraphBox from "../ParagraphBox";
import SubtitleBox from "../SubtitleBox";
import TitleBox from "../TitleBox";
import * as Styles from "./HeaderBottomSection.styled";

const HeaderBottomSection = () => {
  return (
    <Styles.Container>
      <TitleBox />
      <SubtitleBox />
      <ParagraphBox />
    </Styles.Container>
  );
};

export default HeaderBottomSection;
