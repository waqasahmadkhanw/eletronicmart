import {
  StatisticsCard,
  SalesChart,
  RecentOrders,
  TopProducts,
  ActivityFeed,
} from "../components";

import { useDashboard } from "../hooks";

const Dashboard = () => {
  const {
    stats,
    recentOrders,
    topProducts,
    activityFeed,
    loading,
    error,
  } = useDashboard();

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-gray-500">Loading dashboard...</p>
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
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard
        </h1>
        <p className="mt-2 text-gray-500">
          Welcome back! Here's an overview of your dashboard.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatisticsCard
          title="Revenue"
          value={stats?.revenue ?? "$0"}
          change="+12.5%"
        />

        <StatisticsCard
          title="Orders"
          value={stats?.orders ?? 0}
          change="+8.4%"
        />

        <StatisticsCard
          title="Customers"
          value={stats?.customers ?? 0}
          change="+15.2%"
        />

        <StatisticsCard
          title="Products"
          value={stats?.products ?? 0}
          change="+4.1%"
        />
      </div>

      {/* Sales Chart */}
      <SalesChart />

      {/* Bottom Section */}
      <div className="grid gap-6 xl:grid-cols-2">
        <RecentOrders orders={recentOrders} />
        <TopProducts products={topProducts} />
      </div>

      <ActivityFeed activities={activityFeed} />
    </div>
  );
};

export default Dashboard;