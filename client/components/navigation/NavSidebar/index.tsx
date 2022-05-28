import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";
import useNavSideBarStore from "../../../store/useNavSideBarStore";
import Backdrop from "../../UIElements/Backdrop";
import * as Styles from "./NavSidebar.styled";

type Path = {
  href: string;
  label: string;
};

const paths: Path[] = [
  {
    href: "/#qualifications",
    label: "qualifications",
  },
  {
    href: "/#experiences",
    label: "experiences",
  },
  {
    href: "/#projects",
    label: "projects",
  },
  {
    href: "/#skills",
    label: "skills",
  },
  {
    href: "/#contact",
    label: "contact",
  },
];

type Props = {
  path: Path;
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

const NavSidebar = () => {
  const { isNavSideBarOpen, closeNavSideBar } = useNavSideBarStore();
  const { asPath } = useRouter();

  useEffect(() => {
    console.log(asPath);
  }, [asPath]);

  return (
    <AnimatePresence exitBeforeEnter>
      {isNavSideBarOpen && (
        <Backdrop closeHandler={closeNavSideBar}>
          <Styles.Container
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Styles.Nav>
              <Styles.List>
                {paths.map((path) => (
                  <NavItem
                    path={path}
                    key={path.href}
                    isActive={path.href === asPath}
                  />
                ))}
              </Styles.List>
            </Styles.Nav>
          </Styles.Container>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default NavSidebar;
