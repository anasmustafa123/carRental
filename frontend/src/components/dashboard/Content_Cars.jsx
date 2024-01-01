import React from "react";
import FullCollection from "./FullCollection";

export default function Content_Cars() {
  return (
    <FullCollection
      data={["Plate Id", "Model", "Color", "Number of Renting"]}
    ></FullCollection>
  );
}
