// import { Routes, Route } from "react-router-dom";

// import { ROUTES, ROLES } from "./route.constants";

// // import MainLayout from "../layouts/MainLayout";
// // import AuthLayout from "../layouts/AuthLayout";
// // import AdminLayout from "../layouts/AdminLayout";
// // import SellerLayout from "../layouts/SellerLayout";

// import ProtectedRoute from "./ProtectedRoute";
// import PublicRoute from "./PublicRoute";
// import RoleBasedRoute from "./RoleBasedRoute";
// import Home from "../modules/public/pages/Home";
// import About from "../modules/public/pages/About";
// import Contact from "../modules/public/pages/Contact";
// import Privacy from "../modules/public/pages/Privacy";
// import MainLayout from "../shared/layout/MainLayout";
// import AuthLayout from "../shared/layout/AuthLayout";

// // Pages
// // import Home from "../modules/public/pages/Home";
// // import About from "../modules/public/pages/About";
// // import Contact from "../modules/public/pages/Contact";
// // import Privacy from "../modules/public/pages/Privacy";
// // import LoginPage from "../features/auth/pages/LoginPage";
// // import RegisterPage from "../features/auth/pages/RegisterPage";
// // import CartPage from "../features/cart/pages/CartPage";
// // import WishlistPage from "../features/wishlist/pages/WishlistPage";

// export default function AppRoutes() {
//   return (
//     <Routes>
//       {/* Public Routes */}
//       <Route element={<MainLayout/>}>
//         <Route path={ROUTES.HOME} element={<Home/>} />
//         {/* <Route path={ROUTES.HOME} element={<About/>} />
//         <Route path={ROUTES.CART} element={<Contact/>} />
//         <Route path={ROUTES.CART} element={<Privacy/>} /> */}
//       </Route>

//       {/* Guest Routes */}
//       <Route
//         element={
//           <PublicRoute>
//             <AuthLayout/>
//           </PublicRoute>
//         }
//       >
//         <Route path={ROUTES.LOGIN} element={<LoginPage />} />
//         <Route
//           path={ROUTES.REGISTER}
//           element={<RegisterPage />}
//         />
//       </Route>

//       {/* Customer Routes */}
//       <Route
//         element={
//           <ProtectedRoute>
//             <MainLayout />
//           </ProtectedRoute>
//         }
//       >
//         <Route
//           path={ROUTES.WISHLIST}
//           element={<WishlistPage />}
//         />
//       </Route>

//       {/* Seller Routes */}
//       <Route
//         element={
//           <ProtectedRoute>
//             <RoleBasedRoute
//               allowedRoles={[ROLES.SELLER]}
//             >
//               <SellerLayout />
//             </RoleBasedRoute>
//           </ProtectedRoute>
//         }
//       >
//         {/* Seller Pages */}
//       </Route>

//       {/* Admin Routes */}
//       <Route
//         element={
//           <ProtectedRoute>
//             <RoleBasedRoute
//               allowedRoles={[ROLES.ADMIN]}
//             >
//               <AdminLayout />
//             </RoleBasedRoute>
//           </ProtectedRoute>
//         }
//       >
//         {/* Admin Pages */}
//       </Route>
//     </Routes>
//   );
// }
import { Routes, Route } from "react-router-dom";
import { ROUTES, ROLES } from "./route.constants";
// import ScrollToTop from "../modules/public/components/common/ScrollToTop";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import RoleBasedRoute from "./RoleBasedRoute";

import MainLayout from "../shared/layout/MainLayout";
import AuthLayout from "../shared/layout/AuthLayout";

import Home from "../modules/public/pages/Home";
import About from "../modules/public/pages/About";
import Contact from "../modules/public/pages/Contact";
import Privacy from "../modules/public/pages/Privacy";
import ScrollToTop from "../modules/public/components/Common/ScrollToTop";

export default function AppRoutes() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      {/* Public Routes */}
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.PRIVACY} element={<Privacy />} />
      </Route>

      {/* Guest Routes */}
      <Route
        element={
          <PublicRoute>
            <AuthLayout />
          </PublicRoute>
        }
      >
        {/* Add LoginPage and RegisterPage imports when you create them */}
      </Route>

      {/* Customer Routes */}
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        {/* Add WishlistPage, CartPage imports when you create them */}
      </Route>

      {/* Seller Routes */}
      <Route
        element={
          <ProtectedRoute>
            <RoleBasedRoute allowedRoles={[ROLES.SELLER]}>
              {/* Add SellerLayout import when you create it */}
            </RoleBasedRoute>
          </ProtectedRoute>
        }
      >
        {/* Seller Pages */}
      </Route>

      {/* Admin Routes */}
      <Route
        element={
          <ProtectedRoute>
            <RoleBasedRoute allowedRoles={[ROLES.ADMIN]}>
              {/* Add AdminLayout import when you create it */}
            </RoleBasedRoute>
          </ProtectedRoute>
        }
      >
        {/* Admin Pages */}
      </Route>
    </Routes>
    </>
  );
}