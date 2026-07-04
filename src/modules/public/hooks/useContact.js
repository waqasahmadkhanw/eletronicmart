import { useDispatch, useSelector } from "react-redux";

import { sendContactMessage } from "../store";
import {
  selectContactLoading,
  selectContactSuccess,
  selectError,
} from "../store";

const useContact = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectContactLoading);
  const success = useSelector(selectContactSuccess);
  const error = useSelector(selectError);

  const submitContactForm = async (data) => {
    await dispatch(sendContactMessage(data));
  };

  return {
    loading,
    success,
    error,
    submitContactForm,
  };
};

export default useContact;