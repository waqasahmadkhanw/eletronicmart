import { Star } from "lucide-react";

const RatingStars = ({
  rating = 5,
  totalReviews = "2,500+",
}) => {
  return (
    <div className="flex items-center gap-3">
      {/* Stars */}
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={20}
            className={
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
      </div>

      {/* Rating */}
      <span className="text-lg font-semibold text-gray-900">
        {rating}.0
      </span>

      {/* Reviews */}
      <span className="text-sm text-gray-500">
        ({totalReviews} Reviews)
      </span>
    </div>
  );
};

export default RatingStars;