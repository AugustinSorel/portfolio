import { Variants } from "framer-motion";
import * as Styles from "./Loader.styled";

const variants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 0.75,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Loader = () => {
  return <Styles.Container variants={variants} animate={"animate"} />;
};

export default Loader;
