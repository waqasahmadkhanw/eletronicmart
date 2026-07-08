import api from "../../../config/axios";

// import api from "../../../shared/services/api"
//late i will add in constants /auth/login
export const loginApi = (data) => api.post("/auth/login", data);

export const registerApi = (data) => api.post("/auth/register", data);

export const forgotPasswordApi = (data) =>
  api.post("/auth/forgot-password", data);

export const resetPasswordApi = (token, data) =>
  api.post(`/auth/reset-password/${token}`, data);

export const verifyEmailApi = (token) =>
  api.post(`/auth/verify-email/${token}`);

export const getProfileApi = () => api.get("/auth/profile");

export const updateProfileApi = (data) =>
  api.put("/auth/profile", data);

export const logoutApi = () => api.post("/auth/logout");

export const refreshTokenApi = (refreshToken) =>
  api.post("/auth/refresh-token", { refreshToken });