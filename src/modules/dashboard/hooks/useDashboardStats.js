import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getDashboardStatsThunk,
  selectDashboardStats,
  selectDashboardLoading,
  selectDashboardError,
} from "../store";

export const useDashboardStats = () => {
  const dispatch = useDispatch();

  const stats = useSelector(selectDashboardStats);
  const loading = useSelector(selectDashboardLoading);
  const error = useSelector(selectDashboardError);

  useEffect(() => {
    dispatch(getDashboardStatsThunk());
  }, [dispatch]);

  return {
    stats,
    loading,
    error,
  };
};