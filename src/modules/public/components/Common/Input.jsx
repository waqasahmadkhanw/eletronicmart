import clsx from "clsx";

const Input = ({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  onBlur,
  error,
  disabled = false,
  required = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
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

      {/* Input Wrapper */}
      <div className="relative">
        {LeftIcon && (
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <LeftIcon size={20} />
          </div>
        )}

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          className={clsx(
            "h-12 w-full rounded-xl border border-gray-300 bg-white text-gray-900 outline-none transition-all duration-300",
            "focus:border-blue-600 focus:ring-4 focus:ring-blue-100",
            "disabled:cursor-not-allowed disabled:bg-gray-100",
            LeftIcon && "pl-12",
            RightIcon && "pr-12",
            error && "border-red-500 focus:border-red-500 focus:ring-red-100",
            "px-4",
            className
          )}
          {...props}
        />

        {RightIcon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            <RightIcon size={20} />
          </div>
        )}
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

export default Input;