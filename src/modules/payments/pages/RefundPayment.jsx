// modules/payments/pages/RefundPayment.jsx

import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";

import {
  usePaymentDetails,
  usePaymentActions,
} from "../hooks";

const refundSchema = Yup.object({
  amount: Yup.number()
    .typeError("Amount must be a number.")
    .positive("Amount must be greater than zero.")
    .required("Refund amount is required."),

  reason: Yup.string()
    .trim()
    .required("Refund reason is required.")
    .max(500, "Reason cannot exceed 500 characters."),
});

const RefundPayment = () => {
  const { paymentId } = useParams();
  const navigate = useNavigate();

  const { payment, loading } = usePaymentDetails(paymentId);

  const {
    refundPayment,
    loading: refundLoading,
  } = usePaymentActions();

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        Loading payment...
      </div>
    );
  }

  if (!payment) {
    return (
      <div className="rounded-lg bg-white p-8 text-center shadow">
        Payment not found.
      </div>
    );
  }

  const initialValues = {
    amount: payment.amount,
    reason: "",
  };

  const handleSubmit = async (values) => {
    try {
      await refundPayment(payment._id, values).unwrap();

      toast.success("Payment refunded successfully.");

      navigate(`/payments/${payment._id}`);
    } catch (error) {
      toast.error(
        error?.message ||
          error ||
          "Failed to refund payment."
      );
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-xl bg-white p-6 shadow">
        <h1 className="mb-2 text-3xl font-bold">
          Refund Payment
        </h1>

        <p className="mb-6 text-gray-500">
          Transaction ID: {payment.transactionId}
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={refundSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          <Form className="space-y-5">
            <div>
              <label className="mb-2 block font-medium">
                Refund Amount
              </label>

              <Field
                name="amount"
                type="number"
                className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
              />

              <ErrorMessage
                name="amount"
                component="p"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Refund Reason
              </label>

              <Field
                as="textarea"
                name="reason"
                rows={4}
                className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="Enter refund reason..."
              />

              <ErrorMessage
                name="reason"
                component="p"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={refundLoading}
                className="rounded-lg bg-purple-600 px-6 py-3 font-medium text-white hover:bg-purple-700 disabled:opacity-60"
              >
                {refundLoading
                  ? "Processing..."
                  : "Refund Payment"}
              </button>

              <button
                type="button"
                onClick={() => navigate(-1)}
                className="rounded-lg border px-6 py-3 hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default RefundPayment;