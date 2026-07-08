import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ProductForm from "../components/ProductForm";
import useProductDetails from "../hooks/useProductDetails";
import useProductActions from "../hooks/useProductActions";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    product,
    loading: detailsLoading,
  } = useProductDetails(id);

  const {
    editProduct,
    loading,
  } = useProductActions();

  useEffect(() => {
    if (!id) {
      navigate("/products");
    }
  }, [id, navigate]);

  const initialValues = {
    name: product?.name || "",
    description: product?.description || "",
    category: product?.category || "",
    brand: product?.brand || "",
    price: product?.price || "",
    stock: product?.stock || "",
    sku: product?.sku || "",
    image: product?.image || "",
    status: product?.status || "active",
  };

  const handleSubmit = async (values) => {
    const result = await editProduct(id, values);

    if (result.meta.requestStatus === "fulfilled") {
      navigate("/products");
    }
  };

  if (detailsLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-lg text-gray-500">Loading product...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Edit Product</h1>
        <p className="mt-2 text-gray-500">
          Update the product information below.
        </p>
      </div>

      {/* Form */}
      <ProductForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        loading={loading}
        submitButtonText="Update Product"
      />
    </div>
  );
};

export default EditProduct;