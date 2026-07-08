import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ROUTES } from "./route.constants";

export default function RoleBasedRoute({
  allowedRoles,
  children,
}) {
  const { role } = useSelector(
    (state) => state.auth
  );

  
  if (!allowedRoles.includes(role)) {
    return (
      <Navigate
        to={ROUTES.UNAUTHORIZED}
        replace
      />
    );
  }

  return children;
}