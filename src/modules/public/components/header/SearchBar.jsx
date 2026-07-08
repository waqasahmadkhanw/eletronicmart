import { useState } from "react";
import { Search, X } from "lucide-react";

const categories = [
  "All Categories",
  "Electronics",
  "Fashion",
  "Furniture",
  "Beauty",
  "Sports",
];

const suggestions = [
  "iPhone 16 Pro",
  "MacBook Pro",
  "Gaming Laptop",
  "Nike Shoes",
  "Smart Watch",
];

const SearchBar = () => {
  const [category, setCategory] = useState(categories[0]);
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();

    console.log({
      category,
      query,
    });

    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full">
      <form
        onSubmit={handleSearch}
        className="flex h-12 overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm focus-within:border-blue-500"
      >
        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="hidden border-r bg-gray-50 px-4 text-sm outline-none lg:block"
        >
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          className="flex-1 px-4 outline-none"
        />

        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setShowSuggestions(false);
            }}
            className="px-2 text-gray-500 hover:text-red-500"
          >
            <X size={18} />
          </button>
        )}

        {/* Search Button */}
        <button
          type="submit"
          className="flex items-center justify-center bg-blue-600 px-5 text-white transition hover:bg-blue-700"
        >
          <Search size={20} />
        </button>
      </form>

      {/* Suggestions */}
      {showSuggestions &&
        query &&
        filteredSuggestions.length > 0 && (
          <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border bg-white shadow-xl">
            {filteredSuggestions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setQuery(item);
                  setShowSuggestions(false);
                }}
                className="flex w-full items-center px-4 py-3 text-left text-sm transition hover:bg-gray-100"
              >
                <Search
                  size={16}
                  className="mr-3 text-gray-400"
                />
                {item}
              </button>
            ))}
          </div>
        )}
    </div>
  );
};

export default SearchBar;