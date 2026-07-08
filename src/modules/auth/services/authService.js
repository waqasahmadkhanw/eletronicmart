import * as authApi from "./authApi";

export const login = async (credentials) => {
  const { data } = await authApi.loginApi(credentials);
  return data;
};

export const register = async (userData) => {
  const { data } = await authApi.registerApi(userData);
  return data;
};

export const forgotPassword = async (payload) => {
  const { data } = await authApi.forgotPasswordApi(payload);
  return data;
};

export const resetPassword = async (token, payload) => {
  const { data } = await authApi.resetPasswordApi(token, payload);
  return data;
};

export const verifyEmail = async (token) => {
  const { data } = await authApi.verifyEmailApi(token);
  return data;
};

export const getProfile = async () => {
  const { data } = await authApi.getProfileApi();
  return data;
};

export const updateProfile = async (payload) => {
  const { data } = await authApi.updateProfileApi(payload);
  return data;
};

export const logout = async () => {
  const { data } = await authApi.logoutApi();
  return data;
};

export const refreshToken = async (refreshToken) => {
  const { data } = await authApi.refreshTokenApi(refreshToken);
  return data;
};