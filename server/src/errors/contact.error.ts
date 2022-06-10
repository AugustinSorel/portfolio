import { ContactSchema } from "../schemas/contact.schema";

class ContactError {
  public code: number;
  public message: string;
  public field: ContactSchema;

  constructor(code: number, message: string, field: ContactSchema) {
    this.code = code;
    this.message = message;
    this.field = field;
  }
}

export default ContactError;
