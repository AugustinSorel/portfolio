import { FormEvent } from "react";
import Button from "../../FormElements/Button";
import Input from "../../FormElements/Input";
import TextArea from "../TextArea";
import * as Styles from "./FooterForm.styled";

const FooterForm = () => {
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Styles.Container>
      <Styles.Text>contact me</Styles.Text>
      <Styles.Form onSubmit={submitHandler}>
        <Input type="email" placeholder="Your email" />
        <Input type="text" placeholder="Title" />
        <TextArea placeholder="Message" />
        <Button type="submit" text="send" inverted />
      </Styles.Form>
    </Styles.Container>
  );
};

export default FooterForm;
