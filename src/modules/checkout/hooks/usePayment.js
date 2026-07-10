import { useDispatch, useSelector } from "react-redux";
import {
  savePaymentMethod,
  getPaymentMethods,
  selectPaymentMethods,
  selectCheckoutLoading,
  selectCheckoutError,
} from "../store";

const usePayment = () => {
  const dispatch = useDispatch();

  const paymentMethods = useSelector(selectPaymentMethods);

  const loading = useSelector(selectCheckoutLoading);
  const error = useSelector(selectCheckoutError);

  const saveMethod = (data) => {
    return dispatch(savePaymentMethod(data));
  };

  const fetchPaymentMethods = () => {
    return dispatch(getPaymentMethods());
  };

  return {
    paymentMethods,

    loading,
    error,

    saveMethod,
    fetchPaymentMethods,
  };
};

export default usePayment;