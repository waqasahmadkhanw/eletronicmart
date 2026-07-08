import {
  Award,
  CheckCircle2,
  ShieldCheck,
  Truck,
} from "lucide-react";

const features = [
  "100% Genuine Products",
  "Fast Nationwide Delivery",
  "Secure Online Payments",
  "24/7 Customer Support",
];

const AboutStory = () => {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900"
              alt="Our Story"
              className="w-full rounded-3xl object-cover shadow-2xl"
            />

            <div className="absolute -bottom-8 -right-8 rounded-2xl bg-blue-600 p-6 text-white shadow-xl">
              <p className="text-4xl font-bold">10+</p>
              <p className="mt-1 text-sm">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-600/20 dark:text-blue-400">
              Our Story
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">
              Delivering Technology
              <br />
              With Trust &
              <span className="text-blue-600"> Innovation</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600 dark:text-gray-300">
              We started with one mission—to make premium electronics
              accessible through a secure, modern, and customer-focused
              online shopping experience. Today, thousands of customers
              trust ElectroMart for authentic products, competitive
              pricing, and reliable service.
            </p>

            <div className="mt-8 space-y-4">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="text-green-500"
                  />

                  <span className="font-medium text-gray-700 dark:text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 p-5 dark:border-slate-700">
                <Award
                  className="mb-3 text-blue-600"
                  size={30}
                />

                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Premium Brands
                </h4>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Only trusted international brands.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-5 dark:border-slate-700">
                <Truck
                  className="mb-3 text-blue-600"
                  size={30}
                />

                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Fast Shipping
                </h4>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Quick and reliable nationwide delivery.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-5 dark:border-slate-700">
                <ShieldCheck
                  className="mb-3 text-blue-600"
                  size={30}
                />

                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Secure Payments
                </h4>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Safe and encrypted checkout process.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-5 dark:border-slate-700">
                <CheckCircle2
                  className="mb-3 text-blue-600"
                  size={30}
                />

                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Quality Guaranteed
                </h4>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Every product is carefully verified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;