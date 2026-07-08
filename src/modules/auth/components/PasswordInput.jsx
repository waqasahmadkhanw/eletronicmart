import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function PasswordInput({
  name,
  value,
  onChange,
  placeholder = "Enter password",
  disabled = false,
  autoComplete = "current-password",
  className = "",
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={autoComplete}
        className={`w-full rounded-lg border border-gray-300 px-4 py-2 pr-12 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100 ${className}`}
      />

      <button
        type="button"
        onClick={togglePassword}
        disabled={disabled}
        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 hover:text-gray-700 disabled:cursor-not-allowed"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          <FiEyeOff size={20} />
        ) : (
          <FiEye size={20} />
        )}
      </button>
    </div>
  );
}