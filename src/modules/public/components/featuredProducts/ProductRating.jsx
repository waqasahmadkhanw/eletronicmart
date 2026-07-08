import { Star } from "lucide-react";

const ProductRating = ({ rating = 0, reviews = 0 }) => {
  const fullStars = Math.floor(rating);

  return (
    <div className="flex items-center gap-2">
      {/* Stars */}
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={
              star <= fullStars
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
      </div>

      {/* Rating */}
      <span className="text-sm font-semibold text-gray-900">
        {rating.toFixed(1)}
      </span>

      {/* Reviews */}
      <span className="text-sm text-gray-500">
        ({reviews} Reviews)
      </span>
    </div>
  );
};

export default ProductRating;