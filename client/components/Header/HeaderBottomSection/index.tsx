import ParagraphBox from "../../UIElements/ParagraphBox";
import SubtitleBox from "../../UIElements/SubtitleBox";
import TitleBox from "../../UIElements/TitleBox";
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
