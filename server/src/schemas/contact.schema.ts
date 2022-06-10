import { object, string, TypeOf } from "zod";

export const contactSchema = object({
  body: object({
    email: string({
      required_error: "Email is required",
    })
      .min(3, "Email must be at least 3 characters")
      .max(100, "Email must be at most 100 characters")
      .email("Email is not valid"),

    title: string({
      required_error: "Title is required",
    })
      .min(3, "Title must be at least 3 characters")
      .max(100, "Title must be at most 100 characters"),

    message: string({
      required_error: "Message is required",
    })
      .min(3, "Message must be at least 3 characters")
      .max(500, "Message must be at most 100 characters"),
  }),
});

export type ContactSchema = TypeOf<typeof contactSchema>["body"];
