import {
  CheckCircle2,
  Clock3,
  Ban,
  ShieldAlert,
} from "lucide-react";

const STATUS_CONFIG = {
  active: {
    icon: CheckCircle2,
    className:
      "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200",
  },

  inactive: {
    icon: Ban,
    className:
      "bg-red-100 text-red-700 ring-1 ring-red-200",
  },

  pending: {
    icon: Clock3,
    className:
      "bg-amber-100 text-amber-700 ring-1 ring-amber-200",
  },

  suspended: {
    icon: ShieldAlert,
    className:
      "bg-slate-200 text-slate-700 ring-1 ring-slate-300",
  },
};

const UserStatusBadge = ({
  status = "inactive",
  className = "",
}) => {
  const normalizedStatus =
    status?.toLowerCase() || "inactive";

  const config =
    STATUS_CONFIG[normalizedStatus] || {
      icon: ShieldAlert,
      className:
        "bg-slate-100 text-slate-700 ring-1 ring-slate-200",
    };

  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold capitalize transition-all duration-200 ${config.className} ${className}`}
    >
      <Icon size={13} />
      {normalizedStatus}
    </span>
  );
};

export default UserStatusBadge;