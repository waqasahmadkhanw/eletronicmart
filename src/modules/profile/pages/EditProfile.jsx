import React from "react";

import useUpdateProfile from "../hooks/useUpdateProfile";
import useAvatarUpload from "../hooks/useAvatarUpload";

import ProfileForm from "../components/ProfileForm";
import AvatarUpload from "../components/AvatarUpload";

const EditProfile = ({ profile }) => {
  const { updateProfile, loading } = useUpdateProfile();
  const { uploadAvatar, loading: avatarLoading } = useAvatarUpload();

  return (
    <div className="space-y-6">
      {/* Avatar Upload */}
      <AvatarUpload
        currentAvatar={profile?.avatar}
        onUpload={uploadAvatar}
        loading={avatarLoading}
      />

      {/* Profile Form */}
      <ProfileForm
        initialValues={profile}
        onSubmit={updateProfile}
        loading={loading}
      />
    </div>
  );
};

export default EditProfile;