import { createSlice } from "@reduxjs/toolkit";
import {
  getProfile,
  updateProfile,
  uploadAvatar,
  changePassword,
} from "./profileThunks";

const initialState = {
  profile: null,

  loading: false,
  updateLoading: false,
  avatarLoading: false,
  passwordLoading: false,

  success: false,
  passwordSuccess: false,

  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearProfileState: (state) => {
      state.loading = false;
      state.updateLoading = false;
      state.avatarLoading = false;
      state.passwordLoading = false;
      state.success = false;
      state.passwordSuccess = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // Get Profile
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update Profile
      .addCase(updateProfile.pending, (state) => {
        state.updateLoading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.updateLoading = false;
        state.success = true;
        state.profile = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.updateLoading = false;
        state.error = action.payload;
      })

      // Upload Avatar
      .addCase(uploadAvatar.pending, (state) => {
        state.avatarLoading = true;
        state.error = null;
      })
      .addCase(uploadAvatar.fulfilled, (state, action) => {
        state.avatarLoading = false;
        state.profile = {
          ...state.profile,
          avatar: action.payload.avatar,
        };
      })
      .addCase(uploadAvatar.rejected, (state, action) => {
        state.avatarLoading = false;
        state.error = action.payload;
      })

      // Change Password
      .addCase(changePassword.pending, (state) => {
        state.passwordLoading = true;
        state.passwordSuccess = false;
        state.error = null;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.passwordLoading = false;
        state.passwordSuccess = true;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.passwordLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearProfileState } = profileSlice.actions;

export default profileSlice.reducer;