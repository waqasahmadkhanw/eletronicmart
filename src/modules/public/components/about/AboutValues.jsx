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
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-600/20 dark:text-blue-400">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">
            Everything We Do Is Built
            <span className="text-blue-600"> Around You</span>
          </h2>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-400">
            We focus on delivering a seamless shopping experience with
            authentic products, competitive pricing, and exceptional
            customer service.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {values.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-600/20">
                <Icon size={30} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;