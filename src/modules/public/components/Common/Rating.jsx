import clsx from "clsx";
import { Star } from "lucide-react";

const sizes = {
  sm: {
    star: 14,
    text: "text-xs",
  },
  md: {
    star: 18,
    text: "text-sm",
  },
  lg: {
    star: 22,
    text: "text-base",
  },
};

const Rating = ({
  value = 0,
  max = 5,
  reviews,
  showValue = true,
  size = "md",
  className = "",
}) => {
  const current = sizes[size];

  return (
    <div
      className={clsx(
        "flex items-center gap-2",
        className
      )}
    >
      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: max }).map((_, index) => (
          <Star
            key={index}
            size={current.star}
            className={
              index < Math.round(value)
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
      </div>

      {/* Rating Value */}
      {showValue && (
        <span
          className={clsx(
            "font-semibold text-gray-900",
            current.text
          )}
        >
          {value.toFixed(1)}
        </span>
      )}

      {/* Reviews */}
      {reviews !== undefined && (
        <span
          className={clsx(
            "text-gray-500",
            current.text
          )}
        >
          ({reviews} Reviews)
        </span>
      )}
    </div>
  );
};

export default Rating;