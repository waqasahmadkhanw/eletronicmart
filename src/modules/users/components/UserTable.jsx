import React from "react";

const UserTable = ({
  users = [],
  loading = false,
  onView,
  onEdit,
  onDelete,
}) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-10">
        <p className="text-gray-500">Loading users...</p>
      </div>
    );
  }

  if (!users.length) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center">
        <p className="text-gray-500">No users found.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Name
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold">
              Email
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold">
              Phone
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold">
              Role
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold">
              Status
            </th>

            <th className="px-4 py-3 text-center text-sm font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-t hover:bg-gray-50"
            >
              <td className="px-4 py-3">
                {user.firstName} {user.lastName}
              </td>

              <td className="px-4 py-3">
                {user.email}
              </td>

              <td className="px-4 py-3">
                {user.phone}
              </td>

              <td className="px-4 py-3">
                {user.role}
              </td>

              <td className="px-4 py-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    user.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {user.status}
                </span>
              </td>

              <td className="px-4 py-3">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => onView(user)}
                    className="rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600"
                  >
                    View
                  </button>

                  <button
                    onClick={() => onEdit(user)}
                    className="rounded bg-yellow-500 px-3 py-1 text-sm text-white hover:bg-yellow-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(user.id)}
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

export default UserTable;