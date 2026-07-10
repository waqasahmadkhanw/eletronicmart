// modules/payments/pages/PaymentsList.jsx

import { useNavigate } from "react-router-dom";

import {
  PaymentTable,
  PaymentSummary,
} from "../components";

import {
  usePayments,
  usePaymentActions,
} from "../hooks";

const PaymentsList = () => {
  const navigate = useNavigate();

  const {
    payments,
    loading,
    refreshPayments,
  } = usePayments();

  const {
    deletePayment,
  } = usePaymentActions();

  const handleView = (payment) => {
    navigate(`/payments/${payment._id}`);
  };

  const handleEdit = (payment) => {
    navigate(`/payments/${payment._id}/edit`);
  };

  const handleRefund = (payment) => {
    navigate(`/payments/${payment._id}/refund`);
  };

  const handleDelete = async (payment) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this payment?"
    );

    if (!confirmed) return;

    await deletePayment(payment._id);

    refreshPayments();
  };

  const totalPayments = payments.length;

  const totalRevenue = payments.reduce(
    (total, payment) => total + Number(payment.amount || 0),
    0
  );

  const successfulPayments = payments.filter(
    (payment) => payment.paymentStatus === "paid"
  ).length;

  const pendingPayments = payments.filter(
    (payment) =>
      payment.paymentStatus === "pending" ||
      payment.paymentStatus === "processing"
  ).length;

  const refundedPayments = payments.filter(
    (payment) => payment.paymentStatus === "refunded"
  ).length;

  const failedPayments = payments.filter(
    (payment) => payment.paymentStatus === "failed"
  ).length;

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Payments
          </h1>

          <p className="mt-1 text-gray-500">
            Manage and monitor all customer payments.
          </p>
        </div>

        <button
          onClick={() => navigate("/payments/create")}
          className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Create Payment
        </button>
      </div>

      {/* Summary */}
      <PaymentSummary
        totalPayments={totalPayments}
        totalRevenue={totalRevenue}
        successfulPayments={successfulPayments}
        pendingPayments={pendingPayments}
        refundedPayments={refundedPayments}
        failedPayments={failedPayments}
        currency="USD"
      />

      {/* Payments Table */}
      <PaymentTable
        payments={payments}
        loading={loading}
        onView={handleView}
        onEdit={handleEdit}
        onRefund={handleRefund}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default PaymentsList;