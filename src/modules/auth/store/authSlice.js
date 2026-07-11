import { createSlice } from "@reduxjs/toolkit";
import * as thunks from "./authThunks";

const initialState = {
  user: null,
  isAuthenticated: false,

  loading: false,

  initialized: false,

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

      // ===========================
      // Pending
      // ===========================

      .addMatcher(
        (action) =>
          action.type.startsWith("auth/") &&
          action.type.endsWith("/pending"),

        (state) => {
          state.loading = true;
          state.error = null;
        }
      )

      // ===========================
      // Fulfilled
      // ===========================

      .addMatcher(
        (action) =>
          action.type.startsWith("auth/") &&
          action.type.endsWith("/fulfilled"),

        (state, action) => {
          state.loading = false;

          state.success = action.payload?.message ?? null;

          switch (action.type) {
            case thunks.login.fulfilled.type:
              state.user = action.payload.user;
              state.isAuthenticated = true;
              break;

            case thunks.fetchCurrentUser.fulfilled.type:
              state.user = action.payload;
              state.isAuthenticated = true;
              state.initialized = true;
              break;

            case thunks.getProfile.fulfilled.type:
              state.user = action.payload.user;
              break;

            case thunks.updateProfile.fulfilled.type:
              state.user = action.payload.user;
              break;

            case thunks.logout.fulfilled.type:
              state.user = null;
              state.isAuthenticated = false;
              state.initialized = true;
              break;

            default:
              break;
          }
        }
      )

      // ===========================
      // Rejected
      // ===========================

      .addMatcher(
        (action) =>
          action.type.startsWith("auth/") &&
          action.type.endsWith("/rejected"),

        (state, action) => {
          state.loading = false;

          state.error =
            action.payload?.message ||
            action.error?.message ||
            "Something went wrong";

          if (action.type === thunks.fetchCurrentUser.rejected.type) {
            state.user = null;
            state.isAuthenticated = false;
            state.initialized = true;
          }
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