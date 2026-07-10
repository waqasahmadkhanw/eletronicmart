// modules/addresses/components/AddressSearch.jsx

import { useState } from "react";
import PropTypes from "prop-types";

const AddressSearch = ({
  onSearch,
  placeholder = "Search addresses...",
}) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(search.trim());
  };

  const handleClear = () => {
    setSearch("");
    onSearch?.("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 md:flex-row md:items-center"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={placeholder}
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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
          className="rounded-lg border border-gray-300 px-5 py-2 text-gray-700 transition hover:bg-gray-100"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

AddressSearch.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

export default AddressSearch;