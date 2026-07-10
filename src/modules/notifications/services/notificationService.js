import {
  getNotificationsApi,
  getNotificationByIdApi,
  markNotificationAsReadApi,
  markAllNotificationsAsReadApi,
  deleteNotificationApi,
  deleteAllNotificationsApi,
} from "./notificationApi";

export const getNotifications = async (params = {}) => {
  const { data } = await getNotificationsApi(params);
  return data;
};

export const getNotificationById = async (notificationId) => {
  const { data } = await getNotificationByIdApi(notificationId);
  return data;
};

export const markNotificationAsRead = async (notificationId) => {
  const { data } = await markNotificationAsReadApi(notificationId);
  return data;
};

export const markAllNotificationsAsRead = async () => {
  const { data } = await markAllNotificationsAsReadApi();
  return data;
};

export const deleteNotification = async (notificationId) => {
  const { data } = await deleteNotificationApi(notificationId);
  return data;
};

export const deleteAllNotifications = async () => {
  const { data } = await deleteAllNotificationsApi();
  return data;
};