// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const removingCookie = async () => {
    let res9 = await fetch(
      import.meta.env.VITE_NODE_ENV == "development"
        ? `http://localhost:${import.meta.env.VITE_PORT}/api/users/logout`
        : "https://ren-a-car.onrender.com/api/users/logout",
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      }
    );
    let result9 = await res9.json();
    return result9;
  };
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

  const customerLogout = async () => {
    // Implement your logout logic (e.g., remove token from cookie)
    localStorage.removeItem("isCustomerLoggedIn");
    await removingCookie();
    setIsCustomerLoggedIn(false);
  };
  const adminLogin = () => {
    setIsAdminLoggedIn(true);
    // Implement your login logic (e.g., set token in cookie)
    localStorage.setItem("isAdminLoggedIn", JSON.stringify(true));
  };

  const adminLogout = async () => {
    // Implement your logout logic (e.g., remove token from cookie)
    localStorage.removeItem("isAdminLoggedIn");
    await removingCookie();
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
