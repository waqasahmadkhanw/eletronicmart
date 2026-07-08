import clsx from "clsx";

const Radio = ({
  id,
  name,
  label,
  value,
  checked = false,
  onChange,
  disabled = false,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className={clsx("w-full", className)}>
      <label
        htmlFor={id || `${name}-${value}`}
        className={clsx(
          "flex cursor-pointer items-center gap-3",
          disabled && "cursor-not-allowed opacity-60"
        )}
      >
        {/* Hidden Input */}
        <input
          id={id || `${name}-${value}`}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="peer sr-only"
          {...props}
        />

        {/* Custom Radio */}
        <div
          className={clsx(
            "flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-200",
            checked
              ? "border-blue-600"
              : "border-gray-300",
            "peer-focus:ring-2 peer-focus:ring-blue-100"
          )}
        >
          {checked && (
            <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />
          )}
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

export default Radio;