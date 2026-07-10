import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getDashboardStatsThunk,
  getRecentOrdersThunk,
  getTopProductsThunk,
  getActivityFeedThunk,
  selectDashboardStats,
  selectRecentOrders,
  selectTopProducts,
  selectActivityFeed,
  selectDashboardLoading,
  selectDashboardError,
} from "../store";

export const useDashboard = () => {
  const dispatch = useDispatch();

  const stats = useSelector(selectDashboardStats);
  const recentOrders = useSelector(selectRecentOrders);
  const topProducts = useSelector(selectTopProducts);
  const activityFeed = useSelector(selectActivityFeed);
  const loading = useSelector(selectDashboardLoading);
  const error = useSelector(selectDashboardError);

  useEffect(() => {
    dispatch(getDashboardStatsThunk());
    dispatch(getRecentOrdersThunk());
    dispatch(getTopProductsThunk());
    dispatch(getActivityFeedThunk());
  }, [dispatch]);

  return {
    stats,
    recentOrders,
    topProducts,
    activityFeed,
    loading,
    error,
  };
};