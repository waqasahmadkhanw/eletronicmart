import { Link } from "react-router-dom";
import { BadgePercent, ArrowRight } from "lucide-react";

const DealBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 px-8 py-12 text-white shadow-2xl">
      {/* Background Decoration */}
      <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        {/* Left */}
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">
            <BadgePercent size={18} />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Limited Time Offer
            </span>
          </div>

          <h2 className="text-4xl font-extrabold leading-tight lg:text-5xl">
            Mega Deals
            <span className="block text-yellow-300">
              Up To 70% OFF
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-blue-100">
            Grab today's hottest discounts on premium electronics,
            fashion, furniture, gaming accessories, and much more.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col items-start gap-4 lg:items-end">
          <div className="rounded-2xl bg-white/15 px-6 py-5 backdrop-blur">
            <p className="text-sm uppercase tracking-widest text-blue-100">
              Sale Ends Soon
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              Don't Miss Out!
            </h3>
          </div>

          <Link
            to="/products"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Shop Deals

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DealBanner;