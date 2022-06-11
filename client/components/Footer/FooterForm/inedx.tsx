import { FormEvent, useReducer, useRef, useState } from "react";
import sendMessage from "../../../api/contact";
import { FooterFormActionType } from "../../../types/footerForm";
import defaultEmailMessage from "../../../utils/defaultEmailMessage";
import Button from "../../FormElements/Button";
import Input from "../../FormElements/Input";
import TextArea from "../../FormElements/TextArea";
import footerFormReducer from "./footerFormReducer";
import * as Styles from "./FooterForm.styled";
import Loader from "../../UIElements/Loader";

const FooterForm = () => {
  const [footerFormState, dispatch] = useReducer(
    footerFormReducer,
    defaultEmailMessage
  );

  type InputHandler = React.ElementRef<typeof Input>;
  type TextAreaHandler = React.ElementRef<typeof TextArea>;
  const emailInputRef = useRef<InputHandler>(null);
  const titleInputRef = useRef<InputHandler>(null);
  const messageInputRef = useRef<TextAreaHandler>(null);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await sendMessage(footerFormState);
      dispatch({ type: FooterFormActionType.RESET, payload: "" });
    } catch (error: any) {
      if (error.response.data.field === "email") {
        emailInputRef.current?.startErrorAnimation();
      }

      if (error.response.data.field === "title") {
        titleInputRef.current?.startErrorAnimation();
      }

      if (error.response.data.field === "message") {
        messageInputRef.current?.startErrorAnimation();
      }
    }

    setIsLoading(false);
  };

  const ChangeInputHandler = (type: FooterFormActionType, payload: string) => {
    dispatch({ type, payload });
  };

  return (
    <Styles.Container>
      <Styles.Text>contact me</Styles.Text>
      <Styles.Form onSubmit={submitHandler}>
        <Input
          value={footerFormState.email}
          onChange={(e) =>
            ChangeInputHandler(
              FooterFormActionType.CHANGE_EMAIL,
              e.target.value
            )
          }
          type="text"
          placeholder="Your email"
          ref={emailInputRef}
        />
        <Input
          value={footerFormState.title}
          ref={titleInputRef}
          onChange={(e) =>
            ChangeInputHandler(
              FooterFormActionType.CHANGE_TITLE,
              e.target.value
            )
          }
          type="text"
          placeholder="Title"
        />
        <TextArea
          value={footerFormState.message}
          ref={messageInputRef}
          onChange={(e) =>
            ChangeInputHandler(
              FooterFormActionType.CHANGE_MESSAGE,
              e.target.value
            )
          }
          placeholder="Message"
        />
        <Button type="submit" text="send" inverted>
          send {isLoading && <Loader />}
        </Button>
      </Styles.Form>
    </Styles.Container>
  );
};

export default FooterForm;
