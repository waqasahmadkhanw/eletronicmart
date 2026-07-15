import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";

const HeroCTA = () => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
      {/* Primary CTA */}
      <Link
        to="/products"
        className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-red from-blue-500 to-purple-600 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30"
      >
        Shop Now
        <ArrowRight
          size={18}
          className="sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

      {/* Secondary CTA */}
      <button
        type="button"
        className="group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl border-white/20 bg-white/5 backdrop-blur-md px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-sm transition-all duration-300 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-lg"
      >
        <PlayCircle
          size={20}
          className="sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110"
        />
        Watch Demo
      </button>
    </div>
  );
};

export default HeroCTA;