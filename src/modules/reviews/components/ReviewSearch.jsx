import { Search, X, MessageSquareSearch } from "lucide-react";

const ReviewSearch = ({
  value = "",
  onChange,
  placeholder = "Search reviews by title, customer or product...",
}) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-5">
        <div className="rounded-xl bg-white/20 p-2.5 text-white">
          <MessageSquareSearch size={22} />
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">
            Search Reviews
          </h2>

          <p className="text-sm text-blue-100">
            Quickly find customer reviews and feedback
          </p>
        </div>
      </div>

      {/* Search Input */}
      <div className="p-6">
        <div className="relative">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange?.(e.target.value)}
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-12 text-sm text-slate-700 shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />

          {value && (
            <button
              type="button"
              onClick={() => onChange?.("")}
              className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition-all duration-300 hover:bg-red-100 hover:text-red-600"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewSearch;