import { Outlet } from "react-router-dom";

import SellerSidebar from "../shared/components/sidebar/SellerSidebar";
import SellerNavbar from "../shared/components/navbar/SellerNavbar";

export default function SellerLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <SellerSidebar />

        {/* Content Area */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Navbar */}
          <SellerNavbar />

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4 sm:p-6 lg:p-8">
            <div className="mx-auto w-full max-w-7xl">
              <div className="min-h-full rounded-3xl border border-slate-200/70 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 sm:p-6 lg:p-8 lg:shadow-lg">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}