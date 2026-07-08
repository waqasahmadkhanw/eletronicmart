import useAuth from "./useAuth";

export default function useLogin() {
  const { login, loading, error, success } = useAuth();

  const handleLogin = async (credentials) => {
    return await login(credentials);
  };

  return {
    login: handleLogin,
    loading,
    error,
    success,
  };
}