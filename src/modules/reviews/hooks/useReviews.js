import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchReviews,
  removeReview,
  selectReviews,
  selectReviewLoading,
  selectReviewError,
} from "../store";

const useReviews = (params = {}) => {
  const dispatch = useDispatch();

  const reviews = useSelector(selectReviews);
  const loading = useSelector(selectReviewLoading);
  const error = useSelector(selectReviewError);

  useEffect(() => {
    dispatch(fetchReviews(params));
  }, [dispatch]);

  const deleteReview = async (reviewId) => {
    return dispatch(removeReview(reviewId)).unwrap();
  };

  return {
    reviews,
    loading,
    error,
    deleteReview,
    refreshReviews: () => dispatch(fetchReviews(params)),
  };
};

export default useReviews;