import Link from "next/link";
import React, { memo } from "react";
import useNavSideBarStore from "../../../store/useNavSideBarStore";
import NavPath from "../../../types/NavPath";
import * as Styles from "./NavItem.styled";

type Props = {
  path: NavPath;
  isActive: boolean;
};

const NavItem = memo(({ path: { href, label }, isActive }: Props) => {
  const { closeNavSideBar } = useNavSideBarStore();

  return (
    <Styles.ListItem isActive={isActive}>
      <Link href={href} passHref>
        <Styles.Anchor onClick={closeNavSideBar}>{label}</Styles.Anchor>
      </Link>
    </Styles.ListItem>
  );
});

export default NavItem;
