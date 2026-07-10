import RatingStars from "./RatingStars";

const ReviewCard = ({
  review,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {review?.title}
          </h3>

          <p className="text-sm text-gray-500">
            {review?.user?.name || "Anonymous"}
          </p>
        </div>

        <RatingStars rating={review?.rating || 0} />
      </div>

      {/* Review */}
      <p className="mb-4 line-clamp-3 text-sm leading-6 text-gray-600">
        {review?.comment}
      </p>

      {/* Product */}
      {review?.product?.name && (
        <div className="mb-4">
          <span className="rounded bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
            {review.product.name}
          </span>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between border-t pt-4">
        <span className="text-xs text-gray-500">
          {review?.createdAt
            ? new Date(review.createdAt).toLocaleDateString()
            : ""}
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => onView?.(review)}
            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            View
          </button>

          <button
            onClick={() => onEdit?.(review)}
            className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-medium text-white hover:bg-yellow-600"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete?.(review._id)}
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;