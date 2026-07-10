import { useNavigate, useParams } from "react-router-dom";

import { ReviewForm } from "../components";
import { useReviewDetails, useReviewActions } from "../hooks";

const EditReview = () => {
  const navigate = useNavigate();
  const { reviewId } = useParams();

  const { review, loading } = useReviewDetails(reviewId);

  const {
    updateReview,
    loading: saving,
  } = useReviewActions();

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

  const initialValues = {
    title: review.title || "",
    comment: review.comment || "",
    rating: review.rating || 0,
  };

  const handleSubmit = async (values) => {
    const success = await updateReview(reviewId, values);

    if (success) {
      navigate(`/reviews/${reviewId}`);
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Edit Review
        </h1>

        <p className="mt-2 text-gray-500">
          Update your review information.
        </p>
      </div>

      {/* Form */}
      <ReviewForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        loading={saving}
      />
    </div>
  );
};

export default EditReview;