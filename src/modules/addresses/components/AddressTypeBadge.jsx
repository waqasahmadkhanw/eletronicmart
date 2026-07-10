// modules/addresses/components/AddressTypeBadge.jsx

import PropTypes from "prop-types";

const badgeVariants = {
  Home: "bg-green-100 text-green-700",
  Office: "bg-blue-100 text-blue-700",
  Other: "bg-gray-100 text-gray-700",
};

const AddressTypeBadge = ({ type = "Other" }) => {
  const badgeClass =
    badgeVariants[type] || badgeVariants.Other;

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}
    >
      {type}
    </span>
  );
};

AddressTypeBadge.propTypes = {
  type: PropTypes.oneOf(["Home", "Office", "Other"]),
};

export default AddressTypeBadge;