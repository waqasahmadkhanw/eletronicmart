const ReviewFilter = ({
  rating = "",
  status = "",
  sort = "",
  onRatingChange,
  onStatusChange,
  onSortChange,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-4 rounded-lg bg-white p-4 shadow-sm">
      {/* Rating Filter */}
      <div className="min-w-[180px]">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Rating
        </label>

        <select
          value={rating}
          onChange={(e) => onRatingChange?.(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          <option value="">All Ratings</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars & Up</option>
          <option value="3">3 Stars & Up</option>
          <option value="2">2 Stars & Up</option>
          <option value="1">1 Star & Up</option>
        </select>
      </div>

      {/* Status Filter */}
      <div className="min-w-[180px]">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Status
        </label>

        <select
          value={status}
          onChange={(e) => onStatusChange?.(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          <option value="">All Reviews</option>
          <option value="approved">Approved</option>
          <option value="pending">Pending</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {/* Sort Filter */}
      <div className="min-w-[180px]">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Sort By
        </label>

        <select
          value={sort}
          onChange={(e) => onSortChange?.(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          <option value="">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="highest-rating">Highest Rating</option>
          <option value="lowest-rating">Lowest Rating</option>
          <option value="a-z">Title (A-Z)</option>
          <option value="z-a">Title (Z-A)</option>
        </select>
      </div>
    </div>
  );
};

export default ReviewFilter;