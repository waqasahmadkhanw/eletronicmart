import React from "react";
import {
  Loader2,
  Users,
  Mail,
  Phone,
  Shield,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";
import UserStatusBadge from "./UserStatusBadge";

const UserTable = ({
  users = [],
  loading = false,
  onView,
  onEdit,
  onDelete,
}) => {
  if (loading) {
    return (
      <div className="flex h-80 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="rounded-full bg-blue-100 p-4">
          <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
        </div>

        <h3 className="mt-5 text-xl font-bold text-slate-800">
          Loading Users...
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Please wait while we fetch user data.
        </p>
      </div>
    );
  }

  if (!users.length) {
    return (
      <div className="flex h-80 flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white shadow-sm">
        <div className="rounded-full bg-slate-100 p-5">
          <Users className="h-10 w-10 text-slate-400" />
        </div>

        <h3 className="mt-5 text-xl font-bold text-slate-800">
          No Users Found
        </h3>

        <p className="mt-2 max-w-sm text-center text-sm text-slate-500">
          There are currently no users available.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-5">
        <div>
          <h2 className="text-xl font-bold text-white">
            User Management
          </h2>

          <p className="mt-1 text-sm text-blue-100">
            View and manage all registered users
          </p>
        </div>

        <div className="rounded-xl bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
          {users.length} Users
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="min-w-[1100px] w-full">
          <thead className="bg-slate-50">
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                User
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Email
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Phone
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Role
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Status
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user._id || user.id}
                className="border-b border-slate-100 transition-all duration-300 hover:bg-blue-50/40"
              >
                {/* User */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-bold uppercase text-white shadow-md">
                      {user.firstName?.charAt(0)}
                      {user.lastName?.charAt(0)}
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-800">
                        {user.firstName} {user.lastName}
                      </h3>

                      <p className="text-sm text-slate-500">
                        ID: {user._id || user.id}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Email */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Mail
                      size={16}
                      className="text-blue-500"
                    />
                    {user.email}
                  </div>
                </td>

                {/* Phone */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Phone
                      size={16}
                      className="text-emerald-500"
                    />
                    {user.phone || "-"}
                  </div>
                </td>

                {/* Role */}
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1.5 text-sm font-semibold text-blue-700">
                    <Shield size={14} />
                    {user.role}
                  </span>
                </td>

                {/* Status */}
                <td className="px-6 py-5">
                  <UserStatusBadge status={user.status} />
                </td>

                {/* Actions */}
                <td className="px-6 py-5">
                  <div className="flex justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => onView?.(user)}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={() => onEdit?.(user)}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-lg"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        onDelete?.(
                          user._id || user.id
                        )
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;