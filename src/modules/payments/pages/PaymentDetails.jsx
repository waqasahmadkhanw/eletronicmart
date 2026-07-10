// modules/payments/pages/PaymentDetails.jsx

import { useNavigate, useParams } from "react-router-dom";

import {
  PaymentCard,
  PaymentStatusBadge,
} from "../components";

import {
  usePaymentDetails,
  usePaymentActions,
} from "../hooks";

const PaymentDetails = () => {
  const { paymentId } = useParams();
  const navigate = useNavigate();

  const {
    payment,
    loading,
    error,
  } = usePaymentDetails(paymentId);

  const {
    refundPayment,
    capturePayment,
    cancelPayment,
    verifyPayment,
    downloadInvoice,
  } = usePaymentActions();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-gray-500">Loading payment...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-600">
        {typeof error === "string"
          ? error
          : "Failed to load payment."}
      </div>
    );
  }

  if (!payment) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
        <p className="text-gray-500">Payment not found.</p>
      </div>
    );
  }

  const handleRefund = () => {
    refundPayment(payment._id, {});
  };

  const handleCapture = () => {
    capturePayment(payment._id);
  };

  const handleCancel = () => {
    cancelPayment(payment._id);
  };

  const handleVerify = () => {
    verifyPayment(payment._id);
  };

  const handleInvoice = () => {
    downloadInvoice(payment._id);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Payment Details
          </h1>

          <p className="mt-2 text-gray-500">
            Transaction ID: {payment.transactionId}
          </p>
        </div>

        <button
          onClick={() => navigate("/payments")}
          className="rounded-lg border px-4 py-2 hover:bg-gray-100"
        >
          Back
        </button>
      </div>

      {/* Card */}
      <PaymentCard payment={payment} />

      {/* Details */}
      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="mb-6 text-xl font-semibold">
          Payment Information
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">Customer</p>
            <p className="font-medium">
              {payment.customer?.name || "-"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Order ID</p>
            <p className="font-medium">{payment.orderId}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Method</p>
            <p className="font-medium capitalize">
              {payment.paymentMethod}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Amount</p>
            <p className="font-semibold">
              {payment.currency} {payment.amount}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Status</p>
            <PaymentStatusBadge
              status={payment.paymentStatus}
            />
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Created At
            </p>
            <p>
              {new Date(payment.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleVerify}
          className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          Verify
        </button>

        <button
          onClick={handleCapture}
          className="rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700"
        >
          Capture
        </button>

        <button
          onClick={handleRefund}
          className="rounded-lg bg-purple-600 px-5 py-2 text-white hover:bg-purple-700"
        >
          Refund
        </button>

        <button
          onClick={handleCancel}
          className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
        >
          Cancel
        </button>

        <button
          onClick={handleInvoice}
          className="rounded-lg border px-5 py-2 hover:bg-gray-100"
        >
          Download Invoice
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;