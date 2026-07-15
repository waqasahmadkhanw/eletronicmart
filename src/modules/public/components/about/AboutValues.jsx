import {
  ShieldCheck,
  Truck,
  Headphones,
  BadgeCheck,
} from "lucide-react";

const values = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Secure Shopping",
    description:
      "Advanced security, encrypted payments, and complete buyer protection for every order.",
  },
  {
    id: 2,
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Quick nationwide shipping with real-time tracking and reliable logistics partners.",
  },
  {
    id: 3,
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Friendly customer support available to help before and after every purchase.",
  },
  {
    id: 4,
    icon: BadgeCheck,
    title: "Quality Guarantee",
    description:
      "Every product is sourced from trusted brands and backed by quality assurance.",
  },
];

const AboutValues = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-20 sm:py-24 lg:py-28">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.08),transparent_35%)]" />

      <div className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold tracking-wide text-blue-600">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything We Do Is Built
            <span className="block text-blue-600">
              Around You
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            We combine premium products, modern technology, fast
            logistics, and exceptional customer care to deliver an
            online shopping experience you can trust.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {values.map(
            ({
              id,
              icon: Icon,
              title,
              description,
            }) => (
              <div
                key={id}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-transparent to-cyan-500/0 opacity-0 transition-all duration-500 group-hover:from-blue-600/5 group-hover:to-cyan-500/10 group-hover:opacity-100" />

                {/* Top Border */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500 group-hover:w-full" />

                <div className="relative">
                  {/* Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={30} strokeWidth={2.2} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-7 text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 leading-7 text-slate-600">
                    {description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-blue-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    Learn More
                    <span>→</span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-20 rounded-[2rem] border border-blue-100 bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-2xl lg:p-10">
          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div>
              <h3 className="text-3xl font-extrabold">
                Trusted by Thousands of Customers
              </h3>

              <p className="mt-3 max-w-2xl text-blue-100">
                Experience secure shopping, genuine products, lightning-fast
                delivery, and dedicated support—all designed to give you the
                confidence to shop without compromise.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 lg:justify-end">
              <div className="rounded-2xl bg-white/10 px-6 py-5 backdrop-blur">
                <p className="text-3xl font-bold">
                  250K+
                </p>
                <p className="mt-1 text-sm text-blue-100">
                  Happy Customers
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 px-6 py-5 backdrop-blur">
                <p className="text-3xl font-bold">
                  99.8%
                </p>
                <p className="mt-1 text-sm text-blue-100">
                  Satisfaction Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;