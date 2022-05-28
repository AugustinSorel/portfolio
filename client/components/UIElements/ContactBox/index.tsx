import Button from "../../FormElements/Button";
import SvgIcon from "../SvgIcon";
import * as Styles from "./ContactBox.styled";

const ContactBox = () => {
  const contactClickHandler = () => {};
  return (
    <Styles.Container>
      <Styles.Text>contact</Styles.Text>
      <Button onClick={contactClickHandler} text="contact">
        <SvgIcon path="arrowDown" />
      </Button>
    </Styles.Container>
  );
};

export default ContactBox;
