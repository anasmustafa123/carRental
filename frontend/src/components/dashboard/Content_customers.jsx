import React from "react";
import FullCollections from "./FullCollection";

export default function Content_customers() {
  return (
    <>
      <FullCollections data={["Id", "Customer name", "Car Rented", "passport Details"]}></FullCollections>
    </>
  );
}
