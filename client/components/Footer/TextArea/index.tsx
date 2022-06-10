import * as Styles from "./TextArea.styled";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
};

const TextArea = ({ ...rest }: Props) => {
  return <Styles.TextArea rows={4} {...rest} />;
};

export default TextArea;
