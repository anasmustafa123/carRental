import React from "react";
import FullCollection from "./FullCollection";
export default function Content_reservation() {
  return (
    <FullCollection
      data={[
        "Customer",
        "Name",
        "Model",
        "Plate Id",
        "customer",
        "Id",
        "Price",
        "Start Date",
        "End Date",
      ]}
    ></FullCollection>
  );
}
