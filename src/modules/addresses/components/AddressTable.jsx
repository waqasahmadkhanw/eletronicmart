// modules/addresses/components/AddressTable.jsx

import PropTypes from "prop-types";

const AddressTable = ({
  addresses = [],
  onView,
  onEdit,
  onDelete,
  onSetDefault,
}) => {
  if (!addresses.length) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-8 text-center text-gray-500">
        No addresses found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Name
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Address
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              City
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Phone
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
              Type
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
              Default
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {addresses.map((address) => (
            <tr key={address._id} className="hover:bg-gray-50">
              <td className="px-4 py-3">{address.fullName}</td>

              <td className="px-4 py-3">
                {address.addressLine1}
                {address.addressLine2
                  ? `, ${address.addressLine2}`
                  : ""}
              </td>

              <td className="px-4 py-3">{address.city}</td>

              <td className="px-4 py-3">{address.phone}</td>

              <td className="px-4 py-3 text-center">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                  {address.addressType}
                </span>
              </td>

              <td className="px-4 py-3 text-center">
                {address.isDefault ? (
                  <span className="font-semibold text-green-600">Yes</span>
                ) : (
                  <button
                    onClick={() => onSetDefault?.(address._id)}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Set Default
                  </button>
                )}
              </td>

              <td className="px-4 py-3">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => onView?.(address._id)}
                    className="rounded bg-sky-500 px-3 py-1 text-sm text-white hover:bg-sky-600"
                  >
                    View
                  </button>

                  <button
                    onClick={() => onEdit?.(address._id)}
                    className="rounded bg-amber-500 px-3 py-1 text-sm text-white hover:bg-amber-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete?.(address._id)}
                    className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

AddressTable.propTypes = {
  addresses: PropTypes.array,
  onView: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onSetDefault: PropTypes.func,
};

export default AddressTable;