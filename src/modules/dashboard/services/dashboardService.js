import * as dashboardApi from "./dashboardApi";

export const fetchDashboardStats = async () => {
  const { data } = await dashboardApi.getDashboardStats();
  return data;
};

export const fetchAdminDashboard = async () => {
  const { data } = await dashboardApi.getAdminDashboard();
  return data;
};

export const fetchUserDashboard = async () => {
  const { data } = await dashboardApi.getUserDashboard();
  return data;
};

export const fetchAnalytics = async () => {
  const { data } = await dashboardApi.getAnalytics();
  return data;
};

export const fetchSalesChart = async () => {
  const { data } = await dashboardApi.getSalesChart();
  return data;
};

export const fetchRecentOrders = async () => {
  const { data } = await dashboardApi.getRecentOrders();
  return data;
};

export const fetchTopProducts = async () => {
  const { data } = await dashboardApi.getTopProducts();
  return data;
};

export const fetchActivityFeed = async () => {
  const { data } = await dashboardApi.getActivityFeed();
  return data;
};