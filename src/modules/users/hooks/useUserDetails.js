import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserById } from "../store/userThunks";
import {
  selectSelectedUser,
  selectUsersLoading,
  selectUsersError,
} from "../store/selectors";

const useUserDetails = (id) => {
  const dispatch = useDispatch();

  const user = useSelector(selectSelectedUser);
  const loading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);

  useEffect(() => {
    if (id) {
      dispatch(fetchUserById(id));
    }
  }, [dispatch, id]);

  const refetch = () => {
    if (id) {
      dispatch(fetchUserById(id));
    }
  };

  return {
    user,
    loading,
    error,
    refetch,
  };
};

export default useUserDetails;