import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchNotificationById,
  selectNotification,
  selectNotificationLoading,
  selectNotificationError,
} from "../store";

const useNotificationDetails = (notificationId) => {
  const dispatch = useDispatch();

  const notification = useSelector(selectNotification);
  const loading = useSelector(selectNotificationLoading);
  const error = useSelector(selectNotificationError);

  useEffect(() => {
    if (notificationId) {
      dispatch(fetchNotificationById(notificationId));
    }
  }, [dispatch, notificationId]);

  const refetch = () => {
    if (notificationId) {
      dispatch(fetchNotificationById(notificationId));
    }
  };

  return {
    notification,
    loading,
    error,
    refetch,
  };
};

export default useNotificationDetails;