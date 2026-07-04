// import { Outlet } from "react-router-dom";

// // import Navbar from "../shared/components/navbar/Navbar";
// // import Footer from "../shared/components/footer/Footer";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function MainLayout() {
//   return (
//     <div className="min-h-screen bg-slate-50 flex flex-col">

//       <Navbar/>

//       <main className="flex-1 container mx-auto px-4 py-6">
//         <Outlet />
//       </main>

//       <Footer />

//     </div>
//   );
// }
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;