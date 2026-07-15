// import TopBar from "./TopBar";
// import MainHeader from "./MainHeader";

// const Header = () => {
//   return (
//     <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
//       <TopBar />
//       <MainHeader />
//     </header>
//   );
// };

// export default Header;
import { useState } from "react"; // 1
import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import MobileMenu from "./MobileMenu"; // 2

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // 3

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 shadow-sm backdrop-blur-xl"> {/* dark */}
        <TopBar />
        <MainHeader onMenuClick={() => setIsMobileMenuOpen(true)} /> {/* 4. prop pass */}
      </header>

      {/* 5. MobileMenu yahan render karo */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Header;