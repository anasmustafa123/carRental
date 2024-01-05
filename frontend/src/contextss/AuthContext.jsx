// AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const customerLogin = () => {
    // Implement your login logic (e.g., set token in cookie)
    setIsCustomerLoggedIn(true);
  };

  const customerLogout = () => {
    // Implement your logout logic (e.g., remove token from cookie)
    setIsCustomerLoggedIn(false);
  };
  const adminLogin = () => {
    // Implement your login logic (e.g., set token in cookie)
    setIsAdminLoggedIn(true);
  };

  const adminLogout = () => {
    // Implement your logout logic (e.g., remove token from cookie)
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
