import React from "react";

const ProfileTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { key: "overview", label: "Overview" },
    { key: "edit", label: "Edit Profile" },
    { key: "password", label: "Change Password" },
  ];

  return (
    <div className="w-full bg-white rounded-xl shadow p-3 flex gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`px-4 py-2 text-sm rounded-lg transition ${
            activeTab === tab.key
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ProfileTabs;