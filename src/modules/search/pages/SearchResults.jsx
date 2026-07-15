import { useState } from "react";
import {
  Search,
  AlertCircle,
  Sparkles,
} from "lucide-react";

import {
  SearchBar,
  SearchFilters,
  SearchResultsList,
  SearchHistory,
} from "../components";

import {
  useSearch,
  useSearchHistory,
} from "../hooks";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useState({
    query: "",
  });

  const {
    results,
    loading,
    error,
    search,
  } = useSearch(searchParams);

  const {
    history,
    clearHistory,
  } = useSearchHistory();

  const handleSearch = (params) => {
    setSearchParams(params);
    search(params);
  };

  const handleApplyFilters = (filters) => {
    const updatedParams = {
      ...searchParams,
      ...filters,
    };

    setSearchParams(updatedParams);
    search(updatedParams);
  };

  const handleHistorySearch = (query) => {
    const params = { query };

    setSearchParams(params);
    search(params);
  };

  return (
    <section className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-10 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-6 text-white shadow-xl sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
                <Sparkles size={16} />
                Smart Product Search
              </div>

              <h1 className="text-3xl font-bold sm:text-4xl">
                Find Products Instantly
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
                Search thousands of products using
                keywords, categories, and advanced
                filters to quickly discover exactly
                what you're looking for.
              </p>
            </div>

            <div className="w-full lg:max-w-xl">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="space-y-6 lg:col-span-4 xl:col-span-3">
            <SearchFilters
              onApplyFilters={handleApplyFilters}
            />

            <SearchHistory
              history={history}
              onSelect={handleHistorySearch}
              onClear={clearHistory}
            />
          </aside>

          {/* Results */}
          <main className="space-y-6 lg:col-span-8 xl:col-span-9">
            {/* Search Status */}
            <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="flex items-center gap-2 text-xl font-bold text-slate-800">
                  <Search
                    size={22}
                    className="text-blue-600"
                  />
                  Search Results
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {loading
                    ? "Searching products..."
                    : `${results.length} product${
                        results.length !== 1
                          ? "s"
                          : ""
                      } found`}
                </p>
              </div>

              {searchParams.query && (
                <div className="inline-flex w-fit items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                  "{searchParams.query}"
                </div>
              )}
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-start gap-4 rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="rounded-xl bg-red-100 p-2">
                  <AlertCircle className="text-red-600" />
                </div>

                <div>
                  <h3 className="font-semibold text-red-700">
                    Something went wrong
                  </h3>

                  <p className="mt-1 text-sm text-red-600">
                    {error}
                  </p>
                </div>
              </div>
            )}

            {/* Results */}
            <SearchResultsList
              results={results}
              loading={loading}
            />
          </main>
        </div>
      </div>
    </section>
  );
};

export default SearchResults;