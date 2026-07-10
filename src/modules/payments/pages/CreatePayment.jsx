// modules/payments/pages/CreatePayment.jsx

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { PaymentForm } from "../components";
import { usePaymentActions } from "../hooks";

const initialValues = {
  orderId: "",
  customerId: "",
  amount: "",
  currency: "USD",
  paymentMethod: "",
  paymentStatus: "pending",
  transactionId: "",
  description: "",
  billingName: "",
  billingEmail: "",
  billingPhone: "",
  billingAddress: "",
};

const paymentMethods = [
  { value: "card", label: "Credit / Debit Card" },
  { value: "stripe", label: "Stripe" },
  { value: "paypal", label: "PayPal" },
  { value: "bank_transfer", label: "Bank Transfer" },
  { value: "cash_on_delivery", label: "Cash on Delivery" },
];

const CreatePayment = () => {
  const navigate = useNavigate();

  const {
    createPayment,
    loading,
  } = usePaymentActions();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await createPayment(values).unwrap();

      toast.success("Payment created successfully.");

      resetForm();

      navigate("/payments");
    } catch (error) {
      toast.error(
        error?.message ||
          error ||
          "Failed to create payment."
      );
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Create Payment
        </h1>

        <p className="mt-2 text-gray-500">
          Create a new customer payment.
        </p>
      </div>

      {/* Form */}
      <PaymentForm
        initialValues={initialValues}
        paymentMethods={paymentMethods}
        loading={loading}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default CreatePayment;