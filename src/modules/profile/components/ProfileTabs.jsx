import React from "react";
import {
  LayoutDashboard,
  UserCog,
  KeyRound,
} from "lucide-react";

const tabs = [
  {
    key: "overview",
    label: "Overview",
    icon: LayoutDashboard,
  },
  {
    key: "edit",
    label: "Edit Profile",
    icon: UserCog,
  },
  {
    key: "password",
    label: "Change Password",
    icon: KeyRound,
  },
];

const ProfileTabs = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`group relative flex flex-1 items-center justify-center gap-3 rounded-2xl px-5 py-4 text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-lg"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <Icon
                size={18}
                className={`transition-transform duration-300 ${
                  isActive
                    ? "scale-110"
                    : "group-hover:scale-110"
                }`}
              />

              <span>{tab.label}</span>

              {isActive && (
                <span className="absolute inset-x-6 -bottom-1 h-1 rounded-full bg-white/80" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileTabs;