import { useState, useEffect } from "react";

const OrderSearch = ({
  value = "",
  onSearch,
  placeholder = "Search by Order ID, Customer or Email...",
}) => {
  const [searchTerm, setSearchTerm] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch?.(searchTerm.trim());
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, onSearch]);

  useEffect(() => {
    setSearchTerm(value);
  }, [value]);

  const handleClear = () => {
    setSearchTerm("");
    onSearch?.("");
  };

  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="search"
          value={searchTerm}
          placeholder={placeholder}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-4 pr-12 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

        {searchTerm && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderSearch;