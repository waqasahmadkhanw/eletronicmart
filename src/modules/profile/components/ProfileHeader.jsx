import React from "react";

const ProfileHeader = ({ profile }) => {
  return (
    <div className="w-full bg-white rounded-xl shadow p-5 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-semibold text-gray-800">
          {profile?.fullName || "User Profile"}
        </h1>
        <p className="text-sm text-gray-500">{profile?.email}</p>
      </div>

      <div className="text-sm text-gray-600">
        Role:{" "}
        <span className="font-medium text-gray-800">
          {profile?.role || "User"}
        </span>
      </div>
    </div>
  );
};

export default ProfileHeader;