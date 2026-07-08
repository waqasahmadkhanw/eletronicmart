import useAuth from "./useAuth";

export default function useLogout() {
  const { logout, loading } = useAuth();

  const handleLogout = async () => {
    return await logout();
  };

  return {
    logout: handleLogout,
    loading,
  };
}