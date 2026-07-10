import { Star } from "lucide-react";

const RatingStars = ({
  rating = 0,
  maxRating = 5,
  size = 20,
  interactive = false,
  onChange,
}) => {
  const handleClick = (value) => {
    if (interactive && onChange) {
      onChange(value);
    }
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(maxRating)].map((_, index) => {
        const value = index + 1;
        const filled = value <= rating;

        return (
          <button
            key={value}
            type="button"
            disabled={!interactive}
            onClick={() => handleClick(value)}
            className={`transition ${
              interactive ? "cursor-pointer hover:scale-110" : "cursor-default"
            }`}
          >
            <Star
              size={size}
              className={
                filled
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          </button>
        );
      })}
    </div>
  );
};

export default RatingStars;