import { Sparkles, ArrowRight } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="space-y-6">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
        <Sparkles size={16} />
        <span>New Collection 2026</span>
      </div>

      {/* Heading */}
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Discover the
          <span className="block text-blue-600">
            Future of Shopping
          </span>
        </h1>

        <p className="max-w-xl text-lg leading-8 text-gray-600">
          Explore thousands of premium products from trusted brands.
          Fast delivery, secure payments, exclusive offers, and an
          exceptional shopping experience—all in one place.
        </p>
      </div>

      {/* Highlights */}
      <div className="flex flex-wrap gap-3">
        <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
          ✓ Free Shipping
        </span>

        <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
          ✓ Secure Payment
        </span>

        <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
          ✓ Easy Returns
        </span>
      </div>

      {/* Featured Offer */}
      <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white">
          <ArrowRight size={22} />
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">
            Up to 50% OFF
          </h3>

          <p className="text-sm text-gray-500">
            Limited-time deals on selected premium products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;