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

  const [isEmailWrong, setIsEmailWrong] = useState(false);
  const [isTitleWrong, setIsTitleWrong] = useState(false);
  const [isMessageWrong, setIsMessageWrong] = useState(false);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    setIsEmailWrong(false);
    setIsTitleWrong(false);
    setIsMessageWrong(false);

    try {
      await sendMessage(email, title, message);
    } catch (error: any) {
      if (error.response.data.field === "email") {
        setIsEmailWrong(true);
      }

      if (error.response.data.field === "title") {
        setIsTitleWrong(true);
      }

      if (error.response.data.field === "message") {
        setIsMessageWrong(true);
      }
    }
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
          isInputWrong={isEmailWrong}
        />
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          isInputWrong={isTitleWrong}
        />
        <TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          isInputWrong={isMessageWrong}
        />
        <Button type="submit" text="send" inverted />
      </Styles.Form>
    </Styles.Container>
  );
};

export default FooterForm;
