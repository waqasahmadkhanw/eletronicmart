import {
  Filter,
  Star,
  BadgeCheck,
  ArrowUpDown,
} from "lucide-react";

const selectClasses =
  "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 shadow-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

const ReviewFilter = ({
  rating = "",
  status = "",
  sort = "",
  onRatingChange,
  onStatusChange,
  onSortChange,
}) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-5">
        <div className="rounded-xl bg-white/20 p-2.5 text-white">
          <Filter size={22} />
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">
            Review Filters
          </h2>

          <p className="text-sm text-blue-100">
            Filter and organize customer reviews
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 gap-5 p-6 md:grid-cols-2 xl:grid-cols-3">
        {/* Rating */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Star
              size={16}
              className="text-amber-500"
            />
            Rating
          </label>

          <select
            value={rating}
            onChange={(e) =>
              onRatingChange?.(e.target.value)
            }
            className={selectClasses}
          >
            <option value="">All Ratings</option>
            <option value="5">
              ⭐⭐⭐⭐⭐ (5 Stars)
            </option>
            <option value="4">
              ⭐⭐⭐⭐ & Up
            </option>
            <option value="3">
              ⭐⭐⭐ & Up
            </option>
            <option value="2">
              ⭐⭐ & Up
            </option>
            <option value="1">
              ⭐ & Up
            </option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <BadgeCheck
              size={16}
              className="text-emerald-600"
            />
            Status
          </label>

          <select
            value={status}
            onChange={(e) =>
              onStatusChange?.(e.target.value)
            }
            className={selectClasses}
          >
            <option value="">
              All Reviews
            </option>
            <option value="approved">
              Approved
            </option>
            <option value="pending">
              Pending
            </option>
            <option value="rejected">
              Rejected
            </option>
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <ArrowUpDown
              size={16}
              className="text-blue-600"
            />
            Sort By
          </label>

          <select
            value={sort}
            onChange={(e) =>
              onSortChange?.(e.target.value)
            }
            className={selectClasses}
          >
            <option value="">
              Newest First
            </option>
            <option value="oldest">
              Oldest First
            </option>
            <option value="highest-rating">
              Highest Rating
            </option>
            <option value="lowest-rating">
              Lowest Rating
            </option>
            <option value="a-z">
              Title (A-Z)
            </option>
            <option value="z-a">
              Title (Z-A)
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ReviewFilter;