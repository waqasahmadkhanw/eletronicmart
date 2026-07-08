import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
} from "lucide-react";

const TopBar = () => {
  return (
    <div className="hidden border-b bg-gray-900 text-sm text-gray-300 lg:block">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4">
        {/* Left */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+923001234567"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <Phone size={14} />
            <span>+92 300 1234567</span>
          </a>

          <a
            href="mailto:support@mernstore.com"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <Mail size={14} />
            <span>support@mernstore.com</span>
          </a>

          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>Free Shipping on Orders Over $99</span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1 transition hover:text-white">
            English
            <ChevronDown size={14} />
          </button>

          <button className="flex items-center gap-1 transition hover:text-white">
            USD
            <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;