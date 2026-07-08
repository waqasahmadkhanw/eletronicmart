import useAuth from "./useAuth";

export default function useRegister() {
  const { register, loading, error, success } = useAuth();

  const handleRegister = async (userData) => {
    return await register(userData);
  };

  return {
    register: handleRegister,
    loading,
    error,
    success,
  };
}