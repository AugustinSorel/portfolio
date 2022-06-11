import { useAnimation } from "framer-motion";
import React from "react";
import errorVariants from "../../../framerMotion/errorVariants";
import InputRefProps from "../../../types/ErrorAnimationRef";
import * as Styles from "./TextArea.styled";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
};

const TextArea = ({ ...rest }: Props, ref: InputRefProps) => {
  const animation = useAnimation();

  React.useImperativeHandle(ref, () => ({
    startErrorAnimation() {
      animation.start("animate");
    },
  }));

  return (
    <Styles.TextArea
      variants={errorVariants}
      animate={animation}
      rows={4}
      {...rest}
    />
  );
};

export default React.forwardRef(TextArea);
