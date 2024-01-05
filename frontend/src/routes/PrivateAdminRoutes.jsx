// PrivateRoute.js
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contextss/AuthContext";

const PrivateAdminRoutes = () => {
  const { isAdminLoggedIn } = useAuth();
  isAdminLoggedIn
  return isAdminLoggedIn ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default PrivateAdminRoutes;
