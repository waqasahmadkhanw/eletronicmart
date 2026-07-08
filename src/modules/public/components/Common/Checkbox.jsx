import clsx from "clsx";
import { Check } from "lucide-react";

const Checkbox = ({
  id,
  name,
  label,
  checked = false,
  onChange,
  disabled = false,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id || name}
        className={clsx(
          "flex cursor-pointer items-center gap-3",
          disabled && "cursor-not-allowed opacity-60"
        )}
      >
        {/* Hidden Input */}
        <input
          id={id || name}
          name={name}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          className="peer sr-only"
          {...props}
        />

        {/* Custom Checkbox */}
        <div
          className={clsx(
            "flex h-5 w-5 items-center justify-center rounded-md border transition-all duration-200",
            checked
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-gray-300 bg-white",
            "peer-focus:ring-2 peer-focus:ring-blue-100"
          )}
        >
          {checked && <Check size={14} strokeWidth={3} />}
        </div>

        {/* Label */}
        {label && (
          <span className="text-sm font-medium text-gray-700">
            {label}
          </span>
        )}
      </label>

      {/* Error */}
      {error && (
        <p className="mt-2 text-sm font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Checkbox;