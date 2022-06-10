import { FormEvent, useState } from "react";
import sendMessage from "../../../api/contact";
import Button from "../../FormElements/Button";
import Input from "../../FormElements/Input";
import TextArea from "../TextArea";
import * as Styles from "./FooterForm.styled";

const FooterForm = () => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    sendMessage();
  };

  return (
    <Styles.Container>
      <Styles.Text>contact me</Styles.Text>
      <Styles.Form onSubmit={submitHandler}>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Your email"
        />
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
        <TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
        />
        <Button type="submit" text="send" inverted />
      </Styles.Form>
    </Styles.Container>
  );
};

export default FooterForm;
