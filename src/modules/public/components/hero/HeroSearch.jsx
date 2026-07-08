import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

const categories = [
  "All Categories",
  "Electronics",
  "Fashion",
  "Furniture",
  "Beauty",
  "Sports",
];

const HeroSearch = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      keyword,
      category,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gray-200 bg-white p-3 shadow-lg"
    >
      <div className="flex flex-col gap-3 lg:flex-row">
        {/* Search */}
        <div className="flex flex-1 items-center rounded-xl border border-gray-200 px-4">
          <Search
            size={20}
            className="text-gray-400"
          />

          <input
            type="text"
            placeholder="Search for products..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="h-14 w-full bg-transparent px-3 outline-none"
          />
        </div>

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="h-14 rounded-xl border border-gray-200 px-4 outline-none focus:border-blue-600"
        >
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        {/* Filter */}
        <button
          type="button"
          className="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 transition hover:bg-gray-100"
        >
          <SlidersHorizontal size={20} />
        </button>

        {/* Search Button */}
        <button
          type="submit"
          className="h-14 rounded-xl bg-blue-600 px-8 font-semibold text-white transition hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default HeroSearch;