import {
  SearchX,
  RotateCcw,
  Sparkles,
} from "lucide-react";

const NoResults = ({
  title = "No Results Found",
  message = "We couldn't find anything matching your search. Try different keywords or adjust your filters.",
  onReset,
}) => {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 px-6 py-12 text-center shadow-sm">
      {/* Illustration */}
      <div className="relative">
        <div className="absolute -left-4 -top-4 rounded-full bg-blue-100 p-2">
          <Sparkles
            size={18}
            className="text-blue-600"
          />
        </div>

        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 shadow-inner">
          <SearchX
            size={56}
            className="text-blue-600"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-8 max-w-lg">
        <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
          {title}
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
          {message}
        </p>
      </div>

      {/* Suggestions */}
      <div className="mt-8 rounded-2xl bg-white px-6 py-5 shadow-sm ring-1 ring-slate-100">
        <h4 className="mb-3 text-sm font-semibold text-slate-700">
          You can try:
        </h4>

        <ul className="space-y-2 text-left text-sm text-slate-500">
          <li>• Check your spelling.</li>
          <li>• Use fewer or more general keywords.</li>
          <li>• Remove or adjust active filters.</li>
          <li>• Browse products by category.</li>
        </ul>
      </div>

      {/* Action */}
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
        >
          <RotateCcw size={18} />
          Clear Filters
        </button>
      )}
    </div>
  );
};

export default NoResults;