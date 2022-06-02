import { AnimatePresence } from "framer-motion";
import * as Styles from "./Underline.styled";

type Props = {
  isActive: boolean;
};

const Underline = ({ isActive }: Props) => {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      {isActive && (
        <Styles.Underline
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ width: 0 }}
          transition={{ ease: "easeInOut" }}
        />
      )}
    </AnimatePresence>
  );
};

export default Underline;
