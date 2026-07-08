import {
  AUTH_ROUTES,
  USER_ROLES,
} from "../constants/auth.constants";

/**
 * Check whether a user object exists.
 */
export const isAuthenticated = (user) => {
  return !!user;
};

/**
 * Check if the user has a specific role.
 */
export const hasRole = (user, role) => {
  if (!user) return false;

  return user.role === role;
};

/**
 * Check if the user is an Admin.
 */
export const isAdmin = (user) => {
  return hasRole(user, USER_ROLES.ADMIN);
};

/**
 * Check if the user is an Instructor.
 */
export const isInstructor = (user) => {
  return hasRole(user, USER_ROLES.INSTRUCTOR);
};

/**
 * Check if the user is a normal User.
 */
export const isUser = (user) => {
  return hasRole(user, USER_ROLES.USER);
};

/**
 * Get the user's display name.
 */
export const getUserName = (user) => {
  if (!user) return "";

  return (
    user.name ||
    user.fullName ||
    user.username ||
    "User"
  );
};

/**
 * Get user initials.
 */
export const getUserInitials = (user) => {
  const name = getUserName(user);

  return name
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");
};

/**
 * Get the default redirect path after login.
 */
export const getRedirectPath = (user) => {
  if (!user) {
    return AUTH_ROUTES.LOGIN;
  }

  switch (user.role) {
    case USER_ROLES.ADMIN:
      return "/admin";

    case USER_ROLES.INSTRUCTOR:
      return "/instructor";

    default:
      return "/";
  }
};

/**
 * Remove sensitive fields from a user object.
 */
export const sanitizeUser = (user) => {
  if (!user) return null;

  const {
    password,
    refreshToken,
    ...safeUser
  } = user;

  return safeUser;
};