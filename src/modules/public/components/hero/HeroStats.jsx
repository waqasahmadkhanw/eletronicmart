import {
  Users,
  Package,
  ShoppingBag,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "120K+",
    label: "Happy Customers",
  },
  {
    icon: Package,
    value: "15K+",
    label: "Products",
  },
  {
    icon: ShoppingBag,
    value: "350+",
    label: "Brands",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Customer Rating",
  },
];

const HeroStats = () => {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map(({ icon: Icon, value, label }) => (
        <div
          key={label}
          className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <Icon size={24} />
          </div>

          <h3 className="text-2xl font-bold text-gray-900">
            {value}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;