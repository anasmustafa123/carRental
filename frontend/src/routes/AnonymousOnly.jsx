import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contextss/AuthContext";

export default function AnonymousOnly() {
  const { isCustomerLoggedIn } = useAuth();

  return !isCustomerLoggedIn ? <Outlet /> : <Navigate to="/" />;
}
