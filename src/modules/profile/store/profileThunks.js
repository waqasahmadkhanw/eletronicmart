import { createAsyncThunk } from "@reduxjs/toolkit";
import * as profileService from "../services/profileService";

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const data = await profileService.getProfile();
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to fetch profile." }
      );
    }
  }
);

export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (profileData, { rejectWithValue }) => {
    try {
      const data = await profileService.updateProfile(profileData);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to update profile." }
      );
    }
  }
);

export const uploadAvatar = createAsyncThunk(
  "profile/uploadAvatar",
  async (formData, { rejectWithValue }) => {
    try {
      const data = await profileService.uploadAvatar(formData);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to upload avatar." }
      );
    }
  }
);

export const changePassword = createAsyncThunk(
  "profile/changePassword",
  async (passwordData, { rejectWithValue }) => {
    try {
      const data = await profileService.changePassword(passwordData);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to change password." }
      );
    }
  }
);