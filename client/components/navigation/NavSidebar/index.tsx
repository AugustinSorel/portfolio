import useNavSideBarStore from "../../../store/useNavSideBarStore";
import Sidebar from "../../UIElements/Sidebar";
import NavList from "../NavList";
import * as Styles from "./NavSidebar.styled";

const NavSidebar = () => {
  const { isNavSideBarOpen, closeNavSideBar } = useNavSideBarStore();

  return (
    <Sidebar closeHandler={closeNavSideBar} isSideBarOpen={isNavSideBarOpen}>
      <Styles.Nav>
        <NavList />
      </Styles.Nav>
    </Sidebar>
  );
};

export default NavSidebar;
