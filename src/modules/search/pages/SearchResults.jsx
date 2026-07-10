import { useState } from "react";

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
    <section className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <aside className="space-y-6 lg:col-span-1">
          <SearchFilters
            onApplyFilters={handleApplyFilters}
          />

          <SearchHistory
            history={history}
            onSelect={handleHistorySearch}
            onClear={clearHistory}
          />
        </aside>

        <main className="lg:col-span-3">
          {error && (
            <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 text-red-600">
              {error}
            </div>
          )}

          <SearchResultsList
            results={results}
            loading={loading}
          />
        </main>
      </div>
    </section>
  );
};

export default SearchResults;