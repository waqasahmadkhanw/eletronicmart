import { useSelector, useDispatch } from "react-redux";

import {
  addReview,
  editReview,
  selectReviewLoading,
  selectReviewError,
} from "../store";

const useReviewActions = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectReviewLoading);
  const error = useSelector(selectReviewError);

  const createReview = async (reviewData) => {
    try {
      await dispatch(addReview(reviewData)).unwrap();
      return true;
    } catch {
      return false;
    }
  };

  const updateReview = async (reviewId, reviewData) => {
    try {
      await dispatch(
        editReview({
          reviewId,
          reviewData,
        })
      ).unwrap();

      return true;
    } catch {
      return false;
    }
  };

  return {
    loading,
    error,
    createReview,
    updateReview,
  };
};

export default useReviewActions;