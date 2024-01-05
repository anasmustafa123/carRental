// PrivateRoute.js
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contextss/AuthContext";

const PrivateCustomerRoutes = () => {
  const { isCustomerLoggedIn } = useAuth();

  return isCustomerLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateCustomerRoutes;
