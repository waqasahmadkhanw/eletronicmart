const STATUS_STYLES = {
  active: "bg-green-100 text-green-700",
  inactive: "bg-red-100 text-red-700",
  pending: "bg-yellow-100 text-yellow-700",
  suspended: "bg-gray-200 text-gray-700",
};

const UserStatusBadge = ({
  status = "inactive",
  className = "",
}) => {
  const normalizedStatus = status.toLowerCase();

  const badgeStyle =
    STATUS_STYLES[normalizedStatus] ||
    "bg-gray-100 text-gray-700";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold capitalize ${badgeStyle} ${className}`}
    >
      {normalizedStatus}
    </span>
  );
};

export default UserStatusBadge;