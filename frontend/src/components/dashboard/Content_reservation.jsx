import React from "react";
import FullCollection from "./FullCollection";
import { useContext } from "react";
import { dashContext } from "../../contextss/dashboard_context";
export default function Content_reservation() {
  const { getReservations } = useContext(dashContext);

  return (
    <FullCollection
      data={[
        "customerId",
        "name",
        "payment",
        "plateId",
        "year",
        "seatAmount",
        "startDate",
        "endDate",
      ]}
      content = {getReservations}
    ></FullCollection>
  );
}
