// modules/payments/components/PaymentStatusBadge.jsx

import PropTypes from "prop-types";

const STATUS_STYLES = {
  pending:
    "bg-yellow-100 text-yellow-800 border border-yellow-200",

  processing:
    "bg-blue-100 text-blue-800 border border-blue-200",

  authorized:
    "bg-indigo-100 text-indigo-800 border border-indigo-200",

  paid:
    "bg-green-100 text-green-800 border border-green-200",

  failed:
    "bg-red-100 text-red-800 border border-red-200",

  cancelled:
    "bg-gray-100 text-gray-700 border border-gray-200",

  refunded:
    "bg-purple-100 text-purple-800 border border-purple-200",
};

const PaymentStatusBadge = ({ status }) => {
  const badgeClass =
    STATUS_STYLES[status] ||
    "bg-gray-100 text-gray-700 border border-gray-200";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold capitalize ${badgeClass}`}
    >
      {status || "Unknown"}
    </span>
  );
};

PaymentStatusBadge.propTypes = {
  status: PropTypes.string,
};

PaymentStatusBadge.defaultProps = {
  status: "pending",
};

export default PaymentStatusBadge;