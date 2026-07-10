import * as Yup from "yup";

const couponSchema = Yup.object({
  code: Yup.string()
    .trim()
    .required("Coupon code is required")
    .min(3, "Coupon code must be at least 3 characters")
    .max(30, "Coupon code cannot exceed 30 characters"),
});

export default couponSchema;