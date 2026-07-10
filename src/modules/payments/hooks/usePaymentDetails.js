// modules/payments/hooks/usePaymentDetails.js

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getPaymentByIdThunk,
  clearPayment,
  selectPayment,
  selectPaymentLoading,
  selectPaymentError,
  selectPaymentSuccess,
} from "../store";

const usePaymentDetails = (paymentId) => {
  const dispatch = useDispatch();

  const payment = useSelector(selectPayment);
  const loading = useSelector(selectPaymentLoading);
  const error = useSelector(selectPaymentError);
  const success = useSelector(selectPaymentSuccess);

  useEffect(() => {
    if (paymentId) {
      dispatch(getPaymentByIdThunk(paymentId));
    }

    return () => {
      dispatch(clearPayment());
    };
  }, [dispatch, paymentId]);

  const refreshPayment = () => {
    if (paymentId) {
      dispatch(getPaymentByIdThunk(paymentId));
    }
  };

  return {
    payment,
    loading,
    error,
    success,
    refreshPayment,
  };
};

export default usePaymentDetails;