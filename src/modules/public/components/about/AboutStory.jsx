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
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.08),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1200&auto=format&fit=crop&q=80"
                alt="ElectroMart Store"
                className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[520px] lg:h-[620px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
            </div>

            {/* Experience Card */}
            <div className="absolute -bottom-6 left-6 rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-200 backdrop-blur">
              <p className="text-4xl font-extrabold text-blue-600">
                10+
              </p>

              <p className="mt-1 text-sm font-medium text-slate-600">
                Years of Excellence
              </p>
            </div>

            {/* Floating Trust Card */}
            <div className="absolute -right-4 top-8 hidden rounded-3xl bg-slate-900 px-6 py-5 text-white shadow-2xl lg:block">
              <p className="text-sm text-slate-400">
                Customer Trust
              </p>

              <h4 className="mt-1 text-3xl font-bold">
                99.8%
              </h4>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 ring-1 ring-blue-100">
              Our Story
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              Delivering Technology
              <br />
              With Trust &
              <span className="text-blue-600">
                {" "}
                Innovation
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              We started with one mission—to make premium electronics
              accessible through a secure, modern, and customer-focused
              shopping experience. Today, thousands of customers trust
              ElectroMart for authentic products, competitive pricing,
              exceptional service, and reliable nationwide delivery.
            </p>

            {/* Features */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                    <CheckCircle2 size={20} />
                  </div>

                  <span className="font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Award size={28} />
                </div>

                <h4 className="mt-5 text-xl font-bold text-slate-900">
                  Premium Brands
                </h4>

                <p className="mt-3 leading-7 text-slate-600">
                  We partner only with trusted global brands to ensure
                  genuine quality and lasting reliability.
                </p>
              </div>

              <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Truck size={28} />
                </div>

                <h4 className="mt-5 text-xl font-bold text-slate-900">
                  Fast Shipping
                </h4>

                <p className="mt-3 leading-7 text-slate-600">
                  Enjoy fast, reliable, and secure delivery across the
                  country with real-time order tracking.
                </p>
              </div>

              <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <ShieldCheck size={28} />
                </div>

                <h4 className="mt-5 text-xl font-bold text-slate-900">
                  Secure Payments
                </h4>

                <p className="mt-3 leading-7 text-slate-600">
                  Shop confidently with encrypted payment gateways and
                  industry-standard security protection.
                </p>
              </div>

              <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <CheckCircle2 size={28} />
                </div>

                <h4 className="mt-5 text-xl font-bold text-slate-900">
                  Quality Guaranteed
                </h4>

                <p className="mt-3 leading-7 text-slate-600">
                  Every product undergoes strict quality verification
                  before reaching your doorstep.
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