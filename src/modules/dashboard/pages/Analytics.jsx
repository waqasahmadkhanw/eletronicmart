import { SalesChart, StatisticsCard } from "../components";
import { useAnalytics } from "../hooks";

const Analytics = () => {
  const {
    analytics,
    salesChart,
    loading,
    error,
  } = useAnalytics();

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-lg text-gray-500">
          Loading analytics...
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
          Analytics
        </h1>

        <p className="mt-2 text-gray-500">
          Analyze sales performance and business insights.
        </p>
      </div>

      {/* Analytics Statistics */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatisticsCard
          title="Revenue"
          value={analytics?.revenue ?? "$0"}
          change="+12.4%"
        />

        <StatisticsCard
          title="Orders"
          value={analytics?.orders ?? 0}
          change="+8.2%"
        />

        <StatisticsCard
          title="Customers"
          value={analytics?.customers ?? 0}
          change="+6.7%"
        />

        <StatisticsCard
          title="Conversion Rate"
          value={analytics?.conversionRate ?? "0%"}
          change="+2.1%"
        />
      </div>

      {/* Sales Chart */}
      <SalesChart>
        {salesChart?.length ? (
          <div className="flex h-full items-center justify-center">
            {/* Replace with Recharts, Chart.js, or ApexCharts */}
            <p className="text-gray-500">
              Sales chart data loaded.
            </p>
          </div>
        ) : (
          <p className="text-gray-500">
            No analytics data available.
          </p>
        )}
      </SalesChart>
    </div>
  );
};

export default Analytics;