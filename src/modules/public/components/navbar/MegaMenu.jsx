import { Link } from "react-router-dom";
import {
  Laptop,
  Smartphone,
  Shirt,
  Watch,
  Sofa,
  Gamepad2,
  ChevronRight,
} from "lucide-react";

const categories = [
  {
    title: "Electronics",
    icon: Laptop,
    items: ["Laptops", "Monitors", "Accessories"],
  },
  {
    title: "Mobiles",
    icon: Smartphone,
    items: ["Android", "iPhone", "Tablets"],
  },
  {
    title: "Fashion",
    icon: Shirt,
    items: ["Men", "Women", "Kids"],
  },
  {
    title: "Watches",
    icon: Watch,
    items: ["Smart Watches", "Luxury", "Sports"],
  },
  {
    title: "Furniture",
    icon: Sofa,
    items: ["Living Room", "Bedroom", "Office"],
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    items: ["Consoles", "Games", "Accessories"],
  },
];

const MegaMenu = () => {
  return (
    <div className="group relative">
      {/* Trigger */}
      <button className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700">
        Browse Categories
      </button>

      {/* Dropdown */}
      <div className="invisible absolute right-0 top-full z-50 mt-3 w-[850px] rounded-2xl border bg-white p-8 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
        <div className="grid grid-cols-3 gap-8">
          {categories.map(({ title, icon: Icon, items }) => (
            <div key={title}>
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-blue-100 p-2">
                  <Icon
                    size={20}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="font-semibold text-gray-900">
                  {title}
                </h3>
              </div>

              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      to="/products"
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-100 hover:text-blue-600"
                    >
                      {item}
                      <ChevronRight size={16} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl bg-gradient-to-red from-blue-600 to-indigo-600 p-6 text-white">
          <h3 className="text-xl font-bold">
            Summer Sale
          </h3>

          <p className="mt-2 text-sm text-blue-100">
            Up to 50% off on selected products.
          </p>

          <Link
            to="/products"
            className="mt-4 inline-flex rounded-lg bg-white px-5 py-2 font-semibold text-blue-600 transition hover:bg-gray-100"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;