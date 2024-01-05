// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    setIsCustomerLoggedIn(
      JSON.parse(localStorage.getItem("isCustomerLoggedIn"))
    );
  });

  useEffect(() => {
    setIsAdminLoggedIn(JSON.parse(localStorage.getItem("isAdminLoggedIn")));
  });
  const customerLogin = () => {
    // Implement your login logic (e.g., set token in cookie)
    setIsCustomerLoggedIn(true);
    localStorage.setItem("isCustomerLoggedIn", JSON.stringify(true));
  };

  const customerLogout = () => {
    // Implement your logout logic (e.g., remove token from cookie)
    localStorage.removeItem("isCustomerLoggedIn");
    setIsCustomerLoggedIn(false);
  };
  const adminLogin = () => {
    setIsAdminLoggedIn(true);
    // Implement your login logic (e.g., set token in cookie)
    localStorage.setItem("isAdminLoggedIn", JSON.stringify(true));
  };

  const adminLogout = () => {
    // Implement your logout logic (e.g., remove token from cookie)
    localStorage.removeItem("isAdminLoggedIn");
    setIsAdminLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isCustomerLoggedIn,
        customerLogin,
        customerLogout,
        isAdminLoggedIn,
        adminLogin,
        adminLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
