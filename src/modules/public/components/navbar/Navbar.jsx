import NavLinks from "./NavLinks";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  return (
    <nav className="sticky top-20 z-40 hidden border-b bg-white lg:block">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        {/* Navigation Links */}
        <NavLinks />

        {/* Categories Mega Menu */}
        <MegaMenu />
      </div>
    </nav>
  );
};

export default Navbar;