import { Star } from "lucide-react";

const RatingStars = ({
  rating = 0,
  maxRating = 5,
  size = 20,
  interactive = false,
  showValue = true,
  onChange,
}) => {
  const handleClick = (value) => {
    if (interactive) {
      onChange?.(value);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        {[...Array(maxRating)].map((_, index) => {
          const value = index + 1;

          const filled = value <= Math.floor(rating);

          const halfFilled =
            !filled &&
            rating % 1 >= 0.5 &&
            value === Math.ceil(rating);

          return (
            <button
              key={value}
              type="button"
              disabled={!interactive}
              onClick={() => handleClick(value)}
              aria-label={`Rate ${value} star${value > 1 ? "s" : ""}`}
              className={`group relative rounded-md transition-all duration-300 ${
                interactive
                  ? "cursor-pointer hover:scale-125 active:scale-95"
                  : "cursor-default"
              }`}
            >
              {/* Empty Star */}
              <Star
                size={size}
                className="text-slate-300"
                strokeWidth={2}
              />

              {/* Filled / Half Filled Star */}
              {(filled || halfFilled) && (
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    width: filled ? "100%" : "50%",
                  }}
                >
                  <Star
                    size={size}
                    strokeWidth={2}
                    className="fill-amber-400 text-amber-400 drop-shadow-sm"
                  />
                </span>
              )}
            </button>
          );
        })}
      </div>

      {showValue && (
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
            {rating.toFixed(1)}
          </span>

          <span className="text-sm text-slate-500">
            / {maxRating}
          </span>
        </div>
      )}
    </div>
  );
};

export default RatingStars;