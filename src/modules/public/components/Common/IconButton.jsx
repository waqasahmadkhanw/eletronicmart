import clsx from "clsx";

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700",

  secondary:
    "bg-gray-100 text-gray-700 hover:bg-gray-200",

  outline:
    "border border-gray-300 bg-white text-gray-700 hover:border-blue-600 hover:text-blue-600",

  danger:
    "bg-red-600 text-white hover:bg-red-700",

  ghost:
    "bg-transparent text-gray-700 hover:bg-gray-100",
};

const sizes = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-14 w-14",
};

const IconButton = ({
  icon: Icon,
  type = "button",
  variant = "ghost",
  size = "md",
  rounded = "full",
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        "inline-flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        sizes[size],
        rounded === "full" ? "rounded-full" : "rounded-xl",
        className
      )}
      {...props}
    >
      {Icon && <Icon size={20} />}
    </button>
  );
};

export default IconButton;