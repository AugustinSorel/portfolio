import useNavSideBarStore from "../../../store/useNavSideBarStore";
import Button from "../../FormElements/Button";
import NavSidebar from "../../navigation/NavSidebar";
import MenuSvg from "../MenuSvg";
import * as Styles from "./MenuBox.styled";

const MenuBox = () => {
  const { openNavSideBar } = useNavSideBarStore();

  return (
    <Styles.Container>
      <Styles.Text>menu</Styles.Text>
      <Button onClick={openNavSideBar} text="menu">
        <MenuSvg />
      </Button>
      <NavSidebar />
    </Styles.Container>
  );
};

export default MenuBox;
