import { useNavigate } from "react-router-dom";

import { ReviewForm } from "../components";
import { useReviewActions } from "../hooks";

const CreateReview = () => {
  const navigate = useNavigate();

  const {
    createReview,
    loading,
  } = useReviewActions();

  const initialValues = {
    title: "",
    comment: "",
    rating: 0,
  };

  const handleSubmit = async (values, { resetForm }) => {
    const success = await createReview(values);

    if (success) {
      resetForm();
      navigate("/reviews");
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Create Review
        </h1>

        <p className="mt-2 text-gray-500">
          Submit a new product review.
        </p>
      </div>

      {/* Form */}
      <ReviewForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
};

export default CreateReview;