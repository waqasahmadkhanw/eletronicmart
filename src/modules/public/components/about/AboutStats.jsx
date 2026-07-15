import {
  Users,
  ShoppingBag,
  PackageCheck,
  Award,
} from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Users,
    value: "250K+",
    label: "Happy Customers",
  },
  {
    id: 2,
    icon: ShoppingBag,
    value: "50K+",
    label: "Products Sold",
  },
  {
    id: 3,
    icon: PackageCheck,
    value: "500+",
    label: "Premium Brands",
  },
  {
    id: 4,
    icon: Award,
    value: "10+",
    label: "Years Experience",
  },
];

const AboutStats = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.12),transparent_35%)]" />

      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-blue-400">
            Our Achievements
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Trusted by Thousands
            <span className="block text-blue-500">
              Around the World
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            Every milestone reflects our dedication to premium quality,
            trusted service, fast delivery, and an exceptional shopping
            experience for customers worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ id, icon: Icon, value, label }) => (
            <div
              key={id}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-brown from-slate-900 to-slate-950 p-8 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/60 hover:shadow-blue-500/10"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-brown from-blue-600/0 via-transparent to-cyan-500/0 opacity-0 transition duration-500 group-hover:from-blue-600/10 group-hover:to-cyan-500/10 group-hover:opacity-100" />

              <div className="relative">
                {/* Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-500 ring-1 ring-blue-500/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={30} strokeWidth={2.2} />
                </div>

                {/* Value */}
                <h3 className="mt-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  {value}
                </h3>

                {/* Label */}
                <p className="mt-3 text-center text-base font-medium text-slate-400">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/60 px-6 py-8 backdrop-blur-sm">
          <div className="grid gap-6 text-center sm:grid-cols-3">
            <div>
              <h4 className="text-xl font-bold text-white">
                99.8%
              </h4>
              <p className="mt-1 text-sm text-slate-400">
                Customer Satisfaction
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white">
                Worldwide
              </h4>
              <p className="mt-1 text-sm text-slate-400">
                Fast & Secure Delivery
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white">
                Premium
              </h4>
              <p className="mt-1 text-sm text-slate-400">
                Genuine Products Only
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;