// import api from "../../../shared/services/api";
import api from "../../../config/axios";

export const getProfileApi = () => {
  return api.get("/profile");
};

export const updateProfileApi = (profileData) => {
  return api.put("/profile", profileData);
};

export const uploadAvatarApi = (formData) => {
  return api.post("/profile/avatar", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const changePasswordApi = (passwordData) => {
  return api.put("/profile/change-password", passwordData);
};