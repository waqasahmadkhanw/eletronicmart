import { Search, X } from "lucide-react";

const SearchInput = ({
  value = "",
  onChange,
  onSearch,
  onClear,
  placeholder = "Search...",
  disabled = false,
  className = "",
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative w-full ${className}`}
    >
      {/* Search Icon */}
      <Search
        size={20}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      {/* Input */}
      <input
        type="text"
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className="h-12 w-full rounded-xl border border-gray-300 bg-white pl-12 pr-24 text-gray-900 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-gray-100"
      />

      {/* Actions */}
      <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-2">
        {value && (
          <button
            type="button"
            onClick={onClear}
            className="rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-red-500"
            aria-label="Clear Search"
          >
            <X size={18} />
          </button>
        )}

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchInput;