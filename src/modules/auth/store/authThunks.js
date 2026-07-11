import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "../services/authService";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      return await authService.login(credentials);
    } catch (error) {
      return rejectWithValue(
        //need improvements that will done later
        error.response?.data || { message: "Login failed" }
      );
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Registration failed" }
      );
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (payload, { rejectWithValue }) => {
    try {
      return await authService.forgotPassword(payload);
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Request failed" }
      );
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ token, data }, { rejectWithValue }) => {
    try {
      return await authService.resetPassword(token, data);
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Reset failed" }
      );
    }
  }
);

export const verifyEmail = createAsyncThunk(
  "auth/verifyEmail",
  async (token, { rejectWithValue }) => {
    try {
      return await authService.verifyEmail(token);
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Verification failed" }
      );
    }
  }
);

export const getProfile = createAsyncThunk(
  "auth/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      return await authService.getProfile();
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to fetch profile" }
      );
    }
  }
);

export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (payload, { rejectWithValue }) => {
    try {
      return await authService.updateProfile(payload);
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Profile update failed" }
      );
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      return await authService.logout();
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Logout failed" }
      );
    }
  }
);
export const fetchCurrentUser = createAsyncThunk(
  "auth/currentUser",
  async (_, thunkAPI) => {
    try {
      return await authService.getCurrentUser();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);