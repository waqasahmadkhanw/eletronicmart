import { useDispatch, useSelector } from "react-redux";

import {
  createUser,
  updateUser,
  deleteUser,
} from "../store/userThunks";

import {
  selectUsersLoading,
  selectUsersError,
} from "../store/selectors";

const useUserActions = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);

  const addUser = (data) => dispatch(createUser(data));

  const editUser = (id, data) =>
    dispatch(updateUser({ id, data }));

  const removeUser = (id) =>
    dispatch(deleteUser(id));

  return {
    loading,
    error,
    addUser,
    editUser,
    removeUser,
  };
};

export default useUserActions;