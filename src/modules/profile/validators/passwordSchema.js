import * as Yup from "yup";

const passwordSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .required("Current password is required"),

  newPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password cannot exceed 50 characters")
    .required("New password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export default passwordSchema;