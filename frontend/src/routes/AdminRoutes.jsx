// adminRoutes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard_Login from "../components/dashboard/Dashboard_Login";
import PrivateAdminRoutes from "./PrivateAdminRoutes";
import DashBoard from "../components/dashboard/DashBoard";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateAdminRoutes />}>
        <Route element={<DashBoard />} path="/admin" exact></Route>
      </Route>
      <Route path="/admin/login" element={<Dashboard_Login />}></Route>
    </Routes>
  );
};

export default AdminRoutes;
