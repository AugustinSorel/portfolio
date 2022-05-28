import { useRouter } from "next/router";
import useLanguageStore from "../../../store/useLanguageStore";
import navPaths from "../../../utils/navPaths";
import NavItem from "../NavItem";
import * as Styles from "./NavList.styled";

const NavList = () => {
  const { asPath } = useRouter();
  const { isEnglishSelected } = useLanguageStore();

  return (
    <Styles.List>
      {navPaths(isEnglishSelected).map((path) => (
        <NavItem path={path} key={path.href} isActive={path.href === asPath} />
      ))}
    </Styles.List>
  );
};

export default NavList;
