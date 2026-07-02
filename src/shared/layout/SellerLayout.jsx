import { Outlet } from "react-router-dom";

import SellerSidebar from "../shared/components/sidebar/SellerSidebar";
import SellerNavbar from "../shared/components/navbar/SellerNavbar";

export default function SellerLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      <SellerSidebar />

      <div className="flex-1 flex flex-col">

        <SellerNavbar />

        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>

      </div>

    </div>
  );
}