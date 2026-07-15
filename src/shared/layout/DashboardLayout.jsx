import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-gradient-to-brown from-slate-50 via-gray-50 to-blue-50/40">
      {/* Header */}
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Breadcrumb */}
          <header className="sticky top-0 z-30 border-b border-gray-200/70 bg-white/90 px-4 py-4 shadow-sm backdrop-blur-md sm:px-6 lg:px-8">
            <Breadcrumb />
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto">
            <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
              <div className="overflow-hidden rounded-3xl border border-gray-200/70 bg-white shadow-sm transition-all duration-300 lg:shadow-lg">
                <div className="p-4 sm:p-6 lg:p-8">
                  <Outlet />
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;