import { useState } from "react";
import { useParams } from "react-router-dom";

import PasswordInput from "./PasswordInput";
import useAuth from "../hooks/useAuth";
import { validateResetPassword } from "../validators/resetPasswordSchema";

export default function ResetPasswordForm() {
  const { token } = useParams();

  const { resetPassword, loading, error, success } = useAuth();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateResetPassword(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    await resetPassword({
      token,
      data: formData,
    });
  };

  return (
    <form className="mx-auto w-full max-w-md space-y-5 rounded-xl bg-white p-6 shadow-lg" onSubmit={handleSubmit}>
      <div>
        <label className="mb-2 block text-sm font-medium">
          New Password
        </label>

        <PasswordInput
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter new password"
        />

        {errors.password && (
          <p className="mt-1 text-sm text-red-500">
            {errors.password}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Confirm Password
        </label>

        <PasswordInput
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm new password"
        />

        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-500">
            {errors.confirmPassword}
          </p>
        )}
      </div>

      {error && (
        <div className="rounded-lg bg-red-100 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {success && (
        <div className="rounded-lg bg-green-100 px-4 py-3 text-sm text-green-600">
          {success}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Resetting..." : "Reset Password"}
      </button>
    </form>
  );
}