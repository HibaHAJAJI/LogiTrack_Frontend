import { Navigate } from "react-router-dom";

function RoleGuard({ children, allowedRoles }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default RoleGuard;