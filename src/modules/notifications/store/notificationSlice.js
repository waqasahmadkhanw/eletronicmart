import { createSlice } from "@reduxjs/toolkit";
import {
  fetchNotifications,
  fetchNotificationById,
  readNotification,
  readAllNotifications,
  removeNotification,
  removeAllNotifications,
} from "./notificationThunks";

const initialState = {
  notifications: [],
  notification: null,
  loading: false,
  error: null,
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    clearNotification(state) {
      state.notification = null;
    },
    clearNotificationError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // Fetch Notifications
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Notification Details
      .addCase(fetchNotificationById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotificationById.fulfilled, (state, action) => {
        state.loading = false;
        state.notification = action.payload;
      })
      .addCase(fetchNotificationById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Mark Notification as Read
      .addCase(readNotification.fulfilled, (state, action) => {
        const updated = action.payload;

        state.notifications = state.notifications.map((item) =>
          item._id === updated._id ? updated : item
        );

        if (state.notification?._id === updated._id) {
          state.notification = updated;
        }
      })

      // Mark All Notifications as Read
      .addCase(readAllNotifications.fulfilled, (state) => {
        state.notifications = state.notifications.map((item) => ({
          ...item,
          isRead: true,
        }));

        if (state.notification) {
          state.notification.isRead = true;
        }
      })

      // Delete Notification
      .addCase(removeNotification.fulfilled, (state, action) => {
        state.notifications = state.notifications.filter(
          (item) => item._id !== action.payload
        );

        if (state.notification?._id === action.payload) {
          state.notification = null;
        }
      })

      // Delete All Notifications
      .addCase(removeAllNotifications.fulfilled, (state) => {
        state.notifications = [];
        state.notification = null;
      });
  },
});

export const {
  clearNotification,
  clearNotificationError,
} = notificationSlice.actions;

export default notificationSlice.reducer;