import { useEffect, useState } from "react";
import {
  Search,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import useSearchSuggestions from "../hooks/useSearchSuggestions";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const { suggestions, getSuggestions } =
    useSearchSuggestions();

  useEffect(() => {
    if (query.trim()) {
      getSuggestions(query);
    }
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    onSearch({
      query: query.trim(),
    });
  };

  const handleSuggestionClick = (value) => {
    setQuery(value);

    onSearch({
      query: value,
    });
  };

  return (
    <div className="relative w-full">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="group flex w-full items-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100"
      >
        {/* Search Icon */}
        <div className="pl-4 text-slate-400 transition-colors group-focus-within:text-blue-600">
          <Search size={20} />
        </div>

        {/* Input */}
        <input
          type="text"
          value={query}
          placeholder="Search for products, brands or categories..."
          onChange={(e) =>
            setQuery(e.target.value)
          }
          className="h-14 flex-1 bg-transparent px-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none sm:text-base"
        />

        {/* Button */}
        <button
          type="submit"
          className="m-1 flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-95 sm:px-7 sm:text-base"
        >
          <Search size={18} />
          <span className="hidden sm:inline">
            Search
          </span>
        </button>
      </form>

      {/* Suggestions */}
      {query.trim() &&
        suggestions?.length > 0 && (
          <div className="absolute left-0 right-0 z-50 mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <Sparkles
                size={14}
                className="text-blue-600"
              />
              Search Suggestions
            </div>

            {/* Suggestions List */}
            <div className="max-h-80 overflow-y-auto">
              {suggestions.map((item) => {
                const value =
                  item.name || item;

                return (
                  <button
                    key={item.id || value}
                    type="button"
                    onClick={() =>
                      handleSuggestionClick(
                        value
                      )
                    }
                    className="flex w-full items-center justify-between border-b border-slate-100 px-4 py-3 text-left transition-all duration-200 last:border-none hover:bg-blue-50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
                        <Search size={15} />
                      </div>

                      <span className="truncate text-sm font-medium text-slate-700 sm:text-base">
                        {value}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="text-slate-400"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        )}
    </div>
  );
};

export default SearchBar;