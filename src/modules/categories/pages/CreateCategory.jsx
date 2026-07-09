import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { CategoryForm } from "../components";
import { useCategoryActions } from "../hooks";

const CreateCategory = () => {
  const navigate = useNavigate();

  const {
    createNewCategory,
  } = useCategoryActions();

  const handleSubmit = async (values) => {
    try {
      await createNewCategory(values).unwrap();

      toast.success(
        "Category created successfully"
      );

      navigate("/categories");
    } catch (error) {
      toast.error(
        error || "Failed to create category"
      );
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">

      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Create Category
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Add a new product category
        </p>
      </div>


      <CategoryForm
        onSubmit={handleSubmit}
      />

    </div>
  );
};

export default CreateCategory;