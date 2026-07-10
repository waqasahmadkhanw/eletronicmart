import React from "react";
import OrderStatusBadge from "./OrderStatusBadge";

const OrderTable = ({
  orders = [],
  onView,
  onEdit,
  onDelete,
}) => {
  if (!orders.length) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
        <h3 className="text-lg font-semibold text-gray-700">
          No Orders Found
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          There are no orders available.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Order ID
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Customer
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Total
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Payment
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Status
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Date
            </th>

            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr
              key={order._id}
              className="border-t hover:bg-gray-50"
            >
              <td className="px-4 py-4 text-sm text-gray-700">
                #{order._id?.slice(-6)}
              </td>

              <td className="px-4 py-4">
                <div className="font-medium text-gray-800">
                  {order.customerName}
                </div>

                <div className="text-sm text-gray-500">
                  {order.email}
                </div>
              </td>

              <td className="px-4 py-4 font-semibold text-gray-800">
                ${order.totalAmount}
              </td>

              <td className="px-4 py-4 text-sm text-gray-700">
                {order.paymentStatus}
              </td>

              <td className="px-4 py-4">
                <OrderStatusBadge
                  status={order.orderStatus}
                />
              </td>

              <td className="px-4 py-4 text-sm text-gray-600">
                {new Date(order.createdAt).toLocaleDateString()}
              </td>

              <td className="px-4 py-4">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => onView?.(order)}
                    className="rounded bg-blue-600 px-3 py-1 text-sm text-white transition hover:bg-blue-700"
                  >
                    View
                  </button>

                  <button
                    onClick={() => onEdit?.(order)}
                    className="rounded bg-amber-500 px-3 py-1 text-sm text-white transition hover:bg-amber-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete?.(order._id)}
                    className="rounded bg-red-600 px-3 py-1 text-sm text-white transition hover:bg-red-700"
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

export default OrderTable;