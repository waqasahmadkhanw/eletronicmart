import React from "react";
import {
  Eye,
  Pencil,
  Trash2,
  MessageSquareQuote,
  Package,
  User,
  CalendarDays,
  Star,
} from "lucide-react";

import RatingStars from "./RatingStars";

const ReviewTable = ({
  reviews = [],
  onView,
  onEdit,
  onDelete,
}) => {
  if (!reviews.length) {
    return (
      <div className="flex h-80 flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white shadow-sm">
        <div className="rounded-full bg-slate-100 p-5">
          <MessageSquareQuote
            size={42}
            className="text-slate-400"
          />
        </div>

        <h3 className="mt-5 text-xl font-bold text-slate-800">
          No Reviews Found
        </h3>

        <p className="mt-2 max-w-sm text-center text-sm text-slate-500">
          Customer reviews will appear here once they
          are submitted.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-5">
        <div>
          <h2 className="text-xl font-bold text-white">
            Customer Reviews
          </h2>

          <p className="mt-1 text-sm text-blue-100">
            Manage customer feedback and ratings
          </p>
        </div>

        <div className="rounded-xl bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
          {reviews.length} Reviews
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[1200px] w-full">
          <thead className="bg-slate-50">
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Review
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Product
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Customer
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Rating
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Date
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {reviews.map((review) => (
              <tr
                key={review._id || review.id}
                className="border-b border-slate-100 transition-all duration-300 hover:bg-blue-50/40"
              >
                {/* Review */}
                <td className="px-6 py-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                      <MessageSquareQuote
                        size={22}
                        className="text-blue-600"
                      />
                    </div>

                    <div className="max-w-xs">
                      <h3 className="font-semibold text-slate-800">
                        {review.title}
                      </h3>

                      <p className="mt-1 line-clamp-2 text-sm text-slate-500">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Product */}
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1.5 text-sm font-medium text-indigo-700">
                    <Package size={14} />
                    {review.product?.name || "-"}
                  </span>
                </td>

                {/* Customer */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <User
                      size={16}
                      className="text-slate-400"
                    />

                    <span className="font-medium text-slate-700">
                      {review.user?.name ||
                        "Anonymous"}
                    </span>
                  </div>
                </td>

                {/* Rating */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <RatingStars
                      rating={review.rating}
                      size={18}
                    />

                    <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
                      <Star
                        size={12}
                        className="mr-1 inline fill-current"
                      />
                      {review.rating}
                    </span>
                  </div>
                </td>

                {/* Date */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CalendarDays size={16} />

                    {review.createdAt
                      ? new Date(
                          review.createdAt
                        ).toLocaleDateString()
                      : "-"}
                  </div>
                </td>

                {/* Actions */}
                <td className="px-6 py-5">
                  <div className="flex justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => onView?.(review)}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={() => onEdit?.(review)}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-lg"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        onDelete?.(
                          review._id || review.id
                        )
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewTable;