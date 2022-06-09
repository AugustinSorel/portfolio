import { scaleDown, scaleUp } from "../../../framerMotion/whileVariants";
import * as Styles from "./Button.styled";

type Props = {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
  inverted?: boolean;
};

const Button = ({
  children,
  type = "button",
  text,
  inverted,
  ...rest
}: Props) => {
  if (children) {
    return (
      <Styles.Button
        whileHover={{ ...scaleUp }}
        whileFocus={{ ...scaleUp }}
        whileTap={{ ...scaleDown }}
        type={type}
        aria-label={text}
        $inverted={inverted}
        {...rest}
      >
        {children}
      </Styles.Button>
    );
  }

  return (
    <Styles.Button aria-label={text} $inverted={inverted} type={type} {...rest}>
      {text}
    </Styles.Button>
  );
};

export default Button;
