const SearchSuggestions = ({
  suggestions = [],
  loading = false,
  onSelect,
}) => {
  if (loading) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <p className="text-sm text-gray-500">
          Loading suggestions...
        </p>
      </div>
    );
  }

  if (!suggestions.length) {
    return null;
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-md">
      <ul className="divide-y divide-gray-100">
        {suggestions.map((item) => {
          const value = item.name || item.title || item;

          return (
            <li key={item._id || item.id || value}>
              <button
                type="button"
                onClick={() => onSelect?.(value)}
                className="flex w-full items-center justify-between px-4 py-3 text-left transition hover:bg-gray-100"
              >
                <span className="truncate text-sm text-gray-700">
                  {value}
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchSuggestions;