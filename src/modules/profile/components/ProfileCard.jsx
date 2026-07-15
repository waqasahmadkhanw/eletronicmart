import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  FileText,
  User,
} from "lucide-react";

const ProfileCard = ({ profile }) => {
  const initials =
    profile?.fullName
      ?.split(" ")
      ?.map((name) => name[0])
      ?.join("")
      ?.slice(0, 2)
      ?.toUpperCase() || "U";

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
      {/* Cover */}
      <div className="relative h-32 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
        <div className="absolute -bottom-12 left-6">
          {profile?.avatar ? (
            <img
              src={profile.avatar}
              alt={profile.fullName}
              className="h-24 w-24 rounded-3xl border-4 border-white object-cover shadow-lg"
            />
          ) : (
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl border-4 border-white bg-white text-3xl font-bold text-blue-600 shadow-lg">
              {initials}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 pt-16">
        {/* User Info */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800">
            {profile?.fullName || "Unknown User"}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {profile?.email}
          </p>
        </div>

        {/* Details */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <div className="rounded-xl bg-blue-100 p-2">
              <Phone
                size={18}
                className="text-blue-600"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Phone
              </p>

              <p className="mt-1 text-sm font-medium text-slate-700">
                {profile?.phone || "Not Available"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <div className="rounded-xl bg-emerald-100 p-2">
              <MapPin
                size={18}
                className="text-emerald-600"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Address
              </p>

              <p className="mt-1 text-sm font-medium text-slate-700">
                {profile?.address || "Not Available"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 sm:col-span-2">
            <div className="rounded-xl bg-violet-100 p-2">
              <FileText
                size={18}
                className="text-violet-600"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Bio
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                {profile?.bio ||
                  "No bio has been added yet."}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-2">
              <User
                size={18}
                className="text-blue-600"
              />
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Account Owner
              </p>

              <p className="font-semibold text-slate-700">
                {profile?.fullName || "Unknown"}
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 sm:flex">
            ● Active
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;