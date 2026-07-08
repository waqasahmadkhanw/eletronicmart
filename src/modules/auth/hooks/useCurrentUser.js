import { useEffect } from "react";

import useAuth from "./useAuth";

export default function useCurrentUser() {
  const {
    user,
    isAuthenticated,
    loading,
    getProfile,
  } = useAuth();

  useEffect(() => {
    if (isAuthenticated && !user) {
      getProfile();
    }
  }, [isAuthenticated, user]);

  return {
    user,
    isAuthenticated,
    loading,
  };
}