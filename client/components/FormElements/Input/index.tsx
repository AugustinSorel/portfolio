import { useAnimation } from "framer-motion";
import React, { HTMLInputTypeAttribute } from "react";
import errorVariants from "../../../framerMotion/errorVariants";
import InputRefProps from "../../../types/ErrorAnimationRef";
import * as Styles from "./Input.styled";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: HTMLInputTypeAttribute;
  placeholder: string;
};

const Input = ({ ...rest }: Props, ref: InputRefProps) => {
  const animation = useAnimation();

  React.useImperativeHandle(ref, () => ({
    startErrorAnimation() {
      animation.start("animate");
    },
  }));

  return (
    <Styles.Input
      variants={errorVariants}
      animate={animation}
      autoComplete="no"
      {...rest}
    />
  );
};

export default React.forwardRef(Input);
