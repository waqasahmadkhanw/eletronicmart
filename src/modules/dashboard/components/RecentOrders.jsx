import PropTypes from "prop-types";
import DashboardCard from "./DashboardCard";

const RecentOrders = ({ orders = [] }) => {
  return (
    <DashboardCard title="Recent Orders">
      {orders.length === 0 ? (
        <div className="flex h-40 items-center justify-center">
          <p className="text-sm text-gray-500">
            No recent orders found.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">
                  Order ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">
                  Customer
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">
                  Total
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 bg-white">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="transition-colors hover:bg-gray-50"
                >
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    #{order.id}
                  </td>

                  <td className="px-4 py-3 text-sm text-gray-700">
                    {order.customer}
                  </td>

                  <td className="px-4 py-3 text-sm text-gray-700">
                    ${order.total}
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </DashboardCard>
  );
};

RecentOrders.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      customer: PropTypes.string.isRequired,
      total: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      status: PropTypes.string.isRequired,
    })
  ),
};

export default RecentOrders;