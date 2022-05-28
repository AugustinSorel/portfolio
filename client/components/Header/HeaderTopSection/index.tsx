import ContactBox from "../../UIElements/ContactBox";
import LanguageBox from "../../UIElements/LanguageBox";
import MenuBox from "../../UIElements/MenuBox";
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
