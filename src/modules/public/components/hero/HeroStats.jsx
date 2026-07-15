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
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Package,
    value: "15K+",
    label: "Products",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: ShoppingBag,
    value: "350+",
    label: "Brands",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: Star,
    value: "4.9",
    label: "Customer Rating",
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
];

const HeroStats = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 mt-8 md:mt-10">
      {stats.map(({ icon: Icon, value, label, gradient }) => (
        <div
          key={label}
          className="group relative overflow-hidden rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)]"
        >
          {/* Glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" 
            style={{background: `linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(168,85,247,0.1) 100%)`}}
          />

          {/* Icon */}
          <div className={`mb-4 flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} border border-white/10 text-white group-hover:scale-110 transition-all duration-300`}>
            <Icon size={22} className="sm:h-6 sm:w-6" />
          </div>

          {/* Value */}
          <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {value}
          </h3>

          {/* Label */}
          <p className="mt-1.5 text-sm text-gray-400">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;