import { Sparkles, ArrowRight } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border-blue-500/30 bg-blue-500/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-blue-300">
        <Sparkles size={16} className="text-blue-400" />
        <span>New Collection 2026</span>
      </div>

      {/* Heading */}
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
          Discover the
          <span className="block bg-gradient-to-red from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Future of Shopping
          </span>
        </h1>

        <p className="max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
          Explore thousands of premium products from trusted brands.
          Fast delivery, secure payments, exclusive offers, and an
          exceptional shopping experience—all in one place.
        </p>
      </div>

      {/* Highlights - Mobile pe 1 line me scroll */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        <span className="rounded-full bg-white/10 backdrop-blur-sm border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-200">
          ✓ Free Shipping
        </span>
        <span className="rounded-full bg-white/10 backdrop-blur-sm border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-200">
          ✓ Secure Payment
        </span>
        <span className="rounded-full bg-white/10 backdrop-blur-sm border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-200">
          ✓ Easy Returns
        </span>
      </div>

      {/* Featured Offer */}
      <div className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 sm:p-5 shadow-lg">
        <div className="flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          <ArrowRight size={20} className="sm:w-6 sm:h-6" />
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white">
            Up to 50% OFF
          </h3>
          <p className="text-xs sm:text-sm text-gray-400">
            Limited-time deals on selected premium products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;