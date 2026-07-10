import api from "@/shared/services/api";

// Get all notifications
export const getNotificationsApi = (params) => {
  return api.get("/notifications", { params });
};

// Get notification by ID
export const getNotificationByIdApi = (notificationId) => {
  return api.get(`/notifications/${notificationId}`);
};

// Mark notification as read
export const markNotificationAsReadApi = (notificationId) => {
  return api.patch(`/notifications/${notificationId}/read`);
};

// Mark all notifications as read
export const markAllNotificationsAsReadApi = () => {
  return api.patch("/notifications/read-all");
};

// Delete notification
export const deleteNotificationApi = (notificationId) => {
  return api.delete(`/notifications/${notificationId}`);
};

// Delete all notifications
export const deleteAllNotificationsApi = () => {
  return api.delete("/notifications");
};