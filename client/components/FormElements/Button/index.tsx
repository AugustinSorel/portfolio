import * as Styles from "./Button.styled";

type Props = {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  text?: string;
  onClick?: () => void;
};

const Button = ({ children, type = "button", text, ...rest }: Props) => {
  if (children) {
    return (
      <Styles.Button type={type} {...rest}>
        {children}
      </Styles.Button>
    );
  }

  return (
    <Styles.Button type={type} {...rest}>
      {text}
    </Styles.Button>
  );
};

export default Button;
