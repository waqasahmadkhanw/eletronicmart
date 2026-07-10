import api from "@/shared/services/api";

export const getReviewsApi = (params) =>
  api.get("/reviews", { params });

export const getReviewByIdApi = (reviewId) =>
  api.get(`/reviews/${reviewId}`);

export const createReviewApi = (reviewData) =>
  api.post("/reviews", reviewData);

export const updateReviewApi = (reviewId, reviewData) =>
  api.put(`/reviews/${reviewId}`, reviewData);

export const deleteReviewApi = (reviewId) =>
  api.delete(`/reviews/${reviewId}`);