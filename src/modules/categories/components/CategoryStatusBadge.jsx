const CategoryStatusBadge = ({
  status,
}) => {
  const statusStyles = {
    active:
      "bg-green-100 text-green-700",
    inactive:
      "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
        statusStyles[status] ||
        "bg-gray-100 text-gray-700"
      }`}
    >
      {status || "Unknown"}
    </span>
  );
};

export default CategoryStatusBadge;