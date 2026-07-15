import {
  CalendarDays,
  Eye,
  Pencil,
  Trash2,
  MessageSquareQuote,
  Package,
  User,
} from "lucide-react";

import RatingStars from "./RatingStars";

const ReviewCard = ({
  review,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl">
      {/* Header */}
      <div className="border-b border-slate-100 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur">
              <MessageSquareQuote size={24} />
            </div>

            <h3 className="truncate text-xl font-bold text-white">
              {review?.title || "Untitled Review"}
            </h3>

            <div className="mt-2 flex items-center gap-2 text-sm text-blue-100">
              <User size={15} />
              <span>
                {review?.user?.name || "Anonymous"}
              </span>
            </div>
          </div>

          <div className="rounded-2xl bg-white px-3 py-2 shadow-md">
            <RatingStars
              rating={review?.rating || 0}
              size={18}
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-5 p-6">
        <p className="line-clamp-4 text-sm leading-7 text-slate-600">
          {review?.comment}
        </p>

        {review?.product?.name && (
          <div className="flex items-center gap-2">
            <Package
              size={16}
              className="text-indigo-600"
            />

            <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1.5 text-sm font-semibold text-indigo-700">
              {review.product.name}
            </span>
          </div>
        )}

        <div className="flex items-center gap-2 text-sm text-slate-500">
          <CalendarDays size={16} />

          <span>
            {review?.createdAt
              ? new Date(
                  review.createdAt
                ).toLocaleDateString()
              : "N/A"}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-6 py-5">
        <div className="text-sm font-medium text-slate-500">
          Review Rating:
          <span className="ml-2 font-bold text-amber-600">
            {review?.rating || 0}/5
          </span>
        </div>

        <div className="flex gap-2">
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
              onDelete?.(review._id || review.id)
            }
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;