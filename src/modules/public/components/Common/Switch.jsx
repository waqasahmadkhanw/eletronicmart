import clsx from "clsx";

const Switch = ({
  id,
  name,
  label,
  checked = false,
  onChange,
  disabled = false,
  size = "md",
  className = "",
  ...props
}) => {
  const sizes = {
    sm: {
      track: "h-5 w-9",
      thumb: "h-4 w-4",
      translate: "translate-x-4",
    },
    md: {
      track: "h-6 w-11",
      thumb: "h-5 w-5",
      translate: "translate-x-5",
    },
    lg: {
      track: "h-7 w-14",
      thumb: "h-6 w-6",
      translate: "translate-x-7",
    },
  };

  const current = sizes[size];

  return (
    <div className={clsx("flex items-center gap-3", className)}>
      <label
        htmlFor={id || name}
        className={clsx(
          "relative inline-flex cursor-pointer items-center",
          disabled && "cursor-not-allowed opacity-60"
        )}
      >
        {/* Hidden Input */}
        <input
          id={id || name}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="peer sr-only"
          {...props}
        />

        {/* Track */}
        <div
          className={clsx(
            current.track,
            "rounded-full transition-all duration-300",
            checked
              ? "bg-blue-600"
              : "bg-gray-300",
            "peer-focus:ring-4 peer-focus:ring-blue-100"
          )}
        />

        {/* Thumb */}
        <span
          className={clsx(
            "absolute left-0.5 rounded-full bg-white shadow-md transition-all duration-300",
            current.thumb,
            checked && current.translate
          )}
        />
      </label>

      {/* Label */}
      {label && (
        <label
          htmlFor={id || name}
          className="cursor-pointer text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Switch;