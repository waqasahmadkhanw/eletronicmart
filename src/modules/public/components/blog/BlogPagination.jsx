import { ChevronLeft, ChevronRight } from "lucide-react";

const pages = [1, 2, 3, 4, 5];

const BlogPagination = () => {
  const currentPage = 1;

  return (
    <nav
      aria-label="Blog pagination"
      className="mt-16 flex items-center justify-center"
    >
      <div className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        {/* Previous */}
        <button
          type="button"
          disabled={currentPage === 1}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-gray-300"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Page Numbers */}
        {pages.map((page) => {
          const active = currentPage === page;

          return (
            <button
              key={page}
              type="button"
              className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-semibold transition-all ${
                active
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-slate-700 dark:text-gray-300"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </nav>
  );
};

export default BlogPagination;