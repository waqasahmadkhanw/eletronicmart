import { useState } from "react";

const ProductFilter = ({
  categories = [],
  brands = [],
  onFilter,
}) => {
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    status: "",
    sort: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedFilters = {
      ...filters,
      [name]: value,
    };

    setFilters(updatedFilters);
    onFilter?.(updatedFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      category: "",
      brand: "",
      status: "",
      sort: "",
    };

    setFilters(resetFilters);
    onFilter?.(resetFilters);
  };

  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        {/* Category */}
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
        >
          <option value="">All Categories</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Brand */}
        <select
          name="brand"
          value={filters.brand}
          onChange={handleChange}
          className="rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
        >
          <option value="">All Brands</option>

          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        {/* Status */}
        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
          className="rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
        >
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        {/* Sort */}
        <select
          name="sort"
          value={filters.sort}
          onChange={handleChange}
          className="rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
        >
          <option value="">Sort By</option>
          <option value="name">Name (A-Z)</option>
          <option value="-name">Name (Z-A)</option>
          <option value="price">Price (Low to High)</option>
          <option value="-price">Price (High to Low)</option>
          <option value="createdAt">Newest</option>
          <option value="-createdAt">Oldest</option>
        </select>

        {/* Reset */}
        <button
          type="button"
          onClick={handleReset}
          className="rounded-md bg-gray-700 px-4 py-2 text-white transition hover:bg-gray-800"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;