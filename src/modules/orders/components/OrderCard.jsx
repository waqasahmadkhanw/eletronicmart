import React from "react";
import OrderStatusBadge from "./OrderStatusBadge";

const OrderCard = ({
  order,
  onView,
  onEdit,
  onDelete,
}) => {
  if (!order) return null;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Order #{order._id?.slice(-6)}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {new Date(order.createdAt).toLocaleDateString()}
          </p>
        </div>

        <OrderStatusBadge status={order.orderStatus} />
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">
            Customer
          </span>

          <span className="font-medium text-gray-800">
            {order.customerName}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Email
          </span>

          <span className="text-gray-700">
            {order.email}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Phone
          </span>

          <span className="text-gray-700">
            {order.phone}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Payment
          </span>

          <span className="font-medium">
            {order.paymentStatus}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Total
          </span>

          <span className="text-lg font-bold text-green-600">
            ${Number(order.totalAmount || 0).toFixed(2)}
          </span>
        </div>
      </div>

      <div className="mt-5 border-t pt-4">
        <p className="mb-2 text-sm font-medium text-gray-700">
          Shipping Address
        </p>

        <p className="text-sm text-gray-600">
          {order.shippingAddress}
        </p>
      </div>

      {order.notes && (
        <div className="mt-4">
          <p className="mb-1 text-sm font-medium text-gray-700">
            Notes
          </p>

          <p className="text-sm text-gray-600">
            {order.notes}
          </p>
        </div>
      )}

      <div className="mt-6 flex gap-2">
        <button
          onClick={() => onView?.(order)}
          className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
        >
          View
        </button>

        <button
          onClick={() => onEdit?.(order)}
          className="flex-1 rounded-lg bg-amber-500 px-4 py-2 text-white transition hover:bg-amber-600"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete?.(order._id)}
          className="flex-1 rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default OrderCard;