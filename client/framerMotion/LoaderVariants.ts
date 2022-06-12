import { Variants } from "framer-motion";

const loaderVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 0.75,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export default loaderVariants;
