export const selectDashboard = (state) => state.dashboard;

export const selectDashboardStats = (state) => state.dashboard.stats;

export const selectAdminDashboard = (state) =>
  state.dashboard.adminDashboard;

export const selectUserDashboard = (state) =>
  state.dashboard.userDashboard;

export const selectAnalytics = (state) =>
  state.dashboard.analytics;

export const selectSalesChart = (state) =>
  state.dashboard.salesChart;

export const selectRecentOrders = (state) =>
  state.dashboard.recentOrders;

export const selectTopProducts = (state) =>
  state.dashboard.topProducts;

export const selectActivityFeed = (state) =>
  state.dashboard.activityFeed;

export const selectDashboardLoading = (state) =>
  state.dashboard.loading;

export const selectDashboardError = (state) =>
  state.dashboard.error;