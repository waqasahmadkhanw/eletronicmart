// modules/payments/components/PaymentCard.jsx

import PropTypes from "prop-types";

import PaymentStatusBadge from "./PaymentStatusBadge";

const PaymentCard = ({
  payment,
  onView,
  onEdit,
  onRefund,
  onDelete,
}) => {
  if (!payment) return null;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {payment.transactionId || "N/A"}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {payment.createdAt
              ? new Date(payment.createdAt).toLocaleString()
              : "-"}
          </p>
        </div>

        <PaymentStatusBadge status={payment.paymentStatus} />
      </div>

      {/* Body */}
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-500">Customer</span>
          <span className="font-medium">
            {payment.customer?.name || "-"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Order</span>
          <span className="font-medium">
            {payment.orderId || "-"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Method</span>
          <span className="font-medium capitalize">
            {payment.paymentMethod || "-"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Amount</span>
          <span className="font-semibold text-green-600">
            {payment.currency} {payment.amount}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onView?.(payment)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          View
        </button>

        <button
          type="button"
          onClick={() => onEdit?.(payment)}
          className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-600"
        >
          Edit
        </button>

        <button
          type="button"
          onClick={() => onRefund?.(payment)}
          className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-700"
        >
          Refund
        </button>

        <button
          type="button"
          onClick={() => onDelete?.(payment)}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

PaymentCard.propTypes = {
  payment: PropTypes.object.isRequired,
  onView: PropTypes.func,
  onEdit: PropTypes.func,
  onRefund: PropTypes.func,
  onDelete: PropTypes.func,
};

export default PaymentCard;