import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductTable from "../components/ProductTable";
import ProductSearch from "../components/ProductSearch";
import ProductFilter from "../components/ProductFilter";
import useProducts from "../hooks/useProducts";

const ProductsList = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({});

  const queryParams = useMemo(
    () => ({
      search,
      ...filters,
    }),
    [search, filters]
  );

  const {
    products,
    loading,
    removeProduct,
  } = useProducts(queryParams);

  const handleView = (product) => {
    navigate(`/products/${product._id}`);
  };

  const handleEdit = (product) => {
    navigate(`/products/edit/${product._id}`);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    await removeProduct(id);
  };

  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const brands = [
    ...new Set(products.map((product) => product.brand)),
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Products</h1>

        <button
          onClick={() => navigate("/products/create")}
          className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
        >
          + Create Product
        </button>
      </div>

      {/* Search */}
      <ProductSearch onSearch={setSearch} />

      {/* Filter */}
      <ProductFilter
        categories={categories}
        brands={brands}
        onFilter={setFilters}
      />

      {/* Table */}
      <ProductTable
        products={products}
        loading={loading}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ProductsList;