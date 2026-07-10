import {
  StatisticsCard,
  RecentOrders,
  ActivityFeed,
} from "../components";

import { useDashboard } from "../hooks";

const UserDashboard = () => {
  const {
    stats,
    recentOrders,
    activityFeed,
    loading,
    error,
  } = useDashboard();

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-lg text-gray-500">
          Loading dashboard...
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
          My Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Welcome back! Here's a quick overview of your account.
        </p>
      </div>

      {/* User Statistics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <StatisticsCard
          title="Total Orders"
          value={stats?.orders ?? 0}
          change="+2.4%"
        />

        <StatisticsCard
          title="Wishlist Items"
          value={stats?.wishlist ?? 0}
        />

        <StatisticsCard
          title="Reward Points"
          value={stats?.rewardPoints ?? 0}
        />
      </div>

      {/* Recent Orders */}
      <RecentOrders orders={recentOrders} />

      {/* Recent Activity */}
      <ActivityFeed activities={activityFeed} />
    </div>
  );
};

export default UserDashboard;