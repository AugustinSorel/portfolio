import ContactBox from "../ContactBox";
import LanguageBox from "../LanguageBox";
import MenuBox from "../MenuBox";
import * as Styles from "./HeaderTopSection.styled";

const HeaderTopSection = () => {
  return (
    <Styles.Container>
      <MenuBox />
      <ContactBox />
      <LanguageBox />
    </Styles.Container>
  );
};

export default HeaderTopSection;
