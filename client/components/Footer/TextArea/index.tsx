import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import errorVariants from "../../../framerMotion/errorVariants";
import * as Styles from "./TextArea.styled";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  isInputWrong: boolean;
};

const TextArea = ({ isInputWrong, ...rest }: Props) => {
  const animation = useAnimation();

  useEffect(() => {
    if (isInputWrong) {
      animation.start("animate");
    }
  }, [isInputWrong]);

  return (
    <Styles.TextArea
      variants={errorVariants}
      animate={animation}
      rows={4}
      {...rest}
    />
  );
};

export default TextArea;
