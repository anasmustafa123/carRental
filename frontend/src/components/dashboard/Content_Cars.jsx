import React from "react";
import FullCollection from "./FullCollection";
import { useContext } from "react";
import { dashContext } from "../../contextss/dashboard_context";
export default function Content_Cars() {
  const { getCars } = useContext(dashContext);

  return (
    <FullCollection
      data={["plateId", "model", "color"]}
      content={getCars}
    ></FullCollection>
  );
}
