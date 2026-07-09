import CategoryStatusBadge from "./CategoryStatusBadge";

const CategoryCard = ({
  category,
  onEdit,
  onDelete,
  onView,
}) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      
      {/* Image */}
      {category.image && (
        <img
          src={category.image}
          alt={category.name}
          className="mb-4 h-40 w-full rounded-lg object-cover"
        />
      )}

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            {category.name}
          </h3>

          <CategoryStatusBadge
            status={category.status}
          />
        </div>

        <p className="text-sm text-gray-600">
          {category.description ||
            "No description available"}
        </p>

        {/* Actions */}
        <div className="flex gap-2 pt-3">
          <button
            onClick={() => onView(category._id)}
            className="rounded-md bg-blue-500 px-3 py-2 text-sm text-white hover:bg-blue-600"
          >
            View
          </button>

          <button
            onClick={() => onEdit(category)}
            className="rounded-md bg-yellow-500 px-3 py-2 text-sm text-white hover:bg-yellow-600"
          >
            Edit
          </button>

          <button
            onClick={() =>
              onDelete(category._id)
            }
            className="rounded-md bg-red-500 px-3 py-2 text-sm text-white hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;