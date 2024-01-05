// adminRoutes.js
import React from "react";
import { Route, Routes, Switch } from "react-router-dom";
import Register from "../components/website/pages/Register";
import Website from "../components/website/pages/Website";
import DashBoard from "../components/dashboard/DashBoard";
import PrivateRoute from "./PrivateAdminRoutes";
import Dashboard_Login from "../components/dashboard/Dashboard_Login";

export default CustomerRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Register></Register>}></Route>
      <Route path="/" element={<Website></Website>}></Route>
    </Routes>
  );
};
