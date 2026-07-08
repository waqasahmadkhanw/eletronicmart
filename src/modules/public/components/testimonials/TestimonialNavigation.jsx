import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const TestimonialNavigation = ({
  current,
  total,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
      {/* Pagination */}
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {}}
            className={`h-3 rounded-full transition-all duration-300 ${
              current === index
                ? "w-10 bg-blue-600"
                : "w-3 bg-gray-300 hover:bg-blue-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onPrevious}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
          aria-label="Previous Testimonial"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          type="button"
          onClick={onNext}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm transition hover:bg-blue-700"
          aria-label="Next Testimonial"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialNavigation;