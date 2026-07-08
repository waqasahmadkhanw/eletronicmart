import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex min-h-[calc(100vh-64px)] flex-1 flex-col">
          {/* Breadcrumb */}
          <div className="border-b bg-white px-6 py-4">
            <Breadcrumb />
          </div>

          {/* Page Content */}
          <main className="flex-1 p-6">
            <Outlet />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;