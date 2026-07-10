import * as Yup from "yup";

const orderSchema = Yup.object({
  customerName: Yup.string()
    .trim()
    .required("Customer name is required")
    .min(3, "Customer name must be at least 3 characters")
    .max(100, "Customer name cannot exceed 100 characters"),

  email: Yup.string()
    .trim()
    .email("Enter a valid email")
    .required("Email is required"),

  phone: Yup.string()
    .trim()
    .required("Phone number is required")
    .matches(/^[0-9+\-\s()]+$/, "Enter a valid phone number"),

  shippingAddress: Yup.string()
    .trim()
    .required("Shipping address is required")
    .min(10, "Shipping address is too short"),

  paymentMethod: Yup.string()
    .required("Payment method is required"),

  paymentStatus: Yup.string()
    .oneOf([
      "Pending",
      "Paid",
      "Failed",
      "Refunded",
    ])
    .required("Payment status is required"),

  orderStatus: Yup.string()
    .oneOf([
      "Pending",
      "Processing",
      "Shipped",
      "Delivered",
      "Cancelled",
    ])
    .required("Order status is required"),

  notes: Yup.string()
    .trim()
    .max(500, "Notes cannot exceed 500 characters"),
});

export default orderSchema;