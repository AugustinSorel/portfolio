import { Variants } from "framer-motion";
import theme from "../styles/theme";

const errorVariants: Variants = {
  animate: {
    x: [0, -50, 50, 0],
    color: [theme.colors.color, theme.colors.error, theme.colors.color],
    borderColor: [theme.colors.color, theme.colors.error, theme.colors.color],
  },
};

export default errorVariants;
