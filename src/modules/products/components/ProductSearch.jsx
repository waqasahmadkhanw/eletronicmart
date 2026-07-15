import { useState } from "react";
import {
  Search,
  X,
  PackageSearch,
} from "lucide-react";

const ProductSearch = ({
  onSearch,
  placeholder = "Search products...",
}) => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(keyword.trim());
  };

  const handleClear = () => {
    setKeyword("");
    onSearch?.("");
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-5">
        <div className="rounded-xl bg-white/20 p-2.5 text-white">
          <PackageSearch size={22} />
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">
            Product Search
          </h2>

          <p className="text-sm text-blue-100">
            Search products by name, category or keyword
          </p>
        </div>
      </div>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 md:flex-row md:items-center"
      >
        {/* Search Input */}
        <div className="relative flex-1">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={keyword}
            placeholder={placeholder}
            onChange={(e) =>
              setKeyword(e.target.value)
            }
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-12 text-sm text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />

          {keyword && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition-all duration-300 hover:bg-red-100 hover:text-red-600"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 md:w-auto">
          <button
            type="submit"
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Search size={18} />
            Search
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-100"
          >
            <X size={18} />
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductSearch;