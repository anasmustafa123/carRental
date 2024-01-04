import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { useFetcher } from "react-router-dom";

const dashContext = createContext("user");

const DashProvider = ({ children }) => {
  const [carsCount, setCarsCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [officesCount, setOfficesCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [reservationsCount, setReservationsCount] = useState(0);
  const [totalRevenu, setTotalRevenu] = useState(0);
  const [currentMonthRevenue, setCurrentMonthRevenue] = useState(0);
  const [currentYearRevenue, setYearRevenue] = useState(0);

  const [officesLocations, setOfficesLocations] = useState([]);
  const [getCars, setCars] = useState([]);
  const [getCustomers, setCustomers] = useState([]);
  const [getReservations, setReservations] = useState([]);

  const getCarsFun = async (officeId, sDate, eDate) => {
    let res = await fetch("http://localhost:5001/api/cars/getAvalible", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({officeId: officeId, startDate: sDate, endDate: eDate }),
    });
    let result = await res.json();
    return result;
  };
/*   const deleteCustomer = async (customerId) => {
    let res = await fetch("http://localhost:5001/api/customers/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({customerId}),
    });
    let result = await res.json();
    return result;
  };
   */

  //initializeing number of cars
  useEffect(() => {
    const fetching = async () => {
      let res = await fetch("http://localhost:5001/api/cars/count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result = await res.json();
      console.log(result.cars_num);
      setCarsCount(result.cars_num);
    };
    fetching();
  }, []);
  // initializeing number of customer
  useEffect(() => {
    const fetching = async () => {
      let res = await fetch("http://localhost:5001/api/customers/count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result = await res.json();
      console.log(result.customers_num);
      setCustomersCount(result.customers_num);
    };
    fetching();
  }, []);
  // initializeing number of reseravations
  useEffect(() => {
    const fetching = async () => {
      let res = await fetch("http://localhost:5001/api/reservations/count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result = await res.json();
      console.log(result.reservations_num);
      setReservationsCount(result.reservations_num);
    };
    fetching();
  }, []);
  // initializeing number of offices
  useEffect(() => {
    const fetching = async () => {
      let res = await fetch("http://localhost:5001/api/offices/count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result = await res.json();
      console.log(result.offices_num);
      setOfficesCount(result.offices_num);
    };
    fetching();
  }, []);

  // initializeing number of users
  useEffect(() => {
    const fetching = async () => {
      let res = await fetch("http://localhost:5001/api/users/count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result = await res.json();
      console.log(result.users_num);
      setUsersCount(result.users_num);
    };
    fetching();
  }, []);

  //initializing total revenue
  useEffect(() => {
    const fetching = async () => {
      let res = await fetch(
        "http://localhost:5001/api/reservations/totalRevenue",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        }
      );
      let result = await res.json();
      console.log(result.totalRevenue);
      setTotalRevenu(result.totalRevenue);
    };
    fetching();
  }, []);

  //initializing this year revenue
  useEffect(() => {
    const fetching = async () => {
      let res = await fetch(
        "http://localhost:5001/api/reservations/totalRevenueOnPeriod",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        }
      );
      let result = await res.json();
      console.log(result.totalRevenue);
      if (!result.totalRevenue) {
        result.totalRevenue = 0;
      }
      console.log({ shit: result.totalRevenu });
      setYearRevenue(result.totalRevenue);
    };
    fetching();
  }, []);
  //initializing this month revenue
  useEffect(() => {
    const fetching = async () => {
      let thismonth = new Date().getMonth() + 1;
      console.log({ thismonth });
      let res = await fetch(
        "http://localhost:5001/api/reservations/totalRevenueOnPeriod",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ month: thismonth }),
        }
      );
      let result = await res.json();
      console.log(result.totalRevenue);
      if (!result.totalRevenue) {
        result.totalRevenue = 0;
      }
      setCurrentMonthRevenue(result.totalRevenue);
    };
    fetching();
  }, []);

  //initializing this customers data
  useEffect(() => {
    const fetching = async () => {
      let res = await fetch("http://localhost:5001/api/customers/all", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result = await res.json();
      console.log(result);
      setCustomers(result);
    };
    fetching();
  }, []);
  //initializing this cars data
  useEffect(() => {
    const fetching = async () => {
      let res = await fetch("http://localhost:5001/api/cars/all", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result = await res.json();
      console.log(result);
      setCars(result);
    };
    fetching();
  }, []);
  //initializing reservation data
  useEffect(() => {
    const fetching = async () => {
      let res = await fetch("http://localhost:5001/api/reservations/all", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result = await res.json();
      console.log({ result });
      setReservations(result);
      let res2 = await fetch("http://localhost:5001/api/offices/allLocations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result2 = await res2.json();
      console.log({ result2 });
      setOfficesLocations(result2);
    };
    fetching();
  }, []);

  return (
    <dashContext.Provider
      value={{
        carsCount,
        setCarsCount,
        usersCount,
        setUsersCount,
        officesCount,
        setOfficesCount,
        customersCount,
        setCustomersCount,
        reservationsCount,
        setReservationsCount,
        totalRevenu,
        setTotalRevenu,
        currentMonthRevenue,
        setCurrentMonthRevenue,
        currentYearRevenue,
        getCars,
        setCars,
        getCustomers,
        setCustomers,
        getReservations,
        setReservations,
        setYearRevenue,
        getCarsFun,
        officesLocations,
      }}
    >
      {children}
    </dashContext.Provider>
  );
};

export { dashContext, DashProvider };
