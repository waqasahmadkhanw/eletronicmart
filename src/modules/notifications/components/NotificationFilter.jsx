import { Search } from "lucide-react";

const FILTER_OPTIONS = [
  { label: "All", value: "all" },
  { label: "Unread", value: "unread" },
  { label: "Read", value: "read" },
];

const NotificationFilter = ({
  search = "",
  filter = "all",
  onSearchChange,
  onFilterChange,
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
      <div className="relative w-full md:max-w-sm">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          value={search}
          placeholder="Search notifications..."
          onChange={(e) => onSearchChange?.(e.target.value)}
          className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {FILTER_OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onFilterChange?.(option.value)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              filter === option.value
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NotificationFilter;