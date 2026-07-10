// modules/addresses/store/selectors.js

export const selectAddresses = (state) => state.addresses.addresses;

export const selectCurrentAddress = (state) =>
  state.addresses.currentAddress;

export const selectAddressLoading = (state) =>
  state.addresses.loading;

export const selectAddressSuccess = (state) =>
  state.addresses.success;

export const selectAddressError = (state) =>
  state.addresses.error;

export const selectDefaultAddress = (state) =>
  state.addresses.addresses.find((address) => address.isDefault) || null;

export const selectAddressCount = (state) =>
  state.addresses.addresses.length;