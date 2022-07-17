import { FormEvent, useReducer, useRef, useState } from "react";
import sendMessage from "../../../api/contact";
import useLanguageStore from "../../../store/useLanguageStore";
import { FooterFormActionType } from "../../../types/footerForm";
import defaultEmailMessage from "../../../utils/defaultEmailMessage";
import Button from "../../FormElements/Button";
import Input from "../../FormElements/Input";
import TextArea from "../../FormElements/TextArea";
import Loader from "../../UIElements/Loader";
import * as Styles from "./FooterForm.styled";
import footerFormReducer from "./footerFormReducer";

const FooterForm = () => {
  const [errorText, setErrorText] = useState("");
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
  const { isEnglishSelected } = useLanguageStore();

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorText("");

    try {
      await sendMessage(footerFormState);
      dispatch({ type: FooterFormActionType.RESET, payload: "" });
    } catch (error: any) {
      if (!error.response) {
        return setErrorText("Something went wrong. Please try again later.");
      }

      setErrorText(error.response.data.message);
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
      <Styles.Text>
        {isEnglishSelected ? "contact me" : "contactez moi"}
      </Styles.Text>
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
          placeholder={isEnglishSelected ? "Your email" : "Votre mail"}
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
          placeholder={isEnglishSelected ? "Title" : "Titre"}
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

        <Styles.BottomContainer>
          <Styles.ErrorText>{errorText}</Styles.ErrorText>
          <Button type="submit" text="send" inverted>
            send {isLoading && <Loader />}
          </Button>
        </Styles.BottomContainer>
      </Styles.Form>
    </Styles.Container>
  );
};

export default FooterForm;
