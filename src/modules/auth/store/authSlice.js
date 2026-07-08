import { createSlice } from "@reduxjs/toolkit";
import * as thunks from "./authThunks";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  success: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    clearSuccess(state) {
      state.success = null;
    },
    resetAuthState(state) {
      state.loading = false;
      state.error = null;
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.startsWith("auth/") && action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.startsWith("auth/") && action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.loading = false;
          state.success = action.payload?.message || null;

          if (action.type === thunks.login.fulfilled.type) {
            state.user = action.payload.user;
            state.isAuthenticated = true;
          }

          if (action.type === thunks.getProfile.fulfilled.type) {
            state.user = action.payload.user;
          }

          if (action.type === thunks.updateProfile.fulfilled.type) {
            state.user = action.payload.user;
          }

          if (action.type === thunks.logout.fulfilled.type) {
            state.user = null;
            state.isAuthenticated = false;
          }
        }
      )
      .addMatcher(
        (action) => action.type.startsWith("auth/") && action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.payload?.message || "Something went wrong";
        }
      );
  },
});

export const {
  clearError,
  clearSuccess,
  resetAuthState,
} = authSlice.actions;

export default authSlice.reducer;