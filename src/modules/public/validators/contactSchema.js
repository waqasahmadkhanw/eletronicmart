import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters")
    .required("Name is required"),

  email: Yup.string()
    .trim()
    .email("Invalid email address")
    .required("Email is required"),

  subject: Yup.string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(150, "Subject cannot exceed 150 characters")
    .required("Subject is required"),

  message: Yup.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message cannot exceed 1000 characters")
    .required("Message is required"),
});