import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";

const HeroCTA = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      {/* Primary CTA */}
      <Link
        to="/products"
        className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
      >
        Shop Now

        <ArrowRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

      {/* Secondary CTA */}
      <button
        type="button"
        className="group inline-flex items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-800 shadow-sm transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg"
      >
        <PlayCircle
          size={22}
          className="transition-transform duration-300 group-hover:scale-110"
        />

        Watch Demo
      </button>
    </div>
  );
};

export default HeroCTA;