import clsx from "clsx";

const Textarea = ({
  label,
  name,
  rows = 5,
  placeholder = "",
  value,
  onChange,
  onBlur,
  error,
  disabled = false,
  required = false,
  resize = "vertical",
  className = "",
  ...props
}) => {
  const resizeClasses = {
    none: "resize-none",
    vertical: "resize-y",
    horizontal: "resize-x",
    both: "resize",
  };

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

      {/* Textarea */}
      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        className={clsx(
          "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-all duration-300",
          "focus:border-blue-600 focus:ring-4 focus:ring-blue-100",
          "disabled:cursor-not-allowed disabled:bg-gray-100",
          resizeClasses[resize],
          error &&
            "border-red-500 focus:border-red-500 focus:ring-red-100",
          className
        )}
        {...props}
      />

      {/* Error */}
      {error && (
        <p className="mt-2 text-sm font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Textarea;