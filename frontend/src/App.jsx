import DashBoard from "./components/dashboard/DashBoard";
import Website from "./components/website/pages/Website";
import Register from "./components/website/pages/Register";
import Dashboard_Login from "./components/dashboard/Dashboard_Login";
import PrivateAdminRoutes from "./routes/PrivateAdminRoutes";
import PrivateCustomerRoutes from "./routes/PrivateCustomerRoutes";
import Login from "./components/website/pages/Login";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/admin/login" element={<Dashboard_Login />}></Route>
        <Route element={<PrivateAdminRoutes />}>
          <Route element={<DashBoard />} path="/admin" exact></Route>
        </Route>
        <Route element={<PrivateCustomerRoutes />}>
          <Route path="/" element={<Website></Website>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
