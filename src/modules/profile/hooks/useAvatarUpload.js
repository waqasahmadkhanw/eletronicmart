import { useDispatch, useSelector } from "react-redux";

import { uploadAvatar } from "../store/profileThunks";
import {
  selectAvatarLoading,
  selectProfileError,
} from "../store/selectors";

const useAvatarUpload = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectAvatarLoading);
  const error = useSelector(selectProfileError);

  const handleAvatarUpload = async (formData) => {
    return await dispatch(uploadAvatar(formData));
  };

  return {
    loading,
    error,
    uploadAvatar: handleAvatarUpload,
  };
};

export default useAvatarUpload;