import { useState } from "react";
import {
  LayoutGrid,
  ShoppingBag,
  CreditCard,
  Truck,
  RotateCcw,
  User,
} from "lucide-react";

const categories = [
  {
    id: "all",
    label: "All",
    icon: LayoutGrid,
  },
  {
    id: "orders",
    label: "Orders",
    icon: ShoppingBag,
  },
  {
    id: "payments",
    label: "Payments",
    icon: CreditCard,
  },
  {
    id: "shipping",
    label: "Shipping",
    icon: Truck,
  },
  {
    id: "returns",
    label: "Returns",
    icon: RotateCcw,
  },
  {
    id: "account",
    label: "Account",
    icon: User,
  },
];

const FAQCategories = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {categories.map(({ id, label, icon: Icon }) => {
        const active = activeCategory === id;

        return (
          <button
            key={id}
            type="button"
            onClick={() => setActiveCategory(id)}
            className={`inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              active
                ? "bg-blue-600 text-white shadow-lg"
                : "border border-gray-200 bg-white text-gray-700 hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
            }`}
          >
            <Icon size={18} />
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default FAQCategories;