import React from "react";
import UserStatusBadge from "./UserStatusBadge";

 const UserCard = ({
  user,
  onView,
  onEdit,
  onDelete,
}) => {
  if (!user) return null;

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center gap-4 border-b border-gray-100 p-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
          {user.firstName?.charAt(0)}
          {user.lastName?.charAt(0)}
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">
            {user.firstName} {user.lastName}
          </h3>

          <p className="text-sm text-gray-500">
            {user.email}
          </p>

          <div className="mt-2">
            <UserStatusBadge status={user.status} />
          </div>
        </div>
      </div>

      <div className="space-y-3 p-6">
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">
            Phone
          </span>

          <span className="text-gray-900">
            {user.phone}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-600">
            Role
          </span>

          <span className="text-gray-900">
            {user.role}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-600">
            Status
          </span>

          <UserStatusBadge status={user.status} />
        </div>
      </div>

      <div className="flex gap-3 border-t border-gray-100 p-6">
        <button
          onClick={() => onView?.(user)}
          className="flex-1 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          View
        </button>

        <button
          onClick={() => onEdit?.(user)}
          className="flex-1 rounded-lg bg-amber-500 px-4 py-2 font-medium text-white transition hover:bg-amber-600"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete?.(user.id)}
          className="flex-1 rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default UserCard