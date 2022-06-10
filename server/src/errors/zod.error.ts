import { ContactSchema } from "../schemas/contact.schema";

class ZodError {
  public code: number;
  public message: string;
  public field: ContactSchema;

  constructor(code: number, message: string, field: ContactSchema) {
    this.code = code;
    this.message = message;
    this.field = field;
  }

  public static invalidInputError(
    message: string,
    field: ContactSchema
  ): ZodError {
    return new ZodError(400, message, field);
  }
}

export default ZodError;
