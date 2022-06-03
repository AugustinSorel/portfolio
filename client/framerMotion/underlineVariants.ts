import { Variants } from "framer-motion";

const UnderlineVariants: Variants = {
  initial: {
    width: 0,
  },

  animate: {
    width: "100%",
    transition: { ease: "easeInOut" },
  },

  exit: {
    width: 0,
  },
};

export default UnderlineVariants;
