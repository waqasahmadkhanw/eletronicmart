import * as Yup from "yup";

const paymentSchema = Yup.object({
  paymentMethod: Yup.string()
    .required("Payment method is required"),

  cardNumber: Yup.string()
    .when("paymentMethod", {
      is: "card",
      then: (schema) =>
        schema
          .required("Card number is required")
          .matches(
            /^[0-9]{16}$/,
            "Card number must be 16 digits"
          ),
      otherwise: (schema) => schema.notRequired(),
    }),

  cardHolderName: Yup.string()
    .when("paymentMethod", {
      is: "card",
      then: (schema) =>
        schema
          .required("Card holder name is required")
          .min(3, "Card holder name must be at least 3 characters"),
      otherwise: (schema) => schema.notRequired(),
    }),

  expiryDate: Yup.string()
    .when("paymentMethod", {
      is: "card",
      then: (schema) =>
        schema.required("Expiry date is required"),
      otherwise: (schema) => schema.notRequired(),
    }),

  cvv: Yup.string()
    .when("paymentMethod", {
      is: "card",
      then: (schema) =>
        schema
          .required("CVV is required")
          .matches(
            /^[0-9]{3,4}$/,
            "CVV must be 3 or 4 digits"
          ),
      otherwise: (schema) => schema.notRequired(),
    }),
});

export default paymentSchema;