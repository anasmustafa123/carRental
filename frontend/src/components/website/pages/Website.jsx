import React from "react";
import Website_HomePage from "./Website_HomePage";
import Website_Navbar from "./Website_Navbar";
import CarsPage from "./CarsPage";
import "../../../css/website_style.css";

export default function Website() {
  return (
    <>
      <main> 
        <article>
          <Website_Navbar></Website_Navbar>
          <Website_HomePage></Website_HomePage>
          <CarsPage></CarsPage>
        </article>
      </main>
    </>
  );
}
