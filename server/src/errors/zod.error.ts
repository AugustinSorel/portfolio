import { EmailSchema } from "../schemas/email.schema";

class ZodError {
  public code: number;
  public message: string;
  public field: EmailSchema;

  constructor(code: number, message: string, field: EmailSchema) {
    this.code = code;
    this.message = message;
    this.field = field;
  }

  public static invalidInputError(
    message: string,
    field: EmailSchema
  ): ZodError {
    return new ZodError(400, message, field);
  }
}

export default ZodError;
