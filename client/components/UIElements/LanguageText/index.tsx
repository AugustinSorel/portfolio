import { scaleDown, scaleUp } from "../../../framerMotion/whileVariants";
import * as Styles from "./LanguageText.styled";

type Props = {
  text: string;
  isActive: boolean;
  clickHandler: () => void;
};

const LanguageText = ({ clickHandler, isActive, text }: Props) => {
  return (
    <Styles.Text
      $isActive={isActive}
      onClick={clickHandler}
      whileFocus={{ ...scaleUp }}
      whileHover={{ ...scaleUp }}
      whileTap={{ ...scaleDown }}
    >
      {text}
    </Styles.Text>
  );
};

export default LanguageText;
