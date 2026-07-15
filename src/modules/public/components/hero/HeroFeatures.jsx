import {
  Truck,
  ShieldCheck,
  RefreshCw,
  CreditCard,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free delivery on orders over $99.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment", 
    description: "100% protected online payments.",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day hassle-free return policy.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Pay with cards, wallets, or installments.",
  },
];

const HeroFeatures = () => {
  return (
    <div className="grid gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6 shadow-2xl 
      grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      {features.map(({ icon: Icon, title, description }) => (
        <div
          key={title}
          className="flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl p-3 sm:p-4 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]"
        >
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 text-blue-300">
            <Icon size={24} className="sm:w-7 sm:h-7" />
          </div>

          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white">
              {title}
            </h3>

            <p className="mt-1 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-400">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroFeatures;