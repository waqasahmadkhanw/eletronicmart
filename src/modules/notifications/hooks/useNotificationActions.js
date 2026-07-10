import { useDispatch } from "react-redux";

import {
  readNotification,
  readAllNotifications,
  removeNotification,
  removeAllNotifications,
} from "../store";

const useNotificationActions = () => {
  const dispatch = useDispatch();

  const markAsRead = (notificationId) => {
    return dispatch(readNotification(notificationId));
  };

  const markAllAsRead = () => {
    return dispatch(readAllNotifications());
  };

  const deleteNotification = (notificationId) => {
    return dispatch(removeNotification(notificationId));
  };

  const deleteAll = () => {
    return dispatch(removeAllNotifications());
  };

  return {
    markAsRead,
    markAllAsRead,
    deleteNotification,
    deleteAll,
  };
};

export default useNotificationActions;