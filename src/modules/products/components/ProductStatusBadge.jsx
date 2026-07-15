import {
  CheckCircle2,
  XCircle,
  FileText,
  Archive,
  HelpCircle,
} from "lucide-react";

const STATUS_CONFIG = {
  active: {
    icon: CheckCircle2,
    className:
      "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200",
  },

  inactive: {
    icon: XCircle,
    className:
      "bg-red-100 text-red-700 ring-1 ring-red-200",
  },

  draft: {
    icon: FileText,
    className:
      "bg-amber-100 text-amber-700 ring-1 ring-amber-200",
  },

  archived: {
    icon: Archive,
    className:
      "bg-slate-200 text-slate-700 ring-1 ring-slate-300",
  },
};

const ProductStatusBadge = ({
  status = "unknown",
  className = "",
}) => {
  const normalizedStatus =
    status?.toLowerCase() || "unknown";

  const config =
    STATUS_CONFIG[normalizedStatus] || {
      icon: HelpCircle,
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

export default ProductStatusBadge;