import * as Styles from "./Backdrop.styled";

type Props = {
  children: React.ReactNode;
  closeHandler: () => void;
};

const Backdrop = ({ children, closeHandler }: Props) => {
  return (
    <Styles.Container
      onClick={closeHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </Styles.Container>
  );
};

export default Backdrop;
