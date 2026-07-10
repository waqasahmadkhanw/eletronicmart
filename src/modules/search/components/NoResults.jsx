const NoResults = ({
  title = "No Results Found",
  message = "We couldn't find anything matching your search. Try different keywords or adjust your filters.",
  onReset,
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35"
          />
          <circle
            cx="11"
            cy="11"
            r="6"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      <h2 className="mb-2 text-2xl font-semibold text-gray-800">
        {title}
      </h2>

      <p className="mb-6 max-w-md text-gray-500">
        {message}
      </p>

      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
};

export default NoResults;