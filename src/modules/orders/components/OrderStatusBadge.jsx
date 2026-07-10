import React from "react";

const statusStyles = {
  Pending:
    "bg-yellow-100 text-yellow-800 border border-yellow-200",

  Processing:
    "bg-blue-100 text-blue-800 border border-blue-200",

  Shipped:
    "bg-purple-100 text-purple-800 border border-purple-200",

  Delivered:
    "bg-green-100 text-green-800 border border-green-200",

  Cancelled:
    "bg-red-100 text-red-800 border border-red-200",

  Paid:
    "bg-green-100 text-green-800 border border-green-200",

  Failed:
    "bg-red-100 text-red-800 border border-red-200",

  Refunded:
    "bg-gray-100 text-gray-800 border border-gray-200",
};

const OrderStatusBadge = ({
  status = "Pending",
  className = "",
}) => {
  const badgeClass =
    statusStyles[status] ||
    "bg-gray-100 text-gray-700 border border-gray-200";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${badgeClass} ${className}`}
    >
      {status}
    </span>
  );
};

export default OrderStatusBadge;