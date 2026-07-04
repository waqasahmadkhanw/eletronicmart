import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

// import AdminSidebar from "../shared/components/sidebar/AdminSidebar";
// import AdminNavbar from "../shared/components/navbar/AdminNavbar";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-100 flex">

      <Sidebar/>

      <div className="flex-1 flex flex-col">

        {/* <Navbar/> */}
        <Header/>

        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>

      </div>

    </div>
  );
}