import {
  getReviewsApi,
  getReviewByIdApi,
  createReviewApi,
  updateReviewApi,
  deleteReviewApi,
} from "./reviewApi";

export const getReviews = async (params) => {
  const { data } = await getReviewsApi(params);
  return data;
};

export const getReviewById = async (reviewId) => {
  const { data } = await getReviewByIdApi(reviewId);
  return data;
};

export const createReview = async (reviewData) => {
  const { data } = await createReviewApi(reviewData);
  return data;
};

export const updateReview = async (reviewId, reviewData) => {
  const { data } = await updateReviewApi(reviewId, reviewData);
  return data;
};

export const deleteReview = async (reviewId) => {
  const { data } = await deleteReviewApi(reviewId);
  return data;
};