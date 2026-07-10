import React from "react";

const OrderFilter = ({
  filters,
  onChange,
  onReset,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;

    onChange?.({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Order Status */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Order Status
          </label>

          <select
            name="orderStatus"
            value={filters.orderStatus || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="">All</option>
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {/* Payment Status */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Payment Status
          </label>

          <select
            name="paymentStatus"
            value={filters.paymentStatus || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="">All</option>
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
            <option value="Failed">Failed</option>
            <option value="Refunded">Refunded</option>
          </select>
        </div>

        {/* Payment Method */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Payment Method
          </label>

          <select
            name="paymentMethod"
            value={filters.paymentMethod || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="">All</option>
            <option value="Cash on Delivery">
              Cash on Delivery
            </option>
            <option value="Stripe">
              Stripe
            </option>
            <option value="Credit Card">
              Credit Card
            </option>
            <option value="Bank Transfer">
              Bank Transfer
            </option>
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Sort By
          </label>

          <select
            name="sort"
            value={filters.sort || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="">Newest First</option>
            <option value="oldest">
              Oldest First
            </option>
            <option value="amount-high">
              Amount: High → Low
            </option>
            <option value="amount-low">
              Amount: Low → High
            </option>
          </select>
        </div>
      </div>

      <div className="mt-5 flex justify-end">
        <button
          type="button"
          onClick={onReset}
          className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default OrderFilter;