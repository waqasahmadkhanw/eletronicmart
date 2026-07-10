// Notifications
export const selectNotifications = (state) =>
  state.notifications.notifications;

// Notification Details
export const selectNotification = (state) =>
  state.notifications.notification;

// Loading State
export const selectNotificationLoading = (state) =>
  state.notifications.loading;

// Error State
export const selectNotificationError = (state) =>
  state.notifications.error;

// Total Notifications
export const selectTotalNotifications = (state) =>
  state.notifications.notifications.length;

// Total Unread Notifications
export const selectUnreadNotificationsCount = (state) =>
  state.notifications.notifications.filter(
    (notification) => !notification.isRead
  ).length;