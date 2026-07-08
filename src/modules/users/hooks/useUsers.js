import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "../store/userThunks";
import {
  selectUsers,
  selectUsersLoading,
  selectUsersError,
} from "../store/selectors";

const useUsers = (params = {}) => {
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);
  const loading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);

  useEffect(() => {
    dispatch(fetchUsers(params));
  }, [dispatch]);

  const refetch = () => dispatch(fetchUsers(params));

  return {
    users,
    loading,
    error,
    refetch,
  };
};

export default useUsers;