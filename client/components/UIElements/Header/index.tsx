import HeaderBottomSection from "../HeaderBottomSection";
import HeaderTopSection from "../HeaderTopSection";
import * as Styles from "./Header.styled";

const Header = () => {
  return (
    <Styles.Header>
      <HeaderTopSection />
      <HeaderBottomSection />
    </Styles.Header>
  );
};

export default Header;
