import React from "react";
import {
  History,
  Trash2,
  Search,
  ArrowUpRight,
  Clock3,
} from "lucide-react";

const SearchHistory = ({
  history = [],
  onSelect,
  onClear,
}) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-900 to-slate-800 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-white/10 p-2 text-white">
            <History size={20} />
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">
              Recent Searches
            </h3>
            <p className="text-xs text-slate-300">
              Quickly access previous searches
            </p>
          </div>
        </div>

        {!!history.length && (
          <button
            type="button"
            onClick={onClear}
            className="flex items-center gap-2 rounded-xl border border-red-400/20 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-200 transition hover:bg-red-500/20"
          >
            <Trash2 size={16} />
            <span className="hidden sm:inline">
              Clear
            </span>
          </button>
        )}
      </div>

      {/* Empty State */}
      {!history.length ? (
        <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
          <div className="mb-4 rounded-2xl bg-slate-100 p-4">
            <Clock3
              size={34}
              className="text-slate-400"
            />
          </div>

          <h4 className="text-base font-semibold text-slate-800">
            No Recent Searches
          </h4>

          <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
            Your recent searches will appear here so
            you can quickly search again.
          </p>
        </div>
      ) : (
        <div className="p-4">
          <ul className="space-y-2">
            {history.map((item, index) => {
              const value =
                typeof item === "string"
                  ? item
                  : item.query ||
                    item.keyword ||
                    "";

              return (
                <li
                  key={
                    item._id ||
                    item.id ||
                    index
                  }
                >
                  <button
                    type="button"
                    onClick={() =>
                      onSelect?.(value)
                    }
                    className="group flex w-full items-center justify-between rounded-2xl border border-transparent bg-slate-50 px-4 py-3 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="rounded-lg bg-blue-100 p-2 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                        <Search size={16} />
                      </div>

                      <span className="truncate text-sm font-medium text-slate-700 sm:text-[15px]">
                        {value}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-slate-400 transition group-hover:text-blue-600"
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Footer */}
          <div className="mt-5 rounded-2xl bg-slate-50 p-4">
            <p className="text-center text-xs leading-5 text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-700">
                {history.length}
              </span>{" "}
              recent{" "}
              {history.length === 1
                ? "search"
                : "searches"}.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchHistory;