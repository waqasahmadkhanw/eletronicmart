import React from "react";

const SearchHistory = ({
  history = [],
  onSelect,
  onClear,
}) => {
  if (!history.length) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <h3 className="mb-2 text-lg font-semibold">
          Recent Searches
        </h3>

        <p className="text-sm text-gray-500">
          No search history found.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          Recent Searches
        </h3>

        <button
          type="button"
          onClick={onClear}
          className="text-sm font-medium text-red-600 transition hover:text-red-700"
        >
          Clear All
        </button>
      </div>

      <ul className="space-y-2">
        {history.map((item, index) => {
          const value =
            typeof item === "string"
              ? item
              : item.query || item.keyword || "";

          return (
            <li key={item._id || item.id || index}>
              <button
                type="button"
                onClick={() => onSelect?.(value)}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left transition hover:bg-gray-100"
              >
                <span className="truncate text-gray-700">
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
                    d="M5 12h14"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12 5 7 7-7 7"
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

export default SearchHistory;