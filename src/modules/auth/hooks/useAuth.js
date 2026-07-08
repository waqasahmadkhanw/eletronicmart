import { useDispatch, useSelector } from "react-redux";

import {
  selectAuth,
  selectUser,
  selectLoading,
  selectError,
  selectSuccess,
  selectIsAuthenticated,
} from "../store/selectors";

import {
  login,
  register,
  forgotPassword,
  resetPassword,
  verifyEmail,
  getProfile,
  updateProfile,
  logout,
  clearError,
  clearSuccess,
  resetAuthState,
} from "../store";

export default function useAuth() {
  const dispatch = useDispatch();

  return {
    auth: useSelector(selectAuth),
    user: useSelector(selectUser),
    loading: useSelector(selectLoading),
    error: useSelector(selectError),
    success: useSelector(selectSuccess),
    isAuthenticated: useSelector(selectIsAuthenticated),

    login: (data) => dispatch(login(data)),
    register: (data) => dispatch(register(data)),
    forgotPassword: (data) => dispatch(forgotPassword(data)),
    resetPassword: (data) => dispatch(resetPassword(data)),
    verifyEmail: (token) => dispatch(verifyEmail(token)),
    getProfile: () => dispatch(getProfile()),
    updateProfile: (data) => dispatch(updateProfile(data)),
    logout: () => dispatch(logout()),

    clearError: () => dispatch(clearError()),
    clearSuccess: () => dispatch(clearSuccess()),
    resetAuthState: () => dispatch(resetAuthState()),
  };
}