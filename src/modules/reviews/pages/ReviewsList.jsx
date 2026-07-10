import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useReviews } from "../hooks";
import {
  ReviewTable,
  ReviewSearch,
  ReviewFilter,
} from "../components";

const ReviewsList = () => {
  const navigate = useNavigate();

  const {
    reviews,
    loading,
    deleteReview,
  } = useReviews();

  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("");

  const filteredReviews = reviews.filter((review) => {
    const keyword = search.toLowerCase();

    return (
      review.title?.toLowerCase().includes(keyword) ||
      review.comment?.toLowerCase().includes(keyword) ||
      review.user?.name?.toLowerCase().includes(keyword)
    );
  });

  const handleView = (review) => {
    navigate(`/reviews/${review._id}`);
  };

  const handleEdit = (review) => {
    navigate(`/reviews/${review._id}/edit`);
  };

  const handleDelete = async (reviewId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this review?"
    );

    if (!confirmed) return;

    await deleteReview(reviewId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Reviews
          </h1>

          <p className="mt-1 text-gray-500">
            Manage product reviews.
          </p>
        </div>

        <button
          onClick={() => navigate("/reviews/create")}
          className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
        >
          Add Review
        </button>
      </div>

      {/* Search */}
      <ReviewSearch
        value={search}
        onChange={setSearch}
      />

      {/* Filters */}
      <ReviewFilter
        rating={rating}
        status={status}
        sort={sort}
        onRatingChange={setRating}
        onStatusChange={setStatus}
        onSortChange={setSort}
      />

      {/* Table */}
      {loading ? (
        <div className="rounded-lg bg-white p-10 text-center shadow">
          Loading reviews...
        </div>
      ) : (
        <ReviewTable
          reviews={filteredReviews}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default ReviewsList;