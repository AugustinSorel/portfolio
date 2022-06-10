import { HTMLInputTypeAttribute } from "react";
import * as Styles from "./Input.styled";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: HTMLInputTypeAttribute;
  placeholder: string;
};

const Input = ({ ...rest }: Props) => {
  return <Styles.Input autoComplete="no" {...rest} />;
};

export default Input;
