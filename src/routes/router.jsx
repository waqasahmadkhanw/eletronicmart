import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../shared/layout/MainLayout";
import AdminLayout from "../shared/layout/AdminLayout";
import AuthLayout from "../shared/layout/AuthLayout";

import ProtectedRoute from "./ProtectedRoute";
import RoleBasedRoute from "./RoleBasedRoute";

import { ROLES } from "./route.constants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },

  {
    path: "/login",
    element: <AuthLayout />,
  },

  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <RoleBasedRoute
          allowedRoles={[ROLES.ADMIN]}
        >
          <AdminLayout />
        </RoleBasedRoute>
      </ProtectedRoute>
    ),
  },
]);

export default router;