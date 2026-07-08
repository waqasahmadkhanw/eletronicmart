import { ArrowUpRight, Play } from "lucide-react";

const HeroImage = () => {
  return (
    <div className="relative">
      {/* Background Decoration */}
      <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-8 bottom-10 h-40 w-40 rounded-full bg-indigo-200/30 blur-3xl" />

      {/* Main Image Card */}
      <div className="relative overflow-hidden rounded-3xl bg-white p-5 shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=900&auto=format&fit=crop&q=80"
          alt="Hero Banner"
          className="h-[550px] w-full rounded-2xl object-cover"
        />

        {/* Floating Offer Card */}
        <div className="absolute left-8 top-8 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">
          <p className="text-sm text-gray-500">
            Exclusive Offer
          </p>

          <h3 className="mt-1 text-3xl font-bold text-blue-600">
            50% OFF
          </h3>

          <p className="mt-2 text-sm text-gray-600">
            Premium Collection
          </p>
        </div>

        {/* Play Button */}
        <button
          className="absolute bottom-8 left-8 flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-lg transition hover:scale-105"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
            <Play
              size={18}
              fill="currentColor"
            />
          </span>

          <span className="font-semibold text-gray-800">
            Watch Video
          </span>
        </button>

        {/* Floating Product Card */}
        <div className="absolute bottom-8 right-8 w-64 rounded-2xl bg-white p-4 shadow-xl">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&auto=format&fit=crop&q=80"
              alt="Featured Product"
              className="h-20 w-20 rounded-xl object-cover"
            />

            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">
                Running Shoes
              </h4>

              <p className="mt-1 text-sm text-gray-500">
                Nike Collection
              </p>

              <div className="mt-2 flex items-center justify-between">
                <span className="font-bold text-blue-600">
                  $129
                </span>

                <button className="rounded-full bg-blue-600 p-2 text-white transition hover:bg-blue-700">
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;