
// import { Outlet } from "react-router-dom";
// import Footer from "./Footer";
// import PageContainer from "./PageContainer";
// import BackToTop from "../../modules/public/components/Common/BackToTop";

// const MainLayout = () => {
//   return (
//     <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-gradient-to-blue from-slate-50 via-white to-slate-100 text-gray-900 antialiased">
//       {/* Decorative Background */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
//         <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-indigo-100/30 blur-3xl" />
//         <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-100/20 blur-3xl" />
//     </div>

//       {/* Main Content */}
//       <main className="relative z-10 flex-1">
//         <PageContainer>
//           <Outlet />
//         </PageContainer>
//       </main>

//       {/* Footer */}
//       <Footer />

//       {/* Floating Components */}
//       <BackToTop />
//     </div>
//   );
// };

// export default MainLayout;
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import PageContainer from "./PageContainer";
import BackToTop from "../../modules/public/components/Common/BackToTop";

const MainLayout = () => {
  const location = useLocation();

  // Jin pages pe PageContainer nahi chahiye
  const noContainerPages = ["/", "/contact-us", "/about", "/shop","/blog","/privacy"];
  const skipContainer = noContainerPages.includes(location.pathname);

  return (
    <div className="relative flex min-h-screen flex-col  overflow-x-hidden bg-slate-950 text-white antialiased">
      {/* Decorative Background - Dark Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-600/10 blur-3xl" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-1">
        {skipContainer ? (
          <Outlet /> 
        ) : (
          <PageContainer>
            <Outlet />
          </PageContainer>
        )}
      </main>

      {/* Footer */}
      <Footer />
      <BackToTop />
    </div>
  );
};

export default MainLayout;
