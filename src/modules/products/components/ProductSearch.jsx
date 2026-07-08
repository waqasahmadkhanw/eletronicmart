import { useState } from "react";

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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 md:flex-row md:items-center"
    >
      <input
        type="text"
        value={keyword}
        placeholder={placeholder}
        onChange={(e) => setKeyword(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500"
      />

      <div className="flex gap-2">
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
        >
          Search
        </button>

        <button
          type="button"
          onClick={handleClear}
          className="rounded-lg border border-gray-300 px-5 py-2 transition hover:bg-gray-100"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default ProductSearch;