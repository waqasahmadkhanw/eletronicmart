import { Formik, Form, Field, ErrorMessage } from "formik";
import { reviewSchema } from "../validators";
import RatingStars from "./RatingStars";

const ReviewForm = ({
  initialValues = {
    title: "",
    comment: "",
    rating: 0,
  },
  onSubmit,
  loading = false,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={reviewSchema}
      enableReinitialize
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className="space-y-6 rounded-xl bg-white p-6 shadow">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Review Title
            </label>

            <Field
              id="title"
              name="title"
              type="text"
              placeholder="Enter review title"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />

            <ErrorMessage
              name="title"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Rating
            </label>

            <RatingStars
              rating={values.rating}
              interactive
              onChange={(value) => setFieldValue("rating", value)}
            />

            <ErrorMessage
              name="rating"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          {/* Comment */}
          <div>
            <label
              htmlFor="comment"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Review
            </label>

            <Field
              as="textarea"
              id="comment"
              name="comment"
              rows={5}
              placeholder="Write your review..."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />

            <ErrorMessage
              name="comment"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Saving..." : "Submit Review"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ReviewForm;