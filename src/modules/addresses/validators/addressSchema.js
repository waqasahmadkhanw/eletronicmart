import * as Yup from "yup";

export const addressSchema = Yup.object({
  fullName: Yup.string()
    .trim()
    .required("Full name is required")
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters"),

  phone: Yup.string()
    .trim()
    .required("Phone number is required")
    .matches(
      /^[0-9+\-\s()]+$/,
      "Enter a valid phone number"
    ),

  addressLine1: Yup.string()
    .trim()
    .required("Address Line 1 is required")
    .max(255, "Address Line 1 cannot exceed 255 characters"),

  addressLine2: Yup.string()
    .trim()
    .nullable(),

  city: Yup.string()
    .trim()
    .required("City is required"),

  state: Yup.string()
    .trim()
    .required("State/Province is required"),

  country: Yup.string()
    .trim()
    .required("Country is required"),

  postalCode: Yup.string()
    .trim()
    .required("Postal code is required"),

  addressType: Yup.string()
    .oneOf(["Home", "Office", "Other"])
    .required("Address type is required"),

  isDefault: Yup.boolean(),
});