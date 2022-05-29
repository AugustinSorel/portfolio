import Link from "next/link";
import React from "react";
import useNavSideBarStore from "../../../store/useNavSideBarStore";
import NavPath from "../../../types/NavPath";
import * as Styles from "./NavItem.styled";

type Props = {
  path: NavPath;
  isActive: boolean;
};

const NavItem = ({ path: { href, label }, isActive }: Props) => {
  const { closeNavSideBar } = useNavSideBarStore();

  return (
    <Styles.ListItem>
      <Link href={href} passHref>
        <Styles.Anchor onClick={closeNavSideBar} isActive={isActive}>
          <Styles.Title>{label}</Styles.Title>
        </Styles.Anchor>
      </Link>
    </Styles.ListItem>
  );
};

export default NavItem;
