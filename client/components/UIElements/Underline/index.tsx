import { AnimatePresence } from "framer-motion";
import UnderlineVariants from "../../../framerMotion/underlineVariants";
import * as Styles from "./Underline.styled";

type Props = {
  isActive: boolean;
};

const Underline = ({ isActive }: Props) => {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      {isActive && (
        <Styles.Underline
          variants={UnderlineVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      )}
    </AnimatePresence>
  );
};

export default Underline;
