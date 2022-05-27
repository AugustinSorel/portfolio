import * as Styles from "./Button.styled";

type Props = {
  children?: React.ReactNode;
};

const Button = ({ children }: Props) => {
  if (children) {
    return <Styles.Button>{children}</Styles.Button>;
  }

  return <Styles.Button>Button</Styles.Button>;
};

export default Button;
