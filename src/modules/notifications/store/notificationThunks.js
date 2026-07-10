import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getNotifications,
  getNotificationById,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  deleteNotification,
  deleteAllNotifications,
} from "../services";

// Get all notifications
export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async (params = {}, { rejectWithValue }) => {
    try {
      return await getNotifications(params);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch notifications."
      );
    }
  }
);

// Get notification details
export const fetchNotificationById = createAsyncThunk(
  "notifications/fetchNotificationById",
  async (notificationId, { rejectWithValue }) => {
    try {
      return await getNotificationById(notificationId);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch notification."
      );
    }
  }
);

// Mark a notification as read
export const readNotification = createAsyncThunk(
  "notifications/readNotification",
  async (notificationId, { rejectWithValue }) => {
    try {
      return await markNotificationAsRead(notificationId);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to mark notification as read."
      );
    }
  }
);

// Mark all notifications as read
export const readAllNotifications = createAsyncThunk(
  "notifications/readAllNotifications",
  async (_, { rejectWithValue }) => {
    try {
      return await markAllNotificationsAsRead();
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Failed to mark all notifications as read."
      );
    }
  }
);

// Delete a notification
export const removeNotification = createAsyncThunk(
  "notifications/removeNotification",
  async (notificationId, { rejectWithValue }) => {
    try {
      await deleteNotification(notificationId);
      return notificationId;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete notification."
      );
    }
  }
);

// Delete all notifications
export const removeAllNotifications = createAsyncThunk(
  "notifications/removeAllNotifications",
  async (_, { rejectWithValue }) => {
    try {
      await deleteAllNotifications();
      return true;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Failed to delete all notifications."
      );
    }
  }
);