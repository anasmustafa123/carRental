// PrivateRoute.js
import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contextss/AuthContext";

const PrivateCustomerRoutes = () => {
  const { isCustomerLoggedIn } = useAuth();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirect after a delay (e.g., 1000 milliseconds)
      setRedirect(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return isCustomerLoggedIn ? <Outlet /> : (redirect && <Navigate to="/login" />);
};

export default PrivateCustomerRoutes;
