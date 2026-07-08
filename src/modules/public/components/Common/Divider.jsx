import clsx from "clsx";

const Divider = ({
  orientation = "horizontal",
  variant = "solid",
  color = "gray",
  thickness = "1",
  label,
  className = "",
}) => {
  const colors = {
    gray: "border-gray-200",
    blue: "border-blue-500",
    red: "border-red-500",
    green: "border-green-500",
    yellow: "border-yellow-500",
  };

  const variants = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
  };

  if (orientation === "vertical") {
    return (
      <div
        className={clsx(
          "inline-block self-stretch",
          `border-l-${thickness}`,
          colors[color],
          variants[variant],
          className
        )}
      />
    );
  }

  return (
    <div className={clsx("flex items-center", className)}>
      <div
        className={clsx(
          "flex-1 border-t",
          `border-t-${thickness}`,
          colors[color],
          variants[variant]
        )}
      />

      {label && (
        <span className="mx-4 whitespace-nowrap text-sm font-medium text-gray-500">
          {label}
        </span>
      )}

      <div
        className={clsx(
          "flex-1 border-t",
          `border-t-${thickness}`,
          colors[color],
          variants[variant]
        )}
      />
    </div>
  );
};

export default Divider;