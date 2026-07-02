import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ROUTES } from "./route.constants";

export default function PublicRoute({ children }) {
  const { isAuthenticated } = useSelector(
    (state) => state.auth
  );

  if (isAuthenticated) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return children;
}