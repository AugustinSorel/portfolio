import Button from "../../FormElements/Button";
import * as Styles from "./LanguageText.styled";

type Props = {
  text: string;
  isActive: boolean;
  clickHandler: () => void;
};

const LanguageText = ({ clickHandler, isActive, text }: Props) => {
  return (
    <Styles.Text $isActive={isActive}>
      <Button text={text} onClick={clickHandler} />
    </Styles.Text>
  );
};

export default LanguageText;
