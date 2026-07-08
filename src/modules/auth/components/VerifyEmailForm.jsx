import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useAuth from "../hooks/useAuth";

export default function VerifyEmailForm() {
  const { token } = useParams();

  const {
    verifyEmail,
    loading,
    error,
    success,
  } = useAuth();

  useEffect(() => {
    if (token) {
      verifyEmail(token);
    }
  }, [token]);

  return (
    <div className="mx-auto w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
      <div className="space-y-5 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Verify Email
        </h2>

        {loading && (
          <div className="space-y-3">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
            <p className="text-gray-600">
              Verifying your email...
            </p>
          </div>
        )}

        {!loading && success && (
          <div className="rounded-lg bg-green-100 p-4">
            <p className="font-medium text-green-700">
              {success}
            </p>
          </div>
        )}

        {!loading && error && (
          <div className="rounded-lg bg-red-100 p-4">
            <p className="font-medium text-red-600">
              {error}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}