import React from "react";
import {
  Mail,
  ShieldCheck,
  User,
  Camera,
} from "lucide-react";

const ProfileHeader = ({ profile }) => {
  const initials =
    profile?.fullName
      ?.split(" ")
      ?.map((word) => word[0])
      ?.join("")
      ?.slice(0, 2)
      ?.toUpperCase() || "U";

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Cover */}
      <div className="relative h-40 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
        {/* Decorative Blurs */}
        <div className="absolute -left-12 top-6 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-violet-400/20 blur-3xl" />

        {/* Avatar */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="group relative">
            {profile?.avatar ? (
              <img
                src={profile.avatar}
                alt={profile.fullName}
                className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl"
              />
            ) : (
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-white text-3xl font-bold text-blue-600 shadow-xl">
                {initials}
              </div>
            )}

            <button
              type="button"
              className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-700"
            >
              <Camera size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-8 pt-20 text-center">
        <h1 className="text-3xl font-bold text-slate-800">
          {profile?.fullName || "User Profile"}
        </h1>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-blue-500" />
            <span>{profile?.email || "No Email"}</span>
          </div>

          <span className="hidden h-5 w-px bg-slate-300 sm:block" />

          <div className="flex items-center gap-2">
            <ShieldCheck
              size={16}
              className="text-emerald-500"
            />
            <span className="font-medium text-slate-700">
              {profile?.role || "User"}
            </span>
          </div>
        </div>

        {/* Status */}
        <div className="mt-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
            Active Account
          </span>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div>
            <p className="text-2xl font-bold text-slate-800">
              {profile?.orders ?? 0}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Orders
            </p>
          </div>

          <div className="border-x border-slate-200">
            <p className="text-2xl font-bold text-slate-800">
              {profile?.wishlist ?? 0}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Wishlist
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-slate-800">
              {profile?.reviews ?? 0}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;