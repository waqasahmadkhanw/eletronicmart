import * as Yup from "yup";

const shippingSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phone: Yup.string()
    .required("Phone number is required")
    .matches(
      /^[0-9]{10,15}$/,
      "Phone number must be between 10 and 15 digits"
    ),

  address: Yup.string()
    .required("Address is required")
    .min(5, "Address must be at least 5 characters"),

  city: Yup.string()
    .required("City is required"),

  state: Yup.string()
    .required("State is required"),

  postalCode: Yup.string()
    .required("Postal code is required"),

  country: Yup.string()
    .required("Country is required"),
});

export default shippingSchema;