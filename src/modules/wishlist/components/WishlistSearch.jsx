import { Search, X } from "lucide-react";

const WishlistSearch = ({
  value = "",
  onChange,
  onClear,
}) => {
  return (
    <div className="relative w-full">
      {/* Search Icon */}
      <Search
        size={20}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      {/* Input */}
      <input
        type="search"
        placeholder="Search your wishlist..."
        value={value}
        onChange={onChange}
        className="h-12 w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-12 text-sm text-slate-700 shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
      />

      {/* Clear Button */}
      {value && (
        <button
          type="button"
          onClick={
            onClear ||
            (() =>
              onChange?.({
                target: { value: "" },
              }))
          }
          className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-red-500"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default WishlistSearch;