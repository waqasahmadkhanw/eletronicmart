import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchCategoryById,
  selectCategory,
  selectCategoryLoading,
  selectCategoryError,
  clearCategory,
} from "../store";

const useCategoryDetails = (categoryId) => {
  const dispatch = useDispatch();

  const category = useSelector(selectCategory);
  const loading = useSelector(selectCategoryLoading);
  const error = useSelector(selectCategoryError);

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchCategoryById(categoryId));
    }

    return () => {
      dispatch(clearCategory());
    };
  }, [dispatch, categoryId]);

  return {
    category,
    loading,
    error,
  };
};

export default useCategoryDetails;