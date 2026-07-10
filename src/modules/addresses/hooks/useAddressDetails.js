// modules/addresses/hooks/useAddressDetails.js

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchAddressById,
  clearCurrentAddress,
  selectCurrentAddress,
  selectAddressLoading,
  selectAddressError,
} from "../store";

const useAddressDetails = (addressId) => {
  const dispatch = useDispatch();

  const currentAddress = useSelector(selectCurrentAddress);
  const loading = useSelector(selectAddressLoading);
  const error = useSelector(selectAddressError);

  useEffect(() => {
    if (addressId) {
      dispatch(fetchAddressById(addressId));
    }

    return () => {
      dispatch(clearCurrentAddress());
    };
  }, [dispatch, addressId]);

  const refetchAddress = () => {
    if (addressId) {
      dispatch(fetchAddressById(addressId));
    }
  };

  return {
    currentAddress,
    loading,
    error,
    refetchAddress,
  };
};

export default useAddressDetails;