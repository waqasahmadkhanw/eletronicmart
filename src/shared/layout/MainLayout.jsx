import { Outlet } from "react-router-dom";

import Navbar from "../shared/components/navbar/Navbar";
import Footer from "../shared/components/footer/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}