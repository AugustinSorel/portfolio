import Button from "../../FormElements/Button";
import SvgIcon from "../SvgIcon";
import * as Styles from "./ContactBox.styled";

const ContactBox = () => {
  const contactClickHandler = () => {};
  return (
    <Styles.Container>
      <Styles.ContactText>contact</Styles.ContactText>
      <Button onClick={contactClickHandler} text="contactButton">
        <SvgIcon path="arrowDown" />
      </Button>
    </Styles.Container>
  );
};

export default ContactBox;
