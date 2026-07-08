import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      {/* Header */}

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex flex-1 flex-col">
          {/* Breadcrumb */}
          <div className="border-b bg-white px-6 py-4">
            <Breadcrumb />
          </div>

          {/* Content */}
          <main className="flex-1 overflow-y-auto p-6">
            <div className="mx-auto max-w-7xl">
              <Outlet />
            </div>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;