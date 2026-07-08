import React from "react";

const ProfileCard = ({ profile }) => {
  return (
    <div className="w-full bg-white rounded-xl shadow p-6 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <img
          src={profile?.avatar || "/default-avatar.png"}
          alt="avatar"
          className="w-16 h-16 rounded-full object-cover border"
        />

        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {profile?.fullName}
          </h2>
          <p className="text-sm text-gray-500">{profile?.email}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
        <div>
          <p className="font-medium text-gray-700">Phone</p>
          <p>{profile?.phone || "N/A"}</p>
        </div>

        <div>
          <p className="font-medium text-gray-700">Address</p>
          <p>{profile?.address || "N/A"}</p>
        </div>

        <div className="col-span-2">
          <p className="font-medium text-gray-700">Bio</p>
          <p>{profile?.bio || "No bio added"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;