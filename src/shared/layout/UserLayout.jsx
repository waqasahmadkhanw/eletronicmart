import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";

const UserLayout = () => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 text-gray-900 antialiased">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-indigo-100/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-100/20 blur-3xl" />
      </div>

      {/* Header */}
      <Header />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex-1">
        <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb />
          </div>

          {/* Content Card */}
          <section className="overflow-hidden rounded-3xl border border-gray-200/70 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 sm:p-6 lg:p-8 lg:shadow-lg">
            <Outlet />
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UserLayout;