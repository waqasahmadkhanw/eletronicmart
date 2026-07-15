import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import HeaderActions from "./HeaderActions";

const MainHeader = ({ onMenuClick }) => {
  return (
    <div className="border-b bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4">
        {/* Mobile Menu */}
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
          aria-label="Open Menu"
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        {/* <Link to="/" className="shrink-0"> */}
          <Logo />
        {/* </Link> */}

        {/* Search */}
        <div className="hidden flex-1 px-6 lg:block">
          <SearchBar />
        </div>

        {/* Header Actions */}
        <HeaderActions />
      </div>

      {/* Mobile Search */}
      <div className="border-t p-4 lg:hidden">
        <SearchBar />
      </div>
    </div>
  );
};

export default MainHeader;