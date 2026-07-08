import clsx from "clsx";

const variants = {
  primary: "bg-blue-100 text-blue-700",
  secondary: "bg-gray-100 text-gray-700",
  success: "bg-green-100 text-green-700",
  warning: "bg-yellow-100 text-yellow-700",
  danger: "bg-red-100 text-red-700",
  info: "bg-cyan-100 text-cyan-700",
  purple: "bg-purple-100 text-purple-700",
  dark: "bg-gray-900 text-white",
};

const sizes = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3 py-1.5 text-sm",
  lg: "px-4 py-2 text-base",
};

const Badge = ({
  children,
  variant = "primary",
  size = "md",
  rounded = "full",
  className = "",
}) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center font-semibold transition-all duration-300",
        variants[variant],
        sizes[size],
        rounded === "full" ? "rounded-full" : "rounded-lg",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;