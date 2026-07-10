import { useDispatch, useSelector } from "react-redux";
import {
  saveShippingAddress,
  getShippingAddress,
  updateShippingAddress,
  getShippingMethods,
  selectShippingAddress,
  selectShippingMethods,
  selectCheckoutLoading,
  selectCheckoutError,
} from "../store";

const useShipping = () => {
  const dispatch = useDispatch();

  const shippingAddress = useSelector(selectShippingAddress);
  const shippingMethods = useSelector(selectShippingMethods);

  const loading = useSelector(selectCheckoutLoading);
  const error = useSelector(selectCheckoutError);

  const saveAddress = (data) => {
    return dispatch(saveShippingAddress(data));
  };

  const fetchAddress = () => {
    return dispatch(getShippingAddress());
  };

  const updateAddress = (id, data) => {
    return dispatch(
      updateShippingAddress({
        id,
        data,
      })
    );
  };

  const fetchShippingMethods = () => {
    return dispatch(getShippingMethods());
  };

  return {
    shippingAddress,
    shippingMethods,

    loading,
    error,

    saveAddress,
    fetchAddress,
    updateAddress,
    fetchShippingMethods,
  };
};

export default useShipping;