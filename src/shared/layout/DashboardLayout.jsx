import { Outlet } from "react-router-dom";

import DashboardSidebar from "../shared/components/sidebar/DashboardSidebar";
import DashboardNavbar from "../shared/components/navbar/DashboardNavbar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-100 flex">

      <DashboardSidebar />

      <div className="flex-1 flex flex-col">

        <DashboardNavbar />

        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>

      </div>

    </div>
  );
}