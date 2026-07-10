import api from "@/shared/services/api";

export const getDashboardStats = () => {
  return api.get("/dashboard/stats");
};

export const getAdminDashboard = () => {
  return api.get("/dashboard/admin");
};

export const getUserDashboard = () => {
  return api.get("/dashboard/user");
};

export const getAnalytics = () => {
  return api.get("/dashboard/analytics");
};

export const getSalesChart = () => {
  return api.get("/dashboard/sales-chart");
};

export const getRecentOrders = () => {
  return api.get("/dashboard/recent-orders");
};

export const getTopProducts = () => {
  return api.get("/dashboard/top-products");
};

export const getActivityFeed = () => {
  return api.get("/dashboard/activity-feed");
};