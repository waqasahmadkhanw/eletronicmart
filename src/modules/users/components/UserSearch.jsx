import { useState, useEffect } from "react";
import {
  Search,
  X,
  Users,
} from "lucide-react";

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
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-5">
        <div className="rounded-xl bg-white/20 p-2 text-white">
          <Users size={20} />
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">
            Search Users
          </h2>

          <p className="text-sm text-blue-100">
            Find users by name, email or phone
          </p>
        </div>
      </div>

      {/* Search Area */}
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={search}
            placeholder={placeholder}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-12 text-sm text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />

          {search && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition-all duration-300 hover:bg-red-100 hover:text-red-600"
            >
              <X size={17} />
            </button>
          )}
        </div>

        {/* Search Button */}
        <button
          type="button"
          onClick={() => onSearch?.(search.trim())}
          className="flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-7 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
        >
          <Search size={18} />
          Search
        </button>
      </div>
    </div>
  );
};

export default UserSearch;