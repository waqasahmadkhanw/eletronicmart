import { useState, useEffect } from "react";

const UserSearch = ({
  value = "",
  placeholder = "Search users...",
  onSearch,
}) => {
  const [search, setSearch] = useState(value);

  useEffect(() => {
    setSearch(value);
  }, [value]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch?.(search.trim());
    }, 500);

    return () => clearTimeout(timer);
  }, [search, onSearch]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClear = () => {
    setSearch("");
    onSearch?.("");
  };

  return (
    <div className="flex w-full items-center gap-3">
      <div className="relative flex-1">
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />

        {search && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-red-500"
          >
            ✕
          </button>
        )}
      </div>

      <button
        type="button"
        onClick={() => onSearch?.(search.trim())}
        className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};

export default UserSearch;