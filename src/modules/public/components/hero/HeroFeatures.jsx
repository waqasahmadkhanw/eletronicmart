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
    <div className="grid gap-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg md:grid-cols-2 xl:grid-cols-4">
      {features.map(({ icon: Icon, title, description }) => (
        <div
          key={title}
          className="flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-gray-50"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
            <Icon size={28} />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {title}
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-500">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroFeatures;