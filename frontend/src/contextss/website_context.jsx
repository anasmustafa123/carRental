import React from "react";
import { createContext } from "react";

const userContext = createContext();

const UserProvider = ({ children }) => {
  return <userContext.Provider value={{ x: 6 }}>{children}</userContext.Provider>;
};

export { userContext, UserProvider };