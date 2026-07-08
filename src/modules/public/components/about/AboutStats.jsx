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
    <section className="bg-slate-950 py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-400">
            Our Achievements
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Trusted By Thousands
            <br />
            Around The World
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            Our numbers reflect our commitment to quality,
            customer satisfaction, and continuous growth.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ id, icon: Icon, value, label }) => (
            <div
              key={id}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-500 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={32} />
              </div>

              <h3 className="mt-6 text-4xl font-extrabold text-white">
                {value}
              </h3>

              <p className="mt-2 text-gray-400">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;