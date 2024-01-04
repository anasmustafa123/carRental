import React from "react";
import Website_HomePage from "./Website_HomePage";
import Website_Navbar from "./Website_Navbar";
import CarsPage from "./CarsPage";
import "../../../css/website_style.css";
import { useState } from "react";
export default function Website() {
  const [cars, setCars] = useState([]);
  return (
    <>
      <main>
        <article>
          <Website_Navbar></Website_Navbar>
          <Website_HomePage setCars={setCars}></Website_HomePage>
          <CarsPage cars={cars}></CarsPage>
        </article>
      </main>
    </>
  );
}
