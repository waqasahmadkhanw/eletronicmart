// modules/addresses/components/AddressSelector.jsx

import PropTypes from "prop-types";

const AddressSelector = ({
  addresses = [],
  selectedAddress = "",
  onChange,
  label = "Select Address",
}) => {
  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <select
        value={selectedAddress}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      >
        <option value="">Choose an address</option>

        {addresses.map((address) => (
          <option key={address._id} value={address._id}>
            {address.fullName} — {address.addressLine1}, {address.city}
            {address.isDefault ? " (Default)" : ""}
          </option>
        ))}
      </select>
    </div>
  );
};

AddressSelector.propTypes = {
  addresses: PropTypes.array,
  selectedAddress: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  label: PropTypes.string,
};

export default AddressSelector;