import { useNavigate, useParams } from "react-router-dom";

import { useReviewDetails } from "../hooks";
import { ReviewCard } from "../components";

const ReviewDetails = () => {
  const navigate = useNavigate();
  const { reviewId } = useParams();

  const {
    review,
    loading,
    deleteReview,
  } = useReviewDetails(reviewId);

  const handleEdit = () => {
    navigate(`/reviews/${reviewId}/edit`);
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this review?"
    );

    if (!confirmed) return;

    await deleteReview(reviewId);

    navigate("/reviews");
  };

  if (loading) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow">
        Loading review...
      </div>
    );
  }

  if (!review) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow">
        <h2 className="text-xl font-semibold text-gray-700">
          Review not found
        </h2>

        <button
          onClick={() => navigate("/reviews")}
          className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700"
        >
          Back to Reviews
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Review Details
          </h1>

          <p className="mt-1 text-gray-500">
            View review information.
          </p>
        </div>

        <button
          onClick={() => navigate("/reviews")}
          className="rounded-lg border border-gray-300 px-5 py-2.5 font-medium hover:bg-gray-100"
        >
          Back
        </button>
      </div>

      {/* Review Card */}
      <ReviewCard
        review={review}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
export default ReviewDetails;