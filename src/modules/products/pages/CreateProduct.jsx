import { useNavigate } from "react-router-dom";

import ProductForm from "../components/ProductForm";
import useProductActions from "../hooks/useProductActions";

const CreateProduct = () => {
  const navigate = useNavigate();

  const {
    addProduct,
    loading,
  } = useProductActions();

  const initialValues = {
    name: "",
    description: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
    sku: "",
    image: "",
    status: "active",
  };

  const handleSubmit = async (values, { resetForm }) => {
    const result = await addProduct(values);

    if (result.meta.requestStatus === "fulfilled") {
      resetForm();
      navigate("/products");
    }
  };

  return (
    <div className="mx-auto max-w-6xl p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Create Product</h1>
        <p className="mt-2 text-gray-500">
          Fill in the information below to create a new product.
        </p>
      </div>

      {/* Form */}
      <ProductForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        loading={loading}
        submitButtonText="Create Product"
      />
    </div>
  );
};

export default CreateProduct;