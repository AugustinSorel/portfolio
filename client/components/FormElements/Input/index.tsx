import { useAnimation } from "framer-motion";
import React, { HTMLInputTypeAttribute } from "react";
import errorVariants from "../../../framerMotion/errorVariants";
import * as Styles from "./Input.styled";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: HTMLInputTypeAttribute;
  placeholder: string;
};

type InputRefProps = {
  startErrorAnimation: () => void;
};

const Input = ({ ...rest }: Props, ref: React.Ref<InputRefProps>) => {
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
