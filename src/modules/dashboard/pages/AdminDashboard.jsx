import {
  StatisticsCard,
  SalesChart,
  RecentOrders,
  TopProducts,
  ActivityFeed,
} from "../components";

import { useDashboard, useAnalytics } from "../hooks";

const AdminDashboard = () => {
  const {
    stats,
    recentOrders,
    topProducts,
    activityFeed,
    loading,
    error,
  } = useDashboard();

  const { salesChart } = useAnalytics();

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-lg text-gray-500">
          Loading admin dashboard...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Monitor your store performance, sales, customers, and
          recent activities.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatisticsCard
          title="Total Revenue"
          value={stats?.revenue ?? "$0"}
          change="+12.4%"
        />

        <StatisticsCard
          title="Total Orders"
          value={stats?.orders ?? 0}
          change="+8.9%"
        />

        <StatisticsCard
          title="Customers"
          value={stats?.customers ?? 0}
          change="+15.3%"
        />

        <StatisticsCard
          title="Products"
          value={stats?.products ?? 0}
          change="+6.1%"
        />
      </div>

      {/* Sales Chart */}
      <SalesChart>
        {salesChart?.length ? (
          <div className="flex h-full items-center justify-center">
            {/* Replace with your chart library */}
            <p className="text-gray-500">
              Sales chart data loaded.
            </p>
          </div>
        ) : (
          <p className="text-gray-500">
            No sales data available.
          </p>
        )}
      </SalesChart>

      {/* Orders & Products */}
      <div className="grid gap-6 lg:grid-cols-2">
        <RecentOrders orders={recentOrders} />
        <TopProducts products={topProducts} />
      </div>

      {/* Activity Feed */}
      <ActivityFeed activities={activityFeed} />
    </div>
  );
};

export default AdminDashboard;