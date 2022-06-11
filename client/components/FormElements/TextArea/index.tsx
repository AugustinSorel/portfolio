import { useAnimation } from "framer-motion";
import React from "react";
import errorVariants from "../../../framerMotion/errorVariants";
import * as Styles from "./TextArea.styled";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
};

type InputRefProps = {
  startErrorAnimation: () => void;
};

const TextArea = ({ ...rest }: Props, ref: React.Ref<InputRefProps>) => {
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
