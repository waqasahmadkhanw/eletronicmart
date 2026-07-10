import RatingStars from "./RatingStars";

const ReviewTable = ({
  reviews = [],
  onView,
  onEdit,
  onDelete,
}) => {
  if (!reviews.length) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center text-gray-500">
        No reviews found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">
              Title
            </th>

            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">
              Product
            </th>

            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">
              Customer
            </th>

            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">
              Rating
            </th>

            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">
              Date
            </th>

            <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wide text-gray-600">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {reviews.map((review) => (
            <tr key={review._id} className="hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-800">
                {review.title}
              </td>

              <td className="px-6 py-4 text-gray-600">
                {review.product?.name || "-"}
              </td>

              <td className="px-6 py-4 text-gray-600">
                {review.user?.name || "Anonymous"}
              </td>

              <td className="px-6 py-4">
                <RatingStars rating={review.rating} size={18} />
              </td>

              <td className="px-6 py-4 text-gray-600">
                {review.createdAt
                  ? new Date(review.createdAt).toLocaleDateString()
                  : "-"}
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => onView?.(review)}
                    className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    View
                  </button>

                  <button
                    onClick={() => onEdit?.(review)}
                    className="rounded-md bg-amber-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-amber-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete?.(review._id)}
                    className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewTable;