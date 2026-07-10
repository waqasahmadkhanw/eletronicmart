import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchNotifications,
  selectNotifications,
  selectNotificationLoading,
  selectNotificationError,
  selectUnreadNotificationsCount,
} from "../store";

const useNotifications = (params = {}) => {
  const dispatch = useDispatch();

  const notifications = useSelector(selectNotifications);
  const loading = useSelector(selectNotificationLoading);
  const error = useSelector(selectNotificationError);
  const unreadCount = useSelector(selectUnreadNotificationsCount);

  useEffect(() => {
    dispatch(fetchNotifications(params));
  }, [dispatch]);

  return {
    notifications,
    loading,
    error,
    unreadCount,
    refetch: () => dispatch(fetchNotifications(params)),
  };
};

export default useNotifications;
