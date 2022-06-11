export enum FooterFormActionType {
  CHANGE_EMAIL,
  CHANGE_TITLE,
  CHANGE_MESSAGE,
  RESET,
}

export type FooterFormAction = {
  type: FooterFormActionType;
  payload: string;
};
