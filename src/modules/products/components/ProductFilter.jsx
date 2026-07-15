import { useState } from "react";
import {
  Filter,
  Tag,
  Package,
  CheckCircle2,
  ArrowUpDown,
  RotateCcw,
} from "lucide-react";

const selectClasses =
  "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 shadow-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

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
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-5">
        <div className="rounded-xl bg-white/20 p-2.5 text-white">
          <Filter size={22} />
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">
            Product Filters
          </h2>

          <p className="text-sm text-blue-100">
            Quickly find products using filters
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 gap-5 p-6 sm:grid-cols-2 xl:grid-cols-5">
        {/* Category */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Tag
              size={16}
              className="text-blue-600"
            />
            Category
          </label>

          <select
            name="category"
            value={filters.category}
            onChange={handleChange}
            className={selectClasses}
          >
            <option value="">
              All Categories
            </option>

            {categories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Brand */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Package
              size={16}
              className="text-blue-600"
            />
            Brand
          </label>

          <select
            name="brand"
            value={filters.brand}
            onChange={handleChange}
            className={selectClasses}
          >
            <option value="">
              All Brands
            </option>

            {brands.map((brand) => (
              <option
                key={brand}
                value={brand}
              >
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <CheckCircle2
              size={16}
              className="text-blue-600"
            />
            Status
          </label>

          <select
            name="status"
            value={filters.status}
            onChange={handleChange}
            className={selectClasses}
          >
            <option value="">
              All Status
            </option>
            <option value="active">
              Active
            </option>
            <option value="inactive">
              Inactive
            </option>
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <ArrowUpDown
              size={16}
              className="text-blue-600"
            />
            Sort By
          </label>

          <select
            name="sort"
            value={filters.sort}
            onChange={handleChange}
            className={selectClasses}
          >
            <option value="">
              Sort By
            </option>
            <option value="name">
              Name (A-Z)
            </option>
            <option value="-name">
              Name (Z-A)
            </option>
            <option value="price">
              Price (Low → High)
            </option>
            <option value="-price">
              Price (High → Low)
            </option>
            <option value="createdAt">
              Newest
            </option>
            <option value="-createdAt">
              Oldest
            </option>
          </select>
        </div>

        {/* Reset */}
        <div className="flex items-end">
          <button
            type="button"
            onClick={handleReset}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-slate-800 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-900 hover:shadow-xl"
          >
            <RotateCcw size={18} />
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;