import { useRouter } from "next/router";
import Button from "../../FormElements/Button";
import SvgIcon from "../SvgIcon";
import * as Styles from "./ContactBox.styled";

const ContactBox = () => {
  const router = useRouter();

  const contactClickHandler = () => {
    router.push("#contact");
  };

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
