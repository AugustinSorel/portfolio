class EmailError {
  public code: number;
  public message: string;

  constructor(code: number, message: string) {
    this.code = code;
    this.message = message;
  }

  public static unableToSendEmail(): EmailError {
    return new EmailError(500, "Unable to send email");
  }
}

export default EmailError;
