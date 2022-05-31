import React from "react";
import Button from "../Button";
import * as Styles from "./Checkbox.styled";

type Props = {
  text: string;
  isActive: boolean;
  clickHandler: () => void;
};

const Checkbox = ({ text, clickHandler, isActive }: Props) => {
  return (
    <Styles.Text $isActive={isActive}>
      <Button text={text} onClick={clickHandler} />
    </Styles.Text>
  );
};

export default Checkbox;
