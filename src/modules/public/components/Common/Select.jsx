import clsx from "clsx";
import { ChevronDown } from "lucide-react";

const Select = ({
  label,
  name,
  value = "",
  options = [],
  onChange,
  onBlur,
  placeholder = "Select an option",
  error,
  disabled = false,
  required = false,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          {label}

          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>
      )}

      {/* Select */}
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className={clsx(
            "h-12 w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 pr-12 text-gray-900 outline-none transition-all duration-300",
            "focus:border-blue-600 focus:ring-4 focus:ring-blue-100",
            "disabled:cursor-not-allowed disabled:bg-gray-100",
            error &&
              "border-red-500 focus:border-red-500 focus:ring-red-100",
            className
          )}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={20}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>

      {/* Error */}
      {error && (
        <p className="mt-2 text-sm font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Select;