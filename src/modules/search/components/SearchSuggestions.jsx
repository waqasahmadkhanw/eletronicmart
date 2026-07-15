import {
  Loader2,
  Search,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const SearchSuggestions = ({
  suggestions = [],
  loading = false,
  onSelect,
}) => {
  if (loading) {
    return (
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
        <div className="flex flex-col items-center justify-center px-6 py-10">
          <div className="rounded-2xl bg-blue-100 p-4">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>

          <h3 className="mt-4 text-base font-semibold text-slate-800">
            Loading Suggestions...
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Finding the best matches for you.
          </p>
        </div>
      </div>
    );
  }

  if (!suggestions.length) {
    return null;
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-100 bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-4">
        <div className="rounded-xl bg-white/20 p-2 text-white">
          <Sparkles size={18} />
        </div>

        <div>
          <h3 className="text-base font-bold text-white">
            Search Suggestions
          </h3>

          <p className="text-xs text-blue-100">
            Choose a suggestion to search faster
          </p>
        </div>
      </div>

      {/* Suggestions */}
      <ul className="max-h-96 overflow-y-auto py-2">
        {suggestions.map((item) => {
          const value =
            item.name || item.title || item;

          return (
            <li
              key={
                item._id ||
                item.id ||
                value
              }
              className="px-2"
            >
              <button
                type="button"
                onClick={() =>
                  onSelect?.(value)
                }
                className="group flex w-full items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-blue-50"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="rounded-xl bg-blue-100 p-2 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Search size={16} />
                  </div>

                  <span className="truncate text-sm font-medium text-slate-700 sm:text-[15px]">
                    {value}
                  </span>
                </div>

                <ArrowRight
                  size={17}
                  className="text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600"
                />
              </button>
            </li>
          );
        })}
      </ul>

      {/* Footer */}
      <div className="border-t border-slate-100 bg-slate-50 px-5 py-3">
        <p className="text-center text-xs text-slate-500">
          {suggestions.length} suggestion
          {suggestions.length > 1 ? "s" : ""} available
        </p>
      </div>
    </div>
  );
};

export default SearchSuggestions;