import { AnimatePresence } from "framer-motion";
import React from "react";
import Backdrop from "../Backdrop";
import Portal from "../Portal";
import * as Styles from "./Sidebar.styled";

type Props = {
  isSideBarOpen: boolean;
  closeHandler: () => void;
  children: React.ReactNode;
};

const Sidebar = ({ closeHandler, isSideBarOpen, children }: Props) => {
  return (
    <Portal target="#sidebar-root">
      <AnimatePresence exitBeforeEnter>
        {isSideBarOpen && (
          <Backdrop closeHandler={closeHandler}>
            <Styles.Container
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </Styles.Container>
          </Backdrop>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default Sidebar;
