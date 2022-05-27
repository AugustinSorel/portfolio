import { useState } from "react";
import Button from "../../FormElements/Button";
import MenuSvg from "../MenuSvg";
import * as Styles from "./MenuBox.styled";

const MenuBox = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clickHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Styles.Container>
      <Styles.MenuText>menu</Styles.MenuText>
      <Button onClick={clickHandler} text="menuButton">
        <MenuSvg isMenuOpen={isMenuOpen} />
      </Button>
    </Styles.Container>
  );
};

export default MenuBox;
