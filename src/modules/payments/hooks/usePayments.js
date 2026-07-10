// modules/payments/hooks/usePayments.js

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getPaymentsThunk,
  selectPayments,
  selectPaymentLoading,
  selectPaymentError,
  selectPaymentSuccess,
} from "../store";

const usePayments = (params = {}) => {
  const dispatch = useDispatch();

  const payments = useSelector(selectPayments);
  const loading = useSelector(selectPaymentLoading);
  const error = useSelector(selectPaymentError);
  const success = useSelector(selectPaymentSuccess);

  useEffect(() => {
    dispatch(getPaymentsThunk(params));
  }, [dispatch, params]);

  const refreshPayments = () => {
    dispatch(getPaymentsThunk(params));
  };

  return {
    payments,
    loading,
    error,
    success,
    refreshPayments,
  };
};

export default usePayments;