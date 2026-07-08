import * as yup from "yup";

export const userSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot exceed 50 characters"),

  lastName: yup
    .string()
    .trim()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name cannot exceed 50 characters"),

  email: yup
    .string()
    .trim()
    .email("Enter a valid email")
    .required("Email is required"),

  phone: yup
    .string()
    .trim()
    .matches(/^[0-9]{10,15}$/, "Enter a valid phone number")
    .required("Phone number is required"),

  role: yup
    .string()
    .required("Role is required"),

  status: yup
    .string()
    .oneOf(["active", "inactive"], "Invalid status")
    .required("Status is required"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
