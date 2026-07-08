import { useState } from "react";

import PasswordInput from "./PasswordInput";
import RememberMe from "./RememberMe";

import useLogin from "../hooks/useLogin";
import { validateLogin } from "../validators/loginSchema";

export default function LoginForm() {
  const { login, loading, error } = useLogin();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateLogin(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    await login({
      email: formData.email,
      password: formData.password,
      rememberMe: formData.rememberMe,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 space-y-5"
    >
      <div>
        <label className="block text-sm font-medium mb-2">
          Email
        </label>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Password
        </label>

        <PasswordInput
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        {errors.password && (
          <p className="mt-1 text-sm text-red-500">
            {errors.password}
          </p>
        )}
      </div>

      <RememberMe
        checked={formData.rememberMe}
        onChange={handleChange}
      />

      {error && (
        <div className="rounded-lg bg-red-100 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}