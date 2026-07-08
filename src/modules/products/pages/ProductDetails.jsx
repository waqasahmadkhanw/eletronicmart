import { useNavigate, useParams } from "react-router-dom";

import ProductStatusBadge from "../components/ProductStatusBadge";
import useProductDetails from "../hooks/useProductDetails";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    product,
    loading,
    error,
  } = useProductDetails(id);

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-lg text-gray-500">Loading product...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-6">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="rounded-lg border bg-white p-6">
        <p className="text-gray-500">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Product Details</h1>

        <button
          onClick={() => navigate(-1)}
          className="rounded-lg border px-4 py-2 hover:bg-gray-100"
        >
          Back
        </button>
      </div>

      {/* Product */}
      <div className="overflow-hidden rounded-xl bg-white shadow">
        <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2">
          {/* Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="h-[450px] w-full rounded-lg object-cover"
            />
          </div>

          {/* Details */}
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">
                {product.name}
              </h2>

              <ProductStatusBadge status={product.status} />
            </div>

            <p className="text-2xl font-semibold text-green-600">
              ${product.price}
            </p>

            <p className="leading-7 text-gray-600">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <h4 className="font-semibold">Category</h4>
                <p>{product.category}</p>
              </div>

              <div>
                <h4 className="font-semibold">Brand</h4>
                <p>{product.brand}</p>
              </div>

              <div>
                <h4 className="font-semibold">SKU</h4>
                <p>{product.sku}</p>
              </div>

              <div>
                <h4 className="font-semibold">Stock</h4>
                <p>{product.stock}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-6">
              <button
                onClick={() =>
                  navigate(`/products/edit/${product._id}`)
                }
                className="rounded-lg bg-yellow-500 px-5 py-2 text-white hover:bg-yellow-600"
              >
                Edit Product
              </button>

              <button
                onClick={() => navigate("/products")}
                className="rounded-lg bg-gray-700 px-5 py-2 text-white hover:bg-gray-800"
              >
                All Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;