// modules/payments/components/PaymentSummary.jsx

import PropTypes from "prop-types";

const PaymentSummary = ({
  totalPayments = 0,
  totalRevenue = 0,
  successfulPayments = 0,
  pendingPayments = 0,
  refundedPayments = 0,
  failedPayments = 0,
  currency = "USD",
}) => {
  const summaryItems = [
    {
      title: "Total Payments",
      value: totalPayments,
    },
    {
      title: "Total Revenue",
      value: `${currency} ${Number(totalRevenue).toLocaleString()}`,
    },
    {
      title: "Successful",
      value: successfulPayments,
      valueClass: "text-green-600",
    },
    {
      title: "Pending",
      value: pendingPayments,
      valueClass: "text-yellow-600",
    },
    {
      title: "Refunded",
      value: refundedPayments,
      valueClass: "text-purple-600",
    },
    {
      title: "Failed",
      value: failedPayments,
      valueClass: "text-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {summaryItems.map((item) => (
        <div
          key={item.title}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <p className="text-sm font-medium text-gray-500">
            {item.title}
          </p>

          <h3
            className={`mt-2 text-3xl font-bold ${
              item.valueClass || "text-gray-900"
            }`}
          >
            {item.value}
          </h3>
        </div>
      ))}
    </div>
  );
};

PaymentSummary.propTypes = {
  totalPayments: PropTypes.number,
  totalRevenue: PropTypes.number,
  successfulPayments: PropTypes.number,
  pendingPayments: PropTypes.number,
  refundedPayments: PropTypes.number,
  failedPayments: PropTypes.number,
  currency: PropTypes.string,
};

export default PaymentSummary;