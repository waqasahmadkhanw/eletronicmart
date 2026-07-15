import {
  Loader2,
  PackageSearch,
  ArrowRight,
  Eye,
} from "lucide-react";
import NoResults from "./NoResults";

const SearchResultsList = ({
  results = [],
  loading = false,
  renderItem,
}) => {
  if (loading) {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="rounded-full bg-blue-100 p-5">
          <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
        </div>

        <h3 className="mt-6 text-lg font-semibold text-slate-800">
          Searching Products...
        </h3>

        <p className="mt-2 text-center text-sm text-slate-500">
          Please wait while we find the best matches for
          you.
        </p>
      </div>
    );
  }

  if (!results.length) {
    return <NoResults />;
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {results.map((item) => (
        <div
          key={item._id || item.id}
          className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
        >
          {renderItem ? (
            renderItem(item)
          ) : (
            <>
              {/* Top */}
              <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <PackageSearch size={28} />
                </div>

                <h3 className="line-clamp-1 text-lg font-bold text-slate-800 transition-colors group-hover:text-blue-600">
                  {item.name}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between p-6">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Price
                  </p>

                  <h4 className="mt-1 text-2xl font-bold text-blue-600">
                    ${item.price}
                  </h4>
                </div>

                <button
                  type="button"
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                >
                  <Eye size={17} />
                  View
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
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