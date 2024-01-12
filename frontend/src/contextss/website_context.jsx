import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
const websiteContext = createContext("user");

const WebsiteProvider = ({ children }) => {
  const [officesLocations, setOfficesLocations] = useState([]);

  const { isCustomerLoggedIn } = useAuth();

  const getCarsFun = async (officeId, sDate, eDate) => {
    let res9 = await fetch("https://ren-a-car.onrender.com/api/cars/getAvalible", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        officeId: officeId,
        startDate: sDate,
        endDate: eDate,
      }),
    });
    let result9 = await res9.json();
    return result9;
  };
  const getOfficeIdFromLocation = async (officeLocation) => {
    let res9 = await fetch("https://ren-a-car.onrender.com/api/offices/getId", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        location: officeLocation,
      }),
    });
    let result9 = await res9.json();
    return result9;
  };

  const removingCookie = async () => {
    let res9 = await fetch("https://ren-a-car.onrender.com/api/users/logout", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
    let result9 = await res9.json();
    return result9;
  };
  //initializing reservation data
  useEffect(() => {
    const fetching = async () => {
      let res2 = await fetch("https://ren-a-car.onrender.com/api/offices/allLocations", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result2 = await res2.json();
      console.log({ result2 });
      setOfficesLocations(result2);
    };
    fetching();
  }, []);
  //initializing reservation data
  useEffect(() => {
    const fetching = async () => {
      let res2 = await fetch("https://ren-a-car.onrender.com/api/offices/allLocations", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result2 = await res2.json();
      console.log({ result2 });
      setOfficesLocations(result2);
    };
    fetching();
  }, [isCustomerLoggedIn]);

  return (
    <websiteContext.Provider
      value={{
        removingCookie,
        setOfficesLocations,
        getCarsFun,
        getOfficeIdFromLocation,
        officesLocations,
      }}
    >
      {children}
    </websiteContext.Provider>
  );
};

export { websiteContext, WebsiteProvider };
