export const selectProfileState = (state) => state.profile;

export const selectProfile = (state) => state.profile.profile;

export const selectProfileLoading = (state) => state.profile.loading;

export const selectUpdateProfileLoading = (state) =>
  state.profile.updateLoading;

export const selectAvatarLoading = (state) =>
  state.profile.avatarLoading;

export const selectPasswordLoading = (state) =>
  state.profile.passwordLoading;

export const selectProfileSuccess = (state) =>
  state.profile.success;

export const selectPasswordSuccess = (state) =>
  state.profile.passwordSuccess;

export const selectProfileError = (state) =>
  state.profile.error;