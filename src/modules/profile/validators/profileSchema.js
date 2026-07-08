import * as Yup from "yup";

const profileSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("Full name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Phone number must be 10-15 digits")
    .nullable(),

  bio: Yup.string()
    .max(250, "Bio cannot exceed 250 characters")
    .nullable(),

  address: Yup.string().max(200, "Address is too long").nullable(),
});

export default profileSchema;