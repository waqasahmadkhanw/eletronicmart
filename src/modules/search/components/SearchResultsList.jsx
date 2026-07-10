import NoResults from "./NoResults";

const SearchResultsList = ({
  results = [],
  loading = false,
  renderItem,
}) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-10">
        <p className="text-gray-500">Loading search results...</p>
      </div>
    );
  }

  if (!results.length) {
    return <NoResults />;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {results.map((item) => (
        <div
          key={item._id || item.id}
          className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
        >
          {renderItem ? (
            renderItem(item)
          ) : (
            <>
              <img
                src={item.image}
                alt={item.name}
                className="mb-4 h-48 w-full rounded-md object-cover"
              />

              <h3 className="mb-2 text-lg font-semibold">
                {item.name}
              </h3>

              <p className="mb-3 line-clamp-2 text-sm text-gray-600">
                {item.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-blue-600">
                  ${item.price}
                </span>

                <button
                  type="button"
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  View
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default SearchResultsList;