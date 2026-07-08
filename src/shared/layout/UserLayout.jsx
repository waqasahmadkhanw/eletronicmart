import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";

const UserLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">

      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-6">
          {/* Breadcrumb */}
          <Breadcrumb />

          {/* Page Content */}
          <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
            <Outlet />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UserLayout;