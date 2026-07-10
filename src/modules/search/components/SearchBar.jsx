import { useEffect, useState } from "react";
import useSearchSuggestions from "../hooks/useSearchSuggestions";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const {
    suggestions,
    getSuggestions,
  } = useSearchSuggestions();

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
      <form
        onSubmit={handleSubmit}
        className="flex gap-2"
      >
        <input
          type="text"
          value={query}
          placeholder="Search products..."
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
        />

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {query.trim() && suggestions?.length > 0 && (
        <div className="absolute left-0 right-0 z-10 mt-2 rounded-lg border border-gray-200 bg-white shadow-lg">
          {suggestions.map((item) => (
            <button
              key={item.id || item}
              type="button"
              onClick={() =>
                handleSuggestionClick(item.name || item)
              }
              className="block w-full px-4 py-3 text-left hover:bg-gray-100"
            >
              {item.name || item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;