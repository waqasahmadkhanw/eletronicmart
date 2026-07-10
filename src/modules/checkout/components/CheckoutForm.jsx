// modules/checkout/components/CheckoutForm.jsx

import { Formik, Form } from "formik";
import { shippingSchema } from "../validators";
import ShippingAddress from "./ShippingAddress";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";
import PlaceOrderButton from "./PlaceOrderButton";
import { useCheckout } from "../hooks";

const CheckoutForm = () => {
  const { submitOrder, loading } = useCheckout();

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",

    paymentMethod: "card",
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await submitOrder(values);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={shippingSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-8">
          <ShippingAddress />

          <PaymentMethod />

          <OrderSummary />

          <PlaceOrderButton
            loading={loading || isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;