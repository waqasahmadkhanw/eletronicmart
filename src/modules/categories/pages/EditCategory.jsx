import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import { CategoryForm } from "../components";
import {
  useCategoryDetails,
  useCategoryActions,
} from "../hooks";

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    category,
    loading,
    error,
  } = useCategoryDetails(id);

  const {
    updateExistingCategory,
  } = useCategoryActions();

  const handleSubmit = async (values) => {
    try {
      await updateExistingCategory(id, values).unwrap();

      toast.success("Category updated successfully");

      navigate("/categories");
    } catch (err) {
      toast.error(err || "Failed to update category");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="text-gray-500">Loading category...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-100 p-4 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Edit Category
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Update category information
        </p>
      </div>

      <CategoryForm
        initialValues={{
          name: category?.name || "",
          description: category?.description || "",
          image: null,
          status: category?.status || "active",
        }}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
};

export default EditCategory;