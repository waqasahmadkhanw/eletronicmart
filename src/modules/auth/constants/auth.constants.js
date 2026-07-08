// API Endpoints
export const AUTH_ENDPOINTS = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  LOGOUT: "/auth/logout",

  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_PASSWORD: "/auth/reset-password",

  VERIFY_EMAIL: "/auth/verify-email",

  PROFILE: "/auth/profile",
  REFRESH_TOKEN: "/auth/refresh-token",
};

// Authentication Routes
export const AUTH_ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",

  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password/:token",

  VERIFY_EMAIL: "/verify-email/:token",

  PROFILE: "/profile",
};

// Token Keys
export const TOKEN_KEYS = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
};

// User Roles
export const USER_ROLES = {
  ADMIN: "admin",
  USER: "user",
  INSTRUCTOR: "instructor",
};

// Authentication Status
export const AUTH_STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  FAILED: "failed",
};

// Authentication Messages
export const AUTH_MESSAGES = {
  LOGIN_SUCCESS: "Login successful.",
  REGISTER_SUCCESS: "Registration successful.",
  LOGOUT_SUCCESS: "Logout successful.",

  PASSWORD_RESET_SENT:
    "Password reset link sent successfully.",

  PASSWORD_RESET_SUCCESS:
    "Password reset successfully.",

  EMAIL_VERIFIED:
    "Email verified successfully.",

  PROFILE_UPDATED:
    "Profile updated successfully.",
};

// Local Storage Keys
export const STORAGE_KEYS = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user",
};

// Password Rules
export const PASSWORD_RULES = {
  MIN_LENGTH: 6,
  MAX_LENGTH: 32,
};