import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
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

  const { isCustomerLoggedIn } = useAuth();
  //https://ren-a-car.onrender.com
  //https://ren-a-car.onrender.com
  const getCarsFun = async (officeId, sDate, eDate) => {
    let res9 = await fetch("https://ren-a-car.onrender.com/api/cars/getAvalible", {
      method: "POST",
      credentials: 'include',
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
  /*   const deleteCustomer = async (customerId) => {
    let res = await fetch("https://ren-a-car.onrender.com/api/customers/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({customerId}),
    });
    let result = await res.json();
    return result;
  };
   */
  //initializeing number of cars
  /* useEffect(() => {
    const fetching = async () => {
      let res10 = await fetch("https://ren-a-car.onrender.com/api/cars/count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result10 = await res10.json();
      console.log(result10.cars_num);
      setCarsCount(result10.cars_num);
    };
    fetching();
  }, []); */
  // initializeing number of customer
  /*  useEffect(() => {
    const fetching = async () => {
      let res11 = await fetch("https://ren-a-car.onrender.com/api/customers/count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result11 = await res11.json();
      console.log(result11.customers_num);
      setCustomersCount(result11.customers_num);
    };
    fetching();
  }, []); */
  // initializeing number of reseravations
  /* useEffect(() => {
    const fetching = async () => {
      let res12 = await fetch("https://ren-a-car.onrender.com/api/reservations/count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result12 = await res12.json();
      console.log(result12.reservations_num);
      setReservationsCount(result12.reservations_num);
    };
    fetching();
  }, []); */
  // initializeing number of offices
  /*   useEffect(() => {
    const fetching = async () => {
      let res8 = await fetch("https://ren-a-car.onrender.com/api/offices/count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result8 = await res8.json();
      console.log(result8.offices_num);
      setOfficesCount(result8.offices_num);
    };
    fetching();
  }, []); */

  // initializeing number of users
  /*   useEffect(() => {
    const fetching = async () => {
      let res7 = await fetch("https://ren-a-car.onrender.com/api/users/count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result7 = await res7.json();
      console.log(result7.users_num);
      setUsersCount(result7.users_num);
    };
    fetching();
  }, []);
 */
  //initializing total revenue
  /*   useEffect(() => {
    const fetching = async () => {
      let res6 = await fetch(
        "https://ren-a-car.onrender.com/api/reservations/totalRevenue",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        }
      );
      let result6 = await res6.json();
      console.log(result6.totalRevenue);
      setTotalRevenu(result6.totalRevenue);
    };
    fetching();
  }, []); */

  //initializing this year revenue
  /*   useEffect(() => {
    const fetching = async () => {
      let res5 = await fetch(
        "https://ren-a-car.onrender.com/api/reservations/totalRevenueOnPeriod",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        }
      );
      let result5 = await res5.json();
      console.log(result5.totalRevenue);
      if (!result5.totalRevenue) {
        result5.totalRevenue = 0;
      }
      console.log({ shit: result5.totalRevenu });
      setYearRevenue(result5.totalRevenue);
    };
    fetching();
  }, []); */
  //initializing this month revenue
  /*   useEffect(() => {
    const fetching = async () => {
      let thismonth = new Date().getMonth() + 1;
      console.log({ thismonth });
      let res13 = await fetch(
        "https://ren-a-car.onrender.com/api/reservations/totalRevenueOnPeriod",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ month: thismonth }),
        }
      );
      let result13 = await res13.json();
      console.log(result13.totalRevenue);
      if (!result13.totalRevenue) {
        result13.totalRevenue = 0;
      }
      setCurrentMonthRevenue(result13.totalRevenue);
    };
    fetching();
  }, []); */
  //initializing this customers data
  /*   useEffect(() => {
    const fetching = async () => {
      let res4 = await fetch("https://ren-a-car.onrender.com/api/customers/all", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result4 = await res4.json();
      console.log(result4);
      setCustomers(result4);
    };
    fetching();
  }, []); */
  //initializing this cars data
  /*   useEffect(() => {
    const fetching = async () => {
      let res3 = await fetch("https://ren-a-car.onrender.com/api/cars/all", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result3 = await res3.json();
      console.log(result3);
      setCars(result3);
    };
    fetching();
  }, []); */
  //initializing reservation data
  useEffect(() => {
    const fetching = async () => {
      /* let res = await fetch("https://ren-a-car.onrender.com/api/reservations/all", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result = await res.json();
      console.log({ result });
      setReservations(result);
      let res2 = await fetch("https://ren-a-car.onrender.com/api/offices/allLocations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result2 = await res2.json();
      console.log({ result2 });
      setOfficesLocations(result2);
      let res3 = await fetch("https://ren-a-car.onrender.com/api/cars/all", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result3 = await res3.json();
      console.log(result3);
      setCars(result3);
      let res4 = await fetch("https://ren-a-car.onrender.com/api/customers/all", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result4 = await res4.json();
      console.log(result4);
      setCustomers(result4);
      let res5 = await fetch(
        "https://ren-a-car.onrender.com/api/reservations/totalRevenueOnPeriod",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        }
      );
      let result5 = await res5.json();
      console.log(result5.totalRevenue);
      if (!result5.totalRevenue) {
        result5.totalRevenue = 0;
      }
      console.log({ shit: result5.totalRevenu });
      setYearRevenue(result5.totalRevenue);
      let res6 = await fetch(
        "https://ren-a-car.onrender.com/api/reservations/totalRevenue",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        }
      );
      let result6 = await res6.json();
      console.log(result6.totalRevenue);
      setTotalRevenu(result6.totalRevenue);
      let res7 = await fetch("https://ren-a-car.onrender.com/api/users/count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result7 = await res7.json();
      console.log(result7.users_num);
      setUsersCount(result7.users_num);
      let res8 = await fetch("https://ren-a-car.onrender.com/api/offices/count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result8 = await res8.json();
      console.log(result8.offices_num);
      setOfficesCount(result8.offices_num);
      let res10 = await fetch("https://ren-a-car.onrender.com/api/cars/count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result10 = await res10.json();
      console.log(result10.cars_num);
      setCarsCount(result10.cars_num);
      let res11 = await fetch("https://ren-a-car.onrender.com/api/customers/count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result11 = await res11.json();
      console.log(result11.customers_num);
      setCustomersCount(result11.customers_num);
      let res12 = await fetch("https://ren-a-car.onrender.com/api/reservations/count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result12 = await res12.json();
      console.log(result12.reservations_num);
      setReservationsCount(result12.reservations_num);
      //
      let thismonth = new Date().getMonth() + 1;
      console.log({ thismonth });
      let res13 = await fetch(
        "https://ren-a-car.onrender.com/api/reservations/totalRevenueOnPeriod",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ month: thismonth }),
        }
      );
      let result13 = await res13.json();
      console.log(result13.totalRevenue);
      if (!result13.totalRevenue) {
        result13.totalRevenue = 0;
      }
      setCurrentMonthRevenue(result13.totalRevenue); */
    };
    fetching();
  }, []);
/*   useEffect(() => {
    const fetching = async () => {
      let res = await fetch("https://ren-a-car.onrender.com/api/reservations/all", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result = await res.json();
      console.log({ result });
      setReservations(result);
      let res2 = await fetch("https://ren-a-car.onrender.com/api/offices/allLocations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result2 = await res2.json();
      console.log({ result2 });
      setOfficesLocations(result2);
      let res3 = await fetch("https://ren-a-car.onrender.com/api/cars/all", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result3 = await res3.json();
      console.log(result3);
      setCars(result3);
      let res4 = await fetch("https://ren-a-car.onrender.com/api/customers/all", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result4 = await res4.json();
      console.log(result4);
      setCustomers(result4);
      let res5 = await fetch(
        "https://ren-a-car.onrender.com/api/reservations/totalRevenueOnPeriod",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        }
      );
      let result5 = await res5.json();
      console.log(result5.totalRevenue);
      if (!result5.totalRevenue) {
        result5.totalRevenue = 0;
      }
      console.log({ shit: result5.totalRevenu });
      setYearRevenue(result5.totalRevenue);
      let res6 = await fetch(
        "https://ren-a-car.onrender.com/api/reservations/totalRevenue",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        }
      );
      let result6 = await res6.json();
      console.log(result6.totalRevenue);
      setTotalRevenu(result6.totalRevenue);
      let res7 = await fetch("https://ren-a-car.onrender.com/api/users/count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result7 = await res7.json();
      console.log(result7.users_num);
      setUsersCount(result7.users_num);
      let res8 = await fetch("https://ren-a-car.onrender.com/api/offices/count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result8 = await res8.json();
      console.log(result8.offices_num);
      setOfficesCount(result8.offices_num);
      let res10 = await fetch("https://ren-a-car.onrender.com/api/cars/count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result10 = await res10.json();
      console.log(result10.cars_num);
      setCarsCount(result10.cars_num);
      let res11 = await fetch("https://ren-a-car.onrender.com/api/customers/count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result11 = await res11.json();
      console.log(result11.customers_num);
      setCustomersCount(result11.customers_num);
      let res12 = await fetch("https://ren-a-car.onrender.com/api/reservations/count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let result12 = await res12.json();
      console.log(result12.reservations_num);
      setReservationsCount(result12.reservations_num);
      //
      let thismonth = new Date().getMonth() + 1;
      console.log({ thismonth });
      let res13 = await fetch(
        "https://ren-a-car.onrender.com/api/reservations/totalRevenueOnPeriod",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ month: thismonth }),
        }
      );
      let result13 = await res13.json();
      console.log(result13.totalRevenue);
      if (!result13.totalRevenue) {
        result13.totalRevenue = 0;
      }
      setCurrentMonthRevenue(result13.totalRevenue);
    };
    fetching();
  }, [isCustomerLoggedIn]);
 */
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
