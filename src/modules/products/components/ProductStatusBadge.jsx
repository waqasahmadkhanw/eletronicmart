const ProductStatusBadge = ({ status }) => {
  const statusStyles = {
    active: "bg-green-100 text-green-700",
    inactive: "bg-red-100 text-red-700",
    draft: "bg-yellow-100 text-yellow-700",
    archived: "bg-gray-100 text-gray-700",
  };

  const badgeStyle =
    statusStyles[status?.toLowerCase()] ||
    "bg-gray-100 text-gray-700";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold capitalize ${badgeStyle}`}
    >
      {status || "Unknown"}
    </span>
  );
};

export default ProductStatusBadge;