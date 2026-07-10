// modules/addresses/store/index.js

// Reducer
export { default as addressReducer } from "./addressSlice";

// Actions
export {
  clearCurrentAddress,
  clearAddressError,
  resetAddressState,
} from "./addressSlice";

// Thunks
export {
  fetchAddresses,
  fetchAddressById,
  createAddress,
  updateAddress,
  deleteAddress,
  setDefaultAddress,
} from "./addressThunks";

// Selectors
export {
  selectAddresses,
  selectCurrentAddress,
  selectAddressLoading,
  selectAddressSuccess,
  selectAddressError,
  selectDefaultAddress,
  selectAddressCount,
} from "./selectors";