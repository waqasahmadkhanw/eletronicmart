import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getAnalyticsThunk,
  getSalesChartThunk,
  selectAnalytics,
  selectSalesChart,
  selectDashboardLoading,
  selectDashboardError,
} from "../store";

export const useAnalytics = () => {
  const dispatch = useDispatch();

  const analytics = useSelector(selectAnalytics);
  const salesChart = useSelector(selectSalesChart);
  const loading = useSelector(selectDashboardLoading);
  const error = useSelector(selectDashboardError);

  useEffect(() => {
    dispatch(getAnalyticsThunk());
    dispatch(getSalesChartThunk());
  }, [dispatch]);

  return {
    analytics,
    salesChart,
    loading,
    error,
  };
};