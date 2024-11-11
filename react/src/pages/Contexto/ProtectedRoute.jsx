import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "./AuthContext";

export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) return <h1>Loading...</h1>;

  if (!isAuthenticated && !loading) return <Navigate to="/iniciar-sesion" replace />;
  return <Outlet />;
};
