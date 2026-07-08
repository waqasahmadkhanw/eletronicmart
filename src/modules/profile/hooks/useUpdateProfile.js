import { useDispatch, useSelector } from "react-redux";

import { updateProfile } from "../store/profileThunks";
import {
  selectUpdateProfileLoading,
  selectProfileSuccess,
  selectProfileError,
} from "../store/selectors";

const useUpdateProfile = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectUpdateProfileLoading);
  const success = useSelector(selectProfileSuccess);
  const error = useSelector(selectProfileError);

  const handleUpdateProfile = async (profileData) => {
    return await dispatch(updateProfile(profileData));
  };

  return {
    loading,
    success,
    error,
    updateProfile: handleUpdateProfile,
  };
};

export default useUpdateProfile;