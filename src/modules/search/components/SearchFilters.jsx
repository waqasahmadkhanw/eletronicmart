import { useState } from "react";
import {
  Filter,
  SlidersHorizontal,
  Tag,
  ArrowUpDown,
  DollarSign,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";

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
    <aside className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-100 bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-4">
        <div className="rounded-xl bg-white/20 p-2 text-white">
          <Filter size={20} />
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">
            Filters
          </h3>
          <p className="text-xs text-blue-100">
            Refine your search results
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-5 p-5">
        {/* Category */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Tag size={16} className="text-blue-600" />
            Category
          </label>

          <select
            name="category"
            value={filters.category}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          >
            <option value="">Default</option>
            <option value="latest">Latest</option>
            <option value="price_asc">
              Price: Low to High
            </option>
            <option value="price_desc">
              Price: High to Low
            </option>
            <option value="rating">
              Highest Rated
            </option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <DollarSign
              size={16}
              className="text-blue-600"
            />
            Price Range
          </label>

          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
              placeholder="Min"
              className="h-12 rounded-xl border border-slate-200 px-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
              placeholder="Max"
              className="h-12 rounded-xl border border-slate-200 px-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-100 pt-5">
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <button
              type="button"
              onClick={handleApply}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
            >
              <CheckCircle2 size={18} />
              Apply Filters
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white font-semibold text-slate-700 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 active:scale-95"
            >
              <RotateCcw size={17} />
              Reset
            </button>
          </div>
        </div>

        {/* Small Tip */}
        <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
          <div className="rounded-lg bg-blue-100 p-2">
            <SlidersHorizontal
              size={16}
              className="text-blue-600"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-slate-700">
              Smart Filtering
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              Combine category, sorting, and price range
              to quickly find exactly what you're looking
              for.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SearchFilters;