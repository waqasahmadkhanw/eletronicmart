import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchReviewById,
  removeReview,
  selectReview,
  selectReviewLoading,
  selectReviewError,
} from "../store";

const useReviewDetails = (reviewId) => {
  const dispatch = useDispatch();

  const review = useSelector(selectReview);
  const loading = useSelector(selectReviewLoading);
  const error = useSelector(selectReviewError);

  useEffect(() => {
    if (reviewId) {
      dispatch(fetchReviewById(reviewId));
    }
  }, [dispatch, reviewId]);

  const deleteReview = async (id) => {
    return dispatch(removeReview(id)).unwrap();
  };

  return {
    review,
    loading,
    error,
    deleteReview,
    refreshReview: () => dispatch(fetchReviewById(reviewId)),
  };
};

export default useReviewDetails;