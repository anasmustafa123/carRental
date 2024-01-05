import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DashProvider } from "./contextss/dashboard_context.jsx";
import { AuthProvider } from "./contextss/AuthContext.jsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <DashProvider>
          <ToastContainer></ToastContainer>
          <App />
        </DashProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
