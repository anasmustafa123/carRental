// PrivateRoute.js
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contextss/AuthContext";
import { useState, useEffect } from "react";
const PrivateAdminRoutes = () => {
  const { isAdminLoggedIn } = useAuth();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirect after a delay (e.g., 1000 milliseconds)
      setRedirect(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);
  
  return isAdminLoggedIn ? (
    <Outlet />
  ) : (
    redirect && <Navigate to="/admin/login" />
  );
};

export default PrivateAdminRoutes;
