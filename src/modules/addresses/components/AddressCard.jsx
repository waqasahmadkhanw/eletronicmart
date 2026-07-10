// modules/addresses/components/AddressCard.jsx

import PropTypes from "prop-types";
import AddressTypeBadge from "./AddressTypeBadge";

const AddressCard = ({
  address,
  onView,
  onEdit,
  onDelete,
  onSetDefault,
}) => {
  if (!address) return null;

  const {
    _id,
    fullName,
    phone,
    addressLine1,
    addressLine2,
    city,
    state,
    country,
    postalCode,
    addressType,
    isDefault,
  } = address;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {fullName}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {phone}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <AddressTypeBadge type={addressType} />

          {isDefault && (
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Default
            </span>
          )}
        </div>
      </div>

      <div className="space-y-1 text-sm text-gray-600">
        <p>{addressLine1}</p>

        {addressLine2 && <p>{addressLine2}</p>}

        <p>
          {city}, {state}
        </p>

        <p>
          {country} - {postalCode}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onView?.(_id)}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          View
        </button>

        <button
          type="button"
          onClick={() => onEdit?.(_id)}
          className="rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-yellow-600"
        >
          Edit
        </button>

        <button
          type="button"
          onClick={() => onDelete?.(_id)}
          className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
        >
          Delete
        </button>

        {!isDefault && (
          <button
            type="button"
            onClick={() => onSetDefault?.(_id)}
            className="rounded-md border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
          >
            Set Default
          </button>
        )}
      </div>
    </div>
  );
};

AddressCard.propTypes = {
  address: PropTypes.object,
  onView: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onSetDefault: PropTypes.func,
};

export default AddressCard;