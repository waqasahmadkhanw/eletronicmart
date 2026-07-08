import {
  getProfileApi,
  updateProfileApi,
  uploadAvatarApi,
  changePasswordApi,
} from "./profileApi";
// import * as profileApi from "./profileApi";
export const getProfile = async () => {
  const response = await getProfileApi();
  return response.data;
};

export const updateProfile = async (profileData) => {
  const response = await updateProfileApi(profileData);
  return response.data;
};

export const uploadAvatar = async (formData) => {
  const response = await uploadAvatarApi(formData);
  return response.data;
};

export const changePassword = async (passwordData) => {
  const response = await changePasswordApi(passwordData);
  return response.data;
};