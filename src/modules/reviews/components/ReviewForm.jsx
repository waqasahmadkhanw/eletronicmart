import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  MessageSquareQuote,
  Star,
  FileText,
  Send,
  Loader2,
} from "lucide-react";

import { reviewSchema } from "../validators";
import RatingStars from "./RatingStars";

const inputClasses =
  "h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100";

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
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-5">
        <div className="rounded-xl bg-white/20 p-2.5 text-white">
          <MessageSquareQuote size={22} />
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">
            Write a Review
          </h2>

          <p className="text-sm text-blue-100">
            Share your experience with this product
          </p>
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={reviewSchema}
        enableReinitialize
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="space-y-6 p-6">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700"
              >
                <FileText
                  size={16}
                  className="text-blue-600"
                />
                Review Title
              </label>

              <Field
                id="title"
                name="title"
                type="text"
                placeholder="Enter review title"
                className={inputClasses}
              />

              <ErrorMessage
                name="title"
                component="p"
                className="mt-2 text-sm font-medium text-red-500"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Star
                  size={16}
                  className="text-amber-500"
                />
                Rating
              </label>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <RatingStars
                  rating={values.rating}
                  interactive
                  showValue
                  onChange={(value) =>
                    setFieldValue("rating", value)
                  }
                />
              </div>

              <ErrorMessage
                name="rating"
                component="p"
                className="mt-2 text-sm font-medium text-red-500"
              />
            </div>

            {/* Comment */}
            <div>
              <label
                htmlFor="comment"
                className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700"
              >
                <MessageSquareQuote
                  size={16}
                  className="text-blue-600"
                />
                Review
              </label>

              <Field
                as="textarea"
                id="comment"
                name="comment"
                rows={6}
                placeholder="Tell other customers what you liked, what could be improved, and whether you'd recommend this product..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700 shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />

              <ErrorMessage
                name="comment"
                component="p"
                className="mt-2 text-sm font-medium text-red-500"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-8 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />
                    Saving...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Submit Review
                  </>
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReviewForm;