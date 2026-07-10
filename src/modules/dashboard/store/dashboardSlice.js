import { createSlice } from "@reduxjs/toolkit";
import {
  getDashboardStatsThunk,
  getAdminDashboardThunk,
  getUserDashboardThunk,
  getAnalyticsThunk,
  getSalesChartThunk,
  getRecentOrdersThunk,
  getTopProductsThunk,
  getActivityFeedThunk,
} from "./dashboardThunks";

const initialState = {
  stats: null,
  adminDashboard: null,
  userDashboard: null,
  analytics: null,
  salesChart: [],
  recentOrders: [],
  topProducts: [],
  activityFeed: [],
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    clearDashboardError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    const pending = (state) => {
      state.loading = true;
      state.error = null;
    };

    const rejected = (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message;
    };

    builder
      .addCase(getDashboardStatsThunk.pending, pending)
      .addCase(getDashboardStatsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload;
      })
      .addCase(getDashboardStatsThunk.rejected, rejected)

      .addCase(getAdminDashboardThunk.pending, pending)
      .addCase(getAdminDashboardThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.adminDashboard = action.payload;
      })
      .addCase(getAdminDashboardThunk.rejected, rejected)

      .addCase(getUserDashboardThunk.pending, pending)
      .addCase(getUserDashboardThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.userDashboard = action.payload;
      })
      .addCase(getUserDashboardThunk.rejected, rejected)

      .addCase(getAnalyticsThunk.pending, pending)
      .addCase(getAnalyticsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.analytics = action.payload;
      })
      .addCase(getAnalyticsThunk.rejected, rejected)

      .addCase(getSalesChartThunk.pending, pending)
      .addCase(getSalesChartThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.salesChart = action.payload;
      })
      .addCase(getSalesChartThunk.rejected, rejected)

      .addCase(getRecentOrdersThunk.pending, pending)
      .addCase(getRecentOrdersThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.recentOrders = action.payload;
      })
      .addCase(getRecentOrdersThunk.rejected, rejected)

      .addCase(getTopProductsThunk.pending, pending)
      .addCase(getTopProductsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.topProducts = action.payload;
      })
      .addCase(getTopProductsThunk.rejected, rejected)

      .addCase(getActivityFeedThunk.pending, pending)
      .addCase(getActivityFeedThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.activityFeed = action.payload;
      })
      .addCase(getActivityFeedThunk.rejected, rejected);
  },
});

export const { clearDashboardError } = dashboardSlice.actions;
export default dashboardSlice.reducer;