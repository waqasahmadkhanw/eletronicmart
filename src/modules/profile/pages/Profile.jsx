import React, { useState } from "react";

import useProfile from "../hooks/useProfile";
import ProfileHeader from "../components/ProfileHeader";
import ProfileCard from "../components/ProfileCard";
import ProfileTabs from "../components/ProfileTabs";

import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";

const Profile = () => {
  const { profile, loading } = useProfile();
  const [activeTab, setActiveTab] = useState("overview");

  if (loading) {
    return (
      <div className="p-6 text-gray-500">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <ProfileHeader profile={profile} />
      <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "overview" && (
        <ProfileCard profile={profile} />
      )}

      {activeTab === "edit" && (
        <EditProfile profile={profile} />
      )}

      {activeTab === "password" && (
        <ChangePassword />
      )}
    </div>
  );
};

export default Profile;