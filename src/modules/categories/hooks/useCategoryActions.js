import { useDispatch } from "react-redux";

import {
  addCategory,
  editCategory,
  removeCategory,
  changeCategoryStatus,
} from "../store";

const useCategoryActions = () => {
  const dispatch = useDispatch();

  const createNewCategory = (categoryData) => {
    return dispatch(addCategory(categoryData));
  };

  const updateExistingCategory = (categoryId, categoryData) => {
    return dispatch(
      editCategory({
        categoryId,
        categoryData,
      })
    );
  };

  const deleteExistingCategory = (categoryId) => {
    return dispatch(removeCategory(categoryId));
  };

  const updateStatus = (categoryId, status) => {
    return dispatch(
      changeCategoryStatus({
        categoryId,
        status,
      })
    );
  };

  return {
    createNewCategory,
    updateExistingCategory,
    deleteExistingCategory,
    updateStatus,
  };
};

export default useCategoryActions;