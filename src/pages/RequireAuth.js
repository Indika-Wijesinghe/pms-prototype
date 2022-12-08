import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const RequireAuth = ({ allowedRoles }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const userRole = user?.role;

  if (userRole && allowedRoles.indexOf(userRole) !== -1) {
    return <Outlet />;
  } else {
    <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default RequireAuth;
