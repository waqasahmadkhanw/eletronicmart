import { useState } from "react";

const SearchFilters = ({
  categories = [],
  selectedCategory = "",
  sortBy = "",
  minPrice = "",
  maxPrice = "",
  onApplyFilters,
}) => {
  const [filters, setFilters] = useState({
    category: selectedCategory,
    sort: sortBy,
    minPrice,
    maxPrice,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApply = () => {
    onApplyFilters?.(filters);
  };

  const handleReset = () => {
    const resetFilters = {
      category: "",
      sort: "",
      minPrice: "",
      maxPrice: "",
    };

    setFilters(resetFilters);
    onApplyFilters?.(resetFilters);
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">
        Filters
      </h2>

      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Category
          </label>

          <select
            name="category"
            value={filters.category}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="">All Categories</option>

            {categories.map((category) => (
              <option
                key={category._id || category.id}
                value={category.slug || category.name}
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Sort By
          </label>

          <select
            name="sort"
            value={filters.sort}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="">Default</option>
            <option value="latest">Latest</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Minimum Price
          </label>

          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleChange}
            placeholder="0"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Maximum Price
          </label>

          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
            placeholder="1000"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={handleApply}
            className="flex-1 rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Apply
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="flex-1 rounded-md border border-gray-300 px-4 py-2 font-medium transition hover:bg-gray-100"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;