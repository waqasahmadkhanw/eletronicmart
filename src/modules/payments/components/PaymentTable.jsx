// modules/payments/components/PaymentTable.jsx

import PropTypes from "prop-types";

import PaymentStatusBadge from "./PaymentStatusBadge";

const PaymentTable = ({
  payments = [],
  loading = false,
  onView,
  onEdit,
  onRefund,
  onDelete,
}) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-10">
        <p className="text-gray-500">Loading payments...</p>
      </div>
    );
  }

  if (!payments.length) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center">
        <p className="text-gray-500">No payments found.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Transaction ID
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold">
              Customer
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold">
              Method
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold">
              Amount
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold">
              Status
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold">
              Date
            </th>

            <th className="px-4 py-3 text-center text-sm font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <tr
              key={payment._id}
              className="border-t hover:bg-gray-50"
            >
              <td className="px-4 py-3">
                {payment.transactionId || "-"}
              </td>

              <td className="px-4 py-3">
                {payment.customer?.name || "-"}
              </td>

              <td className="px-4 py-3 capitalize">
                {payment.paymentMethod}
              </td>

              <td className="px-4 py-3 font-medium">
                {payment.currency} {payment.amount}
              </td>

              <td className="px-4 py-3">
                <PaymentStatusBadge
                  status={payment.paymentStatus}
                />
              </td>

              <td className="px-4 py-3">
                {payment.createdAt
                  ? new Date(payment.createdAt).toLocaleDateString()
                  : "-"}
              </td>

              <td className="px-4 py-3">
                <div className="flex flex-wrap justify-center gap-2">
                  <button
                    onClick={() => onView?.(payment)}
                    className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
                  >
                    View
                  </button>

                  <button
                    onClick={() => onEdit?.(payment)}
                    className="rounded bg-amber-500 px-3 py-1 text-sm text-white hover:bg-amber-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onRefund?.(payment)}
                    className="rounded bg-purple-600 px-3 py-1 text-sm text-white hover:bg-purple-700"
                  >
                    Refund
                  </button>

                  <button
                    onClick={() => onDelete?.(payment)}
                    className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

PaymentTable.propTypes = {
  payments: PropTypes.array,
  loading: PropTypes.bool,
  onView: PropTypes.func,
  onEdit: PropTypes.func,
  onRefund: PropTypes.func,
  onDelete: PropTypes.func,
};

export default PaymentTable;