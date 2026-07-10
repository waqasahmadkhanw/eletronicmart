// modules/addresses/hooks/useAddressActions.js

import { useDispatch, useSelector } from "react-redux";

import {
  createAddress,
  updateAddress,
  deleteAddress,
  setDefaultAddress,
  resetAddressState,
  selectAddressLoading,
  selectAddressSuccess,
  selectAddressError,
} from "../store";

const useAddressActions = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectAddressLoading);
  const success = useSelector(selectAddressSuccess);
  const error = useSelector(selectAddressError);

  const handleCreateAddress = async (payload) => {
    return dispatch(createAddress(payload)).unwrap();
  };

  const handleUpdateAddress = async (id, payload) => {
    return dispatch(updateAddress({ id, payload })).unwrap();
  };

  const handleDeleteAddress = async (id) => {
    return dispatch(deleteAddress(id)).unwrap();
  };

  const handleSetDefaultAddress = async (id) => {
    return dispatch(setDefaultAddress(id)).unwrap();
  };

  const handleResetState = () => {
    dispatch(resetAddressState());
  };

  return {
    loading,
    success,
    error,

    handleCreateAddress,
    handleUpdateAddress,
    handleDeleteAddress,
    handleSetDefaultAddress,
    handleResetState,
  };
};

export default useAddressActions;