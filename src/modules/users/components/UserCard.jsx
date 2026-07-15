import React from "react";
import {
  Mail,
  Phone,
  Shield,
  Eye,
  Pencil,
  Trash2,
  User,
} from "lucide-react";
import UserStatusBadge from "./UserStatusBadge";

const UserCard = ({
  user,
  onView,
  onEdit,
  onDelete,
}) => {
  if (!user) return null;

  const initials = `${user.firstName?.charAt(0) || ""}${
    user.lastName?.charAt(0) || ""
  }`;

  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-6">
        {/* Background Blur */}
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

        <div className="relative flex items-center gap-4">
          {/* Avatar */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-xl font-bold uppercase text-white backdrop-blur">
            {initials || <User size={28} />}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="truncate text-xl font-bold text-white">
              {user.firstName} {user.lastName}
            </h3>

            <div className="mt-1 flex items-center gap-2 text-blue-100">
              <Mail size={15} />
              <p className="truncate text-sm">
                {user.email}
              </p>
            </div>

            <div className="mt-4">
              <UserStatusBadge
                status={user.status}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
          <div className="flex items-center gap-2 text-slate-500">
            <Phone size={18} />
            <span className="text-sm font-medium">
              Phone
            </span>
          </div>

          <span className="text-sm font-semibold text-slate-800">
            {user.phone || "-"}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
          <div className="flex items-center gap-2 text-slate-500">
            <Shield size={18} />
            <span className="text-sm font-medium">
              Role
            </span>
          </div>

          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold capitalize text-blue-700">
            {user.role}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
          <span className="text-sm font-medium text-slate-500">
            Account Status
          </span>

          <UserStatusBadge
            status={user.status}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-1 gap-3 border-t border-slate-100 p-6 sm:grid-cols-3">
        <button
          type="button"
          onClick={() => onView?.(user)}
          className="flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95"
        >
          <Eye size={17} />
          View
        </button>

        <button
          type="button"
          onClick={() => onEdit?.(user)}
          className="flex h-11 items-center justify-center gap-2 rounded-xl bg-amber-500 text-sm font-semibold text-white transition-all duration-300 hover:bg-amber-600 hover:shadow-lg active:scale-95"
        >
          <Pencil size={17} />
          Edit
        </button>

        <button
          type="button"
          onClick={() =>
            onDelete?.(user._id || user.id)
          }
          className="flex h-11 items-center justify-center gap-2 rounded-xl bg-red-600 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg active:scale-95"
        >
          <Trash2 size={17} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;