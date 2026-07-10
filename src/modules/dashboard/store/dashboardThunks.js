import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchDashboardStats,
  fetchAdminDashboard,
  fetchUserDashboard,
  fetchAnalytics,
  fetchSalesChart,
  fetchRecentOrders,
  fetchTopProducts,
  fetchActivityFeed,
} from "../services";

export const getDashboardStatsThunk = createAsyncThunk(
  "dashboard/getDashboardStats",
  async (_, thunkAPI) => {
    try {
      return await fetchDashboardStats();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

export const getAdminDashboardThunk = createAsyncThunk(
  "dashboard/getAdminDashboard",
  async (_, thunkAPI) => {
    try {
      return await fetchAdminDashboard();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

export const getUserDashboardThunk = createAsyncThunk(
  "dashboard/getUserDashboard",
  async (_, thunkAPI) => {
    try {
      return await fetchUserDashboard();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

export const getAnalyticsThunk = createAsyncThunk(
  "dashboard/getAnalytics",
  async (_, thunkAPI) => {
    try {
      return await fetchAnalytics();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

export const getSalesChartThunk = createAsyncThunk(
  "dashboard/getSalesChart",
  async (_, thunkAPI) => {
    try {
      return await fetchSalesChart();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

export const getRecentOrdersThunk = createAsyncThunk(
  "dashboard/getRecentOrders",
  async (_, thunkAPI) => {
    try {
      return await fetchRecentOrders();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

export const getTopProductsThunk = createAsyncThunk(
  "dashboard/getTopProducts",
  async (_, thunkAPI) => {
    try {
      return await fetchTopProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

export const getActivityFeedThunk = createAsyncThunk(
  "dashboard/getActivityFeed",
  async (_, thunkAPI) => {
    try {
      return await fetchActivityFeed();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);