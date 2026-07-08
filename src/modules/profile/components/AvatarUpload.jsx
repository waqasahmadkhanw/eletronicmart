import React, { useState } from "react";

const AvatarUpload = ({ onUpload, loading, currentAvatar }) => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    onUpload(formData);
  };

  return (
    <div className="w-full bg-white rounded-xl shadow p-6 flex flex-col gap-4 items-center">
      <img
        src={currentAvatar || "/default-avatar.png"}
        alt="avatar"
        className="w-24 h-24 rounded-full object-cover border"
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="text-sm"
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Upload Avatar"}
      </button>
    </div>
  );
};

export default AvatarUpload;