import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePageChange = (page) => {
    if (
      page >= 1 &&
      page <= totalPages &&
      page !== currentPage
    ) {
      onPageChange?.(page);
    }
  };

  return (
    <nav className="flex items-center justify-center gap-2">
      {/* Previous */}
      <button
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-300 bg-white transition hover:border-blue-600 hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Pages */}
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => handlePageChange(page)}
          className={clsx(
            "flex h-11 w-11 items-center justify-center rounded-xl border font-semibold transition-all duration-300",
            currentPage === page
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-gray-300 bg-white text-gray-700 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
          )}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-300 bg-white transition hover:border-blue-600 hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        <ChevronRight size={18} />
      </button>
    </nav>
  );
};

export default Pagination;