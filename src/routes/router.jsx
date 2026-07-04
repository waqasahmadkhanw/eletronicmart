import { createBrowserRouter } from "react-router-dom";

// import AdminLayout from "../shared/layout/AdminLayout";
// import AuthLayout from "../shared/layout/AuthLayout";
import MainLayout from "../shared/layout/MainLayout";

import ProtectedRoute from "./ProtectedRoute";
import RoleBasedRoute from "./RoleBasedRoute";
import { ROLES, ROUTES } from "./route.constants";

// Pages
import Home from "../modules/public/pages/Home";
import About from "../modules/public/pages/About";
import Contact from "../modules/public/pages/Contact";
import Privacy from "../modules/public/pages/Privacy";
import AdminLayout from "../shared/layout/AdminLayout";
import AuthLayout from "../shared/layout/AuthLayout";
import Terms from "../modules/public/pages/Terms";
// import LoginPage from "../features/auth/pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      { path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.ABOUT, element: <About /> },
      { path: ROUTES.CONTACT, element: <Contact /> },
      { path: ROUTES.PRIVACY, element: <Privacy /> },
      { path: ROUTES.PRIVACY, element: <Terms/> },
    ]
  },
  // {
  //   path: "/login",
  //   element: <PublicRoute><AuthLayout /></PublicRoute>, // PublicRoute bhi add karlo
  //   children: [
  //     { path: ROUTES.LOGIN, element: <LoginPage /> }
  //   ]
  // },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <RoleBasedRoute allowedRoles={[ROLES.ADMIN]}>
          <AdminLayout />
        </RoleBasedRoute>
      </ProtectedRoute>
    ),
    children: [
      // { path: "dashboard", element: <AdminDashboard /> }
    ]
  },
]);

export default router;