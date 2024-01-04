import React from "react";
import FullCollections from "./FullCollection";
import { useContext } from "react";
import { dashContext } from "../../contextss/dashboard_context";
export default function Content_customers() {
  const { getCustomers } = useContext(dashContext);
  return (
    <>
      <FullCollections
        data={["customerId", "name", "passportInfo", "address"]}
        content={getCustomers}
      ></FullCollections>
    </>
  );
}
