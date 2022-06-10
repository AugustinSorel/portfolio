import { EmailSchema } from "../schemas/email.schema";

class EmailError {
  public code: number;
  public message: string;
  public field: EmailSchema;

  constructor(code: number, message: string, field: EmailSchema) {
    this.code = code;
    this.message = message;
    this.field = field;
  }
}

export default EmailError;
