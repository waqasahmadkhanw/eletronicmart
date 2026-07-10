// modules/payments/validators/paymentSchema.js

import * as Yup from "yup";

export const paymentSchema = Yup.object({
  orderId: Yup.string()
    .trim()
    .required("Order ID is required."),

  customerId: Yup.string()
    .trim()
    .required("Customer ID is required."),

  amount: Yup.number()
    .typeError("Amount must be a number.")
    .positive("Amount must be greater than 0.")
    .required("Amount is required."),

  currency: Yup.string()
    .trim()
    .required("Currency is required."),

  paymentMethod: Yup.string()
    .oneOf(
      [
        "card",
        "paypal",
        "stripe",
        "bank_transfer",
        "cash_on_delivery",
      ],
      "Invalid payment method."
    )
    .required("Payment method is required."),

  paymentStatus: Yup.string()
    .oneOf(
      [
        "pending",
        "processing",
        "authorized",
        "paid",
        "failed",
        "cancelled",
        "refunded",
      ],
      "Invalid payment status."
    )
    .required("Payment status is required."),

  transactionId: Yup.string()
    .trim()
    .nullable(),

  description: Yup.string()
    .trim()
    .max(500, "Description cannot exceed 500 characters.")
    .nullable(),

  billingName: Yup.string()
    .trim()
    .required("Billing name is required."),

  billingEmail: Yup.string()
    .trim()
    .email("Enter a valid email address.")
    .required("Billing email is required."),

  billingPhone: Yup.string()
    .trim()
    .nullable(),

  billingAddress: Yup.string()
    .trim()
    .required("Billing address is required."),
});