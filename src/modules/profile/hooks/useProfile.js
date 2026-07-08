import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProfile } from "../store/profileThunks";
import {
  selectProfile,
  selectProfileLoading,
  selectProfileError,
} from "../store/selectors";

const useProfile = () => {
  const dispatch = useDispatch();

  const profile = useSelector(selectProfile);
  const loading = useSelector(selectProfileLoading);
  const error = useSelector(selectProfileError);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return {
    profile,
    loading,
    error,
    refetchProfile: () => dispatch(getProfile()),
  };
};

export default useProfile;