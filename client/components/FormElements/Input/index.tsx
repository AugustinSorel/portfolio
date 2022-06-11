import { useAnimation } from "framer-motion";
import { HTMLInputTypeAttribute, useEffect } from "react";
import errorVariants from "../../../framerMotion/errorVariants";
import * as Styles from "./Input.styled";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  isInputWrong: boolean;
};

const Input = ({ isInputWrong, ...rest }: Props) => {
  const animation = useAnimation();

  useEffect(() => {
    if (isInputWrong) {
      animation.start("animate");
    }
  }, [isInputWrong]);

  return (
    <Styles.Input
      variants={errorVariants}
      animate={animation}
      autoComplete="no"
      {...rest}
    />
  );
};

export default Input;
