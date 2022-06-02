import React, { useState } from "react";
import Underline from "../../UIElements/Underline";
import Button from "../Button";
import * as Styles from "./Checkbox.styled";

type Props = {
  text: string;
  isActive: boolean;
  clickHandler: () => void;
};

const Checkbox = ({ text, clickHandler, isActive }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Styles.Text
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button text={text} onClick={clickHandler} />
      <Underline isActive={isHovered} />
      <Underline isActive={isActive} />
    </Styles.Text>
  );
};

export default Checkbox;
