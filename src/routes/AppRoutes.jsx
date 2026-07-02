import { Routes, Route } from "react-router-dom";

import { ROUTES, ROLES } from "./route.constants";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";
import SellerLayout from "../layouts/SellerLayout";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import RoleBasedRoute from "./RoleBasedRoute";

// Pages
import HomePage from "../features/home/pages/HomePage";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import CartPage from "../features/cart/pages/CartPage";
import WishlistPage from "../features/wishlist/pages/WishlistPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.CART} element={<CartPage />} />
      </Route>

      {/* Guest Routes */}
      <Route
        element={
          <PublicRoute>
            <AuthLayout />
          </PublicRoute>
        }
      >
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route
          path={ROUTES.REGISTER}
          element={<RegisterPage />}
        />
      </Route>

      {/* Customer Routes */}
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route
          path={ROUTES.WISHLIST}
          element={<WishlistPage />}
        />
      </Route>

      {/* Seller Routes */}
      <Route
        element={
          <ProtectedRoute>
            <RoleBasedRoute
              allowedRoles={[ROLES.SELLER]}
            >
              <SellerLayout />
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
            <RoleBasedRoute
              allowedRoles={[ROLES.ADMIN]}
            >
              <AdminLayout />
            </RoleBasedRoute>
          </ProtectedRoute>
        }
      >
        {/* Admin Pages */}
      </Route>
    </Routes>
  );
}