import * as Styles from "./TextArea.styled";

type Props = {
  placeholder: string;
};

const TextArea = ({ ...rest }: Props) => {
  return <Styles.TextArea {...rest} />;
};

export default TextArea;
