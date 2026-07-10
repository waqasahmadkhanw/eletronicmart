// modules/addresses/hooks/useAddresses.js

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchAddresses,
  selectAddresses,
  selectAddressLoading,
  selectAddressError,
} from "../store";

const useAddresses = (params = {}) => {
  const dispatch = useDispatch();

  const addresses = useSelector(selectAddresses);
  const loading = useSelector(selectAddressLoading);
  const error = useSelector(selectAddressError);

  useEffect(() => {
    dispatch(fetchAddresses(params));
  }, [dispatch]);

  const refetchAddresses = (queryParams = params) => {
    return dispatch(fetchAddresses(queryParams));
  };

  return {
    addresses,
    loading,
    error,
    refetchAddresses,
  };
};

export default useAddresses;