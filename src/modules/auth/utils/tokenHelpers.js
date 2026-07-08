import {
  TOKEN_KEYS,
} from "../constants/auth.constants";

/**
 * Save access token.
 */
export const setAccessToken = (token) => {
  localStorage.setItem(TOKEN_KEYS.ACCESS_TOKEN, token);
};

/**
 * Get access token.
 */
export const getAccessToken = () => {
  return localStorage.getItem(TOKEN_KEYS.ACCESS_TOKEN);
};

/**
 * Remove access token.
 */
export const removeAccessToken = () => {
  localStorage.removeItem(TOKEN_KEYS.ACCESS_TOKEN);
};

/**
 * Save refresh token.
 */
export const setRefreshToken = (token) => {
  localStorage.setItem(TOKEN_KEYS.REFRESH_TOKEN, token);
};

/**
 * Get refresh token.
 */
export const getRefreshToken = () => {
  return localStorage.getItem(TOKEN_KEYS.REFRESH_TOKEN);
};

/**
 * Remove refresh token.
 */
export const removeRefreshToken = () => {
  localStorage.removeItem(TOKEN_KEYS.REFRESH_TOKEN);
};

/**
 * Save both tokens.
 */
export const saveTokens = ({
  accessToken,
  refreshToken,
}) => {
  if (accessToken) {
    setAccessToken(accessToken);
  }

  if (refreshToken) {
    setRefreshToken(refreshToken);
  }
};

/**
 * Remove all authentication tokens.
 */
export const clearTokens = () => {
  removeAccessToken();
  removeRefreshToken();
};

/**
 * Check whether an access token exists.
 */
export const hasAccessToken = () => {
  return Boolean(getAccessToken());
};

/**
 * Get the Authorization header.
 */
export const getAuthHeader = () => {
  const token = getAccessToken();

  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
};