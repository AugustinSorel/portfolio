import EmailMessage from "../../../types/EmailMessage";
import {
  FooterFormAction,
  FooterFormActionType,
} from "../../../types/footerForm";
import defaultEmailMessage from "../../../utils/defaultEmailMessage";

const footerFormReducer = (
  state: EmailMessage,
  action: FooterFormAction
): EmailMessage => {
  const { payload, type } = action;

  switch (type) {
    case FooterFormActionType.RESET:
      return defaultEmailMessage;

    case FooterFormActionType.CHANGE_EMAIL:
      return { ...state, email: payload };

    case FooterFormActionType.CHANGE_TITLE:
      return { ...state, title: payload };

    case FooterFormActionType.CHANGE_MESSAGE:
      return { ...state, message: payload };

    default:
      return state;
  }
};

export default footerFormReducer;
