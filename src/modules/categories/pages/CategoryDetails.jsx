import { useParams, useNavigate } from "react-router-dom";

import { useCategoryDetails } from "../hooks";
import { CategoryStatusBadge } from "../components";

const CategoryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    category,
    loading,
    error,
  } = useCategoryDetails(id);

  if (loading) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="text-gray-500">
          Loading category details...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-50 p-4 text-red-600">
        {error}
      </div>
    );
  }

  if (!category) {
    return (
      <div className="rounded-lg bg-gray-50 p-4 text-gray-600">
        Category not found
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          Category Details
        </h1>

        <button
          onClick={() => navigate(-1)}
          className="rounded-lg bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300"
        >
          Back
        </button>
      </div>


      {/* Card */}
      <div className="rounded-xl bg-white p-6 shadow">
        
        {category.image && (
          <img
            src={category.image}
            alt={category.name}
            className="mb-6 h-64 w-full rounded-lg object-cover"
          />
        )}

        <div className="space-y-4">

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Name
            </h2>

            <p className="text-gray-600">
              {category.name}
            </p>
          </div>


          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Description
            </h2>

            <p className="text-gray-600">
              {category.description ||
                "No description available"}
            </p>
          </div>


          <div>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              Status
            </h2>

            <CategoryStatusBadge
              status={category.status}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;